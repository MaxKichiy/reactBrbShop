import React, { useState } from 'react';
import ReviewsTiles from './ReviewsTiles';
import SliderButton from './SliderButton';
import ReviewsButton from './ReviewsButton';
import { useEffect } from 'react';
import { fetchReviews } from '../redux/actions/reviews';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../components/Form/MyTextInput';
import classNames from 'classnames';

function Reviews(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
  }, []);
  const reviews = useSelector((state) => state.reviews.reviews);
  // const [isLoaded, setIsLoaded] = useState(
  //   useSelector((state) => state.news.isLoaded)
  // );
  const [showForm, setShowForm] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const revTypes = ['first', 'second', 'third'];
  const revs = reviews.map((el) => (
    <>
      <p className='reviews__author-picture'>
        <img
          className='reviews__author-image'
          src={el.logo}
          alt='Фото человека'
          width='50'
          height='50'
        />
      </p>
      <p className='reviews__text'>
        <cite className='reviews__author-name'>{el.name}</cite>
        <br />
        {el.text}
      </p>
    </>
  ));

  const onClickRevHandler = (data) => {
    setIsActive(revTypes.indexOf(data));
    if (data === 'prev' && isActive === 0) {
      setIsActive(2);
    } else if (data === 'next' && isActive === 2) {
      setIsActive(0);
    } else if (data === 'prev') {
      setIsActive(isActive - 1);
    } else if (data === 'next') {
      setIsActive(isActive + 1);
    }
  };

  const onRevHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <section className='reviews'>
      <div className='reviews__wrapper slider'>
        <h2 className='reviews__title'>Отзывы о нас</h2>
        <button
          onClick={onRevHandler}
          className='portfolio__button reviews__write button'
        >
          Оставить свой
        </button>
        {showForm && (
          <div className='reviews__post'>
            <Formik
              initialValues={{
                name: '',
                text: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Обязательное поле'),
                text: Yup.string().required('Обязательно поле'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <Form className='page-form__form'>
                  <div className='page-form__name'>
                    <MyTextInput
                      name='name'
                      type='text'
                      placeholder='Ваше Имя'
                    />
                    <MyTextInput
                      as='textarea'
                      className='review'
                      rows='7'
                      name='text'
                      type='text'
                      placeholder='Ваш отзыв'
                    />
                    <button
                      type='submit'
                      className={classNames('form__button', 'button', {
                        'button--disable': formik.isSubmitting || !formik.dirty,
                      })}
                    >
                      Отправить
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
        <div className='reviews__list slider__list'>
          {revTypes.map((el, index) => {
            let activeRev = isActive === index ? true : false;
            return (
              <CSSTransition
                key={`${el}_${index}_rev`}
                in={activeRev}
                timeout={300}
                classNames='my-node'
              >
                <ReviewsTiles
                  key={`${el}_${index}_rev`}
                  active={activeRev}
                  type={el}
                >
                  {revs[index]}
                </ReviewsTiles>
              </CSSTransition>
            );
          })}

          <ReviewsButton type='prev' onClick={onClickRevHandler} />
          <ReviewsButton type='next' onClick={onClickRevHandler} />
        </div>
        <p className='reviews__toggles slider__toggles'>
          {revTypes.map((el, index) => {
            let activeOn = isActive === index ? true : false;
            return (
              <SliderButton
                active={activeOn}
                onClick={onClickRevHandler}
                type={el}
                key={`${el}_${index}`}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

export default Reviews;
