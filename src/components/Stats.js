import React from 'react';
import { useSelector } from 'react-redux';

const Stats = React.memo(function Stats() {
  const facts = useSelector((state) => state.facts.facts);

  const factList = facts.map((el, index) => (
    <tr key={`${index}`}>
      <td className='stats__value'>
        {el.number} <sup>*</sup>
      </td>
      <td className='stats__field'>
        {`${el.text.split(' ')[0]}`}
        <br />
        {el.text.split(' ').slice(1).join(' ')}
      </td>
    </tr>
  ));

  const finalList = (array) => {
    let temp = [];
    for (let n = 0; n < 4; n++) {
      temp.push(
        ...array.splice(Math.floor(Math.random() * factList.length), 1)
      );
    }
    return temp;
  };
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
        <tbody>{finalList(factList)}</tbody>
      </table>
      <small className='stats__legend stats__legend--bottom'>
        <sup>*</sup> — приведённые данные ложь
      </small>
    </section>
  );
});

export default Stats;
