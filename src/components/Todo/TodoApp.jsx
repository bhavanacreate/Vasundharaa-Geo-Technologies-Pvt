import { useState } from "react";
import TodoItem from "./TodoItem";
import FilterControls from "./FilterControls";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function TodoApp() {
  const [tasks, setTasks] = useLocalStorage("todos", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const add = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  const toggle = (id) =>
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));

  const filtered = tasks.filter(t =>
    filter === "all" ? true :
    filter === "active" ? !t.completed :
    t.completed
  );

  return (
    <div className="card">
      <h2>Todo</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={add}>Add Task</button>

      <FilterControls setFilter={setFilter} />
      {filtered.map(t =>
        <TodoItem key={t.id} task={t} toggle={toggle} />
      )}
    </div>
  );
}
