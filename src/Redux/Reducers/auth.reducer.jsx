const initialState = {
  userId: null,
  email: null,
  username: null,
  status: false,
  profile: null,
  token: null,
};

const themeinitialstate = {
  status: false
}

 export const login = (state = initialState, action) => {
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


export const theme = (themereducerstate = themeinitialstate, action) => {
   const {type, payload} = action;
   switch(type){
     case 'DARKTHEME':
       return {
         state : payload.state 
       }
       case 'LIGHTTHEME':
        return {
          state : payload.state 
        }
       default:
       return themereducerstate
      }
}

