(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{7330:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/community/[boardId]/edit",function(){return t(654)}])},654:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var r=t(5893),o=t(7719);function i(){return(0,r.jsx)(o.Z,{isEdit:!0})}},7719:function(n,e,t){"use strict";t.d(e,{Z:function(){return T}});var r=t(4051),o=t.n(r),i=t(5893),u=t(7066),a=t(7294),c=t(1163),s=t(2537);function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=d(['\n  position:relative;\n  width: 100%;\n  box-sizing: border-box;\n  background: url("/img/frame.png") no-repeat;\n  background-size:100% auto;\n  max-width: 440px;\n  min-height:860px;\n  margin:0 auto;\n  padding:120px 40px 0;\n']);return l=function(){return n},n}function f(){var n=d(["\n  display: block;\n  scrollbar-width: none;\n  display: block;\n  overflow: scroll;\n"]);return f=function(){return n},n}function p(){var n=d(["\n  font-size: 18px;\n  margin:20px 0 40px;\n"]);return p=function(){return n},n}function x(){var n=d(["\n  box-sizing: border-box;\n  border-radius: 4px;\n\n"]);return x=function(){return n},n}function h(){var n=d(["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 5px;\n"]);return h=function(){return n},n}function v(){var n=d(["\n  width:100%;\n  min-height: 100px;\n  resize: none;\n  box-sizing: border-box;\n  padding:10px;\n  border: 1px solid #ddd;\n"]);return v=function(){return n},n}function g(){var n=d(["\n  display: flex;\n      flex-direction: column;\n"]);return g=function(){return n},n}function b(){var n=d(["\n  width: 100%;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 16px;\n  padding: 10px 10px 10px 0;\n"]);return b=function(){return n},n}function w(){var n=d(["\n  width:100%;\n  background: transparent;\n  box-sizing: border-box;\n  border: 0;\n  color: #000;\n  border: 1px solid #ddd;\n  padding:10px;\n  &::placeholder {\n    color: #999;\n  }\n"]);return w=function(){return n},n}function j(){var n=d(["\n    position: absolute;\n    bottom: 70px;\n    width: calc(100% - 80px);\n    background: #ff1b6d;\n    color: #fff;\n    border:0;\n    border-radius: 4px;\n    padding: 15px;\n    margin-top: 80px;\n    font-weight: 600;\n    cursor: pointer;\n"]);return j=function(){return n},n}function m(){var n=d(["\n  position: absolute;\n  top: 86px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 50px;\n  height: 30px;\n  cursor: pointer;\n"]);return m=function(){return n},n}var _=s.Z.div(l()),k=s.Z.div(f()),E=s.Z.h1(p()),Z=s.Z.div(x()),y=s.Z.h4(h()),C=s.Z.textarea(v()),z=s.Z.div(g()),N=s.Z.select(b()),O=s.Z.input(w()),S=s.Z.button(j()),P=s.Z.a(m());function A(n,e,t,r,o,i,u){try{var a=n[i](u),c=a.value}catch(s){return void t(s)}a.done?e(c):Promise.resolve(c).then(r,o)}function T(n){var e=(0,a.useState)(""),t=e[0],r=e[1],s=(0,a.useState)(""),d=s[0],l=s[1],f=(0,a.useState)(""),p=f[0],x=f[1],h=(0,a.useState)(""),v=h[0],g=h[1],b=(0,a.useState)(""),w=b[0],j=b[1],m=(0,a.useState)("3fa85f64-5717-4562-b3fc-2c963f66afa6"),T=(m[0],m[1],(0,a.useState)("")),I=(T[0],T[1],(0,c.useRouter)()),R=function(n){var e=n.options,t=n.value,r=n.onChange;return(0,i.jsx)(N,{value:t,onChange:r,children:e.map((function(n){return(0,i.jsx)("option",{value:n.value,children:n.label},n.value)}))})},X=function(){var n,e=(n=o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.post("https://2595-175-197-73-179.ngrok-free.app/board/create/board",{category:w,title:p,guest_id:t,password:d,content:v});case 3:r=n.sent,console.log("\uc131\uacf5"),console.log(r),console.log(r.data,"data"),console.log(r.data.user_id,"data.user_id"),console.log(r.data.id,"data.id"),n.next=20;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0),console.log("\uc2e4\ud328"),console.log(w,",category"),console.log(t,",guest_id"),console.log(d,",password"),console.log(p,",title"),console.log(v,",content");case 20:case"end":return n.stop()}}),n,null,[[0,11]])})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function u(n){A(i,r,o,u,a,"next",n)}function a(n){A(i,r,o,u,a,"throw",n)}u(void 0)}))});return function(n){return e.apply(this,arguments)}}();return(0,i.jsxs)(_,{children:[(0,i.jsx)(k,{children:(0,i.jsxs)(Z,{children:[(0,i.jsxs)(E,{children:["\uac8c\uc2dc\uae00 ",n.isEdit?"\uc218\uc815":"\uc791\uc131"]}),!n.isEdit&&(0,i.jsxs)(z,{children:[(0,i.jsx)(y,{children:"\uce74\ud14c\uace0\ub9ac"}),(0,i.jsx)(R,{options:[{value:"\uc120\ud0dd",label:"\uc120\ud0dd"},{value:"NOTICE",label:"NOTICE"},{value:"GENERAL",label:"GENERAL"},{value:"QNA",label:"QNA"}],value:w,onChange:function(n){j(n.target.value)}})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(y,{children:"\uc81c\ubaa9"}),(0,i.jsx)(O,{type:"text",onChange:function(n){return x(n.target.value)}}),(0,i.jsx)(y,{children:"\uc791\uc131\uc790"}),(0,i.jsx)(O,{type:"text",onChange:function(n){return r(n.target.value)}}),(0,i.jsx)(y,{children:"\ube44\ubc00\ubc88\ud638"}),(0,i.jsx)(O,{type:"password",onChange:function(n){return l(n.target.value)}}),(0,i.jsx)(y,{children:"\ub0b4\uc6a9"}),(0,i.jsx)(C,{type:"text",onChange:function(n){return g(n.target.value)}})]}),(0,i.jsxs)(S,{onClick:X,children:[n.isEdit?"\uc218\uc815":"\uc791\uc131","\ud558\uae30"]})]})}),(0,i.jsx)(P,{onClick:function(){I.push("/main")}})]})}}},function(n){n.O(0,[537,66,774,888,179],(function(){return e=7330,n(n.s=e);var e}));var e=n.O();_N_E=e}]);