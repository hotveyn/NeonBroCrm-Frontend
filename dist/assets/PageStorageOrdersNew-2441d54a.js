import{d,f as m,g as p,a as r,o as i,m as l,N as u,n as g,i as h,k as _,w as y,c,b as k}from"./index-19bdbec0.js";import{u as N}from"./orders-resources.store-57392cdb.js";import{N as w,a as E}from"./Skeleton-daacf131.js";import{N as b}from"./Divider-c7a65899.js";import"./order.service-8338065d.js";import"./get-cb4eec91.js";import"./use-locale-b60157c8.js";import"./get-slot-1efb97e5.js";import"./Select-34ee482a.js";import"./cssr-95c10af3.js";import"./Suffix-e9335d58.js";import"./Empty-101753d0.js";import"./ChevronRight-bb8cf647.js";import"./Forward-23539524.js";import"./Input-96dcc6c7.js";const x={class:"table-orders-new"},v=d({__name:"TableOrdersResourcesNew",props:{tableData:{}},emits:["enough","notEnough"],setup(f,{emit:o}){const t=s({enough:e=>o("enough",e),notEnough:e=>o("notEnough",e)});function s(e){return[{title:"Код",key:"code",sorter:"default"},{title:"Название",key:"name",sorter:"default"},{title:"Дата начала",key:"date_start",sorter:"default"},{title:"Дата сдачи",key:"date_end",sorter:"default"},{title:"Тип",key:"type.name",sorter:"default"},{title:"Стоимость",key:"price",sorter:"default"},{title:"Комментарий",key:"comment",sorter:"default"},{title:"Действия",key:"actions",width:110,render(a){return[l(u,{type:"primary",size:"small",style:{marginRight:"6px"},onClick:()=>e.enough(a.id)},{default:()=>"Достаточно"}),l(u,{type:"error",size:"small",style:{marginRight:"6px"},onClick:()=>e.notEnough(a.id)},{default:()=>"Не хватает"})]}}]}return(e,a)=>(i(),m("div",x,[p(r(w),{"single-line":!1,data:e.tableData,columns:r(t),pagination:{pageSize:30},bordered:!0},null,8,["data","columns"])]))}}),S={class:"storage-orders-new"},G=d({__name:"PageStorageOrdersNew",setup(f){const o=g(),t=N(),s=h(!0);async function e(n){o.confirm(async()=>{await t.setEnough(n)})}async function a(n){o.confirm(async()=>{await t.setNotEnough(n)})}return _(async()=>{await t.requestNew(),s.value=!1}),(n,C)=>(i(),m("div",S,[p(r(b),{"title-placement":"left"},{default:y(()=>[k("Заказы с неустановленным достатком материалов")]),_:1}),s.value?(i(),c(r(E),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(i(),c(v,{key:1,"table-data":r(t).ordersNew,onEnough:e,onNotEnough:a},null,8,["table-data"]))]))}});export{G as default};
