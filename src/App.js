import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import { selectCounter } from './redux/features/counter';

function App() {
  const counter = useSelector(selectCounter);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {counter}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter version={'100'} />
      </header>
    </div>
  );
}

export default App;
