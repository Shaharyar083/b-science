import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

// Import logo
import logo from '../assets/logo.png'

// Importing CSS file from Style Folder
import '../styles/navbar.scss'


const NavbarComp = () => {
  return (
    <>
      <div className="NavBar"
        style={{ backgroundColor: '#10223c' }}>
        <Navbar expand="lg" className="container">
          <Navbar.Brand href="/home">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto"></Nav>
            <Nav >
              <Nav.Link href="/home" className="links"
                style={{ marginRight: "35px" }}>
                Key Features</Nav.Link>

              <Nav.Link href="/home" className="links"
                style={{ marginRight: "35px" }}>
                Tokenomics</Nav.Link>

              <Nav.Link href="/home" className="links"
                style={{ marginRight: "35px" }}>
                Roadmap</Nav.Link>

              <Nav.Link href="/home" className="links"
                style={{
                  backgroundColor: "rgb(12, 26, 46)",
                  width: "110px",
                  textAlign: "center",
                  height: "40px",
                  borderRadius: "25px",
                  boxShadow: "0 0 15px -3px #f6d869",
                  cursor: "pointer"
                }}>Farming</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default NavbarComp;
