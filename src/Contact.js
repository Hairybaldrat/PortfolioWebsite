import './Contact.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
            if (!name || !email || !message) {
                console.log('Something is empty');
                return;
            }

            var discordMessage = {
                username: 'Portfolio bot',
                content: 'New Message',
                embeds: [
                    {
                        fields: [
                            { name: 'Username', value: name },
                            { name: 'Email', value: email },
                            { name: 'Message', value: message},
                        ],
                    },
                ],
            };
        try {
            fetch(process.env.Discord_Hook, {
                body: JSON.stringify(discordMessage),
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        catch(e) {
            alert(e);
        }
    }

    return (<div className="Section" id="Contact">
        <div className="Contactbox">
            <Form onSubmit={handleSubmit}>
        <Container fluid>
          <Row>
            <h1 className="contactTitle border-bottom pb-4"> Contact me </h1>
          </Row>
                <Row>
                        <Form.Group>
                            <Form.Label htmlFor="inputName" className="mt-4">Name :</Form.Label>
              <Form.Control
                            type="text"
                            id="inputName"
                            aria-describedby="nameHelp"
                            placeholder="Your Name"
                            onChange={(e) => setName(e.target.value)}
              />
              <Form.Text id="nameHelp" muted>
                Insert your name here.
              </Form.Text>
            </Form.Group>
          </Row>
                    <Row>
                        <Form.Group className="mc-4">
              <Form.Label htmlFor="inputEmail">Email :</Form.Label>
              <Form.Control
                type="text"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text id="emailHelp" muted>
                Insert your email here.
              </Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="inputMessage" >Message :</Form.Label>
              <Form.Control
                type="text"
                id="inputMessage"
                aria-describedby="messageHelp"
                as="textarea"
                                rows={4}
                            placeholder="Your Message"
                            onChange={(e) => setMessage(e.target.value)}
              />
              <Form.Text id="messageHelp" muted>
                Insert the message you want to send.
              </Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Col></Col>
                    <Col xs={2} md={2} style={{ display: "table", padding: "4%" }}>
                        <Button type="submit">Send
              </Button>
            </Col>
          </Row>
                </Container>
            </Form>
        </div>
    </div>);
}