(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(193),o=e(191),u=e(7),c=e.n(u),l=e(194),s=e.n(l),p=e(195);function d(){var t=s()(["\n\tfont-size: 70px;\n\tcolor: #6f2232;\n"]);return d=function(){return t},t}function f(){var t=s()(["\n\tfont-size: 80px;\n\tcolor: #ffffff;\n\tline-height: 75px;\n\tfont-family: 'Inconsolata';\n"]);return f=function(){return t},t}function h(){var t=s()(["\n\tmargin: 250px 80px;\n\twidth: 100%;\n"]);return h=function(){return t},t}var m=p.a.div(h()),g=p.a.p(f()),y=Object(p.a)(g)(d()),b=function(t){function n(){return t.apply(this,arguments)||this}return c()(n,t),n.prototype.render=function(){return a.a.createElement(m,null,a.a.createElement(g,null,"I am Harshita Jaiswal"),a.a.createElement(y,null,"Full Stack Developer"))},n}(r.Component);n.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Home"}),a.a.createElement(b,null))}},187:function(t,n,e){var r;t.exports=(r=e(190))&&r.default||r},188:function(t,n,e){"use strict";e.d(n,"b",function(){return s});var r=e(0),a=e.n(r),i=e(4),o=e.n(i),u=e(33),c=e.n(u);e.d(n,"a",function(){return c.a});e(187);var l=a.a.createContext({}),s=function(t){return a.a.createElement(l.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},189:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},190:function(t,n,e){"use strict";e.r(n);e(34);var r=e(0),a=e.n(r),i=e(4),o=e.n(i),u=e(60),c=e(2),l=function(t){var n=t.location,e=c.default.getResourcesForPathnameSync(n.pathname);return e?a.a.createElement(u.a,Object.assign({location:n,pageResources:e},e.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l},191:function(t,n,e){"use strict";var r=e(192),a=e(0),i=e.n(a),o=e(4),u=e.n(o),c=e(197),l=e.n(c);function s(t){var n=t.description,e=t.lang,a=t.meta,o=t.title,u=r.data.site,c=n||u.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:e},title:o,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.arrayOf(u.a.object),title:u.a.string.isRequired},n.a=s},192:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},193:function(t,n,e){"use strict";var r=e(189),a=e(0),i=e.n(a),o=e(4),u=e.n(o),c=e(188),l=e(7),s=e.n(l),p=e(194),d=e.n(p),f=e(195);function h(){var t=d()(["\n\t& {\n\t\theight: ",";\n\t\twidth: calc(",' * 3.2);\n\t\tdisplay: block;\n\t\tposition: relative;\n\t\tmargin-bottom: 30px;\n\t\ttop: 27px;\n\t\tleft: 16px;\n\t\tbackground: #4e4e50;\n\t\t&:before {\n\t\t\tcontent: "";\n\t\t\theight: ',";\n\t\t\twidth: ",";\n\t\t\ttop: calc(-"," / 2 + 4px);\n\t\t\tbackground: ",';\n\t\t\tposition: absolute;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: "";\n\t\t\theight: ',";\n\t\t\twidth: ",";\n\t\t\tbackground: ",";\n\t\t\tposition: absolute;\n\t\t\tright: -16px;\n\t\t\ttop: calc(-"," / 2 + 4px);\n\t\t}\n\t}\n"]);return h=function(){return t},t}function m(){var t=d()(["height: 100%;"]);return m=function(){return t},t}var g=f.a.div(m()),y=f.a.div(h(),function(t){return t.width},function(t){return t.width},function(t){return t.height},function(t){return t.width},function(t){return t.height},function(t){return t.color},function(t){return t.height},function(t){return t.width},function(t){return t.color},function(t){return t.height}),b=function(t){function n(){return t.apply(this,arguments)||this}return s()(n,t),n.prototype.render=function(){return i.a.createElement(g,null,i.a.createElement(y,{height:"42px",width:"10px",color:"#950740"}))},n}(a.Component),v=(e(196),function(t){var n=t.children;return i.a.createElement(c.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,null),i.a.createElement("div",{style:{margin:"0",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,height:"100%"}},i.a.createElement("main",null,n),i.a.createElement("footer",null)))},data:r})});v.propTypes={children:u.a.node.isRequired};n.a=v}}]);
//# sourceMappingURL=component---src-pages-index-js-9522ba28780e61c36c29.js.map