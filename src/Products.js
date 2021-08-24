import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let product = await axios.get(
          `https://60f460de3cb0870017a8a216.mockapi.io/products`
        );
        setProductList([...product.data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  let handleDelete = async (id) => {
    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      try {
        await axios.delete(
          `https://60f460de3cb0870017a8a216.mockapi.io/products/${id}`
        );
        let rowIndex = productList.findIndex((el) => el.id === id);
        productList.splice(rowIndex, 1);
        setProductList([...productList]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="h2 mb-2 text-gray-800">Products</h1>
      </div>
      <div className="d-md-flex justify-content-between align-items-center">
        <Link to="/create-product" className="btn btn-lg btn-success p-2 mb-5">
          <FontAwesomeIcon key="js99" icon={faPlus}></FontAwesomeIcon>
          <span className="pl-2">Create Product</span>
        </Link>
        <Link to="/" className="btn btn-lg btn-outline-success p-3 mb-5">
          <FontAwesomeIcon key="hd33" icon={faHome}></FontAwesomeIcon>
          <span className="pl-3">Home</span>
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-success">
            List of Products
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr key="hdy7w12">
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((el, index) => {
                    return (
                      <tr key={index * 5 + 152}>
                        <td>{el.id}</td>
                        <td>{el.product_name}</td>
                        <td>$ {el.price}</td>
                        <td>
                          <Link
                            to={`/edit-product/${el.id}`}
                            className="btn btn-info"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger ml-3"
                            onClick={() => {
                              handleDelete(el.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
