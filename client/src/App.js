import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/views/Home/Home"
import About from "./components/About/About"
import Detail from "./components/views/Detail/Detail"
import Create from "./components/views/Create/Create"
import Landing from "./components/views/Landing/Landing"


function App() {
  return (

    <div className='App'>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
        <Route path="/create" element ={<Create/>}/>
      </Routes>
      </div>
  );
}


export default App;
