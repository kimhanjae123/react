import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import { store } from './store.jsx';

const persistor = persistStore(store);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
)
