import React, { useEffect, useState } from 'react';
import WaveImg from './../../assets/img/Login/wave.png'
import CarImg from './../../assets/img/Login/car_1.svg'
import './LoginPage.scss'
import { useDispatch } from 'react-redux';
import * as actionTypes from './../../constants/actionTypes'
import * as actions from './../../redux/actions/index'
import { useNavigate } from 'react-router-dom';

function LoginPage () {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const [i, setI] = useState(0)
  const handleLoginClick = () => {
    dispath(actions.login_request({
      username: 'test',
      password: 'test',
      navigate: navigate,
    }))
  }
  useEffect(()=> {
    console.log('chạy lại', i)
    // const script = document.createElement('script');
    //   script.type = 'text/javascript';
    //   script.appendChild(
    //     document.createTextNode(`
          
    //       // inputs[0].parentNode.parentNode.classList.add('focus')
    //       `)
    //     )
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // }
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
  })
  return (
    <div style={{
      marginTop: -24
    }}>
      {/* <input type="text"  style={{
        display: "fixed",
        width: 100,
        height: 100,
        background: "black"
      }} onChange={ () => setI(i + 1)}/> */}
      <img src={WaveImg} alt="" className="wave"></img>
      <div className="container">
        <img src={CarImg} alt="" className="img"/>
        <div className="login">
          <form action="">
            <div className="title">LOGIN</div>
            <div className="form-group">
              <div className="form-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="form-input-container">
                <h5 className="form-label">Username</h5>
                <input type="text" className="form-input"/>
              </div>
            </div>
            <div className="form-group">
              <div className="form-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="form-input-container">
                <h5 className="form-label">Password</h5>
                <input type="password" className="form-input"/>
              </div>
            </div>
            <a href="#" className="btn-forget" >Forget Password</a>
            <button className="btn btn-login" type="button" onClick={handleLoginClick}>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default LoginPage;