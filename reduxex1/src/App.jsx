import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Page1 from '../Page1';
import './App.css';
import { reducer } from './reducer';


const store = configureStore({reducer});
function App() {

  return (
    <>
      <Provider store={store}>
        <Page1/>
      </Provider>
    </>
  )
}

export default App
