import React, { useEffect } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TipList from "./TipList"
import Header from "./Header";
import "./Application.scss";

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
    <main className="layout">
      <Header />
    </main>
    <TipList 
      tips={state.tips}
    />
  );
};
