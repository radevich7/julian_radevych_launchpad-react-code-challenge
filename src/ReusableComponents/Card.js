import { AiOutlineDelete } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./index.css";

const PostCard = (props) => {
  const post = {
    id: props.id,
    body: props.body,
    title: props.title,
    userId: props.userId,
  };
  const updateHandler = () => {
    props.update(post);
  };
  const deleteHandler = () => {
    props.delete(post);
  };

  return (
    <Card className={`posts_card m-2 ${props.evenStyle}`}>
      <CardBody className="d-flex flex-column justify-content-start align-items-center position-relative">
        {/* Delete */}
        <span className="deletePost_button" onClick={deleteHandler}>
          <AiOutlineDelete />
        </span>
        {/* Update */}
        <span className="updatePost_button" onClick={updateHandler}>
          <MdSystemUpdateAlt />
        </span>
        <CardTitle tag="h5" className={`posts_title1 ${props.evenStyle} pt-5`}>
          ID {props.id}
        </CardTitle>
        <CardSubtitle className="mb-2 posts_title2" tag="h6">
          {props.title}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default PostCard;
