import{B as t}from"./base-f7e0d045.js";import{m as a}from"./index-9791be84.js";const y=a.object({EmployeeId:a.coerce.number(),TerritoryId:a.coerce.number().positive()}),c="employeeterritories",o={};o.fetchAll=async()=>t.fetchAll(c);o.fetchFilteredPaged=async(e,r,s)=>await t.fetchFilteredPaged("EmployeeTerritoriesView",e,r,s);o.fetchPaged=async(e,r)=>await t.fetchPaged(c,e,r);o.fetchById=async e=>t.fetchById(c,e);o.create=async e=>{const r=[];r[0]=y.parse(e);const n=JSON.stringify({resource:r}),i="EmployeeId,TerritoryId";return(await t.createByFields(c,i,n)).resource[0].TerritoryId};o.update=async e=>{const r=e.TerritoryId,s=JSON.stringify(e);return(await t.update(c,r,s)).TerritoryId};o.remove=async(e,r)=>{const s=`(EmployeeId=${e})and(TerritoryId=${r})`;return await t.removeByFilter(c,s)};export{o as E,y as a};
