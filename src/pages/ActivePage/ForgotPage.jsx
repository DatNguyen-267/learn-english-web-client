import axios from 'axios' 
import React from 'react'
import {useState} from 'react'
import './ForgotPage.scss'
import { SERVER_URL } from '../../constants'
import {SuccessMsg , ErrMsg} from '../../util/Notify/Notification'

axios.defaults.withCredentials = true

export const ForgotPage = () => {
  const initForgot = {email:'', err: '', success: ''}
  const [forgot, setForgot] = useState(initForgot)

  const handleSubmitForgot = async(e) => {
    try {
      const res = await axios.post(`${SERVER_URL}/user/forgot`, {email:forgot.email})
      setForgot({...forgot, success: res.data.msg, err:''})
    } catch (error) {
      error.response.data.msg && 
      setForgot({...forgot, err: error.response.data.msg, success: ''})
    }
  }
  const handleOnChange = (e) => {
    const {name, value} = e.target
    setForgot({...forgot, email: value})
  }
  return (
    <div>
      <div>
        <br/>
          <form className='base__form'>
          {forgot.success && SuccessMsg(forgot.success)}
          {forgot.err && ErrMsg(forgot.err)}
            <h2 >Quên mật khẩu</h2>
            <div className="base__form-group">
              <label htmlFor="name">Email</label>
              <input type="text" id='name' name="email"
              value={forgot.email}
              onChange={handleOnChange}></input>
              <div className='base__form-error-message'/>
            </div>
            <button type="button" onClick={handleSubmitForgot}>Verify</button>
          </form>
      </div>
    </div>
  )
}
