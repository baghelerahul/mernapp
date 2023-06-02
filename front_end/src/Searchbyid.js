import { useRef,useState } from "react";
import axios from "axios";

 let Searchbyid=()=>{
    let [data,setData]=useState()
    let sfr=useRef()
    let fun=()=>{

        let data=sfr.current.value
        axios.get(`http://localhost:5000/databyid/${data}`).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(<div>
        <div>
            <input type='search' name="_id" ref={sfr}/>

            <button onClick={fun}>getdat</button>
        </div>
        {!data&&<div>record not found</div>}
        {data&&<div>
        <div>name:{data.name}</div>
        <div>phno:{data.phno}</div>
        <div>email:{data.email}</div>
        </div>}
    </div>)
}

export default Searchbyid;