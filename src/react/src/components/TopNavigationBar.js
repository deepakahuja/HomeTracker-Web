// This component handles the App template used on every page.
import React from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import {Link} from 'react-router-dom';

class TopNavigationBar extends React.Component {
  render() {
   
    return (
        <div fixedTop >   
        <Navbar fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">
                    Company Logo
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                <NavItem eventKey={1} href="#">
                    Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
                </Nav>
                <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Link Right
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>      
        </div>
      
    )
  }
}



export default TopNavigationBar;
