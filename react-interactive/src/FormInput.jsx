import { useState } from "react";

function FormInput({ value }) {
  // let theNewValue = value; // JS Days
  const [theNewValue, setTheNewValue] = useState(value); // React Days

  // Create an input and button element
  function handleClick() {
    // console.log("handleClick:", value);
  }

  function handleOnchange(e) {
    value = e.target.value;
    // theNewValue = e.target.value; // JS Days
    setTheNewValue(e.target.value)
    console.log("e.target.value:", e.target.value);
    console.log("value:", value);
    console.log("theNewValue:", theNewValue);
    // console.log("handleOnchange:", e.target.value);
  }

  return (
    <>
      <p>{theNewValue}</p>
      <input type="text" value={theNewValue} onChange={handleOnchange} />
      <button onClick={handleClick}>Log</button>
    </>
  );
}

export default FormInput;
