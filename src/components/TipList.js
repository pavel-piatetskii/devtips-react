import React from "react";
import "./TipList.scss";
import TipListItem from "./TipListItem";

export default function TipList(props) {
  console.log(props.tips)

  const userID = 1;

  return (
  <section className="tip-list">
    {props.tips.map(el => {
      return (
      <TipListItem 
        key = {el.id}
        title = {el.title}
        creator_id = {el.creator_id}
        likes = {el.likes}
        data={el.data}
        created_at={el.created_at}
        tags={el.tags}
        type={el.type}
        description={el.description}
        is_liked={el.likes.includes(userID)}
        is_bookmarked={el.bookmarks.includes(userID)}
      />
      )
    })}
  </section>
  //'yyy'
  );

}