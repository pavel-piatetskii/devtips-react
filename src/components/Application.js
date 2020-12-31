import React, { useEffect, useState } from "react";
import axios from "axios";
import TipList from "./TipList"

import Header from "./Header";
import "./Application.scss";

export default function Application() {
 
  const stub = false;

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
    <main className="layout">
      <Header />
      <TipList 
      tips={state.tips}
      />
    </main>
  );
};
