import "./index.css";
import { Modal, Form, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import ReusableButton from "./ReusableButton";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../store/postsSlice";
import { useState } from "react";

const ReusableModal = (props) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const { type, toggle, isOpen, post } = props;

  // Add new post
  const addNewPostHandler = (e) => {
    e.preventDefault();
    const newPost = {
      userId: +userId,
      title,
      body,
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
  };

  return (
    <Modal centered fullscreen="md" size="lg" toggle={toggle} isOpen={isOpen}>
      <ModalBody>
        <h1 className="modal_header">
          {type === "add" ? "Add new" : type === "delete" ? "Delete" : "Update"}{" "}
          post
        </h1>
        <Form>
          <Label>User id</Label>
          <Input
            type="number"
            className="w-100 post_titleInput"
            placeholder="Please enter your user id"
            min={0}
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
        </Form>
      </ModalBody>
      <ModalFooter className="justify-content-evenly">
        <ReusableButton style={"cancel_button"} onClick={() => props.toggle()}>
          Cancel
        </ReusableButton>
        {type === "add" && (
          <ReusableButton style={"add_button"} onClick={addNewPostHandler}>
            Add
          </ReusableButton>
        )}
        {type === "update" && (
          <ReusableButton style={"add_button"} onClick={updatePostHandler}>
            Update
          </ReusableButton>
        )}
        {type === "delete" && (
          <ReusableButton style={"add_button"} onClick={deletePostHandler}>
            Confirm
          </ReusableButton>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default ReusableModal;
