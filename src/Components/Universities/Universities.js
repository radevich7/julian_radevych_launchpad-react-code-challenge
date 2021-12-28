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
  CardText,
  Card,
  Table,
} from "reactstrap";
import CapAnimation from "../../animation/CapAnimation";

import Hamburger from "../../assets/svg/Hamburger";
import ReusableButton from "../../ReusableComponents/ReusableButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import Tips from "./Tips";
import { getCountries } from "../../store/universitiesSlice";

//   Get flag emoji
export const getFlagEmoji = (countryCode) =>
  String.fromCodePoint(
    ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
  );

// Component
const Universities = () => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!open);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCountries());
  }, []);
  // Connect to the store values
  // const countries = useSelector((state) => state.universities.countries);
  const universities = useSelector((state) => state.universities.universities);
  let countries = [
    { DZ: "Algeria" },
    { AO: "Angola" },
    { BJ: "Benin" },
    { DZ: "Algeasdria" },
    { AO: "Anasdsgola" },
    { BJ: "Benaasdsain" },
    { DZ: "Aria" },
    { AO: "Anasdsgola" },
    { BJ: "Benaasn" },
    { DZ: "Algeria" },
    { AO: "Angola" },
    { BJ: "Benin" },
    { DZ: "Algeasdria" },
    { AO: "Anasdsgola" },
    { BJ: "Benaasdsain" },
    { DZ: "Aria" },
    { AO: "Anasdsgola" },
    { BJ: "Benaasn" },
    { DZ: "Algeria" },
    { AO: "Angola" },
    { BJ: "Benin" },
    { DZ: "Algeasdria" },
    { AO: "Anasdsgola" },
    { BJ: "Benaasdsain" },
    { DZ: "Aria" },
    { AO: "Anasdsgola" },
    { BJ: "Benaasn" },
  ];

  return (
    <Container className="container-xl pt-5 ">
      {/* <CapAnimation /> */}
      <Row className="d-flex position-relative " style={{ width: "100%" }}>
        <div className="students_img"> </div>
      </Row>

      <Row className="dropdown_section d-flex justify-content-center p-5 ">
        <Dropdown toggle={toggle} isOpen={open} direction="right">
          <DropdownToggle className="button_main dropdown_button">
            Choose region
            {/* Hamburger svg */}
            <Hamburger open={open} />
          </DropdownToggle>
          <DropdownMenu className="dropDown_menu">
            <Table responsive>
              <tbody>
                {countries &&
                  countries.map((country) => (
                    <tr key={countries.indexOf(country)} className="col">
                      <th>
                        <DropdownItem className="position-relative">
                          {[...Object.values(country)]}
                          <span className="flag">
                            {" "}
                            {getFlagEmoji(...Object.keys(country))}
                          </span>
                        </DropdownItem>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </DropdownMenu>
        </Dropdown>
      </Row>
      <Row className="choice_section d-flex justify-content-center mb-5">
        {/* <span className="choosen_countryFlag">{getFlagEmoji("ua")}</span> */}

        <Col className="mb-3">
          <Card className="universities_card">
            <CardBody className="d-flex flex-column justify-content-around align-items-center">
              <CardTitle tag="h5" className="universities_title">
                University of Toronto
              </CardTitle>

              <CardText>web:'http://www.acadiau.ca/"'</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ReusableButton style={"showMore_button mt-5 mb-5"}>
        Show More Colleges ...
      </ReusableButton>
      <Row>
        <Tips />
      </Row>
    </Container>
  );
};

export default Universities;
