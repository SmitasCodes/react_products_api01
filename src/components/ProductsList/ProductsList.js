import React, { useEffect, useState } from "react";
import productsServices from "../../services/productsServices";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
    <ResponsiveMasonry
      columnsCount={3}
      columnsCountBreakPoints={{200: 1,400: 2, 900: 3 }}
    >
      <Masonry gutter="5px" className={styles.productsWrapper}>
        {products.map((product) => {
          return (
            <Product
              title={product.title}
              description={product.description}
              category={product.category}
              brand={product.brand}
              image={product.thumbnail}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Products;
