/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([14],{"9s0s":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};o.base='<Button @click="info" type="primary">普通提示 </Button>\n<script>\n  info() {\n      this.$Notice.open({\n        title: "通知的标题",\n        content: "通知的描述",\n        duration: 5\n      });\n    }\n<\/script>',o.withIcon='<Button @click="notice(\'info\')" type="primary">消息提示 </Button>\n<Button @click="notice(\'warning\')" type="warning">警告提示 </Button>\n<Button @click="notice(\'success\')" type="success">成功提示 </Button>\n<Button @click="notice(\'error\')" type="danger">错误提示 </Button>\n<script>\n  notice(type) {\n      this.$Notice[type]({\n        title: "通知的标题",\n        content: "通知的描述",\n        duration: 5\n      });\n    }\n<\/script>',o.static="this.$Notice.info(options)\nthis.$Notice.success(options)\nthis.$Notice.warning(options)\nthis.$Notice.error(options)",o.destory="this.$Notice.open(options)\nthis.$Notice.destroy()",n.default=o},"A/so":function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i});var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Notice 通知提醒")]),t._v(" "),e("h3",[t._v("代码示例")]),t._v(" "),e("Demo",{attrs:{title:"基础用法"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("普通提示 ")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("code",[t._v("Notice")]),t._v("的基本用法")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),e("Demo",{attrs:{title:"带图标的提醒"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary"},on:{click:function(n){t.notice("info")}}},[t._v("消息提示 ")]),t._v(" "),e("Button",{attrs:{type:"warning"},on:{click:function(n){t.notice("warning")}}},[t._v("警告提示 ")]),t._v(" "),e("Button",{attrs:{type:"success"},on:{click:function(n){t.notice("success")}}},[t._v("成功提示 ")]),t._v(" "),e("Button",{attrs:{type:"danger"},on:{click:function(n){t.notice("error")}}},[t._v("错误提示 ")])],1),t._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过调用不同的方法，可展示不同的类型")]),t._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.withIcon))])]),t._v(" "),e("h3",[t._v("API")]),t._v(" "),e("Alert",[t._v("组件提供了一些静态方法，使用方式如下")]),t._v(" "),e("Code",{attrs:{lang:"javascript"}},[t._v(t._s(t.code.static))]),t._v(" "),e("Alert",[t._v("另外提供了全局配置和全局销毁的方法：")]),t._v(" "),e("Code",{attrs:{lang:"js"}},[t._v(t._s(t.code.destory))]),t._v(" "),e("p",[t._v("参数 options 为对象，具体说明如下：")]),t._v(" "),t._m(0)],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("通知提醒的标题 ")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("提示内容")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("duration")]),t._v(" "),e("td",[t._v("自动关闭的延时，单位秒，不关闭可以写 0")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("onClose")]),t._v(" "),e("td",[t._v("关闭时的回调")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])])}]},"e++r":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("q//q"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);var s=e("A/so"),r=e("XyMi"),v=Object(r.a)(i.a,s.a,s.b,!1,null,null,null);n.default=v.exports},"q//q":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("9s0s"),i=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default={data:function(){return{code:i.default}},methods:{info:function(){this.$Notice.open({title:"通知的标题",content:"通知的描述",duration:5})},notice:function(t){this.$Notice[t]({title:"通知的标题",content:"通知的描述",duration:5})}}}}});