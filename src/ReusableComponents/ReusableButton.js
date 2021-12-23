import "./index.css";

const ReusableButton = (props) => {
  return (
    <button className={`button_main ${props.style}`}>{props.children}</button>
  );
};

export default ReusableButton;
