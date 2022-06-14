import React from 'react'
import { Link } from "react-router-dom"

import styles from "./Content.module.scss"

interface ContentElement{
    id: string
    title: string
    summ: number 
    added: boolean 
    price: number 
    photo: string 
    addProduct: (id: string) => void 
    deleteProduct: (id: string) => void 
    minusProduct: (id: string) => void 
    plusProduct: (id: string) => void 
    followingInProgress: Array<string> //!!!
}

const ContentElement: React.FC<ContentElement> = React.memo(({id, title, summ, added, price, photo, addProduct, deleteProduct, minusProduct, plusProduct, followingInProgress}) => {
    return (
        <div className={styles.element__product}>
            <Link to={`/product/${id}`} className={styles.product__block}>
                <img alt="" src={photo != null ? photo : "https://cdn3.iconfinder.com/data/icons/autumn-season-32/64/Overcoat_clother_clothing_jacket_winter-512.png"} />
                <div className={styles.description}>{title}</div>
            </Link>
            <div className={styles.price}>{price} $</div>
            <div className={styles.buttons}>
                {!added
                    ? <button disabled={followingInProgress.some(Id => Id === id)} onClick={() => { addProduct(id) }}>Add to bag</button>
                    : <div className={styles.button__func}>
                        <button disabled={followingInProgress.some(Id => Id === id)} onClick={() => { minusProduct(id) }}>-</button>
                        <div className={styles.summ}>{summ}</div>
                        <button disabled={followingInProgress.some(Id => Id === id)} onClick={() => { plusProduct(id) }}>+</button>
                        <button disabled={followingInProgress.some(Id => Id === id)} onClick={() => { deleteProduct(id) }}>Delete</button>
                    </div>
                }
            </div>
        </div>
    )
})

export default ContentElement