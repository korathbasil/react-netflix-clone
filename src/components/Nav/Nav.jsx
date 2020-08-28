import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [showColorStatus, setShowColorStatus] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowColorStatus(true);
      } else {
        setShowColorStatus(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${showColorStatus && "nav__color"}`}>
      <img
        className="nav__logo"
        src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Netflix"
      />
    </div>
  );
}

export default Nav;
