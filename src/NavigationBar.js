import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


class NavigationBar extends Component {

    render() {
    return(
        <div>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">React Metronome</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
  </Navbar>
  </div>

    );
    }
}

export default NavigationBar;