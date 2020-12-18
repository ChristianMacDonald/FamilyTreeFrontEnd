import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FamilyTreePage from './pages/FamilyTreePage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}/>
      <Route path="/family-trees" component={FamilyTreePage}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginPage}/>
    </div>
  );
}

export default App;
