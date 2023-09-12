import { Card, Container } from "react-bootstrap";

function Home() {
  return (
    <Container
      id="card-container"
      style={{ width: "45rem", textAlign: "start" }}
      fluid
    >
      <Card className="how-cards" border="primary">
        <Card.Header as="h2" id="match-h3">
          Get started
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              Each game consists of the same input values of the normal
              washington lottery games.
            </p>
            <p>
              You are able to enter your numbers and get a response of a closely
              relating number you have chosen.
            </p>
            <p>
              There are set barriers in place that determines the random number
              output.
            </p>
          </Card.Text>
          <Card.Text>
            <ul>
              <li>Keno: top-barrier= 3 & bottom-barrier= 2: </li>
              <li>Match4: top-barrier= 8 & bottom-barrier= 6: </li>
              <li>Hit5: top-barrier= 8 & bottom-barrier= 6: </li>
              <li>Pick3: No barriers. Random number generated from 0-9 </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
