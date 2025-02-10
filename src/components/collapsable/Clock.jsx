import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  //   console.log(currentTime);
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();

  //   const intervalId= setInterval(()=>{
  //     setCurrentTime(new Date())}, 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //   console.log("every second");
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function goBackHome(e) {
    e.preventDefault();
    // allow access to the "e" object
    navigate("/");
  }

  // useNavigate returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
  const navigate = useNavigate();
  return (
    <div>
      <section
        style={{
          width: "100%",
          height: "60vh",
          fontSize: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {("0" + hour).slice(-2) +
          ":" +
          ("0" + minute).slice(-2) +
          ":" +
          ("0" + second).slice(-2)}
      </section>
      <p>
        Return to <Link to="/">Home Page</Link>
      </p>
      {/* programatically */}
      <p>
        Return to
        <a href="#" onClick={goBackHome}>
          Home Page
        </a>
      </p>
      <p>
        Return to the
        <a href="#" onClick={() => navigate(-1)}>
          Previous Page
        </a>
      </p>
    </div>
  );
};
