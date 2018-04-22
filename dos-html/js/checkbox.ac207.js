/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([25],{GFwp:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=v("ijDI"),c=v.n(_);for(var o in _)"default"!==o&&function(t){v.d(e,t,function(){return _[t]})}(o);var a=v("fxce"),d=v("XyMi"),l=Object(d.a)(c.a,a.a,a.b,!1,null,null,null);e.default=l.exports},PfOg:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _={};_.base='<p>{{checked}}</p>\n<Checkbox v-model="checked">单选框 </Checkbox>\n<Button @click="checked=!checked">Click me</Button>',_.group='<CheckboxGroup v-model="data">\n  <Checkbox label="苹果🍎"></Checkbox>\n  <Checkbox label="橘子🍊"></Checkbox>\n  <Checkbox label="香蕉🍌"></Checkbox>\n  <Checkbox label="栗子🌰"></Checkbox>\n  <Checkbox label="葡萄🍇" disabled></Checkbox>\n  <Checkbox label="梨子🍐" disabled></Checkbox>\n</CheckboxGroup>\n<Button @click="data=[]">清除</Button>\n<Button @click="data=[\'苹果🍎\']">选中苹果</Button>\ndata() {\n    return {\n      checked: true,\n      data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],\n    };\n}',e.default=_},fxce:function(t,e,v){"use strict";v.d(e,"a",function(){return _}),v.d(e,"b",function(){return c});var _=function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("h2",[t._v("Checkbox 多选框")]),t._v(" "),v("h3",[t._v("代码示例 ")]),t._v(" "),v("Demo",{attrs:{title:"基础用法"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("p",[t._v(t._s(t.checked))]),t._v(" "),v("Checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("单选框 ")]),t._v(" "),v("Button",{on:{click:function(e){t.checked=!t.checked}}},[t._v("Click me")])],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("单独使用 ,使用 "),v("code",[t._v("v-model")]),t._v(" 可以双向绑定数据。")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),v("Demo",{attrs:{title:"组合使用"}},[v("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.data)),v("br"),t._v(" "),v("CheckboxGroup",{model:{value:t.data,callback:function(e){t.data=e},expression:"data"}},[v("Checkbox",{attrs:{label:"苹果🍎"}}),t._v(" "),v("Checkbox",{attrs:{label:"橘子🍊"}}),t._v(" "),v("Checkbox",{attrs:{label:"香蕉🍌"}}),t._v(" "),v("Checkbox",{attrs:{label:"栗子🌰"}}),t._v(" "),v("Checkbox",{attrs:{label:"葡萄🍇",disabled:""}}),t._v(" "),v("Checkbox",{attrs:{label:"梨子🍐",disabled:""}})],1),t._v(" "),v("Button",{on:{click:function(e){t.data=[]}}},[t._v("清除")]),t._v(" "),v("Button",{on:{click:function(e){t.data=["苹果🍎"]}}},[t._v("选中苹果")])],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("结合\n      "),v("code",[t._v("CheckboxGroup")]),t._v("来组合使用,通过"),v("code",[t._v("disabled")]),t._v("可以设置组件是否被禁用")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.group))])]),t._v(" "),v("h3",[t._v("API")]),t._v(" "),t._m(0),t._v(" "),v("h3",[t._v("CheckboxGroup API")]),t._v(" "),t._m(1)],1)},c=[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("value")]),t._v(" "),v("td",[t._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("label")]),t._v(" "),v("td",[t._v("只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目")]),t._v(" "),v("td",[t._v(" String | Number")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用当前项")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("change")]),t._v(" "),v("td",[t._v("在选项状态发生改变时触发，返回当前状态")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("value")]),t._v(" "),v("td",[t._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用当前项")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("change")]),t._v(" "),v("td",[t._v("在选项状态发生改变时触发，返回当前选中的项")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])])])])}]},ijDI:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=v("PfOg"),c=function(t){return t&&t.__esModule?t:{default:t}}(_);e.default={data:function(){return{code:c.default,checked:!0,data:["苹果🍎","香蕉🍌","葡萄🍇"]}}}}});