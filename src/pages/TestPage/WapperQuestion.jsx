import React from "react";
import classNames from "classnames/bind";
import styles from "./WapperQuestion.module.scss";

const cx = classNames.bind(styles);
const WapperQuestion = ({ children, handleSaveQuestion, showAns, isSave }) => {
  console.log("isSave", isSave);
  return (
    // <div className={cx("container")}>
    <>
      {showAns && (
        <button className={cx("save-btn")} onClick={handleSaveQuestion}>
          {isSave ? "Saved" : "Save"}
        </button>
      )}

      <div className={cx("content")}>{children}</div>
    </>

    // </div>
  );
};

export default WapperQuestion;
