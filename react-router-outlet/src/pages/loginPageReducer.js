import { useReducer } from 'react';

function loginPageReducer(state, action) {
  console.log("action: ", action);

  console.log("🔴 BEFORE", "state: ", state);

  switch (action.type) {
    // IF action.type is 'EDIT_EMAIL'
    //    THEN change the value of state.email from action.payload
    case "EDIT_EMAIL":
      // state.email = action.payload;
      return {
        ...state, // 1️⃣ Spread the old states
        email: action.payload, // 2️⃣ Add the email
      }; // 3️⃣ Return the next (new) state

    // IF action.type is 'EDIT_PASSWORD'
    //    THEN change the value of state.password to action.payload
    case "EDIT_PASSWORD":
      // state.password = action.payload;
      return {
        ...state,
        password: action.payload,
      };

    // IF action.type is 'RESET'
    //    THEN change the value of state.email and state.password into empty string
    case "RESET":
      return {
        ...state,
        email: "",
        password: "",
      };

    default:
      return state; // for safety purposes hihi
  }
}

function useLoginPageReducer() {
  return useReducer(loginPageReducer, { email: '', password: '' });
}

export default useLoginPageReducer;

