import * as React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  //const [videoUrl, setVideoUrl] =useState("");
  const url = `https://codepath-store-api.herokuapp.com/store/${id}`;

  async function fetchProducts() {
    //console.log("Fetching products")
    const response = await fetch(url);
    let existingData = await response.json();
    existingData = existingData.product;
    setProduct(existingData);
    //setParsedData(existingData);
    //images = data.results;
    //console.log(existingData);
  }
  useEffect(() => {
    fetchProducts();
    // category.map((category)=>{
    //   <p>category</p>
    // })
  }, []);

  return (
    <div className="returnedDisplay">
      <Card name={product.name} image={product.image} price={product.price} />
    </div>
  );
}
