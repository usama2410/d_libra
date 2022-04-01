import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { auth, theme } from "../auth.reducer";
import { dashboardData } from "../dashboard.data.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "theme", "dashboardData"],
};

const rootReducer = combineReducers({
  // Add reducers here
  auth,
  theme,
  dashboardData,
});

export default persistReducer(persistConfig, rootReducer);
