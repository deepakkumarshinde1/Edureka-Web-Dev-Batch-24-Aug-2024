import { useState } from "react";
import TodoList from "./TodoList";

function TodoInput() {
  // let [value, setValue] = useState(0); // number, string, boolean, null, [], {}
  let [list, setList] = useState([]);
  let [inputValue, setInputValue] = useState("");

  let addNewTodo = (event) => {
    let _list = [...list]; // deep copy
    _list.unshift(inputValue); // adding input data to array from start
    setList(_list);

    setInputValue(""); // reset input value
  };

  let handelInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <section className="flex">
        <input
          type="text"
          className="outline-none w-[30rem]"
          placeholder="Enter Todo Item"
          onChange={handelInputChange}
          value={inputValue}
        />
        <button
          onClick={addNewTodo}
          className=" bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 cursor-pointer"
        >
          Add
        </button>
      </section>
      <section>
        <TodoList list={list} />
      </section>
    </>
  );
}

export default TodoInput;

// hooks => function in react that handles complex logic
// every hook starts with "use"
// state => useState
// useState(0) => returns an array with 2 elements [value, function]
// value => state variable
// function => function to update the state variable
// whenever state is updated component re-renders

// One way data binding
// to bottom
