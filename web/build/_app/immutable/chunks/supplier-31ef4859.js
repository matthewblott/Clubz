import{B as r}from"./base-f7e0d045.js";const s="suppliers",n={};n.fetchAll=async()=>r.fetchAll(s);n.fetchPaged=async(e,t)=>await r.fetchPaged(s,e,t);n.fetchById=async e=>r.fetchById(s,e);n.create=async e=>{const t=[];t[0]=e;const a=JSON.stringify({resource:t});return(await r.create(s,a)).resource[0].SupplierId};n.update=async e=>{const t=e.SupplierId,c=JSON.stringify(e);return(await r.update(s,t,c)).SupplierId};n.remove=async e=>await r.remove(s,e);n.fetchRegions=async()=>{const e="Region";return await r.fetchDistinct(s,e)};export{n as S};