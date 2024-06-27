import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import data from './data.js'
import Card from './components/Card.js';

function App() {
  let cards = data.map(item=>{
      return (
        <Card item={item}></Card>
      )
  })
  return (
    <div className="App">
    <Navbar></Navbar>
    <div className='body'>
        {cards}
    </div>
    </div>
  );
}

export default App;
