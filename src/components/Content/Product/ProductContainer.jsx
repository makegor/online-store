import React from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";

import { setProduct } from "../../../redux/product-reducer";
import { getIsFetching, getProduct } from "../../../redux/product-selectors";

import Preloader from "../../common/preloader/preloader";
import ProductPage from "./ProductPage";

class ProductContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.namber;
        this.props.setProduct(id);
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> :
                    <ProductPage {...this.props} product={this.props.product} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: getProduct(state),
        isFetching: getIsFetching(state)
    }
}

export default ProductContainer = compose(
    connect(mapStateToProps, { setProduct }),
    withRouter
)(ProductContainer);