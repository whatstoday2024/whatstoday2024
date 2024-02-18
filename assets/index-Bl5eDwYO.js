import{_ as x,c as a,b as s,h as f,k as n,v as g,g as v,F as h,r as m,j as b,l as p,t as r,a as d,o as c,i as w,p as y,f as k}from"./index-O---iDXo.js";const C="/assets/white_rice-IDZ1oya0.png",L="/assets/stirfried_loofah-Drdv4ER9.png",j="/assets/braised_lion's_head-jyRS-eiQ.png";document.title="來點菜單";const M={data(){return{mode:"default",white_rice:C,stir_fried_loofah:L,braised_lion_s_head:j,isChecked:!1,isChecked2:!1,isChecked3:!1,filter:"all",temp:{name:"白飯",engName:"white rice",img:this.white_rice,category:"主食類",portion:{starch:4,protein:0,vegetable:0},preferenceLevel:5,healthPoint:3}}},computed:{},mounted(){},methods:{moveToGeneratorBtn(){document.querySelector("#bentoGenerator").scrollIntoView({behavior:"smooth"})}}},o=_=>(y("data-v-40201340"),_=_(),k(),_),B={class:"container"},V=o(()=>s("div",{class:"title"},[s("h2",{class:"text-center mb-3"},"帶您探索菜色的無限可能"),s("div",{class:"site-induction-btn btn p-0 d-flex"},[s("i",{class:"fa-solid fa-circle-info text-secondary fs-2",title:"網站介紹"})])],-1)),D={class:"mode-btns text-center"},S={class:"btn-group mb-2",role:"group","aria-label":"Basic outlined example"},G={class:"filter-sort-search-container mb-3 d-flex justify-content-between"},I={class:"category-filter",style:{width:"8rem"}},N=d('<option selected disabled data-v-40201340>篩選</option><option value="all" data-v-40201340>全部</option><option value="staple" data-v-40201340>主食類</option><option value="dishes" data-v-40201340>配菜類</option><option value="entree" data-v-40201340>主菜類</option>',5),U=[N],z=d('<div class="sort-search-container d-flex justify-content-between gap-2" data-v-40201340><div class="sort-dropdown dropdown" data-v-40201340><button class="btn btn-outline-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-v-40201340><strong data-v-40201340>三</strong></button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" data-v-40201340><li data-v-40201340><a class="dropdown-item" href="javascript:;" data-v-40201340>依 預設 排序</a></li><li data-v-40201340><a class="dropdown-item" href="javascript:;" data-v-40201340>依 喜好程度 排序</a></li><li data-v-40201340><a class="dropdown-item" href="javascript:;" data-v-40201340>依 健康分數 排序</a></li></ul></div><div class="search-input input-group" data-v-40201340><input type="text" class="form-control" placeholder="搜尋菜色" aria-label="Search" aria-describedby="basic-addon1" size="10" data-v-40201340><button class="btn btn-outline-primary" type="button" id="button-addon2" data-v-40201340><i class="fa-solid fa-magnifying-glass" data-v-40201340></i></button></div></div>',1),T={class:"menu border border-primary rounded mb-3"},H={class:"wrap w-80 mx-auto pt-5 pb-4"},P={key:0,class:"staple mb-4"},R=o(()=>s("h3",{class:"d-inline mx-2"},"主食類",-1)),E=o(()=>s("small",{class:"text-danger"},"*請至少選擇一樣",-1)),F=o(()=>s("hr",null,null,-1)),q={class:"cards row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4"},Q={class:"card h-100"},W=["src"],Z={class:"card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between"},A=o(()=>s("div",{class:"dish-info-btn btn p-0 d-flex"},[s("i",{class:"fa-solid fa-circle-info text-secondary fs-5 lh-sm",title:"菜色介紹","data-bs-toggle":"modal","data-bs-target":"#dishModal"})],-1)),J=o(()=>s("h5",{class:"card-title text-center"},"白飯",-1)),K=o(()=>s("small",{class:"card-eng-title mb-3 d-block text-center"},"White Rice",-1)),O={class:"input-group mx-auto"},X={class:"input-group-text"},Y=["disabled"],$=["disabled"],ss=d('<option value="1" selected data-v-40201340>1</option><option value="2" data-v-40201340>2</option><option value="3" data-v-40201340>3</option><option value="4" data-v-40201340>4</option><option value="5" data-v-40201340>5</option>',5),ts=[ss],os={key:1,class:"dishes mb-4"},es=o(()=>s("h3",{class:"d-inline mx-2"},"配菜類",-1)),ls=o(()=>s("small",{class:"text-danger"},"*請至少選擇三樣",-1)),is=o(()=>s("hr",null,null,-1)),ds={class:"cards row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4"},as=["src"],cs={class:"card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between"},ns=o(()=>s("div",{class:"dish-info-btn btn p-0 d-flex"},[s("i",{class:"fa-solid fa-circle-info text-secondary fs-5 lh-sm",title:"菜色介紹","data-bs-toggle":"modal","data-bs-target":"#dishModal"})],-1)),rs=o(()=>s("h5",{class:"card-title text-center"},"炒絲瓜",-1)),_s=o(()=>s("small",{class:"card-eng-title mb-3 d-block text-center"},"Stir-fried Loofah",-1)),hs={class:"input-group mx-auto"},ps=["disabled"],vs=["disabled"],ms=d('<option value="1" selected data-v-40201340>1</option><option value="2" data-v-40201340>2</option><option value="3" data-v-40201340>3</option><option value="4" data-v-40201340>4</option><option value="5" data-v-40201340>5</option>',5),bs=[ms],us={key:2,class:"entree mb-4"},fs=o(()=>s("h3",{class:"d-inline mx-2"},"主菜類",-1)),gs=o(()=>s("small",{class:"text-danger"},"*請至少選擇一樣",-1)),xs=o(()=>s("hr",null,null,-1)),ws={class:"cards row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4"},ys={class:"col"},ks={class:"card h-100"},Cs=["src"],Ls={class:"card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between"},js=o(()=>s("div",{class:"dish-info-btn btn p-0 d-flex"},[s("i",{class:"fa-solid fa-circle-info text-secondary fs-5 lh-sm",title:"菜色介紹","data-bs-toggle":"modal","data-bs-target":"#dishModal"})],-1)),Ms=o(()=>s("h5",{class:"card-title text-center"},"紅燒獅子頭",-1)),Bs=o(()=>s("small",{class:"card-eng-title mb-3 d-block text-center"},"Braised Laised Laised Laised Laised Laised Laised Laised Lio",-1)),Vs={class:"input-group mx-auto"},Ds={class:"input-group-text"},Ss=["disabled"],Gs=["disabled"],Is=d('<option value="1" selected data-v-40201340>1</option><option value="2" data-v-40201340>2</option><option value="3" data-v-40201340>3</option><option value="4" data-v-40201340>4</option><option value="5" data-v-40201340>5</option>',5),Ns=[Is],Us={class:"card h-100"},zs=["src"],Ts={class:"card-body dish-info mx-auto px-0 py-3 w-80 d-flex flex-column justify-content-between"},Hs=o(()=>s("div",{class:"dish-info-btn btn p-0 d-flex"},[s("i",{class:"fa-solid fa-circle-info text-secondary fs-5 lh-sm",title:"菜色介紹","data-bs-toggle":"modal","data-bs-target":"#dishModal"})],-1)),Ps=o(()=>s("h5",{class:"card-title text-center"},"紅燒獅子頭",-1)),Rs=o(()=>s("small",{class:"card-eng-title mb-3 d-block text-center"},"Braised Lion's Head (pork balls)",-1)),Es={class:"input-group mx-auto"},Fs={class:"input-group-text"},qs=["disabled"],Qs=d('<option value="1" selected data-v-40201340>1</option><option value="2" data-v-40201340>2</option><option value="3" data-v-40201340>3</option><option value="4" data-v-40201340>4</option><option value="5" data-v-40201340>5</option>',5),Ws=[Qs],Zs=o(()=>s("div",{id:"bentoGenerator",class:"bento-generator text-center"},[s("button",{type:"button",class:"btn btn-outline-primary bento-generator-btn mb-4 px-4 py-3","data-bs-toggle":"modal","data-bs-target":"#bentoModal"},"生成便當")],-1)),As=o(()=>s("div",{id:"bentoGenerator",class:"bento-generator text-center"},[s("button",{type:"button",class:"btn btn-outline-primary bento-generator-btn mb-4 px-4 py-3","data-bs-toggle":"modal","data-bs-target":"#dishModal"},"22222")],-1)),Js={class:"aside"},Ks={class:"aside-head"},Os=o(()=>s("i",{class:"fa-solid fa-angles-down"},null,-1)),Xs=[Os],Ys={class:"modal fade",id:"dishModal",tabindex:"-1","aria-labelledby":"dishModalLabel","aria-hidden":"true"},$s={class:"modal-dialog modal-lg modal-dialog-centered"},st={class:"modal-content dish"},tt=o(()=>s("div",{class:"modal-header px-4"},[s("h3",{class:"modal-title",id:"dishModalLabel"},"菜色介紹"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),ot={class:"modal-body"},et={class:"row row-cols-1 row-cols-lg-2"},lt={class:"col order-last order-lg-1 row row-cols-1 gap-3 mt-0 py-3 px-0 mx-auto justify-content-center"},it={class:"col row align-items-start"},dt=o(()=>s("div",{class:"col"},[s("h6",{class:"m-0 lh-base"},"中文菜名：")],-1)),at={class:"col"},ct={class:"m-0"},nt={class:"col row align-items-start"},rt=o(()=>s("div",{class:"col"},[s("h6",{class:"m-0 lh-base"},"英文菜名：")],-1)),_t={class:"col"},ht={class:"m-0"},pt={class:"col row align-items-center"},vt=o(()=>s("div",{class:"col"},[s("h6",{class:"m-0 lh-base"},"喜好程度：")],-1)),mt={class:"col"},bt=["disabled"],ut=d('<option value="1" data-v-40201340>1</option><option value="2" data-v-40201340>2</option><option value="3" data-v-40201340>3</option><option value="4" data-v-40201340>4</option><option value="5" data-v-40201340>5</option>',5),ft=[ut],gt={class:"col row align-items-start"},xt=o(()=>s("div",{class:"col"},[s("h6",{class:"m-0 lh-base"},"健康推薦指數：")],-1)),wt={class:"col"},yt={class:"m-0"},kt={class:"col row align-items-start"},Ct=o(()=>s("div",{class:"col"},[s("h6",{class:"m-0 lh-base"},"營養比例：")],-1)),Lt={class:"col"},jt={class:"row row-cols-1 justify-content-between"},Mt={class:"col row"},Bt=o(()=>s("div",{class:"col"},[s("p",{class:"m-0"},"澱粉")],-1)),Vt={class:"col"},Dt={class:"m-0 text-end"},St={class:"col row"},Gt=o(()=>s("div",{class:"col"},[s("p",{class:"m-0"},"蛋白質")],-1)),It={class:"col"},Nt={class:"m-0 text-end"},Ut={class:"col row"},zt=o(()=>s("div",{class:"col"},[s("p",{class:"m-0"},"蔬菜")],-1)),Tt={class:"col"},Ht={class:"m-0 text-end"},Pt={class:"col col-lg-5 col-8 p-3 order-first order-lg-2 mx-auto align-self-center"},Rt=["src"],Et={class:"modal fade",id:"bentoModal",tabindex:"-1","aria-labelledby":"bentoModalLabel","aria-hidden":"true"},Ft={class:"modal-dialog modal-lg modal-dialog-centered"},qt={class:"modal-content bento"},Qt=o(()=>s("div",{class:"modal-header px-4"},[s("h3",{class:"modal-title",id:"bentoModalLabel"},"今天吃什麼？"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Wt={class:"modal-body row m-0 row-cols-1 row-cols-lg-2"},Zt=d('<div class="bento-description col-lg-4 order-last order-lg-1 row m-0 p-lg-3" data-v-40201340><div class="nutrition-portion p-3 col-6 col-lg-12" data-v-40201340><h4 class="mb-3 lh-base" data-v-40201340>營養比例：</h4><div class="row row-cols-1" data-v-40201340><div class="col row row-cols-2" data-v-40201340><div class="col" data-v-40201340><p class="m-0" data-v-40201340>澱粉</p></div><div class="col" data-v-40201340><p class="m-0 text-end" data-v-40201340>1.225 碗</p></div></div><div class="col row row-cols-2" data-v-40201340><div class="col" data-v-40201340><p class="m-0" data-v-40201340>蛋白質</p></div><div class="col" data-v-40201340><p class="m-0 text-end" data-v-40201340>1.25 份</p></div></div><div class="col row row-cols-2" data-v-40201340><div class="col" data-v-40201340><p class="m-0" data-v-40201340>蔬菜</p></div><div class="col" data-v-40201340><p class="m-0 text-end" data-v-40201340>1.25 份</p></div></div></div></div><div class="btns text-center p-3 col-6 col-lg-12" data-v-40201340><button class="btn btn-outline-primary re-generate-btn px-4 py-3 m-2" data-v-40201340>重新生成便當</button><button class="btn btn-primary save-to-diary-btn px-4 py-3 m-2" data-v-40201340>存至便當日記</button></div></div>',1),At={class:"bento-presentation col-lg-8 order-first order-lg-2"},Jt={class:"border border-gray border-3 rounded w-100 h-100 p-3 pb-4"},Kt={class:"row g-2 h-100"},Ot={class:"col col-4 h-50"},Xt={class:"side-dish border border-gray border-3 rounded h-100"},Yt=["src"],$t={class:"col col-4 h-50"},so={class:"side-dish border border-gray border-3 rounded h-100"},to=["src"],oo={class:"col col-4 h-50"},eo={class:"side-dish border border-gray border-3 rounded h-100"},lo=["src"],io={class:"col col-12 h-50"},ao={class:"border border-gray border-3 rounded col-12 h-100 p-0 d-flex"},co={class:"staple w-50"},no=["src"],ro={class:"entree w-50"},_o=["src"];function ho(_,e,po,vo,t,u){return c(),a(h,null,[s("div",B,[V,s("div",D,[s("div",S,[s("button",{type:"button",class:f(["btn btn-outline-primary px-4 py-2",{active:t.mode==="default"}]),onClick:e[0]||(e[0]=l=>t.mode="default")},"預設模式",2),s("button",{type:"button",class:f(["btn btn-outline-primary px-4 py-2",{active:t.mode==="customization"}]),onClick:e[1]||(e[1]=l=>t.mode="customization")},"自選模式",2)])]),s("div",G,[s("div",I,[n(s("select",{class:"form-select outline-primary","aria-label":"Default select example","onUpdate:modelValue":e[2]||(e[2]=l=>t.filter=l)},U,512),[[g,t.filter]])]),z]),s("div",T,[s("div",H,[t.filter==="all"||t.filter==="staple"?(c(),a("div",P,[R,v(),E,F,s("div",q,[(c(),a(h,null,m(5,l=>s("div",{key:l,class:"col"},[s("div",Q,[s("img",{src:t.white_rice,class:"card-img-top",alt:"white_rice"},null,8,W),s("div",Z,[A,J,K,s("div",O,[s("div",X,[n(s("input",{class:"form-check-input mt-0",type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=i=>t.isChecked=i),"aria-label":"Checkbox for following text input",disabled:t.mode==="default"},null,8,Y),[[p,t.isChecked]])]),s("select",{class:"form-select","aria-label":"Default select example",disabled:!t.isChecked||t.mode==="default"},ts,8,$)])])])])),64))])])):b("",!0),t.filter==="all"||t.filter==="dishes"?(c(),a("div",os,[es,v(),ls,is,s("div",ds,[(c(),a(h,null,m(17,l=>s("div",{key:l,class:"col"},[s("div",{class:"card h-100",onClick:e[6]||(e[6]=i=>t.temp.name=999),"data-bs-toggle":"modal","data-bs-target":"#dishModal"},[s("img",{src:t.stir_fried_loofah,class:"card-img-top",alt:"stir_fried_loofah"},null,8,as),s("div",cs,[ns,rs,_s,s("div",hs,[s("div",{class:"input-group-text",onClick:e[5]||(e[5]=w(i=>i.stopPropagation(),["stop"]))},[n(s("input",{class:"form-check-input mt-0",type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=i=>t.isChecked2=i),"aria-label":"Checkbox for following text input",disabled:t.mode==="default"},null,8,ps),[[p,t.isChecked2]])]),s("select",{class:"form-select","aria-label":"Default select example",disabled:!t.isChecked2||t.mode==="default"},bs,8,vs)])])])])),64))])])):b("",!0),t.filter==="all"||t.filter==="entree"?(c(),a("div",us,[fs,v(),gs,xs,s("div",ws,[s("div",ys,[s("div",ks,[s("img",{src:t.braised_lion_s_head,class:"card-img-top",alt:"Braised Lion's Head"},null,8,Cs),s("div",Ls,[js,Ms,Bs,s("div",Vs,[s("div",Ds,[n(s("input",{class:"form-check-input mt-0",type:"checkbox","onUpdate:modelValue":e[7]||(e[7]=l=>t.isChecked3=l),"aria-label":"Checkbox for following text input",disabled:t.mode==="default"},null,8,Ss),[[p,t.isChecked3]])]),s("select",{class:"form-select","aria-label":"Default select example",disabled:!t.isChecked3||t.mode==="default"},Ns,8,Gs)])])])]),(c(),a(h,null,m(9,l=>s("div",{key:l,class:"col"},[s("div",Us,[s("img",{src:t.braised_lion_s_head,class:"card-img-top",alt:"Braised Lion's Head"},null,8,zs),s("div",Ts,[Hs,Ps,Rs,s("div",Es,[s("div",Fs,[n(s("input",{class:"form-check-input mt-0",type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=i=>t.isChecked3=i),"aria-label":"Checkbox for following text input"},null,512),[[p,t.isChecked3]])]),s("select",{class:"form-select","aria-label":"Default select example",disabled:!t.isChecked3},Ws,8,qs)])])])])),64))])])):b("",!0)])]),Zs,As,s("aside",Js,[s("div",Ks,[s("a",{href:"javascript:;",class:"aside-link aside-link-generator",onClick:e[9]||(e[9]=(...l)=>u.moveToGeneratorBtn&&u.moveToGeneratorBtn(...l))},Xs)])])]),s("div",Ys,[s("div",$s,[s("div",st,[tt,s("div",ot,[s("div",et,[s("div",lt,[s("div",it,[dt,s("div",at,[s("p",ct,r(t.temp.name),1)])]),s("div",nt,[rt,s("div",_t,[s("p",ht,r(t.temp.engName)+" sdfsdfsdf sdfsdfasdf sdf sdf ssdf",1)])]),s("div",pt,[vt,s("div",mt,[n(s("select",{class:"form-select w-50","aria-label":"Default select example",disabled:!t.isChecked3,"onUpdate:modelValue":e[10]||(e[10]=l=>t.temp.preferenceLevel=l)},ft,8,bt),[[g,t.temp.preferenceLevel]])])]),s("div",gt,[xt,s("div",wt,[s("p",yt,r(t.temp.healthPoint),1)])]),s("div",kt,[Ct,s("div",Lt,[s("div",jt,[s("div",Mt,[Bt,s("div",Vt,[s("p",Dt,r(t.temp.portion.starch/4)+" 碗",1)])]),s("div",St,[Gt,s("div",It,[s("p",Nt,r(t.temp.portion.protein)+" 份",1)])]),s("div",Ut,[zt,s("div",Tt,[s("p",Ht,r(t.temp.portion.vegetable)+" 份",1)])])])])])]),s("div",Pt,[s("img",{class:"img-fluid",src:t.white_rice,alt:""},null,8,Rt)])])])])])]),s("div",Et,[s("div",Ft,[s("div",qt,[Qt,s("div",Wt,[Zt,s("div",At,[s("div",Jt,[s("div",Kt,[s("div",Ot,[s("div",Xt,[s("img",{class:"img rounded object-fit-cover h-100",src:t.stir_fried_loofah,alt:""},null,8,Yt)])]),s("div",$t,[s("div",so,[s("img",{class:"img rounded object-fit-cover h-100",src:t.stir_fried_loofah,alt:""},null,8,to)])]),s("div",oo,[s("div",eo,[s("img",{class:"img rounded object-fit-cover h-100",src:t.stir_fried_loofah,alt:""},null,8,lo)])]),s("div",io,[s("div",ao,[s("div",co,[s("img",{class:"img img-fluid object-fit-cover h-100",src:t.white_rice,alt:""},null,8,no)]),s("div",ro,[s("img",{class:"img img-fluid object-fit-cover h-100",src:t.braised_lion_s_head,alt:""},null,8,_o)])])])])])])])])])])],64)}const bo=x(M,[["render",ho],["__scopeId","data-v-40201340"]]);export{bo as default};
