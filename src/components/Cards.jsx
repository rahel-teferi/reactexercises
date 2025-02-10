//import React from "react";
import { Card } from "./Card";
import "./Cards.css";
import { useState } from "react";

export const Cards = ({ data }) => {
  const [choosenTitle, setChoosenTitle] = useState("");
  //let choosenTitle;
  function handleClickShowMore(titleValue) {
    setChoosenTitle(titleValue);
    // console.log(choosenTitle);
    // choosenTitle = titleValue;
    // console.log(choosenTitle);
  }
  return (
    <>
      <section className="cards">
        {/* <div>{data}</div> */}
        {data.map((card, index) => (
          //<p key={index}>{card.title}</p>
          // <Card key={index} title={card.title} content={card.content} />

          <Card
            key={index}
            title={card.title}
            onShowMore={handleClickShowMore}
            ui={{
              backgroundColor: "cyan",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </Card>
        ))}
      </section>

      <p>the clicked title is {choosenTitle}</p>
    </>
  );
};
