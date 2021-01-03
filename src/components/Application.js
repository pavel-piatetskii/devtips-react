import React from "react";

import "./Application.scss";

import TipList from "./TipList"
import Header from "./Header";
import useApplicationData from "hooks/useApplicationData";

export default function Application() {
  const { state, onLogout, onLogin } = useApplicationData();

  return (
    <main className="layout">
      <Header user={state.user} onLogout={onLogout} onLogin={onLogin} />
      <TipList 
        tips={state.tips}
      />
    </main>
  );
};
