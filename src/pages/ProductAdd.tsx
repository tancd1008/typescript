import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "../types/product";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
type ProductAddProps = {
    onAdd: (product: ProductType) => void;
};
type FormValues = {
    // _id: number;
    name: string;
    price: number;
    img:string
};

const ProductAdd = (props: ProductAddProps) => {
    // const _id = +uuidv4();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        props.onAdd(data);
        // navigate('/admin/product')
        // console.log(data);
        // console.log(_id);
    };
    return (
        <div className="text-center">
            <h1>Thêm mới sản phẩm</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-75  mx-auto">
                <div className="mb-b">
                    <div className="float-start">
                        <label htmlFor="">Tên sản phẩm</label>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        {...register("name", { required: true, minLength: 5 })}
                        placeholder="Nhap ten san pham"
                    />
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
                        <label htmlFor="">Giá</label>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        {...register("img")}
                        placeholder='Nhap gia'
                    />
                </div>
                <button className="btn btn-success">Thêm mới sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductAdd;
