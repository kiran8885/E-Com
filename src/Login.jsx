import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login(){
    var [email,setEmail] = useState("")
    var [password,setPassword] = useState("")
    var navigate = useNavigate()
    async function login(){
        var response = await fetch("https://68871332071f195ca97f29a6.mockapi.io/users")
        var result = await response.json()
        var data = result.find(item=>item.myEmail==email&&item.myPassword==password)
        if(data){
            alert("login successfully")
            navigate("/home")

        }else{
            alert("login failed")
        }

    }
    return(
        <div className="login">
            <h1>Login Here</h1>
            <label className="login__label" htmlFor=" ">Email</label>
            <input className="login__input" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" />
            <label className="login__label" htmlFor="">Password</label>
            <input className="login__input" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" />
            <button className="login__button" onClick={login}>Login</button>
        </div>
    )
}
export default Login