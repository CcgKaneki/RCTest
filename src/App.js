import baby from './baby.svg';
import './App.css';
import Clock from './example/Clock.js'
import Zchart from './example/Zchart.js'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={baby} className="App-logo" alt="logo" />
        
        <Zchart></Zchart>

        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
