import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Nar (){


  return (<div>
              <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/card">card</Nav.Link>
            <Nav.Link href="/product">product</Nav.Link>
            

          </Nav>
        </Container>
      </Navbar>


  </div>)
}

export default Nar;