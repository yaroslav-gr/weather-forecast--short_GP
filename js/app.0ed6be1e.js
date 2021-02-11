(function(e){function t(t){for(var r,s,c=t[0],o=t[1],d=t[2],l=0,h=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],r=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=i[0]))}return e}var r={},a={app:0},n=[];function s(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=r,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"50b9":function(e,t,i){"use strict";i("951a")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{attrs:{id:"app"}},[i("section",{staticClass:"glass"},[i("menu-weather"),i("cardsBoard")],1),i("div",{staticClass:"circle1"}),i("div",{staticClass:"circle2"}),i("div",{staticClass:"circle3"})])},n=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dashboard"},[i("h1",{staticClass:"title"},[e._v("What's the Weather in")]),e._m(0),i("div",{staticClass:"cities"},[i("ul",e._l(e.citiesNames,(function(t){return i("li",{key:t,staticClass:"city",class:e.getPressedCities[t]?"disabledLi":"activeLi",on:{click:function(i){return e.getWeather(t)}}},[i("h3",[e._v(e._s(t))]),i("button",{class:e.getPressedCities[t]?"disabledButton":"activeButton",attrs:{name:t,disabled:e.getPressedCities[t]}},[e._v("see details")])])})),0)]),i("button",{staticClass:"more-cities",on:{click:e.MakeShakeJoin}},[e._v("Load more cities")]),e._m(1)])},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user"},[i("button",{staticClass:"avatar"},[i("picture",[i("img",{attrs:{src:"https://cdn.iconscout.com/icon/free/png-256/weather-296-1100758.png",alt:"picture of sun and cloud"}})])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pro"},[i("h2",[e._v("Join pro to load more citeis")])])}],o=i("5530"),d=i("2f62"),u={data:function(){return{citiesNames:["London","Paris","Tokyo","New York","Moscow","Berlin"]}},name:"v-menu-weather",methods:Object(o["a"])(Object(o["a"])({},Object(d["b"])(["fetchWeather"])),{},{getWeather:function(e){this.getPressedCities[e]||this.fetchWeather(e)},MakeShakeJoin:function(){var e=document.querySelector(".pro");e.classList.add("shake"),setTimeout((function(){e.classList.remove("shake")}),500)}}),computed:Object(o["a"])({},Object(d["c"])(["getPressedCities"]))},l=u,h=(i("7dca"),i("2877")),f=Object(h["a"])(l,s,c,!1,null,"6c0c41a9",null),p=f.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cards-board"},e._l(e.allWeather,(function(e){return i("card-weather",{key:e.id,attrs:{cityWeather:e}})})),1)},v=[],y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card shake"},[i("button",{staticClass:"close-card",on:{click:function(t){return e.deleteCity(e.cityWeather)}}},[i("i",{staticClass:"gg-close"})]),i("h3",[e._v(e._s(e.cityWeather.name)+", "+e._s(e.cityWeather.sys.country))]),i("p",{staticClass:"degrice"},[e._v(e._s(e.getCelsius)+" °C")]),i("p",{staticClass:"weather-desc"},[e._v(e._s(e.generateDescription))]),i("table",[i("tbody",[i("tr",[i("td",[i("span",{staticClass:"description-card"},[e._v("The wind: ")]),e._v(e._s(e.cityWeather.wind.speed)+" m/s")]),i("td",[i("span",{staticClass:"description-card"},[e._v("Wind direction: ")]),e._v(e._s(e.getWindDirection))])]),i("tr",[i("td",[i("span",{staticClass:"description-card"},[e._v("Humindity: ")]),e._v(" "+e._s(e.cityWeather.main.humidity)+"%")]),i("td",[i("span",{staticClass:"description-card"},[e._v("Pressure: ")]),e._v(e._s(e.cityWeather.main.pressure)+" hPa")])]),i("tr",[i("td",[i("span",{staticClass:"description-card"},[e._v("Visibility: ")]),e._v(e._s(e.getVisability)+"km")])])])])])},m=[],g=(i("a4d3"),i("e01a"),i("99af"),i("b680"),{props:["cityWeather"],computed:{getCelsius:function(){var e=(this.cityWeather.main.temp-273.15).toFixed(0);return e},getVisability:function(){var e=(this.cityWeather.visibility/1e3).toFixed(1);return e},getWindDirection:function(){var e="";switch(!0){case this.cityWeather.wind.deg>=337&&this.cityWeather.wind.deg<=360||this.cityWeather.wind.deg>=0&&this.cityWeather.wind.deg<=23:e="N";break;case this.cityWeather.wind.deg>=24&&this.cityWeather.wind.deg<=68:e="NE";break;case this.cityWeather.wind.deg>=69&&this.cityWeather.wind.deg<=113:e="E";break;case this.cityWeather.wind.deg>=114&&this.cityWeather.wind.deg<=158:e="SE";break;case this.cityWeather.wind.deg>=159&&this.cityWeather.wind.deg<=203:e="S";break;case this.cityWeather.wind.deg>=204&&this.cityWeather.wind.deg<=248:e="SW";break;case this.cityWeather.wind.deg>=249&&this.cityWeather.wind.deg<=293:e="W";break;case this.cityWeather.wind.deg>=294&&this.cityWeather.wind.deg<=336:e="NW";break;default:e=""}return e},generateDescription:function(){var e="Today is ".concat(this.cityWeather.weather[0].description,". Feels like ").concat((this.cityWeather.main.feels_like-273.15).toFixed(0)," °C");return e}},methods:Object(o["a"])({},Object(d["b"])(["deleteCity"]))}),w=g,W=(i("50b9"),Object(h["a"])(w,y,m,!1,null,"79cacff8",null)),_=W.exports,C={computed:Object(o["a"])({},Object(d["c"])(["allWeather"])),components:{cardWeather:_}},k=C,O=(i("6563"),Object(h["a"])(k,b,v,!1,null,"622c07e8",null)),j=O.exports,P={name:"App",components:{menuWeather:p,cardsBoard:j}},x=P,S=(i("034f"),Object(h["a"])(x,a,n,!1,null,null,null)),E=S.exports,B=(i("4de4"),i("b0c0"),i("d3b7"),i("96cf"),i("1da1")),M={state:{isPressed:{London:!1,Paris:!1,Tokyo:!1,"New York":!1,Moscow:!1,Berlin:!1},weather:[]},mutations:{updateWeather:function(e,t){e.weather.push(t),e.isPressed[t.name]=!0},filterWeather:function(e,t){e.weather=e.weather.filter((function(e){return e.name!==this.name}),t)},activeButton:function(e,t){e.isPressed[t.name]=!1}},actions:{fetchWeather:function(e,t){return Object(B["a"])(regeneratorRuntime.mark((function i(){var r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.commit,i.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=bb24b217e3821a98155650eece47b915")).then((function(e){return e.json()}));case 3:a=i.sent,r("updateWeather",a);case 5:case"end":return i.stop()}}),i)})))()},deleteCity:function(e,t){var i=e.commit;i("filterWeather",t),i("activeButton",t)}},getters:{allWeather:function(e){return e.weather},getPressedCities:function(e){return e.isPressed}}};r["a"].use(d["a"]);var T=new d["a"].Store({modules:{cityWeather:M}});r["a"].config.productionTip=!1,new r["a"]({store:T,render:function(e){return e(E)}}).$mount("#app")},6563:function(e,t,i){"use strict";i("7223")},7223:function(e,t,i){},"7dca":function(e,t,i){"use strict";i("b68f")},"85ec":function(e,t,i){},"951a":function(e,t,i){},b68f:function(e,t,i){}});
//# sourceMappingURL=app.0ed6be1e.js.map
