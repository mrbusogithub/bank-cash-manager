# Bank Cash Manager

Welcome to the Bank Cash Manager ReactJS application! This application manipulates the cash balance on an account using the useContext and useReducer hooks. All data/state is stored in a global state manager using these hooks.

## Features

- Four descriptive buttons:
  - Withdraw
  - Deposit
  - Add Interest
  - Charges
- Styling with React Bootstrap.
- Reusable button components.
- An input box to enter the amount for deposit or withdrawal.
- Global state with an initial balance of `0`.
- Display of the balance on the UI, updating when an account change is made.

### Button Actions

- **Deposit:**
  - Increases the balance amount by the input value from the input box.

- **Withdraw:**
  - Decreases the balance amount by the input value from the input box.

- **Add Interest:**
  - Increases the balance amount by 5%.

- **Charges:**
  - Decreases the balance amount by 15%.

### User-Friendly Indication

Users may not be aware of the background calculations. The buttons are designed to be user-friendly, indicating the calculated amount.

## Installation

To run the Bank Cash Manager locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/mrbusogithub/bank-cash-manager.git

Navigate to the project directory:

  cd bank-cash-manager

2. Install dependencies:

   npm install

## Usage

To start the application, run the following command in the root directory:

 npm start
