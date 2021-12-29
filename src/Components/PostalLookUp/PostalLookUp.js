import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../store/postalSlice";
import {
  Container,
  Row,
  Form,
  Input,
  Col,
  InputGroup,
  Card,
  CardBody,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import "./index.css";
import OSMap from "../Map/Map";
// Components
import ReusableButton from "../../ReusableComponents/ReusableButton";

const PostalLookUp = () => {
  const [postalValue, setPostalValue] = useState("");
  const dispatch = useDispatch();
  // Submit form logic
  const searchPostalHandler = (e) => {
    e.preventDefault();
    dispatch(getAddress(postalValue));
    setPostalValue("");
  };
  const addressSelector = useSelector((state) => state.postal.addressDetails);

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
          <Form className="postal_inputGroup" onSubmit={searchPostalHandler}>
            <InputGroup>
              <Input
                type="number"
                className="postal_input"
                placeholder="Enter postal code (5 digits)"
                min={"00000"}
                max={"99999"}
                onChange={(e) => setPostalValue(e.target.value)}
                required
                value={postalValue}
              />
              <ReusableButton styles={"postal_button"}>
                <span>
                  <FaSearch />
                </span>
              </ReusableButton>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      {addressSelector && (
        <Row className="address_section mt-5">
          <Card>
            <CardBody>
              <h1 tex> City:{Object.values(addressSelector.places[0])[0]}</h1>
              <h2> State: {addressSelector.places[0].state}</h2>
              <h3> Country: {addressSelector.country}</h3>
            </CardBody>
          </Card>
        </Row>
      )}
      <Row className="postal_map">
        <OSMap />
      </Row>
    </Container>
  );
};

export default PostalLookUp;
