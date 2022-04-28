"use strict";(self.webpackChunktogetherfront=self.webpackChunktogetherfront||[]).push([[647],{6647:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var s=n(7294),r=n(3379),a=n.n(r),i=n(7795),l=n.n(i),o=n(569),A=n.n(o),u=n(3565),c=n.n(u),m=n(9216),p=n.n(m),d=n(4589),f=n.n(d),C=n(8059),b={};b.styleTagTransform=f(),b.setAttributes=c(),b.insert=A().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=p(),a()(C.Z,b),C.Z&&C.Z.locals&&C.Z.locals;var g=n(2889),B={};B.styleTagTransform=f(),B.setAttributes=c(),B.insert=A().bind(null,"head"),B.domAPI=l(),B.insertStyleElement=p(),a()(g.Z,B),g.Z&&g.Z.locals&&g.Z.locals;const h=n.p+"e5111ef1786e3f8b4f0621ce99a18388.png",x=function(){return s.createElement("div",{className:"result--footer"},s.createElement("img",{src:h,alt:"cute",className:"result--footer--image"}))};var E=n(9669),_=n.n(E);const k=function(){const[e,t]=(0,s.useState)([]),[n,r]=(0,s.useState)({id:null,title:null,description:null,createdBy:null}),[a,i]=(0,s.useState)({}),[l,o]=(0,s.useState)(null),A=t=>{const n=e.find((e=>e.id===parseInt(t.target.id,10)));r(n)};return(0,s.useEffect)((()=>{_().get("http://3.38.67.120:3001/api/together").then((e=>{t(e.data.EventList),e.data.EventList.length>0&&r(e.data.EventList[0])}))}),[]),(0,s.useEffect)((()=>{n.id&&e.length&&_().get(`http://3.38.67.120:3001/api/together/matching/${n.id}`).then((e=>{i(e.data.teamList)})).catch((()=>{alert("알 수 없는 오류가..")}))}),[e.length,n]),s.createElement(s.Fragment,null,s.createElement("div",{className:"result"},e.length>0&&s.createElement("div",{className:"result--event_list"},e.map(((e,t)=>s.createElement("div",{className:`result--event ${e.id===n.id&&"selected"}`,key:t},s.createElement("span",{id:e.id,onClick:A},e.title))))),s.createElement("div",{className:Object.keys(a).find((e=>"null"===e))?"result--submit":"result--table"},!Object.keys(a).find((e=>"null"===e))&&Object.keys(a).length&&e.length?Object.entries(a).map(((e,t)=>s.createElement(s.Fragment,null,s.createElement("div",{key:e[0]},s.createElement("p",{className:"result--team_name"},e[0]),e[1].map(((e,t)=>s.createElement("p",{key:t,className:"result--intra"},e.loginId)))),!t&&s.createElement("hr",{className:"result--hr"})))):Object.keys(a).find((e=>"null"===e))?s.createElement(s.Fragment,null,s.createElement("div",{className:"result--submit--info_wrapper"},s.createElement("p",{className:"result--submit--info"},"아직 팀매칭이 이루어지지 않았습니다."),s.createElement("p",{className:"result--submit--info"},"원하는 팀원수를 적고 매칭을 눌러주세요!"),s.createElement("p",{className:"result--submit--info"},`현재 신청 인원은 ${a.null.length}명입니다.`)),s.createElement("div",{className:"result--submit--form_wrapper"},s.createElement("form",{onSubmit:()=>{l&&_().post("http://3.38.67.120:3001/api/together/matching",{eventId:n.id,teamNum:l}).then((e=>{i(e.data.teamList)})).catch((()=>{alert("알 수 없는 오류 발생..")}))},className:"result--submit--form"},s.createElement("input",{className:"result--submit--input",onChange:e=>{o(e.target.value)},value:l}),s.createElement("span",{className:"result--submit--label"},"명으로 "),s.createElement("span",{className:"result--submit--button"},"매칭하기")))):s.createElement("span",{className:"result--no_attend"},"신청하신 분이 없습니다.."))),s.createElement(x,null))}},2889:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(7537),r=n.n(s),a=n(3645),i=n.n(a)()(r());i.push([e.id,".result--footer{width:700px;margin:0 auto;position:relative;height:150px}.result--footer--image{position:absolute;width:100px;right:0px;top:30px}","",{version:3,sources:["webpack://./src/assets/css/Result/Footer.scss","webpack://./src/assets/css/useful.scss"],names:[],mappings:"AAGA,gBCEE,WAHY,CAIZ,aAAA,CDDA,iBAAA,CACA,YAAA,CAGF,uBACE,iBAAA,CACA,WAAA,CACA,SAAA,CACA,QAAA",sourcesContent:["@import '@css/useful.scss';\n@import '@css/fonts.scss';\n\n.result--footer {\n  @include basic--wrappers;\n  position: relative;\n  height: 150px;\n}\n\n.result--footer--image {\n  position: absolute;\n  width: 100px;\n  right: 0px;\n  top: 30px;\n}\n","@import '@css/fonts.scss';\n\n$basic_width: 700px;\n\n@mixin basic--wrappers {\n  width: $basic_width;\n  margin: 0 auto;\n}\n"],sourceRoot:""}]);const l=i},8059:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(7537),r=n.n(s),a=n(3645),i=n.n(a)()(r());i.push([e.id,'.result{width:700px;margin:0 auto}.result--title{font-family:"Noto Sans KR",sans-serif;font-size:16px;color:#505050}.result--event_list{display:grid;grid-template-columns:repeat(auto-fit, minmax(25%, auto));row-gap:15px;margin-bottom:40px}.selected{color:#000 !important}.result--event{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;color:rgba(80,80,80,.5607843137)}.result--event span{border-bottom:1px solid #b3bcbd}.result--event span:hover{cursor:pointer}.result--table{position:relative;display:flex;justify-content:space-around;background-color:rgba(178,186,187,.2392156863);padding:20px}.result--table p{color:#505050}.result--submit{background-color:rgba(178,186,187,.2392156863);padding:30px 100px}.result--submit--info{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050}.result--submit--form_wrapper{text-align:end}.result--submit--input{width:40px;border:none;border-bottom:1px solid #505050;font-size:15px;text-align:center;background:none}.result--submit--input:focus{outline:none}.result--submit--label{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050}.result--submit--button{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;font-size:16px;color:rgba(159,6,43,.6392156863)}.result--submit--button:hover{cursor:pointer}.result--team_name{font-family:"Roboto",sans-serif;font-weight:500;font-size:18px;text-align:center}.result--intra{font-family:"Roboto",sans-serif;font-size:15px;text-align:center}.result--hr{position:absolute;width:600px;top:60px;border:0;height:.5px;background-color:#b3bcbd}.result--no_attend{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;font-size:16px;margin:30px 0}',"",{version:3,sources:["webpack://./src/assets/css/Result/Result.scss","webpack://./src/assets/css/useful.scss","webpack://./src/assets/css/fonts.scss","webpack://./src/assets/css/Main/Main.scss"],names:[],mappings:"AAKA,QAAA,WCHc,CAIZ,aAAA,CDGF,eAAA,qCERmB,CCSjB,cAAA,CACA,aDNiB,CFQnB,oBACE,YAAA,CACA,yDAAA,CACA,YAAA,CACA,kBAAA,CAGF,UACE,qBAAA,CAGF,eELE,qCAlBiB,CAmBjB,cANkB,CAOlB,aAhBiB,CFqBjB,gCAAA,CACA,oBACE,+BAAA,CAEA,0BACE,cAAA,CAKN,eACE,iBAAA,CACA,YAAA,CACA,4BAAA,CACA,8CAAA,CACA,YAtCc,CAuCd,iBACE,aEtCe,CF0CnB,gBACE,8CAAA,CACA,kBAAA,CAGF,sBEjCE,qCAlBiB,CAmBjB,cANkB,CAOlB,aAhBiB,CFmDnB,8BACE,cAAA,CAGF,uBACE,UAAA,CACA,WAAA,CACA,+BAAA,CACA,cElDkB,CFmDlB,iBAAA,CACA,eAAA,CACA,6BACE,YAAA,CAIJ,uBErDE,qCAlBiB,CAmBjB,cANkB,CAOlB,aAhBiB,CFuEnB,wBEzDE,qCAlBiB,CAmBjB,cANkB,CAOlB,aAhBiB,CFyEjB,cAAA,CACA,gCEtEe,CFuEf,8BACE,cAAA,CAIJ,mBACE,+BEpFiB,CFqFjB,eAAA,CACA,cE3Ea,CF4Eb,iBAAA,CAGF,eACE,+BE3FiB,CF4FjB,cEhFkB,CFiFlB,iBAAA,CAGF,YACE,iBAAA,CACA,WAAA,CACA,QAAA,CACA,QAAA,CACA,WAAA,CACA,wBElGe,CFqGjB,mBExFE,qCAlBiB,CAmBjB,cANkB,CAOlB,aAhBiB,CFwGjB,cAAA,CACA,aAAA",sourcesContent:["@import '@css/Main/Main.scss';\n@import '@css/useful.scss';\n\n$table_padding: 20px;\n\n.result {\n  @include basic--wrappers;\n}\n\n.result--title {\n  @include main--titles;\n}\n\n.result--event_list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(25%, auto));\n  row-gap: 15px;\n  margin-bottom: 40px;\n}\n\n.selected {\n  color: black !important;\n}\n\n.result--event {\n  @include medium_kor;\n  color: #5050508f;\n  span {\n    border-bottom: 1px solid $darkgrey_light;\n    // padding-bottom: 2px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n}\n\n.result--table {\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  background-color: #b2babb3d;\n  padding: $table_padding;\n  p {\n    color: $darkgrey_default;\n  }\n}\n\n.result--submit {\n  background-color: #b2babb3d;\n  padding: 30px 100px;\n}\n\n.result--submit--info {\n  @include medium_kor;\n}\n\n.result--submit--form_wrapper {\n  text-align: end;\n}\n\n.result--submit--input {\n  width: 40px;\n  border: none;\n  border-bottom: 1px solid $darkgrey_default;\n  font-size: $default_medium_15;\n  text-align: center;\n  background: none;\n  &:focus {\n    outline: none;\n  }\n}\n\n.result--submit--label {\n  @include medium_kor;\n}\n\n.result--submit--button {\n  @include medium_kor;\n  font-size: 16px;\n  color: $red_for_submit;\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.result--team_name {\n  font-family: $eng_font_regular;\n  font-weight: 500;\n  font-size: $sub_title_18;\n  text-align: center;\n}\n\n.result--intra {\n  font-family: $eng_font_regular;\n  font-size: $default_medium_15;\n  text-align: center;\n}\n\n.result--hr {\n  position: absolute;\n  width: 600px;\n  top: 60px;\n  border: 0;\n  height: 0.5px;\n  background-color: $darkgrey_light;\n}\n\n.result--no_attend {\n  @include medium_kor;\n  font-size: 16px;\n  margin: 30px 0;\n}\n","@import '@css/fonts.scss';\n\n$basic_width: 700px;\n\n@mixin basic--wrappers {\n  width: $basic_width;\n  margin: 0 auto;\n}\n","// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_light: rgb(179, 188, 189);\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n","@import '@css/fonts.scss';\n\n@mixin main--wrappers {\n  width: 600px;\n  margin: 0 auto;\n}\n\n@mixin main--titles {\n  // font-weight: 300;\n  font-family: $kor_font_regular;\n  font-size: 16px;\n  color: $darkgrey_default;\n}\n"],sourceRoot:""}]);const l=i}}]);