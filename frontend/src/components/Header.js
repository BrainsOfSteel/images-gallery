import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
const navbarStyle = {
    backgroundColor: 'lightblue'
};
const Header = (props) =>{
    const { title }= props;
    return (
        <Navbar style={navbarStyle} variant="light">
        <Container>
        <Navbar.Brand href="/">{ title }</Navbar.Brand>
        </Container>
        </Navbar>
    )
}
export default Header;