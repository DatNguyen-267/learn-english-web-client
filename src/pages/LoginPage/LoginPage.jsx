import React, { useEffect, useState } from 'react';
import WaveImg from './../../assets/img/Login/wave.png'
import CarImg from './../../assets/img/Login/car_1.svg'
import './LoginPage.scss'
import { useDispatch } from 'react-redux';
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../../redux/actions/index'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { postLogin } from '../../api';
import { ErrMsg, SuccessMsg } from '../../util/Notify/Notification';
const initialUser = {
  email: "",
  password: "",
  err: "",
  success: "",
}

axios.defaults.withCredentials = true;
function LoginPage () {
  const navigate = useNavigate()
  const dispath = useDispatch()

  const [user, setUser] = useState(initialUser)
  const handleOnChange= (e) => {
    const  {name, value } = e.target
    setUser({...user, [name]: value})
  }

  const handleLoginClick = async (e) => {
    try {
      const res = await axios.post(`${'http://localhost:5000'}/user/login`, {
        email: user.email,
        password: user.password}, {withCredentials: true})
      localStorage.setItem('firstLogin', true)
      dispath(actions.login_success())
      dispath(actions.turn_off_popup_login())
      try {
        navigate(-1)
      } catch (error) {
        navigate('/course')
      }
      
    } catch (error) {
      {error.response.data.msg &&
      setUser({...user, err:error.response.data.msg})}
      console.log(error.response.data.msg)
    }
  }
  useEffect(()=> {
    let inputs = document.querySelectorAll(".form-input")
    function focusFunc() {
      let parent = this.parentNode.parentNode
      parent.classList.add('focus')
    }
    function blurFunc() {
      let parent = this.parentNode.parentNode
      if (this.value == "" || this.value == null) {
        parent.classList.remove('focus')
      }
    }
    inputs.forEach(input => {
      input.addEventListener('focus', focusFunc)
      input.addEventListener('blur', blurFunc)
    })
    inputs[0].focus()
  },[])
  return (
    <div style={{
      marginTop: -24
    }}>
      <img src={WaveImg} alt="" className="wave"></img>
      <div className="container">
        <img src={CarImg} alt="" className="img"/>
        <div className="login">
          <form action="">
            <div className="title">LOGIN</div>
            { user.err != "" && ErrMsg(user.err)}
            <div className="form-group">
              <div className="form-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="form-input-container">
                <h5 className="form-label">Email</h5>
                <input 
                name="email"
                  value={user.email}
                  onChange={handleOnChange}
                  type="text" 
                  className="form-input"/>
              </div>
            </div>

            <div className="form-group">
              <div className="form-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="form-input-container">
                <h5 className="form-label">Password</h5>
                <input 
                  name="password"
                  value={user.password}
                  type="password" 
                  className="form-input"
                  onChange={handleOnChange}/>
              </div>
            </div>
            
            <button className="btn btn-login" type="button" onClick={handleLoginClick}>Đăng nhập</button>
            <p href="#" className="btn-forget" >
              <Link to="/forgot">Quên mật khẩu</Link>
            </p>
            <p className='pass-to-register'>Tạo tài khoản mới? <Link to="/register">Đăng ký</Link></p> 
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default LoginPage;