import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function EditProduct(props) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.productName || !values.price) {
        errors.productName = "Required";
        errors.price = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.put(
          `https://60f460de3cb0870017a8a216.mockapi.io/products/${props.match.params.id}`,
          { productName: values.productName, price: values.price }
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      history.push("/product");
    },
  });

  useEffect(() => {
    let fetchData = async () => {
      try {
        let products = await axios.get(
          `https://60f460de3cb0870017a8a216.mockapi.io/products/${props.match.params.id}`
        );
        formik.values.productName = products.data.product_name;
        formik.values.price = products.data.price;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props, formik]);

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Update Product</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              value={formik.values.productName}
              onChange={e => e.target.value}
            />
            {formik.errors.productName ? (
              <span className="text-danger">{formik.errors.productName}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              value={formik.values.price}
              onChange={e => e.target.value}
            />
            {formik.errors.productName ? (
              <span className="text-danger">{formik.errors.productName}</span>
            ) : null}
          </div>
          <div className="col-lg-1">
            <input
              type="submit"
              value="Update"
              className="btn btn-success mt-3"
              disabled={loading}
            />
          </div>
          <div className="col-lg-1">
            <Link to="/product">
              <input
                type="submit"
                value="Cancel"
                className="btn btn-success mt-3"
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default EditProduct;
