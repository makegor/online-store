(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[4],{214:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(12),a=c(29),o=c(22),i=function(e){return e.Basket},u=Object(o.a)(i,(function(e){return e.basket.filter((function(e){return e.summ>0}))})),_=Object(o.a)(i,(function(e){return e.isFetching})),b=Object(o.a)(i,(function(e){return e.followingInProgress})),d=Object(o.a)(i,(function(e){return e.popup})),l=Object(o.a)(i,(function(e){return e.orderNumber})),j=Object(o.a)(i,(function(e){return e.isAuth})),p=c(27),O=c(8),m=c(56),h=c.n(m),k=c.p+"static/media/list-is-empty.64ba2de0.png",x=c(0),f=n.a.memo((function(e){var t=e.isAuth;return Object(x.jsxs)("div",{className:h.a.basket__none,children:[Object(x.jsx)("h1",{className:h.a.basket__titleNone,children:"Your bag is empty"}),Object(x.jsx)("img",{alt:"",src:k}),t?Object(x.jsx)("div",{}):Object(x.jsx)(O.b,{to:"/login/signin",className:h.a.basket__signIn,children:"SIGN IN"})]})})),v=c(14),g=c(15),N=n.a.memo((function(e){var t=e.id,c=e.title,s=e.photo,n=e.price,a=e.summ,o=Object(r.b)(),i=Object(r.c)(g.c);return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:h.a.basket__product,children:[Object(x.jsx)("div",{className:h.a.description,children:Object(x.jsx)(O.b,{to:"/product/"+t,children:c})}),Object(x.jsx)("div",{className:h.a.photo__product,children:Object(x.jsx)("img",{alt:"",src:s})}),Object(x.jsx)("button",{className:h.a.btn__deleteProduct,disabled:i.some((function(e){return e===t})),onClick:function(){o(Object(v.c)(t))},children:"Delete \u2297"}),Object(x.jsxs)("div",{className:h.a.price__product,children:[Object(x.jsxs)("span",{children:[a,"^ ",n," $"]}),Object(x.jsx)("div",{className:h.a.price__productTotal,children:Object(x.jsxs)("div",{children:[n*a," $"]})})]})]})})})),B=c(17),y=c(24),P=c.n(y),T=c.p+"static/media/qr-code.e042934f.png",S=n.a.memo((function(e){var t=e.basket,c=e.orderNumber,s=e.popup,n=e.buyProductSuccess,r=function(e){return e<10?"0"+e:e},a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return Object(x.jsx)("div",{className:P()(Object(B.a)({},h.a.popup,!0===s),h.a.active),onClick:function(){return n()},children:Object(x.jsx)("div",{className:h.a.popup__body,onClick:function(e){return e.stopPropagation()},children:c?Object(x.jsxs)("div",{className:h.a.popup__content,children:[Object(x.jsx)("div",{children:"PAID"}),Object(x.jsxs)("div",{children:["Order number: ",c]}),Object(x.jsx)("div",{className:h.a.popup__contentDate,children:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear(),c=r(e.getMonth()),s=r(e.getDate()),n=a[e.getDay()],o=r(e.getHours()),i=r(e.getMinutes()),u=r(e.getSeconds());return"".concat(n," ").concat(s,"-").concat(c,"-").concat(t," ").concat(o,":").concat(i,":").concat(u)}()}),Object(x.jsxs)("div",{children:["Total products: ",t.reduce((function(e,t){return e+1*t.summ}),0)]}),Object(x.jsxs)("div",{children:["Order price: ",t.reduce((function(e,t){return e+t.price*t.summ}),0)," $"]}),Object(x.jsx)("img",{alt:"",src:T}),Object(x.jsx)("div",{children:"Thank you for your purchase!"}),Object(x.jsx)("div",{children:"Attention! The product cannot be exchanged or returned."})]}):Object(x.jsx)(p.a,{})})})})),I=S,w=n.a.memo((function(e){var t=e.basket,c=e.followingInProgress,s=e.buyProduct,n=e.buyProductSuccess;return Object(x.jsxs)("div",{className:h.a.basket__total,children:[Object(x.jsx)("button",{disabled:c,onClick:function(e){return n()},children:"Empty trash"}),Object(x.jsxs)("div",{className:h.a.textTotal,children:["Order price:",Object(x.jsxs)("div",{className:h.a.price__total,children:[t.reduce((function(e,t){return e+t.price*t.summ}),0)," $"]}),Object(x.jsx)("div",{children:"Total products:"}),Object(x.jsx)("div",{className:h.a.price__total,children:t.reduce((function(e,t){return e+1*t.summ}),0)})]}),Object(x.jsx)("button",{disabled:c,onClick:function(e){s(t)},children:"BUY"})]})})),D=n.a.memo((function(e){var t=e.basket,c=e.popup,s=e.followingInProgress,n=e.orderNumber,r=e.buyProduct,a=e.buyProductSuccess;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:h.a.basket__page,children:[Object(x.jsx)("h1",{className:h.a.basket__title,children:"MY BAG"}),Object(x.jsxs)("div",{className:h.a.basket,children:[t.map((function(e){return Object(x.jsx)(N,{id:e.id,title:e.title,photo:e.photo,price:e.price,summ:e.summ},e.id)})),Object(x.jsx)(w,{basket:t,followingInProgress:s,buyProduct:r,buyProductSuccess:a})]})]}),!0===c?Object(x.jsx)(I,{basket:t,orderNumber:n,popup:c,buyProductSuccess:a}):Object(x.jsx)("div",{})]})}));t.default=function(){var e=Object(r.c)(u),t=Object(r.c)(d),c=Object(r.c)(l),n=Object(r.c)(_),o=Object(r.c)(b),i=Object(r.c)(j),O=Object(r.b)();return Object(s.useEffect)((function(){O(Object(a.e)()),window.scrollTo(0,0)}),[e.length]),Object(x.jsx)("div",{children:n?Object(x.jsx)(p.c,{}):Object(x.jsx)("div",{children:0===e.length?Object(x.jsx)(f,{isAuth:i}):Object(x.jsx)(D,{basket:e,popup:t,orderNumber:c,followingInProgress:o,buyProduct:function(e){return O(Object(a.b)(e))},buyProductSuccess:function(){return O(Object(a.c)())}})})})}},56:function(e,t,c){e.exports={basket__none:"Basket_basket__none__2_WqU",basket__titleNone:"Basket_basket__titleNone__2RHk0",basket__signIn:"Basket_basket__signIn__1S3LR",basket__page:"Basket_basket__page__1DuzX",basket__title:"Basket_basket__title__Fr1Uf",basket:"Basket_basket__25RdF",basket__product:"Basket_basket__product__3ZWaF",description:"Basket_description__nAt9v",photo__product:"Basket_photo__product__1tByg",btn__deleteProduct:"Basket_btn__deleteProduct__1c7iB",price__product:"Basket_price__product__3QhMf",price__productTotal:"Basket_price__productTotal__2oqZZ",basket__total:"Basket_basket__total__3XKSO",textTotal:"Basket_textTotal__PTmOE",price__total:"Basket_price__total__2QzHo",popup:"Basket_popup__2CqTn",active:"Basket_active__1sO9T",popup__body:"Basket_popup__body__2y5Ck",popup__content:"Basket_popup__content__1GcMf",popup__contentDate:"Basket_popup__contentDate__3CW2m"}}}]);
//# sourceMappingURL=4.67cde3ba.chunk.js.map