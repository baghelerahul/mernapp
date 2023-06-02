import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

let Update=()=>{
    let navigate=useNavigate()
    let urlparam=useParams()
    let [data,setData]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/databyid/${urlparam.id}`).then((res)=>{
            setData(res.data)
        })
    },[])

    let upd=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let update=()=>{
        axios.put("http://localhost:5000/upd",data).then(()=>{
            navigate("/")
        })
    }
    return(
        <div>
             <input type="text" onChange={upd} name="_id"/>
        <input type="text" onChange={upd} name="name"/>
        <input type="email" onChange={upd} name="email"/>
        <input type="password" onChange={upd} name="password"/>
        <input type="radio" onChange={upd} name="gender" value="male"/>male
        <input type="radio" onChange={upd} name="gender" value="female"/>female
        <input type="date" onChange={upd} name="dob"/>
        <button onClick={update}>update</button>
        </div>
    )
}
export default Update