import { useRef } from "react";
export const StudentSearch = ({ onSearch }) => {
  //uncontrolled component
  const searchInput = useRef("");
  const searchByName = () => {
    // console.log(searchInput.current.value);
    onSearch(searchInput.current.value);
  };
  return (
    <div>
      <input type="text" placeholder="Enter name" ref={searchInput} />
      <button type="button" onClick={searchByName}>
        Search
      </button>
    </div>
  );
};
