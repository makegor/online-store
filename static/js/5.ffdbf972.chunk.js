(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[5],{213:function(e,t,i){"use strict";i.r(t);var r=i(1),c=i.n(r),a=i(3),n=i(12),s=i(29),d=i(18),o=function(e){return e.Product},_=Object(d.a)(o,(function(e){return e.product})),l=Object(d.a)(o,(function(e){return e.isFetching})),u=Object(d.a)(o,(function(e){return e.reviews})),j=i(2),m=i(11),b=i(15),v=i(210),O=i(75),g=i.n(O),p=i(0),x=function(){var e,t,i,r=Object(n.c)(u),a=Object(n.b)(),d=Object(v.a)({mode:"all"}),o=d.register,_=d.formState,l=_.errors,O=_.isValid,x=d.handleSubmit,h=d.reset,f=Object(b.a)(r).reverse().map((function(e){return Object(p.jsxs)("div",{className:g.a.rewiers,children:[Object(p.jsx)("div",{className:g.a.rating,children:Object(b.a)(Array(5)).map((function(t,i){var r=i+1,c=e.rating;return Object(p.jsx)("div",{className:g.a.rating__body,children:Object(p.jsx)("div",{className:r<=c?g.a.rating__active:g.a.rating__activeNot,children:Object(p.jsx)("div",{className:g.a.rating__items,children:Object(p.jsx)("input",{type:"radio",className:g.a.rating__item,value:r,name:"rating"})})})},i)}))}),Object(p.jsx)("p",{children:e.review},e.id)]},e.id)})),N=c.a.useState(0),P=Object(m.a)(N,2),w=P[0],y=P[1],E=c.a.useState(0),M=Object(m.a)(E,2),S=M[0],T=M[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{onSubmit:x((function(e){a(Object(s.a)(e)),h(),y(0)})),children:[Object(p.jsx)("textarea",Object(j.a)({className:g.a.Textarea,placeholder:"New reviews..."},o("review",{required:"Required field",minLength:{value:5,message:"Minimum 5"},maxLength:{value:150,message:"Maximum 150"}}))),(null===l||void 0===l?void 0:l.review)&&Object(p.jsx)("div",{className:g.a.message__error,children:(null===l||void 0===l||null===(e=l.review)||void 0===e?void 0:e.message)||"Error!"}),Object(p.jsx)("div",{className:g.a.rating,children:Object(b.a)(Array(5)).map((function(e,t){var i=t+1;return Object(p.jsx)("div",{className:g.a.rating__body,children:Object(p.jsx)("div",{className:i<=(S||w)?g.a.rating__active:g.a.rating__activeNot,children:Object(p.jsx)("div",{className:g.a.rating__items,children:Object(p.jsx)("input",Object(j.a)({type:"radio",className:g.a.rating__item,value:i,onClick:function(){return y(i)},onMouseOver:function(){return T(i)},onMouseOut:function(){return T(0)}},o("rating",{required:"Required field",min:{value:1,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 1 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})))})})},t)}))}),(null===l||void 0===l||null===(t=l.rating)||void 0===t?void 0:t.message)&&Object(p.jsx)("div",{className:g.a.message__error,children:(null===l||void 0===l||null===(i=l.rating)||void 0===i?void 0:i.message)||"Required field !"}),Object(p.jsx)("button",{className:g.a.button,disabled:!O,children:"Send"})]}),Object(p.jsx)("div",{className:g.a.rewiersElement,children:f})]})},h=c.a.memo((function(e){var t=e.title,i=e.price,r=e.description,c=e.photo;return Object(p.jsxs)("div",{className:g.a.product__full,children:[Object(p.jsx)("div",{className:g.a.product__fullPhoto,children:Object(p.jsx)("img",{alt:"",src:null!=c?c:"https://cdn3.iconfinder.com/data/icons/autumn-season-32/64/Overcoat_clother_clothing_jacket_winter-512.png"})}),Object(p.jsxs)("div",{className:g.a.items,children:[Object(p.jsx)("div",{className:g.a.title,children:t}),Object(p.jsxs)("div",{className:g.a.price,children:[i," $"]}),Object(p.jsx)("div",{className:g.a.description,children:Object.keys(r).map((function(e){return Object(p.jsx)(f,{descriptionTitle:e,descriptiontValue:r[e]},e)}))})]}),Object(p.jsx)(x,{})]})})),f=c.a.memo((function(e){var t=e.descriptionTitle,i=e.descriptiontValue;return Object(p.jsxs)("div",{className:g.a.description,children:[Object(p.jsx)("b",{children:t}),": ",i]})})),N=h,P=i(23);t.default=function(){var e=Object(n.c)(l),t=Object(n.c)(_),i=Object(n.b)(),c=Object(a.h)().namber;return Object(r.useEffect)((function(){i(Object(s.c)(c)),window.scrollTo(0,0)}),[t.id]),Object(p.jsx)("div",{children:e?Object(p.jsx)(P.c,{}):Object(p.jsx)(N,{title:t.title,price:t.price,description:t.description,photo:t.photo,id:t.id,sex:t.sex,summ:t.summ,added:t.added})})}},75:function(e,t,i){e.exports={product__full:"Product_product__full__297U-",product__fullPhoto:"Product_product__fullPhoto__px2jQ",items:"Product_items__2HyQr",title:"Product_title__2CLK9",price:"Product_price__1ZLfj",description:"Product_description__1VIu3",Textarea:"Product_Textarea__1yyHe",button:"Product_button__2BQDx",rewiers:"Product_rewiers__3Ol51",rewiersElement:"Product_rewiersElement__LHjmr",rating:"Product_rating__GJPNG",rating__body:"Product_rating__body__MjXOM",rating__activeNot:"Product_rating__activeNot__2wxII",rating__active:"Product_rating__active__1siiA",rating__items:"Product_rating__items__2ZG-0",rating__item:"Product_rating__item__1_IW7",message__error:"Product_message__error__24UvE"}}}]);
//# sourceMappingURL=5.ffdbf972.chunk.js.map