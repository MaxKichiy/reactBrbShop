import React from 'react';
import { Formik, Form, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/Form/MyTextInput';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../redux/actions/auth';
import classNames from 'classnames';

function Login(props) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    props.history.push(props.location.pathname.replace('/login', ''));
  };
  return (
    <section className='login'>
      <div className='login__wrapper'>
        <h2 className='login__title'>Личный кабинет</h2>
        <p className='login__text'>Введите свой логин и пароль, чтобы войти</p>

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
          onSubmit={(values, { setSubmitting }) => {
            dispatch(auth(values.login, values.password));
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
                  <NavLink to='/forget'>Я забыл пароль!</NavLink>
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
      </div>
    </section>
  );
}

export default withRouter(Login);
