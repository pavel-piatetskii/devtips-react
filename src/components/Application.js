import logo from '../logo.svg';
import './Application.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import TipList from "./TipList"

export default function Application() {

  const [state, setState] = useState({
    tips: []
  });

  useEffect(() => {
    Promise.all([
      axios.get('/tips/?tipIDs=[1,2,3]')
    ]).then(all => {
      console.log(all[0].data);
      setState({ tips: all[0].data });
      })
    }, [state.p]);

  return (
    <TipList 
      tips={state.tips}
    />
  );
};
