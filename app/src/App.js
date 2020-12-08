import './App.css';
import { Route, Link } from 'react-router-dom';

import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={props => {
        return (
          <div>
            <Link to="/login">Login</Link>
          </div>
        );
      }}/>
      <Route exact path="/login" component={LoginForm}/>
    </div>
  );
}

export default App;
