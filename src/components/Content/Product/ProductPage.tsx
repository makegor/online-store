import React from "react"
import { ProductType, DescriptionType } from "../../../types/types"
import Reviews from "./Reviews/Reviews"

import styles from "./Product.module.css"

const ProductPage: React.FC<ProductType> = React.memo(({title, price, description, photo}) => {
    return (
        <div className={styles.product__full}>
            <div className={styles.product__fullPhoto}>
                <img alt="" src={photo != null ? photo : "https://cdn3.iconfinder.com/data/icons/autumn-season-32/64/Overcoat_clother_clothing_jacket_winter-512.png"} />
            </div>

            <div className={styles.items}>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}>{price} $</div>
                <div className={styles.description}>
                    {Object.keys(description).map(key => {
                        return <Description key={key} descriptionTitle={key} descriptiontValue={description[key as keyof DescriptionType]} />
                    })}
                </div>
            </div>

            <Reviews />

        </div>
    )
})

interface Description {
    descriptionTitle: string
    descriptiontValue: string
}

const Description: React.FC<Description> = React.memo(({ descriptionTitle, descriptiontValue }) => {
    return <div className={styles.description}><b>{descriptionTitle}</b>: {descriptiontValue}</div>
})

export default ProductPage