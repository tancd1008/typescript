import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CateType } from '../types/categories';

type CateAddProps = {
    onAdd: (category: CateType) => void
}
type FormValues = {
    _id: number;
    name: string
}

const CateAdd = (props: CateAddProps) => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState: {errors}} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // console.log(data)
        props.onAdd(data)
        navigate('/admin/categories')
        
    }

  return (
    <div className='text-center'>
        <form className='w-75 mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <input type="text" {...register("name")} className="form-control" placeholder="Moi ban nhap ten" />
            </div>
            <button className="btn btn-success">Thêm mới danh mục</button>
        </form>
    </div>
  )
}

export default CateAdd