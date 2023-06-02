import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
 let Reg=()=>{
    let navigate=useNavigate()
    let [data,setData]=useState({})
    let upd=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    let store=()=>{
        axios.post("http://localhost:5000/add",data).then(()=>{
            navigate('/')
        })
    }
    return(<div>
        <input type="text" onChange={upd} name="_id"/>
        <input type="text" onChange={upd} name="name"/>
        <input type="email" onChange={upd} name="email"/>
        <input type="password" onChange={upd} name="password"/>
        <input type="radio" onChange={upd} name="gender" value="male"/>male
        <input type="radio" onChange={upd} name="gender" value="female"/>female
        <input type="date" onChange={upd} name="dob"/>
        <button onClick={store}>save</button>
    </div>)
 }
 export default Reg;