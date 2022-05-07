const initialState = {
  userId: null,
  email: null,
  username: null,
  status: false,
  profile: null,
  token: null,
  role: null,
};

const themeinitialstate = {
  status: false,
};

const accordioniconinitialstate = {
  status: false,
};

const pininitialstate = {
  state: false,
};

const searchinitialstate = {
  state: false,
};

export const auth = (state = initialState, action) => {
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
        role: payload.role,
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
        role: null,
      };

    default:
      return state;
  }
};

export const theme = (themereducerstate = themeinitialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DARKTHEME":
      return {
        state: payload.state,
      };
    case "LIGHTTHEME":
      return {
        state: payload.state,
      };
    default:
      return themereducerstate;
  }
};

export const accordion = (
  accordioniconstate = accordioniconinitialstate,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "ACCORDIONICONSTATE":
      return {
        state: payload.state,
      };
    case "ACCORDIONICONSTATEFALSE":
      return {
        state: payload.state,
      };

    default:
      return accordioniconstate;
  }
};

export const pin = (piniInitialState = pininitialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PINTHEME":
      return {
        state: payload.state,
      };

    default:
      return piniInitialState;
  }
};

export const searchSTate = (
  searchInitialstate = searchinitialstate,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCHSTATE":
      return {
        state: payload.state,
      };
    default:
      return searchInitialstate;
  }
};
