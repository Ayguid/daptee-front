(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{"0fd9":function(t,e,n){"use strict";n("caad"),n("4b85");var l=n("2b0e"),o=n("d9f7"),r=n("80d2");const a=["sm","md","lg","xl"],s=["start","end","center"];function c(t,e){return a.reduce((n,l)=>(n[t+Object(r["F"])(l)]=e(),n),{})}const u=t=>[...s,"baseline","stretch"].includes(t),i=c("align",()=>({type:String,default:null,validator:u})),d=t=>[...s,"space-between","space-around"].includes(t),f=c("justify",()=>({type:String,default:null,validator:d})),p=t=>[...s,"space-between","space-around","stretch"].includes(t),g=c("alignContent",()=>({type:String,default:null,validator:p})),b={align:Object.keys(i),justify:Object.keys(f),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,n){let l=y[t];if(null!=n){if(e){const n=e.replace(t,"");l+="-"+n}return l+="-"+n,l.toLowerCase()}}const m=new Map;e["a"]=l["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...i,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:n,children:l}){let r="";for(const o in e)r+=String(e[o]);let a=m.get(r);if(!a){let t;for(t in a=[],b)b[t].forEach(n=>{const l=e[n],o=j(t,n,l);o&&a.push(o)});a.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),m.set(r,a)}return t(e.tag,Object(o["a"])(n,{staticClass:"row",class:a}),l)}})},"4b85":function(t,e,n){},"62ad":function(t,e,n){"use strict";n("caad"),n("4b85");var l=n("2b0e"),o=n("d9f7"),r=n("80d2");const a=["sm","md","lg","xl"],s=(()=>a.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),c=(()=>a.reduce((t,e)=>(t["offset"+Object(r["F"])(e)]={type:[String,Number],default:null},t),{}))(),u=(()=>a.reduce((t,e)=>(t["order"+Object(r["F"])(e)]={type:[String,Number],default:null},t),{}))(),i={col:Object.keys(s),offset:Object.keys(c),order:Object.keys(u)};function d(t,e,n){let l=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");l+="-"+n}return"col"!==t||""!==n&&!0!==n?(l+="-"+n,l.toLowerCase()):l.toLowerCase()}}const f=new Map;e["a"]=l["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:l,parent:r}){let a="";for(const o in e)a+=String(e[o]);let s=f.get(a);if(!s){let t;for(t in s=[],i)i[t].forEach(n=>{const l=e[n],o=d(t,n,l);o&&s.push(o)});const n=s.some(t=>t.startsWith("col-"));s.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(a,s)}return t(e.tag,Object(o["a"])(n,{class:s}),l)}})},e6dc:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products pt-4 px-4"},[t._v(" Vista Productos "),n("v-row",t._l(t.products,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",lg:"2",md:"3",sm:"6",xs:"12"}},[n("ProductCard",{attrs:{product:t}})],1)})),1)],1)},o=[],r=n("2f62"),a={name:"ProductsView",components:{ProductCard:()=>n.e("chunk-c6438cb2").then(n.bind(null,"e915"))},methods:{...Object(r["b"])(["fetchProducts"])},computed:{...Object(r["c"])(["products"])},beforeRouteEnter(t,e,n){console.log("Enter,,,"),n(async t=>{await t.fetchProducts(),n()})},beforeRouteUpdate(t,e,n){console.log("Update,,,"),n()}},s=a,c=n("2877"),u=n("6544"),i=n.n(u),d=n("62ad"),f=n("0fd9"),p=Object(c["a"])(s,l,o,!1,null,null,null);e["default"]=p.exports;i()(p,{VCol:d["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=products.cacb5f74.js.map