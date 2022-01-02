import React from 'react';
import { NavLink } from "react-router-dom";
import cn from "classnames";

import styles from "./Basket.module.css";
import { PreloaderBasket } from "../common/preloader/preloader";
import list_empty from "../../assecs/images/list-is-empty.png";
import qrCode from "../../assecs/images/qr-code.png";

let Basket = React.memo(({ basket, isAuth, popup, orderNumber, buyProduct, buyProductSuccess, followingInProgress }) => {
    return (
        <div>
            {basket.length === 0
                ? <div className={styles.basket__none}>
                    <h1 className={styles.basket__titleNone}>Your bag is empty</h1>
                    <img alt="" src={list_empty} />
                    {!isAuth
                        ? <NavLink to={'/login/signin'} className={styles.basket__signIn}>SIGN IN</NavLink>
                        : <div></div>
                    }
                </div>

                : <div className={styles.basket__page}>
                    <h1 className={styles.basket__title}>MY BAG</h1>
                    <div className={styles.basket}>
                        {
                            basket.map(b =>
                                <div className={styles.basket__product} key={b.id}>
                                    <div className={styles.description}>{b.title}</div>
                                    <NavLink to={'/product/' + b.id} className={styles.link__product}>
                                        <img alt="" src={b.photo} />
                                    </NavLink>
                                    <div className={styles.price__product}>
                                        <span>{b.price} $</span>
                                        <div className={styles.price__productTotal}>
                                            <div> ^{b.summ} = {b.price * b.summ} $</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

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
                </div>
            }
            {popup === true
                ? <div className={cn({ [styles.popup]: popup === true }, styles.active)} onClick={() => buyProductSuccess()}>
                    <div className={styles.popup__body} onClick={e => e.stopPropagation()}>
                        {!orderNumber
                            ? <PreloaderBasket />
                            : <div className={styles.popup__content}>
                                <div>PAID</div>
                                <div>Order number: {orderNumber}</div>
                                <div className={styles.popup__contentDate}>27-11-2021 18:52:30</div>
                                <div>Total products: {basket.reduce((totalProduct, product) => { return totalProduct + 1 * product.summ }, 0)}</div>
                                <div>Order price: {basket.reduce((totalPrice, product) => { return totalPrice + product.price * product.summ }, 0)} $</div>
                                <img alt="" src={qrCode} />
                                <div>Thank you for your purchase!</div>
                                <div>Attention! The product cannot be exchanged or returned.</div>
                            </div>
                        }
                    </div>
                </div>
                : <div></div>
            }
        </div>
    )
})

export default Basket;