import React, { useState } from 'react'

function Login({setcreds}) {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit=(ev)=>{
    console.log(ev);
    ev.preventDefault();
  }
  const handleOk=(ev)=>{
    console.log(ev);
    setcreds({user, password});
  }
  return (
    <div>
        <h1>Login</h1>
        <form   onSubmit={(ev)=>( handleSubmit )}>
  <div className="form-control mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user} onChange={(ev)=> setuser(ev.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="form-control mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(ev)=> setpassword(ev.target.value)}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={(ev)=>( handleOk )}>Submit</button>
        </form>
    </div>
  )
}

export default Login