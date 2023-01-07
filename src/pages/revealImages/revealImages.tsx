import React, { MouseEventHandler, useState } from "react";
import "./revealImages.css";

const sections = [
  ["Home", "img2"],
  ["Work", "img3"],
  ["About", "img4"],
  ["Contact", "img5"],
  ["Join", "img6"],
];

export default function RevealImages() {
  const toggleNav: MouseEventHandler<HTMLButtonElement> = (e) => {
    setOpen(!open);
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="reveal-images">
      <div className={"main-content" + (open ? " open" : "")}></div>
      <nav id="nav-thing">
        <div id="nav-links" className={open ? " open" : ""}>
          {sections.map((section) => (
            <a
              className="nav-link"
              href="#"
              key={"reveal-bottom-" + section[1]}
            >
              <h2 className="nav-link-label">{section[0]}</h2>
              <img
                className="nav-link-image"
                src={`${process.env.PUBLIC_URL}/assets/${section[1]}.jpg`}
              />
            </a>
          ))}
        </div>
      </nav>
      <button id="nav-toggle" type="button" onClick={toggleNav}>
        {open ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">menu</span>
        )}
      </button>
    </div>
  );
}
