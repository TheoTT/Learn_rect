import logo from './logo.svg';
import './App.css';
import './learn_02_props与state使用/ControlPanel.js'
import ControlPanelBase from './learn_02_props与state使用/ControlPanel.js';
import ControlPanelFlux from './Learn_03_flux与redux/flux/views/ControlPanel.js'
import ControlPanelReduxBase from './Learn_03_flux与redux/redux/views/ControlPanel.js'
import ControlPanelReactRedux from './Learn_03_flux与redux/react-redux/views/ControlPanel.js'
import store from './Learn_03_flux与redux/react-redux/store/Store.js'

// import ControlPanelReduxContext from './Learn_03_flux与redux/redux-context/views/ControlPanel.js'
// import Provider from './Learn_03_flux与redux/redux-context/Provider.js'
import {Provider} from 'react-redux';


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
        <br/>
        <h3>使用react基础props、state</h3>
        <ControlPanelBase/>
        <br/>
        <h3>使用react + flux</h3>
        <ControlPanelFlux/>
        <br/>
        <h3>使用react + redux</h3>
        <ControlPanelReduxBase/>
        <br/>
        <h3>使用react + react-reduce</h3>
        <Provider store={store}>
          <ControlPanelReactRedux/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
