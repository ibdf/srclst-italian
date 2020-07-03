(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(t,e,n){var content=n(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2ba64042",content,!0,{sourceMap:!1})},190:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2e107364",content,!0,{sourceMap:!1})},193:function(t,e,n){"use strict";var r=n(189);n.n(r).a},194:function(t,e,n){(e=n(15)(!1)).push([t.i,'#filters-wrap[data-v-99493ca8]{background-color:hsla(0,0%,100%,.95)}@media only screen and (max-width:1023px){#filters-wrap[data-v-99493ca8]{overflow:scroll;width:100%;height:100%;position:fixed;top:40px;left:0;padding:1rem 2rem;z-index:999}}@media only screen and (max-width:768px){#filters-wrap[data-v-99493ca8]{padding:.5rem 1rem}}ul#filters>li[data-v-99493ca8]{border-bottom:1px solid #efefef;padding:.5rem 0}ul#filters>li[data-v-99493ca8]:last-of-type{border-bottom:0;padding:0}@media only screen and (max-width:1023px){ul#filters[data-v-99493ca8]{-moz-column-count:3;grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;-moz-column-width:33%;columns:33% 3}ul#filters li[data-v-99493ca8]{border-bottom:0;display:inline-block}ul#filters li[data-v-99493ca8]:not(last-of-type){margin-right:.2rem}}@media only screen and (max-width:768px){ul#filters[data-v-99493ca8]{-moz-column-count:2;column-count:2}}@media only screen and (max-width:500px){ul#filters[data-v-99493ca8]{-moz-column-count:1;column-count:1}}.filter-item[data-v-99493ca8]{margin-bottom:1px}.filter-item a[data-v-99493ca8]{display:inline-block;padding:.02rem .3rem}.is-active-filter[data-v-99493ca8]{background-color:#efefef;color:#000}.is-active-filter[data-v-99493ca8]:after{content:"[x]";font-size:.7rem;vertical-align:.11rem}.tag .is-active-filter[data-v-99493ca8]{background-color:transparent}',""]),t.exports=e},195:function(t,e,n){"use strict";var r=n(190);n.n(r).a},196:function(t,e,n){(e=n(15)(!1)).push([t.i,"body{padding-top:42px;-webkit-column-break-inside:avoid}@media screen and (max-width:1023px){.filters-column{width:0;max-width:0;padding:0}}.masonry-item{margin-bottom:1rem}.icon{position:relative}.count-badge{position:absolute;top:0;right:-5px;background-color:red;font-weight:700;color:#fff;font-size:.5rem;border-radius:50%;z-index:9999;display:block;width:12px;height:12px;line-height:12px}",""]),t.exports=e},211:function(t,e,n){"use strict";n.r(e);n(117),n(46),n(22),n(13),n(45),n(24);var r=n(3),o=n(0),l={name:"Card",props:{cardInfo:{type:Object,default:function(){return{}}}}},c=n(12),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:t.cardInfo.icon,alt:t.cardInfo.name}})])]),t._v(" "),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-5"},[t._v("\n          "+t._s(t.cardInfo.name)+"\n        ")]),t._v(" "),n("p",{staticClass:"subtitle is-6"},[n("a",{attrs:{href:t.cardInfo.src,target:"_blank"}},[n("span",[t._v("Visit website")]),t._v(" "),t._m(0)])])])]),t._v(" "),n("div",{staticClass:"content"},[t._v("\n      "+t._s(t.cardInfo.desc)+"\n    ")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-size-7"},[e("i",{staticClass:"fas fa-external-link-alt"})])}],!1,null,null,null).exports,f=(n(48),n(67),{name:"Filters",props:{filters:{type:Object,default:function(){return{}}},categories:{type:Object,default:function(){return{}}}},data:function(){return{activeFilters:{}}},computed:{isMobileOnly:function(){return!!this.$store.state.mobileBreaks.includes(this.$mq)},showMobileFilters:function(){return!this.$store.state.mobileBreaks.includes(this.$mq)||this.$store.state.showMobileFilters}},methods:{resetAll:function(){o.a.set(this,"activeFilters",{}),this.resetActiveLinks(),this.updateQuery()},resetActiveLinks:function(){this.$refs["filter-items"].forEach((function(filter){return filter.querySelectorAll("li a.is-active-filter").forEach((function(link){return link.classList.remove("is-active-filter")}))}))},updateQuery:function(){this.$emit("activeFilters",this.activeFilters)},linkIsActive:function(t,e){return!(!this.activeFilters[t]||!this.activeFilters[t].includes(e))},filterItems:function(t,e,n){var r=this;this.activeFilters.hasOwnProperty(t)||(this.activeFilters[t]=[]);var o=this.activeFilters[t].indexOf(e);-1!==o?(this.activeFilters[t].splice(o,1),this.$refs["".concat(t,"-").concat(n)][0].classList.remove("is-active-filter")):(this.activeFilters[t].push(e),this.$refs["".concat(t,"-").concat(n)][0].classList.add("is-active-filter")),Object.keys(this.activeFilters).forEach((function(t){0===r.activeFilters[t].length&&delete r.activeFilters[t]})),this.updateQuery()}}}),m=(n(193),Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMobileFilters,expression:"showMobileFilters"}],attrs:{id:"filters-wrap"}},[n("ul",{attrs:{id:"filters"}},t._l(t.categories,(function(e,r){return n("li",{key:r},[n("h3",{staticClass:"is-size-5"},[t._v("\n        "+t._s(e)+"\n      ")]),t._v(" "),n("ul",{ref:"filter-items",refInFor:!0,staticClass:"filter-items"},t._l(t.filters["filter_"+r],(function(e,filter,o){return n("li",{key:filter,staticClass:"filter-item",class:"tags"===r?"is-inline-block":""},["tags"===r?[n("span",{staticClass:"tag"},[n("a",{ref:r+"-"+o,refInFor:!0,on:{click:function(e){return e.preventDefault(),t.filterItems(r,filter,o)}}},[t._v("\n                "+t._s(filter)+" ("+t._s(e)+")\n              ")])]),t._v(" \n          ")]:[n("a",{ref:r+"-"+o,refInFor:!0,on:{click:function(e){return e.preventDefault(),t.filterItems(r,filter,o)}}},[t._v("\n              "+t._s(filter)+" ("+t._s(e)+")\n            ")])]],2)})),0)])})),0),t._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"buttons",class:t.isMobileOnly?"is-centered":""},[n("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:t.resetAll}},[t._v("\n            Clear all filters\n          ")])])])])])])}),[],!1,null,"99493ca8",null).exports),h={tag:{type:[String],default:"div"},cols:{type:[Object,Number,String],default:2},gutter:{type:[Object,Number,String],default:0},css:{type:[Boolean],default:!0},columnTag:{type:[String],default:"div"},columnClass:{type:[String,Array,Object],default:function(){return[]}},columnAttr:{type:[Object],default:function(){return{}}}},v=function(t,e){if(parseInt(t)>-1)return t;if("object"!=typeof t)return 0;var n=1/0,r=t.default||0;for(var o in t){var l=parseInt(o),c=t[l],d=parseInt(c);if(!isNaN(l)&&!isNaN(d))e<=l&&l<n&&(n=l,r=c)}return r},w={props:h,data:function(){return{displayColumns:2,displayGutter:0}},mounted:function(){var t=this;this.$nextTick((function(){t.reCalculate()})),window&&window.addEventListener("resize",this.reCalculate)},updated:function(){var t=this;this.$nextTick((function(){t.reCalculate()}))},beforeDestroy:function(){window&&window.removeEventListener("resize",this.reCalculate)},methods:{reCalculate:function(){var t=this.windowWidth;this.windowWidth=(window?window.innerWidth:null)||1/0,t!==this.windowWidth&&(this._reCalculateColumnCount(this.windowWidth),this._reCalculateGutterSize(this.windowWidth))},_reCalculateGutterSize:function(t){this.displayGutter=v(this.gutter,t)},_reCalculateColumnCount:function(t){var e=v(this.cols,t);e=Math.max(1,Number(e)||0),this.displayColumns=e},_getChildItemsInColumnsArray:function(){var t=[],e=this.$slots.default||[];1===e.length&&e[0].componentOptions&&"transition-group"==e[0].componentOptions.tag&&(e=e[0].componentOptions.children);for(var i=0,n=0;i<e.length;i++,n++)if(e[i].tag){var r=n%this.displayColumns;t[r]||(t[r]=[]),t[r].push(e[i])}else n--;return t}},render:function(t){var e=this,n=this._getChildItemsInColumnsArray(),r=parseInt(this.displayGutter)===1*this.displayGutter?this.displayGutter+"px":this.displayGutter,o={boxSizing:"border-box",backgroundClip:"padding-box",width:100/this.displayColumns+"%",border:"0 solid transparent",borderLeftWidth:r},l=n.map((function(r,l){return t(e.columnTag,{key:l+"-"+n.length,style:e.css?o:null,class:e.columnClass,attrs:e.columnAttr},r)})),c={display:["-webkit-box","-ms-flexbox","flex"],marginLeft:"-"+r};return t(this.tag,this.css?{style:c}:null,l)}},y=function(){};y.install=function(t,e){y.installed||(e&&e.name?t.component(e.name,w):t.component("masonry",w))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(y);var C=y;o.a.use(C);var x={components:{Card:d,Filters:m},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,(r=[]).push(n("settings").fetch()),r.push(n("items").sortBy("name").fetch()),e.next=6,Promise.all(r);case 6:return o=e.sent,l=o[0].categories,c=o[1],d={},c.forEach((function(t){Object.keys(t).forEach((function(e){e.startsWith("filter_")&&(d[e]||(d[e]={}),t[e].forEach((function(t){d[e][t]?d[e][t]++:d[e][t]=1})))}))})),e.abrupt("return",{filters:d,items:c,categories:l});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{items:[],macyInstance:null}},created:function(){this.filters.filters=this.sortFilters(this.filters.filters),this.updateFiltersCount()},methods:{updateFiltersCount:function(){this.$store.commit("itemsCount",this.items.length)},sortFilters:function(t){for(var e in t)t[e].items=t[e].items.sort((function(a,b){return a<b?-1:1}));return t},filterContent:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={},Object.keys(t).forEach((function(filter){r["filter_".concat(filter)]={$contains:t[filter]}})),n.next=4,e.$content("items").only(["name","src","desc","icon"]).where(r).fetch();case 4:o=n.sent,e.items=o,e.updateFiltersCount();case 7:case"end":return n.stop()}}),n)})))()}}},_=(n(195),Object(c.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-2-desktop filters-column is-relative"},[n("filters",{attrs:{filters:t.filters,categories:t.categories},on:{activeFilters:t.filterContent}})],1),t._v(" "),n("div",{staticClass:"column is-auto"},[t.items.length>0?n("masonry",{attrs:{cols:{default:3,900:2,700:1},gutter:{default:"1rem",768:15,600:10}}},t._l(t.items,(function(t){return n("div",{key:t.src,staticClass:"masonry-item"},[n("card",{attrs:{"card-info":t}})],1)})),0):t._e()],1)])])}),[],!1,null,null,null));e.default=_.exports}}]);