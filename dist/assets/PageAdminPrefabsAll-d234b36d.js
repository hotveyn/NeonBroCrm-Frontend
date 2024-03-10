import{d as _,f as k,g as o,a as e,o as c,m as N,N as y,i as g,j as x,k as S,c as b,w as l,b as C,l as U,n as P,q as T,s as q}from"./index-62384645.js";import{u as F}from"./prefab.store-dee8b58d.js";import{N as D,a as R}from"./Skeleton-a17865c3.js";import{u as z}from"./orderTypes.store-cd2a7c53.js";import{N as B}from"./InputNumber-17324f83.js";import{N as w}from"./Input-c95d618b.js";import{N as h,a as M}from"./FormItem-9db69890.js";import{N as V}from"./Select-8ae686c1.js";import{N as $}from"./Divider-bdda2be5.js";import"./get-806e042e.js";import"./use-locale-a4cb9846.js";import"./get-slot-1efb97e5.js";import"./Suffix-86caeb40.js";import"./ChevronRight-7e3f7794.js";import"./Forward-d200b360.js";import"./Empty-6144791c.js";import"./Add-27b36ee1.js";import"./cssr-1cbf0123.js";const A={class:"table-prefabs-all"},I=_({__name:"TablePrefabsAll",props:{tableData:{}},emits:["change","remove"],setup(i,{emit:p}){const s=a({change:t=>p("change",t),remove:t=>p("remove",t)});function a(t){return[{title:"Название",key:"name",sorter:"default"},{title:"Тип",key:"type.name",sorter:"default"},{title:"Стоимость",key:"price",sorter:"default"},{title:"Комментарий",key:"comment",sorter:"default"},{title:"Действия",key:"actions",width:110,render(u){return[N(y,{type:"default",size:"small",style:{marginRight:"6px",width:"100%",maxWidth:"100px"},onClick:()=>t.change(u)},{default:()=>"Изменить"}),N(y,{type:"error",size:"small",style:{marginRight:"6px",marginTop:"6px",width:"100%",maxWidth:"100px"},onClick:()=>t.remove(u.id)},{default:()=>"Удалить"})]}}]}return(t,u)=>(c(),k("div",A,[o(e(D),{"single-line":!1,data:t.tableData,columns:e(s),pagination:{pageSize:30},bordered:!0},null,8,["data","columns"])]))}});function W(i){const p={name:{required:!0,message:"Введите название шаблона"},type_id:{required:!0,message:"Выберите тип шаблона"},price:{required:!0,message:"Введите цену шаблона"}},s=g([]),a=x({name:i.name,comment:i.comment,price:i.price,type_id:void 0});return S(async()=>{const t=z();s.value=await t.getForSelect(),a.type_id=+i.type_id}),{rules:p,formValues:a,options:s}}const j=_({__name:"FormPrefabUpdate",props:{prefab:{}},emits:["changed"],setup(i,{emit:p}){const s=i,a=g(),t=F(),{rules:u,formValues:n,options:v}=W(s.prefab);async function d(){var f;(f=a.value)==null||f.validate(async r=>{r||(await t.update(s.prefab,n),p("changed"))})}return(f,r)=>(c(),b(e(M),{ref_key:"prefabFormRef",ref:a,rules:e(u),model:e(n)},{default:l(()=>[o(e(h),{label:"Название шаблона",path:"name"},{default:l(()=>[o(e(w),{value:e(n).name,"onUpdate:value":r[0]||(r[0]=m=>e(n).name=m),placeholder:""},null,8,["value"])]),_:1}),o(e(h),{label:"Стоимость шаблона",path:"price"},{default:l(()=>[o(e(B),{min:.1,value:e(n).price,"onUpdate:value":r[1]||(r[1]=m=>e(n).price=m),placeholder:"",precision:2},null,8,["value"])]),_:1}),o(e(h),{label:"Тип шаблона",path:"type_id"},{default:l(()=>[o(e(V),{value:e(n).type_id,"onUpdate:value":r[2]||(r[2]=m=>e(n).type_id=m),remote:"",options:e(v)},null,8,["value","options"])]),_:1}),o(e(h),{label:"Комментарий к шаблону"},{default:l(()=>[o(e(w),{value:e(n).comment,"onUpdate:value":r[3]||(r[3]=m=>e(n).comment=m),type:"textarea",placeholder:""},null,8,["value"])]),_:1}),o(e(y),{type:"primary",onClick:r[4]||(r[4]=U(m=>d(),["prevent"]))},{default:l(()=>[C(" Создать ")]),_:1})]),_:1},8,["rules","model"]))}}),E={class:"admin-order-types-all"},ie=_({__name:"PageAdminPrefabsAll",setup(i){const p=P(),s=F(),a=x({isShow:!1,prefab:{id:NaN,name:"",comment:"",price:1,type_id:1,type:{id:1,name:"default"}}}),t=g(!0);function u(d){a.isShow=!0,a.prefab=d}function n(){a.isShow=!1}function v(d){p.confirm(()=>{s.remove(d)})}return S(async()=>{await s.request(),t.value=!1}),(d,f)=>(c(),k("div",E,[o(e($),{"title-placement":"left"},{default:l(()=>[C("Все типы вывесок")]),_:1}),t.value?(c(),b(e(R),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(c(),b(I,{key:1,"table-data":e(s).prefabs,onChange:u,onRemove:v},null,8,["table-data"])),o(e(q),{show:a.isShow,"onUpdate:show":f[0]||(f[0]=r=>a.isShow=r)},{default:l(()=>[o(e(T),{style:{width:"600px"}},{default:l(()=>[o(j,{prefab:a.prefab,onChanged:n},null,8,["prefab"])]),_:1})]),_:1},8,["show"])]))}});export{ie as default};
