import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
function App() {
    const cards = data.map((info) => {
        return (
            <Card
                key = {info.id}
                img ={info.coverImg}
                star ={info.star}
                vote ={info.vote}
                country ={info.country}
                content ={info.content}
                price ={info.price}
                available ={info.available}
            ></Card>
        )
    })
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="feature">
          {cards}
      </div>
    </div>
  );
}

export default App;
