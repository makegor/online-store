import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import './App.scss'

import Header from './components/Header/Header'
import Fotter from './components/Fotter/Fotter'
import Preloader from './components/common/preloader/preloader'
import Content from './components/Content/Content'

const Product = React.lazy(() => import('./components/Content/Product/Product'))
const Basket = React.lazy(() => import('./components/Basket/Basket'))
const Login = React.lazy(() => import('./components/Login/Login'))
const ErrorPage = React.lazy(() => import('./components/common/ErrorPage/ErrorPage'))

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="wraper-content">
        <React.Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/">
              <Route index element={<Content />} />
              <Route path=":id" element={<Content />} />
              <Route path="product">
                <Route path=":namber" element={<Product />} />
              </Route>
              <Route path="buy">
                <Route path="bag" element={<Basket />} />
              </Route>
              <Route path="login">
                <Route path="signin" element={<Login />} />
              </Route>
            </Route>
            <Route path="404" element={<ErrorPage />} />
            <Route path='*' element={<Navigate to="404" />} />
          </Routes>
        </React.Suspense>
      </div>
      <Fotter />
    </div >
  )
}

export default App