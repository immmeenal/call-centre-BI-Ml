import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">CALL CENTRE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/kpi">KPI</Nav.Link>
            <Nav.Link href="/star">Star Schema</Nav.Link>
            <Nav.Link href="/operations">OPERATIONS</Nav.Link>
            <NavDropdown title="OLAP OPERATIONS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Opsliceop">SLICE</NavDropdown.Item>
              <NavDropdown.Item href="/Opdice">DICE</NavDropdown.Item>
              <NavDropdown.Item href="/Opdrilldown">
                DRILL DOWN
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/Oprollup">ROLL UP</NavDropdown.Item>
              <NavDropdown.Item href="/OpPivot">PIVOT</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/analytics">ANALYTICS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
