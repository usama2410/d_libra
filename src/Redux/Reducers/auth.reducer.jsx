const initialState = {
  userId: null,
  email: null,
  username: null,
  status: false,
  profile: null,
  token: null,
};

 const login = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userId: payload.userId,
        email: payload.email,
        username: payload.username,
        status: true,
        profile: payload.profile,
        token: payload.token,
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        userId: null,
        email: null,
        username: null,
        status: false,
        profile: null,
        token: null,
      };

    default:
      return state;
  }
};

export default login;