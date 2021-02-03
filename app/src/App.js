import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
    </div>
  );
}

export default App;
