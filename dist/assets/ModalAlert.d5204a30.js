import{r,j as s,u as c,a as x,b as l,B as i,d as n,c as d,e as f,s as v,f as w}from"./index.0c6ae108.js";import{s as o}from"./modalAlertAction.2f63429f.js";const g=({...t})=>s("svg",{...t,xmlns:"http://www.w3.org/2000/svg",className:"w-16 md:w-24 aspect-square text-red-500 h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})});var A=r.exports.memo(g);const b=()=>{const t=c(e=>e.modalAlert),m=c(e=>e.selectedActivity),a=x(),p=()=>a(o({isOpen:!1,isDeleteComplete:!1})),u=async()=>{const e=await d("/activity-groups?email=edwinauliano@gmail.com");f.exports.unstable_batchedUpdates(()=>{a(o({id:null})),a(v(e.data))})},y=async()=>{const e=await d(`/activity-groups/${m.id}`);a(w(e))},h=async()=>{t.type==="Activity"?(await n(`/activity-groups/${t.id}`),await u()):(await n(`/todo-items/${t.id}`),await y()),a(o({isDeleteComplete:!0}))};return l("div",{"data-cy":"modal-delete",onClick:e=>e.stopPropagation(),className:"flex flex-col items-center justify-center h-80 md:h-[24rem] aspect-[1.25/1] rounded bg-white",children:[s(A,{"data-cy":"modal-delete-icon"}),l("h3",{"data-cy":"modal-delete-title",className:"text-center font-normal px-8 md:px-16",children:["Apakah anda yakin ingin menghapus ",t.type," ",l("strong",{children:['"',t.title,'"']}),"?"]}),l("div",{className:"flex items-center justify-center w-full h-full space-x-2 md:space-x-3",children:[s(i,{"data-cy":"modal-delete-cancel-button",onClick:p,className:"bg-neutral-200 text-neutral-900 font-semibold px-8 md:px-12",children:"Batal"}),s(i,{"data-cy":"modal-delete-confirm-button",onClick:h,className:"bg-red-500 text-white font-semibold px-8 md:px-12",children:"Hapus"})]})]})};var j=r.exports.memo(b);export{j as default};