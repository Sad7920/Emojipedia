import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"

function createCard(emo){
    return <Card
    key={emo.id}
    emoji={emo.emoji}
    name={emo.name}
    meaning={emo.meaning}
    />
}

function AllCards(){
    return <dl className="dictionary">
    {emojipedia.map(createCard)}
  </dl>
}

export default AllCards;