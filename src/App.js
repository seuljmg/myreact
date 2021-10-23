import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/hOxMhcF.png" className="App-logo" alt="logo"/>
        <p>
          Anong <b> PAK </b> ang mataas tumalon?
          <br/>
          <b> Edi <i> TIPAKLONG. </i> </b>
        </p>
        <Button/>
        <a
          className="App-link"
          href="https://www.lazada.com.ph/unipak-121004675/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Uni-Pak Sardines
        </a>
      </header>
    </div>
  );
}

export default App;
