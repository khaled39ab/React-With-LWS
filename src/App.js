import './App.css';
import { Routes, Route } from 'react-router-dom';
import Class from './page/Class';
import Navbar from './page/Navbar';
import Home from './page/Home';
import Form from './page/Form';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/class" element={<Class></Class>}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
