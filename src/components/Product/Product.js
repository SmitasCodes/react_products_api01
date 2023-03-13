import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <li className={styles.productLi}>
      <h2>{props.title}</h2>
      <h4>Description: {props.description}</h4>
      <h4>Category: {props.category}</h4>
      <h4>Brand: {props.brand}</h4>
      <img src={props.image} className={styles.productLi__img} />
      <h4>Price: {props.price}</h4>
    </li>
  );
};

export default Product;
