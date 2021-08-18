import { faDownload } from "@fortawesome/free-solid-svg-icons";
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
      <h1 className="h3 mb-2 text-gray-800">Products</h1>
      <Link to="/product/create" className="btn btn-primary shadow-sm mb-3">
        <FontAwesomeIcon
          icon={faDownload}
          size="sm"
          className="text-white-50"
        ></FontAwesomeIcon>{" "}
        Create Product
      </Link>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
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
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((el) => {
                    return (
                      <tr>
                        <td>{el.id}</td>
                        <td>{el.product_name}</td>
                        <td>$ {el.price}</td>
                        <td>
                          <Link
                            to={`/product/edit/${el.id}`}
                            className="btn btn-info"
                          >
                            Update
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
