import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormPage() {
  return (
    <main className='page-form'>
      <div className='page-form__wrapper'>
        <h1 className='page-form__title'>Запись на стрижку</h1>
        <NavLink to='/' className='page-form__button button'>
          На главную
        </NavLink>
        <Formik
          initialValues={{
            lastName: '',
            firstName: '',
            fatherName: '',
            phone: '',
            email: '',
            info: '',
          }}
          // validationSchema={Yup.object({
          //   lastName: Yup.string()
          //     .max(15, 'максимум 15 символов')
          //     .required('Обязательное поле'),
          //   firstName: Yup.string()
          //     .max(20, 'максимум 20 символов')
          //     .required('Обязательное поле'),
          //   phone: Yup.number()
          //     .max(10, 'номер должен состоять из 10 цифр, начиная с 0')
          //     .required('Обязательное поле'),
          //   email: Yup.string()
          //     .email('Не верный email адресс')
          //     .required('Обязательное поле'),
          // })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className='page-form__form'>
            <div className='page-form__name'>
              <Field name='lastName' type='text' placeholder='Фамилия' />
              <Field name='firstName' type='text' placeholder='Имя' />
              <Field name='fatherName' type='text' placeholder='Отчество' />
            </div>
            <fieldset className='page-form__data'>
              <Field type='tel' name='phone' placeholder='Контактный телефон' />
              <Field
                type='email'
                name='email'
                placeholder='Контактный e-mail'
              />
            </fieldset>
            <Field
              as='textarea'
              type='text'
              name='info'
              cols='37'
              rows='6'
              placeholder='Доп. информация для мастера'
            />
            <fieldset className='page-form__beard-radio beard-selector'>
              <legend className='beard-selector__title'>
                Выберите модель бороды:
              </legend>
              <ul>
                <li className='beard-filter__option form__beard--admiral'>
                  <Field
                    type='radio'
                    value='admiral'
                    name='beard'
                    id='admiral'
                  />
                  <label htmlFor='admiral'>адмирал</label>
                </li>
                <li className='beard-filter__option form__beard--wood'>
                  <Field type='radio' value='wood' name='beard' id='wood' />
                  <label htmlFor='wood'>лесоруб</label>
                </li>
                <li className='beard-filter__option form__beard--polar'>
                  <Field type='radio' value='polar' name='beard' id='polar' />
                  <label htmlFor='polar'>полярник</label>
                </li>
                <li className='beard-filter__option form__beard--boyar'>
                  <Field type='radio' value='boyar' name='beard' id='boyar' />
                  <label htmlFor='boyar'>боярин</label>
                </li>
                <li className='beard-filter__option form__beard--wiseman'>
                  <Field
                    type='radio'
                    value='wiseman'
                    name='beard'
                    id='wiseman'
                  />
                  <label htmlFor='wiseman'>мудрец</label>
                </li>
              </ul>
            </fieldset>
            <fieldset className='page-form__addition-settings addition-settings'>
              <legend className='addition-settings__title'>
                Дополнительные услуги:
              </legend>
              <ul>
                <li className='addition-settings__option'>
                  <Field
                    type='checkbox'
                    name='Подкрасить бороду'
                    value='Подкрасить бороду'
                    id='color'
                  />
                  <label htmlFor='color'>Подкрасить бороду</label>
                </li>
                <li className='addition-settings__option'>
                  <Field type='checkbox' name='Накрутить усы' id='spin' />
                  <label htmlFor='spin'>Накрутить усы</label>
                </li>
                <li className='addition-settings__option'>
                  <Field type='checkbox' name='Причесать бороду' id='comb' />
                  <label htmlFor='comb'>Причесать бороду</label>
                </li>
                <li className='addition-settings__option'>
                  <Field type='checkbox' name='Подровнять виски' id='align' />
                  <label htmlFor='align'>Подровнять виски</label>
                </li>
                <li className='addition-settings__option'>
                  <Field type='checkbox' name='Убрать седину' id='grey' />
                  <label htmlFor='grey'>Убрать седину</label>
                </li>
                <li className='addition-settings__option'>
                  <Field
                    type='checkbox'
                    name='Отполировать лысину'
                    id='polish'
                  />
                  <label htmlFor='polish'>Отполировать лысину</label>
                </li>
              </ul>
            </fieldset>
            <button className='form__button button' type='submit'>
              Отправить заявку
            </button>
          </Form>
        </Formik>

        {/* <form className='page-form__form'>
          <div className='page-form__name'>
            <input type='text' name='surname' placeholder='Фамилия' />
            <input type='text' name='name' placeholder='Имя' />
            <input type='text' name='fatherName' placeholder='Отчество' />
          </div>

          <fieldset className='page-form__data'>
            <input type='tel' name='phone' placeholder='Контактный телефон' />
            <input type='email' name='email' placeholder='Контактный e-mail' />
          </fieldset>

          <textarea
            name='info'
            cols='37'
            rows='6'
            placeholder='Доп. информация для мастера'
          ></textarea>

          <fieldset className='page-form__beard-radio beard-selector'>
            <legend className='beard-selector__title'>
              Выберите модель бороды:
            </legend>
            <ul>
              <li className='beard-filter__option form__beard--admiral'>
                <input
                  defaultChecked
                  type='radio'
                  value='admiral'
                  name='beard'
                  id='admiral'
                ></input>
                <label htmlFor='admiral'>адмирал</label>
              </li>
              <li className='beard-filter__option form__beard--wood'>
                <input type='radio' value='wood' name='beard' id='wood'></input>
                <label htmlFor='wood'>лесоруб</label>
              </li>
              <li className='beard-filter__option form__beard--polar'>
                <input
                  type='radio'
                  value='polar'
                  id='polar'
                  name='beard'
                ></input>
                <label htmlFor='polar'>полярник</label>
              </li>
              <li className='beard-filter__option form__beard--boyar'>
                <input
                  type='radio'
                  value='boyar'
                  id='boyar'
                  name='beard'
                ></input>
                <label htmlFor='boyar'>боярин</label>
              </li>
              <li className='beard-filter__option form__beard--wiseman'>
                <input
                  type='radio'
                  value='wiseman'
                  id='wiseman'
                  name='beard'
                ></input>
                <label htmlFor='wiseman'>мудрец</label>
              </li>
            </ul>
          </fieldset>

          <fieldset className='page-form__addition-settings addition-settings'>
            <legend className='addition-settings__title'>
              Дополнительные услуги:
            </legend>
            <ul>
              <li className='addition-settings__option'>
                <input
                  defaultChecked
                  type='checkbox'
                  name='Подкрасить бороду'
                  value='Подкрасить бороду'
                  id='color'
                />
                <label htmlFor='color'>Подкрасить бороду</label>
              </li>
              <li className='addition-settings__option'>
                <input type='checkbox' name='Накрутить усы' id='spin' />
                <label htmlFor='spin'>Накрутить усы</label>
              </li>
              <li className='addition-settings__option'>
                <input type='checkbox' name='Причесать бороду' id='comb' />
                <label htmlFor='comb'>Причесать бороду</label>
              </li>
              <li className='addition-settings__option'>
                <input type='checkbox' name='Подровнять виски' id='align' />
                <label htmlFor='align'>Подровнять виски</label>
              </li>
              <li className='addition-settings__option'>
                <input type='checkbox' name='Убрать седину' id='grey' />
                <label htmlFor='grey'>Убрать седину</label>
              </li>
              <li className='addition-settings__option'>
                <input type='checkbox' name='Отполировать лысину' id='polish' />
                <label htmlFor='polish'>Отполировать лысину</label>
              </li>
            </ul>
          </fieldset>

          <input
            className='form__button button'
            type='submit'
            value='Отправить заявку'
          />
        </form> */}
      </div>
      <div className='main__arrow news__arrow'></div>
    </main>
  );
}

export default FormPage;
