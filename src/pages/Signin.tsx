import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { singin } from '../api/user'

type Props = {}
type FormInput = {
  email:string,
  password:string
}

const Signin = (props: Props) => {
  const navigate = useNavigate()
  const {register,handleSubmit,formState:{errors}} = useForm<FormInput>()
  const onSubmit:SubmitHandler<FormInput> = async (data)=>{
      const {data: user } = await singin(data);
      localStorage.setItem('user', JSON.stringify(user))
      navigate("/")
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