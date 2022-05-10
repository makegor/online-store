import React from 'react'
import { ProductType } from '../../../types/types'

import styles from "../Basket.module.css"

interface BasketTotal{
    basket: Array<ProductType>
    followingInProgress: boolean
    buyProduct: (basket: Array<ProductType>) => void
    buyProductSuccess: () => void
}

const BasketTotal: React.FC<BasketTotal> = React.memo(({ basket, followingInProgress, buyProduct, buyProductSuccess }) => {

    return (
        <div className={styles.basket__total}>
            <button disabled={followingInProgress} onClick={(e) => buyProductSuccess()}>Empty trash</button>
            <div className={styles.textTotal}>
                Order price:
                <div className={styles.price__total}>
                    {basket.reduce((totalPrice, product) => { return totalPrice + product.price * product.summ }, 0)} $
                </div>
                <div>Total products:</div>
                <div className={styles.price__total}>
                    {basket.reduce((totalProduct, product) => { return totalProduct + 1 * product.summ }, 0)}
                </div>
            </div>
            <button disabled={followingInProgress} onClick={(e) => { buyProduct(basket) }}>BUY</button>
        </div>
    )
})

export default BasketTotal