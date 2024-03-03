import{_ as v,j as u,m as V,c as p,b as t,a as e,w as y,F as x,k,f as w,r as i,o as _,i as C,h}from"./index-CzXxoeaI.js";document.title="馬上登入";const M={data(){return{user:{email:"",password:""},loginError:!1,isLoading:!1}},methods:{login(){this.isLoading=!0,this.axios.post("https://whatstoday2024-8nsu.onrender.com/login",this.user).then(r=>{const{accessToken:s,user:a}=r.data;this.$cookie.setMemberToken(s),this.$cookie.setMemberId(a.id),this.setMemberData(a),this.isLoading=!1;const l=1e3;a.isAdmin?(u.success("登入成功！前往後台",{autoClose:l}),setTimeout(()=>{this.$router.push({name:"AdminItems"})},l)):(u.success("登入成功！前往菜單",{autoClose:l}),setTimeout(()=>{this.$router.push({name:"MenuView"})},l))}).catch(()=>{this.loginError=!0,this.isLoading=!1})},...V(k,["setMemberData"])}},E={class:"container flex-fill py-4 py-lg-5 d-flex align-items-center"},F={class:"w-100"},L={class:"row g-3 g-lg-4 justify-content-evenly"},T=e("div",{class:"col-lg-5 align-self-lg-center"},[e("div",{class:"text-center text-lg-end opacity-75"},[e("h2",{class:"display-6"},[w(" 健康、美味、驚喜 "),e("span",{class:"d-block mt-3"},"一鍵獲得")])])],-1),N={class:"col-lg-6"},$=e("h1",{class:"h2 mb-3 text-center"},"登入會員",-1),A={class:"text-center"},B={key:0,class:"alert alert-danger mb-4"},S={class:"form-floating mb-4"},j=e("label",{for:"email"},"請輸入電子信箱",-1),q={class:"form-floating mb-4"},D=e("label",{for:"password"},"請輸入密碼",-1),I=e("button",{type:"submit",class:"btn btn-primary btn-lg rounded-pill"},"登入",-1);function U(r,s,a,l,o,g){const b=i("loadingVue"),d=i("VField"),c=i("ErrorMessage"),f=i("VForm");return _(),p(x,null,[t(b,{active:o.isLoading},null,8,["active"]),e("div",E,[e("div",F,[e("div",L,[T,e("div",N,[t(f,{class:"card border-primary rounded-4 p-4 p-lg-5",onSubmit:g.login},{default:y(({errors:m})=>[$,e("div",A,[e("button",{type:"button",class:"btn btn-outline-primary mb-4 rounded-pill px-3",onClick:s[0]||(s[0]=n=>r.$router.push({name:"Register"}))},"還不是會員？前往註冊")]),o.loginError?(_(),p("div",B," 登入失敗！請確認帳號與密碼是否正確。 ")):C("",!0),e("div",S,[t(d,{type:"email",id:"email",placeholder:"請輸入電子信箱",name:"信箱",class:h(["form-control",{"is-invalid":m.信箱}]),rules:"email|required",modelValue:o.user.email,"onUpdate:modelValue":s[1]||(s[1]=n=>o.user.email=n)},null,8,["class","modelValue"]),t(c,{name:"信箱",class:"invalid-feedback"}),j]),e("div",q,[t(d,{type:"password",id:"password",placeholder:"請輸入密碼",name:"密碼",class:h(["form-control",{"is-invalid":m.密碼}]),rules:"required",modelValue:o.user.password,"onUpdate:modelValue":s[2]||(s[2]=n=>o.user.password=n)},null,8,["class","modelValue"]),t(c,{name:"密碼",class:"invalid-feedback"}),D]),I]),_:1},8,["onSubmit"])])])])])],64)}const R=v(M,[["render",U]]);export{R as default};
