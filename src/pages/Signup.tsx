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
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Ten dang nhap' {...register('name')} />
            <input type="email" placeholder='Email' {...register('email')} />
            <input type="password" placeholder='Mat khau' {...register('password')} />
            <button>SignUp</button>
        </form>
    </div>
  )
}

export default Signup