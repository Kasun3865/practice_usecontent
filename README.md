
<h1 align="center">React useContext Hook</h1>

This demonstrates the use of the `useContext` hook in React to manage and share state across multiple components in a simple and structured way. It uses a global context to pass down a username and a function to update it.

## Features

- A shared global context (`myName`) to manage the `userName` state.
- A multi-component structure (`First`, `Second`, and `Third`) showcasing how data can flow through deeply nested components using `useContext`.
- A user input field to dynamically update the `userName` displayed in the header.

## Project Structure

```
src/
├── App.js              # Main app component defining context and managing state
├── Components/
│   ├── First.js        # A simple component that renders Second.js
│   ├── Second.js       # A simple component that renders Third.js
│   ├── Third.js        # Contains the input field to update userName using context
├── index.js            # Entry point of the application
├── App.css             # Styles for the App component
└── Components/
    └── Component.css   # Styles specific to components
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: Styling the components.

## Setup Instructions

1. **Clone the Repository**:
  
    ```
     git clone https://github.com/Kasun3865/practice_usecontent.git
    ```
   ```bash
   cd practice_usecontent
   ```

3. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

4. **Start the Application**:
   ```bash
   npm start
   ```

   This will start the app and open it in your default browser. If it doesn't, navigate to `http://localhost:3000`.

## How It Works

1. **Context Setup**:
   - A context (`myName`) is created using `React.createContext` in `App.js`.
   - The `myName.Provider` wraps the component tree and provides the `userName` state and its setter function (`setUserName`) as the value.

2. **Using Context**:
   - The `Third` component consumes the `userName` setter function using the `useContext` hook.
   - When a user types into the input field in `Third`, the `userName` value is updated, and this change is reflected in the `App` component's header.

3. **Component Nesting**:
   - `App` → `First` → `Second` → `Third`: The deeply nested `Third` component updates the global context value.

## Screenshots

### Initial View
- Displays "Hello!" in the header.

### User Interaction
- Typing into the input field updates the displayed header text dynamically.

## Future Enhancements

- Add more context usage examples to demonstrate different use cases.
- Improve styling and responsiveness.
- Add a form reset or clear button for demonstration purposes.
