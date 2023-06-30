import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='error-page flex-row'>
      <div className='error-page-panel'>
        <h1 className='error-title'>Oops!</h1>
        <p className='error'>Sorry, an unexpected error has occurred.</p>
        <p className='error'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div className='error-page-panel'>
        <img className='error-img' src='./src/assets/tristeza-mensaje-de-error.png' alt='tristeza-mensaje-de-error' />
      </div>
    </div>
  );
};

export default ErrorPage;