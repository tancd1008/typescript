import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    _id: number,
    name: string,
    price: number,
    img:string
}

const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate('/admin/product');
    } 

  return (
    <div className="text-center">
    <h1>Thêm mới sản phẩm</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="w-75  mx-auto">
        <div className="mb-3">
            <div className="float-start">
                <label htmlFor="">Tên sản phẩm</label>
            </div>
            <input type="text"className="form-control"{...register("name", { required: true, minLength: 5 })} placeholder="Nhap ten san pham"/>
            {errors.name && errors.name.type === "required" && (
                <span className="text-danger">Required</span>
            )}
            {errors.name && errors.name.type === "minLength" && (
                <span className="text-danger">MinLength</span>
            )}
        </div>
        <div className="mb-3">
            <div className="float-start">
                <label htmlFor="">Giá</label>
            </div>
            <input
                type="number"
                className="form-control"
                {...register("price")}
                placeholder='Nhap gia'
            />
        </div>
        <div className="mb-3">
            <div className="float-start">
                <label htmlFor="">Ảnh</label>
            </div>
            <input
                type="text"
                className="form-control"
                {...register("img")}
                placeholder='anh'
            />
        </div>
        <button className="btn btn-success">Thêm mới sản phẩm</button>
    </form>
</div>
  )
}

export default ProductEdit