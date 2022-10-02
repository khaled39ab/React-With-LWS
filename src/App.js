import './App.css';
import { Routes, Route } from 'react-router-dom';
import Class from './class/Class';
import MultipleInput from './Form/MultipleInput';
import Signup from './Form/Signup';
import SingleForm from './Form/SingleForm';
import Navbar from './page/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/class" element={<Class></Class>}></Route>
      </Routes>
      <SingleForm></SingleForm>
      <MultipleInput></MultipleInput>
      <Signup></Signup>
    </div>
  );
}

export default App;
