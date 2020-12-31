import React, { useEffect } from "react";
import axios from "axios";

import Header from "./Header";

import "./Application.scss";

export default function Application() {

  const stub = false;

  useEffect(() => {
    Promise.all([
      axios.get('/tips/?tipIDs=[1,2,3]')
    ]).then(all => {
      console.log(all)
      })
    }, [stub]);

  return (
    <main className="layout">
      <Header />
    </main>
  );
};
