import logo from './logo.svg';
import './App.css';
import Info from './components/info/Info';


function App() {
  const info = {
    photoUrl : '/photo.jpg',
    infoName : 'Nguyen Song Nghiem',
    infoPosition : 'Fullstack Developer',
    infoEmail : 'nguyensongnghiem@gmail.com'
   
  }
  

  return (
    <div className="App">
      <Info info = {info} ></Info>
    </div>
  );
}

export default App;
