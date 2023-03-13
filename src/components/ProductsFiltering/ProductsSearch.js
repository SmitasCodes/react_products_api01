import React,{useRef} from "react";
import styles from "./ProductsSearch.module.css"
import './ProductsSearchCategoryStyle.css'
const ProductsSearch = (props) =>{
  const inputRef = useRef(null);

  const searchBtnHandler = () =>{
    props.searchValue(inputRef.current.value)
  }

  return (
  <div className={styles.productsBySearchWrapper}>
    <input type="text" ref={inputRef} className="productsSearchCategoryStyle"/>
    <input type="submit" value="Search" onClick={searchBtnHandler} className={styles.productsBySearchWrapper__submit}/>
  </div>
  )
}

export default ProductsSearch;