import React from 'react';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/**
* @author traj3ctory
* @function Header
**/

const Header = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className="shadow py-1">
                <Navbar.Brand href="#home">Next-Js</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                        <Link href="/about"><a className="nav-link">About</a></Link>
                        <Link href="/list"><a className="nav-link">Listing</a></Link>
                    </Nav>
                    <Nav>
                        <Link href="/deets"><a className="nav-link">More deets</a></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default Header;