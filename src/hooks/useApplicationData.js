import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, {
  SET_TIP_DATA,
  SET_USER_DATA
} from "reducers/application";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    tips: [],
    user: null
  });

  const onLogout = () => {
    dispatch({ type: SET_USER_DATA, user: null });
  };

  const onLogin = (email, password) => {
    axios.post('/user/login', {
      email,
      password
    })
    .then(all => {
      console.log(all.data);
      dispatch({ type: SET_USER_DATA, user: all.data });
    })
    .catch(e => console.error(e));
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

  return { state, onLogout, onLogin };
};