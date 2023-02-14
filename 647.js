"use strict";(self.webpackChunktogetherfront=self.webpackChunktogetherfront||[]).push([[647],{6647:(e,n,t)=>{t.r(n),t.d(n,{default:()=>F});var i=t(7294),s=t(3379),o=t.n(s),r=t(7795),a=t.n(r),l=t(569),A=t.n(l),m=t(3565),u=t.n(m),d=t(9216),c=t.n(d),p=t(4589),C=t.n(p),f=t(8059),g={};g.styleTagTransform=C(),g.setAttributes=u(),g.insert=A().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),o()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var b=t(2889),B={};B.styleTagTransform=C(),B.setAttributes=u(),B.insert=A().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=c(),o()(b.Z,B),b.Z&&b.Z.locals&&b.Z.locals;const _=t.p+"e5111ef1786e3f8b4f0621ce99a18388.png",x=function(){return i.createElement("div",{className:"result--footer"},i.createElement("img",{src:_,alt:"cute",className:"result--footer--image"}))};var h=t(1817),k=t(5996),w=t(4506),E=t(8933),y=t(3757),$=t(2591),v=t(9250);const F=function(){const[e,n]=(0,i.useState)({id:null,title:null,description:null,intraId:null,createdId:null,isMatching:null}),[t,s]=(0,i.useState)(""),o=(0,v.s0)(),{data:r,mutate:a}=(0,y.ZP)(`${(0,E.Z)()}/api/together`,$.Z,{dedupingInterval:6e5}),{data:l,mutate:A}=(0,y.ZP)(`${(0,E.Z)()}/api/together/matching/${e.id}`,$.Z,{dedupingInterval:6e5}),m=(0,i.useCallback)((()=>{h.Z.delete(`${(0,E.Z)()}/api/together/${e.id}`,{headers:{Authorization:"Bearer "+(0,w.LP)()}}).then((()=>{alert("삭제되었습니다"),a()})).catch((e=>(0,k.Z)(e)))}),[a,e]),u=e=>{if(r){const t=r.EventList.find((n=>n.id===parseInt(e.target.id,10)));n(t)}};return(0,i.useEffect)((()=>{r&&r.EventList.length&&n(r.EventList[0])}),[r]),i.createElement(i.Fragment,null,i.createElement("div",{className:"result"},i.createElement("div",{className:"result--guide"},i.createElement("p",null,"신청한 이벤트의 팀을 짤 수 있는 공간입니다!"),i.createElement("p",null,"팀 매칭은 이벤트를 생성한 분만 가능하시구요~")),r&&r.EventList&&r.EventList.length>0&&i.createElement("div",{className:"result--event_list"},r.EventList.sort(((e,n)=>n.id-e.id)).map(((n,t)=>i.createElement("div",{className:`result--event ${n.id===e.id&&"selected"}`,key:t},i.createElement("span",{id:n.id.toString(),onClick:u},n.title))))),i.createElement("div",{className:l&&!Object.keys(l.teamList).find((e=>"null"===e))&&Object.keys(l.teamList).length?"result--table":"result--submit"},i.createElement("div",{className:"result--submit--delete_event",onClick:()=>{window.confirm("이벤트를 삭제하시겠습니까?")&&m()}},"삭제하기"),l&&!Object.keys(l.teamList).find((e=>"null"===e))&&Object.keys(l.teamList).length&&r&&r.EventList.length?Object.entries(l.teamList).map(((e,n)=>i.createElement("div",{key:e[0]},i.createElement("p",{className:"result--team_name"},e[0]),e[1].map(((e,n)=>i.createElement("p",{key:n,className:"result--intra"},e.intraId)))))):l&&Object.keys(l.teamList).find((e=>"null"===e))?i.createElement(i.Fragment,null,i.createElement("div",{className:"result--submit--info_wrapper"},i.createElement("p",{className:"result--submit--event_title"},e.title),i.createElement("p",{className:"result--submit--event_description"},e.description),i.createElement("hr",{className:"result--submit--event_bot_line"}),i.createElement("p",{className:"result--submit--info"},"아직 팀매칭이 이루어지지 않았습니다."),i.createElement("p",{className:"result--submit--info"},"원하는 팀원수를 적고 매칭을 눌러주세요!"),i.createElement("p",{className:"result--submit--info"},`현재 신청 인원은 ${l.teamList.null.length}명입니다.`)),i.createElement("div",{className:"result--submit--form_wrapper"},i.createElement("form",{onSubmit:n=>{n.preventDefault(),""!==t&&(0,w.LP)()?h.Z.post(`${(0,E.Z)()}/api/together/matching`,{eventId:e.id,teamNum:t},{headers:{Authorization:"Bearer "+(0,w.LP)()}}).then((()=>{alert("매칭성공"),A()})).catch((e=>(0,k.Z)(e))):(0,w.LP)()?""===t&&alert("몇 명으로 매칭하실 건지 적어주세요"):(alert("로그인 하셔야 사용 가능합니다"),o("/auth"))},className:"result--submit--form"},i.createElement("input",{className:"result--submit--input",onChange:e=>{s(e.target.value)},value:t}),i.createElement("span",{className:"result--submit--label"},"팀으로 "),i.createElement("button",{className:"result--submit--button"},"매칭하기")))):i.createElement("div",{className:"result--submit--info_wrapper"},i.createElement("p",{className:"result--submit--event_title"},e.title),i.createElement("p",{className:"result--submit--event_description"},e.description),i.createElement("hr",{className:"result--submit--event_bot_line"}),i.createElement("p",{className:"result--submit--info"},"신청하신 분이 없습니다..")))),i.createElement(x,null))}},5996:(e,n,t)=>{t.d(n,{Z:()=>i});const i=e=>{e?.response?.data?.message?alert(e.response.data.message):alert("알 수 없는 오류..")}},2591:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(1817),s=t(5996);const o=e=>i.Z.get(e).then((e=>e.data)).catch((e=>(0,s.Z)(e)))},8933:(e,n,t)=>{t.d(n,{Z:()=>i});const i=function(){return"https://together.42jip.net"}},2889:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(7537),s=t.n(i),o=t(3645),r=t.n(o)()(s());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rowdies&display=swap);"]),r.push([e.id,".bold{font-weight:bold}.black{color:#000}.result--footer{position:relative;height:150px}@media(min-width: 700px){.result--footer{width:700px;margin:0 auto}}@media(max-width: 700px){.result--footer{width:100%}}.result--footer--image{position:absolute;right:0px}@media(min-width: 700px){.result--footer--image{width:100px;top:30px}}@media(max-width: 700px){.result--footer--image{width:80px;top:20px}}","",{version:3,sources:["webpack://./src/assets/css/fonts.scss","webpack://./src/assets/css/Result/Footer.scss","webpack://./src/assets/css/useful.scss"],names:[],mappings:"AA2DA,MACE,gBAAA,CAGF,OACE,UAAA,CC9DF,gBACE,iBAAA,CACA,YAAA,CCGA,yBDLF,gBCwBE,WAxBY,CAyBZ,aAAA,CAAA,CAdA,yBDXF,gBAOI,UAAA,CAAA,CAIJ,uBACE,iBAAA,CACA,SAAA,CCRA,yBDMF,uBAII,WAAA,CACA,QAAA,CAAA,CCLF,yBAAA,uBDQE,UAAA,CACA,QAAA,CAAA",sourcesContent:["// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_darker: #252323;\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_medium: rgb(140, 140, 140);\n$darkgrey_light: rgb(184, 184, 184);\n$lightgrey: rgb(237, 238, 239);\n$white: white;\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set-default\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n@mixin medium_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n// font-set-white\n@mixin big_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $sub_title_18;\n  color: $white;\n}\n\n@mixin medium_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $white;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.black {\n  color: black;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');\n","@import '@css/useful.scss';\n\n.result--footer {\n  position: relative;\n  height: 150px;\n  @include desktop {\n    @include basic--wrappers;\n  }\n  @include mobile {\n    width: 100%;\n  }\n}\n\n.result--footer--image {\n  position: absolute;\n  right: 0px;\n  @include desktop {\n    width: 100px;\n    top: 30px;\n  }\n  @include mobile {\n    width: 80px;\n    top: 20px;\n  }\n}\n","@import '@css/fonts.scss';\n\n$basic_width: 700px;\n$desktop: 1024px;\n\n// device mode\n@mixin desktop {\n  @media (min-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin mobile {\n  @media (max-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin galaxyFold {\n  @media (max-width: 300px) {\n    @content;\n  }\n}\n\n// utils\n@mixin basic--wrappers {\n  width: $basic_width;\n  margin: 0 auto;\n}\n"],sourceRoot:""}]);const a=r},8059:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(7537),s=t.n(i),o=t(3645),r=t.n(o)()(s());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rowdies&display=swap);"]),r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rowdies&display=swap);"]),r.push([e.id,'.bold{font-weight:bold}.black{color:#000}.bold{font-weight:bold}.black{color:#000}@media(min-width: 700px){.result{width:700px;margin:0 auto}}@media(max-width: 700px){.result{width:100%}}.result--title{font-family:"Noto Sans KR",sans-serif;font-size:16px;color:#505050}.result--guide{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;text-align:center;margin-bottom:70px}.result--event_list{display:grid;row-gap:15px;margin-bottom:70px}@media(min-width: 700px){.result--event_list{grid-template-columns:repeat(auto-fit, minmax(25%, auto))}}@media(max-width: 700px){.result--event_list{grid-template-columns:repeat(auto-fit, minmax(50%, auto));padding:0 20px}}.selected{color:#000 !important}.result--event{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;color:rgba(80,80,80,.5607843137);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:10px;text-align:center;height:25px}.result--event span:hover{cursor:pointer;font-size:16px}.result--table{position:relative;display:grid;background-color:rgba(178,186,187,.2392156863);padding:40px}.result--table p{color:#505050}@media(min-width: 700px){.result--table{grid-template-columns:repeat(auto-fit, minmax(20%, auto))}}@media(max-width: 700px){.result--table{grid-template-columns:repeat(auto-fit, minmax(33.3333333333%, auto))}}.result--submit{background-color:rgba(178,186,187,.2392156863);position:relative}@media(min-width: 700px){.result--submit{padding:30px 100px}}@media(max-width: 700px){.result--submit{padding:30px 20px}}.result--submit--delete_event{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;position:absolute;right:-4px;top:-25px;width:70px;text-align:center;border-radius:8px}.result--submit--delete_event:hover{cursor:pointer;transform:scale(1.1)}@media(min-width: 700px){.result--submit--delete_event{right:-4px}}@media(max-width: 700px){.result--submit--delete_event{right:0px}}.test{border:1px solid}.result--submit--event_title{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050}.result--submit--event_description{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;color:#8c8c8c}.result--submit--event_bot_line{border:0;height:.5px;background-color:#b8b8b8}.result--submit--info{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050}.result--submit--form_wrapper{text-align:end}.result--submit--input{width:40px;border:none;border-bottom:1px solid #505050;font-size:15px;text-align:center;background:none}.result--submit--input:focus{outline:none}.result--submit--label{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050}.result--submit--button{font-family:"Noto Sans KR",sans-serif;font-size:16px;color:rgba(159,6,43,.6392156863);background:none;border:none}.result--submit--button:hover{cursor:pointer}.result--team_name{font-family:"Roboto",sans-serif;font-size:15px;color:#505050;font-weight:500;font-size:18px;text-align:center;border-bottom:1px solid #b8b8b8;margin:0;padding:10px}.result--intra{font-family:"Roboto",sans-serif;font-size:15px;color:#505050;text-align:center}.result--hr{position:absolute;width:600px;top:60px;border:0;height:.5px;background-color:#b8b8b8}.result--no_attend{font-family:"Noto Sans KR",sans-serif;font-size:15px;color:#505050;font-size:16px;margin:30px 0}',"",{version:3,sources:["webpack://./src/assets/css/fonts.scss","webpack://./src/assets/css/useful.scss","webpack://./src/assets/css/Result/Result.scss","webpack://./src/assets/css/Main/Main.scss"],names:[],mappings:"AA2DA,MACE,gBAAA,CAGF,OACE,UAAA,CALF,MACE,gBAAA,CAGF,OACE,UAAA,CCzDA,yBCFF,QDqBE,WAxBY,CAyBZ,aAAA,CAAA,CAdA,yBCRF,QAKI,UAAA,CAAA,CAIJ,eCLE,qCHRiB,CGSjB,cAAA,CACA,aHLiB,CEYnB,eFKE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CEcjB,iBAAA,CACA,kBAAA,CAGF,oBACE,YAAA,CACA,YAAA,CACA,kBAAA,CDpBA,yBCiBF,oBAKI,yDAAA,CAAA,CDhBF,yBCWF,oBAQI,yDAAA,CACA,cAAA,CAAA,CAIJ,UACE,qBAAA,CAGF,eFlBE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CEqCjB,gCAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CAEE,0BACE,cAAA,CACA,cAAA,CAKN,eACE,iBAAA,CACA,YAAA,CACA,8CAAA,CACA,YA3Dc,CA4Dd,iBACE,aF1De,CCCjB,yBCmDF,eASI,yDAAA,CAAA,CDtDF,yBC6CF,eAYI,oEAAA,CAAA,CAIJ,gBACE,8CAAA,CACA,iBAAA,CDrEA,yBCmEF,gBAII,kBAAA,CAAA,CDjEF,yBC6DF,gBAOI,iBAAA,CAAA,CAIJ,8BF9DE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CEiFjB,iBAAA,CACA,UAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,oCACE,cAAA,CACA,oBAAA,CDxFF,yBC8EF,8BAaI,UAAA,CAAA,CDrFF,yBCwEF,8BAgBI,SAAA,CAAA,CAIJ,MACE,gBAAA,CAGF,6BFtFE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CE2GnB,mCF1FE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CE6GjB,aF5GgB,CE+GlB,gCACE,QAAA,CACA,WAAA,CACA,wBFjHe,CEoHjB,sBFrGE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CE0HnB,8BACE,cAAA,CAGF,uBACE,UAAA,CACA,WAAA,CACA,+BAAA,CACA,cFtHkB,CEuHlB,iBAAA,CACA,eAAA,CACA,6BACE,YAAA,CAIJ,uBFzHE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CE8InB,wBACE,qCFpJiB,CEqJjB,cAAA,CACA,gCF1Ie,CE2If,eAAA,CACA,WAAA,CACA,8BACE,cAAA,CAIJ,mBF5HE,+BAjCiB,CAkCjB,cAlBkB,CAmBlB,aA/BiB,CE2JjB,eAAA,CACA,cFjJa,CEkJb,iBAAA,CACA,+BAAA,CACA,QAAA,CACA,YAAA,CAGF,eFtIE,+BAjCiB,CAkCjB,cAlBkB,CAmBlB,aA/BiB,CEqKjB,iBAAA,CAGF,YACE,iBAAA,CACA,WAAA,CACA,QAAA,CACA,QAAA,CACA,WAAA,CACA,wBF5Ke,CE+KjB,mBFhKE,qCAtBiB,CAuBjB,cANkB,CAOlB,aAnBiB,CEmLjB,cAAA,CACA,aAAA",sourcesContent:["// family\n$kor_font_regular: 'Noto Sans KR', sans-serif;\n$eng_font_regular: 'Roboto', sans-serif;\n\n// color\n$darkgrey_darker: #252323;\n$darkgrey_default: rgb(80, 80, 80);\n$darkgrey_medium: rgb(140, 140, 140);\n$darkgrey_light: rgb(184, 184, 184);\n$lightgrey: rgb(237, 238, 239);\n$white: white;\n$lightblue: #73b2ed;\n$pinkred: #ec7063;\n$red_for_submit: #9f062ba3;\n\n//size\n$main_title_22: 22px;\n$sub_title_18: 18px;\n$default_medium_15: 15px;\n$default_small_13: 13px;\n\n// font-set-default\n@mixin medium_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_kor {\n  font-family: $kor_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n@mixin medium_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_medium_15;\n  color: $darkgrey_default;\n}\n\n@mixin small_eng {\n  font-family: $eng_font_regular;\n  font-size: $default_small_13;\n  color: $darkgrey_default;\n}\n\n// font-set-white\n@mixin big_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $sub_title_18;\n  color: $white;\n}\n\n@mixin medium_kor_white {\n  font-family: $kor_font_regular;\n  font-size: $default_medium_15;\n  color: $white;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.black {\n  color: black;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');\n","@import '@css/fonts.scss';\n\n$basic_width: 700px;\n$desktop: 1024px;\n\n// device mode\n@mixin desktop {\n  @media (min-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin mobile {\n  @media (max-width: $basic_width) {\n    @content;\n  }\n}\n\n@mixin galaxyFold {\n  @media (max-width: 300px) {\n    @content;\n  }\n}\n\n// utils\n@mixin basic--wrappers {\n  width: $basic_width;\n  margin: 0 auto;\n}\n","@import '@css/Main/Main.scss';\n@import '@css/useful.scss';\n\n$table_padding: 40px;\n\n.result {\n  @include desktop {\n    @include basic--wrappers;\n  }\n  @include mobile {\n    width: 100%;\n  }\n}\n\n.result--title {\n  @include main--titles;\n}\n\n.result--guide {\n  @include medium_kor;\n  text-align: center;\n  margin-bottom: 70px;\n}\n\n.result--event_list {\n  display: grid;\n  row-gap: 15px;\n  margin-bottom: 70px;\n  @include desktop {\n    grid-template-columns: repeat(auto-fit, minmax(25%, auto));\n  }\n  @include mobile {\n    grid-template-columns: repeat(auto-fit, minmax(50%, auto));\n    padding: 0 20px;\n  }\n}\n\n.selected {\n  color: black !important;\n}\n\n.result--event {\n  @include medium_kor;\n  color: #5050508f;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  text-align: center;\n  height: 25px;\n  span {\n    &:hover {\n      cursor: pointer;\n      font-size: 16px;\n    }\n  }\n}\n\n.result--table {\n  position: relative;\n  display: grid;\n  background-color: #b2babb3d;\n  padding: $table_padding;\n  p {\n    color: $darkgrey_default;\n  }\n  @include desktop {\n    grid-template-columns: repeat(auto-fit, minmax(20%, auto));\n  }\n  @include mobile {\n    grid-template-columns: repeat(auto-fit, minmax(calc(100% / 3), auto));\n  }\n}\n\n.result--submit {\n  background-color: #b2babb3d;\n  position: relative;\n  @include desktop {\n    padding: 30px 100px;\n  }\n  @include mobile {\n    padding: 30px 20px;\n  }\n}\n\n.result--submit--delete_event {\n  @include medium_kor;\n  position: absolute;\n  right: -4px;\n  top: -25px;\n  width: 70px;\n  text-align: center;\n  border-radius: 8px;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n  @include desktop {\n    right: -4px;\n  }\n  @include mobile {\n    right: 0px;\n  }\n}\n\n.test {\n  border: 1px solid;\n}\n\n.result--submit--event_title {\n  @include medium_kor;\n}\n\n.result--submit--event_description {\n  @include medium_kor;\n  color: $darkgrey_medium;\n}\n\n.result--submit--event_bot_line {\n  border: 0;\n  height: 0.5px;\n  background-color: $darkgrey_light;\n}\n\n.result--submit--info {\n  @include medium_kor;\n}\n\n.result--submit--form_wrapper {\n  text-align: end;\n}\n\n.result--submit--input {\n  width: 40px;\n  border: none;\n  border-bottom: 1px solid $darkgrey_default;\n  font-size: $default_medium_15;\n  text-align: center;\n  background: none;\n  &:focus {\n    outline: none;\n  }\n}\n\n.result--submit--label {\n  @include medium_kor;\n}\n\n.result--submit--button {\n  font-family: $kor_font_regular;\n  font-size: 16px;\n  color: $red_for_submit;\n  background: none;\n  border: none;\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.result--team_name {\n  @include medium_eng;\n  font-weight: 500;\n  font-size: $sub_title_18;\n  text-align: center;\n  border-bottom: 1px solid $darkgrey_light;\n  margin: 0;\n  padding: 10px;\n}\n\n.result--intra {\n  @include medium_eng;\n  text-align: center;\n}\n\n.result--hr {\n  position: absolute;\n  width: 600px;\n  top: 60px;\n  border: 0;\n  height: 0.5px;\n  background-color: $darkgrey_light;\n}\n\n.result--no_attend {\n  @include medium_kor;\n  font-size: 16px;\n  margin: 30px 0;\n}\n","@import '@css/fonts.scss';\n\n@mixin main--wrappers {\n  width: 600px;\n  margin: 0 auto;\n}\n\n@mixin main--titles {\n  // font-weight: 300;\n  font-family: $kor_font_regular;\n  font-size: 16px;\n  color: $darkgrey_default;\n}\n"],sourceRoot:""}]);const a=r}}]);