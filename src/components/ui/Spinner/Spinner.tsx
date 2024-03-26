import React from "react";
import css from "./styles.module.css";
const GiphyComponent = () => {
  return (
    <div>
      <div className={css.spinner}></div>
      <iframe
        src="https://giphy.com/embed/mlvseq9yvZhba"
        width="480"
        height="480"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GiphyComponent;
