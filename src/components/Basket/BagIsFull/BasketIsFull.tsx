import React from 'react'
import BasketElement from './BasketElement'
import BasketPopup from './BasketPopup'
import BasketTotal from './BasketTotal'
import { ProductType } from '../../../types/types'

import styles from "../Basket.module.scss"

interface BasketIsFull{
    basket: Array<ProductType>
    popup: boolean
    followingInProgress: boolean
    orderNumber: number | null
    buyProduct: (basket: Array<ProductType>) => void
    buyProductSuccess: () => void
}

const BasketIsFull: React.FC<BasketIsFull> = React.memo(({ basket, popup, followingInProgress, orderNumber, buyProduct, buyProductSuccess }) => {

    return (
        <div>
            <div className={styles.basket__page}>
                <h1 className={styles.basket__title}>MY BAG</h1>
                <div className={styles.basket}>
                    {basket.map(b =>
                        <BasketElement key={b.id}
                            id={b.id}
                            title={b.title}
                            photo={b.photo}
                            price={b.price}
                            summ={b.summ}
                        />
                    )
                    }
                    <BasketTotal basket={basket}
                        followingInProgress={followingInProgress}
                        buyProduct={buyProduct}
                        buyProductSuccess={buyProductSuccess} />
                </div>
            </div>
            {popup === true
                ? <BasketPopup
                    basket={basket}
                    orderNumber={orderNumber}
                    popup={popup}
                    buyProductSuccess={buyProductSuccess}
                />
                : <div></div>
            }
        </div>
    )
})

export default BasketIsFull