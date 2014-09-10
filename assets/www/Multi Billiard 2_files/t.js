// audienceinsights.net is a web application providing tools of analysis and statistics based on anonymous data collection.
// This service is provided by the French group Adthink-Media [http://www.adthink-media.com/].
// For more information on our service and our privacy policy, please contact contact@audienceinsights.net.

(function(){window._pusq=window._pusq||[];
window.PUS=window.PUS||function(){function Y(){return{D:function(n){for(var e="",m=0;m<n.length;){var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(m++)),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(m++)),g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(m++)),k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(m++)),q=(l&15)<<4|g>>2,h=(g&3)<<6|
k,e=e+String.fromCharCode(p<<2|l>>4);64!=g&&(e+=String.fromCharCode(q));64!=k&&(e+=String.fromCharCode(h))}return e}}}function V(){return{C:function(n){function e(p,e){var g=(p&65535)+(e&65535);return(p>>16)+(e>>16)+(g>>16)<<16|g&65535}function m(e,l){return e>>>l|e<<32-l}return function(e){for(var l="",g=0;g<4*e.length;g++)l+="0123456789abcdef".charAt(e[g>>2]>>8*(3-g%4)+4&15)+"0123456789abcdef".charAt(e[g>>2]>>8*(3-g%4)&15);return l}(function(p,l){var g=[1116352408,1899447441,3049323471,3921009573,
961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],k=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],q=Array(64),h,n,y,H,w,z,D,B,t,x;p[l>>5]|=128<<24-l%32;p[(l+64>>9<<4)+15]=l;for(var u=0;u<p.length;u+=16){h=k[0];n=k[1];y=k[2];H=k[3];w=k[4];z=k[5];D=k[6];B=k[7];for(var f=0;64>f;f++)16>f?t=p[f+u]:(t=q[f-15],x=q[f-2],t=e(e(e(m(x,17)^m(x,19)^x>>>10,q[f-7]),m(t,7)^m(t,18)^
t>>>3),q[f-16])),q[f]=t,t=e(e(e(e(B,m(w,6)^m(w,11)^m(w,25)),w&z^~w&D),g[f]),q[f]),x=e(m(h,2)^m(h,13)^m(h,22),h&n^h&y^n&y),B=D,D=z,z=w,w=e(H,t),H=y,y=n,n=h,h=e(t,x);k[0]=e(h,k[0]);k[1]=e(n,k[1]);k[2]=e(y,k[2]);k[3]=e(H,k[3]);k[4]=e(w,k[4]);k[5]=e(z,k[5]);k[6]=e(D,k[6]);k[7]=e(B,k[7])}return k}(function(e){for(var l=[],g=0;g<8*e.length;g+=8)l[g>>5]|=(e.charCodeAt(g/8)&255)<<24-g%32;return l}(n),8*n.length))}}}function L(){return{D:function(n){var e=[];n=n.split("&");for(var m=0;m<n.length;m++){var p=
n[m],l=p.indexOf("="),g;-1<l?(g=decodeURIComponent(p.substring(0,l)),p=decodeURIComponent(p.substring(l+1))):(g=decodeURIComponent(p),p=!0);for(var k=g,q=e;-1!=(l=g.indexOf("."));)k=g.substring(0,l),"object"!=typeof q[k]&&(q[k]=[]),q=q[k],g=g.substring(l+1);"undefined"==typeof q[g]?q[g]=p:"object"==typeof q[g]?q[g].push(p):q[g]=[q[g],p]}return e},C:function(n,e){var m="",p;for(p in n)if(n.hasOwnProperty(p)&&"$"!=p.charAt(0)){var l;l=e?e+"."+encodeURIComponent(p):encodeURI(p);var g=n[p];if("object"==
typeof g){var k=!0,q;for(q in g)if(g.hasOwnProperty(q)&&"$"!=q.charAt(0)&&q!=parseInt(q,10)){k=!1;break}if(!k){m+=L().C(g,l);continue}if("function"==typeof g.join&&"function"==typeof g.forEach){g.forEach(encodeURIComponent);m+="&"+l+"="+g.join("|").replace(/^\|+/g,"").replace(/\|+$/g,"");continue}}"function"!=typeof g&&(m+="&"+l+"="+encodeURIComponent(g))}return m}}}function P(){for(var n=0;n<arguments.length;n++){var e=arguments[n];if(e.shift){var m=e.shift();E[m].apply(E,e)}}}var E=function(){function n(){}
function e(){}function m(a,b){var c={};if("object"!=typeof a)try{a=L().D(Y().D(a))}catch(d){n("Impossible de d\u00e9coder les donn\u00e9es pass\u00e9es")}if("undefined"==typeof b)return a;for(var e in a)if(a.hasOwnProperty(e))if(b[e]){var f=a[e];if("function"==typeof b[e][1])if(b[e][1](f))if("function"==typeof b[e][2])b[e][2](f,c);else c[b[e][0]]=f;else n("["+e+"] Value '"+f+"' doesn't match the expected type.");else c[b[e][0]]=m(f,b[e][1])}else n("["+e+"] Unknown key '"+e+"'.");return c}function p(a){var b=
!1,c=r.a,d;for(d in c)c.hasOwnProperty(d)&&!I[d]&&(c[d].l(),I[d]=!1,b=!0);b?(G=setTimeout(l,2E3),e=a):a()}function l(a){var b=!0;if(a){I[a]=!0;for(var c in I)if(I.hasOwnProperty(c)&&!I[c]){b=!1;break}}b&&(W=!0,clearTimeout(G),e())}function g(){var a=[],b=r.s,c;a:for(c in b)if(b.hasOwnProperty(c)){var d=b[c].r();if(d&&"string"==typeof d){for(var e in a)if(a.hasOwnProperty(e)&&d==a[e])continue a;a.push(d)}}return a}function k(a){if(W)q(a);else{var b=r.s,c;for(c in b)b.hasOwnProperty(c)&&b[c].w(a)}}
function q(a){for(var b in r)if(r.hasOwnProperty(b))for(var c in r[b])r[b].hasOwnProperty(c)&&r[b][c].w(a)}function h(a){var b;b||(b=1);C[a]=a in C?C[a]+b:b}function E(){var a="",b;for(b in C)C.hasOwnProperty(b)&&"number"==typeof C[b]&&(a+="&metrics[]="+b+":"+C[b]+"|c");for(b in J)J.hasOwnProperty(b)&&"number"==typeof J[b]&&(a+="&metrics[]="+b+":"+J[b]+"|ms");C=[];J=[];return a}function y(a){a=a.match(P);if(null!=a&&1<a.length){a=a[1];var b=a.match(Z);if(null!=b&&0<b.length)return a.replace(/^\s+|\s+$/g,
"")}return null}function H(){function a(){return window.ActiveXObject?c("ShockwaveFlash.ShockwaveFlash;AcroPDF.PDF;PDF.PdfCtrl;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);RealPlayer;SWCtl.SWCtl;WMPlayer.OCX;AgControl.AgControl;Skype.Detection".split(";"),function(a){try{return new ActiveXObject(a),a}catch(b){return null}}).join(";"):""}function b(){return c(navigator.plugins,function(a){var b=
c(a,function(a){return[a.type,a.suffixes].join("~")}).join(",");return[a.name,a.description,b].join("::")}).join(";")}function c(a,b){var c=[];if(null==a)return c;for(var d in a)a.hasOwnProperty(d)&&(c[c.length]=b.call(this,a[d]));return c}function d(){var a=document.createElement("canvas"),b=a.getContext("2d");b.textBaseline="top";b.font="14px 'Arial'";b.textBaseline="alphabetic";b.fillStyle="#f60";b.fillRect(125,1,62,20);b.fillStyle="#069";b.fillText("Buvez de ce whisky que le patron juge fameux",
2,15);b.fillStyle="rgba(102, 204, 0, 0.7)";b.fillText("Buvez de ce whisky que le patron juge fameux",4,17);return a.toDataURL()}var e=[];e.push(navigator.userAgent);e.push(navigator.language);e.push(screen.colorDepth);"undefined"!==typeof[screen.height,screen.width]&&e.push([screen.height,screen.width].join("x"));e.push((new Date).getTimezoneOffset());var f;try{f=!!window.sessionStorage}catch(g){f=!0}e.push(f);var h;try{h=!!window.localStorage}catch(k){h=!0}e.push(h);e.push(!!window.indexedDB);document.body?
e.push(typeof document.body.addBehavior):e.push("undefined");e.push(typeof window.openDatabase);e.push(navigator.cpuClass);e.push(navigator.platform);e.push(navigator.doNotTrack);e.push("Microsoft Internet Explorer"===navigator.appName||"Netscape"===navigator.appName&&/Trident/.test(navigator.userAgent)?a():b());(function(){var a=document.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))})()&&e.push(d());return V().C(e.join("###"))}function w(){function a(a){for(var c in a)a.hasOwnProperty(c)&&
"string"==typeof a[c]&&(s+="&idv[]="+a[c]);s+=E();z()}s="idp="+u+L().C(f);v&&a([v]);a(g())}function z(){var a,b;for(b in Q)if(Q.hasOwnProperty(b)&&(!a||b==a)){a=null;try{Q[b](t,s);break}catch(c){}}}function D(a){if(a.idv){v=a.idv;if(a.flag){var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.defer=!0;b.appendChild(document.createTextNode(a.flag));var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}a.cs&&(R=a.cs);a.gen?(a.old&&(r.a.old={r:function(){h("op_old.read");
return window._pusOldIdv},w:function(){},c:function(){},l:function(){h("op_old.loaded");window._pusOldIdv=null;var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.defer=!0;b.src=a.old+"?f=js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)},ok:function(){h("op_old.ready");l("old")}}),p(function(){if(!(3<M)){var a=[],b;for(b in r)if(r.hasOwnProperty(b)){var c;a:for(c in r[b]){var d=r[b][c].r();if(d&&"string"==typeof d){for(c in a)if(a.hasOwnProperty(c)&&
d==a[c])continue a;a.push(d)}}}s="idp="+u+"&nbp="+M;v&&(s+="&idv="+v);for(var e in a)a.hasOwnProperty(e)&&"string"==typeof a[e]&&(s+="&idv[]="+a[e]);a.length?(s+=E(),z()):q(v)}})):a.op?p(function(){q(v)}):k(v);for(var d in K)if(K.hasOwnProperty(d)&&"function"==typeof K[d])K[d](v);K=[];"tracker"in N&&(J["tracker.idvRetrieve"]=((new Date).getTime()-N.tracker)/1E3,delete N.tracker);R&&(b=document.createElement("script"),b.type="text/javascript",b.async=!0,b.defer=!0,b.src=R+"?i="+v,c=document.getElementsByTagName("script")[0],
c.parentNode.insertBefore(b,c))}M++}function B(){if(null!=G){F*=1.5;try{setTimeout(B.bind(this),F)}catch(a){}}else{var b=E();if(0<b.length){s="idp="+u+"&nbp="+M;v&&(s+="&idv="+v);s+=b;z();F*=1.5;try{setTimeout(B.bind(this),F)}catch(c){}}}}var t="",x="",u="",f={},s="",v,M=0,I={},G=null,W=!1,R=null,S=null,T=null,C={},J={},N={},F=1E3,O={},A={},U=RegExp("^([0-9]{2,4})-([0][0-9]|1[0-2])-([0-2][0-9]|3[0-1])( ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))?$","i"),P=RegExp("(?:(?:(?:www.nicovideo.jp/search/)|(?:www.lespac.com/(?:[^/]+)/)|(?:.kelkoo.[a-z]+/k?ss-)| (?:.kelkoo.[a-z]+/v-[a-z0-9]+]-)| (?:recherche.lefigaro.fr/recherche/recherche.php\\?ecrivez=)|(?:(?:[^.]+.)?search.yahoo.com/search;(?:.+)?p=)|(?:www.wikio.[^/]+.+/s/)|(?:(?:[?&](?:q|k|qw|search|query|searchquery|oq|rdata|utm_term|gsc.q|s|search_query|_nkw|wd|kw|text|keywords|keyword|fulltext|field-keywords|recherche|tag|searchfor|SearchText|swords|searchword))=)))([^&/?]+)",
"i"),Z=/([^0-9-_+ ]{3,})/i,X=!1,K=[],d={g:function(a){return a==parseInt(a,10)||"object"==typeof a&&2==a.length&&a[0]==parseInt(a[0],10)&&a[1]==parseInt(a[1],10)?!0:!1},G:function(a){return a==parseFloat(a)||"object"==typeof a&&2==a.length&&a[0]==parseFloat(a[0])&&a[1]==parseFloat(a[1])?!0:!1},B:function(){return function(a){return a in{y:1,n:1}}},q:function(a){a instanceof Date&&(a=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDay()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds());if(a.match(U)||
"object"==typeof a&&2==a.length&&(a[0]instanceof Date&&(a[0]=a[0].getFullYear()+"-"+(a[0].getMonth()+1)+"-"+a[0].getDay()+" "+a[0].getHours()+":"+a[0].getMinutes()+":"+a[0].getSeconds()),a[1]instanceof Date&&(a[1]=a[1].getFullYear()+"-"+(a[1].getMonth()+1)+"-"+a[1].getDay()+" "+a[1].getHours()+":"+a[1].getMinutes()+":"+a[1].getSeconds()),a[0].match(U)&&a[1].match(U)))return!0},h:function(a){return"string"==typeof a},multiple:function(a){return function(b){var c=!0;if("object"==typeof b)for(var d in b)b.hasOwnProperty(d)&&
(c&=a(b[d]));c&&"object"==typeof b||(c=a(b));return c}}},$={interests:["i",d.multiple(d.h)],person:["p",{birthdate:["b",d.q],age:["ag",d.g,function(a,b){var c=new Date;c.setFullYear(c.getFullYear()-a);b.H=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDay()+" "+c.getHours()+":"+c.getMinutes()+":"+c.getSeconds()}],gender:["g",function(a){return a in{m:1,f:1}}],nationality:["n",d.multiple(d.h)],language:["l",d.multiple(d.h)],appearance:["a",{height:["h",d.g],weight:["w",d.g],bmi:["b",d.G],hair_color:["hc",
function(a){return a in{black:1,brown:1,blond:1,auburn:1,chestnut:1,red:1,gray:1,white:1}}],eye_color:["ec",function(a){return a in{amber:1,blue:1,brown:1,grey:1,green:1}}]}]}],location:["l",{postcode:["p",d.h],town:["t",d.h],state:["s",d.h],country:["c",d.h]}],household:["h",{income:["i",d.g],relationship:["r",{status:["s",function(a){return a in{single:1,in_relationship:1,engaged:1,married:1,civil_union:1,divorced:1,widowed:1}}],seek_for_gender:["g",d.multiple(function(a){return a in{m:1,f:1,transman:1,
transwoman:1,couple:1}})],seek_for_min_age:["min",d.g],seek_for_max_age:["max",d.g]}],children:["c",d.g],pets:["p",{cats:["c",d.g],dogs:["d",d.g],other:["o",d.multiple(d.h)]}]}],work:["w",{education:["e",function(a){return a in{uneducated:1,elementary:1,"high school":1,bachelor:1,master:1,doctorate:1}}],occupation:["o",d.h],position:["p",d.h],category:["c",d.h],industry:["i",d.h],net_income:["n",d.g],raw_income:["r",d.g]}],consumption:["c",{loan:["l",{type:["t",function(a){return a in{student:1,vehicle:1,
home:1,personal:1,cash:1,home_improvement:1,business:1,consolidation:1}}],amount:["a",d.g],duration:["d",d.g],overindebted:["o",d.B]}],insurance:["i",{type:["t",function(a){return a in{car:1,motorbike:1,home:1,pet:1,health:1,life:1}}]}],card_risk:["cr",function(a){return a in{chargeback:1,fraud_attempt:1}}],last_payment:["lp",d.q],has_car:["hc",{make:["ma",d.h],model:["mo",d.h],type:["t",function(a){return a in{sedan:1,compact:1,estate:1,van:1,suv:1,roadster:1,convertible:1,coupe:1}}],registration:["r",
d.q],model_year:["my",d.g],fuel_type:["ft",function(a){return a in{diesel:1,petrol:1,hybrid:1,electric:1,other:1}}]}],want_car:["hc",{make:["ma",d.h],model:["mo",d.h],type:["t",function(a){return a in{sedan:1,compact:1,estate:1,van:1,suv:1,roadster:1,convertible:1,coupe:1}}],registration_starting_from:["r",d.q],min_price:["mip",d.g],max_price:["map",d.g],min_mileage:["mim",d.g],max_mileage:["mam",d.g],min_power:["mipo",d.g],max_power:["mapo",d.g],fuel_type:["ft",function(a){return a in{diesel:1,petrol:1,
hybrid:1,electric:1,other:1}}]}],has_home:["hh",{ownership:["o",function(a){return a in{own:1,rent:1}}],type:["t",function(a){return a in{house:1,apartment:1,loft:1,condo:1,townhome:1,lot:1,parking:1,office:1}}],rooms:["r",d.g],size:["s",d.g]}],want_home:["wh",{ownership:["o",function(a){return a in{buy:1,rent:1}}],type:["t",function(a){return a in{house:1,apartment:1,loft:1,condo:1,townhome:1,lot:1,parking:1,office:1}}],rooms_min:["rmi",d.g],rooms_max:["rma",d.g],beds_min:["bmi",d.g],beds_max:["bma",
d.g],size_min:["smi",d.g],size_max:["sma",d.g],budget_min:["bumi",d.g],budget_max:["buma",d.g]}],tobacco:["t",d.B],alcohol:["a",d.B],travel:["tr",{type:["ty",function(a){return a in{"return":1,"one-way":1}}],from:["f",d.h],to:["t",d.h],departure:["d",d.q],"return":["r",d.q],adults:["a",d.g],seniors:["s",d.g],children:["c",d.g],infants:["i",d.g],direct:["di",d.B],main_airports:["ma",d.B],"class":["cl",function(a){return a in{economy:1,"premium economy":1,business:1,first:1}}],hotel_rooms:["hr",d.g],
property_type:["cl",function(a){return a in{hotel:1,hostel:1,apartment:1,"guest house":1,bnb:1,home:1}}],car_hire_driver_age:["da",d.g]}]}]},aa={email:["e",d.h],"facebook-numericid":["fni",d.h],"facebook-name":["fn",d.h],twitter:["t",d.h],"google+":["g",d.h]},Q={js:function(a,b){var c=document.createElement("script");c.type="text/javascript";c.async=!0;c.defer=!0;c.src=a+"?f=js&"+b;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)},img:function(a,b){(new Image(1,1)).src=
a+"?f=gif&"+b},xhr:function(a,b){var c=!1;window.XDomainRequest?c=new window.XDomainRequest:window.XMLHttpRequest&&(c=new window.XMLHttpRequest);if(!c)throw"e";c.open("POST",a,!0);c.onreadystatechange=function(){4===c.readyState&&200==c.status&&window.PUS.getTracker().setRawResponse(c.responseText)};if(!("withCredentials"in c))throw"e";c.withCredentials=!0;c.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");c.send("f=qs&"+b)}},r={s:{wn:{j:!1,r:function(){var a=window.name;
if(null!=a&&0===a.indexOf("PUS"))return a=a.substr(3),h("op_wn.read"),a;h("op_wn.failed")},w:function(a){this.j||(h("op_wn.wrote"),window.name="PUS"+a,this.j=!0)},c:function(){h("op_wn.clean");window.name=""}},cook:{j:!1,r:function(){var a=document.cookie.split(";"),b;for(b in a)if(a.hasOwnProperty(b)){var c=a[b];if("string"==typeof c){var d=c.indexOf("=");if("pus-idv"==c.substr(0,d).replace(/^\s+|\s+$/g,""))return a=unescape(c.substr(d+1)),h("op_cookie.read"),a}}h("op_cookie.failed")},w:function(a){if(!this.j){h("op_cookie.wrote");
var b=new Date;b.setFullYear(b.getFullYear()+10);document.cookie="pus-idv="+escape(a)+";expires="+b.toUTCString()+";path=/";this.j=!0}},c:function(){h("op_cookie.cleaned");var a=new Date;a.setFullYear(a.getFullYear()-1);document.cookie="pus-idv=;expires="+a.toUTCString()+";path=/"}}},a:{},a:{swf:{j:!1,r:function(){var a=document.getElementById("pus_swf_object");if("undefined"==typeof a||"function"!=typeof a.read)a=document.getElementById("pus_swf_object2");if("undefined"!=typeof a&&"function"==typeof a.read&&
(a=a.read(),null!=a))return h("op_swf.read"),a;h("op_swf.read_failed")},w:function(a){if(!this.j){var b=document.getElementById("pus_swf_object");if("undefined"==typeof b||"function"!=typeof b.write)b=document.getElementById("pus_swf_object2");"undefined"==typeof b||"function"!=typeof b.write?h("op_swf.wrote_failed"):(h("op_swf.wrote"),b.write(a),this.j=!0)}},c:function(){var a=document.getElementById("pus_swf_object");if("undefined"==typeof a||"function"!=typeof a.clean)a=document.getElementById("pus_swf_object2");
"undefined"==typeof a||"function"!=typeof a.clean?h("op_swf.cleaned_failed"):(h("op_swf.cleaned"),a.clean())},l:function(){h("op_swf.loaded");var a=x+"op.swf",a='<div style="position:absolute; top:-1789px; left:-1789px; height:1px; width:1px;"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="pus_swf_object" width="1" height="1"><param name="id" value="pus_swf_object"><param name="movie" value="'+a+'" /><param name="play" value="true" /><param name="allowScriptAccess" value="always" /><param name="FlashVars" value="pusCookieName=pus" />\x3c!--[if !IE]>--\x3e<object type="application/x-shockwave-flash" id="pus_swf_object2" data="'+
a+'" width="1" height="1"><param name="id" value="pus_swf_object2"><param name="movie" value="'+a+'" /><param name="play" value="true" /><param name="allowScriptAccess" value="always" /><param name="FlashVars" value="pusCookieName=pus" /></object>\x3c!--<![endif]--\x3e</object></div>',b=document.createElement("div"),c=document.getElementsByTagName("body")[0];c||(c=document.documentElement);b.innerHTML=a;c.appendChild(b)},ok:function(){setTimeout(function(){h("op_swf.ready");l("swf")},50)}},lso:{j:!1,
A:null,r:function(){this.A?h("op_lso.read"):h("op_lso.read_failed");return this.A},w:function(a){if(!this.j){var b=document.getElementById("pus_lso_iframe").contentWindow;null==b?h("op_lso.wrote_failed"):(this.A=a,b.postMessage({action:"write",param:this.A},"*"),h("op_lso.wrote"),this.j=!0)}},c:function(){var a=document.getElementById("pus_lso_iframe").contentWindow;null==a?h("op_lso.cleaned_failed"):(this.A=null,a.postMessage({action:"clean"},"*"),h("op_lso.cleaned"))},l:function(){h("op_lso.loaded");
var a=document.createElement("iframe");a.src=x+"lso.html";a.id="pus_lso_iframe";a.name="pus_lso_iframe";a.height="1px";a.width="1px";a.style.position="absolute";a.style.top="-42px";a.style.left="-42px";var b=document.getElementsByTagName("body")[0];b||(b=document.documentElement);b.appendChild(a);window.addEventListener?window.addEventListener("message",this.F,!1):window.attachEvent("onmessage",this.F)},F:function(a){-1!=a.data.indexOf("pus-idv-")&&(this.A=a.data.replace("pus-idv-",""),h("op_lso.ready"),
l("lso"))}}}};N.tracker=(new Date).getTime();(function(){f.n={};f.n.s={};try{f.n.s.r=screen.width+"x"+screen.height,"undefined"!=typeof screen.pixelDepth&&(f.n.s.d=screen.pixelDepth),f.n.s.p=navigator.platform}catch(a){}f.n.b={};try{f.n.b.a=navigator.userAgent,"undefined"!=typeof navigator.language&&(f.n.b.l=navigator.language)}catch(b){}try{f.n.b.m=[];for(var c in navigator.mimeTypes)navigator.mimeTypes.hasOwnProperty(c)&&"undefined"!==typeof navigator.mimeTypes[c].type&&f.n.b.m.push(navigator.mimeTypes[c].type)}catch(d){}try{"boolean"===
typeof navigator.cookieEnabled&&(f.n.b.c=+navigator.cookieEnabled)}catch(e){}f.n.b.f={};try{f.n.b.f.v=H()}catch(g){}f.n.v={};try{f.n.v.u=document.location.href,f.n.v.t=(new Date).getTime()}catch(h){}c="";try{c=window.top.document.referrer}catch(k){}if(""===c)try{c=window.parent.document.referrer}catch(l){}if(""===c)try{c=document.referrer}catch(m){}""!=c&&(f.n.v.r=c);try{"string"==typeof document.title&&(f.n.v.ti=document.title)}catch(n){}try{if(window.opener){f.n.v.p={};f.n.v.p.i=1;f.n.v.p.u=window.opener.document.location.href;
try{f.n.v.r=window.opener.document.referrer}catch(p){}window.opener.closed||(f.n.v.p.o=1)}}catch(q){}try{top.location!=window.location&&(f.n.v.i={},f.n.v.i.i=1,"string"==typeof top.location.href&&(f.n.v.i.u=top.location.href))}catch(s){}if(!X){c=[];if("string"==typeof f.n.v.r){var r=y(f.n.v.r);null!=r&&c.push(r)}"string"==typeof f.n.v.u&&(r=y(f.n.v.u),null!=r&&c.push(r));0<c.length&&(f.n.v.k=c)}S&&(f.n.v.c.u=S);T&&(f.n.v.c.ot=T)})();try{setTimeout(B.bind(this),F)}catch(ba){}return{setTrackerUrl:function(a){t=
a},setTrackerStaticUrl:function(a){x=a},setIdp:function(a){u=a},setSiteUnderIdp:function(a){window.opener&&(u=a)},setRawResponse:function(a){D(L().D(a))},setVisitorData:function(a){a=m(a,$);for(var b in a)if(a.hasOwnProperty(b)){f.v=a;break}},setCustomData:function(a){f.c=m(a)},setNetworkLink:function(a,b){""==u&&(u=a+"|"+b)},send:function(){for(var a in O)if(O.hasOwnProperty(a)){f.xi=m(O,aa);break}for(a in A)if(A.hasOwnProperty(a)){f.e=[];f.e[u]=A;break}h("hit.attempted");try{w()}catch(b){var c=
document.createElement("script");c.type="text/javascript";c.async=!0;c.defer=!0;c.src=t.replace(/p$/,"e")+"?f=js";for(a in b)b.hasOwnProperty(a)&&"string"==typeof b[a]&&(c.src+="&"+a+"="+b[a]);a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)}},setNr:function(){},setNk:function(a){X=a},onIdvRetrieve:function(a){K.push(a)},onError:function(a){n=a},clean:function(){},getOp:function(a){return r.a[a]||r.s[a]},setProviderId:function(){},setExternalId:function(a,b){this.setHashedExternalId(a,
V().C(b))},setHashedExternalId:function(a,b){O[a]=b},trackClick:function(a,b){S=a;b&&(b in{ad:1,email:1}?T=b:n("[n.v.c.ot] Value '"+b+"' doesn't match the expected type."))},trackEvent:function(a,b,c){b||(b=0);c||(c="USD");a in A?A[a][c]=c in A[a]?A[a][c]+b:b:(A[a]=[],A[a][c]=b)}}}(),G=0;for(;G<window._pusq.length;G++)P(window._pusq[G]);return{getTracker:function(){return E},debug:function(){}}}();})();
