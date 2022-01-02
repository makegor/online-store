import React from 'react';

import { NavLink } from "react-router-dom";
import styles from "./Content.module.css"


let ContentElement = React.memo(({id, title, summ, followed, price, description, photo, addProduct, deleteProduct, minusProduct, plusProduct, followingInProgress}) => {
    return (
        <div className={styles.element__product}>
            <NavLink to={`/product/${id}`} className={styles.product__block}>
                <img alt="" src={photo != null ? photo : "https://cdn3.iconfinder.com/data/icons/autumn-season-32/64/Overcoat_clother_clothing_jacket_winter-512.png"} />
                <div className={styles.description}>{title}</div>
            </NavLink>
            <div className={styles.price}>{price} $</div>
            <div className={styles.buttons}>
                {!followed
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
});

export default ContentElement;