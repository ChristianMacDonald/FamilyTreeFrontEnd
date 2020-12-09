import './App.css';
import { Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={LoginForm}/>
      <Route exact path="/register" component={RegisterForm}/>
    </div>
  );
}

export default App;
