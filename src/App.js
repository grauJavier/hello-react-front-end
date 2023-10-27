import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Greetings />
      </Provider>
    </div>
  );
}

export default App;
