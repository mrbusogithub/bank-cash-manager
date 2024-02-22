import React, { useState } from "react";
import { useBalance } from "./store/BalanceContext"; // Import the custom hook to access the global state
import "./App.css";
import Buttons from "./components/Buttons"; // Import the reusable button component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS styles

const App = () => {
  // To use the custom hook to access the global state and dispatch function
  const { state, dispatch } = useBalance();

  // To create a local state variable 'amount' to store the input amount
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    // Dispatch an action to increase the balance by the specified amount
    dispatch({ type: "DEPOSIT", amount: parseFloat(amount) });
    setAmount(""); // Reset the input field
  };

  const handleWithdraw = () => {
    // Dispatch an action to decrease the balance by the specified amount
    dispatch({ type: "WITHDRAW", amount: parseFloat(amount) });
    setAmount(""); // Reset the input field
  };

  const handleAddInterest = () => {
    // Dispatch an action to increase the balance by 5%
    dispatch({ type: "ADD_INTEREST" });
  };

  const handleCharges = () => {
    // Dispatch an action to decrease the balance by 15%
    dispatch({ type: "CHARGES" });
  };

  return (
    <div style={{ background: "lightslategray" }}>
      <div className="container">
        {/* Application title */}
        <h1 className="my-5" style={{ color: "whitesmoke" }}>
          Cash Manager
        </h1>
        {/* To display the balance */}
        <p className="mb-4" style={{ fontSize: "30px", color: "green" }}>
          Balance: R{state.balance.toFixed(2)}
        </p>

        {/* Input for entering the amount */}
        <div className="mb-3">
          <label style={{ color: "white", fontSize: "18px" }}>
            Enter Amount here:{" "}
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Deposit button */}
        <div className="mb-3">
          <div>
            <div>
              <label style={{ color: "darkgreen" }}>
                Click here to Deposit
              </label>
            </div>
          </div>
          <Buttons text="Deposit" onClick={handleDeposit} color="success" />
        </div>

        {/* Withdraw button */}
        <div className="mb-3">
          <div>
            <label style={{ color: "yellow" }}>Click here to Withdraw</label>
          </div>
          <Buttons text="Withdraw" onClick={handleWithdraw} color="warning" />
        </div>

        {/* Add Interest button */}
        <div className="mb-3">
          <div>
            <label style={{ color: "blue" }}>Click here to add Interest</label>
          </div>
          <Buttons
            text="Add Interest"
            onClick={handleAddInterest}
            color="primary"
          />
        </div>

        {/* Charges button */}
        <div>
          <div>
            <label style={{ color: "red" }}>
              Click here to pay bank charges
            </label>
          </div>
          <Buttons text="Charges" onClick={handleCharges} color="danger" />
        </div>
      </div>
    </div>
  );
};

export default App;
