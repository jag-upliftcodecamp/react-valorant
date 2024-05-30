//              👇 Object: type, payload
const state = {
  email: "",
  password: "",
};

function login(action) {
  console.log("action: ", action);

  console.log("🔴 BEFORE", "state: ", state);

  switch (action.type) {
    // IF action.type is 'EDIT_EMAIL'
    //    THEN change the value of state.email from action.payload
    case "EDIT_EMAIL":
      state.email = action.payload;
      break;

    // IF action.type is 'EDIT_PASSWORD'
    //    THEN change the value of state.password to action.payload
    case "EDIT_PASSWORD":
      state.password = action.payload;
      break;

    // IF action.type is 'RESET'
    //    THEN change the value of state.email and state.password into empty string
    case "RESET":
      state.password = "";
      state.email = "";
      break;

    default:
    // Do nothing
  }

  // IF no other action.type
   //    THEN do nothing
  console.log("🟢 AFTER", "state: ", state);
}

// Run the function
login({
  type: "EDIT_PASSWORD", // action
  payload: "password", //
});

login({
  type: "EDIT_EMAIL",
  payload: "juandelacruz@gmail.com",
});

login({
  type: 'RESET',
})