import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EditingPage from './pages/EditingPage';

function App() {
  return (
    <div className="app">
      <Route path="/" component={Header}/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/edit/:id" component={EditingPage}/>
    </div>
  );
}

export default App;
