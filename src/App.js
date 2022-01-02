import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from "redux";

import './App.css';

import Header from './components/Header/Header';
import Fotter from './components/Fotter/Fotter';
import ContentContainer from './components/Content/ContentContainer';
import Preloader from './components/common/preloader/preloader';

const ProductContainer = React.lazy(() => import('./components/Content/Product/ProductContainer'));
const BasketContainer = React.lazy(() => import('./components/Basket/BasketContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {

  render() {

    return (
      <div className="app-wrapper">
        <Header />
        <div className="wraper-content">
          <Switch>
            <Route exact path="/:id?" render={() => <ContentContainer />} />
            <React.Suspense fallback={<Preloader />}>
              <Route path="/product/:namber" render={() => <ProductContainer />} />
              <Route path="/buy/bag" render={() => <BasketContainer />} />
              <Route path="/login/signin" render={() => <Login />} />
            </React.Suspense>
            {/*<Route path='*' exact={true} render={() => <div>404</div>} />*/}
          </Switch>
        </div>
        <Fotter />
      </div >
    );
  }

}

export default compose(
  withRouter,
  connect(null, null))(App);
