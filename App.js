import logo from './logo.svg';
import './App.css';
import Home from './router/home';
import About from './router/about';
import { Route,Routes } from 'react-router-dom';
import Nar from './router/nav';
import Card from './router/card';
import Product from './router/product'



function App() {
  return (
    <div className="App">
       <Nar/>
  <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/nav'  element={<Nar/>}></Route>
    <Route path='/card' element={<Card/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    
  </Routes>
 
    </div>
  );
}

export default App;