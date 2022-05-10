import React from 'react'
import { Link } from "react-router-dom"

import styles from "../Basket.module.css"

interface BasketElement{
    id: string
    title: string
    photo: string
    price: number
    summ: number
}

let BasketElement: React.FC<BasketElement> = React.memo(({id, title, photo, price, summ}) => {

    return (
        <div>
            <div className={styles.basket__product}>
                <div className={styles.description}>{title}</div>
                <Link to={'/product/' + id} className={styles.link__product}>
                    <img alt="" src={photo} />
                </Link>
                <div className={styles.price__product}>
                    <span>{price} $</span>
                    <div className={styles.price__productTotal}>
                        <div> ^{summ} = {price * summ} $</div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default BasketElement