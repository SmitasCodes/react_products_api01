import ProductsSearch from "./ProductsSearch";
import ProductsByCategory from "./ProductsByCategory";
import styles from "./ProductsFiltering.module.css";

const ProductsFilterting = (props) =>{
  const searchFilterHandler = (entry) =>{
    props.searchEntry(entry)
  }

  const categoryFilterHandler = (entry) =>{
    props.categoryEntry(entry);
  }

  return(
    <div className={styles.productsFilteringWrapper}>
      <ProductsSearch searchValue={searchFilterHandler}/>
      <ProductsByCategory productsList={props.productsList} categoryValue={categoryFilterHandler}/>
    </div>
  )
}

export default ProductsFilterting;