import React, { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import ProductsFiltering from "../ProductsFiltering/ProductsFiltering";
import productsServices from "../../services/productsServices";
import styles from "./ProductsMain.module.css";

const ProductsMain = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const getProducts = async (searchEntry) => {
    const res = await productsServices(searchEntry);
    setProducts(res.products);
    setFiltered(res.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const catFilteredProducts = (categoryOption) => {
    if(categoryOption==='all'){
      setFiltered(products)
      return;
    }

    setFiltered(products.filter((product) => {
      return product.category == categoryOption;
    }));
  };

  return (
    <div className={styles.productsMainWrapper}>
      <ProductsFiltering
        searchEntry={getProducts}
        categoryEntry={catFilteredProducts}
        productsList={products}
      />
      <ProductsList products={filtered} />
    </div>
  );
};

export default ProductsMain;
