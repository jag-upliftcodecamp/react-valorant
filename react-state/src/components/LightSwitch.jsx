import { useState } from "react";

function LightSwitch() {
  // CREATE Image and button
  // CREATE State variable `isLightOn` initial value to: false
  const [isLightOn, setIsLightOn] = useState(false);

  // CREATE a function that toggles the state
  function switchLight() {
    // IF `isLightOn` is false
    //   THEN`isLightOn` set to true
    // OTHERWISE
    //   SET `isLightOn` to false
    setIsLightOn(!isLightOn);
  }

  // IF `isLightOn` is true
  //   THEN (?) add text 'ON'
  // OTHERWISE (:) add text 'OFF'

  return (
    <>
      <p>isLightOn: {isLightOn ? "true" : "false"}</p>
      <div>{isLightOn ? <img src="on.svg" /> : <img src="off.svg" />}</div>
      <button type="button" onClick={switchLight}>
        Turn {isLightOn ? "OFF" : "ON"}
      </button>
    </>
  );
}

export default LightSwitch;
