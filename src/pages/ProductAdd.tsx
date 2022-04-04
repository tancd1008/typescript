import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "../types/product";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { listCate } from "../api/category";
import { CateType } from "../types/categories";
type ProductAddProps = {
    onAdd: (product: ProductType) => void;
    cate: CateType[]
};
type FormValues = {
    _id: number;
    name: string;
    price: number;
    img:string;
    category:string
};

const ProductAdd = (props: ProductAddProps) => {
    const [categories, setCategories] = useState<ProductType[]>([]);
    const navigate = useNavigate();
    const {register,handleSubmit, watch,formState: { errors }} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // console.log(data);
        props.onAdd(data);
        navigate('/admin/product')
    };
   
    return (
        <div className="text-center">
            <h2>Thêm mới sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-75  mx-auto">
                <div className="mb-3">
                    <div className="float-start">
                        <label htmlFor="">Tên sản phẩm</label>
                    </div>
                    <input type="text"className="form-control"{...register("name", { required: true, minLength: 5 })} 
                    placeholder="Nhap ten san pham"/>
                    {errors.name && errors.name.type === "required" && (<span className="text-danger">Required</span>)}
                    {errors.name && errors.name.type === "minLength" && (<span className="text-danger">MinLength</span>)}
                </div>
                <div className="mb-3">
                    <div className="float-start">
                        <label htmlFor="">Giá</label>
                    </div>
                    <input type="number" className="form-control" {...register("price")} placeholder='Nhap gia'/>
                </div>
                <div className="mb-3">
                    <div className="float-start">
                        <label htmlFor="">Ảnh</label>
                    </div>
                    <input type="text" className="form-control" {...register("img")} placeholder='anh'/>
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
                <button className="btn btn-success">Thêm mới sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductAdd;