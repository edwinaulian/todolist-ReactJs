import{r as n,j as e,u as i,a as l,g as p,b as c}from"./index.0a698f99.js";import{I as d}from"./Indicator.278ac2db.js";const m=o=>{const r=(o==="normal"?"medium":o).replace("-"," ").split(" ");for(var t=0;t<r.length;t++)r[t]=r[t].charAt(0).toUpperCase()+r[t].slice(1);return r.join(" ")},u=({...o})=>e("svg",{...o,xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})});var h=n.exports.memo(u);const w=()=>{const o=i(s=>s.modalForm),r=l(),t=n.exports.useCallback(()=>{const s={isDropDownOpen:!o.isDropDownOpen};r(p(s))},[]),a=m(o.priority);return c("button",{onClick:t,"data-cy":"modal-add-priority-dropdown",className:"flex items-center justify-between mt-2 lg:mt-4 px-4 lg:px-6 w-40 lg:w-48 h-12 lg:h-14 rounded-md transition outline-none border border-neutral-400 hover:border-primary-500 focus:border-primary-500",children:[e(d,{type:o.priority}),e("span",{className:"text-xs md:text-sm xl:text-base font-semibold",children:a}),e(h,{})]})};var b=n.exports.memo(w);export{b as default};