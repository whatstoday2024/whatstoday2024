import{_ as q,B as p,j as f,m as D,c as a,b as i,a as e,w as m,F as v,k as A,r as g,o as r,f as y,h as _,g as I,t as k,i as b,l as E,x as z,p as B,e as N}from"./index-JGpVG-b7.js";import{d as O,b as j}from"./index-BbF69XYG.js";import{i as R}from"./variables-Cw9ILbJu.js";const G={data(){return{portionOptions:[0,.25,.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4,4.25,4.5,4.75,5],items:R,item:{title:"",engTitle:"",category:"",healthLevel:"",starchPortion:"",proteinPortion:"",vegetablePortion:"",imgUrl:"",images:[],noBgImg:""},tempImg1:"",tempImg2:"",errorMsg:"",isLoading:!1}},components:{DeleteFilled:O,ElSelect:j},methods:{uploadImg(){const n=document.querySelector("#upload-image"),s=document.querySelector("#file-input"),V=new FormData(n);if(s.value){this.isLoading=!0;const x=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=x,p.post("https://vue3-course-api.hexschool.io/v2/api/whatstoday2024/admin/upload",V).then(o=>{this.tempImg1=o.data.imageUrl,s.value="",p.defaults.headers.common.Authorization=null}).catch(o=>{alert(o.data.message),p.defaults.headers.common.Authorization=null}).finally(()=>{this.isLoading=!1})}else alert("請先選擇欲上傳之圖片。"),p.defaults.headers.common.Authorization=null},async editItem(){if(this.item.imgUrl===""){this.errorMsg="主圖為必填";return}this.isLoading=!0;try{await p.patch(`https://whatstoday2024-8nsu.onrender.com/dishes/${this.item.id}`,this.item),f.success("成功編輯菜色")}catch(n){f.error(n.data.message)}this.isLoading=!1},addImage1(){this.item.images.push(this.tempImg1),this.tempImg1=""},addImage2(){this.item.images.push(this.tempImg2),this.tempImg2=""},chooseMainImg(n){this.item.imgUrl=n},deleteImg(n,s){if(s===this.item.imgUrl){f.error("不能刪除當前主圖，若欲刪除請先置換主圖");return}this.item.images.splice(n,1)},async getItem(n){this.isLoading=!0;try{const s=await p.get(`https://whatstoday2024-8nsu.onrender.com/dishes/${n}`);console.log(s.data.message),this.item=s.data.message}catch{f.error("查無此菜色")}this.isLoading=!1},...D(A,["checkIsAdmin","getUser"])},watch:{"item.imgUrl":function(){this.errorMsg=""}},async mounted(){document.title="菜色編輯",await this.getUser(),this.checkIsAdmin()||(f.error("非管理者無法執行"),this.$router.push("/"));const n=this.$route.params.id;await this.getItem(n)}},l=n=>(B("data-v-93b10dac"),n=n(),N(),n),H={class:"container my-5"},J={class:"text-start mb-4 d-flex justify-content-between border-bottom pb-3"},K=l(()=>e("h3",null,"編輯菜色",-1)),Q={type:"button",class:"btn btn-outline-primary me-2"},W={type:"button",class:"btn btn-outline-brand-blue"},X={class:"p-2 p-lg-3 col-md-6"},Y=l(()=>e("h5",null,"菜色名稱 / 分類 / 健康分數",-1)),Z={class:"form-floating mb-4"},$=l(()=>e("label",{for:"title"},"中文名稱*",-1)),ee={class:"form-floating mb-4"},te=l(()=>e("label",{for:"engTitle"},"英文名稱*",-1)),oe={class:"form-floating mb-4"},se=l(()=>e("option",{value:"主食類"},"主食類",-1)),le=l(()=>e("option",{value:"配菜類"},"配菜類",-1)),ie=l(()=>e("option",{value:"主菜類"},"主菜類",-1)),ne=l(()=>e("label",{for:"category"},"分類*",-1)),ae={class:"form-floating mb-4"},re=l(()=>e("option",{value:"1"},"1",-1)),de=l(()=>e("option",{value:"1.5"},"1.5",-1)),me=l(()=>e("option",{value:"2"},"2",-1)),ce=l(()=>e("option",{value:"2.5"},"2.5",-1)),ue=l(()=>e("option",{value:"3"},"3",-1)),he=l(()=>e("option",{value:"3.5"},"3.5",-1)),pe=l(()=>e("option",{value:"4"},"4",-1)),ge=l(()=>e("option",{value:"4.5"},"4.5",-1)),_e=l(()=>e("option",{value:"5"},"5",-1)),be=l(()=>e("label",{for:"healthLevel"},"健康分數*",-1)),fe=l(()=>e("h5",null,"營養比例(份)",-1)),ve={class:"form-floating mb-4"},ye=["value"],Ie=l(()=>e("label",{for:"starchPortion"},"澱粉比例*",-1)),ke={class:"form-floating mb-4"},Ve=["value"],xe=l(()=>e("label",{for:"proteinPortion"},"蛋白質比例*",-1)),Pe={class:"form-floating mb-4"},we=["value"],Ue=l(()=>e("label",{for:"vegetablePortion"},"蔬菜比例*",-1)),Le={class:"p-2 p-lg-3 col-md-6"},Ce=l(()=>e("h5",null,"菜色圖片",-1)),Fe={id:"upload-image",class:"mb-2",action:"/api/whatstoday2024/admin/upload",enctype:"multipart/form-data",method:"post"},Se=l(()=>e("label",{for:"formFile",class:"form-label"},"上傳圖片",-1)),Me=["src"],Te={class:"form-floating mb-4"},qe={class:"form-group mb-3"},De=l(()=>e("label",{for:"imgUrl",class:"form-label"},"圖片網址",-1)),Ae=["src"],Ee={class:"mb-3"},ze=l(()=>e("span",null,"主圖*",-1)),Be={class:"errorMsg"},Ne={key:0},Oe=["src"],je={"mb-3":""},Re={key:0,class:"img-box"},Ge=["src"],He=["onClick"],Je=["onClick"],Ke=l(()=>e("div",{class:"d-flex gap-2 mt-3 btn-container"},[e("button",{type:"submit",class:"btn btn-brand-blue btn-md mb-4"},"確認")],-1));function Qe(n,s,V,x,o,d){const S=g("loadingVue"),P=g("RouterLink"),c=g("VField"),u=g("ErrorMessage"),w=g("ElSelect"),U=g("DeleteFilled"),M=g("VForm");return r(),a(v,null,[i(S,{active:o.isLoading},null,8,["active"]),e("div",H,[e("div",J,[K,e("div",null,[e("button",Q,[i(P,{class:"navbar-brand",to:"/admin/dashboard"},{default:m(()=>[y(" Dashboard ")]),_:1})]),e("button",W,[i(P,{class:"navbar-brand",to:"/admin/admin-items"},{default:m(()=>[y(" 菜色列表 ")]),_:1})])])]),i(M,{class:"row",onSubmit:d.editItem},{default:m(({errors:h})=>{var L,C;return[e("div",X,[e("div",null,[Y,e("div",Z,[i(c,{type:"text",id:"title",placeholder:"請輸入菜色名稱",name:"title",class:_(["form-control",{"is-invalid":h.title}]),rules:"required",modelValue:o.item.title,"onUpdate:modelValue":s[0]||(s[0]=t=>o.item.title=t)},null,8,["class","modelValue"]),i(u,{name:"title",class:"invalid-feedback"}),$]),e("div",ee,[i(c,{type:"text",id:"engTitle",placeholder:"請輸入英文名稱",name:"engTitle",class:_(["form-control",{"is-invalid":h.engTitle}]),rules:"required",modelValue:o.item.engTitle,"onUpdate:modelValue":s[1]||(s[1]=t=>o.item.engTitle=t)},null,8,["class","modelValue"]),i(u,{name:"engTitle",class:"invalid-feedback"}),te]),e("div",oe,[i(c,{as:"select",id:"category",placeholder:"請選擇分類",name:"category",class:_(["form-select",{"is-invalid":h.category}]),rules:"required",modelValue:o.item.category,"onUpdate:modelValue":s[2]||(s[2]=t=>o.item.category=t)},{default:m(()=>[se,le,ie]),_:2},1032,["class","modelValue"]),i(u,{name:"category",class:"invalid-feedback"}),ne]),e("div",ae,[i(c,{as:"select",id:"healthLevel",placeholder:"請選擇健康分數",name:"healthLevel",class:_(["form-select",{"is-invalid":h.healthLevel}]),rules:"required",modelValue:o.item.healthLevel,"onUpdate:modelValue":s[3]||(s[3]=t=>o.item.healthLevel=t)},{default:m(()=>[re,de,me,ce,ue,he,pe,ge,_e]),_:2},1032,["class","modelValue"]),i(u,{name:"healthLevel",class:"invalid-feedback"}),be])]),e("div",null,[fe,e("div",ve,[i(c,{as:"select",id:"starchPortion",placeholder:"請選擇澱粉比例",name:"starchPortion",class:_(["form-select",{"is-invalid":h.starchPortion}]),rules:"required",modelValue:o.item.starchPortion,"onUpdate:modelValue":s[4]||(s[4]=t=>o.item.starchPortion=t)},{default:m(()=>[(r(!0),a(v,null,I(o.portionOptions,t=>(r(),a("option",{value:t,key:t},k(t),9,ye))),128))]),_:2},1032,["class","modelValue"]),i(u,{name:"starchPortion",class:"invalid-feedback"}),Ie]),e("div",ke,[i(c,{as:"select",id:"proteinPortion",placeholder:"請選擇蛋白質比例",name:"proteinPortion",class:_(["form-select",{"is-invalid":h.proteinPortion}]),rules:"required",modelValue:o.item.proteinPortion,"onUpdate:modelValue":s[5]||(s[5]=t=>o.item.proteinPortion=t)},{default:m(()=>[(r(!0),a(v,null,I(o.portionOptions,t=>(r(),a("option",{value:t,key:t},k(t),9,Ve))),128))]),_:2},1032,["class","modelValue"]),i(u,{name:"proteinPortion",class:"invalid-feedback"}),xe]),e("div",Pe,[i(c,{as:"select",id:"vegetablePortion",placeholder:"請選擇蔬菜比例",name:"vegetablePortion",class:_(["form-select",{"is-invalid":h.vegetablePortion}]),rules:"required",modelValue:o.item.vegetablePortion,"onUpdate:modelValue":s[6]||(s[6]=t=>o.item.vegetablePortion=t)},{default:m(()=>[(r(!0),a(v,null,I(o.portionOptions,t=>(r(),a("option",{value:t,key:t},k(t),9,we))),128))]),_:2},1032,["class","modelValue"]),i(u,{name:"vegetablePortion",class:"invalid-feedback"}),Ue])])]),e("div",Le,[e("div",null,[Ce,e("form",Fe,[Se,e("input",{ref:"input-file",class:"form-control",type:"file",id:"file-input",name:"file-to-upload",onChange:s[7]||(s[7]=(...t)=>d.uploadImg&&d.uploadImg(...t))},null,544),o.tempImg1!==""?(r(),a("img",{key:0,class:"img",src:o.tempImg1,alt:"image"},null,8,Me)):b("",!0),o.tempImg1!==""?(r(),a("button",{key:1,type:"button",onClick:s[8]||(s[8]=(...t)=>d.addImage1&&d.addImage1(...t)),class:"mt-2 btn btn-outline-brand-blue btn-sm"},"新增此圖片至圖片列表")):b("",!0)])]),e("div",null,[e("div",Te,[e("div",qe,[De,E(e("input",{id:"imgUrl","onUpdate:modelValue":s[9]||(s[9]=t=>o.tempImg2=t),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[z,o.tempImg2]]),o.tempImg2!==""?(r(),a("img",{key:0,class:"img",src:o.tempImg2,alt:"image"},null,8,Ae)):b("",!0),o.tempImg2!==""?(r(),a("button",{key:1,type:"button",onClick:s[10]||(s[10]=(...t)=>d.addImage2&&d.addImage2(...t)),class:"mt-2 btn btn-outline-brand-blue btn-sm"},"新增此圖片至圖片列表")):b("",!0)])])]),e("div",null,[e("div",Ee,[ze,e("span",Be,k(o.errorMsg),1),o.item.imgUrl?(r(),a("div",Ne,[e("img",{class:"img",src:o.item.imgUrl,alt:"image"},null,8,Oe)])):b("",!0)]),e("div",je,[e("span",null,[y("圖片列表(點選 "),i(w,{style:{width:"20px",height:"20px",color:"yellow"}}),y("成為主圖 / "),i(U,{style:{width:"20px",height:"20px",color:"black"}}),y("刪除圖片) ")]),(C=(L=o.item)==null?void 0:L.images)!=null&&C.length?(r(),a("div",Re,[(r(!0),a(v,null,I(o.item.images,(t,F)=>(r(),a("div",{key:F,style:{position:"relative"}},[e("img",{class:"img",src:t,alt:"image"},null,8,Ge),e("span",{onClick:T=>d.chooseMainImg(t)},[i(w,{style:{width:"20px",height:"20px",color:"yellow",position:"absolute",top:"1",left:"1",cursor:"pointer"}})],8,He),e("span",{onClick:T=>d.deleteImg(F,t)},[i(U,{style:{width:"20px",height:"20px",color:"#d4d4d4",position:"absolute",top:"1",right:"1",cursor:"pointer"}})],8,Je)]))),128))])):b("",!0)])]),Ke])]}),_:1},8,["onSubmit"])])],64)}const Ze=q(G,[["render",Qe],["__scopeId","data-v-93b10dac"]]);export{Ze as default};
