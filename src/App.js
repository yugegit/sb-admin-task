import './App.css';
import SideBar from './Components/LeftSection';
import DashBoard from './Components/DashBoard';
import Flex from './Components/Flex';
import Login from './Components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {

  let data = {
    earning : "40,000",
    annual : "2,40,000",
    task : "20",
    pending: "26"
  }
  return <>
  <Router>
    <div style={{display : "grid",gridTemplateColumns : "16% 80%"}}>
  <div>
  <SideBar/>
  

  </div>

  <div>
  <Routes>
    <Route path='/dashboard' element={<DashBoard data = {data}/>}/>
    <Route path='/flex' element = {<Flex/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path='/' element={<DashBoard data = {data}/>}/>


  </Routes>
  </div>
  </div>
  
  </Router>
  </>
}

export default App;
