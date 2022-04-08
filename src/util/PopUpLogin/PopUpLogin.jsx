import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './PopUpLogin.scss'
import * as actions from './../../redux/actions/index'

export const PopUpLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    navigate('/login')
  }
  const handleClose = () => {
    dispatch(actions.turn_off_popup_login())
  }
  const handleTurnOff = () => {
    dispatch(actions.turn_off_popup_login())
  }
  return (
    <div className='pop-up'>
      <div className='modal'>
        <div className="modal-overlay" onClick={handleTurnOff}>

        </div>
        <div className="modal-body">
          {/* <button className='pop-up__btn-close' onClick={handleClose}>X</button> */}
          <div className='pop-up__img'>
            <img src="https://www.seekpng.com/png/full/138-1388103_user-login-icon-login.png" alt="" />
          </div>
          <div className='pop-up__title'>Vui lòng đăng nhập</div>
          <button className='pop-up__btn-login' onClick={handleClick}>Đăng nhập</button>
        </div>
      </div>
    </div>

  )
}
