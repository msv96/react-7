import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";

function CreateProduct() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
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
        await axios.post(
          `https://60f460de3cb0870017a8a216.mockapi.io/products`,
          {
            product_name: values.productName,
            price: values.price,
          }
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      history.push("/product");
    },
  });

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-center mb-4">
        <h1 className="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="productName">Product Name</label>
            <input
              id="productName"
              type="text"
              className="form-control"
              value={formik.values.productName}
              onChange={formik.handleChange}
            />
            {formik.touched.productName ? (
              <span className="text-danger">{formik.errors.productName}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="text"
              className="form-control"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            {formik.touched.price ? (
              <span className="text-danger">{formik.errors.price}</span>
            ) : null}
          </div>
          <div className="col-lg-1">
            <input
              type="submit"
              value="Submit"
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
export default CreateProduct;
