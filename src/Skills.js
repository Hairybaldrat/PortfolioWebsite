import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skills.css'

export default function Skills() {
    return (<div className="Section" id="Skills">
        <Container className="Skillsbox">
            <h2 className="pb-2 border-bottom">Skills</h2>
            <Row>
                <Col className="skillColumn" sm>
                    <h2>C-Sharp</h2>
                        <p className="innertext">I have spent three years learning c-sharp.
                            I have used it in backend web development (asp.net),
                            games development (unity),
                            windows forms development.</p>
                </Col>
                <Col className="skillColumn" sm>
                    <h2>Javascript</h2>
                        <p className="innertext">I have experience using Javascript to create web based applications.
                            This experience is primarly within the frontend framework of React.</p>
                </Col>
                <Col className="skillColumn"  sm>
                    <h2>Cloud</h2>
                    <p className="innertext" >I have spent three years learning c-sharp.
                        I have used it in backend web development (asp.net),
                        games development (unity),
                        windows forms development.</p>
                </Col>
            </Row>
            <Row>
                <Col className="skillColumn" sm>
                    <h2>Full-Stack web development</h2>
                    <p className="innertext">I have spent three years learning c-sharp.
                        I have used it in backend web development (asp.net),
                        games development (unity),
                        windows forms development.</p>
                </Col>
                <Col className="skillColumn" sm>
                    <h2>Games Devlopment</h2>
                    <p className="innertext">I have spent three years learning c-sharp.
                        I have used it in backend web development (asp.net),
                        games development (unity),
                        windows forms development.</p>
                </Col>
                <Col className="skillColumn" sm>
                    <h2>Databases</h2>
                    <p className="innertext">I have worked on multiple projects that have implemented databases.
                    I have a proficient understanding of SQL and Jade 
                    </p>
                </Col>
            </Row>
        </Container>
    </div>)
}