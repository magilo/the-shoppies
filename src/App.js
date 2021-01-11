import logo from './logo.svg';
import './App.css';
import { Titlebar, Nominees, Search, Results } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titlebar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Nominees />
        <Search />
        <Results />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          GREAT
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          hello
        </a>
      </header>
    </div>
  );
}

export default App;
