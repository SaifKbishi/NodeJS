import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World from React App.js
        </p>
        <br/>
        <Movies/>
      </header>
    </div>
  );
}

export default App;
