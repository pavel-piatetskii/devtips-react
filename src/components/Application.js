import React from "react";

import "./Application.scss";

import TipList from "./TipList"
import Header from "./Header";
import useApplicationData from "hooks/useApplicationData";

export default function Application() {
  const { state, onLogout } = useApplicationData();

  return (
    <main className="layout">
      <Header user={state.user} onLogout={onLogout}/>
      <TipList 
        tips={state.tips}
      />
    </main>
  );
};
