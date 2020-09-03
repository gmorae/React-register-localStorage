import React from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './global.css';

const App = () => (
  <>
    <ToastContainer />
    <Routes />
  </>
);

export default App;