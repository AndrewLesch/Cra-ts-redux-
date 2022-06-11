import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, Store } from 'redux';
import { rootReducer } from './redux/RootReducer';
import { Provider } from 'react-redux';
import App from './pages/App/App';
import { BrowserRouter } from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';


const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer);
 
const store: Store = createStore(persistedReducer);
const persister = persistStore(store);
const app: JSX.Element = (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<React.StrictMode>{app}</React.StrictMode>);
