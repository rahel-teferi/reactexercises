import { useState, useEffect } from "react";
import "./Accordion.css";

export const Accordion2 = ({
  title,
  content,
  index,
  activeIndex,
  onChangeOfIndex,
}) => {
  // const [isOpen, setIsOpen] = useState(index === activeIndex);

  // useEffect(() => {
  //   //   // console.log("ActiveIndex value changed");
  //   //   // if (index===activeIndex) {
  //   //   //     setIsOpen(true);
  //   //   // } else {
  //   //   //     setIsOpen(false);
  //   //   // }
  //   setIsOpen(index === activeIndex);
  // }, [activeIndex]);

  return (
    <div>
      <h3 className="toggleCollapsible" onClick={() => onChangeOfIndex(index)}>
        <span>{title}</span> <span>{index === activeIndex ? "-" : "+"}</span>
        {/* <span>{title}</span> <span>{isOpen ? "-" : "+"}</span> */}
      </h3>

      <section
        className={
          index === activeIndex ? "showCollapsable" : "hideCollapsable"
        }
      >
        {content}
      </section>
    </div>
  );
};

// export const Accordion2 = ({
//   title,
//   content,
//   index,
//   activeIndex,
//   onChangeOfIndex,
// }) => {

//   return (
//     <div>
//       <h3 className="toggleCollapsible" onClick={() => onChangeOfIndex(index)}>
//         <span>{title}</span> <span>{index === activeIndex ? "-" : "+"}</span>
//       </h3>
//       {activeIndex === index && <section>{content}</section>}{" "}
//     </div>
//   );
// };
