import PropTypes from 'prop-types';

const DisplayCards = ({ source, state, handler }) => {
  return (
    source.sort((a, b) => a.name.common < b.name.common ? -1 : 1)
      .map((item, index) => {
        return(
          item.region.toLowerCase() == 'antarctic'
            ? null
            : <div className='card' key={`card__${index}`} onClick={(event) => handler(event, state)}>
                <div className="card-flag">
                  <img className='card-flag-img' src={item.flags.svg} alt={item.flags.alt} />
                </div>
                <div className='card-info'>
                  <p className='card-info-title'>{item.name.common}</p>
                  <p className='card-info-para'>Population: {item.population}</p>
                  <p className='card-info-para'>Region: {item.region}</p>
                  <p className='card-info-para'>Capital: {item.capital}</p>
                </div>
              </div>
        )
      }
    )
  );
};

DisplayCards.propTypes = {
  source: PropTypes.array,
  state: PropTypes.object,
  handler: PropTypes.func,
};

export default DisplayCards;