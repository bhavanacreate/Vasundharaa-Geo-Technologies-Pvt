export default function TodoItem({ task, toggle }) {
  return (
    <div style={{ display:"flex", alignItems:"center", marginTop:8 }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggle(task.id)}
        style={{ width:18, height:18, marginRight:10 }}
      />
      <span style={{
        textDecoration: task.completed ? "line-through" : "none",
        color: task.completed ? "#8e8e93" : "#000"
      }}>
        {task.text}
      </span>
    </div>
  );
}
