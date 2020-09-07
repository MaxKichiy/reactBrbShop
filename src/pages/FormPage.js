import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import MyTextInput from '../components/Form/MyTextInput';
import MyRadioInput from '../components/Form/MyRadioInput';

function FormPage() {
  return (
    <main className='page-form'>
      <div className='page-form__wrapper'>
        <h1 className='page-form__title'>Запись на стрижку</h1>
        <NavLink to='/' className='portfolio__button page-form__button button'>
          На главную
        </NavLink>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            fatherName: '',
            phone: '',
            email: '',
            info: '',
            beard: '',
            'Подкрасить бороду': false,
            'Причесать бороду': false,
            'Убрать седину': false,
            'Накрутить усы': false,
            'Подровнять виски': false,
            'Отполировать лысину': false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(20, 'максимум 20 символов')
              .required('Обязательное поле'),
            lastName: Yup.string()
              .max(15, 'максимум 15 символов')
              .required('Обязательное поле'),
            phone: Yup.number()
              .min(11111111, 'номер должен состоять из 10 цифр, начиная с 0')
              .lessThan(999999999, 'idi naxooy pidar')
              .required('Обязательное поле'),
            email: Yup.string()
              .email('Не верный email адресс')
              .required('Обязательное поле'),
            beard: Yup.string()
              .oneOf(
                ['admiral', 'polar', 'wood', 'boyar', 'wiseman'],
                'Invalid Job Type'
              )
              .required('Обязательное поле'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .post(
                'https://reactbrbshop.firebaseio.com/orders.json',
                JSON.stringify(values, null, 2)
              )
              .then((response) => {
                setSubmitting(false);
              });
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          <Form className='page-form__form'>
            <div className='page-form__name'>
              <MyTextInput name='firstName' type='text' placeholder='Имя' />
              <MyTextInput name='lastName' type='text' placeholder='Фамилия' />
              <MyTextInput
                name='fatherName'
                type='text'
                placeholder='Отчество'
              />
            </div>
            <div className='page-form__data'>
              <MyTextInput
                type='tel'
                name='phone'
                placeholder='Контактный телефон'
              />
              <MyTextInput
                type='email'
                name='email'
                placeholder='Контактный e-mail'
              />
            </div>
            <MyTextInput
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
                  <MyRadioInput
                    label='адмирал'
                    type='radio'
                    value='admiral'
                    name='beard'
                    id='admiral'
                  />
                </li>
                <li className='beard-filter__option form__beard--wood'>
                  <MyRadioInput
                    label='лесоруб'
                    type='radio'
                    value='wood'
                    name='beard'
                    id='wood'
                  />
                </li>
                <li className='beard-filter__option form__beard--polar'>
                  <MyRadioInput
                    label='полярник'
                    type='radio'
                    value='polar'
                    name='beard'
                    id='polar'
                  />
                </li>
                <li className='beard-filter__option form__beard--boyar'>
                  <MyRadioInput
                    label='боярин'
                    type='radio'
                    value='boyar'
                    name='beard'
                    id='boyar'
                  />
                </li>
                <li className='beard-filter__option form__beard--wiseman'>
                  <MyRadioInput
                    label='мудрец'
                    type='radio'
                    value='wiseman'
                    name='beard'
                    id='wiseman'
                  />
                </li>
              </ul>
            </fieldset>
            <fieldset className='page-form__addition-settings addition-settings'>
              <legend className='addition-settings__title'>
                Дополнительные услуги:
              </legend>
              <ul>
                <li className='addition-settings__option'>
                  <MyTextInput
                    label='Подкрасить бороду'
                    type='checkbox'
                    name='Подкрасить бороду'
                    id='color'
                  />
                </li>
                <li className='addition-settings__option'>
                  <MyTextInput
                    label='Накрутить усы'
                    type='checkbox'
                    name='Накрутить усы'
                    id='spin'
                  />
                </li>
                <li className='addition-settings__option'>
                  <MyTextInput
                    label='Причесать бороду'
                    type='checkbox'
                    name='Причесать бороду'
                    id='comb'
                  />
                </li>
                <li className='addition-settings__option'>
                  <MyTextInput
                    label='Подровнять виски'
                    type='checkbox'
                    name='Подровнять виски'
                    id='align'
                  />
                </li>
                <li className='addition-settings__option'>
                  <MyTextInput
                    label='Убрать седину'
                    type='checkbox'
                    name='Убрать седину'
                    id='grey'
                  />
                </li>
                <li className='addition-settings__option'>
                  <MyTextInput
                    label='Отполировать лысину'
                    type='checkbox'
                    name='Отполировать лысину'
                    id='polish'
                  />
                </li>
              </ul>
            </fieldset>
            <button className='form__button button' type='submit'>
              Отправить заявку
            </button>
          </Form>
        </Formik>
      </div>
      <div className='main__arrow news__arrow'></div>
    </main>
  );
}

export default FormPage;
