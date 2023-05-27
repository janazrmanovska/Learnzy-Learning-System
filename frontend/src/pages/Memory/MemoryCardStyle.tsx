import CSS from "csstype"

export const cardStyle: CSS.Properties = {
  position: "relative"
};

export const cardImgStyle: CSS.Properties = {
  width: "100%",
  display: "block",
  border: "2px solid #fff",
  borderRadius: "6px"
};

export const cardFrontStyle: CSS.Properties = {
  transform: "rotateY(90deg)",
  transition: "all ease-in 0.2s",
  position: "absolute"
};

export const flippedFrontStyle: CSS.Properties = {
  transform: "rotateY(0deg)",
  transitionDelay: "0.2s"
};

export const cardBackStyle: CSS.Properties = {
  transition: "all ease-in 0.2s",
  transitionDelay: "0.2s",
  backgroundColor: "red"
};

export const flippedBackStyle: CSS.Properties = {
  transform: "rotateY(90deg)",
    transitionDelay: "0s"
};


// .card {
//   position: relative;
// }

// .card .img {
//   width: 100%;
//   display: none;
//   border: 2px solid #fff;
//   border-radius: 6px;
// }

// .card .front {
//   transform: rotateY(90deg);
//   transition: all ease-in 0.2s;
//   position: absolute;
// }

// .flipped .front {
  // transform: rotateY(0deg);
  // transition-delay: 0.2s;
// }

// .card .back {
//   transition: all ease-in 0.2s;
//   transition-delay: 0.2s;
//   background-color: red;
// }

// .flipped .back {
//   transform: rotateY(90deg);
//   transition-delay: 0s;
// }