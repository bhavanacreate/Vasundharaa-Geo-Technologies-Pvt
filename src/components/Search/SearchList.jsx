import { useState } from "react";
const names = ["Gowtham", "Rahul", "Ankit", "Suresh"];

export default function SearchList() {
  const [q, setQ] = useState("");

  const highlight = t =>
    t.split(new RegExp(`(${q})`,"gi")).map((p,i)=>
      p.toLowerCase()===q.toLowerCase()
        ? <b key={i} style={{color:"#007aff"}}>{p}</b>
        : p
    );

  const filtered = names.filter(n=>n.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="card">
      <h2>Search</h2>
      <input onChange={e=>setQ(e.target.value)} />
      <p>{filtered.length} results</p>
      {filtered.map(n=><div key={n}>{highlight(n)}</div>)}
    </div>
  );
}
