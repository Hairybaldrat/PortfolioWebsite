import Navbar from "../Nav.js"
import Introduction from "../Introduction.js"
import Project from "./JSON/ProjectText.json";
import Gallery from "../Gallery.js";
import Body from "../Body.js"
import Team from "../Team.js"

function Mugan() {
    const mugan = Project.Mugan;
    return <div>
        <Navbar />
        <div className="Content">
        <Introduction name="Mugan Trial" text={mugan.Introduction} />
        <Team Team={mugan.Team} />
            <Gallery images={mugan.Images} />
        <Body Body={mugan.Body} />
        </div>
    </div>
}

export default Mugan