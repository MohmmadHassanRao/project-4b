import React, { useEffect, useRef } from "react";
import "./App.css";
import Lottie from "lottie-web";
import animationData from "./lottie/team.json";

function App() {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoplay: true,
      animationData: animationData,

      renderer: "svg",
    });
  }, []);

  return (
    <div>
      <div className={"navbar"}>
        <ul>
          <li className={"logo"}>
            <a href={"home"}>TeamX</a>
          </li>

          <li>
            <a href={"home"}>Home</a>
          </li>
          <li>
            <a href={"home"}>About</a>
          </li>
          <li>
            <a href={"home"}>Services</a>
          </li>
          <li>
            <a href={"home"}>Contact US</a>
          </li>
        </ul>
      </div>
      <div className={"wrapper"}>
        <div className={"team"}>
          <h1>
            Team<span>X</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className={"lottieSize"} ref={container}></div>
      </div>
    </div>
  );
}

export default App;
