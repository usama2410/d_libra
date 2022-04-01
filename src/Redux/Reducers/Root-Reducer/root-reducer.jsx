import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {login, theme, accordion} from "../auth.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "theme"],
};

const rootReducer = combineReducers({
  // Add reducers here
  login,
  theme,
  accordion
});

export default persistReducer(persistConfig, rootReducer);
