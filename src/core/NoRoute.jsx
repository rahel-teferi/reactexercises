import {useNavigate} from "react-router-dom"

export const NoRoute = () => {


const navigate=useNavigate();
  return <div>Page not found.
    Please go back to the <a href="#" onClick={(e)=>navigate("/")}>
      homepage </a>;
  </div>;
};
