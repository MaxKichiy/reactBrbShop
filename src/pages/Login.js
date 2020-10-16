import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/Form/MyTextInput';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { login } from '../redux/actions/auth';

function Login(props) {
  const [error, setError] = useState('');
  const history = useHistory();
  const clickHandler = () => {
    history.push(history.location.pathname.replace('/login', ''));
  };
  return (
    <section className='login'>
      <div className='login__wrapper'>
        <h2 className='login__title'>Личный кабинет</h2>
        <p className='login__text'>Введите свой логин и пароль, чтобы войти</p>
        {error && (
          <div style={{ textAlign: 'center', color: 'red' }}>{error}</div>
        )}
        <Formik
          initialValues={{
            login: '',
            password: '',
            remember: '',
          }}
          validationSchema={Yup.object({
            login: Yup.string()
              .email('Не верный email адрес')
              .required('Обязательное поле'),
            password: Yup.string().required('Обязательное поле'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setError('');
            try {
              await login(values.login, values.password);
              history.push('/');
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
                <MyTextInput
                  className='login__password'
                  name='password'
                  type='password'
                  placeholder='Пароль'
                />
                <div className='checkbox__wrapper'>
                  <MyTextInput
                    className='login__checkbox'
                    label='Запомните меня'
                    name='Запомните меня'
                    type='checkbox'
                    id='remember'
                  />
                  <Link
                    to={(location) =>
                      location.pathname.replace('/login', '/forgot')
                    }
                  >
                    Я забыл пароль!
                  </Link>
                </div>
              </div>
              <div className='button__wrapper'>
                <button
                  type='submit'
                  className={classNames('login__button', 'button', {
                    'button--disable': formik.isSubmitting || !formik.dirty,
                  })}
                >
                  Войти
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
          Нет аккаунта?
          <Link
            to={(location) => location.pathname.replace('/login', '/signup')}
          >
            &nbsp; Зарегистрируйтесь
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
