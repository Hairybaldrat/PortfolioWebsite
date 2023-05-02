import "./Introduction.css"
import Container from 'react-bootstrap/Container'

export default function Introduction(props) {
    return <div className="Section" id="Introduction">
        <Container className="Introbox">
            <h2 className="mt-4 mb-4 pb-3 border-bottom">{props.name}</h2>
            <p>{props.text}</p>
        </Container>
    </div>
}