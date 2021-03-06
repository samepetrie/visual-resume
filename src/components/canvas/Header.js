import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.scss';


const Header = () => (
    <Container fluid className="HeaderContainer">
        <Row className="HeaderContent">
            <Col md={9} className="Title">
                <h1>SAMANTHA E. PETRIE</h1>
                {/* <h5>Product Manager <span>&#183;</span> Data Analyst <span>&#183;</span> Enigmatologist</h5> */}
            </Col>
            <Col md={3}>
                <button className="ContactButton"><a href="mailto:hello@samepetrie.com">Contact Sam</a>
                </button>
            </Col>
        </Row>
    </Container>
)

export default Header