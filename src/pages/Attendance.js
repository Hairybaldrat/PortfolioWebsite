import Navbar from "../Nav.js";
import Introduction from "../Introduction.js";
import Project from "./JSON/ProjectText.json";
import Body from "../Body.js"
import Team from "../Team.js"
function Attendance() {
    const attendance = Project.Attendance;
    return (
        <div className="toplevel">
            <Navbar />
            <div className="Content">
                <Introduction name="Attendance Application" text={attendance.Introduction} />
                <Team Team={attendance.Team} />
                <Body />
            </div>
        </div>
    );
}

export default Attendance;