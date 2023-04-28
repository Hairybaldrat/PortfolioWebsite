import "./Project.css"
import Projects from "./Projects.json"
import React from "react"
import { Link } from "react-router-dom"

export default function Project() {
    return (<div>
        {
            Projects.map(
                project => {
                    return (< div className="Section" id={"Project " + project.id} key={project.id}>
                        <div className="Background">
                            <div className="BackgroundOverlay"></div>
                                <div className="BackgroundImage" style={{ backgroundImage: `url(${project.Images[0]})` }}></div>
                        </div>
                        <div className="Projectbox">
                            <h1> {project.Name} </h1>
                            <p>{project.Text}</p>
                            <button className="projbutt" ><Link to={project.Url} className ="buttlink">View More</Link></button>
                    </div>
                </div>
                )
            })
        }
            </div>)
}