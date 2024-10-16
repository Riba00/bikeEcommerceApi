import{ga as m,h as z,l as o,k as D,i as P}from"./strapi-60hOZl5W.js";var F={exports:{}};(function(e){function r(t){return t&&t.__esModule?t:{default:t}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(F);var y=F.exports,h={exports:{}};(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;function t(n){if(n===null||n===!0||n===!1)return NaN;var a=Number(n);return isNaN(a)?a:a<0?Math.ceil(a):Math.floor(a)}e.exports=r.default})(h,h.exports);var Z=h.exports;const L=m(Z);var M={exports:{}};(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;function t(n){var a=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return a.setUTCFullYear(n.getFullYear()),n.getTime()-a.getTime()}e.exports=r.default})(M,M.exports);var R=M.exports;const _=m(R);function W(e,r){var t=V(r);return t.formatToParts?G(t,e):J(t,e)}var k={year:0,month:1,day:2,hour:3,minute:4,second:5};function G(e,r){try{for(var t=e.formatToParts(r),n=[],a=0;a<t.length;a++){var i=k[t[a].type];i>=0&&(n[i]=parseInt(t[a].value,10))}return n}catch(u){if(u instanceof RangeError)return[NaN];throw u}}function J(e,r){var t=e.format(r),n=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t);return[n[3],n[1],n[2],n[4],n[5],n[6]]}var p={};function V(e){if(!p[e]){var r=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),t=r==="06/25/2014, 00:00:00"||r==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";p[e]=t?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return p[e]}function x(e,r,t,n,a,i,u){var s=new Date(0);return s.setUTCFullYear(e,r,t),s.setUTCHours(n,a,i,u),s}var H=36e5,B=6e4,T={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function A(e,r,t){var n,a;if(!e||(n=T.timezoneZ.exec(e),n))return 0;var i;if(n=T.timezoneHH.exec(e),n)return i=parseInt(n[1],10),O(i)?-(i*H):NaN;if(n=T.timezoneHHMM.exec(e),n){i=parseInt(n[2],10);var u=parseInt(n[3],10);return O(i,u)?(a=Math.abs(i)*H+u*B,n[1]==="+"?-a:a):NaN}if(X(e)){r=new Date(r||Date.now());var s=t?r:K(r),f=g(s,e),c=t?f:Q(r,f,e);return-c}return NaN}function K(e){return x(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}function g(e,r){var t=W(e,r),n=x(t[0],t[1]-1,t[2],t[3]%24,t[4],t[5],0).getTime(),a=e.getTime(),i=a%1e3;return a-=i>=0?i:1e3+i,n-a}function Q(e,r,t){var n=e.getTime(),a=n-r,i=g(new Date(a),t);if(r===i)return r;a-=i-r;var u=g(new Date(a),t);return i===u?i:Math.max(i,u)}function O(e,r){return-23<=e&&e<=23&&(r==null||0<=r&&r<=59)}var b={};function X(e){if(b[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),b[e]=!0,!0}catch{return!1}}var q=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,N=36e5,$=6e4,ee=2,l={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:q};function C(e,r){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(e===null)return new Date(NaN);var t=r||{},n=t.additionalDigits==null?ee:L(t.additionalDigits);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]")return new Date(e.getTime());if(typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]")return new Date(e);if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var a=re(e),i=te(a.date,n),u=i.year,s=i.restDateString,f=ne(s,u);if(isNaN(f))return new Date(NaN);if(f){var c=f.getTime(),v=0,d;if(a.time&&(v=ae(a.time),isNaN(v)))return new Date(NaN);if(a.timeZone||t.timeZone){if(d=A(a.timeZone||t.timeZone,new Date(c+v)),isNaN(d))return new Date(NaN)}else d=_(new Date(c+v)),d=_(new Date(c+v+d));return new Date(c+v+d)}else return new Date(NaN)}function re(e){var r={},t=l.dateTimePattern.exec(e),n;if(t?(r.date=t[1],n=t[3]):(t=l.datePattern.exec(e),t?(r.date=t[1],n=t[2]):(r.date=null,n=e)),n){var a=l.timeZone.exec(n);a?(r.time=n.replace(a[1],""),r.timeZone=a[1].trim()):r.time=n}return r}function te(e,r){var t=l.YYY[r],n=l.YYYYY[r],a;if(a=l.YYYY.exec(e)||n.exec(e),a){var i=a[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(a=l.YY.exec(e)||t.exec(e),a){var u=a[1];return{year:parseInt(u,10)*100,restDateString:e.slice(u.length)}}return{year:null}}function ne(e,r){if(r===null)return null;var t,n,a,i;if(e.length===0)return n=new Date(0),n.setUTCFullYear(r),n;if(t=l.MM.exec(e),t)return n=new Date(0),a=parseInt(t[1],10)-1,E(r,a)?(n.setUTCFullYear(r,a),n):new Date(NaN);if(t=l.DDD.exec(e),t){n=new Date(0);var u=parseInt(t[1],10);return le(r,u)?(n.setUTCFullYear(r,0,u),n):new Date(NaN)}if(t=l.MMDD.exec(e),t){n=new Date(0),a=parseInt(t[1],10)-1;var s=parseInt(t[2],10);return E(r,a,s)?(n.setUTCFullYear(r,a,s),n):new Date(NaN)}if(t=l.Www.exec(e),t)return i=parseInt(t[1],10)-1,S(r,i)?U(r,i):new Date(NaN);if(t=l.WwwD.exec(e),t){i=parseInt(t[1],10)-1;var f=parseInt(t[2],10)-1;return S(r,i,f)?U(r,i,f):new Date(NaN)}return null}function ae(e){var r,t,n;if(r=l.HH.exec(e),r)return t=parseFloat(r[1].replace(",",".")),w(t)?t%24*N:NaN;if(r=l.HHMM.exec(e),r)return t=parseInt(r[1],10),n=parseFloat(r[2].replace(",",".")),w(t,n)?t%24*N+n*$:NaN;if(r=l.HHMMSS.exec(e),r){t=parseInt(r[1],10),n=parseInt(r[2],10);var a=parseFloat(r[3].replace(",","."));return w(t,n,a)?t%24*N+n*$+a*1e3:NaN}return null}function U(e,r,t){r=r||0,t=t||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var a=n.getUTCDay()||7,i=r*7+t+1-a;return n.setUTCDate(n.getUTCDate()+i),n}var ie=[31,28,31,30,31,30,31,31,30,31,30,31],ue=[31,29,31,30,31,30,31,31,30,31,30,31];function j(e){return e%400===0||e%4===0&&e%100!==0}function E(e,r,t){if(r<0||r>11)return!1;if(t!=null){if(t<1)return!1;var n=j(e);if(n&&t>ue[r]||!n&&t>ie[r])return!1}return!0}function le(e,r){if(r<1)return!1;var t=j(e);return!(t&&r>366||!t&&r>365)}function S(e,r,t){return!(r<0||r>52||t!=null&&(t<0||t>6))}function w(e,r,t){return!(e!=null&&(e<0||e>=25)||r!=null&&(r<0||r>=60)||t!=null&&(t<0||t>=60))}var I={exports:{}},Y={exports:{}};(function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;function t(n,a){if(n==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i]);return n}e.exports=r.default})(Y,Y.exports);var oe=Y.exports;(function(e,r){var t=y.default;Object.defineProperty(r,"__esModule",{value:!0}),r.default=a;var n=t(oe);function a(i){return(0,n.default)({},i)}e.exports=r.default})(I,I.exports);var se=I.exports;const fe=m(se);function ce(e,r,t){if(typeof e=="string"&&!e.match(q)){var n=fe(t);return n.timeZone=r,C(e,n)}var a=C(e,t),i=x(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()).getTime(),u=A(r,new Date(i));return new Date(i+u)}const de=z().shape({name:o().trim().required(D.required.id).nullable(),scheduledAt:o().nullable(),isScheduled:P().optional(),time:o().when("isScheduled",{is:!0,then:o().trim().required(D.required.id),otherwise:o().nullable()}).test("time-in-future-if-today","content-releases.modal.form.time.has-passed",function(e){const{date:r,timezone:t}=this.parent;if(!r||!t||!e)return!0;const n=t.split("&")[1];return ce(`${r} ${e}`,n)>new Date}),timezone:o().when("isScheduled",{is:!0,then:o().required(D.required.id).nullable(),otherwise:o().nullable()}),date:o().when("isScheduled",{is:!0,then:o().required(D.required.id).nullable(),otherwise:o().nullable()})}).required().noUnknown(),De=z().shape({defaultTimezone:o().nullable().default(null)}).required().noUnknown();export{de as R,De as S,A as a,C as t,ce as z};
