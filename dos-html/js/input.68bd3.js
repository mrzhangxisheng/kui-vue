/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([21],{TE7q:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=v("p08W"),d=function(t){return t&&t.__esModule?t:{default:t}}(_);e.default={data:function(){return{code:d.default}},methods:{iconClick:function(){this.$Message.info("点击图标事件")}}}},"b3d+":function(t,e,v){"use strict";v.d(e,"a",function(){return _}),v.d(e,"b",function(){return d});var _=function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("h2",[t._v("Input 输入框")]),t._v(" "),v("Alert",[t._v("注意：非 template/render 模式下，需使用 k-input。")]),t._v(" "),v("h3",[t._v("代码示例")]),t._v(" "),v("Demo",{attrs:{title:"基础用法"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入内容..."}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("使用\n      "),v("code",[t._v("v-model")]),t._v("进行数据双向绑定")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),v("Demo",{attrs:{title:"可清除"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入内容...",clearable:""}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n      "),v("code",[t._v("clearble")]),t._v("属性可控制是否显示清空按钮")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.clearable))])]),t._v(" "),v("Demo",{attrs:{title:"带图标"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入内容...",icon:"ios-person"},on:{iconClick:t.iconClick}}),t._v(" "),v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入内容...",icon:"ios-search"},on:{iconClick:t.iconClick}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n      "),v("code",[t._v("icon")]),t._v("属性，可设置按钮图标，"),v("code",[t._v("iconClick")]),t._v("可触发图标点击事件")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.withIcon))])]),t._v(" "),v("Demo",{attrs:{title:"尺寸"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{type:"text",width:"200",placeholder:"请输入内容..."}}),t._v(" "),v("Input",{attrs:{type:"text",width:"200",mini:"",placeholder:"请输入内容..."}}),t._v(" "),v("Input",{attrs:{type:"text",width:"200",mini:"",placeholder:"请输入内容1...",icon:"ios-person"},on:{iconClick:t.iconClick}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n      "),v("code",[t._v("mini")]),t._v("可设置组件大小，\n      "),v("code",[t._v("width")]),t._v("属性可控制组件宽度")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.size))])]),t._v(" "),v("Demo",{attrs:{title:"文本域"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("Input",{attrs:{width:"300",type:"textarea",rows:4,placeholder:"请输入内容..."}})],1),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("当\n      "),v("code",[t._v("type")]),t._v("属性取值为\n      "),v("code",[t._v("textarea")]),t._v("时组件呈现文本玉")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.textArea))])]),t._v(" "),v("Demo",{attrs:{title:"禁用"}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("div",{staticStyle:{display:"inline-block"}},[v("Input",{staticStyle:{float:"left"},attrs:{width:"300",type:"textarea",rows:4,placeholder:"请输入银行卡密码",disabled:""}}),t._v(" "),v("Input",{staticStyle:{"margin-left":"15px",float:"left"},attrs:{type:"text",width:"200",placeholder:"请输入内容...",disabled:""}})],1)]),t._v(" "),v("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n      "),v("code",[t._v("disabled")]),t._v("属性来控制组件是否可用")]),t._v(" "),v("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])]),t._v(" "),v("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},d=[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"table-border"},[v("table",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("输入框类型，可选值为 text、password、textarea、url、email、date")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("text")])]),t._v(" "),v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[t._v("组件的宽度")]),t._v(" "),v("td",[t._v("String,Number")]),t._v(" "),v("td",[t._v("200")])]),t._v(" "),v("tr",[v("td",[t._v("value ")]),t._v(" "),v("td",[t._v("绑定的值，可使用 v-model 双向绑定 ")]),t._v(" "),v("td",[t._v("String | Number")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("icon ")]),t._v(" "),v("td",[t._v("输入框尾部图标，仅在 text 类型下有效 ")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("placeholder")]),t._v(" "),v("td",[t._v("占位文本 ")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("设置输入框为禁用状态")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("readonly")]),t._v(" "),v("td",[t._v("设置输入框为只读")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("maxlength")]),t._v(" "),v("td",[t._v("最大输入长度")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("rows")]),t._v(" "),v("td",[t._v("文本域默认行数，仅在 textarea 类型下有效")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("number")]),t._v(" "),v("td",[t._v("将用户的输入转换为 Number 类型")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("autocomplete")]),t._v(" "),v("td",[t._v("原生的自动完成功能，可选值为 off 和 on")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("spellcheck")]),t._v(" "),v("td",[t._v("原生的 spellcheck 属性")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("enter")]),t._v(" "),v("td",[t._v("按下回车键时触发")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("focus")]),t._v(" "),v("td",[t._v("输入框聚焦时触发")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("blur")]),t._v(" "),v("td",[t._v("输入框失去焦点时触发")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("keyup")]),t._v(" "),v("td",[t._v("原生的 keyup 事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("keydown")]),t._v(" "),v("td",[t._v("原生的 keydown 事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("keypress")]),t._v(" "),v("td",[t._v("原生的 keypress 事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("iconClick")]),t._v(" "),v("td",[t._v("icon的点击事件")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")])])])])}]},p08W:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _={};_.base='<Input type="text" width="200" placeholder="请输入内容..."></Input>',_.clearable='<Input type="text" width="200" placeholder="请输入内容..." clearable></Input>',_.withIcon='<Input type="text" width="200" placeholder="请输入内容..." icon="ios-person" @iconClick="iconClick"></Input>\n<Input type="text" width="200" placeholder="请输入内容..." icon="ios-search" @iconClick="iconClick"></Input>',_.size='<Input type="text" width="200" placeholder="请输入内容..."></Input>\n<Input type="text" width="200" mini placeholder="请输入内容..."></Input>\n<Input type="text" width="200" mini placeholder="请输入内容1..." icon="ios-person" @iconClick="iconClick"></Input>',_.textArea='<Input width="300" type="textarea" :rows="4" placeholder="请输入内容..."></Input>',_.disabled='<Input width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码" disabled style="float:left;"></Input>\n<Input type="text" width="200" placeholder="请输入内容..." disabled style="margin-left:15px;float:left;"></Input>\n',e.default=_},ptSj:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=v("TE7q"),d=v.n(_);for(var o in _)"default"!==o&&function(t){v.d(e,t,function(){return _[t]})}(o);var n=v("b3d+"),l=v("XyMi"),c=Object(l.a)(d.a,n.a,n.b,!1,null,null,null);e.default=c.exports}});