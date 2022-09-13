import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app.css';
import Logo from '../app-logo/app-logo';
import MainMenu from '../app-menu/app-menu';
import HeaderContacts from '../app-contacts/app-contacts'

function App() {
    return(
        <div className='main-header'>
            <Container>
                <Row>
                    <Col>{ <Logo/> }</Col>
                    <Col xs={7}>{ <MainMenu/> }</Col>
                    <Col>{ <HeaderContacts/> }</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;