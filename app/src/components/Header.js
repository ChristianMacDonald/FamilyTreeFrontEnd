import { Nav, NavItem, NavLink } from 'reactstrap';

function Header(props) {
    return (
        <header>
          <Nav>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </header>
    );
}

export default Header;