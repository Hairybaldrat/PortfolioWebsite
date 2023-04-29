import "./Introduction.css"

export default function Introduction(props) {
    return <div className="Section" id="Introduction">
        <div className="Introbox">
            <p>{props.text}</p>
        </div>
    </div>
}