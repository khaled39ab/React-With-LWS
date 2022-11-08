import './App.css';
import { Routes, Route } from 'react-router-dom';
import Class from './page/Class';
import Navbar from './page/Navbar';
import Home from './page/Home';
import Form from './page/Form';
import HttpReq from './page/HttpReq';
import Country from './HttpReq/Country';
import QuotesGenerator from './HttpReq/QuotesGenerator';
import More from './HttpReq/More';
import Others from './page/Others';
import CardGroup from './page/cards/CardGroup';
import AllProject from './miniProject/AllProject';
import ConditionalRendering from './conditional-rendering/ConditionalRendering';
import TodosApp from './page/todosApp/TodosApp';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/class" element={<Class></Class>}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/http" element={<HttpReq></HttpReq>}></Route>
        <Route path="/get" element={<Country></Country>}></Route>
        <Route path="/post" element={<QuotesGenerator></QuotesGenerator>}></Route>
        <Route path="/more" element={<More></More>}></Route>
        <Route path="/others" element={<Others></Others>}></Route>
        <Route path="/card" element={<CardGroup></CardGroup>}></Route>
        <Route path="/all-project" element={<AllProject></AllProject>}></Route>
        <Route path="/conditional-rendering" element={<ConditionalRendering></ConditionalRendering>}></Route>
        <Route path="/todos" element={<TodosApp></TodosApp>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
