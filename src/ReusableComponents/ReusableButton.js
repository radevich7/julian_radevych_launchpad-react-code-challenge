import "./index.css";

const ReusableButton = (props) => {
  return (
    <button className={`button_main ${props.styles}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ReusableButton;
