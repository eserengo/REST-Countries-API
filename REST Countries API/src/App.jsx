import './App.css'
import { ContextProvider } from './components/FetchDataAndSetContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import ErrorPage from './components/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;