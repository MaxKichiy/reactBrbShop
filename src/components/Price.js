import React from 'react';

function Price() {
  return (
    <section className='price'>
      <div className='price__wrapper'>
        <h2 className='price__title'>ПРЕЙСКУРАНТ</h2>
        <table className='price__table'>
          <tbody>
            <tr>
              <td className='price__description'>
                <b>Классическая стрижка</b>
                <br />
                <span>(с мытьём головы)</span>
              </td>
              <td className='price__amount'>1 500 руб.</td>
            </tr>
            <tr>
              <td className='price__description'>
                <b>Современный вариант</b>
                <br />
                <span>(с мытьём головы)</span>
              </td>
              <td className='price__amount'>1 500 руб.</td>
            </tr>
            <tr>
              <td className='price__description'>
                <b>Индивидуальный подход</b>
                <br />
                <span>(с мытьём головы)</span>
              </td>
              <td className='price__amount'>2 000 руб.</td>
            </tr>
            <tr>
              <td className='price__description'>
                <b>Бритьё головы</b>
                <br />
                <span>(без мытья)</span>
              </td>
              <td className='price__amount'>500 руб.</td>
            </tr>
            <tr>
              <td className='price__description'>
                <b>Бритьё головы</b>
                <br />
                <span>(с мытьём головы)</span>
              </td>
              <td className='price__amount'>1 000 руб.</td>
            </tr>
          </tbody>
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
