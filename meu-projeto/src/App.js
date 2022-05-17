//import './App.css';
//import {useState} from 'react'
//import SeuNome from './components/SeuNome';
//import Saudacao from './components/Saudacao';
//import OutraLista from './components/OutraLista';
//import Condicional from './components/Condicional';
//import Evento from './components/Evento';
//import Form from './components/Form';
//import SayMyName from './components/SayMyName';
//import Pessoa from './components/Pessoa';
//import Frase from './components/frase';
//import List from './components/List';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
   <Router>
     <ul>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/empresa">Empresa</Link>
       </li>
       <li>
         <Link to="/contato">Contato</Link>
       </li>
     </ul>

     <Routes>
      <Route>
        
      </Route>
    </Routes>
   </Router>
   
  );
}

export default App;
