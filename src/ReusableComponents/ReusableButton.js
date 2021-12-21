import "./index.css";

const ReusableButton = (props) => {
  return <button className="button_main">{props.children}</button>;
};

export default ReusableButton;
