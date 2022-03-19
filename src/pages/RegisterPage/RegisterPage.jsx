import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useRef, useState } from 'react'
import { isEmail, isPassword } from '../../util/validation'
import './index.scss'
import { PASSWORD_VALIDATE } from '../../constants'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ErrMsg, SuccessMsg } from '../../util/Notify/Notification'



const initRegister = {
  err: "",
  success: "",
}
export const RegisterPage = () => {
  const initialValues = { name: '', email: '', password: '', repassword: '', }
  const validate = (values) => {
    let err = {}
    if (!values.name) {
      err.name = 'Vui lòng nhập tên'
    }
    if (!values.email) {
      err.email = 'Vui lòng nhập email'
    } else if (!isEmail(values.email)) {
      err.email = 'Email không chính xác'
    }
    if (!values.password) {
      err.password = 'Vui lòng nhập mật khẩu'
    } else if (!isPassword(values.password)) {
      // err.password = 'Mật khẩu từ 6-20 ký tự và chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số'
      err.password = 'Mật khẩu từ 6-32 và ký tự đầu tiên phải là ký tự'
    }
    if (!values.repassword) {
      err.repassword = 'Vui lòng nhập lại mật khẩu'
    }
    else if (values.repassword != values.password) {
      err.repassword = 'Mật khẩu nhập lại không chính xác'
    }
    return err
  }
  const [register, setRegister] = useState(initRegister)
  const handleRegister = async (values) => {
    console.log("Form data: ", values)
    try {

      const res = await axios.post(`${'http://localhost:5000'}/user/register`, {
        email: values.email,
        password: values.password,
        name: values.name
      })
      setRegister({
        ...register, success: res.data.msg
      })

    } catch (error) {
      {
        error.response.data.message &&
          setRegister({
            ...register, err: error.response.data.message
          })
        console.log(error.response.data.message)
      }
    }
  }
  const emailInput = useRef()
  return (
    <div style={{margin: 50}}>
      

      {register.err != "" && ErrMsg(register.err)}
      {register.success != "" && SuccessMsg(register.success)}
      <div>
        <div className='base__form-container'>
          <div className='base__form-header'>
            <div>Đăng ký</div>
          </div>
          <Formik className='base__form'
            initialValues={initialValues}
            onSubmit={handleRegister}
            validate={validate}
          >
            <Form className='base__form'>
              <div className="base__form-group">
                <label htmlFor="name">Tên</label>
                <Field placeholder="example1" type="text" id='name' name='name'></Field>
                <ErrorMessage name='name'>
                  {(err) => <div className='base__form-error-message'>{err}</div>}
                </ErrorMessage>
              </div>

              <div className="base__form-group">
                <label htmlFor="email">Email</label>
                <Field placeholder="example1@gmail.com" type="text" id='email' name='email' />
                <ErrorMessage name='email'>
                  {(err) => <div className='base__form-error-message'>{err}</div>}
                </ErrorMessage>
              </div>

              <div className="base__form-group">
                <label htmlFor="password">Mật khẩu</label>
                <Field placeholder="example1" type="password" id='password' name='password' />
                <ErrorMessage name='password'>
                  {(err) => <div className='base__form-error-message'>{err}</div>}
                </ErrorMessage>
              </div>

              <div className="base__form-group">
                <label htmlFor="repassword">Nhập lại mật khẩu</label>
                <Field placeholder="example1" type="password" id='repassword' name='repassword' />
                <ErrorMessage name='repassword'>
                  {(err) => <div className='base__form-error-message'>{err}</div>}
                </ErrorMessage>
              </div>
              <button type='submit' >Đăng ký</button>
              <br />
              <p>Đã có tài khoản <Link to="/login">Đăng nhập</Link></p>
            </Form>

          </Formik>

        </div>


      </div>
    </div>

  )
}

// const validationSchema = Yup.object({
//   name: Yup.string().required('Vui lòng không bỏ trống'),
//   email: Yup.string()
//     .required('Vui lòng không bỏ trống'),
//   password: Yup.string()
//     .required('Vui lòng không bỏ trống')
//     .matches(PASSWORD_VALIDATE, 'Mật khẩu từ 6-20 ký tự và chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số')
//   ,
//   repassword: Yup.string()
//     .required('Vui lòng không bỏ trống'),
// })