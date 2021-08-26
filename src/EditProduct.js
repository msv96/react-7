import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function EditProduct(props) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      product_name: "",
      price: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.product_name) {
        errors.product_name = "Required";
      }
      if (!values.price) {
        errors.price = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.put(
          `https://60f460de3cb0870017a8a216.mockapi.io/products/${props.match.params.id}`,
          { product_name: values.product_name, price: values.price }
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
        let product = await axios.get(
          `https://60f460de3cb0870017a8a216.mockapi.io/products/${props.match.params.id}`
        );
        formik.setFieldValue("product_name", product.data.product_name);
        formik.setFieldValue("price", product.data.price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Update Product</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="product_name">Product Name</label>
            <input
              id="product_name"
              name="product_name"
              type="text"
              className="form-control"
              value={formik.values.product_name}
              onChange={formik.handleChange}
            />
            {formik.errors.product_name ? (
              <span className="text-danger">{formik.errors.product_name}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="text"
              className="form-control"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            {formik.errors.price ? (
              <span className="text-danger">{formik.errors.price}</span>
            ) : null}
          </div>
          <div className="col-lg-1">
            <button
              type="submit"
              className="btn btn-success mt-3"
              disabled={loading}
            >
              Edit
            </button>
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
