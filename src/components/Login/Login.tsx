import React, { useState, useContext } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import classes from './Login.module.css';
import { useInput, useFetch } from '../../hooks';
import { isNotEmpty, isPassword } from '../../helper/validate';
import AuthContext from '../../store/auth-context';
import { Todo } from '../../types/todo';

const Login = () => {
  const {
    value: id,
    isValid: idIsValid,
    hasError: idHasError,
    onBlur: idBlurHandler,
    onChange: idChangeHandler,
  } = useInput(isNotEmpty);
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    onBlur: passwordBlurHandler,
    onChange: passwordChangeHandler,
  } = useInput(isPassword);

  const [data, setData] = useState();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(idIsValid && passwordIsValid)) {
      return;
    }

    authCtx.login('abc', 100000000000000);

    // try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //   if (response.ok) authCtx.login('abc', 100000000000000);
    //   else setError(new Error('Request Failed!'));
    //   const data2 = response.data.json();
    // } catch (e) {
    //   setError(e);
    // }
  };

  const onCloseModal = () => {
    setError(null);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error != null)
    return (
      <Modal onClose={onCloseModal}>
        <div>{error.message}</div>
        <button onClick={onCloseModal}>닫기</button>
      </Modal>
    );

  return (
    <form className={classes['login-form']} onSubmit={onSubmit}>
      <div className={idHasError ? classes.invalid : ''}>
        <Input label='id' input={{ type: 'text', onChange: idChangeHandler, onBlur: idBlurHandler, value: id }} />
      </div>
      <div className={passwordHasError ? classes.invalid : ''}>
        <Input
          label='password'
          input={{ type: 'text', onChange: passwordChangeHandler, onBlur: passwordBlurHandler, value: password }}
        />
      </div>
      <Button label='Login' button={{ type: 'submit' }} />
    </form>
  );
};

export default Login;
