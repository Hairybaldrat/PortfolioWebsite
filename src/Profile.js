import React from 'react';
import './Profile.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TypeAnimation } from 'react-type-animation';


export default function Profile() {
    return (
        <div className="Section" id="About me">
        <div className="Profilebox">
                <Container fluid>
                    <Row >
                        <Col xs={2} xxl={2} md={2 }>
                            <div className="Profilepicture mb-3" >
                                <Image src="Portfolio.png" alt="Rowan Olive" className="picture" fluid/>
                </div>
                        </Col>
                        <Col xxl={8} className="textcol">
                <h1 className="Title" id="Title">About me</h1>
                <p className="profiletext">My name is Rowan and I am a junior software developer.
                  I mainly have experience in C#, Javascript (React).
                  I also have experience with backend such as SQL and Jade.
                                I have experience in deploying full stack cloud applications.</p>
                            <TypeAnimation
                                sequence={[
                                    'Console.WriteLine("Hello")',
                                    1500, 
                                    'Welcome to my Portfolio',
                                    2000, 
                                    'I am a fullstack web developer',
                                    2000,
                                    'I am a games developer',
                                    2000,
                                    'I am a database developer',
                                    2000,
                                    () => {
                                        console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                    }
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1em', display: 'inline-block', color: '#20C20E' }}
                            />
                  </Col>
                    </Row>

          </Container>
            </div >
        </div>
    )
}