const production = "https://examplePage.com";
const development = "https://libra.pythonanywhere.com";
export const URL =
  process.env.NODE_ENV === "development" ? development : production;

export const endpoints = {
  //Auth
  SIGNUP: "/webapi/signup",
  LOGIN: "/webapi/userlogin",
  CHANGE_PASSWORD: "/webapi/changepassword",

  //Profile
  USER_PROFILE: "/webapi/userprofile",
  UPDATE_PROFILE: "/webapi/userprofile",

  //Dashboard Data
  DASHBOARD_DATA: "/webapi/GetDashboardData",

  //Category
  PARENT_CATEGORY: "/GetParentCategories",

  //Post
  ADD_POST: "/webapi/AddPost",
  UPDATE_POST: "/webapi/AddPost",

  //Category
  ADD_CATEGORY: "/webapi/GetParentCategories",
  GET_MAIN_CATEGORY: "/webapi/GetParentCategories",
  GET_CHILD_CATEGORY: "/webapi//GetChildCategories?id=1",

  GET_PARENT_CHILD_CATEGORY: "/webapi/GetParentChildCategories",
};
