import{r as s,u as i,a as d,g as r,j as m,h as p,c as u,f as y}from"./index.bfbe4fdd.js";const h=()=>{const e=i(t=>t.modalForm),a=i(t=>t.selectedActivity),o=d(),n=async()=>{const t=await u(`/activity-groups/${a.id}`);o(y(t))},l=async()=>{if(!e.title)return;const t={title:e.title,priority:e.priority==="Medium"?"normal":e.priority.replace(" ","-").toLowerCase(),activity_group_id:a.id};await p("/todo-items",t).finally(()=>o(r({isOpen:!1,isDropDownItem:!1,title:"",priority:"Very High"}))),await n()},c=s.exports.useMemo(()=>t=>{o(r({...e,title:t.target.value}))},[e.title,e.priority]);return m("input",{onChange:c,onKeyDown:async t=>{t.key==="Enter"&&await l()},"data-cy":"modal-add-name-input",id:"item-name",placeholder:"Tambahkan nama list item",className:"block w-full h-12 lg:h-14 mt-2 lg:mt-4 px-4 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-neutral-400 focus:border-primary-500",value:e.title})};var v=s.exports.memo(h);export{v as default};