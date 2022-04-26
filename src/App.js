import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Calculadora from './pages/calculadora/Calculadora';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/calculadora' element={<Calculadora />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
