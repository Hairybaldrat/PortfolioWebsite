import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'

export default function Team(props) {
  const Teamobj = props.Team;
  console.log(Teamobj);
  return (
    <Container className="Section" id="Team">
    <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
      </tr>
      </thead>
      <tbody>
        {Teamobj.map((obj) => {
          return <tr key={obj.id }>
            <td>{obj.Name}</td>
            <td>{obj.Role}</td>
            </tr>
        })}
      </tbody>
      </Table>
    </Container>

    );
}