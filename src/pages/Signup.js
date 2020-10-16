import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/Form/MyTextInput';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { signup } from '../redux/actions/auth';

function Signup(props) {
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const clickHandler = () => {
    history.push(history.location.pathname.replace('/signup', ''));
  };
  return (
    <section className='login login-signup'>
      <div className='login__wrapper'>
        <h2 className='login__title'>Личный кабинет</h2>
        <p className='login__text'>Введите логин и пароль, для регистрации</p>
        {error && (
          <div style={{ textAlign: 'center', color: 'red' }}>{error}</div>
        )}

        <Formik
          initialValues={{
            login: '',
            password: '',
            confirmedPass: '',
          }}
          validationSchema={Yup.object({
            login: Yup.string()
              .email('Не верный email адрес')
              .required('Обязательное поле'),
            password: Yup.string().required('Обязательное поле'),
            confirmedPass: Yup.string().required('Обязательное поле'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setError('');
            if (values.confirmedPass !== values.password) {
              return setError('Пароли не совпадают');
            }
            try {
              await signup(values.login, values.password);
              history.push('/');
            } catch {
              return setError('Something went wrong');
            }
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
                <MyTextInput
                  className='login__password'
                  name='confirmedPass'
                  type='password'
                  placeholder='Повторите пароль'
                />
              </div>
              <div className='button__wrapper'>
                <button
                  type='submit'
                  className={classNames('login__button', 'button', {
                    'button--disable': formik.isSubmitting || !formik.dirty,
                  })}
                >
                  Зарегистрировать
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
            to={(location) => location.pathname.replace('/signup', '/login')}
          >
            &nbsp; Залогинтесь
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Signup;
