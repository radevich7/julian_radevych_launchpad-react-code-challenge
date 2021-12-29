import { Link } from "react-router-dom";
import { Container, Row, Nav, Col, InputGroup, Input } from "reactstrap";
import ReusableButton from "../../ReusableComponents/ReusableButton";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer_section position-relative d-flex align-items-center">
      <Container className="">
        <Row className="">
          <Col className="col-4">
            <div href="/" className="footer_logo">
              C<span>o</span>dingF<span>o</span>rL<span>i</span>fe
            </div>
            <Nav vertical>
              <Link to="/" className="footer_link">
                Home
              </Link>

              <Link to="/universities" className="footer_link">
                Universities
              </Link>
              <Link to="postal" className="footer_link">
                Postal Lookup
              </Link>

              <Link to="#" className=" disabled_link">
                FAQ
              </Link>
            </Nav>
          </Col>
          <Col>
            <div href="/" className="footer_logo">
              Stay connected...
            </div>
            <p className="mb-5">
              Join over 25000 people who received bi-weekly news from us!{" "}
            </p>
            <InputGroup>
              <Input type="email" className="footer_input" />
              <ReusableButton styles={"footer_button"}>Connect</ReusableButton>
            </InputGroup>
          </Col>
        </Row>
        <p className="footer_copyright">&copy; Copyright 2021 </p>
      </Container>
    </footer>
  );
};

export default Footer;
