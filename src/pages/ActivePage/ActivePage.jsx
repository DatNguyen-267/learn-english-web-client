import React, { useEffect, useState } from "react";
import "./ActivePage.scss";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { ErrMsg, SuccessMsg } from "../../util/Notify/Notification";
import { Link } from "react-router-dom";
const initalStatus = {
  err: "",
  success: "",
};
export const ActivePage = () => {
  const { activation_token } = useParams();
  const [status, setStatus] = useState(initalStatus);
  const location = useLocation();
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            `${"http://localhost:5000"}/user/activation`,
            { activation_token }
          );
          setStatus({ ...status, success: res.data.msg });
        } catch (error) {
          error.response.data.msg &&
            setStatus({ ...status, err: error.response.data.msg });
        }
      };
      activationEmail();
    }
  }, [activation_token]);
  console.log(activation_token);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="active_page" style={{ width: "100%" }}>
        {status.err && ErrMsg(status.err)}
        {status.success && SuccessMsg(status.success)}
      </div>
      <p>
        Quay lại trang{" "}
        <Link
          to={{
            pathname: "/login?callback=0",
          }}
        >
          <b> Đăng nhập</b>
        </Link>
      </p>
    </div>
  );
};
