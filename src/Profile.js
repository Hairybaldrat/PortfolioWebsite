import React from 'react'
import './Profile.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Profile() {
    return (
        <div className="Section" id="About me">
        <div className="Profilebox">
          <Container fluid>
            <Row >
                        <Col xs={2}>
                            <div className="Profilepicture" >
                                <Image src="Portfolio.png" alt="Rowan Olive" className="picture" fluid />
                </div>
              </Col>
                        <Col xxl={8 }>
                <h1 className="Title" id="Title">About me</h1>
                <p className="profiletext">My name is Rowan and I am a junior software developer.
                  I mainly have experience in C#, Javascript (React).
                  I also have experience with backend such as SQL and Jade.
                    I have experience in deploying full stack cloud applications.</p>
                  </Col>
            </Row>
          </Container>
            </div >
        </div>
    )
}