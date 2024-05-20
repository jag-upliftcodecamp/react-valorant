import { useState } from "react";

function TodoList() {
  // READONLY
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  // Create a function to handle the input on change
  // GET the input value from the e.target.value
  // SET the input value to the `item` state variable
  function handleOnChange(e) {
    setItem(e.target.value);
  }

  // Create a function to handle the button
  // GET state variable `item`
  // APPEND (PUSH) it to the `list` state variable
  const addTodoAction = () => {
    const newList = [...list]; // Shallow Copy
    newList.push(item);
    setList(newList);
    // list.push(item);
    console.log("list:", list);
    setItem(""); // To empty the input box
    // setList(list);
  };

  // Create a function to handle the delete button
  // GET the index of the item
  // USE splice to remove the item from the `list`
  // SET the new value of `list`
  const removeAction = (index) => {
    const newList = [...list];
    const filteredList = newList.filter((item, id) => index !== id);
    setList(filteredList);
  };

  return (
    <div>
      <div>
        <input type="text" value={item} onChange={handleOnChange} />{" "}
        <button onClick={addTodoAction}>Add Todo</button>
      </div>
      <div>
        <ul>
          {list.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeAction(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
