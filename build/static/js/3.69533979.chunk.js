(this["webpackJsonpcandy-machine-ui"]=this["webpackJsonpcandy-machine-ui"]||[]).push([[3],{335:function(e,n,t){"use strict";t.r(n),function(e){var r=t(64),o=t.n(r),i=t(403),a=t(401),c=t(402),s=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),u=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},l=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},d=function(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},f=function(n){function t(e){var r=n.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var n,t,o;switch(e.type){case"connect_native_web":return r._collapseIframe(),r._adapterInstance=new i.a(r._iframe,r._network,(null===(n=e.data)||void 0===n?void 0:n.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),void r._setPreferredAdapter("native_web");case"connect":return r._collapseIframe(),r._adapterInstance=new a.a(r._iframe,(null===(t=e.data)||void 0===t?void 0:t.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),void r.emit("connect",r.publicKey);case"disconnect":return r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),void r.emit("disconnect");case"collapse":return void r._collapseIframe();default:return}},r._handleResize=function(e){"full"===e.resizeMode?"fullscreen"===e.params.mode?r._expandIframe():"hide"===e.params.mode&&r._collapseIframe():"coordinates"===e.resizeMode&&r._iframe&&(r._iframe.style.top=isFinite(e.params.top)?"".concat(e.params.top,"px"):"",r._iframe.style.bottom=isFinite(e.params.bottom)?"".concat(e.params.bottom,"px"):"",r._iframe.style.left=isFinite(e.params.left)?"".concat(e.params.left,"px"):"",r._iframe.style.right=isFinite(e.params.right)?"".concat(e.params.right,"px"):"",r._iframe.style.width=isFinite(e.params.width)?"".concat(e.params.width,"px"):e.params.width,r._iframe.style.height=isFinite(e.params.height)?"".concat(e.params.height,"px"):e.params.height)},r._handleMessage=function(e){var n;if("solflareIframeToWalletAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)){var t=e.data.data||{};"event"===t.type?r._handleEvent(t.event):"resize"===t.type?r._handleResize(t):"response"===t.type&&r._adapterInstance&&r._adapterInstance.handleMessage(t)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,n,t=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=d(t),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e="".concat(t.IFRAME_URL,"?cluster=").concat(encodeURIComponent(r._network),"&origin=").concat(encodeURIComponent(window.location.origin),"&version=1"),n=r._getPreferredAdapter();n&&(e+="&adapter=".concat(encodeURIComponent(n))),r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(e,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval((function(){window.fromFlutter=r._handleMobileMessage}),100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._expandIframe=function(){r._iframe&&(r._iframe.style.top="0px",r._iframe.style.bottom="0px",r._iframe.style.left="0px",r._iframe.style.right="0px",r._iframe.style.width="100%",r._iframe.style.height="100%")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var n,t;null===(t=null===(n=r._iframe)||void 0===n?void 0:n.contentWindow)||void 0===t||t.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null===e||void 0===e?void 0:e.network)&&(r._network=null===e||void 0===e?void 0:e.network),(null===e||void 0===e?void 0:e.provider)&&(r._provider=null===e||void 0===e?void 0:e.provider),r}return s(t,n),Object.defineProperty(t.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return u(this,void 0,void 0,(function(){var e=this;return l(this,(function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise((function(n,t){e._connectHandler={resolve:n,reject:t}}))]);case 1:return n.sent(),[2]}}))}))},t.prototype.disconnect=function(){return u(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}}))}))},t.prototype.signTransaction=function(n){return u(this,void 0,void 0,(function(){var t,r,o,i,a=this;return l(this,(function(s){switch(s.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=Object(c.a)(n)?n.serializeMessage():n.message.serialize(),[4,this._adapterInstance.signTransaction(t)];case 1:return r=s.sent(),Object(c.a)(n)?n.addSignature(this.publicKey,e.from(r)):(o=n.message.staticAccountKeys.slice(0,n.message.header.numRequiredSignatures),(i=o.findIndex((function(e){return e.equals(a.publicKey)})))>=0&&(n.signatures[i]=r)),[2,n]}}))}))},t.prototype.signAllTransactions=function(n){return u(this,void 0,void 0,(function(){var t,r,o,i,a,s,u=this;return l(this,(function(l){switch(l.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=n.map((function(e){return Object(c.a)(e)?e.serializeMessage():e.message.serialize()})),[4,this._adapterInstance.signAllTransactions(t)];case 1:for(r=l.sent(),o=0;o<n.length;o++)i=n[o],Object(c.a)(i)?i.addSignature(this.publicKey,e.from(r[o])):(a=i.message.staticAccountKeys.slice(0,i.message.header.numRequiredSignatures),(s=a.findIndex((function(e){return e.equals(u.publicKey)})))>=0&&(i.signatures[s]=r[o]));return[2,n]}}))}))},t.prototype.signMessage=function(e,n){return void 0===n&&(n="utf8"),u(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},t.prototype.sign=function(e,n){return void 0===n&&(n="utf8"),u(this,void 0,void 0,(function(){return l(this,(function(t){switch(t.label){case 0:return[4,this.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},t.prototype.detectWallet=function(e){var n;return void 0===e&&(e=10),u(this,void 0,void 0,(function(){return l(this,(function(t){return window.SolflareApp||(null===(n=window.solflare)||void 0===n?void 0:n.isSolflare)?[2,!0]:[2,new Promise((function(n){var t,r;t=setInterval((function(){var e;(window.SolflareApp||(null===(e=window.solflare)||void 0===e?void 0:e.isSolflare))&&(clearInterval(t),clearTimeout(r),n(!0))}),500),r=setTimeout((function(){clearInterval(t),n(!1)}),1e3*e)}))]}))}))},t.IFRAME_URL="https://connect.solflare.com/",t}(o.a);n.default=f}.call(this,t(14).Buffer)},400:function(e,n,t){"use strict";var r=t(64),o=t.n(r),i=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n}(o.a);n.a=a},401:function(e,n,t){"use strict";var r=t(5),o=t(400),i=t(188),a=t(26),c=t.n(a),s=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)},l=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},d=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},f=function(e){function n(n,t){var o,a=this;return(a=e.call(this)||this)._publicKey=null,a._messageHandlers={},a.handleMessage=function(e){if(a._messageHandlers[e.id]){var n=a._messageHandlers[e.id],t=n.resolve,r=n.reject;delete a._messageHandlers[e.id],e.error?r(e.error):t(e.result)}},a._sendMessage=function(e){if(!a.connected)throw new Error("Wallet not connected");return new Promise((function(n,t){var r,o,c=Object(i.a)();a._messageHandlers[c]={resolve:n,reject:t},null===(o=null===(r=a._iframe)||void 0===r?void 0:r.contentWindow)||void 0===o||o.postMessage({channel:"solflareWalletAdapterToIframe",data:u({id:c},e)},"*")}))},a._iframe=n,a._publicKey=new r.PublicKey(null===(o=null===t||void 0===t?void 0:t.toString)||void 0===o?void 0:o.call(t)),a}return s(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return l(this,void 0,void 0,(function(){return d(this,(function(e){return[2]}))}))},n.prototype.disconnect=function(){return l(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return l(this,void 0,void 0,(function(){var n,t;return d(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:c.a.encode(e)}})];case 2:return n=r.sent().signature,[2,c.a.decode(n)];case 3:throw t=r.sent(),console.log(t),new Error("Failed to sign transaction");case 4:return[2]}}))}))},n.prototype.signAllTransactions=function(e){return l(this,void 0,void 0,(function(){var n;return d(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:e.map((function(e){return c.a.encode(e)}))}})];case 2:return[2,t.sent().signatures.map((function(e){return c.a.decode(e)}))];case 3:throw n=t.sent(),console.log(n),new Error("Failed to sign transactions");case 4:return[2]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),l(this,void 0,void 0,(function(){var t,r;return d(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:n}})];case 2:return t=o.sent(),[2,Uint8Array.from(c.a.decode(t))];case 3:throw r=o.sent(),console.log(r),new Error("Failed to sign message");case 4:return[2]}}))}))},n}(o.a);n.a=f},402:function(e,n,t){"use strict";function r(e){return void 0===e.version}t.d(n,"a",(function(){return r}))},403:function(e,n,t){"use strict";var r=t(400),o=t(11),i=t(2),a=t(9),c=t(6),s=t(7),u=t(29),l=t(12),d=t(13),f=t(0),p=t.n(f),h=t(64),_=t.n(h),v=t(5),m=t(26),y=t.n(m),w=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(e,r){var s,l,d;if(Object(c.a)(this,t),s=n.call(this),l=Object(u.a)(s),s._handleMessage=function(e){if(s._injectedProvider&&e.source===window||e.origin===s._providerUrl.origin&&e.source===s._popup)if("connected"===e.data.method){var n=new v.PublicKey(e.data.params.publicKey);s._publicKey&&s._publicKey.equals(n)||(s._publicKey&&!s._publicKey.equals(n)&&s._handleDisconnect(),s._publicKey=n,s._autoApprove=!!e.data.params.autoApprove,s.emit("connect",s._publicKey))}else if("disconnected"===e.data.method)s._handleDisconnect();else if((e.data.result||e.data.error)&&s._responsePromises.has(e.data.id)){var t=s._responsePromises.get(e.data.id),r=Object(a.a)(t,2),o=r[0],i=r[1];e.data.result?o(e.data.result):i(new Error(e.data.error))}},s._handleConnect=function(){return s._handlerAdded||(s._handlerAdded=!0,window.addEventListener("message",s._handleMessage),window.addEventListener("beforeunload",s.disconnect)),s._injectedProvider?new Promise((function(e){s._sendRequest("connect",{}),e()})):(window.name="parent",s._popup=window.open(s._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((function(e){s.once("connect",e)})))},s._handleDisconnect=function(){s._handlerAdded&&(s._handlerAdded=!1,window.removeEventListener("message",s._handleMessage),window.removeEventListener("beforeunload",s.disconnect)),s._publicKey&&(s._publicKey=null,s.emit("disconnect")),s._responsePromises.forEach((function(e,n){var t=Object(a.a)(e,2),r=(t[0],t[1]);s._responsePromises.delete(n),r("Wallet disconnected")}))},s._sendRequest=function(){var e=Object(i.a)(p.a.mark((function e(n,t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("connect"===n||l.connected){e.next=2;break}throw new Error("Wallet not connected");case 2:return r=l._nextRequestId,++l._nextRequestId,e.abrupt("return",new Promise((function(e,i){l._responsePromises.set(r,[e,i]),l._injectedProvider?l._injectedProvider.postMessage({jsonrpc:"2.0",id:r,method:n,params:Object(o.a)({network:l._network},t)}):(l._popup.postMessage({jsonrpc:"2.0",id:r,method:n,params:t},l._providerUrl.origin),l.autoApprove||l._popup.focus())})));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s.connect=function(){return s._popup&&s._popup.close(),s._handleConnect()},s.disconnect=Object(i.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l._injectedProvider){e.next=3;break}return e.next=3,l._sendRequest("disconnect",{});case 3:l._popup&&l._popup.close(),l._handleDisconnect();case 5:case"end":return e.stop()}}),e)}))),s.sign=function(){var e=Object(i.a)(p.a.mark((function e(n,t){var r,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n instanceof Uint8Array){e.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return e.next=4,l._sendRequest("sign",{data:n,display:t});case 4:return r=e.sent,o=y.a.decode(r.signature),i=new v.PublicKey(r.publicKey),e.abrupt("return",{signature:o,publicKey:i});case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s.signTransaction=function(){var e=Object(i.a)(p.a.mark((function e(n){var t,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l._sendRequest("signTransaction",{message:y.a.encode(n.serializeMessage())});case 2:return t=e.sent,r=y.a.decode(t.signature),o=new v.PublicKey(t.publicKey),n.addSignature(o,r),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s.signAllTransactions=function(){var e=Object(i.a)(p.a.mark((function e(n){var t,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l._sendRequest("signAllTransactions",{messages:n.map((function(e){return y.a.encode(e.serializeMessage())}))});case 2:return t=e.sent,r=t.signatures.map((function(e){return y.a.decode(e)})),o=new v.PublicKey(t.publicKey),n=n.map((function(e,n){return e.addSignature(o,r[n]),e})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),function(e){return"object"===typeof e&&null!==e}(d=e)&&function(e){return"function"===typeof e}(d.postMessage))s._injectedProvider=e;else{if(!function(e){return"string"===typeof e}(e))throw new Error("provider parameter must be an injected provider or a URL string.");s._providerUrl=new URL(e),s._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:r}).toString()}return s._network=r,s._publicKey=null,s._autoApprove=!1,s._popup=null,s._handlerAdded=!1,s._nextRequestId=1,s._responsePromises=new Map,s}return Object(s.a)(t,[{key:"publicKey",get:function(){return this._publicKey}},{key:"connected",get:function(){return null!==this._publicKey}},{key:"autoApprove",get:function(){return this._autoApprove}}]),t}(_.a);var b=w,g=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),j=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},x=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},P=function(e){function n(n,t,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._sendRequest=function(e,n){return j(o,void 0,void 0,(function(){return x(this,(function(t){switch(t.label){case 0:return this._instance.sendRequest?[4,this._instance.sendRequest(e,n)]:[3,2];case 1:case 3:return[2,t.sent()];case 2:return this._instance._sendRequest?[4,this._instance._sendRequest(e,n)]:[3,4];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}}))}))},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=t,o._provider=r,o}return g(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return j(this,void 0,void 0,(function(){var e=this;return x(this,(function(n){switch(n.label){case 0:return this._instance=new b(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval((function(){var n,t;!1!==(null===(t=null===(n=e._instance)||void 0===n?void 0:n._popup)||void 0===t?void 0:t.closed)&&e._handleDisconnect()}),200),[4,this._instance.connect()];case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return j(this,void 0,void 0,(function(){return x(this,(function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return j(this,void 0,void 0,(function(){var n;return x(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransaction",{message:y.a.encode(e)})];case 1:return n=t.sent(),[2,y.a.decode(n.signature)]}}))}))},n.prototype.signAllTransactions=function(e){return j(this,void 0,void 0,(function(){return x(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactions",{messages:e.map((function(e){return y.a.encode(e)}))})];case 1:return[2,n.sent().signatures.map((function(e){return y.a.decode(e)}))]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),j(this,void 0,void 0,(function(){var t;return x(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(e,n)];case 1:return t=r.sent().signature,[2,Uint8Array.from(t)]}}))}))},n}(r.a);n.a=P}}]);
//# sourceMappingURL=3.69533979.chunk.js.map