import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from '../types/product';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    _id: number,
    name: string,
    price: number
}



const ProductAdd = (props: ProductAddProps) => {
    const _id = +uuidv4()
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // props.onAdd(data);
        // navigate('/admin/product')
        console.log(data)
    console.log(_id)


    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='w-75' >
            <div className='mb-b'>
            <input type="text" className='form-control' {...register('name', { required: true, minLength: 5})} />
            {errors.name && errors.name.type === "required" && <span className='text-danger'>Required</span> }
            {errors.name && errors.name.type === "minLength" && <span className='text-danger'>MinLength</span> }
            </div>
            <div className='mb-3'>
            <input type="number" className='form-control' {...register('price')}/>
            </div>
            <button className='btn btn-success'>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd