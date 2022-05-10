import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { buyProduct, buyProductSuccess, setBasket } from "../../redux/basket-reducer"
import { getBasketProduct, getFollowingInProgress, getIsFetching, getOrderNumber, getPopup, getIsAuth } from "../../redux/basket-selectors"
import Preloader from '../common/preloader/preloader'
import BasketIsEmpty from './BagIsEmpty/BasketIsEmpty'
import BasketIsFull from './BagIsFull/BasketIsFull'

const Basket = () => {

    const basket = useSelector(getBasketProduct)
    const popup = useSelector(getPopup)
    const orderNumber = useSelector(getOrderNumber)
    const isFetching = useSelector(getIsFetching)
    const followingInProgress = useSelector(getFollowingInProgress)
    const isAuth = useSelector(getIsAuth)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setBasket())
        window.scrollTo(0, 0)
    }, [basket.length])

    return (
        <div>
            {isFetching ? <Preloader /> :
                <div>
                    {basket.length === 0
                        ? <BasketIsEmpty isAuth={isAuth} />
                        : <BasketIsFull
                            basket={basket}
                            popup={popup}
                            orderNumber={orderNumber}
                            followingInProgress={followingInProgress}
                            buyProduct={(basketPaid) => dispatch(buyProduct(basketPaid))}
                            buyProductSuccess={() => dispatch(buyProductSuccess())}
                        />
                    }
                </div>
            }
        </div>
    )
}

export default Basket