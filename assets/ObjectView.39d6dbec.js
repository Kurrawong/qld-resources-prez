import{d as i,L as n,u as c,o as u,b as r,e as m,c as p,h as a,F as d,a as o,q as s}from"./index.e4d92927.js";import l from"./PropTableView.79249ba1.js";import"./helpers.6e404483.js";import"./AdvancedSearch.2815feb0.js";import"./SortableTabularList.ca09465f.js";import"./LoadingMessage.480e75a7.js";import"./MapClient.vue_vue_type_script_setup_true_lang.a8bcbffb.js";import"./BaseModal.4174d6d8.js";const b=o("h1",{class:"page-title"},"Get Object by URI",-1),f=o("p",null,[s("This page can be used to find objects by their URI (Uniform Resource Identifier) by adding "),o("code",null,"?uri=https://some.uri.here"),s(" (for example) to the end of this page's URL.")],-1),B=i({__name:"ObjectView",setup(h){const e=n(),t=c();return u(()=>{e.query||(t.rightNavConfig={enabled:!1},document.title="Get Object by URI | Prez",t.pageHeading={name:"Prez",url:"/"},t.breadcrumbs=[{name:"Get Object by URI",url:"/object"}])}),(_,y)=>r(e).query&&r(e).query.uri?(a(),m(l,{key:0})):(a(),p(d,{key:1},[b,f],64))}});export{B as default};
