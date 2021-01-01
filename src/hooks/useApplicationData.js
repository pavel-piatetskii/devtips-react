import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, {
  SET_TIP_DATA,
  SET_USER_DATA
} from "reducers/application";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    tips: [],
    user: {
      "id": 1,
      "name": "Adam Thorne",
      "email": "ahthornev2@gmail.com",
      "avatar": "https://avatars.dicebear.com/4.4/api/avataaars/15.svg"
    }
  });

  function onLogout() {
    dispatch({ type: SET_USER_DATA, user: null });
  };

  useEffect(() => {
    Promise.all([
      axios.get('/tips/?tipIDs=[2,3,4]')
    ]).then(all => {
      const tipData = all[0].data;
      dispatch({ type: SET_TIP_DATA, tipData })
    })
    .catch(e => console.error(e));
    }, [state.p]);

  return { state, onLogout };
};