import{T as a}from"./territory-d87f2d61.js";import{e as s}from"./index-4d8f42c1.js";const i=async({params:o,url:e})=>{e.pathname.split("/").filter(r=>r!=="")[1];const t=await a.fetchById(o.id);if(t)return t;throw s(404,"Not found")},c=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{c as _,i as l};
