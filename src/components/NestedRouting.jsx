import { BrowserRouter as Router, Link, Routes, Route, useRouteMatch } from "react-router-dom";
import Reusable from "./Reusable";
import Employee from "./Employee";

const NestedRouting = () => {
 return (
  <Router>
   <Link to="/reusable">reusable</Link>
   <Link to="/employee">employee</Link>
   <Routes>
    <Route path="/reusable" element={<Reusable />}></Route>
    <Route path="/employee" element={<Employee />}></Route>
   </Routes>
  </Router>
 )
}

export default NestedRouting;

