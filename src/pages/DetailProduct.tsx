import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../api/product";
import { ProductType } from "../types/product";

type ProductsProps = {};

const DetailProduct = (props: ProductsProps) => {
  const [product, setProduct] = useState<ProductType>();
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      console.log(data);
      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <div className="row">
      <div className="col-3">
        <img className="" src={product?.img} alt="" />
      </div>
      <div className="col-6 mx-auto">
        <h3>Sản phẩm: {product?.name}</h3>
        <p>Giá:{product?.price}</p>
      </div>
    </div>
  );
};

export default DetailProduct;
