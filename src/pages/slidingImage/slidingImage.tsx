import React, { useEffect } from "react";
import "./slidingImage.css";

const images = ["img1", "img2", "img3", "img4", "img5", "img6"];
let track = document.getElementById("image-track") as HTMLElement;

let mouseDownAt = 0,
  prevPercentage = 0;

function calcPercentage(clientX: number) {
  const mouseDelta = mouseDownAt - clientX;
  const maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100 + prevPercentage;
  const cappedPercentage = Math.min(Math.max(percentage, -100), 0);
  return cappedPercentage;
}

export default function SlidingImage() {
  useEffect(() => {
    track = document.getElementById("image-track") as HTMLElement;

    window.onmousedown = (e) => {
      mouseDownAt = e.clientX;
    };

    window.onmouseup = (e) => {
      prevPercentage = calcPercentage(e.clientX);
      mouseDownAt = 0;
    };

    window.onmousemove = (e) => {
      if (mouseDownAt === 0) return;

      const percentage = calcPercentage(e.clientX);

      track.animate(
        {
          transform: `translate(${percentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      [].forEach.call(track.children, (img: HTMLElement) => {
        img.animate(
          {
            objectPosition: `${percentage + 100}% 50%`,
          },
          { duration: 1200, fill: "forwards" }
        );
      });
    };
  }, []);

  return (
    <div className="sliding-image">
      <div id="image-track" data-mouse-down-at="0">
        {images.map((img) => (
          <img
            className="image noSelect"
            src={`${process.env.PUBLIC_URL}/assets/${img}.jpg`}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
