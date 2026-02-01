import { useState } from "react";

export default function MultiProgressBar() {
  const [vals, setVals] = useState([30, 60, 80]);

  const avg = vals.reduce((a,b)=>a+b,0)/vals.length;

  return (
    <div className="card">
      <h2>Progress</h2>

      {vals.map((v,i)=>(
        <div key={i}>
          <input type="number" value={v}
            onChange={e=>{
              const c=[...vals]; c[i]=+e.target.value; setVals(c);
            }}
          />
          <div style={{
            height:10,
            background:"#e5e5ea",
            borderRadius:10
          }}>
            <div style={{
              width:`${v}%`,
              height:"100%",
              borderRadius:10,
              background:v<40?"#ff3b30":"#34c759"
            }} />
          </div>
        </div>
      ))}

      <div style={{ marginTop:10 }}>
        <div style={{ height:14, background:"#007aff", width:`${avg}%`, borderRadius:10 }} />
      </div>
    </div>
  );
}
