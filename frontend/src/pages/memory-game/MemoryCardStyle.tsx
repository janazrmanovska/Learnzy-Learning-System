import CSS from "csstype";

export const cardStyle: CSS.Properties = {
  position: "relative",
  width: "200px",
};

export const cardImgStyle: CSS.Properties = {
  width: "200px",
  display: "block",
  border: "2px solid #fff",
  borderRadius: "6px",
};

export const cardFrontStyle: CSS.Properties = {
  transform: "rotateY(90deg)",
  transition: "all ease-in 0.2s",
  position: "absolute",
};

export const flippedFrontStyle: CSS.Properties = {
  transform: "rotateY(0deg)",
  transitionDelay: "0.2s",
};

export const cardBackStyle: CSS.Properties = {
  transition: "all ease-in 0.2s",
  transitionDelay: "0.2s",
  backgroundColor: "red",
};

export const flippedBackStyle: CSS.Properties = {
  transform: "rotateY(90deg)",
  transitionDelay: "0s",
};
