import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <li className={styles.productLi}>
      <h2 className={styles.productLi__title}>{props.title}</h2>
      <h4><span className={styles.productLi__prop}>Description:</span> {props.description}</h4>
      <h4><span className={styles.productLi__prop}>Category:</span> {props.category}</h4>
      <h4><span className={styles.productLi__prop}>Brand:</span> {props.brand}</h4>
      <img src={props.image} className={styles.productLi__img} />
      <h4><span className={styles.productLi__prop}>Price:</span> {props.price}&euro;</h4>
    </li>
  );
};

export default Product;
