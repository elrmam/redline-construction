import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Components/Footer';
import CustomNavbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Home';
import Gallery from './Pages/Gallery';
import Aboutus from './Pages/Aboutus';
import PageNotFound from './Pages/NotFound';





function App() {
  return (
    <div className="App" >
        <BrowserRouter>
          <CustomNavbar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer/>
        </BrowserRouter>  
    </div>
  );
}

export default App;
