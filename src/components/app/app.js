import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app.css';
import Logo from '../app-logo/app-logo';
import MainMenu from '../app-menu/app-menu';
import HeaderContacts from '../app-contacts/app-contacts';
import Slider from '../app-slider/app-slider';
import AboutInfo from '../app-about-info/app-about-info';
import Ground from '../app-ground-block/app-ground-block';

function App() {
    return(
        <div className='main-app'>
            <div className='main-header'>
                <Container>
                    <Row>
                        <Col>{ <Logo/> }</Col>
                        <Col xs={7}>{ <MainMenu/> }</Col>
                        <Col>{ <HeaderContacts/> }</Col>
                    </Row>
                </Container>
            </div>
            <div className='main-body'>
                <div className="slider">
                    { <Slider/> }
                </div>
                <div className="about-info">
                    <Container>
                        <Row>
                            <Col>
                                { <AboutInfo/> }
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="ground-block">
                    <Container>
                        <Row>
                            <Col>
                                { <Ground/> }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>

    );
}

export default App;