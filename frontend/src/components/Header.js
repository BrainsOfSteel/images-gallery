import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo} from '../images/logo.svg';
const navbarStyle = {
    backgroundColor: '#eeeeee'
};
const Header = (props) =>{
    const { title }= props;
    return (
        <Navbar style={navbarStyle} variant="light">
        <Container>
        <Logo alt={title} style={{ maxWidth: '14rem', maxHeight: '4rem'}}/>
        </Container>
        </Navbar>
    )
}
export default Header;