"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[294],{4294:function(a,e,s){s.r(e),s.d(e,{default:function(){return Z}});var t=s(1413),r=s(7762),n=(s(2791),"Table_table__YUzYe"),l="Table_table__wrapper__2rKOO",c="Table_table__title__UAq4I",i="Table_tableScrollBox__csZQy",o="Table_table__item__sXnLH",d="Table_table__color__8NjJm",_="Table_table__name__LVkwZ",u="Table_table__total__gzh40",m="Table_table__bottom__aBU+x",h="Table_first__0TIIt",x="Table_second__expense__j+z0a",j="Table_second__income__25VVv",p=s(3329);var b=function(a){var e=a.categoriesSummary,s=a.incomeSummary,t=a.expenseSummary,r=a.colors;return(0,p.jsx)(p.Fragment,{children:e?(0,p.jsx)("div",{className:n,children:(0,p.jsxs)("div",{className:l,children:[(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("span",{children:"Category"}),(0,p.jsx)("span",{children:"Sum"})]}),(0,p.jsx)("div",{className:i,children:(0,p.jsx)("ul",{children:e.map((function(a,e){var s=a.name,t=a.total;return(0,p.jsxs)("li",{className:o,children:[(0,p.jsx)("span",{className:d,style:{backgroundColor:r[e]}}),(0,p.jsx)("span",{className:_,children:s}),(0,p.jsx)("span",{className:u,children:Math.abs(t)})]},s)}))})}),(0,p.jsxs)("ul",{children:[(0,p.jsxs)("li",{className:m,children:[(0,p.jsx)("span",{className:h,children:"Expenses:"}),(0,p.jsx)("span",{className:x,children:Math.abs(t)})]}),(0,p.jsxs)("li",{className:m,children:[(0,p.jsx)("span",{className:h,children:"Incomes:"}),(0,p.jsx)("span",{className:j,children:s})]})]})]})}):(0,p.jsx)("p",{children:"No data"})})},v=s(5967),f=s(3623),N=(s(8639),"Chart_chartWrapper__eyWek"),T="Chart_total__6HLt3";v.kL.register(v.qi,v.u);var y=function(a){var e=a.data,s=a.periodTotal;return(0,p.jsxs)("div",{className:N,children:[(0,p.jsx)(f.$I,{data:e}),(0,p.jsx)("span",{className:T,children:s?"\u20b4 ".concat(Math.abs(s.toFixed(2))):"no transactions"})]})},C="Statistics_contentWrapper__ZOUvP",S="Statistics_title__96q7B",g="Statistics_selectorsBlock__eBW4K",k="Statistics_diagramBlock__wwJpf",F="Statistics_transactionsSummaryBlock__-bDRU",B={Income:"#24CCA7","Main expenses":"#FED057",Products:"#FFD8D0",Car:"#FD9498","Self care":"#C5BAFF","Child care":"#6E78E8","Household products":"#4A56E2",Education:"#81E1FF",Leisure:"#24CCA7","Other expenses":"#00AD84"},E=s(9434),I=s(6748),Z=function(){var a=(0,E.I0)(),e=(0,E.v9)((function(a){return a.summary})).transactionsSummary,s=function(a){var e=[],s=[];if(0===a.length)return{dataTotal:[100],dataName:s};var t,n=(0,r.Z)(a);try{for(n.s();!(t=n.n()).done;){var l=t.value;e.push(l.total),s.push(l.name)}}catch(c){n.e(c)}finally{n.f()}return{dataTotal:e,dataName:s}}((null===e||void 0===e?void 0:e.categoriesSummary)||[]),n=s.dataTotal,l=s.dataName,c=function(a){var e,s=[],t=Object.entries(B),n=(0,r.Z)(a);try{var l=function(){var a=e.value,r=t.find((function(e){return e[0]===a}))[1];s.push(r)};for(n.s();!(e=n.n()).done;)l()}catch(c){n.e(c)}finally{n.f()}return s}(l),i={labels:l,datasets:[{label:l.length?"Total":"No data",data:n,backgroundColor:c.length?c:"gray",borderColor:"transparent",cutout:"70%"}]};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:S,children:"Statistics"}),(0,p.jsxs)("div",{className:C,children:[(0,p.jsx)("div",{children:(0,p.jsx)("div",{className:k,children:(0,p.jsx)(y,{data:i,periodTotal:null===e||void 0===e?void 0:e.periodTotal})})}),(0,p.jsxs)("div",{className:F,children:[(0,p.jsxs)("div",{className:g,children:[(0,p.jsx)("button",{onClick:function(){a((0,I.K)({month:2,year:2023}))},children:"February"}),(0,p.jsx)("button",{onClick:function(){a((0,I.K)({month:4,year:2023}))},children:"March"})]}),(0,p.jsx)(b,(0,t.Z)((0,t.Z)({},e),{},{colors:c}))]})]})]})}}}]);
//# sourceMappingURL=294.02f265cd.chunk.js.map