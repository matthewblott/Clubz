import{B as t}from"./base-f7e0d045.js";const s="territories",o={};o.fetchAll=async()=>t.fetchAll(s);o.fetchPaged=async(r,e)=>await t.fetchPaged(s,r,e);o.fetchById=async r=>t.fetchById(s,r);o.create=async r=>{const e=[];e[0]=r;const c=JSON.stringify({resource:e});return(await t.create(s,c)).resource[0].TerritoryId};o.update=async r=>{const e=r.TerritoryId,n=JSON.stringify(r);return(await t.update(s,e,n)).TerritoryId};o.remove=async r=>await t.remove(s,r);export{o as T};