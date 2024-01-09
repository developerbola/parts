import { color } from "framer-motion";
import React, { useLayoutEffect, useState } from "react";

const base = {
  "pointerEvents": "none",
  "userSelect": "none",
  display: "block",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "borderRadius": "100%",
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.8) translate(-50%, -50%)",
    },
    "50%": {
      transform: "scale(1) translate(-50%, -50%)",
    },
    "100%": {
      transform: "scale(0.8) translate(-50%, -50%)",
    },
  },
  "@media only screen and (maxWidth: 700px)": {
    "#cursor": {
      display: "none",
    },
  },
};
const Cursor = ({
  pulse = false,
  size = 35,
  opacity = 1,
  easing = "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
  duration = 0.4,
  custom = false,
  ...rest
}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useLayoutEffect(() => {
    document.onmousemove = (event) => {
      var e = event;
      setX(e.clientX);
      setY(e.clientY);
    };
  });

  const styles = {
    ...base,
    animation: pulse ? "pulse 2s infinite" : null,
    "backgroundColor": "transparent",
    border: "3px solid #ffffff50",
    opacity: opacity,
    width: size + "px",
    height: size + "px",
    top: y + 7,
    left: x + 5,
    "transitionTimingFunction": easing,
    "transitionDuration": duration + "s",
    zIndex: "9999",
  };
  return <div id="cursor" {...rest} style={!custom ? styles : null} />;
};

export default Cursor;
