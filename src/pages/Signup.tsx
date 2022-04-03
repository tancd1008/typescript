import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { singup } from '../api/user';
import { UserType } from '../types/user';
type SignUpProps = {
   
}
type FormValues = {
    name: string,
    email: string,
    password:string
}

const Signup = (props: SignUpProps) => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        await singup(data);
        navigate('/signin')
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto'>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <div className='mb-3'>
            <input type="text" placeholder='Ten dang nhap' {...register('name')} className="form-control" />
          </div>
          <div className='mb-3'>
            <input type="email" placeholder='Email' {...register('email')} className="form-control" />
          </div>
          <div className='mb-3'>
            <input type="password" placeholder='Mat khau' {...register('password')} className="form-control" />
          </div>
          <button className="w-100 btn btn-lg btn-primary">SignUp</button>
        </form>
    </div>
  )
}

export default Signup