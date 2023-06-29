import{a0 as J,i as Z,B as ee,d as V,x as f,k as x,o as q,h as a,c as i,a as e,z as S,E as G,a7 as te,C as $,b as o,a4 as X,e as R,F as v,r as P,O as se,t as C,f as L,q as E,m as F,G as H,w as U,p as ae,j as le,_ as oe,u as ne,l as re,N as ce}from"./index.e25ce7c1.js";import{S as ie,_ as de,s as ue}from"./MapClient.vue_vue_type_script_setup_true_lang.2aa58df4.js";import{a as he,B as pe}from"./BaseModal.6e7417a2.js";import{L as N}from"./LoadingMessage.0f6680de.js";import{E as B}from"./ErrorMessage.f8fd7f98.js";function D(u){return J({id:u,state:()=>{const d=Z(ee);return{data:[],success:!1,loading:!1,error:null,apiBaseUrl:d}},actions:{async fetch(d){const r=`${this.apiBaseUrl}/sparql`;this.loading=!0,this.success=!1;try{const n=await he.get(r,{headers:{accept:"application/sparql-results+json"},params:{query:d}});this.data=n.data.results.bindings.map(c=>{let p={};return Object.keys(c).forEach(m=>{p[m]=c[m].value}),p}),this.success=!0,this.error=null}catch(n){this.error=n.message,this.data=[],this.success=!1}finally{this.loading=!1}}}})}const me=`
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>

SELECT ?c ?t
WHERE {
  GRAPH ?g {
  ?c a dcat:Catalog ;
  	dcterms:title ?t .
  }
}
ORDER BY ?t`;function _e(u=[]){return`
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
SELECT ?th ?pl (COUNT(?th) AS ?count)
WHERE {
  ?r a dcat:Resource ;
    ^dcterms:hasPart ?hasPart .
  ${u.length>0?`FILTER (?hasPart IN (${u.map(d=>`<${d}>`).join(", ")}))`:""}  
  ?r dcat:theme ?th .
  ?th skos:prefLabel ?pl .
}
GROUP BY ?th ?pl
ORDER BY DESC(?count) ?pl
LIMIT 10`}function fe(u=[],d="",r=[],n="",c=0){return`
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    PREFIX geo: <http://www.opengis.net/ont/geosparql#>
    PREFIX geof: <http://www.opengis.net/def/function/geosparql/>

    SELECT ?r ?t ?d (GROUP_CONCAT(?th;separator="	") AS ?thlist) (GROUP_CONCAT(?thpl;separator="	") AS ?thpllist) ?weight
    WHERE {
        # Only look for Resources (not spatial Datasets)
        ?r a dcat:Resource .

        # Only look in selected cats
        ?r  ^dcterms:hasPart ?hasPart  .
        ${u.length>0?`FILTER (?hasPart IN (${u.map(p=>`<${p}>`).join(", ")}))`:""}  

        # Weighted text search
        {
          SELECT DISTINCT ?r ?t ?d (SUM(?w) AS ?weight)
          WHERE {
            ?r a dcat:Resource .
            {
              ?r
                dcterms:title ?t ;
                dcterms:description ?d ;
                .
              BIND (50 AS ?w)
              FILTER REGEX(?t, "^${d}$", "i")
            }
            UNION
            {
              ?r 
                dcterms:title ?t ;
                dcterms:description ?d ;
                .
              BIND (10 AS ?w)
              FILTER REGEX(?t, "${d}", "i")
              FILTER(?d!="")
            }
            UNION
            {
              ?r 
                dcterms:title ?t ;
                dcterms:description ?d ;
                .
              BIND (5 AS ?w)
              FILTER REGEX(?d, "${d}", "i")
            }  
          }
          GROUP BY ?r ?t ?d ?match
          ORDER BY DESC(?weight) ?t
        }

        # Theme filter. each theme's IRI is a new line in the VALUES {}
        ${r.length>0?`VALUES ?th { ${r.map(p=>`<${p}>`).join(" ")} }`:""}
        ?r dcat:theme ?th .
        ?th skos:prefLabel ?thpl .

        # Spatial Filter
        ${n!=""?`
        ?r geo:hasBoundingBox/geo:asWKT ?wkt ;
        FILTER (geof:sfOverlaps("${n})"^^geo:wktLiteral, ?wkt))`:""}

    } GROUP BY ?r ?t ?d ?weight
    ${c>0?`LIMIT ${c}`:""}`}const h=u=>(ae("data-v-72b25591"),u=u(),le(),u),ge={class:"catalog-search"},ve={class:"search-options"},Ee={class:"search-form-container"},we={class:"search-form"},Re={class:"form-section"},ye=h(()=>e("h4",null,"Text Search",-1)),Se={class:"form-section"},Ce=h(()=>e("h4",null,"Catalogues",-1)),be={class:"catalog-buttons"},Te={class:"select-all-input"},ke=h(()=>e("label",{for:"select-all-catalogs"},"Select all",-1)),Ie={key:2,class:"catalog-options"},$e=["id","value"],Pe=["for"],Le={class:"form-section"},Ue=h(()=>e("h4",null,"Themes",-1)),Ae={class:"theme-buttons"},Ne={class:"select-all-input"},Be=h(()=>e("label",{for:"select-all-themes"},"Select all",-1)),De={key:2,class:"theme-options"},Fe=["value","id"],Me=["for"],Oe={class:"bottom-buttons"},xe=h(()=>e("i",{class:"fa-regular fa-code"},null,-1)),Ge={class:"right-buttons"},Xe={class:"result-limit-input"},He=h(()=>e("label",{for:"result-limit"},"Result limit",-1)),Ve=h(()=>e("i",{class:"fa-regular fa-magnifying-glass"},null,-1)),qe={class:"search-map"},ze={class:"results"},Qe=h(()=>e("h3",null,"Results",-1)),je={key:2},Ye=h(()=>e("thead",null,[e("tr",null,[e("th",null,"Title"),e("th",null,"Themes")])],-1)),We=["href"],Ke=["href"],Je=h(()=>e("br",null,null,-1)),Ze={colspan:"2",class:"desc"},et={key:3},tt={class:"sparql-query-content"},st=h(()=>e("i",{class:"fa-regular fa-copy"},null,-1)),at=V({__name:"CatPrezSearchMap",setup(u){const r=D("catalogs")(),n=D("themes")(),c=D("search")(),p=f(""),m=f([]),y=f([]),z=f(ie.None),M=f([]);f(!1);const b=f(""),T=f(10),A=f(null),k=x(()=>{let l=!0;return r.data.forEach(t=>{if(!m.value.includes(t.c))return l=!1,!1}),l}),I=x(()=>{let l=!0;return n.data.forEach(t=>{if(!y.value.includes(t.th))return l=!1,!1}),l});async function Q(){let l=[];k.value||r.data.forEach(t=>{l.push(t.c)}),m.value=l,await _()}async function j(){let l=[];I.value||n.data.forEach(t=>{l.push(t.th)}),y.value=l,await _()}const Y=async(l,t)=>{z.value=t,M.value=l,await _()},O=async()=>{await n.fetch(_e(m.value))},_=async(l=null)=>{l&&l.preventDefault(),b.value=fe(m.value,p.value,y.value,ue(M.value),T.value>0?parseInt(T.value.toString())+1:0),await c.fetch(b.value)};function W(){navigator.clipboard.writeText(b.value)}return q(async()=>{await r.fetch(me),r.data.forEach(l=>{m.value.push(l.c)}),await O(),n.data.forEach(l=>{y.value.push(l.th)}),await _()}),(l,t)=>(a(),i(v,null,[e("div",ge,[e("div",ve,[e("div",Ee,[e("div",we,[e("div",Re,[ye,S(e("input",{type:"search",name:"term",class:"search-input","onUpdate:modelValue":t[0]||(t[0]=s=>p.value=s),placeholder:"Search...",onKeyup:t[1]||(t[1]=te(s=>_(),["enter"]))},null,544),[[G,p.value]])]),e("div",Se,[Ce,e("div",be,[e("div",Te,[S(e("input",{type:"checkbox",name:"select-all-catalogs",id:"select-all-catalogs",onChange:Q,"onUpdate:modelValue":t[2]||(t[2]=s=>X(k)?k.value=s:null)},null,544),[[$,o(k)]]),ke])]),o(r).loading?(a(),R(N,{key:0})):o(r).error?(a(),R(B,{key:1,message:`Unable to load catalogs: ${o(r).error}`},null,8,["message"])):o(r).data.length>0?(a(),i("ul",Ie,[(a(!0),i(v,null,P(o(r).data,(s,g)=>(a(),i("li",{class:"catalog-option",style:se(s.c.endsWith("/system/catprez")?"display: none;":"")},[S(e("input",{type:"checkbox",id:`catalog-${g}`,value:s.c,"onUpdate:modelValue":t[3]||(t[3]=w=>m.value=w),onChange:t[4]||(t[4]=async w=>{await O(),await _()})},null,40,$e),[[$,m.value]]),e("label",{for:`catalog-${g}`},C(s.t),9,Pe)],4))),256))])):L("",!0)]),e("div",Le,[Ue,e("div",Ae,[e("div",Ne,[S(e("input",{type:"checkbox",name:"select-all-themes",id:"select-all-themes",onChange:j,"onUpdate:modelValue":t[5]||(t[5]=s=>X(I)?I.value=s:null)},null,544),[[$,o(I)]]),Be])]),o(n).loading?(a(),R(N,{key:0})):o(n).error?(a(),R(B,{key:1,message:`Unable to load catalogs: ${o(n).error}`},null,8,["message"])):o(n).data.length>0?(a(),i("ul",De,[(a(!0),i(v,null,P(o(n).data,(s,g)=>(a(),i("li",{class:"theme-option",key:s.th},[S(e("input",{type:"checkbox",value:s.th,"onUpdate:modelValue":t[6]||(t[6]=w=>y.value=w),id:`theme-${g}`,onChange:t[7]||(t[7]=w=>_())},null,40,Fe),[[$,y.value]]),e("label",{for:`theme-${g}`},C(s.pl),9,Me)]))),128))])):L("",!0)])]),e("div",Oe,[e("button",{class:"btn outline",onClick:t[8]||(t[8]=s=>A.value="sparqlQuery")},[E("Show Query "),xe]),e("div",Ge,[e("div",Xe,[He,S(e("input",{id:"result-limit",type:"number",onChange:t[9]||(t[9]=s=>_()),"onUpdate:modelValue":t[10]||(t[10]=s=>T.value=s),min:"1",max:"100"},null,544),[[G,T.value]])]),e("button",{class:"btn",onClick:t[11]||(t[11]=s=>_())},[E("Search "),Ve])])])]),e("div",qe,[F(de,{ref:"searchMapRef","drawing-modes":["RECTANGLE"],onSelectionUpdated:Y},null,512)])]),e("div",ze,[Qe,o(c).loading?(a(),R(N,{key:0})):o(c).error?(a(),R(B,{key:1,message:o(c).error},null,8,["message"])):o(c).data&&o(c).data.length>0?(a(),i("table",je,[Ye,e("tbody",null,[(a(!0),i(v,null,P(o(c).data,(s,g)=>(a(),i(v,null,[e("tr",{class:H(`${g%2===1?"grey":""}`)},[e("td",null,[e("a",{href:`/object?uri=${encodeURIComponent(s.r)}`},C(s.t),9,We)]),e("td",null,[(a(!0),i(v,null,P(s.thlist.split("	"),(w,K)=>(a(),i(v,null,[e("a",{href:`/object?uri=${w}`},C(s.thpllist.split("	")[K]),9,Ke),Je],64))),256))])],2),s.d?(a(),i("tr",{key:0,class:H(`${g%2===1?"grey":""}`)},[e("td",Ze,C(s.d.length>200?s.d.slice(0,200)+"...":s.d),1)],2)):L("",!0)],64))),256))])])):(a(),i("div",et," No results "))])]),A.value==="sparqlQuery"?(a(),R(pe,{key:0,onModalClosed:t[12]||(t[12]=s=>A.value=null)},{headerMiddle:U(()=>[E("Spatial Search SPARQL Query")]),footer:U(()=>[e("button",{class:"btn outline sparql-copy-btn",onClick:W,title:"Copy SPARQL query"},[E("Copy "),st])]),default:U(()=>[e("div",tt,[e("pre",null,C(b.value.trim()),1)])]),_:1})):L("",!0)],64))}});const lt=oe(at,[["__scopeId","data-v-72b25591"]]),ot=e("h1",{class:"page-title"},"Data Catalog",-1),nt=e("a",{href:"https://www.w3.org/TR/vocab-dcat-2/"},"DCAT",-1),ht=V({__name:"CatPrezHomeView",setup(u){const d=ne();return q(()=>{d.rightNavConfig={enabled:!1},document.title="Data Catalog Home | Prez",d.pageHeading={name:"CatPrez",url:"/c"},d.breadcrumbs=[{name:re("CatPrez")+" Home",url:"/c"}]}),(r,n)=>{const c=ce("RouterLink");return a(),i(v,null,[ot,e("p",null,[E(" A general data catalog conforming to "),nt,E(", delivered as a read-only web system in both human and machine-readable views. The views are known as profiles and a list of them are available "),F(c,{to:"/s/profiles"},{default:U(()=>[E("here")]),_:1}),E(". ")]),F(lt)],64)}}});export{ht as default};