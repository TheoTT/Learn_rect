import logo from './logo.svg';
import './App.css';
import './learn_02_props与state使用/ControlPanel.js'
// import ControlPanel from './learn_02_props与state使用/ControlPanel.js';
// import ControlPanel from './Learn_03_flux与redux/flux/views/ControlPanel.js'
import ControlPanel from './Learn_03_flux与redux/redux/views/ControlPanel.js'



function App() {
  const names = ['li', 'he', 'hu']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul> */}
        <ControlPanel/>
      </header>
    </div>
  );
}

export default App;
