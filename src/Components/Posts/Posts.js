import { Container, Row, Col } from "reactstrap";
import "./index.css";
import GlobeIcon from "../../assets/svg/GlobeIcon";
import { Spring, animated } from "react-spring";
const Posts = () => {
  return (
    <Container className="container-xxl pt-5">
      <Row className="border">
        <Col className="border">
          <h2 className="title_2">Create, update and delete posts 24h</h2>
          <h1 className="title_1">Authentic POSTS for everyone</h1>
          <p className="posts_paragraph">
            When you post consistently, the algorithms will favor your posts and
            more people will see them
          </p>
          <button>click</button>
        </Col>
        <Col className="border">
          <GlobeIcon />
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
