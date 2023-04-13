import{d as v,u as T,m,c as n,F as h,r as k,b as x,h as s,a as e,l as d,w as _,k as f,t as u,f as N,p as S,j as y,L,_ as P}from"./index.f0fef75a.js";const $=l=>(S("data-v-13e57a71"),l=l(),y(),l),j=$(()=>e("tr",null,[e("th",null,"Token"),e("th",null,"Name"),e("th",null,"Formats"),e("th",null,"Description"),e("th",null,"Namespace")],-1)),C={key:0,class:"badge",title:"This is the default profile for this endpoint"},V={key:0,class:"badge",title:"This is the default format for this profile"},D=["href"],F=v({__name:"ProfilesTable",props:{profiles:null,path:null},setup(l){const i=l,b={"text/html":"HTML","application/json":"JSON","application/ld+json":"JSON-LD","text/turtle":"Turtle","application/rdf+xml":"RDF/XML","text/csv":"CSV","application/geo+json":"GeoJSON"},w=T(),c=m(()=>{const r=i.profiles.find(o=>o.default);if(r===void 0)throw new TypeError("A default profile must exist.");return r.token}),g=m(()=>{const r=i.profiles.map(o=>o.token);return Object.values(w.profiles).filter(o=>r.includes(o.token)).sort((o,a)=>Number(a.token===c.value)-Number(o.token===c.value)).sort((o,a)=>Number(o.namespace==="http://www.w3.org/ns/dx/conneg/altr-ext#alt-profile")-Number(a.namespace==="http://www.w3.org/ns/dx/conneg/altr-ext#alt-profile"))});return(r,o)=>{const a=L("RouterLink");return s(),n("table",null,[j,(s(!0),n(h,null,k(x(g),t=>(s(),n("tr",null,[e("td",null,[d(a,{to:`${i.path}?_profile=${t.token}`,title:"Get profile representation"},{default:_(()=>[f(u(t.token),1)]),_:2},1032,["to"]),t.token===x(c)?(s(),n("span",C,"default")):N("",!0)]),e("td",null,[d(a,{to:`/profiles/${t.token}`,title:"Go to profile page"},{default:_(()=>[f(u(t.title),1)]),_:2},1032,["to"])]),e("td",null,[(s(!0),n(h,null,k(t.mediatypes,p=>(s(),n("div",null,[d(a,{to:`${i.path}?_profile=${t.token}&_mediatype=${p}`},{default:_(()=>[f(u(b[p]||p),1)]),_:2},1032,["to"]),p===t.defaultMediatype?(s(),n("span",V,"default")):N("",!0)]))),256))]),e("td",null,u(t.description),1),e("td",null,[e("a",{href:t.namespace,target:"_blank"},u(t.namespace),9,D)])]))),256))])}}});const O=P(F,[["__scopeId","data-v-13e57a71"]]);export{O as P};
