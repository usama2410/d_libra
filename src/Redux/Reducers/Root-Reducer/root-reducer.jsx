import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import login from "../auth.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  // Add reducers here
  login,
});

export default persistReducer(persistConfig, rootReducer);
