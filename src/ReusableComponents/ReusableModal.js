import "./index.css";
import {
  ModalHeader,
  Modal,
  Form,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import ReusableButton from "./ReusableButton";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/postsSlice";
import { useState } from "react";

const ReusableModal = (props) => {
  const { type, toggle, isOpen, post } = props;
  const [userId, setUserId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  // Getting posts from the store
  // const { posts } = useSelector((state) => state.posts);

  // Add new post
  const dispatch = useDispatch();
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

  return (
    <Modal centered fullscreen="md" size="lg" toggle={toggle} isOpen={isOpen}>
      <ModalBody>
        <h1 className="modal_header">Add new post</h1>
        <Form>
          <Label>User id</Label>
          <Input
            type="number"
            className="w-100 post_titleInput"
            placeholder="Please enter your user id"
            min={0}
            max={100}
            required
            onChange={(e) => setUserId(e.target.value)}
          />
          <Label>Title</Label>
          <Input
            type="text"
            maxLength={30}
            className="w-100 post_titleInput"
            placeholder="Enter title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>Text</Label>
          <Input
            type="textarea"
            maxLength={250}
            className="w-100 post_textArea"
            placeholder="Enter text (maximum length 250 characters)"
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </Form>
      </ModalBody>
      <ModalFooter className="justify-content-evenly">
        <ReusableButton style={"cancel_button"} onClick={() => props.toggle()}>
          Cancel
        </ReusableButton>
        <ReusableButton style={"add_button"} onClick={addNewPostHandler}>
          Add
        </ReusableButton>
      </ModalFooter>
    </Modal>
  );
};

export default ReusableModal;
