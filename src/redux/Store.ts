import storage from 'redux-persist/lib/storage';
import { createStore, Reducer, Store } from 'redux';
import {
  persistStore,
  persistReducer,
  Persistor,
  WebStorage,
} from 'redux-persist';
import { rootReducer } from './RootReducer';

type ConfigType = {
  key: string;
  storage: WebStorage;
};

const persistConfig: ConfigType = {
  key: 'root',
  storage,
};

const persistedReducer: Reducer = persistReducer(persistConfig, rootReducer);

export const store: Store = createStore(persistedReducer);
export const persister: Persistor = persistStore(store);
