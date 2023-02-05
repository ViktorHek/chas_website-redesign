import "../style/hero.css";
import AlertSvg from "../assets/AlertSvg";
import { useState, useEffect } from "react";

function Hero() {
  const words = ["connect", "create", "innovate"];
  const [word, setWord] = useState(words[0]);
  let index = 0;
  useEffect(() => {
    const timer = setInterval(function () {
      changeWord();
    }, 8000);
    return function clear() {
      clearInterval(timer);
    };
  }, []);
  function changeWord() {
    if (index === words.length - 1) {
      index = 0;
    } else {
      index++;
    }
    setWord(words[index]);
  }
  return (
    <div className="main-container">
      <div className="learn-more-container center">
        <AlertSvg />
        <p>Zoom One: Your favorite Zoom Solutions all in One</p>
        <span />
        <a className="learn-more-link">
          <p>Learn More</p>
          <span />
        </a>
      </div>
      <div className="text-container">
        <span className="header">
          One platform <br /> to create <span>{word}</span>
        </span>
        <span className="sub-header">
          Bring teams together, reimagine workspaces, engage new audiences, and
          delight your customers — all on the Zoom platform you know and love.
        </span>
        <div className="button-container">
          <button style={{ backgroundColor: "#0f5af6", color: "#fff" }}>
            Plans & Pricing
          </button>
          <span>Sign Up, It's Free</span>
        </div>
      </div>
      <div className="img-container">
        <img
          src="https://img3.stockfresh.com/files/p/pressmaster/m/69/1386865_stock-photo-architects-at-work.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
