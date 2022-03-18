import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from '../../types/product';
import { useNavigate } from 'react-router-dom';
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    name: string,
    price: number
}



const ProductAdd = (props: ProductAddProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        navigate('/admin/product')

    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" {...register('name', { required: true, minLength: 5})} />
            {errors.name && errors.name.type === "required" && <span className='text-danger'>Required</span> }
            {errors.name && errors.name.type === "minLength" && <span className='text-danger'>MinLength</span> }
            <input type="number" {...register('price')}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd