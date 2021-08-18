import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  let handleSubmit = async (el) => {
    el.preventDefault();
    try {
      setLoading(true);
      await axios.post(`https://60f460de3cb0870017a8a216.mockapi.io/products`, {
        productName,
        price,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    history.push("/product");
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                value={productName}
                onChange={(el) => {
                  setProductName(el.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(el) => {
                  setPrice(el.target.value);
                }}
              />
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary mt-3"
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreateProduct;
