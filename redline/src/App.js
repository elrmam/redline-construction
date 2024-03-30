import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';





function App() {
  return (
    <div className="App" >
        <BrowserRouter >
          <Navbar/>
          <Switch>
            <Route exact path={`/`} component={HomePage}/>
          </Switch>
          <Footer/>
        </BrowserRouter>  
    </div>
  );
}

export default App;
