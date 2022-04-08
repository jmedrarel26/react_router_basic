import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "../views/Home/index";
import Four0Four from "../views/404";

export default function Routeses() {
  return (
    <Router>
      <Routes>
        <Route path="home" element ={<Home/>} exact/>
        <Route path="*" element = {<Four0Four/>}/> 
      </Routes>
    </Router>
  );
}
