import './App.css';
import CardComponent from './Components/Card/card.component';
import cardData from './Components/Card/Constants'
function App() {
  return (
    <div className="App">
      <CardComponent cardData = {cardData}/>
    </div>
  );
}

export default App;
