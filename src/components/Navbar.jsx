import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  const style = {
    backgroundColor: " rgb(57, 72, 103)",
  };

  return (
    <>
      <Navbar style={style}>
        <Container>
          {/* <Navbar.Brand href="#home" style={{ color: "white" }}>
            Streamy
          </Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "small",
                padding: "10px",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/movies"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "small",
              }}
            >
              Movies
            </Nav.Link>
            <Nav.Link
              href="/series"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "small",
              }}
            >
              Series
            </Nav.Link>
            <Nav.Link
              href="/tvshows"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "small",
              }}
            >
              TV Shows
            </Nav.Link>
            <Nav.Link
              href="/cartoons"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "small",
              }}
            >
              Cartoons
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
