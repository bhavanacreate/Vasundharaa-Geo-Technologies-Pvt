import { useState } from "react";
import TodoApp from "./components/Todo/TodoApp";
import UserForm from "./components/Form/UserForm";
import MultiProgressBar from "./components/Progress/MultiProgressBar";
import CountdownTimer from "./components/Timer/CountdownTimer";
import SearchList from "./components/Search/SearchList";

export default function App() {
  const [active, setActive] = useState("todo");

  return (
    <div className="app">
      {/* iOS-style section selector */}
      <div className="segment">
        <button
          className={active === "todo" ? "segment-active" : ""}
          onClick={() => setActive("todo")}
        >
          Todo
        </button>

        <button
          className={active === "form" ? "segment-active" : ""}
          onClick={() => setActive("form")}
        >
          Form
        </button>

        <button
          className={active === "progress" ? "segment-active" : ""}
          onClick={() => setActive("progress")}
        >
          Progress
        </button>

        <button
          className={active === "timer" ? "segment-active" : ""}
          onClick={() => setActive("timer")}
        >
          Timer
        </button>

        <button
          className={active === "search" ? "segment-active" : ""}
          onClick={() => setActive("search")}
        >
          Search
        </button>
      </div>

      {/* Render only ONE component */}
      {active === "todo" && <TodoApp />}
      {active === "form" && <UserForm />}
      {active === "progress" && <MultiProgressBar />}
      {active === "timer" && <CountdownTimer />}
      {active === "search" && <SearchList />}
    </div>
  );
}
