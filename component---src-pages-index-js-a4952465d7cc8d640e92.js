(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,n){"use strict";n.r(t);n(49);var r=n(0),a=n.n(r),i=n(78),o=n(4),l=n.n(o),s=n(64),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,u=Object(s.a)(c.test.bind(c));var d,p="__EMOTION_THEMING__",m=((d={})[p]=l.a.object,d);var h=u,f=function(e){return"theme"!==e&&"innerRef"!==e},g=function(){return!0},y=function(e,t){for(var n=2,r=arguments.length;n<r;n++){var a=arguments[n],i=void 0;for(i in a)e(i)&&(t[i]=a[i])}return t};!function(e,t){var n=function(r,a){var i,o,l,s;void 0!==a&&(i=a.e,o=a.label,l=a.target,s=r.__emotion_forwardProp&&a.shouldForwardProp?function(e){return r.__emotion_forwardProp(e)&&a.shouldForwardProp(e)}:a.shouldForwardProp);var c=r.__emotion_real===r,u=void 0===i&&c&&r.__emotion_base||r;return"function"!=typeof s&&(s="string"==typeof u&&u.charAt(0)===u.charAt(0).toLowerCase()?h:f),function(){var d=arguments,h=c&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==o&&h.push("label:"+o+";"),void 0===i)if(null==d[0]||void 0===d[0].raw)h.push.apply(h,d);else{h.push(d[0][0]);for(var f=d.length,v=1;v<f;v++)h.push(d[v],d[0][v])}var b=function(n){var r,a;function o(){return n.apply(this,arguments)||this}a=n,(r=o).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var c=o.prototype;return c.componentWillMount=function(){void 0!==this.context[p]&&(this.unsubscribe=this.context[p].subscribe(function(e){this.setState({theme:e})}.bind(this)))},c.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[p].unsubscribe(this.unsubscribe)},c.render=function(){var n=this.props,r=this.state;this.mergedProps=y(g,{},n,{theme:null!==r&&r.theme||n.theme||{}});var a="",o=[];return n.className&&(a+=void 0===i?e.getRegisteredStyles(o,n.className):n.className+" "),a+=void 0===i?e.css.apply(this,h.concat(o)):i,void 0!==l&&(a+=" "+l),t.createElement(u,y(s,{},n,{className:a,ref:n.innerRef}))},o}(t.Component);return b.displayName=void 0!==o?o:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",void 0!==r.defaultProps&&(b.defaultProps=r.defaultProps),b.contextTypes=m,b.__emotion_styles=h,b.__emotion_base=u,b.__emotion_real=b,b.__emotion_forwardProp=s,Object.defineProperty(b,"toString",{value:function(){return"."+l}}),b.withComponent=function(e,t){return n(e,void 0!==t?y(g,{},a,t):a).apply(void 0,h)},b}}}(i,a.a);var v=n(151),b=n(156);n.d(t,"query",function(){return k});var k="4293685219";t.default=function(e){var t=e.data;return a.a.createElement(b.a,null,a.a.createElement("div",null,a.a.createElement("h3",{className:Object(i.css)("display:inline-block;color:#719010;")},"A soft, nutritiously technical blog"),a.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return a.a.createElement("div",{key:t.id},a.a.createElement(v.Link,{to:t.fields.slug,className:Object(i.css)("text.decoration:none:color:inherit;")},a.a.createElement("h3",null,t.frontmatter.title," ",a.a.createElement("span",{className:Object(i.css)("color:#bbb;")},"- ",t.frontmatter.date))),a.a.createElement("p",null,t.excerpt))})))}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(150),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(152),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),m=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var r;e.exports=(r=n(154))&&r.default||r},153:function(e){e.exports={data:{site:{siteMetadata:{title:"The Mush"}}}}},154:function(e,t,n){"use strict";n.r(t);n(35);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(48),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,n){},156:function(e,t,n){"use strict";var r=n(153),a=n(0),i=n.n(a),o=n(4),l=n.n(o),s=n(157),c=n.n(s),u=n(151),d=function(e){return i.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},i.a.createElement(u.Link,{to:e.to},e.children))},p=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#2f3143",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("header",{style:{marginBottom:"0rem"}},i.a.createElement("ul",{style:{listStyle:"none",float:"right"}},i.a.createElement(d,{to:"/about/"},"About"),i.a.createElement(d,{to:"/projects/"},"Projects"),i.a.createElement("a",{href:"http://app.simonxu.com"},"WebApp"))),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(155),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})});m.propTypes={children:l.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-a4952465d7cc8d640e92.js.map