import React, { useEffect, useState } from 'react'
import './ActivePage.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ErrMsg, SuccessMsg } from '../../util/Notify/Notification'

const initalStatus = {
  err: "",
  success: "",
}
export const ActivePage = () => {
  const {activation_token} = useParams()
  const [status, setStatus] = useState(initalStatus)

  useEffect(()=> {
    if (activation_token) {
      const activationEmail = async() => {
        try {
          const res = await axios.post(`${'http://localhost:5000'}/user/activation`, {activation_token})
          setStatus({...status, success: res.data.msg})

        } catch (error) {
          error.response.data.msg && 
            setStatus({...status, err: error.response.data.msg})
        }
      }
      activationEmail()
    }
  }, [activation_token])
  console.log(activation_token)
  return (
    <div className='active_page'>
      {status.err && ErrMsg(status.err)}
      {status.success && SuccessMsg(status.success)}
    </div>
  )
}
