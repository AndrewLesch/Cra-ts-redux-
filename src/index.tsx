import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { rootReducer } from './redux/RootReducer';
import { Provider } from 'react-redux';
import App from './pages/App/App';

const store: any = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<React.StrictMode>{app}</React.StrictMode>);
