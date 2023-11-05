import React, { useRef } from "react";

import Button from "../UI/Button";

const AdminForm = (props) => {
  const inputProductIdRef = useRef();
  const inputSellingPriceRef = useRef();
  const inputProductNameRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const sellingDataObj = {
      productId: inputProductIdRef.current.value,
      sellingPrice: inputSellingPriceRef.current.value,
      productName: inputProductNameRef.current.value,
    };
    props.getSellingDataObj(sellingDataObj);
    inputProductIdRef.current.value = "";
    inputSellingPriceRef.current.value = "";
    inputProductNameRef.current.value = "";
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="productId">Product Id:- </label>
      <input type="number" id="productid" ref={inputProductIdRef} />
      <label htmlFor="sellingPrice"> Selling Price:- </label>
      <input type="number" id="sellingprice" ref={inputSellingPriceRef} />
      <label htmlFor="productName"> Product Name:- </label>
      <input type="text" id="productname" ref={inputProductNameRef} />
      <Button type={"submit"}>Add Product</Button>
    </form>
  );
};

export default AdminForm;
