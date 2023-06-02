import {Link} from "react-router-dom";

let Nav=()=>{
    return(<div>
        <Link to="/">userdet</Link>
        <Link to="/reg">register</Link>
        <Link to="/getdata">Getdata</Link>
    </div>)
}
export default Nav;