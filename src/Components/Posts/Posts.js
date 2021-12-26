import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col, CardGroup } from "reactstrap";
import PostCard from "../../ReusableComponents/Card";
import ReusableButton from "../../ReusableComponents/ReusableButton";
import ReusableModal from "../../ReusableComponents/ReusableModal";
import "./index.css";

const Posts = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Container className="container-xl pt-5 ">
      <ReusableModal toggle={toggle} isOpen={open} />
      <Row className="row_posts align-items-center">
        <Col className="">
          <h2 className="title_2">Create, update and delete posts 24h</h2>
          <h1 className="title_1">Authentic POSTS for everyone</h1>
          <p className="posts_paragraph">
            When you post consistently, the algorithms will favor your posts and
            more people will see them
          </p>
        </Col>
        <Col className="img_col rocket_img"></Col>
      </Row>

      <Row className="row_postCard align-items-center position-relative justify-content-center flex-wrap">
        <ReusableButton style={"addPost_button"} onClick={toggle}>
          Add new post
        </ReusableButton>
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
        <PostCard />
        <PostCard evenStyle={"even"} />
      </Row>
      <Row className="about_section">
        <Col className="col-4 d-flex align-items-center">
          <p className="aboutSection_paragraph">
            24h nisl est, efficitur id turpis dapibus, imperdiet tincidunt quam
            efficitur id turpis SOLARIS
          </p>
        </Col>
        <Col>
          <h1 className="title_1">About us </h1>
          <p className="posts_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultricies blandit euismod. Pellentesque tincidunt bibendum quam
            vitae aliquet. Nulla gravida sem dolor. Aenean nisl est, efficitur
            id turpis dapibus, imperdiet tincidunt quam. Vestibulum auctor a
            nisl id tempor. Pellentesque orci diam, condimentum quis orci vel,
            condimentum rutrum nibh. Suspendisse tempus, libero ac viverra
            fermentum, dolor orci blandit urna, sed dapibus urna libero quis
            nulla. <br />
            <br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Morbi lectus felis, congue id ligula id,
            tristique vulputate lorem. Vestibulum quis mauris interdum, porta
            urna vestibulum, placerat ante. Duis quis purus ac dui tempor
            convallis vestibulum scelerisque elit. In mauris ex, placerat vel
            metus eu, porta efficitur ligula. Etiam vulputate massa non purus
            commodo rutrum. Vestibulum erat nisl, aliquet et nisi a, porttitor
            egestas lorem. Mauris maximus augue non consectetur sagittis. Sed
            sodales odio elit. Aenean risus erat, facilisis ac tincidunt in,
            sagittis eget erat. Ut dolor lectus, ullamcorper pharetra eros sed,
            dignissim interdum erat. Nunc blandit quam at scelerisque pretium.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
