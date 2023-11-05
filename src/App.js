import React, { useState } from "react";

import AdminForm from "./components/SellerForm/AdminForm";
import Products from "./components/Products/ProductsList";
import Header from "./components/Products/Header";

function App() {
  const [sellingDataObj, setSellingDataObj] = useState([]);

  const sellingData = (newData) => {
    setSellingDataObj((prevObj) => {
      return [...prevObj, newData];
    });
  };

  const deleteSellingDataObj = (objId) => {
    setSellingDataObj((prevObj) => {
      const updatedSellingDataList = prevObj.filter(
        (data) => data.productId !== objId
      );
      return updatedSellingDataList;
    });
  };

  return (
    <div>
      <AdminForm getSellingDataObj={sellingData} />
      <Header />
      <Products lists={sellingDataObj} onDelete={deleteSellingDataObj} />
    </div>
  );
}

export default App;
