import React from 'react'
import { ProductType } from '../../../types/types'

import cn from "classnames"
import styles from "../Basket.module.css"
import { PreloaderBasket } from '../../common/preloader/preloader'
import qrCode from "../../../assecs/images/Basket/qr-code.png"

interface BasketPopup{
    basket: Array<ProductType>
    orderNumber: number | null
    popup: boolean
    buyProductSuccess: () => void
}

const BasketPopup: React.FC<BasketPopup> = React.memo(({ basket, orderNumber, popup, buyProductSuccess }) => {

    const addLeadingZero = (d: number) => {
        return (d < 10) ? '0' + d : d
    }

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const getTime = (t = new Date()) => {
        const YYYY = t.getFullYear()
        const MM = addLeadingZero(t.getMonth())
        const DD = addLeadingZero(t.getDate())
        const dd = days[t.getDay()]
        const hh = addLeadingZero(t.getHours())
        const mm = addLeadingZero(t.getMinutes())
        const ss = addLeadingZero(t.getSeconds())
        return `${dd} ${DD}-${MM}-${YYYY} ${hh}:${mm}:${ss}`
    } 

    return (
        <div className={cn({ [styles.popup]: popup === true }, styles.active)} onClick={() => buyProductSuccess()}>
            <div className={styles.popup__body} onClick={e => e.stopPropagation()}>
                {!orderNumber
                    ? <PreloaderBasket />
                    : <div className={styles.popup__content}>
                        <div>PAID</div>
                        <div>Order number: {orderNumber}</div>
                        <div className={styles.popup__contentDate}>{getTime()}</div>
                        <div>Total products: {basket.reduce((totalProduct, product) => { return totalProduct + 1 * product.summ }, 0)}</div>
                        <div>Order price: {basket.reduce((totalPrice, product) => { return totalPrice + product.price * product.summ }, 0)} $</div>
                        <img alt="" src={qrCode} />
                        <div>Thank you for your purchase!</div>
                        <div>Attention! The product cannot be exchanged or returned.</div>
                    </div>
                }
            </div>
        </div>
    )
})

export default BasketPopup