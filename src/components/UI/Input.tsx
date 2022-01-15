import React from 'react';
import classes from './Input.module.css';

interface InputProps {
  label?: string;
  input?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = React.forwardRef((props: InputProps, ref?: React.Ref<HTMLInputElement>) => {
  return (
    <div className={classes.input}>
      {props.input && props.input.id && <label htmlFor={props.input.id}>{props.label}</label>}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
