"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[294],{4294:function(a,e,s){s.r(e),s.d(e,{default:function(){return I}});var t=s(1413),r=s(7762),n=(s(2791),s(9434)),l=s(6748),c="Table_table__YUzYe",i="Table_table__wrapper__2rKOO",o="Table_table__title__UAq4I",_="Table_tableScrollBox__csZQy",d="Table_table__item__sXnLH",u="Table_table__color__8NjJm",m="Table_table__name__LVkwZ",h="Table_table__total__gzh40",x="Table_table__bottom__aBU+x",p="Table_first__0TIIt",b="Table_second__expense__j+z0a",j="Table_second__income__25VVv",v=s(3329);var f=function(a){var e=a.categoriesSummary,s=a.incomeSummary,t=a.expenseSummary,r=a.colors;return(0,v.jsx)(v.Fragment,{children:e?(0,v.jsx)("div",{className:c,children:(0,v.jsxs)("div",{className:i,children:[(0,v.jsxs)("div",{className:o,children:[(0,v.jsx)("span",{children:"Category"}),(0,v.jsx)("span",{children:"Sum"})]}),(0,v.jsx)("div",{className:_,children:(0,v.jsx)("ul",{children:e.map((function(a,e){var s=a.name,t=a.total;return(0,v.jsxs)("li",{className:d,children:[(0,v.jsx)("span",{className:u,style:{backgroundColor:r[e]}}),(0,v.jsx)("span",{className:m,children:s}),(0,v.jsx)("span",{className:h,children:Math.abs(t)})]},s)}))})}),(0,v.jsxs)("ul",{children:[(0,v.jsxs)("li",{className:x,children:[(0,v.jsx)("span",{className:p,children:"Expenses:"}),(0,v.jsx)("span",{className:b,children:Math.abs(t)})]}),(0,v.jsxs)("li",{className:x,children:[(0,v.jsx)("span",{className:p,children:"Incomes:"}),(0,v.jsx)("span",{className:j,children:s})]})]})]})}):(0,v.jsx)("p",{children:"No data"})})},N=s(5967),T=s(3623),y=(s(8639),"Chart_chartWrapper__eyWek"),C="Chart_total__6HLt3";N.kL.register(N.qi,N.u);var k=function(a){var e=a.data,s=a.periodTotal;return(0,v.jsxs)("div",{className:y,children:[(0,v.jsx)(T.$I,{data:e}),(0,v.jsx)("span",{className:C,children:s?"\u20b4"+Math.abs(s):"no transactions"})]})},S={Income:"#24CCA7","Main expenses":"#FED057",Products:"#FFD8D0",Car:"#FD9498","Self care":"#C5BAFF","Child care":"#6E78E8","Household products":"#4A56E2",Education:"#81E1FF",Leisure:"#24CCA7","Other expenses":"#00AD84"},g="Statistics_contentWrapper__ZOUvP",F="Statistics_selectorsBlock__eBW4K",B="Statistics_diagramBlock__wwJpf",E="Statistics_transactionsSummaryBlock__-bDRU",I=function(){var a=(0,n.I0)(),e=(0,n.v9)((function(a){return a.summary})).transactionsSummary,s=function(a){var e=[],s=[];if(0===a.length)return{dataTotal:[100],dataName:s};var t,n=(0,r.Z)(a);try{for(n.s();!(t=n.n()).done;){var l=t.value;e.push(l.total),s.push(l.name)}}catch(c){n.e(c)}finally{n.f()}return{dataTotal:e,dataName:s}}((null===e||void 0===e?void 0:e.categoriesSummary)||[]),c=s.dataTotal,i=s.dataName,o=function(a){var e,s=[],t=Object.entries(S),n=(0,r.Z)(a);try{var l=function(){var a=e.value,r=t.filter((function(e){return e[0]===a})).flatMap((function(a){return a[1]}));s.push(r)};for(n.s();!(e=n.n()).done;)l()}catch(c){n.e(c)}finally{n.f()}return s}(i),_={labels:i,datasets:[{label:"Total",data:c,backgroundColor:o.length?o:"gray",borderColor:"transparent",cutout:"70%"}]};return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:g,children:[(0,v.jsxs)("div",{className:B,children:["Statistic",(0,v.jsx)(k,{data:_,periodTotal:null===e||void 0===e?void 0:e.periodTotal})]}),(0,v.jsxs)("div",{className:E,children:[(0,v.jsxs)("div",{className:F,children:[(0,v.jsx)("button",{onClick:function(){a((0,l.K)({month:2,year:2023}))},children:"February"}),(0,v.jsx)("button",{onClick:function(){a((0,l.K)({month:4,year:2023}))},children:"March"})]}),(0,v.jsx)(f,(0,t.Z)((0,t.Z)({},e),{},{colors:o}))]})]})})}}}]);
//# sourceMappingURL=294.7e7543f5.chunk.js.map