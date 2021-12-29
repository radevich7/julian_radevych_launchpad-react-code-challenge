import "./index.css";
import { Modal, Form, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import ReusableButton from "./ReusableButton";
import { useDispatch } from "react-redux";
import { addPost, deletePost, updatePost } from "../store/postsSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const ReusableModal = (props) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const { type, toggle, isOpen, post } = props;
  const { posts } = useSelector((state) => state.posts);
  // Add new post
  const addNewPostHandler = (e) => {
    e.preventDefault();
    const newPost = {
      userId: +userId,
      title,
      body,
      id: posts.length + 1,
    };
    dispatch(addPost(newPost));
    toggle();
  };
  // Update post
  const updatePostHandler = (e) => {
    e.preventDefault();
    const updatedPost = {
      userId: userId ? +userId : post.userId,
      title: title ? title : post.title,
      body: body ? body : post.body,
      id: post.id,
    };

    dispatch(updatePost(updatedPost));
    toggle();
  };
  // Delete post

  const deletePostHandler = (e) => {
    e.preventDefault();
    dispatch(deletePost({ id: post.id }));
    toggle();
  };

  // Cancel, close modal
  const cancelHandler = (e) => {
    e.preventDefault();
    toggle();
  };
  console.log(type);

  return (
    <Modal centered fullscreen="md" size="lg" toggle={toggle} isOpen={isOpen}>
      <ModalBody>
        <h1 className="modal_header">
          {type === "add"
            ? "Add new"
            : type === "delete"
            ? "Are you sure you want do delete"
            : "Update"}{" "}
          post
        </h1>
        {type !== "delete" && (
          <Form
            onSubmit={type === "add" ? addNewPostHandler : updatePostHandler}
          >
            <Label>User id</Label>
            <Input
              type="number"
              className="w-100 post_titleInput"
              placeholder="Please enter your user id (0-100)"
              min={1}
              max={100}
              defaultValue={type === "update" && post.userId}
              required
              onChange={(e) => setUserId(e.target.value)}
            />
            <Label>Title</Label>
            <Input
              type="text"
              maxLength={30}
              className="w-100 post_titleInput"
              placeholder="Enter title"
              defaultValue={type === "update" ? post.title : ""}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <Label>Text</Label>
            <Input
              type="textarea"
              maxLength={250}
              className="w-100 post_textArea"
              placeholder="Enter text (maximum length 250 characters)"
              defaultValue={type === "update" ? post.body : ""}
              required
              onChange={(e) => setBody(e.target.value)}
            />
            <div className="d-flex justify-content-evenly pt-5">
              <ReusableButton style={"cancel_button"} onClick={cancelHandler}>
                Cancel
              </ReusableButton>
              {type === "add" && (
                <ReusableButton style={"add_button"}>Add</ReusableButton>
              )}
              {type === "update" && (
                <ReusableButton style={"add_button"}>Update</ReusableButton>
              )}
            </div>
          </Form>
        )}
        {type === "delete" && (
          <div className="d-flex justify-content-around pt-5">
            <ReusableButton style={"cancel_button"} onClick={cancelHandler}>
              Cancel
            </ReusableButton>
            <ReusableButton style={"add_button"} onClick={deletePostHandler}>
              Confirm
            </ReusableButton>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ReusableModal;
