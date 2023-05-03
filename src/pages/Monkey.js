import Navbar from "../Nav.js"
import Introduction from "../Introduction.js"

export default function Monkey(props) {
    return <div>
        <Navbar />
        <div className="Content">
            <Introduction text={props.Introduction} />
        </div>
    </div>
}