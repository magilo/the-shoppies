import './App.css';
import { Titlebar, Nominations } from './components'

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <header className="App-header">
          <Titlebar />
        </header>
        <section className="App-section">
          <Nominations />
        </section>
        <footer>
          <a
            className="App-link"
            href="https://github.com/magilo/the-shoppies"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
        </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

/*
<p>
          Edit <code>src/App.js</code> and save to reload.
          NEW TEST
        </p>
*/
