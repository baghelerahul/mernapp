import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Row from "./Row";
let Det=()=>{

    let navigate=useNavigate()
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/users").then((res)=>{
            setData(res.data)
        })

    },[])

    let del=(id)=>{
        axios.delete(`http://localhost:5000/del/${id}`).then(()=>{
            axios.get("http://localhost:5000/users").then((res)=>{
                setData(res.data)
            })
        })
    }

    let upd=(id)=>{
        navigate(`/update/${id}`)
    }
    return(<div>
        <table border='2'>
            <tr>
                <th>name</th>
                <th>id</th>
                <th>email</th>
                <th>password</th>
                <th>gender</th>
                <th>dob</th>
                
              
            </tr>
            {
                data.map((item)=>{
                    return(<Row item={item} del={del} upd={upd}/>)
                })
            }
        </table>
    </div>)
}
export default Det;