import{d as I,c as i,F as h,r as R,h as a,e as m,w as T,a as k,t as p,f as b,b as r,R as q,G as A,k as y,_ as H,i as M,K as U,u as E,s as W,q as G,v as w,m as K,o as O,l as J,T as Q,D as X,A as Y}from"./index.f0fef75a.js";import{A as Z}from"./AdvancedSearch.74ba2741.js";import{P as ee}from"./ProfilesTable.c2ff38c1.js";const te={class:"list"},ae={class:"list-item-left"},le={class:"list-item-title"},se={key:0,class:"list-item-desc"},re=I({__name:"ItemList",props:{items:null,childName:null,childLink:null},setup(g){const t=g;return(_,f)=>(a(),i("div",te,[(a(!0),i(h,null,R(t.items,e=>(a(),m(r(q),{class:"list-item",to:e.link?e.link:""},{default:T(()=>[k("div",ae,[k("h4",le,p(e.title||e.iri),1),e.description?(a(),i("div",se,p(e.description),1)):b("",!0)]),t.childLink?(a(),m(r(q),{key:0,onClick:f[0]||(f[0]=A(()=>{},["stop"])),to:e.link+t.childLink,class:"btn outline sm child-btn"},{default:T(()=>[y(p(t.childName),1)]),_:2},1032,["to"])):b("",!0)]),_:2},1032,["to"]))),256))]))}});const ie=H(re,[["__scopeId","data-v-fc87eee9"]]),ne={class:"page-title"},oe=["innerHTML"],pe=I({__name:"ItemListView",props:{title:null,parentType:null,class:null,childButton:null,enableSearch:{type:Boolean},content:null},setup(g){const t=g,{namedNode:_}=X,f=M(Y),e=U(),n=E(),{store:P,parseIntoStore:j,qname:u}=W(),{data:x,profiles:$,loading:D,error:B,doRequest:F}=G(),L=w([]),c=w(!1),o=K(()=>e.path.startsWith("/c/")?"CatPrez":e.path.startsWith("/s/")?"SpacePrez":e.path.startsWith("/v/")?"VocPrez":void 0);function V(){let l=[];return o.value?(l.push({name:o.value,url:`/${o.value[0].toLowerCase()}`}),t.parentType&&(["dcat:Dataset","geo:FeatureCollection"].includes(t.parentType)&&(l.push({name:"Datasets",url:"/s/datasets"}),l.push({name:"Dataset",url:`/s/datasets/${e.params.datasetId}`})),["geo:FeatureCollection"].includes(t.parentType)&&(l.push({name:"Feature Collections",url:`/s/datasets/${e.params.datasetId}/collections`}),l.push({name:"Feature Collection",url:`/s/datasets/${e.params.datasetId}/collections/${e.params.featureCollectionId}`})))):t.parentType==="prof:Profile"&&l.push({name:"Profiles",url:"/profiles"}),l}function z(){return t.enableSearch?{}:{}}return O(()=>{F(`${f}${e.path}`,()=>{const l=$.value.find(s=>s.default);e.query&&e.query._profile?e.query._profile===l.token&&!e.query._mediatype?c.value=!1:e.query._profile==="alt"&&!e.query._mediatype?c.value=!0:window.location.replace(`${f}${e.path}?_profile=${e.query._profile}${e.query._mediatype?`&_mediatype=${e.query._mediatype}`:""}`):c.value=!1,j(x.value);let C=u("rdfs:label"),S=u("dcterms:description");if(Object.keys(n.profiles).includes(l.token)){const s=n.profiles[l.token];s.labelPredicate&&(C=s.labelPredicate),s.descPredicate&&(S=s.descPredicate)}let N=[];t.class?N=P.value.getSubjects(_(u("a")),_(u(t.class)),null):N=P.value.getObjects(null,_(u("rdfs:member")),null),N.forEach(s=>{let v={iri:s.id};P.value.forEach(d=>{d.predicate.value===C?v.title=d.object.value:d.predicate.value===S?v.description=d.object.value:d.predicate.value===u("prez:link")&&(v.link=d.object.value)},s,null,null,null),L.value.push(v)}),c.value?n.rightNavConfig={enabled:!1}:n.rightNavConfig={enabled:!0,profiles:$.value,currentUrl:e.path},document.title=`${t.title} | Prez`,o.value?n.pageHeading={name:o.value,url:`/${o.value[0].toLowerCase()}`}:n.pageHeading={name:"Prez",url:"/"},n.breadcrumbs=[...V(),{name:t.title,url:e.path},...c.value?[{name:"Alternate Profiles",url:`${e.path}?_profile=alt`}]:[]]})}),(l,C)=>c.value?(a(),m(ee,{key:0,profiles:r($),path:r(e).path},null,8,["profiles","path"])):(a(),i(h,{key:1},[k("h1",ne,p(t.title),1),t.content?(a(),i("p",{key:0,innerHTML:t.content},null,8,oe)):b("",!0),k("div",null,[r(B)?(a(),i(h,{key:0},[y("Network error: "+p(r(B)),1)],64)):r(D)?(a(),i(h,{key:1},[y("loading...")],64)):L.value.length>0?(a(),m(ie,{key:2,items:L.value,childName:t.childButton?.name,childLink:t.childButton?.url},null,8,["items","childName","childLink"])):(a(),i(h,{key:3},[y("No "+p(t.title)+" found.",1)],64))]),t.enableSearch?(a(),m(Q,{key:1,to:"#right-bar-content"},[J(Z,{flavour:r(o),query:z()},null,8,["flavour","query"])])):b("",!0)],64))}});export{pe as default};
