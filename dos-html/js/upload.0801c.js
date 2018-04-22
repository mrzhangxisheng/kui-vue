/*! kyui v1.5.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([5],{NWil:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("fUyN"),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{code:n.default,action:"/rest/jcmro-sys-service/fileupload/uploadFile",data:{a:1,b:2,c:3}}},methods:{upload:function(){this.$refs.upload.submit()},change:function(t){this.$Message.info("选择了文件："+t)},complite:function(t){}}}},fUyN:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};a.base='<Upload action="/rest/jcmro-sys-service/fileupload/uploadFile">\n    <Button>上传文件</Button>\n</Upload>',a.disabled='<Upload :action="action" disabled>\n    <Button type="success">上传文件</Button>\n</Upload>',a.withData='<Upload action="/rest/jcmro-sys-service/fileupload/uploadFile" @change="change" @complite="complite" :data="data">\n    <Button>上传文件</Button>\n</Upload>\ndata() {\n    return {\n        data: { a: 1, b: 2, c: 3 },\n    };\n},',a.mode='<Upload :action="action" @change="change" @complite="complite" ref="upload" :data="data" type="wait">\n    <Button>上传文件</Button>\n</Upload>\n<Button @click="upload">点我开始上传</Button>\n<script>\n    import code from \'../code/upload\'\n    export default {\n        data() {\n            return {\n                code: code,\n                action: "/rest/jcmro-sys-service/fileupload/uploadFile",\n                data: { a: 1, b: 2, c: 3 },\n            };\n        },\n        methods: {\n            upload() {\n                this.$refs.upload.submit();\n            },\n            change(file) {\n                this.$Message.info(\'选择了文件：\' + file);\n            },\n            complite(res) {\n                console.log(res);\n            }\n        }\n    };\n    <\/script>',e.default=a},rPRS:function(t,e,o){"use strict";o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Upload 上传")]),t._v(" "),o("Alert",[t._v("为了兼容低版本（ie9）浏览器，上传采用模拟表单上传")]),t._v(" "),o("h3",[t._v("代码示例")]),t._v(" "),o("Demo",{attrs:{title:"基础用法"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Upload",{attrs:{action:"/rest/jcmro-sys-service/fileupload/uploadFile"}},[o("Button",[t._v("上传文件")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("code",[t._v("action")]),t._v("配置上传接口路径")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),o("Demo",{attrs:{title:"禁用"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Upload",{attrs:{action:t.action,disabled:""}},[o("Button",{attrs:{type:"success"}},[t._v("上传文件")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n        "),o("code",[t._v("disabled")]),t._v("属性来控制组件是否可用")])]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])]),t._v(" "),o("Demo",{attrs:{title:"附带数据上传"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Upload",{attrs:{action:"/rest/jcmro-sys-service/fileupload/uploadFile",data:t.data},on:{change:t.change,complite:t.complite}},[o("Button",[t._v("上传文件")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("此操作非多此一举，在ajax上传模式中，除了上传文件外，可能会有其他附加参数一起附带表单提交，传参\n      "),o("code",[t._v("data")]),t._v("为json")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.withData))])]),t._v(" "),o("Demo",{attrs:{title:"非自动上传模式"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Upload",{ref:"upload",attrs:{action:t.action,data:t.data,type:"wait"},on:{change:t.change,complite:t.complite}},[o("Button",[t._v("上传文件")])],1),t._v(" "),o("Button",{on:{click:t.upload}},[t._v("点我开始上传")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),o("code",[t._v("type")]),t._v("来控制是否选择文件就提交上传，\n      "),o("code",[t._v("complite")]),t._v("方法为上传完成成功或失败回调，返回数据取决于接口\n      "),o("code",[t._v("change")]),t._v("选择文件触发事件，返回选择的文件名\n    ")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.mode))])]),t._v(" "),o("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("action")]),t._v(" "),o("td",[t._v("上传API地址")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("data")]),t._v(" "),o("td",[t._v("上传附带参数")]),t._v(" "),o("td",[t._v("Oject")]),t._v(" "),o("td",[t._v("{ }")])]),t._v(" "),o("tr",[o("td",[t._v("type")]),t._v(" "),o("td",[t._v("上传类型，可选值为change（选择文件触发上传），wait（选择文件之后，其他事件触发上传）或者不设置")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("change")])]),t._v(" "),o("tr",[o("td",[t._v("change")]),t._v(" "),o("td",[t._v("选择文件之后的回调，返回选中的文件名")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("complite")]),t._v(" "),o("td",[t._v("上传完成之后的回调，返回值取决于api上传接口返回的值 ")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("upload")]),t._v(" "),o("td",[t._v("触发上传事件，此方法配合type=wait，选中文件后 手动提交上传")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])])])])}]},tAIF:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("NWil"),n=o.n(a);for(var d in a)"default"!==d&&function(t){o.d(e,t,function(){return a[t]})}(d);var c=o("rPRS"),s=o("XyMi"),v=Object(s.a)(n.a,c.a,c.b,!1,null,null,null);e.default=v.exports}});