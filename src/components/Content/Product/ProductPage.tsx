import React from "react"
import { ProductType, DescriptionType } from "../../../types/types"
import Reviews from "./Reviews/Reviews"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, deleteProduct, plusProduct, minusProduct } from "../../../redux/content-reducer"
import { getFollowingInProgress } from "../../../redux/content-selectors"

import styles from "./Product.module.scss"

const ProductPage: React.FC<ProductType> = React.memo(({ title, price, description, photo, summ, added, id }) => {

    const dispatch = useDispatch()
    const followingInProgress = useSelector(getFollowingInProgress)
    
    return (
        <div className={styles.product__full}>
            <div className={styles.product__fullPhoto}>
                <img alt="" src={photo != null ? photo : "https://cdn3.iconfinder.com/data/icons/autumn-season-32/64/Overcoat_clother_clothing_jacket_winter-512.png"} />
            </div>
            <div className={styles.product__info}>
                <div className={styles.items}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.price}>{price} $</div>
                    <div className={styles.description}>
                        {Object.keys(description).map(key => {
                            return <Description key={key} descriptionTitle={key} descriptiontValue={description[key as keyof DescriptionType]} />
                        })}
                    </div>
                </div>
                <div className={styles.btn}>
                    {!added
                        ? <button disabled={followingInProgress.some(Id => Id === id)} onClick={() => { dispatch(addProduct(id)) }}>Add to bag</button>
                        : <div className={styles.button__func}>
                            <button disabled={followingInProgress.some(Id => Id === id)} onClick={() => { dispatch(minusProduct(id)) }}>-</button>
                            <div className={styles.summ}>{summ}</div>
                            <button disabled={followingInProgress.some(Id => Id === id)} onClick={() => { dispatch(plusProduct(id)) }}>+</button>
                            <button disabled={followingInProgress.some(Id => Id === id)} onClick={() => { dispatch(deleteProduct(id)) }}>Delete</button>
                        </div>
                    }
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