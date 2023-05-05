import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import "./Github.css"


export default function Github() {
    return (
        <Container className="Section" id="Github" >
                <div className="gitbox">
                    <Row>
                        <Col>
                    <div>
                                <Image src="giticon.png" fluid className="giticon" />
                            </div>
                        </Col>
                        <Col>
                            <div className="gittextbox">
                                <h2 className="pb-2 border-bottom mb-3">My github</h2>
                            <p className="mb-5">Check out my GitHub to download some of my open-source projects, or follow me to see what public repos I'm working on.</p>
                            <a href="https://github.com/Hairybaldrat"><Button variant="dark" > Click me!</Button></a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>)
}