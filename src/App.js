import './App.css';
import { Routes, Route } from 'react-router-dom';
import Class from './page/Class';
import Navbar from './page/Navbar';
import Home from './page/Home';
import Form from './page/Form';
import HttpReq from './page/HttpReq';
import QuotesGenerator from './HttpReq/QuotesGenerator';
import More from './HttpReq/More';
import Others from './page/Others';
import CardGroup from './page/cards/CardGroup';
import AllProject from './miniProject/AllProject';
import TodoHome from './page/todoApp/TodoHome';
import RenderingHome from './conditional-rendering/RenderingHome';
import Countries from './HttpReq/Countries';
import Hook from './page/hook/Hook';
import DynamicRoute from './page/dynamic-routing/DynamicRoute';
import Error from './page/Error';
import Blogs from './page/dynamic-routing/Blogs';
import Contact from './page/dynamic-routing/Contact';
import Details from './page/dynamic-routing/Details';
import QuerySearch from './page/dynamic-routing/queryParameter/QuerySearch';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/class" element={<Class></Class>}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/http" element={<HttpReq></HttpReq>}></Route>
        <Route path="/get" element={<Countries></Countries>}></Route>
        <Route path="/post" element={<QuotesGenerator></QuotesGenerator>}></Route>
        <Route path="/more" element={<More></More>}></Route>
        <Route path="/others" element={<Others></Others>}></Route>
        <Route path="/card" element={<CardGroup></CardGroup>}></Route>
        <Route path="/all-project" element={<AllProject></AllProject>}></Route>
        <Route path="/conditional-rendering" element={<RenderingHome />}></Route>
        <Route path="/todo" element={<TodoHome></TodoHome>}></Route>
        <Route path='/hook' element={<Hook/>}></Route>
        <Route path='/dynamic-home' element={<DynamicRoute/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/blogs/:title' element={<Details></Details>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/query-search' element={<QuerySearch></QuerySearch>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </>
  );
}

export default App;
