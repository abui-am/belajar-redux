import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter version={'100'} />
        </header>
      </div>
    </Provider>
  );
}

export default App;
