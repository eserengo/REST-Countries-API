import { useContext } from 'react';
import { Context } from './FetchDataAndSetContext';
import PropTypes from 'prop-types';

const DisplayDetails = ({ source, state, handler }) => {
  const data = useContext(Context);

  return (
    source.map((item, index) => {
      return (
        <div className='detail' key={`detail__${index}`}>
          <div className='detail-flag'>
            <img className='detail-flag-img' src={item.flags.svg} alt={item.flags.alt} />
          </div>
          <div className='detail-info'>
            <p className='detail-info-title'>{item.name.common}</p>
            <div className='detail-info-panel-wrapper'>
              <div className='detail-info-panel'>
                <p className='detail-info-para'>Native Name: {Object.values(item.name.nativeName).map(subitem => subitem.common).join(', ')}</p>
                <p className='detail-info-para'>Population: {item.population}</p>
                <p className='detail-info-para'>Region: {item.region}</p>
                <p className='detail-info-para'>Subregion: {item.subregion}</p>
                <p className='detail-info-para'>Capital: {item.capital}</p>
              </div>
              <div className='detail-info-panel'>
                <p className='detail-info-para'>Top level domain: {item.tld.map(subitem => subitem)}</p>
                <p className='detail-info-para'>Currencies: {Object.values(item.currencies).map(subitem => subitem.name).join(', ')}</p>
                <p className='detail-info-para'>Languages: {Object.values(item.languages).join(', ')}</p>
              </div>
            </div>
            <div className='detail-info-borders'>
              <p className='detail-info-para'>Border Countries: </p>
              <div className='detail-info-borders-wrapper'>
                {data && data.map(subitem => {
                  return (
                    item.borders &&
                      item.borders.map(border => {
                        return(
                          border == subitem.cca3 && <span key={`border__${border}`} className='detail-info-badge' onClick={(event) => handler(event, state)}>{subitem.name.common}</span>
                        )
                    })
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    })
  );
};

DisplayDetails.propTypes = {
  source: PropTypes.array,
};

export default DisplayDetails;