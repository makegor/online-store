import React from 'react'
import { ReviewsType } from "../../../../types/types"
import { addReviews } from "../../../../redux/product-reducer"
import { getReviews } from "../../../../redux/product-selectors"
import { useDispatch, useSelector } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'

import styles from "../Product.module.scss"

const Reviews = () => {

    const reviews = useSelector(getReviews)
    const dispatch = useDispatch()

    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset
    } = useForm<ReviewsType>({
        mode: "all"
    })

    const onSubmit: SubmitHandler<ReviewsType> = (data) => {
        dispatch(addReviews(data))
        reset()
        setRating(0)
    }

    const rewiersElement = [...reviews].reverse().map(p =>
        <div className={styles.rewiers} key={p.id}>
            <div className={styles.rating}>
                {
                    [...Array(5)].map((star, i) => {
                        const ratingValue = i + 1
                        const rating = p.rating
                        return (
                            <div className={styles.rating__body} key={i}>
                                <div className={(ratingValue <= rating) ? styles.rating__active : styles.rating__activeNot} >
                                    <div className={styles.rating__items}>
                                        <input type="radio"
                                            className={styles.rating__item}
                                            value={ratingValue} name="rating" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p key={p.id}>{p.review}</p>
        </div>)

    const [rating, setRating] = React.useState<number>(0)
    const [hover, setHover] = React.useState<number>(0)

    return (
        <div className={styles.Rewiers}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    className={styles.Textarea}
                    placeholder="just do it"
                    {...register('review', {
                        required: "Required field",
                        minLength: {
                            value: 15,
                            message: "And it's all? Minimum 15"
                        },
                        maxLength: {
                            value: 250,
                            message: "Take it easy. Maximum 250"
                        }
                    })}
                />
                {errors?.review && <div className={styles.message__error}>{errors?.review?.message || "Error!"}</div>}
                <div className={styles.rating} >
                    {
                        [...Array(5)].map((star, i) => {
                            const ratingValue = i + 1
                            return (
                                <div className={styles.rating__body} key={i}>
                                    <div className={(ratingValue <= (hover || rating)) ? styles.rating__active : styles.rating__activeNot} >
                                        <div className={styles.rating__items}>
                                            <input
                                                type="radio"
                                                className={styles.rating__item}
                                                value={ratingValue}
                                                onClick={() => setRating(ratingValue)}
                                                onMouseOver={() => setHover(ratingValue)}
                                                onMouseOut={() => setHover(0)}
                                                {...register('rating', {
                                                    required: "Required field",
                                                    min: {
                                                        value: 1,
                                                        message: "Минимум 1 символов"
                                                    }
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {errors?.rating?.message && <div className={styles.message__error}>{errors?.rating?.message || "Required field !"}</div>}
                <button className={styles.button} disabled={!isValid}>Send review ⇓</button>
            </form>
            <div className={styles.rewiersElement}>
                {rewiersElement}
            </div>
        </div>
    )
}

export default Reviews