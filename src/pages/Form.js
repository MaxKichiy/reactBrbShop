import React from 'react';
import { NavLink } from 'react-router-dom';

function Form() {
  return (
    <main className='page-form'>
      <div className='page-form__wrapper'>
        <h1 className='page-form__title'>Запись на стрижку</h1>
        <NavLink to='/' className='page-form__button button'>
          На главную
        </NavLink>
        <form className='page-form__form'>
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
                  checked
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
                  checked
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
        </form>
      </div>
      <div className='main__arrow news__arrow'></div>
    </main>
  );
}

export default Form;
