import{d,f as m,g as p,a as r,o as l,m as i,N as u,n as h,i as g,k as _,w as y,c,b as N}from"./index-62384645.js";import{u as k}from"./orders-resources.store-bf4ca0fc.js";import{N as x,a as E}from"./Skeleton-a17865c3.js";import{N as b}from"./Divider-bdda2be5.js";import"./order.service-15093fdc.js";import"./get-806e042e.js";import"./use-locale-a4cb9846.js";import"./get-slot-1efb97e5.js";import"./Select-8ae686c1.js";import"./cssr-1cbf0123.js";import"./Suffix-86caeb40.js";import"./Empty-6144791c.js";import"./ChevronRight-7e3f7794.js";import"./Forward-d200b360.js";import"./Input-c95d618b.js";const w={class:"table-orders-new"},S=d({__name:"TableOrdersResourcesEnough",props:{tableData:{}},emits:["setNull","notEnough"],setup(f,{emit:a}){const t=s({setNull:e=>a("setNull",e),notEnough:e=>a("notEnough",e)});function s(e){return[{title:"Код",key:"code",sorter:"default"},{title:"Название",key:"name",sorter:"default"},{title:"Дата начала",key:"date_start",sorter:"default"},{title:"Дата сдачи",key:"date_end",sorter:"default"},{title:"Тип",key:"type.name",sorter:"default"},{title:"Стоимость",key:"price",sorter:"default"},{title:"Комментарий",key:"comment",sorter:"default"},{title:"Действия",key:"actions",width:110,render(o){return[i(u,{type:"error",size:"small",style:{marginRight:"6px",width:"100%",maxWidth:"100px"},onClick:()=>e.notEnough(o.id)},{default:()=>"Не хватает"}),i(u,{type:"default",size:"small",style:{marginRight:"6px",marginTop:"6px",width:"100%",maxWidth:"100px"},onClick:()=>e.setNull(o.id)},{default:()=>"Отменить"})]}}]}return(e,o)=>(l(),m("div",w,[p(r(x),{"single-line":!1,data:e.tableData,columns:r(t),pagination:{pageSize:30},bordered:!0},null,8,["data","columns"])]))}}),v={class:"storage-orders-enough"},F=d({__name:"PageStorageOrdersEnough",setup(f){const a=h(),t=k(),s=g(!0);async function e(n){a.confirm(async()=>{await t.setResourcesNull(n)})}async function o(n){a.confirm(async()=>{await t.setNotEnough(n)})}return _(async()=>{await t.requestEnough(),s.value=!1}),(n,R)=>(l(),m("div",v,[p(r(b),{"title-placement":"left"},{default:y(()=>[N("Заказы с достатком материалов")]),_:1}),s.value?(l(),c(r(E),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(l(),c(S,{key:1,"table-data":r(t).ordersEnough,onSetNull:e,onNotEnough:o},null,8,["table-data"]))]))}});export{F as default};
