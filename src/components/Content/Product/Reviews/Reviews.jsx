import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../../common/FormControls/FormControls";
import styles from "../Product.module.css";

let Reviews = React.memo(({reviews, addReviews}) => {
console.log(reviews)
    let rewiersElement = [...reviews].reverse().map(p =>
        <div className={styles.rewiers} key={p.id}>
            <div className={styles.rating}>
                {
                    [...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        const rating = p.rating;
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
            <div key={p.id} className={styles.reviews}> - {p.message}</div>
        </div>);

    let add = (values) => {
        addReviews(values);
    }

    return (
        <div>
            <AddReviewsFromRedux onSubmit={add} />
            <div className={styles.rewiersElement}>
                {rewiersElement}
            </div>

        </div >
    )
})

const maxLength100 = maxLengthCreator(100);

const AddReviewsFrom = (props) => {
    const [rating, setRating] = React.useState(null);
    const [hover, setHover] = React.useState(null);

    return (
        <form onSubmit={props.handleSubmit}> 
            <Field className={styles.Textarea} component={Textarea} placeholder={"Add a review..."}
                name={"NewPostText"} validate={[required, maxLength100]} />
            <div className={styles.rating} >
                {
                    [...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <div className={styles.rating__body} key={i}>
                                <div className={(ratingValue <= (hover || rating)) ? styles.rating__active : styles.rating__activeNot} >
                                    <div className={styles.rating__items}>
                                        <Field component="input"
                                            type="radio"
                                            validate={[required]}
                                            className={styles.rating__item}
                                            value={ratingValue} name="rating"
                                            onClick={() => setRating(ratingValue)}
                                            onMouseOver={() => setHover(ratingValue)}
                                            onMouseOut={() => setHover(null)} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className={styles.button}>Send</button>
        </form>
    )
}

const AddReviewsFromRedux = reduxForm({ form: "ReviewsAddNewPostForm" })(AddReviewsFrom)


export default Reviews;