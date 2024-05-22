import { useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isLightOn, setIsLightOn] = useState(false);

  console.log('🟢 Initialize Component: ', count, count2);

  function handleClick() {
    console.log('⭕ BEFORE CLICK: ', count, count2);
    setCount(count + 1);
    console.log('🍆 AFTER CLICK: ', count, count2);
  }

  function handleChange() {
    setIsLightOn(!isLightOn);
  }

  useEffect(() => {
    console.log('🛡️ USE EFFECT: ', count);
  }, []);

  useEffect(() => {
    // WHEN the isLightOn is true
    // ADD the count2 plus 1
    if (isLightOn === true) {
      setCount2(count2 + 1);
    }
  }, [isLightOn]);

  return (
    <>
      <h1>COUNT 1: {count}</h1>
      <h2>COUNT 2: {count2}</h2>
      <button type="button" onClick={handleClick}>
        Click
      </button>
      <input type="checkbox" checked={isLightOn} onChange={handleChange} />{' '}
      isLightOn
    </>
  );
}

export default MyComponent;
