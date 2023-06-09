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
                (project) => {
                    return (
                        <div className="Section reveal" id={project.Title} key={project.id}>
                  <Container className="projbox mx-auto" fluid>
                        <Container fluid>
                            <Card bg="Dark" className='gg'>
                            <Card.Img className="projimg" src={project.Images} alt="projectimg"  />
                            <Card.ImgOverlay className="overlay">
                                <Card.Body>
                                    <Row>
                                                    <Card.Title className="projTitle pb-2 border-bottom ">
                                            {project.Name}
                                        </Card.Title>
                                    </Row>
                                    <Row className="justify-content-md-center mb-3 ">
                                                    <Col lg="10" >
                                            <Card.Text className="projText " >
                                                {project.Text}
                                            </Card.Text>
                                        </Col>
                                                </Row>
                                                <Row className="mt-auto">
                                                    <Col>
                                                        <Button className="projbutt mr-5 sm" variant="light" stretch><Link to={project.Url} className="buttlink">View More</Link></Button>
                                        </Col>
                                    </Row>
                            </Card.Body>
                            </Card.ImgOverlay>
                            </Card>
                        </Container>
                  </Container>
                </div>
                )
            })
        }
            </div>)
}