export const SET_TIP_DATA = "SET_TIP_DATA";
export const SET_USER_DATA = "SET_USER_DATA";

export default function reducer(state, action) {
  switch(action.type) {

    case SET_TIP_DATA:
      return {
        ...state,
        tips: action.tipData
      };

    case SET_USER_DATA:
      return {
        ...state,
        user: action.user
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};