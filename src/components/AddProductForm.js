import React, { useState } from "react";
import axios from "axios";

function AddProductForm() {
  const [productData, setProductData] = useState({
    imageSrc: "",
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending data to the backend API
    try {
      await axios.post("http://localhost:5000/api/products", productData);
      alert("Product added successfully!");
      setProductData({ imageSrc: "", name: "", price: "", category: "" }); // Reset form
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Error adding product.");
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageSrc"
          value={productData.imageSrc}
          onChange={handleChange}
        />
        <br />

        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleChange}
        />
        <br />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
