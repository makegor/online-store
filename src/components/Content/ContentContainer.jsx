import React from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";

import { setContentThunk, addProduct, deleteProduct, plusProduct, minusProduct } from "../../redux/content-reducer";
import { getContent, getIsFetching, getFollowingInProgress, getPageSize, getTotalCount, getCurrentPage } from "../../redux/content-selectors";

import Preloader from "../common/preloader/preloader";
import Paginator from '../common/Paginator/Paginator';
import Content from "./Content";

class ContentContainer extends React.Component {

    refreshContent(currentPage = this.props.currentPage) {
        const { pageSize } = this.props;
        const sexId = this.props.match.params.id;
        this.props.setContentThunk(sexId, currentPage, pageSize);
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.refreshContent();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            const currentPage = 1;
            this.refreshContent(currentPage);
        }
        if (prevProps.isFetching !== this.props.isFetching) {
            window.scrollTo(0, 0);
        }
    }

    onPageChanged = (currentPage) => {
        this.refreshContent(currentPage);
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> :
                    <Content content={this.props.content}
                        addProduct={this.props.addProduct}
                        deleteProduct={this.props.deleteProduct}
                        minusProduct={this.props.minusProduct}
                        plusProduct={this.props.plusProduct}
                        followingInProgress={this.props.followingInProgress}
                    />
                }
                <Paginator currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} totalCount={this.props.totalCount} pageSize={this.props.pageSize} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        content: getContent(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
    }
}

export default ContentContainer = compose(
    connect(mapStateToProps, { setContentThunk, addProduct, deleteProduct, plusProduct, minusProduct }),
    withRouter
)(ContentContainer);