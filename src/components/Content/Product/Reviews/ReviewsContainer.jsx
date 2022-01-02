import { connect } from "react-redux";

import { addReviews } from "../../../../redux/product-reducer";
import { getReviews } from "../../../../redux/product-selectors";

import Reviews from './Reviews';

const mapStateToProps = (state) => {
    return {
        reviews: getReviews(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addReviews : (values) => {
            dispatch(addReviews(values));
        }
    }
}

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;