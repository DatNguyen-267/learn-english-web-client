import React from "react";
import axios from "axios";
import { useState } from "react";
import "./ResetPage.scss";
import { SERVER_URL } from "../../constants";
import { SuccessMsg, ErrMsg } from "../../util/Notify/Notification";
import { Link, useParams } from "react-router-dom";
export const ResetPage = () => {
  const initValues = { password: "", repassword: "", err: "", success: "" };
  const [values, setValues] = useState(initValues);
  const { access_token } = useParams();
  const handleSubmitForgot = async (e) => {
    try {
      const res = await axios.post(
        `${SERVER_URL}/user/reset`,
        { password: values.password },
        {
          headers: {
            Authorization: access_token,
          },
        }
      );
      setValues({ ...values, success: res.data.msg, err: "" });
    } catch (error) {
      error.response.data.msg &&
        setValues({ ...values, err: error.response.data.msg, success: "" });
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <div>
        <br />
        {values.success && SuccessMsg(values.success)}
        {values.err && ErrMsg(values.err)}
        {values.success != "" && (
          <div>
            <Link to="/login?callback=0">Quay lại đăng nhập</Link>
          </div>
        )}
        {values.success == "" && (
          <form className="base__form">
            <h2>Khôi phục tài khoản</h2>
            <div className="base__form-group">
              <label htmlFor="name">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleOnChange}
              ></input>
              <div className="base__form-error-message" />
            </div>
            <div className="base__form-group">
              <label htmlFor="name">Nhập lại mật khẩu</label>
              <input
                type="password"
                id="repassword"
                name="repassword"
                value={values.repassword}
                onChange={handleOnChange}
              ></input>
              <div className="base__form-error-message" />
            </div>
            <button type="button" onClick={handleSubmitForgot}>
              Xác nhận
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
