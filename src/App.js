import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './component/About';
import Contract from './component/Contrac';

import Home from './component/Home';
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services';

const App = () => {
  return (
   <>

   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contract' element={<Contract/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='*' element={<Home/>}/>
     
   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App
