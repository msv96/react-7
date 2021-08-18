import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function EditProduct(props) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let fetchData = async () => {
      try {
        let products = await axios.get(
          `https://60f460de3cb0870017a8a216.mockapi.io/products/${props.match.params.id}`
        );
        setProductName(products.data.product_name);
        setPrice(products.data.price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);

  let handleSubmit = async (el) => {
    el.preventDefault();
    try {
      setLoading(true);
      await axios.put(
        `https://60f460de3cb0870017a8a216.mockapi.io/products/${props.match.params.id}`,
        { productName, price }
      );
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
        <h1 className="h3 mb-0 text-gray-800">Update Product</h1>
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
                value="Update"
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
export default EditProduct;
