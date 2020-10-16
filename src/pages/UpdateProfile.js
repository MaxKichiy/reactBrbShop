import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/Form/MyTextInput';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { logout, updateEmail, updatePassword } from '../redux/actions/auth';

function UpdateProfile() {
  const [edit, setEdit] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [error, setError] = useState('');
  const history = useHistory();
  const clickHandler = () => {
    history.push(history.location.pathname.replace('/update-profile', ''));
  };

  const logoutHandler = async () => {
    await logout();
    history.push(history.location.pathname.replace('/update-profile', ''));
  };
  return (
    <section className='login login-update'>
      <div className='login__wrapper'>
        <h2 className='login__title'>Личный кабинет</h2>
        {error && (
          <div style={{ textAlign: 'center', color: 'red' }}>{error}</div>
        )}
        {edit ? (
          <Formik
            initialValues={{
              login: '',
              password: '',
              confirmedPass: '',
            }}
            validationSchema={Yup.object({
              login: Yup.string().email('Не верный email адрес'),
              password: Yup.string(),
              confirmedPass: Yup.string(),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              setError('');
              if (values.confirmedPass !== values.password) {
                return setError('Пароли не совпадают');
              }
              const promises = [];
              if (values.login === '') {
                promises.push(updateEmail(currentUser, currentUser.email));
              } else {
                promises.push(updateEmail(currentUser, values.login));
              }
              if (values.password) {
                promises.push(updatePassword(currentUser, values.password));
              }

              Promise.all(promises)
                .then(() => {
                  history.push('/');
                })
                .catch(() => setError('Failed to update account'))

                .finally(() => {
                  history.push('/');
                  alert('Перезайдите в аккаунт');
                });
            }}
          >
            {(formik) => (
              <Form className='login-form'>
                <div className='login-from__wrapper'>
                  <MyTextInput
                    className='login__email'
                    name='login'
                    type='text'
                    placeholder={currentUser && currentUser.email}
                  />
                  <MyTextInput
                    className='login__password'
                    name='password'
                    type='password'
                    placeholder='Оставьте пустым если не хотите менять'
                  />
                  <MyTextInput
                    className='login__password'
                    name='confirmedPass'
                    type='password'
                    placeholder='Оставьте пустым если не хотите менять'
                  />
                </div>
                <div className='button__wrapper'>
                  <button
                    type='submit'
                    className={classNames('login__button', 'button', {
                      'button--disable': formik.isSubmitting || !formik.dirty,
                    })}
                  >
                    Изменить
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
        ) : (
          <>
            <p className='login__text'>
              <strong>Email:</strong> {currentUser && currentUser.email}
            </p>

            <button
              onClick={() => setEdit(!edit)}
              className='login__text button'
              style={{ cursor: 'pointer' }}
            >
              Изменить данные
            </button>
            <button
              onClick={logoutHandler}
              className='login__text button'
              style={{ cursor: 'pointer' }}
            >
              Выйти
            </button>
            <div className='button__wrapper'>
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
          </>
        )}
      </div>
    </section>
  );
}

export default UpdateProfile;
