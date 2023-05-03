import Container from "react-bootstrap/Container";

export default function Body(props) {
    return <div className="Section" id="Body">
      <Container className="Introbox mt-5">
        <h2 className="mt-4 mb-4 pb-3 border-bottom">Body</h2>
        <p>{props.Body}</p>
      </Container>
    </div>
}