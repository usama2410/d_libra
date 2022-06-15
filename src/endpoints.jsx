export const production = "https://api.libraa.ml";
export const development = "https://api.libraa.ml"; // https://libra.pythonanywhere.com
export const URL =
  process.env.NODE_ENV === "development" ? development : production;

export const endpoints = {
  //Auth
  SIGNUP: "/webapi/signup",
  LOGIN: "/webapi/userlogin",
  CHANGE_PASSWORD: "/webapi/changepassword",
  CHANGE_PASSWORD_FOR_EDITOR: "/webapi/UpdatePassword?role=",
  SEND_VERIFICATION_CODE: "/webapi/SendVerificationCode",
  FORGOT_PASSWORD: "/webapi/VerifyCode",
  RESET_PASSWORD: "/webapi/ChangePassword",
  LOGOUT: "/webapi/logout?role=",

  // Google Auth
  GOOGLE_AUTH: "/webapi/signupwithgoogle",

  //Profile
  USER_PROFILE: "/webapi/userprofile",
  UPDATE_PROFILE: "/webapi/userprofile",

  //Dashboard Data
  DASHBOARD_DATA: "/webapi/GetDashboardData",
  DASHBOARD_DATA_WITH_AUTHORIZATION:
    "/webapi/GetDashboardDataWithAuthorization?id=",

  //Category
  PARENT_CATEGORY: "/GetParentCategories",

  //Post
  ADD_POST: "/webapi/AddPost",
  UPDATE_POST: "/webapi/AddPost",
  GET_POST_BY_ID: "/webapi/AddPost?",
  DELETE_POST_BY_ID: "/webapi/AddPost?",

  //Category
  ADD_CATEGORY: "/webapi/GetParentCategories",
  GET_MAIN_CATEGORY: "/webapi/GetParentCategories",
  GET_CHILD_CATEGORY: "/webapi/GetChildCategories?id=",

  GET_PARENT_CHILD_CATEGORY: "/webapi/GetParentChildCategories",
  GET_TOPIC_CONTENT: "/webapi/GetTopicContent?role=",

  // Course Data - Screen 10
  VIEW_COURSE_STATUS: "/webapi/recentlyViewCourseStatus?role=",
  ADD_TO_RECENT_COURSES: "/webapi/recentlyViewCourseStatus",

  // Content Data
  VIEW_RECENT_CONTENT: "/webapi/recentlyViewContentStatus",
  GET_RECENT_CONTENT: "/webapi/recentlyViewContentStatus?role",

  // Rating
  RATING_COURSE: "/webapi/RatingCourse",

  // Search
  SEARCH_COURSE: "/webapi/GetParentCategories?search=",
  SEARCH_CONTENT: "/webapi/SearchCourse",
  SEARCH_USER_POST: "/webapi/GetTopicData?role=",

  // Priorty
  SET_PRIORITY: "/webapi/SetPriority",
  GET_PRIORITY: "/webapi/SetPriority?role=",
};
