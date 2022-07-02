import React, { useState } from "react";
import "./likeBtn.css";

function LikeBtn() {
  const [liked, setLiked] = useState(false);
  if (liked) {
    return "You liked this.";
  }
  return (
    <button
      onClick={() => {
        setLiked(true);
      }}
    >
      Like
    </button>
  );
}

export default LikeBtn;
