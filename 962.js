"use strict";(self.webpackChunktogetherfront=self.webpackChunktogetherfront||[]).push([[962],{3962:(e,n,a)=>{a.r(n),a.d(n,{default:()=>W});var t=a(7294),r=a(3379),o=a.n(r),l=a(7795),i=a.n(l),s=a(569),A=a.n(s),p=a(3565),c=a.n(p),d=a(9216),u=a.n(d),m=a(4589),f=a.n(m),C=a(3730),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=A().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(C.Z,g),C.Z&&C.Z.locals&&C.Z.locals;var b=a(7959),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=A().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),o()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var x=a(2804);const B=(0,x.cn)({key:"ProfileChangeModalShow",default:!1}),k=[a.p+"1b4b0f27d64ba42699f90d958b6238f2.webp",a.p+"076ea409e82b7701570782f9634751f1.webp",a.p+"1f58610713556100aa5eb1e6d46735b7.webp",a.p+"affcddea7a74fb333b713695d03abaa2.webp",a.p+"0ab633a5ac24eb297468be53c0b2c989.webp",a.p+"72104d4e631ed2ded5a5648ff34e6191.webp",a.p+"7761c3f48bb1ad5029a1002f3880f824.webp",a.p+"2cdf8dc4e0b772e232cb4df0144b67d7.webp",a.p+"4412da4d3da1a31a8ebec50d7d0eb89a.webp",a.p+"a5df7d3303bac2a84fe6d68ea9eda6b0.webp",a.p+"141732cc1b8073217eeb16bff0b9e5b1.webp",a.p+"68346f473d8bad2516760abe72eec968.webp",a.p+"8853be8229cce6d19452198a0c4215f8.webp",a.p+"6178fa938749cccc8994284e39bd7082.webp",a.p+"812e7ac41930fcacfe4cb36c4f1a99d5.webp",a.p+"c6c7fe9cecdc3a6b1b8c3b268c668695.webp",a.p+"36a3e0b13cffc6a403b958f6eea1f9b7.webp",a.p+"1b05bef39602125e1f0dd14e6a839119.webp",a.p+"18a7be0a784b5a87c948b999c02eec32.webp",a.p+"d48f853b5dc3c60dcc6c1fb3bd5ed1d9.webp",a.p+"2cf8f4eb13010b54ec82573a64e9ef71.webp",a.p+"14e335e5d1c2feee6316e4345c4be3ef.webp",a.p+"7586a3edb6654ce32a30b5eeb840fa7f.webp",a.p+"7ed3b689856e96f8e0988ae4fe4e1eed.webp",a.p+"99d9b33cdeadfdd7e44a9100654fedc1.webp",a.p+"886573eff3026bc483a2aad0df433e08.webp",a.p+"5107bb70daf2963bebbc576c09451c5a.webp",a.p+"8cbf3d2f3572051cf2d001a84c37a6f1.webp"],_=Math.floor(28*Math.random()),w=(0,x.cn)({key:"SignUpProfileState",default:k[_]});var E=a(4577);const y=function(){const e=(0,x.Zl)(B),n=(0,x.Zl)(w),a=a=>{n(a.target.id),e(!1)};return(0,t.useEffect)((()=>()=>{e(!1)}),[e]),t.createElement("div",{className:"auth--profileModal--background",onClick:()=>{e(!1)}},t.createElement("div",{className:"auth--profileModal",onClick:e=>e.stopPropagation()},t.createElement("p",{className:"auth--profileModal--title"},"원하시는 프로필을 클릭하세요"),t.createElement("img",{src:E.Z,alt:E.Z,className:"auth--profileModal--xmark",onClick:()=>{e(!1)}}),t.createElement("div",{className:"auth--profileModal--profileWrapper"},k.map(((e,n)=>t.createElement("img",{src:e,alt:e,key:n,id:e,className:"auth--profileModal--profileImg",onClick:a})))),t.createElement("div",{className:"auth--profileModal--cancleWrapper"},t.createElement("span",{className:"auth--profileModal--cancle",onClick:()=>e(!1)},"변경취소"))))};var $=a(9265),F=a(9669),v=a.n(F),N=a(4506),M=a(6974),j=a(1179);const S=function(e){const{signUpMode:n,setSignUpMode:a}=e,[r,o]=(0,t.useState)(""),[l,i]=(0,t.useState)(""),[s,A]=(0,t.useState)(""),[p,c]=(0,t.useState)(""),[d,u]=(0,t.useState)(""),m=(0,x.sJ)(B),f=(0,x.Zl)($.Z),C=(0,x.sJ)(w),g=(0,M.s0)(),b=e=>{u(""),"id"===e.target.id?o(e.target.value):"password"===e.target.id&&l.length<15?i(e.target.value):"email"===e.target.id?c(e.target.value):"passCheck"===e.target.id&&A(e.target.value)};return t.createElement("div",{className:"authForm"},m&&t.createElement(y,null),t.createElement("form",{className:"authForm--form",onSubmit:e=>{e.preventDefault(),u(""),n?l===s?v().post("http://localhost:8080/api/auth/signup",{intraId:r,password:l,email:p,url:`https://together42.github.io${C}`}).then((e=>{e.data&&e.data.token?((0,N.Fr)(e.data.token),(0,j.J)({id:r,url:`https://together42.github.io${C}`}),alert("회원가입 되셨습니다!"),a(!1),A(""),c("")):u("토큰 받아오기 실패")})).catch((e=>{u(e?.response?.data?.message?e.response.data.message:"알 수 없는 에러..")})):u("비밀번호 재입력이 다릅니다!"):v().post("http://localhost:8080/api/auth/login",{intraId:r,password:l}).then((e=>{e.data.token?(f((()=>({id:r,isLogin:!0,isAdmin:"tkim"===r,profileUrl:e.data.url}))),(0,N.Fr)(e.data.token),(0,j.J)({id:r,url:e.data.url}),alert("로그인 되셨습니다"),g("/")):u("토큰 받아오기 실패")})).catch((e=>{u(e?.response?.data?e.response.data.message:"알 수 없는 에러..")}))}},t.createElement("div",{className:"authForm--forFlex"},t.createElement("div",{className:"authForm--label"},t.createElement("span",null,"아이디")),t.createElement("input",{className:"authForm--input",id:"id",placeholder:"인트라 id 소문자",onFocus:e=>e.target.placeholder="",onBlur:e=>e.target.placeholder="인트라 id 소문자",onChange:b,maxLength:15})),t.createElement("div",{className:"authForm--forFlex"},t.createElement("div",{className:"authForm--label"},t.createElement("span",null,"비밀번호")),t.createElement("input",{className:"authForm--input password",id:"password",type:"password",placeholder:"8 글자 이상",onFocus:e=>e.target.placeholder="",onBlur:e=>e.target.placeholder="8 글자 이상",onChange:b,maxLength:15})),n&&t.createElement(t.Fragment,null,t.createElement("div",{className:"authForm--forFlex"},t.createElement("div",{className:"authForm--label"},t.createElement("span",null,"비번확인")),t.createElement("input",{className:"authForm--input passCheck",id:"passCheck",type:"password",placeholder:"비밀번호 재입력",onFocus:e=>e.target.placeholder="",onBlur:e=>e.target.placeholder="비밀번호 재입력",onChange:b,maxLength:15})),t.createElement("div",{className:"authForm--forFlex"},t.createElement("div",{className:"authForm--label"},t.createElement("span",null,"이메일")),t.createElement("input",{className:"authForm--input email",id:"email",type:"email",placeholder:"개인이메일 가능",onFocus:e=>e.target.placeholder="",onBlur:e=>e.target.placeholder="개인이메일 가능",onChange:b,value:p,maxLength:30}))),t.createElement("div",{className:"authForm--buttonWrapper"},t.createElement("div",{className:"authForm--error_message"},t.createElement("span",null,d)),t.createElement("button",{className:"authForm--button"},n?"회원가입":"로그인"))))};var z=a(6804),Z={};Z.styleTagTransform=f(),Z.setAttributes=c(),Z.insert=A().bind(null,"head"),Z.domAPI=i(),Z.insertStyleElement=u(),o()(z.Z,Z),z.Z&&z.Z.locals&&z.Z.locals;const W=function(){const[e,n]=(0,t.useState)(!1),a=(0,x.Zl)(B),r=(0,x.sJ)(w);return t.createElement(t.Fragment,null,t.createElement("div",{className:`auth--wrapper ${e?"signup":"login"} `},e?t.createElement(t.Fragment,null,t.createElement("p",{className:"auth--hello"},"문의는 tkim에게 해주세요"),t.createElement("div",{className:"auth--profile"},t.createElement("img",{src:r,alt:"profile"}),t.createElement("p",{onClick:()=>{a((e=>!e))}},"프로필 변경"))):t.createElement("p",{className:"auth--hello"},"어서오세요 사서님, 친해질 시간입니다!"),t.createElement(S,{signUpMode:e,setSignUpMode:n}),t.createElement("p",{className:"auth--guide"},e?"알고 보니 회원가입을 하셨다면?":"아직 가입을 안 하신 사서님은 여기로!"),t.createElement("p",{className:"auth--mode_change",onClick:()=>{n((e=>!e))}},e?"로그인":"회원가입")))}},6804:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(7537),r=a.n(t),o=a(3645),l=a.n(o)()(r());l.push([e.id,'.auth--wrapper{width:700px;margin:0 auto;font-family:"Noto Sans KR",sans-serif;min-height:450px}.auth--hello{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;text-align:center}.signup{margin-bottom:100px}.auth--profile{text-align:center;margin-top:30px}.auth--profile img{width:80px}.auth--profile p{width:100px;margin:10px auto;font-size:13px;color:#73b2ed !important}.auth--profile p:hover{cursor:pointer}.auth--guide{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;text-align:center;margin-top:50px}.auth--mode_change{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;text-align:center;color:#1e4df5 !important}.auth--mode_change:hover{cursor:pointer}',"",{version:3,sources:["webpack://./src/assets/css/Auth/Auth.scss","webpack://./src/assets/css/useful.scss","webpack://./src/assets/css/fonts.scss"],names:[],mappings:"AAGA,eCEE,WAHY,CAIZ,aAAA,CDDA,qCEJiB,CFKjB,gBAAA,CAGF,aEYE,qCApBiB,CAqBjB,cANkB,CAOlB,aAjBiB,CFKjB,iBAAA,CAGF,QACE,mBAAA,CAGF,eACE,iBAAA,CACA,eAAA,CACA,mBACE,UAAA,CAEF,iBACE,WAAA,CACA,gBAAA,CACA,cEVe,CFWf,wBAAA,CACA,uBACE,cAAA,CAKN,aEdE,qCApBiB,CAqBjB,cANkB,CAOlB,aAjBiB,CF+BjB,iBAAA,CACA,eAAA,CAGF,mBEpBE,qCApBiB,CAqBjB,cANkB,CAOlB,aAjBiB,CFqCjB,iBAAA,CACA,wBAAA,CACA,yBACE,cAAA",sourcesContent:["@import '@css/fonts.scss';\n@import '@css/useful.scss';\n\n.auth--wrapper {\n  @include basic--wrappers;\n  font-family: $kor_font_regular;\n  min-height: 450px;\n}\n\n.auth--hello {\n  @include medium_kor;\n  text-align: center;\n}\n\n.signup {\n  margin-bottom: 100px;\n}\n\n.auth--profile {\n  text-align: center;\n  margin-top: 30px;\n  img {\n    width: 80px;\n  }\n  p {\n    width: 100px;\n    margin: 10px auto;\n    font-size: $default_small_13;\n    color: #73b2ed !important;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n}\n\n.auth--guide {\n  @include medium_kor;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.auth--mode_change {\n  @include medium_kor;\n  text-align: center;\n  color: #1e4df5 !important;\n  &:hover {\n    cursor: pointer;\n  }\n}\n","@import '@css/fonts.scss';\n\n$basic_width: 700px;\n\n@mixin basic--wrappers {\n  width: $basic_width;\n  margin: 0 auto;\n}\n","// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_darker: #252323;\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_medium: rgb(140, 140, 140);\n$darkgrey_light: rgb(179, 188, 189);\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n"],sourceRoot:""}]);const i=l},3730:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(7537),r=a.n(t),o=a(3645),l=a.n(o)()(r());l.push([e.id,'.authForm{position:relative;width:300px;margin:0 auto;margin-top:50px}.authForm--forFlex{display:flex}.authForm--label{display:flex;flex-direction:column;justify-content:end;font-size:13px;width:50px}.authForm--input{height:24px;width:240px;border:none;border-bottom:1px solid #505050;font-size:13px;text-align:center;margin-left:10px}.authForm--input:focus{outline:none}.password,.passCheck,.email{margin-top:20px}.authForm--buttonWrapper{display:flex;justify-content:space-between;padding:15px 0}.authForm--error_message{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;color:#ec7063;display:flex;align-items:center}.authForm--button{padding:0;border:none;color:#505050;background-color:#e6e6fa;padding:5px;border-radius:10px}.authForm--button:hover{cursor:pointer}',"",{version:3,sources:["webpack://./src/assets/css/Auth/AuthForm.scss","webpack://./src/assets/css/fonts.scss"],names:[],mappings:"AAEA,UACE,iBAAA,CACA,WAAA,CACA,aAAA,CACA,eAAA,CAGF,mBACE,YAAA,CAGF,iBACE,YAAA,CACA,qBAAA,CACA,mBAAA,CACA,cAAA,CACA,UAAA,CAGF,iBACE,WAAA,CACA,WAAA,CACA,WAAA,CACA,+BAAA,CACA,cCTiB,CDUjB,iBAAA,CACA,gBAAA,CACA,uBACE,YAAA,CAIJ,4BAGE,eAAA,CAGF,yBACE,YAAA,CACA,6BAAA,CACA,cAAA,CAGF,yBCzBE,qCApBiB,CAqBjB,cANkB,CAOlB,aAjBiB,CD0CjB,aCtCQ,CDuCR,YAAA,CACA,kBAAA,CAGF,kBACE,SAAA,CACA,WAAA,CACA,aClDiB,CDmDjB,wBAAA,CACA,WAAA,CACA,kBAAA,CACA,wBACE,cAAA",sourcesContent:["@import '@css/fonts.scss';\n\n.authForm {\n  position: relative;\n  width: 300px;\n  margin: 0 auto;\n  margin-top: 50px;\n}\n\n.authForm--forFlex {\n  display: flex;\n}\n\n.authForm--label {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  font-size: $default_small_13;\n  width: 50px;\n}\n\n.authForm--input {\n  height: 24px;\n  width: 240px;\n  border: none;\n  border-bottom: 1px solid $darkgrey_default;\n  font-size: $default_small_13;\n  text-align: center;\n  margin-left: 10px;\n  &:focus {\n    outline: none;\n  }\n}\n\n.password,\n.passCheck,\n.email {\n  margin-top: 20px;\n}\n\n.authForm--buttonWrapper {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0;\n}\n\n.authForm--error_message {\n  @include medium_kor;\n  color: $pinkred;\n  display: flex;\n  align-items: center;\n}\n\n.authForm--button {\n  padding: 0;\n  border: none;\n  color: $darkgrey_default;\n  background-color: lavender;\n  padding: 5px;\n  border-radius: 10px;\n  &:hover {\n    cursor: pointer;\n  }\n}\n","// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_darker: #252323;\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_medium: rgb(140, 140, 140);\n$darkgrey_light: rgb(179, 188, 189);\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n"],sourceRoot:""}]);const i=l},7959:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(7537),r=a.n(t),o=a(3645),l=a.n(o)()(r());l.push([e.id,'.auth--profileModal--background{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:center;z-index:2}.auth--profileModal{position:relative;background-color:#fff;width:510px;height:350px;border:.5px solid #b3bcbd;padding:10px;z-index:3;overflow-y:scroll;overflow-x:hidden}.auth--profileModal::-webkit-scrollbar{width:10px}.auth--profileModal::-webkit-scrollbar-thumb{background-color:#b3bcbd;border-radius:20px;background-clip:padding-box;border:2px solid rgba(0,0,0,0)}.auth--profileModal::-webkit-scrollbar-track{background-color:#e0e0e0;border-radius:20px;box-shadow:inset 0px 0px 3px #fff}.auth--profileModal--title{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;margin-top:5px;margin-left:10px}.auth--profileModal--xmark{width:15px;position:absolute;right:15px;top:15px}.auth--profileModal--xmark:hover{cursor:pointer}.auth--profileModal--profileWrapper{width:480px;margin-top:20px}.auth--profileModal--profileImg{width:60px;margin:10px}.auth--profileModal--profileImg:hover{cursor:pointer}.auth--profileModal--cancleWrapper{display:flex;justify-content:end;margin-bottom:10px}.auth--profileModal--cancle{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;color:#73b2ed;text-align:end;margin-right:10px}.auth--profileModal--cancle:hover{cursor:pointer}',"",{version:3,sources:["webpack://./src/assets/css/Auth/ProfileModal.scss","webpack://./src/assets/css/fonts.scss"],names:[],mappings:"AAIA,gCACE,cAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,SAAA,CAGF,oBACE,iBAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CACA,yBAAA,CACA,YAAA,CACA,SAAA,CACA,iBAAA,CACA,iBAAA,CAEA,uCACE,UAAA,CAEF,6CACE,wBCxBa,CDyBb,kBAAA,CACA,2BAAA,CACA,8BAAA,CAGF,6CACE,wBAAA,CACA,kBAAA,CACA,iCAAA,CAIJ,2BCxBE,qCApBiB,CAqBjB,cANkB,CAOlB,aAjBiB,CDyCjB,cAAA,CACA,gBA9Ca,CAiDf,2BACE,UAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,iCACE,cAAA,CAIJ,oCACE,WAAA,CACA,eAAA,CAGF,gCACE,UAAA,CACA,WAlEa,CAmEb,sCACE,cAAA,CAIJ,mCACE,YAAA,CACA,mBAAA,CACA,kBAAA,CAGF,4BC3DE,qCApBiB,CAqBjB,cANkB,CAOlB,aAjBiB,CD4EjB,aCzEU,CD0EV,cAAA,CACA,iBAlFa,CAmFb,kCACE,cAAA",sourcesContent:["@import '@css/fonts.scss';\n\n$image_margin: 10px;\n\n.auth--profileModal--background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n\n.auth--profileModal {\n  position: relative;\n  background-color: white;\n  width: 510px;\n  height: 350px;\n  border: 0.5px solid $darkgrey_light;\n  padding: 10px;\n  z-index: 3;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  // 스크롤바는 호환성 문제 발생시 삭제\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: $darkgrey_light;\n    border-radius: 20px;\n    background-clip: padding-box;\n    border: 2px solid transparent;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #e0e0e0;\n    border-radius: 20px;\n    box-shadow: inset 0px 0px 3px white;\n  }\n}\n\n.auth--profileModal--title {\n  @include medium_kor;\n  margin-top: 5px;\n  margin-left: $image_margin;\n}\n\n.auth--profileModal--xmark {\n  width: 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.auth--profileModal--profileWrapper {\n  width: 480px;\n  margin-top: 20px;\n}\n\n.auth--profileModal--profileImg {\n  width: 60px;\n  margin: $image_margin;\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.auth--profileModal--cancleWrapper {\n  display: flex;\n  justify-content: end;\n  margin-bottom: 10px;\n}\n\n.auth--profileModal--cancle {\n  @include medium_kor;\n  color: $lightblue;\n  text-align: end;\n  margin-right: $image_margin;\n  &:hover {\n    cursor: pointer;\n  }\n}\n","// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_darker: #252323;\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_medium: rgb(140, 140, 140);\n$darkgrey_light: rgb(179, 188, 189);\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n"],sourceRoot:""}]);const i=l},4577:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"ca05a9af5d182fee36a58b004f4f8295.svg"}}]);