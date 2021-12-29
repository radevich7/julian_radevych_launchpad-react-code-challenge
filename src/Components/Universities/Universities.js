import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  Container,
  Row,
  DropdownToggle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Col,
  CardBody,
  CardTitle,
  Spinner,
  Card,
  Table,
} from "reactstrap";
import capImg from "../../assets/svg/cap.svg";
import CapAnimation from "../../animation/CapAnimation";

import Hamburger from "../../assets/svg/Hamburger";
import ReusableButton from "../../ReusableComponents/ReusableButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import Tips from "./Tips";
import { getCountries, getUniversities } from "../../store/universitiesSlice";
import { Link } from "react-router-dom";

//   Get flag emoji
export const getFlagEmoji = (countryCode) =>
  String.fromCodePoint(
    ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );

// Component
const Universities = () => {
  const dispatch = useDispatch();
  // Dropdown toggle
  const [open, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!open);
  // Animation toggle
  const [animation, setAnimation] = useState(false);
  const animationToggle = () => setAnimation(!animation);

  // Get countires list
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  // Connect to the store values
  const countries = useSelector((state) => state.universities.countries);
  const universities = useSelector((state) => state.universities.universities);

  return (
    <Container className="container-xl pt-5 ">
      {animation && <CapAnimation />}
      <Row className="d-flex position-relative " style={{ width: "100%" }}>
        <div className="students_img"> </div>
      </Row>
      <p className="universities_text">
        Welcome to SchoolFinder,&nbsp; please choose your country
      </p>
      <div
        className="form-check form-switch cap_switch"
        onClick={animationToggle}
      >
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          <img src={capImg} alt="" style={{ width: "44px" }} />
        </label>
      </div>
      <Row className="dropdown_section p-5 ">
        <Dropdown toggle={toggle} isOpen={open} direction="right">
          <DropdownToggle className="button_main dropdown_button">
            Choose region
            {/* Hamburger svg */}
            <Hamburger open={open} />
          </DropdownToggle>
          <DropdownMenu className="dropDown_menu">
            {countries.length > 0 ? (
              <Table responsive>
                <tbody>
                  {countries &&
                    countries.map((country, index) => {
                      let countryValue = Object.values(country).toString();

                      return (
                        <tr
                          key={index}
                          className="col"
                          onClick={(e) => {
                            dispatch(
                              getUniversities({
                                countryValue,
                              })
                            );
                          }}
                        >
                          <th>
                            <DropdownItem className="position-relative">
                              {Object.values(country)}
                              <span className="flag">
                                {" "}
                                {getFlagEmoji(...Object.keys(country))}
                              </span>
                            </DropdownItem>
                          </th>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            ) : (
              <Spinner />
            )}
          </DropdownMenu>
        </Dropdown>
      </Row>
      {universities && (
        <Row className="choice_section  justify-content-center mb-5">
          {universities.map((institution, index) => (
            <Col className="mb-3 ms-3 col-3" key={index}>
              <Card className="universities_card">
                <CardBody className="d-flex flex-column justify-content-around align-items-center">
                  <CardTitle tag="h5" className="universities_title">
                    {institution.name}
                  </CardTitle>

                  <a href={`${institution.web_pages}`} target="_blank">
                    {institution.web_pages}
                  </a>
                </CardBody>
              </Card>
            </Col>
          ))}
          {universities.length < 1 && <Spinner className="spinner" />}
        </Row>
      )}
      <Row>
        <Tips />
      </Row>
    </Container>
  );
};

export default Universities;
