import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Product from "../Product/Product";
import styles from "./ProductsList.module.css";

const Products = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.products.length > 0) {
      setLoading(false);
    }
  }, [props.products]);

  if (loading) {
    return <p className={styles.productsFeedback}>Loading...</p>;
  }

  let filteredProducts = [];

  if (props.filteredCategory === "all") {
    filteredProducts = props.products;
  } else {
    filteredProducts = props.products.filter((product) => {
      return product.category == props.filteredCategory;
    });
  }

  return (
    <div>
      {filteredProducts.length === 0 && (
        <p className={styles.productsFeedback}>No Products Found</p>
      )}
      <ResponsiveMasonry
        columnsCount={3}
        columnsCountBreakPoints={{ 200: 1, 400: 2, 900: 3 }}
      >
        <Masonry gutter="10px">
          {filteredProducts.map((product) => {
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
    </div>
  );
};

export default Products;
