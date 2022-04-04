import React from "react";
import { Link } from "react-router-dom";
import { CateType } from "../types/categories";

type ManagerProductProps = {
  data: CateType[];
  onRemove: (id: number) => void;
};

const ManagerProduct = (props: ManagerProductProps) => {
  console.log(props);
  return (
    <div className="">
      <h3>Quản lý sản phẩm</h3>
      <table className="table ">
        <thead>
          <tr className="table-primary">
            <th>#</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <Link
                      to={`/admin/product/${item._id}/edit`}
                      className="btn btn-warning"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => props.onRemove(item._id)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerProduct;
