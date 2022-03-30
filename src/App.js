import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date();
  const year = date.getFullYear(); 
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <footer>
        Divyansh_bhatt
        ©{year}
      </footer>
    </div>
  );
}

export default App;
