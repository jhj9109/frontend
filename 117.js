"use strict";(self.webpackChunktogetherfront=self.webpackChunktogetherfront||[]).push([[117],{4117:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Z});var a=t(7294),o=t(3379),i=t.n(o),r=t(7795),l=t.n(r),s=t(569),A=t.n(s),d=t(3565),p=t.n(d),c=t(9216),m=t.n(c),u=t(4589),f=t.n(u),g=t(3730),C={};C.styleTagTransform=f(),C.setAttributes=p(),C.insert=A().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=m(),i()(g.Z,C),g.Z&&g.Z.locals&&g.Z.locals;var h=t(7959),b={};b.styleTagTransform=f(),b.setAttributes=p(),b.insert=A().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=m(),i()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;var x=t(4480);const _=(0,x.cn)({key:"ProfileChangeModalShow",default:!1}),B=[t.p+"0075846802dbc3e5302090afab33d40f.jpg",t.p+"e4b22921e1be9f78768df72e1de13fca.jpg",t.p+"7b1a20e4b7692e53b9a32f6421e7d7ed.jpg",t.p+"ae8c0c019f677b1235b1ed756a227a32.jpg",t.p+"b67a22534fbc5bd2cc94c1eb1be9355c.jpg",t.p+"0e18b519290f70f1de273920153663c4.jpg",t.p+"6780dee97bfa78f76240ee74c21d6e6c.jpg",t.p+"df4c94afa2ac32e4b3d824cdd64c9e04.jpg",t.p+"8537c19b5073e61eee88363905eb684b.jpg",t.p+"b3b8c146702a8136492afa1e75100d1d.jpg",t.p+"1620a9a98b6526d2a0d2dd18e899129e.jpg",t.p+"c92880655d4055aafb2e2f8c8437232a.jpg",t.p+"d307bc6c4031310f16d2e2f05d452397.jpg",t.p+"07c75815dac67f043f543e89d460d126.jpg",t.p+"c93b7712b64a15ad200eb446be81c79b.jpg",t.p+"c327bd2808ef8b3a4d15cd9d81bc9b6a.jpg",t.p+"2f2bfb297d5ed556e61699d6db382d6b.jpg",t.p+"ecd260b855ed2bf02f3685971400ac9b.jpg",t.p+"21775458a9a758727639d0d649d0fc5c.jpg",t.p+"768c2e66bfe4c3eef61c40bd91643cff.jpg",t.p+"3865b449040ae933c114d54975f9bd20.jpg",t.p+"d94f96812d8e5c717d9bfd8cdf8fa748.jpg",t.p+"3742def9f8bfeb48cb9045d7b6c99215.jpg",t.p+"626fde521f55a9d0d9087e8de1638e52.jpg",t.p+"a0197b497b959c442ef4a48164803594.jpg",t.p+"674e3f946f8c800f77d1c2f3f3963524.jpg",t.p+"a896a046144bb441b5547930fe19b0ff.jpg",t.p+"b67f5289c2ba0f8bdd522dce2ac27033.jpg"],k=Math.floor(28*Math.random()),w=(0,x.cn)({key:"SignUpProfileState",default:B[k]});var y=t(4577);const $=function(){const e=(0,x.Zl)(_),n=(0,x.Zl)(w),t=t=>{n(t.target.id),e(!1)};return(0,a.useEffect)((()=>()=>{e(!1)}),[e]),a.createElement("div",{className:"auth--profileModal--background",onClick:()=>{e(!1)}},a.createElement("div",{className:"auth--profileModal",onClick:e=>e.stopPropagation()},a.createElement("p",{className:"auth--profileModal--title"},"원하시는 프로필을 클릭하세요"),a.createElement("img",{src:y.Z,alt:y.Z,className:"auth--profileModal--xmark",onClick:()=>{e(!1)}}),a.createElement("div",{className:"auth--profileModal--profileWrapper"},B.map(((e,n)=>a.createElement("img",{src:e,alt:e,key:n,id:e,className:"auth--profileModal--profileImg",onClick:t})))),a.createElement("div",{className:"auth--profileModal--cancleWrapper"},a.createElement("span",{className:"auth--profileModal--cancle",onClick:()=>e(!1)},"변경취소"))))};var F=t(9265),E=t(1817),v=t(4506),j=t(9250),M=t(1179),N=t(8933);const D=function(e){const{signUpMode:n,setSignUpMode:t}=e,[o,i]=(0,a.useState)(""),[r,l]=(0,a.useState)(""),[s,A]=(0,a.useState)(""),[d,p]=(0,a.useState)(""),[c,m]=(0,a.useState)(""),u=(0,x.sJ)(_),f=(0,x.Zl)(F.Z),g=(0,x.sJ)(w),C=(0,j.s0)(),h=e=>{m(""),"id"===e.target.id?i(e.target.value):"password"===e.target.id&&r.length<15?l(e.target.value):"email"===e.target.id?p(e.target.value):"passCheck"===e.target.id&&A(e.target.value)};return a.createElement("div",{className:"authForm"},u&&a.createElement($,null),a.createElement("form",{className:"authForm--form",onSubmit:e=>{e.preventDefault(),m(""),n?r===s?E.Z.post(`${(0,N.Z)()}/api/auth/signup`,{intraId:o,password:r,email:d,profile:`https://together42.github.io${g}`}).then((e=>{e.data&&e.data.token?((0,v.Fr)(e.data.token),(0,M.J)({id:o,url:`https://together42.github.io${g}`}),alert("회원가입 되셨습니다!"),t(!1),A(""),p("")):m("토큰 받아오기 실패")})).catch((e=>{m(e?.response?.data?.message?e.response.data.message:"알 수 없는 에러..")})):m("비밀번호 재입력이 다릅니다!"):E.Z.post(`${(0,N.Z)()}/api/auth/login`,{intraId:o,password:r}).then((e=>{e.data.token?(f((()=>({id:o,isLogin:!0,isAdmin:"tkim"===o,profileUrl:e.data.profile}))),(0,v.Fr)(e.data.token),(0,M.J)({id:o,url:e.data.url}),alert("로그인 되셨습니다"),C("/")):m("토큰 받아오기 실패")})).catch((e=>{m(e?.response?.data?e.response.data.message:"알 수 없는 에러..")}))}},a.createElement("div",{className:"authForm--forFlex"},a.createElement("div",{className:"authForm--label"},a.createElement("span",null,"아이디")),a.createElement("input",{className:"authForm--input",id:"id",placeholder:"인트라 id 소문자",onFocus:e=>e.target.placeholder="",onBlur:e=>e.target.placeholder="인트라 id 소문자",onChange:h,maxLength:15})),a.createElement("div",{className:"authForm--forFlex"},a.createElement("div",{className:"authForm--label"},a.createElement("span",null,"비밀번호")),a.createElement("input",{className:"authForm--input password",id:"password",type:"password",placeholder:"8 글자 이상",onFocus:e=>e.target.placeholder="",onBlur:e=>e.target.placeholder="8 글자 이상",onChange:h,maxLength:15})),n&&a.createElement(a.Fragment,null,a.createElement("div",{className:"authForm--forFlex"},a.createElement("div",{className:"authForm--label"},a.createElement("span",null,"비번확인")),a.createElement("input",{className:"authForm--input passCheck",id:"passCheck",type:"password",placeholder:"비밀번호 재입력",onFocus:e=>e.target.placeholder="",onBlur:e=>e.target.placeholder="비밀번호 재입력",onChange:h,maxLength:15})),a.createElement("div",{className:"authForm--forFlex"},a.createElement("div",{className:"authForm--label"},a.createElement("span",null,"이메일")),a.createElement("input",{className:"authForm--input email",id:"email",type:"email",placeholder:"개인이메일 가능",onFocus:e=>e.target.placeholder="",onBlur:e=>e.target.placeholder="개인이메일 가능",onChange:h,value:d,maxLength:30}))),a.createElement("div",{className:"authForm--buttonWrapper"},a.createElement("div",{className:"authForm--error_message"},a.createElement("span",null,c)),a.createElement("button",{className:"authForm--button"},n?"회원가입":"로그인"))))};var z=t(6804),S={};S.styleTagTransform=f(),S.setAttributes=p(),S.insert=A().bind(null,"head"),S.domAPI=l(),S.insertStyleElement=m(),i()(z.Z,S),z.Z&&z.Z.locals&&z.Z.locals;const Z=function(){const[e,n]=(0,a.useState)(!1),t=(0,x.Zl)(_),o=(0,x.sJ)(w);return a.createElement(a.Fragment,null,a.createElement("div",{className:`auth--wrapper ${e?"signup":"login"} `},e?a.createElement(a.Fragment,null,a.createElement("p",{className:"auth--hello"},"문의는 tkim에게 해주세요"),a.createElement("div",{className:"auth--profile"},a.createElement("img",{src:o,alt:"profile"}),a.createElement("p",{onClick:()=>{t((e=>!e))}},"프로필 변경"))):a.createElement("p",{className:"auth--hello"},"어서오세요 사서님, 친해질 시간입니다!"),a.createElement(D,{signUpMode:e,setSignUpMode:n}),a.createElement("p",{className:"auth--guide"},e?"알고 보니 회원가입을 하셨다면?":"아직 가입을 안 하신 사서님은 여기로!"),a.createElement("p",{className:"auth--mode_change",onClick:()=>{n((e=>!e))}},e?"로그인":"회원가입")))}},8933:(e,n,t)=>{t.d(n,{Z:()=>a});const a=function(){return"https://together.42jip.net"}},6804:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7537),o=t.n(a),i=t(3645),r=t.n(i)()(o());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rowdies&display=swap);"]),r.push([e.id,'.bold{font-weight:bold}.black{color:#000}.auth--wrapper{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;min-height:450px}@media(min-width: 700px){.auth--wrapper{width:700px;margin:0 auto}}@media(max-width: 700px){.auth--wrapper{width:100%}}.auth--hello{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;text-align:center}.signup{margin-bottom:100px}.auth--profile{text-align:center;margin-top:30px}.auth--profile img{width:80px}.auth--profile p{width:100px;margin:10px auto;font-size:13px;color:#73b2ed !important}.auth--profile p:hover{cursor:pointer;transform:scale(1.1)}.auth--guide{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;text-align:center;margin-top:50px}.auth--mode_change{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;text-align:center;color:#1e4df5 !important}.auth--mode_change:hover{cursor:pointer;transform:scale(1.1)}',"",{version:3,sources:["webpack://./src/assets/css/fonts.scss","webpack://./src/assets/css/Auth/Auth.scss","webpack://./src/assets/css/useful.scss"],names:[],mappings:"AA2DA,MACE,gBAAA,CAGF,OACE,UAAA,CC9DF,eDqBE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CCFjB,gBAAA,CCGA,yBDLF,eCwBE,WAxBY,CAyBZ,aAAA,CAAA,CAdA,yBDXF,eAOI,UAAA,CAAA,CAIJ,aDUE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CCSjB,iBAAA,CAGF,QACE,mBAAA,CAGF,eACE,iBAAA,CACA,eAAA,CACA,mBACE,UAAA,CAEF,iBACE,WAAA,CACA,gBAAA,CACA,cDZe,CCaf,wBAAA,CACA,uBACE,cAAA,CACA,oBAAA,CAKN,aDjBE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CCoCjB,iBAAA,CACA,eAAA,CAGF,mBDvBE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CC0CjB,iBAAA,CACA,wBAAA,CACA,yBACE,cAAA,CACA,oBAAA",sourcesContent:["// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_darker: #252323;\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_medium: rgb(140, 140, 140);\n$darkgrey_light: rgb(184, 184, 184);\n$lightgrey: rgb(237, 238, 239);\n$white: white;\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set-default\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n@mixin medium_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n// font-set-white\n@mixin big_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $sub_title_18;\n  color: $white;\n}\n\n@mixin medium_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $white;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.black {\n  color: black;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');\n","@import '@css/useful.scss';\n\n.auth--wrapper {\n  @include medium_kor;\n  min-height: 450px;\n  @include desktop {\n    @include basic--wrappers;\n  }\n  @include mobile {\n    width: 100%;\n  }\n}\n\n.auth--hello {\n  @include medium_kor;\n  text-align: center;\n}\n\n.signup {\n  margin-bottom: 100px;\n}\n\n.auth--profile {\n  text-align: center;\n  margin-top: 30px;\n  img {\n    width: 80px;\n  }\n  p {\n    width: 100px;\n    margin: 10px auto;\n    font-size: $default_small_13;\n    color: #73b2ed !important;\n    &:hover {\n      cursor: pointer;\n      transform: scale(1.1);\n    }\n  }\n}\n\n.auth--guide {\n  @include medium_kor;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.auth--mode_change {\n  @include medium_kor;\n  text-align: center;\n  color: #1e4df5 !important;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n}\n","@import '@css/fonts.scss';\n\n$basic_width: 700px;\n$desktop: 1024px;\n\n// device mode\n@mixin desktop {\n  @media (min-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin mobile {\n  @media (max-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin galaxyFold {\n  @media (max-width: 300px) {\n    @content;\n  }\n}\n\n// utils\n@mixin basic--wrappers {\n  width: $basic_width;\n  margin: 0 auto;\n}\n"],sourceRoot:""}]);const l=r},3730:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7537),o=t.n(a),i=t(3645),r=t.n(i)()(o());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rowdies&display=swap);"]),r.push([e.id,'.bold{font-weight:bold}.black{color:#000}.authForm{position:relative;margin:0 auto;margin-top:50px}@media(min-width: 700px){.authForm{width:300px}}@media(max-width: 700px){.authForm{width:80%}}.authForm--forFlex{display:flex}.authForm--label{display:flex;flex-direction:column;justify-content:end;font-size:13px}@media(min-width: 700px){.authForm--label{width:50px}}@media(max-width: 700px){.authForm--label{width:25%}}.authForm--input{height:24px;border:none;border-bottom:1px solid #505050;font-size:13px;text-align:center}.authForm--input:focus{outline:none}@media(min-width: 700px){.authForm--input{width:240px;margin-left:10px}}@media(max-width: 700px){.authForm--input{width:75%}}.password,.passCheck,.email{margin-top:20px}.authForm--buttonWrapper{display:flex;justify-content:space-between;padding:15px 0}.authForm--error_message{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;color:#ec7063;display:flex;align-items:center}.authForm--button{padding:0;border:none;color:#505050;background-color:#e6e6fa;padding:5px;border-radius:10px}.authForm--button:hover{cursor:pointer;transform:scale(1.1)}',"",{version:3,sources:["webpack://./src/assets/css/fonts.scss","webpack://./src/assets/css/Auth/AuthForm.scss","webpack://./src/assets/css/useful.scss"],names:[],mappings:"AA2DA,MACE,gBAAA,CAGF,OACE,UAAA,CC9DF,UACE,iBAAA,CACA,aAAA,CACA,eAAA,CCEA,yBDLF,UAKI,WAAA,CAAA,CCMF,yBDXF,UAQI,SAAA,CAAA,CAIJ,mBACE,YAAA,CAGF,iBACE,YAAA,CACA,qBAAA,CACA,mBAAA,CACA,cDHiB,CEZjB,yBDWF,iBAMI,UAAA,CAAA,CCXF,yBDKF,iBASI,SAAA,CAAA,CAIJ,iBACE,WAAA,CACA,WAAA,CACA,+BAAA,CACA,cDhBiB,CCiBjB,iBAAA,CACA,uBACE,YAAA,CC/BF,yBDwBF,iBAUI,WAAA,CACA,gBAAA,CAAA,CC7BF,yBDkBF,iBAcI,SAAA,CAAA,CAIJ,4BAGE,eAAA,CAGF,yBACE,YAAA,CACA,6BAAA,CACA,cAAA,CAGF,yBDtCE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CCyDjB,aDnDQ,CCoDR,YAAA,CACA,kBAAA,CAGF,kBACE,SAAA,CACA,WAAA,CACA,aDjEiB,CCkEjB,wBAAA,CACA,WAAA,CACA,kBAAA,CACA,wBACE,cAAA,CACA,oBAAA",sourcesContent:["// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_darker: #252323;\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_medium: rgb(140, 140, 140);\n$darkgrey_light: rgb(184, 184, 184);\n$lightgrey: rgb(237, 238, 239);\n$white: white;\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set-default\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n@mixin medium_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n// font-set-white\n@mixin big_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $sub_title_18;\n  color: $white;\n}\n\n@mixin medium_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $white;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.black {\n  color: black;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');\n","@import '@css/useful.scss';\n\n.authForm {\n  position: relative;\n  margin: 0 auto;\n  margin-top: 50px;\n  @include desktop {\n    width: 300px;\n  }\n  @include mobile {\n    width: 80%;\n  }\n}\n\n.authForm--forFlex {\n  display: flex;\n}\n\n.authForm--label {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  font-size: $default_small_13;\n  @include desktop {\n    width: 50px;\n  }\n  @include mobile {\n    width: 25%;\n  }\n}\n\n.authForm--input {\n  height: 24px;\n  border: none;\n  border-bottom: 1px solid $darkgrey_default;\n  font-size: $default_small_13;\n  text-align: center;\n  &:focus {\n    outline: none;\n  }\n  @include desktop {\n    width: 240px;\n    margin-left: 10px;\n  }\n  @include mobile {\n    width: 75%;\n  }\n}\n\n.password,\n.passCheck,\n.email {\n  margin-top: 20px;\n}\n\n.authForm--buttonWrapper {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0;\n}\n\n.authForm--error_message {\n  @include medium_kor;\n  color: $pinkred;\n  display: flex;\n  align-items: center;\n}\n\n.authForm--button {\n  padding: 0;\n  border: none;\n  color: $darkgrey_default;\n  background-color: lavender;\n  padding: 5px;\n  border-radius: 10px;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n}\n","@import '@css/fonts.scss';\n\n$basic_width: 700px;\n$desktop: 1024px;\n\n// device mode\n@mixin desktop {\n  @media (min-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin mobile {\n  @media (max-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin galaxyFold {\n  @media (max-width: 300px) {\n    @content;\n  }\n}\n\n// utils\n@mixin basic--wrappers {\n  width: $basic_width;\n  margin: 0 auto;\n}\n"],sourceRoot:""}]);const l=r},7959:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7537),o=t.n(a),i=t(3645),r=t.n(i)()(o());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rowdies&display=swap);"]),r.push([e.id,'.bold{font-weight:bold}.black{color:#000}.auth--profileModal--background{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:center;z-index:2}.auth--profileModal{position:relative;background-color:#fff;height:350px;border:.5px solid #b8b8b8;padding:10px;z-index:3;overflow-y:scroll;overflow-x:hidden}@media(min-width: 700px){.auth--profileModal{width:510px}}@media(max-width: 700px){.auth--profileModal{width:90%}}.auth--profileModal::-webkit-scrollbar{width:10px}.auth--profileModal::-webkit-scrollbar-thumb{background-color:#b8b8b8;border-radius:20px;background-clip:padding-box;border:2px solid rgba(0,0,0,0)}.auth--profileModal::-webkit-scrollbar-track{background-color:#e0e0e0;border-radius:20px;box-shadow:inset 0px 0px 3px #fff}.auth--profileModal--title{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;margin-top:5px;margin-left:10px}.auth--profileModal--xmark{width:15px;position:absolute;right:15px;top:15px}.auth--profileModal--xmark:hover{cursor:pointer;transform:scale(1.1)}.auth--profileModal--profileWrapper{margin-top:20px}@media(min-width: 700px){.auth--profileModal--profileWrapper{width:480px}}@media(max-width: 700px){.auth--profileModal--profileWrapper{display:grid;grid-template-columns:repeat(auto-fit, minmax(25%, auto));justify-items:center}}@media(max-width: 300px){.auth--profileModal--profileWrapper{display:grid;grid-template-columns:repeat(auto-fit, minmax(33.3333333333%, auto));justify-items:center}}.auth--profileModal--profileImg{width:60px;margin:10px}.auth--profileModal--profileImg:hover{cursor:pointer;transform:scale(1.1)}.auth--profileModal--cancleWrapper{display:flex;justify-content:end;margin-bottom:10px}.auth--profileModal--cancle{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;color:#73b2ed;text-align:end;margin-right:10px}.auth--profileModal--cancle:hover{cursor:pointer;transform:scale(1.1)}',"",{version:3,sources:["webpack://./src/assets/css/fonts.scss","webpack://./src/assets/css/Auth/ProfileModal.scss","webpack://./src/assets/css/useful.scss"],names:[],mappings:"AA2DA,MACE,gBAAA,CAGF,OACE,UAAA,CC5DF,gCACE,cAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,SAAA,CAGF,oBACE,iBAAA,CACA,qBAAA,CACA,YAAA,CACA,yBAAA,CACA,YAAA,CACA,SAAA,CACA,iBAAA,CACA,iBAAA,CClBA,yBDUF,oBAUI,WAAA,CAAA,CCdF,yBDIF,oBAaI,SAAA,CAAA,CAGF,uCACE,UAAA,CAEF,6CACE,wBD7Ba,CC8Bb,kBAAA,CACA,2BAAA,CACA,8BAAA,CAGF,6CACE,wBAAA,CACA,kBAAA,CACA,iCAAA,CAIJ,2BD3BE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CC8CjB,cAAA,CACA,gBAnDa,CAsDf,2BACE,UAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,iCACE,cAAA,CACA,oBAAA,CAIJ,oCAcE,eAAA,CC1EA,yBD4DF,oCAEI,WAAA,CAAA,CCxDF,yBDsDF,oCAKI,YAAA,CACA,yDAAA,CACA,oBAAA,CAAA,CCvDF,yBDgDF,oCAUI,YAAA,CACA,oEAAA,CACA,oBAAA,CAAA,CAKJ,gCACE,UAAA,CACA,WApFa,CAqFb,sCACE,cAAA,CACA,oBAAA,CAIJ,mCACE,YAAA,CACA,mBAAA,CACA,kBAAA,CAGF,4BD5EE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CC+FjB,aD1FU,CC2FV,cAAA,CACA,iBArGa,CAsGb,kCACE,cAAA,CACA,oBAAA",sourcesContent:["// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_darker: #252323;\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_medium: rgb(140, 140, 140);\n$darkgrey_light: rgb(184, 184, 184);\n$lightgrey: rgb(237, 238, 239);\n$white: white;\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set-default\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n@mixin medium_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n// font-set-white\n@mixin big_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $sub_title_18;\n  color: $white;\n}\n\n@mixin medium_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $white;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.black {\n  color: black;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');\n","@import '@css/useful.scss';\n\n$image_margin: 10px;\n\n.auth--profileModal--background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n\n.auth--profileModal {\n  position: relative;\n  background-color: white;\n  height: 350px;\n  border: 0.5px solid $darkgrey_light;\n  padding: 10px;\n  z-index: 3;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  @include desktop {\n    width: 510px;\n  }\n  @include mobile {\n    width: 90%;\n  }\n  // 스크롤바는 호환성 문제 발생시 삭제\n  &::-webkit-scrollbar {\n    width: 10px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: $darkgrey_light;\n    border-radius: 20px;\n    background-clip: padding-box;\n    border: 2px solid transparent;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #e0e0e0;\n    border-radius: 20px;\n    box-shadow: inset 0px 0px 3px white;\n  }\n}\n\n.auth--profileModal--title {\n  @include medium_kor;\n  margin-top: 5px;\n  margin-left: $image_margin;\n}\n\n.auth--profileModal--xmark {\n  width: 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n}\n\n.auth--profileModal--profileWrapper {\n  @include desktop {\n    width: 480px;\n  }\n  @include mobile {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(25%, auto));\n    justify-items: center;\n  }\n  @include galaxyFold {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(calc(100% / 3), auto));\n    justify-items: center;\n  }\n  margin-top: 20px;\n}\n\n.auth--profileModal--profileImg {\n  width: 60px;\n  margin: $image_margin;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n}\n\n.auth--profileModal--cancleWrapper {\n  display: flex;\n  justify-content: end;\n  margin-bottom: 10px;\n}\n\n.auth--profileModal--cancle {\n  @include medium_kor;\n  color: $lightblue;\n  text-align: end;\n  margin-right: $image_margin;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n}\n","@import '@css/fonts.scss';\n\n$basic_width: 700px;\n$desktop: 1024px;\n\n// device mode\n@mixin desktop {\n  @media (min-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin mobile {\n  @media (max-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin galaxyFold {\n  @media (max-width: 300px) {\n    @content;\n  }\n}\n\n// utils\n@mixin basic--wrappers {\n  width: $basic_width;\n  margin: 0 auto;\n}\n"],sourceRoot:""}]);const l=r},4577:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"22490f2d293cb4b239b43c469b99a3ae.svg"}}]);