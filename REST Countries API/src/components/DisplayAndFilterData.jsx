import { useContext } from 'react'
import { Context } from './FetchDataAndSetContext';

const DisplayAndFilterData = () => {
  const data = useContext(Context);

  const DisplayData = () => {
    return (
      data.map((item, index) => {
        return (
          <div className='card' key={`card__${index}`}>
            <img className='flag' src={item.flags.svg} alt='flag' />
            <p className='name'>{item.name.common}</p>
            <p className='info'><strong>Population:</strong> {item.population}</p>
            <p className='info'><strong>Region:</strong> {item.region}</p>
            <p className='info'><strong>Capital:</strong> {item.capital}</p>
          </div>
        )
      })
    )
  };

  return (
    <div className='grid-container'>
      <DisplayData />
    </div>
  )
};

export default DisplayAndFilterData;