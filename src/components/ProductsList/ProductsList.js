import React,{useState,useEffect} from "react";
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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ResponsiveMasonry
        columnsCount={3}
        columnsCountBreakPoints={{ 200: 1, 400: 2, 900: 3 }}
      > 
        <Masonry gutter="5px" >
          
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
           {props.products.length === 0 && (
            <p className={styles.productsFeedback}>No Products Found</p>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Products;
