import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser, faTrash,faList,faHome,faPlus,faSearch, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link  
  } from 'react-router-dom';

class NavBarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">  <FontAwesomeIcon icon={faUtensils} />  Resto</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"><Link to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                                <Nav.Link href="#link"><Link to="/list"> <FontAwesomeIcon icon={faList} /> List</Link></Nav.Link>
                                <Nav.Link href="#home"><Link to="/create"> <FontAwesomeIcon icon={faPlus} /> Create</Link></Nav.Link>
                                <Nav.Link href="#link"><Link to="/search"> <FontAwesomeIcon icon={faSearch} /> Search</Link></Nav.Link>
                                {
                                    localStorage.getItem('login')?
                                    <Nav.Link ><Link to="/logout"> <FontAwesomeIcon icon={faUser} /> Logout </Link></Nav.Link>
                                    :
                                    <Nav.Link ><Link to="/login"> <FontAwesomeIcon icon={faUser} /> Login </Link></Nav.Link>
                                }
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBarMenu;