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

const ReusableModal = (props) => {
  return (
    <div>
      <Modal
        centered
        fullscreen="md"
        size="md"
        toggle={props.toggle}
        isOpen={props.isOpen}
      >
        <ModalBody>
          <h1 className="modal_header">Add new post</h1>
          <Form>
            <Label>Title</Label>
            <Input
              type="text"
              maxLength={30}
              className="w-100 post_titleInput"
              placeholder="Enter title"
              required
              // onChange={(e) => setTitle(e.target.value)}
            />
            <Label>Text</Label>
            <Input
              type="textarea"
              maxLength={250}
              className="w-100 post_textArea"
              placeholder="Enter text (maximum length 250 characters)"
              required
              // onChange={(e) => setTitle(e.target.value)}
            />
          </Form>
        </ModalBody>
        <ModalFooter className="justify-content-evenly">
          <ReusableButton
            style={"cancel_button"}
            onClick={() => props.toggle()}
          >
            Cancel
          </ReusableButton>
          <ReusableButton style={"add_button"}>Add</ReusableButton>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ReusableModal;
