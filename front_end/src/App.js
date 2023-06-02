import { BrowserRouter,Route,Routes } from "react-router-dom";
import Det from './Det';
import Reg from './Reg';
import Nav from "./Nav";
import Searchbyid from "./Searchbyid";
let App=()=>{
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Det/>}/>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="/getdata" element={<Searchbyid/>}/>
            <Route path="/update/:id" element={<update/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}
export default App;