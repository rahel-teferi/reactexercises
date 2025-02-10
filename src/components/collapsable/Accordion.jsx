import { useState } from "react";

export const Accordion = ({ data }) => {
  // const [style, setDisplay] = useState("flex");
  // const [isOpen, setIsOpen] = useState(false);
  const [openindex, setOpenIndex] = useState("");

  function toggleContent(index) {
    // setIsOpen(!isOpen);
    setOpenIndex(index);
  }

  // const collapseElement = document.querySelector(".collapse");
  // setDisplay(() => {
  //   if ((collapseElement.style.display = "none"))
  //     return (collapseElement.style.display = "flex");
  //   setDisplay((collapseElement.style.display = "flex"))
  // });
  // if ((collapseElement.style.display = "none"))
  //   return setDisplay((collapseElement.style.display = "flex"));
  // if ((collapseElement.style.display = "flex"))
  //   return setDisplay((collapseElement.style.display = "none"));

  //   const [openContent, setOpenContent] = useState(false);

  //   function toggleContent() {
  //     setOpenContent(!openContent);
  //   }
  //   return (
  //     <div>
  //       <div>
  //         <button type="button" onClick={toggleContent}>
  //           {openContent ? `Hide ${title}` : `Show ${title}`}
  //         </button>
  //         {openContent && <p>{content}</p>}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      {data.map((card, index) => (
        <div key={index}>
          <button type="button" onClick={() => toggleContent(index)}>
            {openindex === index ? `Hide ${card.title}` : `Show ${card.title}`}
          </button>
        </div>
      ))}

      {openindex && <p>{data[openindex].content}</p>}
    </div>
  );
};

//   return (
//     <div>
//       <h3>{data[0].title}</h3>
//       <p>
//         <button type="button" onClick={toggleContent}>
//           {isOpen ? "Hide" : "Show"}
//         </button>
//       </p>
//       {isOpen && <p>{data[0].content}</p>}
//     </div>
//   );
// };
