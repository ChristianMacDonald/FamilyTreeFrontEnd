import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
      <div>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/register">Register</Link>
      </div>
    );
}

export default HomePage;