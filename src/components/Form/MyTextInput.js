import React from 'react';
import { useField } from 'formik';

function MyTextInput({ label, as, ...props }) {
  const [field, meta] = useField(props);
  console.log(as);
  let inputDron = (
    <div className='name__input'>
      <input type='text' {...field} {...props} />
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className='form_error'>{meta.error}</div>
      ) : null}
    </div>
  );

  if (as === 'textarea') {
    inputDron = <textarea type='text' {...field} {...props} />;
  }
  return inputDron;
}

export default MyTextInput;
