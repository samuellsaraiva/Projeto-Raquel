import './styles.css';
import { FaFilter, FaInfoCircle}  from 'react-icons/fa';

function App() {
  return (
    
    <div className="container">
      <div className="topBar"> {/* Ajeitar melhor */}</div> 
    
      <div>
        <h1 className="title">Dashboard</h1>
        <h2 className="subTitle">Desafio Técnico Frontend</h2>
      </div>
      
      <button className="buttonSearch">
        <FaFilter style={{marginRight: 8}} size={12} color="#FFF"/>
        Filtrar
      </button>
      
      
      <main className="main">
        <div className="barGraph">
          <div className='titleGraph'>
            Barras
            <button className='info'> 
              <FaInfoCircle size={15} color="#19D7AA"/>
            </button>
          </div>
        

        </div>

        <div className="scatterGraph">
        <div className='titleGraph'>
            Scatter
            <button className='info'> 
              <FaInfoCircle size={15} color="#19D7AA"/>
            </button>
          </div>
        

        </div>
      </main>
    
    
    </div>
  );
}

export default App;
