import Navbar from "../Nav.js"
import Introduction from "../Introduction.js"
import Project from "./JSON/ProjectText.json";

export default function Judge() {
    const judge = Project.Judge;
  return <div>
    <Navbar />
      <div className="Content">
          <Introduction text={judge.Introduction} />
    </div>
  </div>
}
