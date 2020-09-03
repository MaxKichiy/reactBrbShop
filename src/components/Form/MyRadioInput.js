import React from 'react';
import { useField } from 'formik';

function MyRadioInput({ label, as, ...props }) {
  const [field, meta] = useField(props);
  console.log(as);
  let inputDron = (
    <>
      <div className='radio__input'>
        <input type='text' {...field} {...props} />
        <label htmlFor={props.id || props.name}>{label}</label>
      </div>
      {meta.touched && meta.error ? (
        <div className='radio_error'>{meta.error}</div>
      ) : null}
    </>
  );

  return inputDron;
}

export default MyRadioInput;
