import React, { useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app.css';
import Logo from '../app-logo/app-logo';
import MainMenu from '../app-menu/app-menu';
import HeaderContacts from '../app-contacts/app-contacts';
import Slider from '../app-slider/app-slider';
import AboutInfo from '../app-about-info/app-about-info';
import AboutInfo2 from '../app-about-info/app-about-info-two';
import AccordionMobile from '../app-about-info/accordionMobile';
import Ground from '../app-ground-block/app-ground-block';
import Form from '../app-forms/app-forms';
import Benif from '../app-benefits/app-benefits';
import PhotoGallery from '../app-photoGallery/app-photoGallery';
import Cooperation from '../app-cooperation/app-cooperation';
import Footer from '../app-footer/app-footer';
import FooterContacts from '../app-contacts/app-contacts-footer';
import FooterLinks from '../app-footer-links/app-footer-links';



function App() {
    useEffect(() => {
        document.title = "Seller Sklad - Модульные здания для бизнеса";
      }, []);
    return(
        <div className='main-app'>
            <div className='main-header'>
                <Container>
                    <Row>
                        <Col>{ <Logo/> }</Col>
                        <Col md={7} sm={12}>{ <MainMenu/> }</Col>
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
                    { <AccordionMobile/> }
                    { <AboutInfo2/> }
                </div>
                <div className="benefits-block">
                    <Container>
                        <Row>
                            <Col>
                                { <Benif/> }
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
                <div className="ground-block_form">
                    <Container>
                        <Row>
                            <Col>
                                { <Form/> }
                            </Col>
                        </Row>
                    </Container>
                   
                </div>
                <div className="photo-gallery-block">
                    <Container>
                        <Row>
                            <Col>
                                { <PhotoGallery/> }
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="cooperation-block">
                    <Container>
                        <Row>
                            <Col>
                                { <Cooperation/> }
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="main-footer">
                    <Footer/>
                    <Container>
                        <Row>
                            <Col className="footerMobileMenu" sm={12}>{ <MainMenu/> }</Col> 
                        </Row>
                        <Row>
                            <Col md={4} sm={12}>{ <Logo/> }</Col>
                            <Col className='mobileMenu' md={4} sm={12}>{ <MainMenu/> }</Col>
                            <Col>{ <FooterContacts/> }</Col>
                        </Row>
                        <Row>
                            <Col>
                                { <FooterLinks/> }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>

    );
}

export default App;