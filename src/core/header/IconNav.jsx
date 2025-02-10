// import search from "/magnifying-glass-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./TopMenu.css";

export const IconNav = () => {
  return (
    <div className="iconnav">
      {/* <img src={search} /> */}
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};
