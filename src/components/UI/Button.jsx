import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      {...props.button}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
