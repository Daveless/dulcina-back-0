"use client";
import { Layout, ProductDetails } from "@/app/components";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Product = ({ params }) => {
  const { id } = params;
  const options = [
    "Feliz Día",
    "Feliz Navidad",
    "Feliz Cumpleaños",
    "Personalizado",
  ];
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://dulcina-backend.onrender.com/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Layout>
      <ProductDetails product={product} />
    </Layout>
  );
};
export default Product;
