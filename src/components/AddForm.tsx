import React from "react";
import {  useFormik } from "formik";
import * as Yup from "yup";
import { useAddProductMutation } from "../features/api/apiSlice";

const AddFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required("Required"),
  rating: Yup.number().required("Required"),
  stock: Yup.number().required("Required"),
  brand: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const AddForm = () => {
  const [addProduct, isLoading] = useAddProductMutation();
  const onSubmit = async (values:any, actions:any) => {
  
    await addProduct(values);
    alert("Product Added successfully");
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,

    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: 0,
      rating: 0,
      stock: 0,
      brand: "",
      category: "",
    },
    validationSchema: AddFormSchema,
    onSubmit,
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full gap-2 py-4"
      >
        <div className="flex justify-between">
          <label className="label">
            <span className="label-text mx-10">Title</span>
          </label>
          <input
            id="title"
            type="text"
            placeholder="title"
            className="input input-bordered "
            value={values.title}
            onChange={handleChange}
          />
        </div>
        {errors.title && touched.title && (
          <h3 className="text-red-500	flex justify-end	">error</h3>
        )}
        <div className="flex justify-between">
          <label className="label">
            <span className="label-text mx-10">Description</span>
          </label>
          <input
            id="description"
            type="text"
            placeholder="description"
            className="input input-bordered "
            value={values.description}
            onChange={handleChange}
          />
        </div>
        {errors.description && touched.description && (
          <h3 className="text-red-500	flex justify-end">error</h3>
        )}
        <div className="flex justify-between">
          <label className="label">
            <span className="label-text mx-10">Price</span>
          </label>
          <input
            id="price"
            type="number"
            placeholder="price"
            className="input input-bordered "
            value={values.price}
            onChange={handleChange}
          />
        </div>
        {errors.price && touched.price && (
          <h3 className="text-red-500	flex justify-end">error</h3>
        )}
        <div className="flex justify-between">
          <label className="label">
            <span className="label-text mx-10">Rating</span>
          </label>
          <input
            id="rating"
            type="number"
            placeholder="price"
            className="input input-bordered "
            value={values.rating}
            onChange={handleChange}
          />
        </div>
        {errors.rating && touched.rating && (
          <h3 className="text-red-500	flex justify-end">error</h3>
        )}
        <div className="flex justify-between">
          <label className="label">
            <span className="label-text mx-10">Stock</span>
          </label>
          <input
            id="stock"
            type="number"
            placeholder="price"
            className="input input-bordered "
            value={values.stock}
            onChange={handleChange}
          />
        </div>
        {errors.stock && touched.stock && (
          <h3 className="text-red-500	flex justify-end">error</h3>
        )}
        <div className="flex justify-between">
          <label className="label">
            <span className="label-text mx-10">Brand</span>
          </label>
          <input
            id="brand"
            type="text"
            placeholder="brand"
            className="input input-bordered "
            value={values.brand}
            onChange={handleChange}
          />
        </div>
        {errors.brand && touched.brand && (
          <h3 className="text-red-500	flex justify-end">error</h3>
        )}
        <div className="flex justify-between">
          <label className="label">
            <span className="label-text mx-10">Category</span>
          </label>
          <input
            id="category"
            type="text"
            placeholder="category"
            className="input input-bordered "
            value={values.category}
            onChange={handleChange}
          />
        </div>
        {errors.category && touched.category && (
          <h3 className="text-red-500	flex justify-end">error</h3>
        )}
        <button
          className="btn mx-20 mt-10  "
          type="submit"
          disabled={isSubmitting}
        >
          Add to Store
        </button>
      </form>
    </div>
  );
};
