import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LData from "./CookingSpinner.json";

export default ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Player
      autoplay
      loop
      src={LData}
      style={{
        ...style,
      }}
    />
  );
};
