/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([27],{CZOF:function(t,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=d("xfne"),n=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={data:function(){return{m:1,code:n.default}}}},HbyT:function(t,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=d("CZOF"),n=d.n(o);for(var a in o)"default"!==a&&function(t){d.d(e,t,function(){return o[t]})}(a);var c=d("linU"),i=d("XyMi"),s=Object(i.a)(n.a,c.a,c.b,!1,null,null,null);e.default=s.exports},linU:function(t,e,d){"use strict";d.d(e,"a",function(){return o}),d.d(e,"b",function(){return n});var o=function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("h2",[t._v("Badge 徽标")]),t._v(" "),d("h3",[t._v("代码示例")]),t._v(" "),d("Demo",{attrs:{title:"基础"}},[d("div",{attrs:{slot:"content"},slot:"content"},[d("Badge",{attrs:{count:"3"}},[d("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),t._v(" "),d("div",{attrs:{slot:"desc"},slot:"desc"},[d("code",[t._v("Badge")]),t._v("基础使用")]),t._v(" "),d("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),d("Demo",{attrs:{title:"点"}},[d("div",{attrs:{slot:"content"},slot:"content"},[d("Badge",{attrs:{dot:""}},[d("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),t._v(" "),d("Badge",{staticStyle:{"margin-left":"20px"},attrs:{dot:""}},[d("Icon",{attrs:{type:"ios-calendar-outline",size:"50",color:"orange"}})],1),t._v(" "),d("Badge",{staticStyle:{"margin-left":"20px"},attrs:{dot:""}},[d("a",{attrs:{href:"#"}},[t._v("我是一个连接")])])],1),t._v(" "),d("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n      "),d("code",[t._v("dot")]),t._v("来展示一个点")]),t._v(" "),d("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.dot))])]),t._v(" "),d("Demo",{attrs:{title:"数字隐藏"}},[d("div",{attrs:{slot:"content"},slot:"content"},[d("Badge",{attrs:{count:"100","max-count":"99"}},[d("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),t._v(" "),d("Badge",{staticStyle:{"margin-left":"60px"},attrs:{count:"10055","max-count":"999"}},[d("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),t._v(" "),d("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("数字模式超出隐藏，设置\n      "),d("code",[t._v("max-count")]),t._v("配合\n      "),d("code",[t._v("count")])]),t._v(" "),d("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.maxCount))])]),t._v(" "),d("Demo",{attrs:{title:"颜色"}},[d("div",{attrs:{slot:"content"},slot:"content"},[d("Badge",{attrs:{count:"100","max-count":"99",color:"orange"}},[d("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),t._v(" "),d("Badge",{staticStyle:{"margin-left":"60px"},attrs:{dot:"",color:"green"}},[d("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})])],1),t._v(" "),d("div",{attrs:{slot:"desc"},slot:"desc"},[d("code",[t._v("color")]),t._v("属性可以自定义颜色")]),t._v(" "),d("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.color))])]),t._v(" "),d("Demo",{attrs:{title:"单独使用"}},[d("div",{attrs:{slot:"content"},slot:"content"},[d("Badge",{staticStyle:{"margin-left":"20px"},attrs:{count:"10"}}),t._v(" "),d("Badge",{staticStyle:{"margin-left":"40px"},attrs:{count:"20",color:"blue"}})],1),t._v(" "),d("div",{attrs:{slot:"desc"},slot:"desc"}),t._v(" "),d("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.badge))])]),t._v(" "),d("Demo",{attrs:{title:"组合使用"}},[d("div",{attrs:{slot:"content"},slot:"content"},t._l(t.m,function(e){return d("div",{key:e,staticStyle:{margin:"15px 0"}},[d("Badge",{attrs:{count:"+"},on:{onClick:function(){t.m++}}},[d("Button",[t._v("增加")])],1),t._v(" "),d("Badge",{staticStyle:{"margin-left":"20px"},attrs:{count:"-"},on:{onClick:function(){1!=t.m&&t.m--}}},[d("Input",{attrs:{width:"200"}})],1)],1)})),t._v(" "),d("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("Badge的使用场景不光是数字或者是提醒的展示，在很多场合可以当按钮使用")]),t._v(" "),d("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.other))])]),t._v(" "),d("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"table-border"},[d("table",[d("tr",[d("th",[t._v("属性")]),t._v(" "),d("th",[t._v("说明")]),t._v(" "),d("th",[t._v("类型")]),t._v(" "),d("th",[t._v("默认值")])]),t._v(" "),d("tr",[d("td",[t._v("count")]),t._v(" "),d("td",[t._v("显示的文字")]),t._v(" "),d("td",[t._v("String，Number")]),t._v(" "),d("td",[t._v("-")])]),t._v(" "),d("tr",[d("td",[t._v("max-count")]),t._v(" "),d("td",[t._v("展示封顶的数字值，高于的部分会以+号显示")]),t._v(" "),d("td",[t._v("String，Number")]),t._v(" "),d("td",[t._v("-")])]),t._v(" "),d("tr",[d("td",[t._v("dot")]),t._v(" "),d("td",[t._v("不展示数字，只有一个小红点")]),t._v(" "),d("td",[t._v("Boolean")]),t._v(" "),d("td",[t._v("false")])]),t._v(" "),d("tr",[d("td",[t._v("onClick")]),t._v(" "),d("td",[t._v("点击事件的回调")]),t._v(" "),d("td",[t._v("Function")]),t._v(" "),d("td",[t._v("-")])])])])}]},xfne:function(t,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};o.base='<Badge count="3">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',o.dot='<Badge dot>\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge dot style="margin-left:20px;">\n    <Icon type="ios-calendar-outline" size="50" color="orange"></Icon>\n</Badge>\n<Badge dot style="margin-left:20px;">\n    <a href="#">我是一个连接</a>\n</Badge>',o.maxCount='<Badge count="100" max-count="99">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge count="10055" max-count="999" style="margin-left:60px;">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',o.color='<Badge count="100" max-count="99" color="orange">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge dot color="green" style="margin-left:60px;">\n    <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>',o.badge='<Badge count="10" style="margin-left:20px;"></Badge>\n<Badge count="20" color="blue" style="margin-left:40px;"></Badge>',o.other='<div v-for="i in m" style="margin:15px 0;" :key="i">\n<Badge count="+" @onClick="add">\n   <Button>增加</Button>\n</Badge>\n<Badge count="-" @onClick="del" style="margin-left:20px;">\n   <Input width="200"></Input>\n</Badge>\n</div>\ndata() {\n    return {\n      m: 1,\n      code: code\n    }\n}',e.default=o}});