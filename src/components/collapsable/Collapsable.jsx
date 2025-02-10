import { useState } from "react";
import { Accordion2 } from "./Accordion2";

export const Collapsable = ({ data }) => {
  // not to get error, assigning default values like {data=[]} as props  or add conditional operature like below with &&
  const [activeIndex, setActiveIndex] = useState(null);

  function changeContent(index) {
    if (activeIndex === index) return setActiveIndex(null);
    return setActiveIndex(index);
  }

  return (
    <div className="collapsable">
      {data &&
        data.map((item, index) => (
          <Accordion2
            key={index}
            title={item.title}
            content={item.content}
            index={index}
            activeIndex={activeIndex}
            onChangeOfIndex={changeContent}
          />
        ))}
      {!data && <p>data is not provided</p>}
    </div>
  );
};
