import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/Form/MyTextInput';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { resetPassword } from '../redux/actions/auth';

function Forgot(props) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const clickHandler = () => {
    history.push(history.location.pathname.replace('/forgot', ''));
  };
  return (
    <section className='login login-forgot'>
      <div className='login__wrapper'>
        <h2 className='login__title'>Личный кабинет</h2>
        <p className='login__text'>Введите email для возобновления пароля</p>
        {error && (
          <div style={{ textAlign: 'center', color: 'red' }}>{error}</div>
        )}
        {message && (
          <div style={{ textAlign: 'center', color: 'green' }}>{message}</div>
        )}
        <Formik
          initialValues={{
            login: '',
          }}
          validationSchema={Yup.object({
            login: Yup.string()
              .email('Не верный email адрес')
              .required('Обязательное поле'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setError('');
            setMessage('');
            try {
              await resetPassword(values.login);
              setMessage('Check email for further instructions');
            } catch {
              return setError('Something went wrong');
            }

            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          {(formik) => (
            <Form className='login-form'>
              <div className='login-from__wrapper'>
                <MyTextInput
                  className='login__email'
                  name='login'
                  type='text'
                  placeholder='Ваш email'
                />
              </div>
              <div className='button__wrapper'>
                <button
                  type='submit'
                  className={classNames('login__button', 'button', {
                    'button--disable': formik.isSubmitting || !formik.dirty,
                  })}
                >
                  Отправить
                </button>
                <button
                  onClick={clickHandler}
                  type='button'
                  className='button  login__button--close '
                >
                  Закрыть
                </button>
                <button
                  onClick={clickHandler}
                  type='button'
                  className='button  login__button--tablet '
                ></button>
              </div>
            </Form>
          )}
        </Formik>
        <div className='login__text'>
          Есть аккаунт?
          <Link
            to={(location) => location.pathname.replace('/forgot', '/login')}
          >
            &nbsp; Логин
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Forgot;
