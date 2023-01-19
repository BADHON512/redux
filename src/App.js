
import './App.css';
import Home from './Component/Home';

function App() {
  const value= 70;
  return (
    <div className="App">
    <Home value={value}/>
    </div>
  );
}

export default App;
