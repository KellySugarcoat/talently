(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(t,e,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("56b15182",content,!0,{sourceMap:!1})},169:function(t,e,n){"use strict";n(219);var r=n(31),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},171:function(t,e,n){n(172),t.exports=n(173)},19:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return m}));n(56),n(14),n(73),n(34);var r,o=n(5),c=n(74),f=n(75),d=window.localStorage.getItem("auth._token.local")||"";!function(t){t.CONTENT="https://fchallenge.talently.tech/api/content/",t.COMMENT="https://fchallenge.talently.tech/api/comment/"}(r||(r={}));var m=function(){function t(e,n){Object(c.a)(this,t),this.url="",this.method="POST",this.headers=new Headers,this.token=d,this.DEFAULT_HEADERS=new Headers({"Content-Type":"application/json","X-Custom-Header":"ProcessThisImmediately",Authorization:d.toString()}),this.url=e,this.headers=n||this.DEFAULT_HEADERS}var e,n,r;return Object(f.a)(t,[{key:"getOptions",value:function(body,t){return{method:t||this.method,body:body?JSON.stringify(body):"",headers:this.headers,mode:"cors",cache:"default"}}},{key:"getContentLength",value:function(content){return content?JSON.stringify(content).toString().length.toString():"0"}},{key:"post",value:(r=Object(o.a)(regeneratorRuntime.mark((function t(e,body){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.headers.set("Content-Length",this.getContentLength(body)),t.next=3,fetch(this.url+e,this.getOptions(body));case 3:return n=t.sent,t.next=6,n.json();case 6:if(r=t.sent,!n.ok){t.next=9;break}return t.abrupt("return",r);case 9:return t.abrupt("return",new Error);case 10:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},{key:"get",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,r,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t.next=3,fetch("".concat(this.url).concat(e),this.getOptions());case 3:return n=t.sent,t.next=6,n.json();case 6:if(r=t.sent,!n.ok){t.next=9;break}return t.abrupt("return",r);case 9:return t.abrupt("return",new Error);case 10:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"delete",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,r,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t.next=3,fetch("".concat(this.url).concat(e),this.getOptions(void 0,"DELETE"));case 3:return n=t.sent,t.next=6,n.json();case 6:if(r=t.sent,!n.ok){t.next=9;break}return t.abrupt("return",r);case 9:return t.abrupt("return",new Error);case 10:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}()},217:function(t,e,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("14a41a40",content,!0,{sourceMap:!1})},218:function(t,e,n){(e=n(40)(!1)).push([t.i,"body,html{background-color:#ecf1f6;color:#333;width:100vw;height:100vh;overflow-x:hidden}.logo{width:127px;height:26px}",""]),t.exports=e},219:function(t,e,n){"use strict";n(154)},220:function(t,e,n){(e=n(40)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}',""]),t.exports=e},221:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{counter:0}},o={increment:function(t){t.counter++}}},222:function(t,e,n){"use strict";n.r(e),n.d(e,"plugins",(function(){return f})),n.d(e,"courseContent",(function(){return d})),n.d(e,"courseComments",(function(){return m})),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return h})),n.d(e,"actions",(function(){return v}));n(61),n(115),n(27);var r=n(18),o=n(19);n(80);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=[o.a],d=new o.a(o.b.CONTENT),m=new o.a(o.b.COMMENT),l=function(){return{comments:[]}},h={setComments:function(t,e){if(!e)return!1;t.comments=e,t.comments.sort((function(a,b){return new Date(b.updated_at)-new Date(a.updated_at)}))},addComment:function(t,e){if(!e)return!1;t.comments.push(e),t.comments.sort((function(a,b){return new Date(b.updated_at)-new Date(a.updated_at)}))},setComment:function(t,e){return!!e.id&&(!!t.comments.find((function(t){return t.id===e.id}))&&void t.comments.map((function(t){t.id===e.id&&(t.content=e.content)})))},removeComment:function(t,e){t.comments=t.comments.filter((function(t){return t.id!=e}))}},v={load:function(t){t.state;var e=t.commit;d.get("1/comments").then((function(t){e("setComments",t.comments)}))},editComment:function(t,e){var n=t.commit;m.post("".concat(e.id,"/update"),{content:e.content}).then(n("setComment",e)).catch((function(t){alert("Hubo un error al actualizar tu comentario.")}))},deleteComment:function(t,e){var n=t.commit;m.delete(e).then((function(t){n("removeComment",e)})).catch((function(t){return alert("Ocurrio un error al eliminar tu comentario, intentalo de nuevo")}))},addComment:function(t,e){var n=t.commit;if(!e)return!1;var body={user_id:4,content:e,content_id:1};m.post("create",body).then((function(t){n("addComment",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({user:{name:"Yo"}},t.message))})).catch((function(t){return alert("Ocurrio un error al publicar tu comentario!")}))}}},223:function(t,e,n){"use strict";n.r(e),n.d(e,"plugins",(function(){return c})),n.d(e,"courseContent",(function(){return f})),n.d(e,"state",(function(){return d})),n.d(e,"mutations",(function(){return m})),n.d(e,"actions",(function(){return l})),n.d(e,"getters",(function(){return h}));n(115);var r=n(19),o=n(80),c=[r.a],f=new r.a(r.b.CONTENT),d=function(){return{episodes:[],currentEpisode:null}},m={setProgress:function(t,e){var n=10*e,r=t.episodes.find((function(e){return e.id==t.currentEpisode}));if(r.progress>n)return!1;r.progress=n},setCurrentEpisode:function(t,e){if(t.currentEpisode===e)return!1;t.currentEpisode=e},setEpisodes:function(t,e){if(!e)return!1;t.episodes=e}},l={updateCurrentEpisode:function(t,e){var n=t.state,r=t.dispatch,o=t.commit;n.currentEpisode&&r("updateProgress"),o("setCurrentEpisode",e)},updateProgress:function(t){var e=t.state;f.post("".concat(e.currentEpisode,"/progress"),{progress:10}).then((function(t){return console.log(t)}))},load:function(t){var e=t.commit;f.get().then((function(t){e("setEpisodes",t.content),o.a.$emit("content-loaded")})).catch((function(t){401===t.response.status&&window.location.reload()}))}},h={getCurrentEpisode:function(t){return t.episodes.find((function(e){return e.id===t.currentEpisode}))}}},80:function(t,e,n){"use strict";var r=new(n(1).a);e.a=r}},[[171,4,1,5]]]);