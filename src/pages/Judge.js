import Navbar from "../Nav.js"
import Introduction from "../Introduction.js"
import Project from "./JSON/ProjectText.json";
import Team from "../Team.js"

export default function Judge() {
    const judge = Project.Judge;
    return <div>
    <Navbar />
        <div className="Content" >
          <Introduction name="Judge Application" text={judge.Introduction} />
            <Team Team={judge.Team} />
    </div>
  </div>
}
