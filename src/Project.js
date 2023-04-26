import "./Project.css"
import Projects from "./Projects.json"
import React from "react"

export default function Project() {
    return (<div>
        {
            Projects.map(
                project => {
                    return (< div className="Section" id={"Project " + project.id} key={project.id}>
                        <div className="Projectbox">
                            <h1> {project.Name} </h1>
                            <p>{project.Text }</p>
                            <input type="button" className="projbutt" value="View more" onClick={() => { console.log("chungus") }}></input>
                            <div>
                                <div className="Background" style={{ backgroundImage: `url(${project.Backgroundimage})` }} />  
                            </div>
                    </div>
                </div>
                )
            })
        }
            </div>)
}