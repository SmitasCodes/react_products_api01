import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Product from "../Product/Product";
import styles from "./ProductsList.module.css";

const Products = (props) => {
  return (
    <div>
      <ResponsiveMasonry
        columnsCount={3}
        columnsCountBreakPoints={{ 200: 1, 400: 2, 900: 3 }}
      > 
        <Masonry gutter="5px" >
          {props.products.length == 0 && <p className={styles.productsFeedback}>No Products Found</p>}
          {props.products.map((product) => {
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
