import{O as n}from"./order-details-65305fc6.js";import{e as c}from"./index-4d8f42c1.js";const d=async({params:o,url:e})=>{const r=e.pathname.split("/").filter(s=>s!=="")[1],a=o.id,t=await n.fetchById(r,a);if(t)return t;throw c(404,"Not found")},f=Object.freeze(Object.defineProperty({__proto__:null,load:d},Symbol.toStringTag,{value:"Module"}));export{f as _,d as l};