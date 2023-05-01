import './Contact.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function Contact() {
    return (<div className="Section" id="Contact">
      <div className="Contactbox">
        <Container fluid>
          <Row>
            <h1 className="contactTitle"> Contact me </h1>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label htmlFor="inputName">Name :</Form.Label>
              <Form.Control
                type="text"
                id="inputName"
                aria-describedby="nameHelp"
                placeholder="Your Name"
              />
              <Form.Text id="nameHelp" muted>
                Insert your name here.
              </Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label htmlFor="inputEmail">Email :</Form.Label>
              <Form.Control
                type="text"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
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
              />
              <Form.Text id="messageHelp" muted>
                Insert the message you want to send.
              </Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={2} md={2} style={{display:"table", padding:"4%"} }>
              <Button>Send
              </Button>
            </Col>
          </Row>
        </Container>
        </div>
    </div>);
}