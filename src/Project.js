import "./Project.css";
import Projects from "./Projects.json";
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

export default function Project() {
    return (<div className="Project">
        {
            Projects.map(
                project => {
                    return (<div className="Section" id={project.Title} key={project.id}>
                        <Container>
                        <Card bg="Dark">
                            <Card.Img className="projimg" src={project.Images} alt="projectimg"  />
                            <Card.ImgOverlay className="overlay">
                                <Card.Body>
                                    <Row>
                                        <Card.Title className="projTitle">
                                            {project.Name}
                                        </Card.Title>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col xs lg="10">
                                            <Card.Text className="projText" >
                                                {project.Text}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className="projbutt" variant="light"><Link to={project.Url} className="buttlink">View More</Link></Button>
                                        </Col>
                                    </Row>
                            </Card.Body>
                            </Card.ImgOverlay>
                            </Card>
                        </Container>
                    </div>
                )
            })
        }
            </div>)
}