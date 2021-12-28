import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import PostCard from "../../ReusableComponents/Card";
import ReusableButton from "../../ReusableComponents/ReusableButton";
import ReusableModal from "../../ReusableComponents/ReusableModal";
import { getPosts, getPostById } from "../../store/postsSlice.js";
import "./index.css";
import { BsSearch, BsPlusCircle } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";

const Posts = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);
  const searchToggle = () => setSearchVisible(!searchVisible);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [modalType, setModalType] = useState();
  const [choosenPost, setChoosenPost] = useState(null);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  // Fetch posts data
  useEffect(() => {
    let apiCall = dispatch(getPosts());
  }, []);
  // Add new post functionality
  const addPostHandler = () => {
    setModalType("add");
    toggle();
  };
  const updatePostHandler = (post) => {
    setChoosenPost(post);
    setModalType("update");
    toggle();
  };
  const deletePostHandler = (post) => {
    setChoosenPost(post);
    setModalType("delete");
    toggle();
  };
  // console.log(posts);
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(getPostById({ id: searchInputValue }));
    setSearchInputValue("");
  };
  const resetHandler = (e) => {
    e.preventDefault();
    dispatch(getPosts());
    setSearchInputValue("");
  };

  console.log(searchInputValue);
  return (
    <Container className="container-xl pt-5 ">
      <ToastContainer />
      <ReusableModal
        toggle={toggle}
        type={modalType}
        isOpen={open}
        post={choosenPost}
      />
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
        {searchVisible ? (
          <Form className="search_inputForm d-flex" onSubmit={searchHandler}>
            <Input
              className="search_input"
              id="exampleSearch"
              name="search"
              placeholder="Enter id (1-100)"
              type="number"
              min={1}
              max={100}
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              required
            />
            <ReusableButton style={"search_button"}>Search</ReusableButton>
            <ReusableButton style={"reset_button"} onClick={resetHandler}>
              Reset
            </ReusableButton>
          </Form>
        ) : (
          <ReusableButton style={"addPost_button"} onClick={addPostHandler}>
            Add new post
          </ReusableButton>
        )}
        {/* Set search visible and hide add button */}
        <span className="toggle_search" onClick={searchToggle}>
          {!searchVisible ? <BsSearch /> : <BsPlusCircle />}
        </span>

        {!posts ? (
          <p>Loading</p>
        ) : (
          posts.map((post) => (
            <PostCard
              evenStyle={post.id % 2 === 0 ? "even" : ""}
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              update={updatePostHandler}
              delete={deletePostHandler}
            />
          ))
        )}
      </Row>
      <Row className="about_section" id="about">
        <Col className="col-4 d-flex align-items-center">
          <p className="aboutSection_paragraph">
            24h nisl est, efficitur id turpis dapibus, imperdiet tincidunt quam
            efficitur id turpis SOLARIS
          </p>
        </Col>
        <Col>
          <h1 className="title_1">About us</h1>
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
