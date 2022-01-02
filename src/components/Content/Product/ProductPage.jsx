import React from "react";
import styles from "./Product.module.css";
import ReviewsContainer from "./Reviews/ReviewsContainer";

let ProductPage = React.memo(({product}) => {
    return (
        <div className={styles.product__full}>
            <div className={styles.product__fullPhoto}>
                <img alt="" src={product.photo != null ? product.photo : null} />
            </div>

            <div className={styles.items}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>{product.price} $</div>
                <div className={styles.description}>
                    {Object.keys(product.description).map(key => {
                        return <Description key={key} descriptionTitle={key} descriptiontValue={product.description[key]} />
                    })}
                </div>
            </div>

            <ReviewsContainer />

        </div>
    )
})

const Description = ({ descriptionTitle, descriptiontValue }) => {
    return <div className={styles.description}><b>{descriptionTitle}</b>: {descriptiontValue}</div>
}

export default ProductPage;