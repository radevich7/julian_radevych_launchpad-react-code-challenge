import "./index.css";

const ReusableButton = (props) => {
  return (
    <button className={`button_main ${props.style}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ReusableButton;
