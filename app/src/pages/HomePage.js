import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
      <div>
        <Link to="/login">Login</Link>
      </div>
    );
}

export default HomePage;