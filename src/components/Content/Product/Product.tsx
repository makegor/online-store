import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { setProduct } from "../../../redux/product-reducer"
import { getIsFetching, getProduct } from "../../../redux/product-selectors"
import ProductPage from "./ProductPage"
import Preloader from "../../common/preloader/preloader"

const Product = () => {

    const isFetching = useSelector(getIsFetching)
    const product = useSelector(getProduct)

    const dispatch = useDispatch()

    const id = useParams().namber

    useEffect(() => {
        dispatch(setProduct(id))
        window.scrollTo(0, 0)
    }, [product.id])

    return (
        <div>
            {isFetching ? <Preloader />
                : < ProductPage
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    photo={product.photo}

                    id={product.id}
                    sex={product.sex}
                    summ={product.summ}
                    added={product.added}
                />
            }
        </div>
    )
}

export default Product