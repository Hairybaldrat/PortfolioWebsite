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
    return (<div>
        {
            Projects.map(
                project => {
                    return (<div className="Section" id={"Project " + project.id} key={project.id}>
                        <Card bg="Dark">
                            <Card.Img src={project.Images} alt="projectimg" style={{ height: '60vh'}} />
                            <Card.ImgOverlay className="overlay">
                            <Card.Body>
                                    <Card.Title className="projTitle">
                                {project.Name}
                            </Card.Title>
                                    <Card.Text className="projText">
                                {project.Text}
                            </Card.Text>

                               <Button className="projbutt" variant="light"><Link to={project.Url} className="buttlink">View More</Link></Button>
                            </Card.Body>
                            </Card.ImgOverlay>
                            </Card>
                    </div>
                )
            })
        }
            </div>)
}