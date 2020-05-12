import React from 'react';
import './landing-page.styles.scss'
import { Navbar, Nav, Container, Col, Row, Image} from 'react-bootstrap';
import mainpage from '../assets/mainpage.JPG';

class LandingPage extends React.Component {
  render() {
    return(
      <div className='landing-page-container'>
        <div className='header'>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home" className='nav'>Brook & Bay Grooming</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className='nav' href="#features">About Us</Nav.Link>
              <Nav.Link className='nav' href="#features">Services</Nav.Link>
              <Nav.Link className='nav' href="#pricing">Contact Us</Nav.Link>
                
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
          <Container fluid='true'>
  <Row>
    <Col className='column-one' md>

  <div className='column-one-content'>
      <div className='column-one-text'>
        Brook &<br/>Bay Grooming
      </div>
      <div className='description'>
        Welcome to Brook and Bay Grooming! I'm Brooklyn, I graduated from Nash Grooming Academy in the spring of 2020. I'm certified in canine CPR & safety. I'm proud to say I was a top student and was invited to attend a grooming competition in Australia. However, I was excited to return home and start grooming my furry friends in Owensboro. Give me a call and book your appointment today! 
      </div>
  </div>

    </Col>
    <Col md className='column-two'>
      <div className='image-container'>
      <Image src={ mainpage } fluid/>
      </div>
      
      

    </Col>
  </Row>
  
</Container>
        </div>
      </div>
    )
  }
}

export default LandingPage;