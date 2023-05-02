import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./Gallery.css";

export default function Gallery(props) {
    if (props.images != null && props.images.length > 0) {
        return <div className="Section" id="Gallery">
            <Container>
                <h2 className="mb-4 pb-2 border-bottom">Gallery</h2>
                <Row className="mb-1">
                    <Col sm>
                        <Image className="galleryImg" src={props.images[0]} thumbnail />
                    </Col>
                    <Col sm>
                        <Image className="galleryImg" src={props.images[1]} thumbnail />
                    </Col>
                </Row>
                <Row >
                    <Col sm>
                        <Image className="galleryImg" src={props.images[2]} thumbnail />
                    </Col>
                    <Col sm>
                        <Image className="galleryImg" src={props.images[3]} thumbnail />
                    </Col>
                </Row >
            </Container>
        </div>
    }
    else {
        console.log("Empty image array");
    }
}