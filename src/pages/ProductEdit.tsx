import React, { useEffect, useState } from 'react'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { CateType } from '../types/categories';
import { ProductType } from '../types/product';
import { uploadFile } from '../utils/uploadFile';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
    cate: CateType[]
}
type FormInputs = {
    _id: number,
    name: string,
    price: number,
    img:string,
    category:number,
    desc:string
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
    
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            if(typeof data.img === "object" ){
                data.img = await uploadFile(data.img[0])
            }
            console.log(data);
            
            props.onUpdate(data);
            // console.log("1");
            
            toastr.success("Bạn cập nhật thành công")
            setTimeout(() => {
                navigate('/admin/product');
            },2000)
        } catch (error) {
            
        }

        // console.log(data);
        
    } 

  return (
    <div className="text-center">
    <h1>Cập nhật sản phẩm</h1>
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
            <input id='file-upload' type="file" className="form-control" {...register("img")} placeholder='ảnh'/>
        </div>
        <div className="mb-3">
                    <div className="float-start">
                        <label htmlFor="">Loại hàng</label>
                    </div>
                    <select  className="form-select" {...register("category")}>
                    {props.cate.map((item,index) => {
                            return <option key={index} value={item._id}>{item.name}</option>
                        })}
                        
                    </select>
                </div>
                <div className="mb-3">
                    <div className="float-start">
                        <label htmlFor="">Miêu tả</label>
                    </div>
                    <textarea className="form-control" {...register('desc')}></textarea>
                </div>
        <button className="btn btn-success">Cập nhật sản phẩm</button>
    </form>
</div>
  )
}

export default ProductEdit