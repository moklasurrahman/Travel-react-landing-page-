import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from './../pages/home/Home';
import Main from './../components/main/Main';
import Footer from '../components/Footer/Footer';
import Error from './Error';


const Index = () => {
    return (
        <BrowserRouter>
    
        <Navbar/>
    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        

        <Footer/>
        </BrowserRouter>
      )
    }

export default Index