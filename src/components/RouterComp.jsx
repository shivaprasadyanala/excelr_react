import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Employee from "./Employee";
import Reusable from "./Reusable";
import DemoClassComp from "./DemoClassComp";

const RouterComp = () => {
 return (
  <Router>
   <div>
    <ul>
     <li><Link to="/employee">Employee</Link></li>
     <li><Link to="/reusable">Reuseable</Link></li>
     <li><Link to="/demoComp">RouterComp</Link></li>
    </ul>
    <Routes>
     <Route path="/employee" element={<Employee />} ></Route>
     <Route path="/reusable" element={<Reusable />} ></Route>
     <Route path="/demoComp" element={<DemoClassComp />} ></Route>
    </Routes>
   </div>
  </Router>
 )
}

export default RouterComp;