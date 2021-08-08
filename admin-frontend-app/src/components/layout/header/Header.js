import React from 'react'
import {Navbar,Nav,Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
//import { NavLink, Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import {LogOut} from '../../../actions'

const Header = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const Signout = (e)=>{
        dispatch(LogOut());
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>  
                    <NavLink to="/" className="nav-link" style={{color:"white"}}>Admin Panel</NavLink>
                    {/* <Navbar.Brand href="#home">Admin Panel</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                              */}
                            </Nav>
                        <Nav>
                            {
                             auth.authanticate ?
                            <li className="nav-item">
                                <span  className="nav-link" style={{color:"white"}} onClick={Signout}>logout</span>
                            </li>:''
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
