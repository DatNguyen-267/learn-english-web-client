import React from "react";
import classNames from "classnames/bind";
import styles from "./WapperQuestion.module.scss";

const cx = classNames.bind(styles);
const WapperQuestion = ({ children, handleSaveQuestion }) => {
  return (
    // <div className={cx("container")}>
    <>
      <button className={cx("save-btn")} onClick={handleSaveQuestion}>
        Save
      </button>
      <div className={cx("content")}>{children}</div>
    </>

    // </div>
  );
};

export default WapperQuestion;
