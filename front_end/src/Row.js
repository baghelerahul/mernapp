let Row=(props)=>{
    let item=props.item
    let del=props.del
    return(
        <tr>
                        <td>{item.name}</td>
                        <td>{item._id}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.gender}</td>
                        <td>{item.dob}</td>
                        <td><button onClick={()=>del(item._id)}>delete</button></td>
                        <td><button onClick={()=>upd(item._id)}>update</button></td>
                        
                    </tr>
    )
}
export default Row;