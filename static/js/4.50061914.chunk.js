(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[4],{212:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(12),a=c(30),i=c(18),o=function(e){return e.Basket},u=Object(i.a)(o,(function(e){return e.basket.filter((function(e){return e.summ>0}))})),_=Object(i.a)(o,(function(e){return e.isFetching})),d=Object(i.a)(o,(function(e){return e.followingInProgress})),b=Object(i.a)(o,(function(e){return e.popup})),j=Object(i.a)(o,(function(e){return e.orderNumber})),l=Object(i.a)(o,(function(e){return e.isAuth})),p=c(23),O=c(8),k=c(54),m=c.n(k),h=c.p+"static/media/list-is-empty.64ba2de0.png",x=c(0),f=n.a.memo((function(e){var t=e.isAuth;return Object(x.jsxs)("div",{className:m.a.basket__none,children:[Object(x.jsx)("h1",{className:m.a.basket__titleNone,children:"Your bag is empty"}),Object(x.jsx)("img",{alt:"",src:h}),t?Object(x.jsx)("div",{}):Object(x.jsx)(O.b,{to:"/login/signin",className:m.a.basket__signIn,children:"SIGN IN"})]})})),v=n.a.memo((function(e){var t=e.id,c=e.title,s=e.photo,n=e.price,r=e.summ;return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:m.a.basket__product,children:[Object(x.jsx)("div",{className:m.a.description,children:c}),Object(x.jsx)(O.b,{to:"/product/"+t,className:m.a.link__product,children:Object(x.jsx)("img",{alt:"",src:s})}),Object(x.jsxs)("div",{className:m.a.price__product,children:[Object(x.jsxs)("span",{children:[n," $"]}),Object(x.jsx)("div",{className:m.a.price__productTotal,children:Object(x.jsxs)("div",{children:[" ^",r," = ",n*r," $"]})})]})]})})})),g=c(16),N=c(21),B=c.n(N),y=c.p+"static/media/qr-code.e042934f.png",P=n.a.memo((function(e){var t=e.basket,c=e.orderNumber,s=e.popup,n=e.buyProductSuccess,r=function(e){return e<10?"0"+e:e},a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return Object(x.jsx)("div",{className:B()(Object(g.a)({},m.a.popup,!0===s),m.a.active),onClick:function(){return n()},children:Object(x.jsx)("div",{className:m.a.popup__body,onClick:function(e){return e.stopPropagation()},children:c?Object(x.jsxs)("div",{className:m.a.popup__content,children:[Object(x.jsx)("div",{children:"PAID"}),Object(x.jsxs)("div",{children:["Order number: ",c]}),Object(x.jsx)("div",{className:m.a.popup__contentDate,children:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear(),c=r(e.getMonth()),s=r(e.getDate()),n=a[e.getDay()],i=r(e.getHours()),o=r(e.getMinutes()),u=r(e.getSeconds());return"".concat(n," ").concat(s,"-").concat(c,"-").concat(t," ").concat(i,":").concat(o,":").concat(u)}()}),Object(x.jsxs)("div",{children:["Total products: ",t.reduce((function(e,t){return e+1*t.summ}),0)]}),Object(x.jsxs)("div",{children:["Order price: ",t.reduce((function(e,t){return e+t.price*t.summ}),0)," $"]}),Object(x.jsx)("img",{alt:"",src:y}),Object(x.jsx)("div",{children:"Thank you for your purchase!"}),Object(x.jsx)("div",{children:"Attention! The product cannot be exchanged or returned."})]}):Object(x.jsx)(p.a,{})})})})),w=P,T=n.a.memo((function(e){var t=e.basket,c=e.followingInProgress,s=e.buyProduct,n=e.buyProductSuccess;return Object(x.jsxs)("div",{className:m.a.basket__total,children:[Object(x.jsx)("button",{disabled:c,onClick:function(e){return n()},children:"Empty trash"}),Object(x.jsxs)("div",{className:m.a.textTotal,children:["Order price:",Object(x.jsxs)("div",{className:m.a.price__total,children:[t.reduce((function(e,t){return e+t.price*t.summ}),0)," $"]}),Object(x.jsx)("div",{children:"Total products:"}),Object(x.jsx)("div",{className:m.a.price__total,children:t.reduce((function(e,t){return e+1*t.summ}),0)})]}),Object(x.jsx)("button",{disabled:c,onClick:function(e){s(t)},children:"BUY"})]})})),S=n.a.memo((function(e){var t=e.basket,c=e.popup,s=e.followingInProgress,n=e.orderNumber,r=e.buyProduct,a=e.buyProductSuccess;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:m.a.basket__page,children:[Object(x.jsx)("h1",{className:m.a.basket__title,children:"MY BAG"}),Object(x.jsxs)("div",{className:m.a.basket,children:[t.map((function(e){return Object(x.jsx)(v,{id:e.id,title:e.title,photo:e.photo,price:e.price,summ:e.summ},e.id)})),Object(x.jsx)(T,{basket:t,followingInProgress:s,buyProduct:r,buyProductSuccess:a})]})]}),!0===c?Object(x.jsx)(w,{basket:t,orderNumber:n,popup:c,buyProductSuccess:a}):Object(x.jsx)("div",{})]})}));t.default=function(){var e=Object(r.c)(u),t=Object(r.c)(b),c=Object(r.c)(j),n=Object(r.c)(_),i=Object(r.c)(d),o=Object(r.c)(l),O=Object(r.b)();return Object(s.useEffect)((function(){O(Object(a.d)()),window.scrollTo(0,0)}),[e.length]),Object(x.jsx)("div",{children:n?Object(x.jsx)(p.c,{}):Object(x.jsx)("div",{children:0===e.length?Object(x.jsx)(f,{isAuth:o}):Object(x.jsx)(S,{basket:e,popup:t,orderNumber:c,followingInProgress:i,buyProduct:function(e){return O(Object(a.a)(e))},buyProductSuccess:function(){return O(Object(a.b)())}})})})}},54:function(e,t,c){e.exports={basket__none:"Basket_basket__none__1xwdS",basket__titleNone:"Basket_basket__titleNone__3ukhA",basket__signIn:"Basket_basket__signIn__2Wi-2",basket__page:"Basket_basket__page__1jOJ9",basket__title:"Basket_basket__title__3q6pj",basket__total:"Basket_basket__total__CKJ2R",textTotal:"Basket_textTotal__VwjL1",price__total:"Basket_price__total__27lwQ",basket:"Basket_basket__35jF8",basket__product:"Basket_basket__product__38Zkc",description:"Basket_description__3l7Se",link__product:"Basket_link__product__aUgGw",price__product:"Basket_price__product__2A3KH",price__productTotal:"Basket_price__productTotal__3RgPu",popup:"Basket_popup__1Oqds",active:"Basket_active__bhJzG",popup__body:"Basket_popup__body__3Xfeq",popup__content:"Basket_popup__content__GLKWg",popup__contentDate:"Basket_popup__contentDate__6zfN5"}}}]);
//# sourceMappingURL=4.50061914.chunk.js.map