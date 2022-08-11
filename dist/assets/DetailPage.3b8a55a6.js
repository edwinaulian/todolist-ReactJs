import{T as w,F as C}from"./Trash.9fbe7937.js";import{r as d,u as p,a as m,b as u,j as a,P as E,i as b,g as h,c as y,f as x,m as f,n as T,o as A,p as _,q as k,t as g,v as S}from"./index.bfbe4fdd.js";import{I as O}from"./Indicator.ec0ebc30.js";import{s as N}from"./modalAlertAction.10d7047d.js";const F=({id:t,title:i,priority:r,is_active:l})=>{const[c,e]=d.exports.useState(!l),o=p(n=>n.selectedActivity),s=m(),v=async()=>{const n=await y(`/activity-groups/${o.id}`);s(x(n))};return u("div",{"data-cy":"todo-item",className:"flex items-center justify-between w-full h-14 md:h-16 px-4 lg:px-8 rounded-lg shadow bg-white",children:[u("div",{className:"flex items-center space-x-2 lg:space-x-4 w-full h-full",children:[a("input",{"data-cy":"todo-item-checkbox",type:"checkbox",onChange:async()=>{e(!c),await b("/todo-items/"+t,{is_active:c?1:0}),await v()},checked:c}),a(O,{type:r}),c===!0&&a("h3",{"data-cy":"todo-item-title",className:"lg:text-lg line-through font-semibold text-fontColor-900 ",children:i}),c===!1&&a("h3",{"data-cy":"todo-item-title",className:"lg:text-lg font-semibold text-fontColor-900 ",children:i}),a(E,{className:"w-5 h-5",onClick:()=>{s(h({isOpen:!0,title:i,priority:r,titleForm:"Edit Item",id:t}))},"data-cy":"todo-item-edit-button"})]}),a(w,{"data-cy":"todo-item-delete-button",onClick:()=>{s(N({type:"Item",id:t,isOpen:!0,title:i}))},className:"text-xl lg:text-2xl cursor-pointer text-gray-600"})]})};var D=d.exports.memo(F);const M=()=>{const t=p(e=>e.selectedActivity.todo_items),i=p(e=>e.sortOptions),r=m(),l=()=>{r(h({isOpen:!0,titleForm:"Tambah List Item",priority:"Very High"}))},c=e=>{switch(e.type){case g:return t.sort((o,s)=>s.id-o.id);case k:return t.sort((o,s)=>o.id-s.id);case _:return t.sort((o,s)=>o.title.toUpperCase()<s.title.toUpperCase()?-1:1);case A:return t.sort((o,s)=>o.title.toUpperCase()<s.title.toUpperCase()?1:-1);case T:return t.sort((o,s)=>s.is_active-o.is_active);default:return t}};return d.exports.useEffect(()=>(c({type:i.sortBy}),()=>{r(f({isOpen:!1}))}),[i.sortBy]),t.length>0?a("div",{className:"flex flex-col w-full space-y-2 md:space-y-3",children:t.map(e=>a(D,{id:e.id,title:e.title,priority:e.priority,is_active:e.is_active},e.id))}):a(C,{onClick:l,"data-cy":"todo-empty-state",src:"https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"})},P=()=>{const t=m(),{slug:i}=S(),r=async()=>{const l=await y(`/activity-groups/${i}`);t(x(l))};return d.exports.useEffect(()=>(r(),()=>{t(f({sortBy:g,isOpen:!1}))}),[]),a(M,{})};var W=d.exports.memo(P);export{W as default};
