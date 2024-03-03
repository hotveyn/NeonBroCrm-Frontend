import{t as I,v as C,bO as E,d as x,n as T,o,c as f,w as l,b as g,T as y,g as p,a as d,N as B,h as b,f as m,S as $,q as P,i as v,k as V,z as q,F as S,M as N,_ as z}from"./index-19bdbec0.js";import{u as D}from"./stage.service-5330fab2.js";import{N as M}from"./Divider-c7a65899.js";import{N as O}from"./Input-96dcc6c7.js";import{N as W}from"./Empty-101753d0.js";import{N as A,a as F}from"./Tabs-3e6b6d88.js";import"./use-locale-b60157c8.js";import"./Suffix-e9335d58.js";import"./Add-32164d2b.js";import"./cssr-95c10af3.js";const w=D(),_=I(),k=C("stages-new",{state:()=>({departments:[]}),actions:{async request(){this.departments=await w.getAvailable()},async claim(i,a,s){w.claim(i).then(()=>{_.stage.claim();const e=this.departments.findIndex(t=>t.id===a);if(e!==-1){const t=this.departments[e].orderStages.findIndex(u=>u.id===i);t!==-1&&this.departments[e].orderStages.splice(t,1)}this.departments[e].orderStages.length||this.departments.splice(e,1),s()}).catch(e=>{E.isAxiosError(e)?_.error.custom(e.response.data.message):_.error.error()})},getStagesWithSearch(i){return i.length?JSON.parse(JSON.stringify(this.departments)).map(e=>(e.orderStages=e.orderStages.filter(t=>t.order.code.includes(i)),e)).filter(e=>e.orderStages.length):this.departments}}}),J={class:"card-content"},U={key:0},L=b("strong",null,"Комментарий - ",-1),j=x({__name:"CardStageNew",props:{stage:{},departmentId:{}},emits:["claim"],setup(i,{emit:a}){const s=i,{confirm:e}=T(),t=k();async function u(r){e(async()=>{await t.claim(r,s.departmentId,()=>a("claim"))})}return(r,c)=>(o(),f(d(P),{title:r.stage.order.name},{"header-extra":l(()=>[g(y(r.stage.order.code),1)]),action:l(()=>[p(d(B),{onClick:c[0]||(c[0]=n=>u(r.stage.id)),style:{width:"100%"},type:"success"},{default:l(()=>[g("Принять в работу")]),_:1})]),default:l(()=>[b("div",J,[r.stage.order.comment?(o(),m("p",U,[L,g(" "+y(r.stage.order.comment),1)])):$("",!0)])]),_:1},8,["title"]))}}),G={class:"employee-new"},H={key:0,class:"employee-new__empty"},K={key:1,class:"employee-new__cards"},Q=x({__name:"PageEmployeeNew",setup(i){const a=k(),s=v(a.departments[0]?a.departments[0].id:void 0),e=v(""),t=v([]);V(async()=>{await a.request(),t.value=a.getStagesWithSearch(e.value),s.value=t.value[0]?t.value[0].id:void 0});function u(){e.value&&(e.value=""),s.value=t.value[0]?t.value[0].id:void 0}return q(e,r=>{t.value=a.getStagesWithSearch(r),s.value=t.value[0]?t.value[0].id:void 0}),(r,c)=>(o(),m("div",G,[p(d(M),null,{default:l(()=>[g("Новые задачи")]),_:1}),p(d(O),{class:"employee-new__search-bar",value:e.value,"onUpdate:value":c[0]||(c[0]=n=>e.value=n),type:"text",placeholder:"Поиск по номеру"},null,8,["value"]),d(a).departments.length?(o(),m("div",K,[p(d(F),{style:{"max-width":"360px"},type:"card",animated:"",value:s.value,"onUpdate:value":c[1]||(c[1]=n=>s.value=n)},{default:l(()=>[(o(!0),m(S,null,N(t.value,n=>(o(),f(d(A),{placement:"left",size:"small",key:n.id,name:n.id,tab:n.name},{default:l(()=>[(o(!0),m(S,null,N(n.orderStages,h=>(o(),f(j,{onClaim:u,key:h.id,stage:h,"department-id":n.id,style:{"margin-bottom":"20px"}},null,8,["stage","department-id"]))),128))]),_:2},1032,["name","tab"]))),128))]),_:1},8,["value"])])):(o(),m("div",H,[p(d(W),{size:"huge",description:"Новых задач пока что нет"},{extra:l(()=>[g("Пусто")]),_:1})]))]))}});const oe=z(Q,[["__scopeId","data-v-bc42a383"]]);export{oe as default};
