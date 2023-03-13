import React, { useEffect, useState } from "react";
import productsServices from "../../services/productsServices";
import Product from "../Product/Product";
import styles from "./ProductsList.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await productsServices();
    setProducts(res.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.productsWrapper}>
      {products.map((product) => {
        return (
          <Product
            title={product.title}
            image={product.thumbnail}
            price={product.price}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default Products;
