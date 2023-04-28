import "./Project.css"
import Projects from "./Projects.json"
import React from "react"
import { Link, Route, Routes } from "react-router-dom"

export default function Project() {
    return (<div>
        {
            Projects.map(
                project => {
                    return (< div className="Section" id={"Project " + project.id} key={project.id}>
                        <div className="Background">
                            <div className="BackgroundOverlay"></div>
                                <div className="BackgroundImage" style={{ backgroundImage: `url(${project.Backgroundimage})` }}></div>
                        </div>
                        <div className="Projectbox">
                            <h1> {project.Name} </h1>
                            <p>{project.Text}</p>
                            <Link to="/Attendance"> BRUH</Link>
                            <input type="button" className="projbutt" value="View more" onClick={() => { <Link to="/Attendance"></Link> }}></input>
                    </div>
                </div>
                )
            })
        }
            </div>)
}