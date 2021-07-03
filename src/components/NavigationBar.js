import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Form, FormControl } from "react-bootstrap"
import logo from "../assets/logo-soften.png"
import '../App.css';

const NavigationBar = () => {
    return (
        
            <Navbar bg="dark" variant="dark" fixed="top" style={{fontSize: '20px'}} expand="lg">
                <Navbar.Brand href="/"><img src={logo} width="60" height="40" alt=""/></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav className="mr-auto" activeKey="/home"> 
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Visitor" id="visitorDropdown">
                        <NavDropdown.Item href='/visitor/register'>Register visitor</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl type="text" placeholder="Search" className="mr-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
       
    )
}

export default NavigationBar
