import logo from './logo.svg';
import './App.css';
import Clock from './example/Clock.js'
import Zchart from './example/Zchart.js'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock></Clock>
        <p>
          山东滕州现低俗婚闹，一半裸新郎被吊到半空遭高压水枪喷射
        </p>
        <Zchart></Zchart>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
