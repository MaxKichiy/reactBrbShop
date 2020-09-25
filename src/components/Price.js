import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPrices } from '../redux/actions/prices';

function Price() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPrices());
  }, [dispatch]);
  const prices = useSelector((state) => state.prices.prices);
  // console.log(prices);
  const privetList = prices.map((el, index) => (
    <tr key={`${el.price_count}_${index}`}>
      <td className='price__description'>
        <b>{el.price_name}</b>
        <br />
        <span>{el.washing ? '(с мытьём головы)' : '(без мытья)'}</span>
      </td>
      <td className='price__amount'>{`${el.price_amount} ${el.price_currency}`}</td>
    </tr>
  ));
  return (
    <section className='price'>
      <div className='price__wrapper'>
        <h2 className='price__title'>ПРЕЙСКУРАНТ</h2>
        <table className='price__table'>
          <tbody>{privetList}</tbody>
        </table>
        <div className='price__discount'>
          <p className='price__discount-title'>
            C 10:00 до 14:00 <br />
            скидка 20%
          </p>
        </div>
      </div>
    </section>
  );
}

export default Price;
