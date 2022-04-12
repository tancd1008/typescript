import React from 'react'
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { singin } from '../api/user'
import { authenticated } from '../utils/localStorage'

type Props = {}
type FormInput = {
  email:string,
  password:string
}

const Signin = (props: Props) => {
  const navigate = useNavigate()
  const {register,handleSubmit,formState:{errors}} = useForm<FormInput>()
  const onSubmit:SubmitHandler<FormInput> = async (data)=>{
    try {
      const {data: user } = await singin(data);
      console.log(user)
      toastr.success("Đăng Nhập Thành công")
      setTimeout(() => {
        authenticated(user, () => {
          navigate('/');
      })
      },2000)
      
    } catch (error) {
      toastr.error("Tài khoản hoặc mật khẩu không chính xác")
    }
      
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto'>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          
          <div className='mb-3'>
            <input type="email" placeholder='Email' {...register('email')} className="form-control" />
          </div>
          <div className='mb-3'>
            <input type="password" placeholder='Mat khau' {...register('password')} className="form-control" />
          </div>
          <button className="w-100 btn btn-lg btn-primary">Signin</button>
        </form>
    </div>
  )
}

export default Signin