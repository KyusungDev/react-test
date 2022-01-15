import { useState } from 'react';

const useInput = (validator) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = typeof validator === 'function' ? validator(value) : true;
  const hasError = !isValid && isTouched;

  const onBlur = () => {
    setIsTouched(true);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    onChange,
    onBlur,
    reset,
  };
};

export default useInput;
