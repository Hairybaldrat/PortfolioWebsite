import Navbar from "../Nav.js"
import Introduction from "../Introduction.js"
import Project from "./JSON/ProjectText.json";
import Body from "../Body.js"

export default function Judge() {
    const judge = Project.Judge;
    return <div>
    <Navbar />
        <div className="Content" >
          <Introduction name="Judge Application" text={judge.Introduction} />
          <Body />
    </div>
  </div>
}
