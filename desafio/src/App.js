import './styles.css';
import { FaFilter}  from 'react-icons/fa';
import React from 'react';
import Bar from './components/graphic/bar.js'
import Scatter from './components/graphic/scatter.js'

//Estrutura geral
function App() {
  return (
    <>
      <div className="container">
      
      <div className="topBar"></div> 
    
      <div>
        <h1 className="title">Dashboard</h1>
        <h2 className="subTitle">Desafio Técnico Frontend</h2>
      </div>
      <button className="buttonSearch">
        <FaFilter style={{marginRight: 8}} size={12} color="#FFF"/>
        Filtrar
      </button>
      
      <main className="main">
        <Bar/>
        <Scatter/>
      </main>
    
    
    </div>
    </>
    
  );
}

export default App;
