import { AiOutlineDelete } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "./index.css";

const PostCard = (props) => {
  return (
    <Card className={`posts_card m-2 ${props.evenStyle}`}>
      <CardBody className="d-flex flex-column justify-content-center align-items-center position-relative">
        <span className="deletePost_button">
          <AiOutlineDelete />
        </span>
        <span className="updatePost_button">
          <MdSystemUpdateAlt />
        </span>
        <CardTitle tag="h5" className={`posts_title1 ${props.evenStyle}`}>
          ID 1
        </CardTitle>
        <CardSubtitle className="mb-2 posts_title2" tag="h6">
          magnam facilis autem
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default PostCard;
