import React from "react";
import "./index.scss";

export const ModelTimeOut = ({ handleAccept }) => {
  return (
    <div>
      <div className="pop-up">
        <div className="modal">
          <div className="modal-overlay"></div>
          <div className="modal-body">
            <div className="modal-time-out">
              <div className="modal-title">TIME OUT!</div>
              <div className="modal-sub">
                Đã hết thời gian làm bài, hệ thống sẽ tự chấm điểm
              </div>
              <button className="modal-btn btn-ok" onClick={handleAccept}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
