import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skills.css'

export default function Skills() {
    return (<div className="Section" id="Skills">
        <Container className="Skillsbox">
            <div>
                <h2 className="pb-2 border-bottom skillsheader">Skills</h2>
            </div>
            <Row>
                <Col className="skillColumn" sm>
                    <h2>C-Sharp</h2>
                        <p className="innertext">I have spent three years learning C-sharp.
                            I have used it in backend web development (asp.net),
                            games development (unity),
                            windows form development.</p>
                </Col>
                <Col className="skillColumn" sm>
                    <h2>Javascript</h2>
                        <p className="innertext">I have experience using Javascript to create web-based applications.
                            This experience is primarily within the frontend framework of React.</p>
                </Col>
                <Col className="skillColumn"  sm>
                    <h2>Cloud</h2>
                    <p className="innertext" >I have deployed multiple applications to the cloud and have a fair understanding of the systems it uses.
                    I am mainly familiar with Azure but understand Terraform and am interested in developing on the other cloud platforms as well.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="skillColumn" sm>
                    <h2>Web development</h2>
                    <p className="innertext">I understand full-stack web development. I mainly have experience with React JS with ASP.net backend.</p>
                </Col>
                <Col className="skillColumn" sm>
                    <h2>Games Development</h2>
                    <p className="innertext">I have made multiple Unity game projects over the course of my studies.
                    Game development and creation is a hobby that has allowed me to not only work on my coding knowledge.
                    </p>
                </Col>
                <Col className="skillColumn" sm>
                    <h2>Databases</h2>
                    <p className="innertext">I have worked on multiple projects that have implemented databases.
                    I have a proficient understanding of SQL and Jade.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>)
}