import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { auth, theme, pin, searchSTate } from "../auth.reducer";
import { dashboardData } from "../dashboard.data.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "theme", "dashboardData", "pin", "searchSTate"],
};

const rootReducer = combineReducers({
  // Add reducers here
  auth,
  theme,
  dashboardData,
  pin,
  searchSTate,
});

export default persistReducer(persistConfig, rootReducer);
