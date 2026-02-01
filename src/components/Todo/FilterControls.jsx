export default function FilterControls({ setFilter }) {
  return (
    <div className="btn-row" style={{ marginTop:10 }}>
      <button className="btn-secondary" onClick={()=>setFilter("all")}>All</button>
      <button className="btn-secondary" onClick={()=>setFilter("active")}>Active</button>
      <button className="btn-secondary" onClick={()=>setFilter("completed")}>Done</button>
    </div>
  );
}
