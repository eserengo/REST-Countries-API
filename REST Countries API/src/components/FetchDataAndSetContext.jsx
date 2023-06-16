import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [dataContext, setDataContext] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const json = await response.json();
        setDataContext(json);
      }
      catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Context.Provider value={ dataContext }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.object,
};

export { Context, ContextProvider };