import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";

import { buyProduct, buyProductSuccess, setBasket } from "../../redux/basket-reducer";
import { getBasketProduct, getFollowingInProgress, getIsFetching, getOrderNumber, getPopup, getIsAuth } from "../../redux/basket-selectors";
import Basket from './Basket';
import Preloader from '../common/preloader/preloader';

class BasketContainer extends React.Component {

    componentDidMount() {
        this.props.setBasket();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.basket.length === 0) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> :
                    <Basket
                        basket={this.props.basket}
                        popup={this.props.popup}
                        orderNumber={this.props.orderNumber}
                        buyProduct={this.props.buyProduct}
                        buyProductSuccess={this.props.buyProductSuccess}
                        followingInProgress={this.props.followingInProgress}
                        isAuth={this.props.isAuth}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: getBasketProduct(state),
        popup: getPopup(state),
        orderNumber: getOrderNumber(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default BasketContainer = compose(
    connect(mapStateToProps, { buyProduct, buyProductSuccess, setBasket }),
    withRouter
)(BasketContainer);