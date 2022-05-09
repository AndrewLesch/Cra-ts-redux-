import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, Store } from 'redux';
import { rootReducer } from './redux/RootReducer';
import { Provider } from 'react-redux';
import App from './pages/App/App';

const store: Store = createStore(rootReducer);

const app: JSX.Element = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<React.StrictMode>{app}</React.StrictMode>);
