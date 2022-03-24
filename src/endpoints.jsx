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

  //Category
  PARENT_CATEGORY: "/GetParentCategories",

  //Post
  ADD_POST: "/webapi/AddPost",
  UPDATE_POST: "/webapi/AddPost",
};
