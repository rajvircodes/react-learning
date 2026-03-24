import { useState } from "react";
function TodoInput({ onAdd }) {
  const [text, settext] = useState("");

  function handleAdd() {
    if(text.trim() === "") return
    onAdd(text)
    settext("")
  }

  return (
    <>
      <input 
      type="text" 
      value={text} 
      placeholder="Enter Your task"
      onChange={(e) => settext(e.target.value)
      }/>
      <button onClick={handleAdd}>Add Task</button>
    </>
  );
}

export default TodoInput;
