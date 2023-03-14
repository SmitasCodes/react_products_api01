import React, { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import ProductsFiltering from "../ProductsFiltering/ProductsFiltering";
import productsServices from "../../services/productsServices";
import styles from "./ProductsMain.module.css";

const ProductsMain = () => {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCat] = useState('all');

  const getProducts = async (searchEntry) => {
    const res = await productsServices(searchEntry);
    setProducts(res.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const catFilteredProducts = (categoryOption) => {
    setFilteredCat(categoryOption)
  };

  return (
    <div className={styles.productsMainWrapper}>
      <ProductsFiltering
        searchEntry={getProducts}
        categoryEntry={catFilteredProducts}
        productsList={products}
      />
      <ProductsList products={products} filteredCategory={filteredCategory}/>
    </div>
  );
};

export default ProductsMain;
