import { Container, Row, InputGroup, Input, Col } from "reactstrap";
import ReusableButton from "../../ReusableComponents/ReusableButton";
import { FaSearch } from "react-icons/fa";
import Map from "./../Map/Map";
import "./index.css";
const PostalLookUp = () => {
  return (
    <Container className="postal_container">
      <div className="postal_img"></div>
      <Row className=" postal_section">
        <Col className="col-12">
          <p className="postal_text pb-5">
            Find any address by the zip code or postal code in the USA by using
            our simple lookup function. Enter zip into the search field and find
            relevant information about the location, other related codes, or
            search by map to see the global location of the zip or postal code
            you’re trying to find.
          </p>
        </Col>
        <Col className="col-12">
          <InputGroup className="postal_inputGroup">
            <Input type="email" className="postal_input" />
            <ReusableButton style={"postal_button"}>
              <span>
                <FaSearch />
              </span>
            </ReusableButton>
          </InputGroup>
        </Col>
      </Row>
      <Row className="postal_map">
        <Map />
      </Row>
    </Container>
  );
};

export default PostalLookUp;
