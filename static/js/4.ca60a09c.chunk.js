(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[4],{205:function(t,e,r){t.exports={formControl:"FormControls_formControl__15npX",error:"FormControls_error__1UcGW",formControl__span:"FormControls_formControl__span__2XV5H",formSummaryError:"FormControls_formSummaryError__2oFJm"}},207:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return c}));var n=function(t){if(!t)return"Field is required"},c=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t," symbols")}}},208:function(t,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return d}));var n=r(3),c=r(226),i=(r(1),r(205)),a=r.n(i),o=r(0),s=function(t){t.input;var e=t.meta,r=(t.child,Object(c.a)(t,["input","meta","child"])),n=e.touched&&e.error;return Object(o.jsxs)("div",{className:a.a.formControl+" "+(n?a.a.error:""),children:[Object(o.jsx)("div",{children:r.children}),Object(o.jsx)("div",{className:a.a.formControl__span,children:n&&Object(o.jsx)("span",{children:e.error})})]})},u=function(t){var e=t.input,r=(t.meta,t.child,Object(c.a)(t,["input","meta","child"]));return Object(o.jsx)(s,Object(n.a)(Object(n.a)({},t),{},{children:Object(o.jsx)("textarea",Object(n.a)(Object(n.a)({},e),r))}))},d=function(t){var e=t.input,r=(t.meta,t.child,Object(c.a)(t,["input","meta","child"]));return Object(o.jsx)(s,Object(n.a)(Object(n.a)({},t),{},{children:Object(o.jsx)("input",Object(n.a)(Object(n.a)({},e),r))}))}},213:function(t,e,r){t.exports={product__full:"Product_product__full__297U-",product__fullPhoto:"Product_product__fullPhoto__px2jQ",items:"Product_items__2HyQr",title:"Product_title__2CLK9",price:"Product_price__1ZLfj",description:"Product_description__1VIu3",Textarea:"Product_Textarea__1yyHe",button:"Product_button__2BQDx",rewiers:"Product_rewiers__3Ol51",rewiersElement:"Product_rewiersElement__LHjmr",rating:"Product_rating__GJPNG",rating__body:"Product_rating__body__MjXOM",rating__activeNot:"Product_rating__activeNot__2wxII",rating__active:"Product_rating__active__1siiA",rating__items:"Product_rating__items__2ZG-0",rating__item:"Product_rating__item__1_IW7"}},275:function(t,e,r){"use strict";r.r(e);var n=r(3),c=r(38),i=r(39),a=r(47),o=r(46),s=r(1),u=r.n(s),d=r(5),l=r(28),_=r(21),j=r(61),b=r(26),m=function(t){return t},O=Object(b.a)(m,(function(t){return t.Product.product})),p=Object(b.a)(m,(function(t){return t.Product.isFetching})),v=Object(b.a)(m,(function(t){return t.Product.reviews})),f=r(37),h=r(213),x=r.n(h),g=r(49),N=r(25),P=r(100),w=r(101),y=r(207),C=r(208),F=r(0),S=u.a.memo((function(t){var e=t.reviews,r=t.addReviews;console.log(e);var n=Object(N.a)(e).reverse().map((function(t){return Object(F.jsxs)("div",{className:x.a.rewiers,children:[Object(F.jsx)("div",{className:x.a.rating,children:Object(N.a)(Array(5)).map((function(e,r){var n=r+1,c=t.rating;return Object(F.jsx)("div",{className:x.a.rating__body,children:Object(F.jsx)("div",{className:n<=c?x.a.rating__active:x.a.rating__activeNot,children:Object(F.jsx)("div",{className:x.a.rating__items,children:Object(F.jsx)("input",{type:"radio",className:x.a.rating__item,value:n,name:"rating"})})})},r)}))}),Object(F.jsxs)("div",{className:x.a.reviews,children:[" - ",t.message]},t.id)]},t.id)}));return Object(F.jsxs)("div",{children:[Object(F.jsx)(k,{onSubmit:function(t){r(t)}}),Object(F.jsx)("div",{className:x.a.rewiersElement,children:n})]})})),T=Object(y.a)(100),k=Object(w.a)({form:"ReviewsAddNewPostForm"})((function(t){var e=u.a.useState(null),r=Object(g.a)(e,2),n=r[0],c=r[1],i=u.a.useState(null),a=Object(g.a)(i,2),o=a[0],s=a[1];return Object(F.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(F.jsx)(P.a,{className:x.a.Textarea,component:C.b,placeholder:"Add a review...",name:"NewPostText",validate:[y.b,T]}),Object(F.jsx)("div",{className:x.a.rating,children:Object(N.a)(Array(5)).map((function(t,e){var r=e+1;return Object(F.jsx)("div",{className:x.a.rating__body,children:Object(F.jsx)("div",{className:r<=(o||n)?x.a.rating__active:x.a.rating__activeNot,children:Object(F.jsx)("div",{className:x.a.rating__items,children:Object(F.jsx)(P.a,{component:"input",type:"radio",validate:[y.b],className:x.a.rating__item,value:r,name:"rating",onClick:function(){return c(r)},onMouseOver:function(){return s(r)},onMouseOut:function(){return s(null)}})})})},e)}))}),Object(F.jsx)("button",{className:x.a.button,children:"Send"})]})})),M=S,A=Object(l.b)((function(t){return{reviews:v(t)}}),(function(t){return{addReviews:function(e){t(Object(j.a)(e))}}}))(M),E=u.a.memo((function(t){var e=t.product;return Object(F.jsxs)("div",{className:x.a.product__full,children:[Object(F.jsx)("div",{className:x.a.product__fullPhoto,children:Object(F.jsx)("img",{alt:"",src:null!=e.photo?e.photo:null})}),Object(F.jsxs)("div",{className:x.a.items,children:[Object(F.jsx)("div",{className:x.a.title,children:e.title}),Object(F.jsxs)("div",{className:x.a.price,children:[e.price," $"]}),Object(F.jsx)("div",{className:x.a.description,children:Object.keys(e.description).map((function(t){return Object(F.jsx)(G,{descriptionTitle:t,descriptiontValue:e.description[t]},t)}))})]}),Object(F.jsx)(A,{})]})})),G=function(t){var e=t.descriptionTitle,r=t.descriptiontValue;return Object(F.jsxs)("div",{className:x.a.description,children:[Object(F.jsx)("b",{children:e}),": ",r]})},H=E,I=function(t){Object(a.a)(r,t);var e=Object(o.a)(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.match.params.namber;this.props.setProduct(t),window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(F.jsx)("div",{children:this.props.isFetching?Object(F.jsx)(f.b,{}):Object(F.jsx)(H,Object(n.a)(Object(n.a)({},this.props),{},{product:this.props.product}))})}}]),r}(u.a.Component);e.default=I=Object(_.d)(Object(l.b)((function(t){return{product:O(t),isFetching:p(t)}}),{setProduct:j.c}),d.g)(I)}}]);
//# sourceMappingURL=4.ca60a09c.chunk.js.map