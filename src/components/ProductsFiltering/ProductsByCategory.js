import styles from "./ProductsByCategory.module.css"
import './ProductsSearchCategoryStyle.css'

const ProductsByCategory = (props) =>{
  let categories = ['all'];

  props.productsList.map((product) =>{
    if(categories.includes(product.category)){
      return;
    } else{
      categories.push(product.category);
    }
  })

  const categoryFilterHandler = (e) =>{
    props.categoryValue(e.target.value);
  }

  return(
    <div className={styles.productsByCategoryWrapper}>
      <select onChange={categoryFilterHandler} className="productsSearchCategoryStyle">
        {categories.map((category) =>{
          return <option value={category} key={category}>{category}</option>
        })}
      </select>
    </div>
  )

}

export default ProductsByCategory;