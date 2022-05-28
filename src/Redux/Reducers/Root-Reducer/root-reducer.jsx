import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { auth, theme, pin, searchSTate } from "../auth.reducer";
import { viewRecentCourseStatus } from "../course.status.action";
import { dashboardData } from "../dashboard.data.reducer";
import { mainCategoryData } from "../main.category.reducer";
import { searchResultData } from "../search.result.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "theme",
    "dashboardData",
    "pin",
    "searchSTate",
    "mainCategoryData",
    "searchResultData",
    "viewRecentCourseStatus",
  ],
};

const rootReducer = combineReducers({
  // Add reducers here
  auth,
  theme,
  dashboardData,
  pin,
  searchSTate,
  mainCategoryData,
  searchResultData,
  viewRecentCourseStatus,
});

export default persistReducer(persistConfig, rootReducer);
