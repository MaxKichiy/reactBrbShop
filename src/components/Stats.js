import React from 'react';

function Stats() {
  return (
    <section className='stats'>
      <header className='stats__header'>
        <h2 className='visually-hidden'>Статистика барбершопа</h2>
        <b className='stats__slogan'>
          Стрижка у нас <br />
          это выгодно!
        </b>
        <p className='stats__intro'>
          Мужская стрижка требует точного подхода. Обратимся к статистике:
        </p>
        <small className='stats__legend stats__legend--top'>
          <sup>*</sup> — приведённые данные ложь
        </small>
      </header>
      <table className='stats__list'>
        <tbody>
          <tr>
            <td className='stats__value'>
              1 500 <sup>*</sup>
            </td>
            <td className='stats__field'>
              рублей <br />
              вложений
            </td>
          </tr>
          <tr>
            <td className='stats__value'>
              7 200 <sup>*</sup>
            </td>
            <td className='stats__field'>
              секунд &nbsp;
              <br />
              времени мастера
            </td>
          </tr>
          <tr>
            <td className='stats__value'>
              90 000 <sup>*</sup>
            </td>
            <td className='stats__field'>
              постриженных <br />
              волос
            </td>
          </tr>
          <tr>
            <td className='stats__value'>
              50 000 <sup>*</sup>
            </td>
            <td className='stats__field'>
              лайков и <br />
              комплиментов
            </td>
          </tr>
        </tbody>
      </table>
      <small className='stats__legend stats__legend--bottom'>
        <sup>*</sup> — приведённые данные ложь
      </small>
    </section>
  );
}

export default Stats;
