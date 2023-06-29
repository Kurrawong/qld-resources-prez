import{d as m,u as S,k as _,o as $,l as d,c as h,a as e,t as f,b as l,F as v,r as k,m as t,n as V,h as c,e as b,w as s,f as w,R as r,_ as A,q as o}from"./index.e25ce7c1.js";import{A as P}from"./AdvancedSearch.d44f83a4.js";const C={class:"page-title"},H={class:"home-page-links"},L={class:"link-title"},x={key:0,class:"link-desc"},z=m({__name:"FlavourHome",props:{flavour:null,links:null},setup(p){const a=p,i=S(),n=_(()=>a.flavour[0].toLowerCase()),g=_(()=>[...a.links,{label:"Profiles",description:`A list of Profiles used by ${a.flavour}`,url:`/${n.value}/profiles`},{label:`About ${a.flavour}`,url:`/${n.value}/about`}]);return $(()=>{i.rightNavConfig={enabled:!1},document.title=`${d(a.flavour)+" Home"} | Prez`,i.pageHeading={name:a.flavour,url:`/${n.value}`},i.breadcrumbs=[{name:d(a.flavour)+" Home",url:`/${n.value}`}]}),(y,D)=>(c(),h(v,null,[e("h1",C,f(l(d)(a.flavour)),1),e("div",H,[(c(!0),h(v,null,k(l(g),u=>(c(),b(l(r),{to:u.url,class:"home-page-link"},{default:s(()=>[e("h4",L,f(u.label),1),u.description?(c(),h("p",x,f(u.description),1)):w("",!0)]),_:2},1032,["to"]))),256))]),t(P,{flavour:a.flavour,fullPage:""},null,8,["flavour"]),V(y.$slots,"default",{},void 0,!0)],64))}});const F=A(z,[["__scopeId","data-v-df0bafae"]]),N=e("p",null," More specifically, the vocabularies defined in this system conform to the VocPub profile, which itself is an opinionated profile of the SKOS (Simple Knowledge Organisation System) data model. ",-1),R=e("h2",null,"Vocabularies",-1),T=e("p",null," A vocabulary (concept scheme) is a hierarchical list of terms (concepts). ",-1),q=e("h2",null,"Collections",-1),B=e("p",null," A collection is a flat grouping of terms (concepts). ",-1),K=e("h2",null,"Concepts",-1),O=e("p",null," Vocabulary terms (concepts) are listed within a vocabulary's home page. Each vocabulary presents both a concept hierarchy (tree) view and a link to a flat list of its concepts. ",-1),Q=e("h2",null,"Search and Querying",-1),E=e("p",null," You can search for concepts within one vocabulary or across all vocabularies. ",-1),M=e("li",null,"To search across vocabularies, use the search bar above.",-1),Y=m({__name:"VocPrezHomeView",setup(p){const a=[{label:"Vocabularies",url:"/v/vocab",description:"A list of SKOS vocabularies"},{label:"Collections",url:"/v/collection",description:"A list of SKOS collections"}];return(i,n)=>(c(),b(F,{flavour:"VocPrez",links:a},{default:s(()=>[e("p",null,[o(" The vocabularies are provided as a read-only web delivery system, providing a standardised set of profiles in both human and machine-readable views. See the available profiles "),t(l(r),{to:"/v/profiles"},{default:s(()=>[o("here")]),_:1}),o(". ")]),N,R,T,e("p",null,[o(" See the "),t(l(r),{to:"/v/vocab"},{default:s(()=>[o("Vocabularies Register")]),_:1}),o(" for a list of vocabularies. ")]),q,B,e("p",null,[o(" See the "),t(l(r),{to:"/v/collection"},{default:s(()=>[o("Collections page")]),_:1}),o(" for a list of collections. ")]),K,O,Q,E,e("ul",null,[M,e("li",null,[o("To search across the entire Prez system, use the "),t(l(r),{to:"/search"},{default:s(()=>[o("Advanced Search")]),_:1}),o(".")]),e("li",null,[o("To perform custom queries, use the SPARQL query language on the "),t(l(r),{to:"/sparql"},{default:s(()=>[o("SPARQL page")]),_:1})])])]),_:1}))}});export{Y as default};