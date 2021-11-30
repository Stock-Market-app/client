import React from "react";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import Switch from "./Switch";
import AuthReducer from "./store/reducers/auth";

export const App = () => {
  const persistConfig = {
    key: "root",
    storage: storage,
  };

  const rootReducer = combineReducers({
    Auth: AuthReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
  const persistedStore = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <Switch />
        </PersistGate>
      </Provider>
    </div>
  );
};
