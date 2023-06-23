import { useContext, useState, useRef } from 'react'
import { Context } from './FetchDataAndSetContext';
import DarkMode from './DarkMode';
import SearchInput from './SearchInput';
import SelectInput from './SelectInput';
import DisplayCards from './DisplayCards';
import DisplayDetails from './DisplayDetails';
import Attribution from './Attribution';

const Home = () => {
  const data = useContext(Context);
  const initialState = {
    showCards: true,
    showDetails: false,
    isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    isFiltering: false,
    isSearching: false,
    value: '',
  };
  const [state, setState] = useState(initialState);
  const selectRef = useRef(null);
  const searchRef = useRef(null);
  const checkboxRef = useRef(null);
  const filteredRegion = state.value ? data.filter(item => item.region == state.value) : data;
  const filteredName = data.filter(item => item.name.common.toLowerCase() == state.value.toLowerCase());

  const handleSearchBtnClick = (prevState) => {
    searchRef.current.value
      ? setState({
        ...prevState,
        isFiltering: false,
        isSearching: true,
        value: searchRef.current.value,
      })
      : null;
    selectRef.current.value = '';
  };

  const handleSelectChange = (prevState) => {
    setState({
      ...prevState,
      isFiltering: true,
      isSearching: false,
      value: selectRef.current.value,
    });
    searchRef.current.value = '';
  };

  const handleCardClick = (event, prevState) => {
    const targetCard = event.target.parentElement.parentElement.querySelector('.card-info-title').textContent;
    setState({
      ...prevState,
      showCards: false,
      showDetails: true,
      value: targetCard,
    });
  };

  const toggleDarkMode = (prevState) => {
    !prevState.isDarkMode
      ? setState({
        ...prevState,
        isDarkMode: true,
      })
      : setState({
        ...prevState,
        isDarkMode: false,
      }
    );
  };

  return (
    <>
      <header className='header flex-row'>
        <h1 className='primary title'>Where in the world?</h1>
        <DarkMode state={state} handler={toggleDarkMode} ref={checkboxRef} />
      </header>
      <main className='main'>
        <div className='flex-row'>
          <SearchInput state={state} handler={handleSearchBtnClick} ref={searchRef} />
          <SelectInput state={state} handler={handleSelectChange} ref={selectRef} />
        </div>
        <div className='grid-container'>
          {state.showCards && !state.isFiltering && !state.isSearching && <DisplayCards source={data} state={state} handler={handleCardClick} />}
          {state.showCards && state.isFiltering && <DisplayCards source={filteredRegion} state={state} handler={handleCardClick} />}
          {state.showCards && state.isSearching && <DisplayCards source={filteredName} state={state} handler={handleCardClick} />}
        </div>
        {state.showCards && state.isSearching && !filteredName.length && <p className='error'>No country was founded!</p>}
        {state.showDetails && <DisplayDetails source={filteredName} /> }
      </main>
      <Attribution />
    </>
  );
}

export default Home;