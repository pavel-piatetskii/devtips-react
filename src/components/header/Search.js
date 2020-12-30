import React, { useState } from "react";

import Button from "../Button";


import "./Search.scss";

export default function Search(props) {
  const [tags, setTags] = useState("");

  const validate = function(){
    console.log(tags);
  }

  return (
    <form className="search__form">
      <input
        className="search__form-control"
        name="search"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={tags}
        onChange={e => setTags(e.target.value)}
      />
      <Button submit onClick={validate}>Search</Button>
    </form>
  );

};