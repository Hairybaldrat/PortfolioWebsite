import Navbar from "../Nav.js";
import Introduction from "../Introduction.js";
import Project from "./JSON/ProjectText.json";
import Body from "../Body.js"

function Attendance() {
    const attendance = Project.Attendance;
    return (
        <div>
            <Navbar />
            <div className="Content">
                <Introduction name="Attendance" text={attendance.Introduction} />
                <Body />
            </div>
        </div>
    );
}

export default Attendance;