(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});n(49);var a=n(0),r=n.n(a),i=n(156);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Site Files"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"relativePath"),r.a.createElement("th",null,"prettySize"),r.a.createElement("th",null,"extension"),r.a.createElement("th",null,"birthTime"))),r.a.createElement("tbody",null,t.allFile.edges.map(function(e,t){var n=e.node;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n.relativePath),r.a.createElement("td",null,n.prettySize),r.a.createElement("td",null,n.extension),r.a.createElement("td",null,n.birthTime))})))))};var l="3953592347"},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),u=n(150),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var o=n(152),s=n.n(o);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},152:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},153:function(e){e.exports={data:{site:{siteMetadata:{title:"The Mush"}}}}},154:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),u=n(48),c=n(2),o=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},155:function(e,t,n){},156:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),l=n(4),u=n.n(l),c=n(157),o=n.n(c),s=n(151),d=function(e){return i.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},i.a.createElement(s.Link,{to:e.to},e.children))},m=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#2f3143",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("header",{style:{marginBottom:"0rem"}},i.a.createElement("ul",{style:{listStyle:"none",float:"right"}},i.a.createElement(d,{to:"/about/"},"About"),i.a.createElement(d,{to:"/projects/"},"Projects"),i.a.createElement("a",{href:"http://app.simonxu.com"},"WebApp"))),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},p=(n(155),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});p.propTypes={children:u.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-my-files-js-6c46f3631a856d1243c5.js.map