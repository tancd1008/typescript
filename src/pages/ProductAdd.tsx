import React, { useEffect, useState } from "react";
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "../types/product";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { listCate } from "../api/category";
import { CateType } from "../types/categories";
import { uploadFile } from "../utils/uploadFile";
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
    desc:string
};

const ProductAdd = (props: ProductAddProps) => {
    const [categories, setCategories] = useState<ProductType[]>([]);
    const [preview, setPreview] = useState<string>();
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm<FormValues>();
    const handlePreview = (e: any) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    const onSubmit: SubmitHandler<FormValues> =  async (data) => {
        try {
            const url= await uploadFile(data.img[0]);
            data.img = url,
            console.log(data);
            props.onAdd(data);
            toastr.success("Bạn thêm thành công!")
            setTimeout(()=> {
                navigate('/admin/product')
                
            },2000)
        } catch (error) {
            toastr.error("Lỗi");
        }
        
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
                    <input type="number" className="form-control" {...register("price",{ required: true, minLength: 5 })} placeholder='Nhap gia'/>
                    {errors.price && errors.price.type === "required" && (<span className="text-danger">Required</span>)}
                    {errors.price && errors.price.type === "minLength" && (<span className="text-danger">MinLength</span>)}
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
                        <label htmlFor="">Ảnh</label>
                    </div>
                    <input  id="file-upload" type="file" {...register('img',{required:true})} className="form-control" />
                </div>
                {/* <div className="mb-3">
                        <img src={preview || "https://res.cloudinary.com/tancd/image/upload/v1649231678/no-thumbnail-medium-16315289445371324098298-0-0-620-992-crop-16315296413801134506614_vc8xjb_gmweq6.png"}  alt="" />
                </div> */}
                <div className="mb-3">
                    <div className="float-start">
                        <label htmlFor="">Miêu tả</label>
                    </div>
                    <textarea className="form-control" {...register('desc')}></textarea>
                </div>
                <button className="btn btn-success">Thêm mới sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductAdd;