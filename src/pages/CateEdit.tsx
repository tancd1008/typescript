import React, { useEffect } from 'react'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readCate } from '../api/category';
import { CateType } from '../types/categories';
import { ProductType } from '../types/product';

type Props = {
    onUpdate: (cate: CateType ) => void
}
type FormValues = {
    _id: number;
    name: string
}


const CateEdit = (props: Props) => {
    const { id } = useParams();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>();
    const navigate = useNavigate();
    useEffect(() => {
        const getCate = async () => {
            const {data} = await readCate(id);
            // console.log(data.category);
            
            reset(data.category);          
        }
        getCate();

    },[])
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        props.onUpdate(data);
        toastr.success("Bạn cập nhật thành công!");
        setTimeout(()=>{
            navigate('/admin/categories')
        },1500)
    }
  return (
    <div>
        <div className='text-center'>
        <form className='w-75 mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <input type="text" {...register("name")} className="form-control" placeholder="Moi ban nhap ten" />
            </div>
            <button className="btn btn-success">Cập nhật danh mục</button>
        </form>
    </div>
    </div>
  )
}

export default CateEdit