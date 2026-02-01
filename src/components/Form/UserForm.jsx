import { useState } from "react";

export default function UserForm() {
  const [data, setData] = useState({ name:"", email:"", password:"" });
  const [err, setErr] = useState({});
  const [show, setShow] = useState(false);

  const submit = () => {
    let e = {};
    if (!data.name) e.name = "Name required";
    if (!/\S+@\S+\.\S+/.test(data.email)) e.email = "Invalid email";
    if (data.password.length < 6) e.password = "Min 6 chars";
    setErr(e);
    if (Object.keys(e).length === 0) alert("Submitted");
  };

  return (
    <div className="card">
      <h2>User Form</h2>

      <input placeholder="Name" onChange={e=>setData({...data,name:e.target.value})}/>
      <div className="error">{err.name}</div>

      <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})}/>
      <div className="error">{err.email}</div>

      <input
        type={show?"text":"password"}
        placeholder="Password"
        onChange={e=>setData({...data,password:e.target.value})}
      />
      <button className="btn-secondary" onClick={()=>setShow(!show)}>
        {show?"Hide":"Show"}
      </button>
      <div className="error">{err.password}</div>

      <button onClick={submit}>Submit</button>
    </div>
  );
}
