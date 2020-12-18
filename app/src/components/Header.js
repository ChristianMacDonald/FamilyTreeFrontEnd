import { Nav, NavItem, NavLink } from 'reactstrap';

function Header() {
    return (
        <header>
          <Nav>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/family-trees">Family Trees</NavLink>
            </NavItem>
          </Nav>
        </header>
    );
}

export default Header;