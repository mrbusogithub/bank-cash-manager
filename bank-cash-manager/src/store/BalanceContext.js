import React, { createContext, useContext, useReducer } from "react";

// To create a context to manage global state
const BalanceContext = createContext();

// To define the initial state for the balance
const initialState = { balance: 0 };

//To define a reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      // To increase the balance by the specified amount
      return { balance: state.balance + action.amount };
    case "WITHDRAW":
      // To decrease the balance by the specified amount
      return { balance: state.balance - action.amount };
    case "ADD_INTEREST":
      // To increase the balance by 5%
      return { balance: state.balance * 1.05 };
    case "CHARGES":
      // To decrease the balance by 15%
      return { balance: state.balance * 0.85 };
    default:
      return state;
  }
};

// To create a provider component to wrap the app with the context
export const BalanceProvider = ({ children }) => {
  // To initialize state and dispatch using the defined reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // To wrap the entire application with the BalanceContext.Provider to make the global state accessible to all components within the context.
  return (
    <BalanceContext.Provider value={{ state, dispatch }}>
      {/* The 'children' prop represents the child components rendered within the BalanceProvider */}
      {children}
    </BalanceContext.Provider>
  );
};

// To create a custom hook to access the balance context
export const useBalance = () => {
  // To use the useContext hook to retrieve the BalanceContext
  const context = useContext(BalanceContext);

  // To check if the context is available; if not, throw an error
  if (!context) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }

  // Return the context, which contains the global state and dispatch function
  return context;
};
