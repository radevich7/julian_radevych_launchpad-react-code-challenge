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
  CardSubtitle,
  CardText,
  Card,
} from "reactstrap";
import CapAnimation from "../../animation/CapAnimation";
import { useState } from "react/cjs/react.development";
import Hamburger from "../../assets/svg/Hamburger";
import ReusableButton from "../../ReusableComponents/ReusableButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import Tips from "./Tips";
const Universities = () => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!open);
  //   Get flag emoji
  const getFlagEmoji = (countryCode) =>
    String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
    );

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
            <Row>
              <Col>
                <DropdownItem>
                  Canada <span className="flag"> {getFlagEmoji("ca")}</span>
                </DropdownItem>
                <DropdownItem>
                  Ukraine<span className="flag"> {getFlagEmoji("ua")}</span>
                </DropdownItem>
                <DropdownItem>USA</DropdownItem>
                <DropdownItem>Mexico</DropdownItem>
                <DropdownItem>Mexico</DropdownItem>
              </Col>
              <Col>
                <DropdownItem>
                  Canada <span className="flag"> {getFlagEmoji("ca")}</span>
                </DropdownItem>
                <DropdownItem>
                  Ukraine<span className="flag"> {getFlagEmoji("ua")}</span>
                </DropdownItem>
                <DropdownItem>USA</DropdownItem>
                <DropdownItem>Mexico</DropdownItem>
                <DropdownItem>Mexico</DropdownItem>
              </Col>
              <Col>
                <DropdownItem>
                  Canada <span className="flag"> {getFlagEmoji("ca")}</span>
                </DropdownItem>
                <DropdownItem>
                  Ukraine<span className="flag"> {getFlagEmoji("ua")}</span>
                </DropdownItem>
                <DropdownItem>USA</DropdownItem>
                <DropdownItem>Mexico</DropdownItem>
                <DropdownItem>Mexico</DropdownItem>
              </Col>
              <Col>
                <DropdownItem>
                  Canada <span className="flag"> {getFlagEmoji("ca")}</span>
                </DropdownItem>
                <DropdownItem>
                  Ukraine<span className="flag"> {getFlagEmoji("ua")}</span>
                </DropdownItem>
                <DropdownItem>USA</DropdownItem>
                <DropdownItem>Mexico</DropdownItem>
                <DropdownItem>Mexico</DropdownItem>
              </Col>
            </Row>
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
        <ReusableButton style={"showMore_button mt-5 mb-5"}>
          Show More Colleges ...
        </ReusableButton>
      </Row>
      <Row>
        <Tips />
      </Row>
    </Container>
  );
};

export default Universities;
