(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports={ListLyDo:[{key:"1",value:"Item 1"},{key:"2",value:"Item 2"},{key:"3",value:"Item 3"},{key:"4",value:"Item 4"}],ListHTTT:[{key:"1",value:"Ti\u1ec1n m\u1eb7t."},{key:"2",value:"Chuy\u1ec3n kho\u1ea3n."},{key:"3",value:"Th\u1ebb t\xedn d\u1ee5ng."}],ListLGD:[{key:"1",value:"B\xe1n l\u1ebb, l\xe0m d\u1ecbch v\u1ee5."},{key:"2",value:"B\xe1n s\u1ec9, s\u1ed1 l\u01b0\u1ee3ng l\u1edbn."}],ListNVBH:[{key:"1",value:"Nguy\u1ec5n H\u1eefu D\u01b0\u01a1ng"},{key:"2",value:"L\xea Th\u1ecb B"},{key:"3",value:"A B\xea X\xea"},{key:"4",value:"XYZ"}],ListMatHang:[{key:"1",productID:"MH01",value:"Sim 1",price:[{key:"1",value:5e4},{key:"2",value:45e3},{key:"3",value:3e4}],discount:[{key:"1",value:10},{key:"2",value:15},{key:"3",value:20}]},{key:"2",productID:"MH02",value:"Sim 2",price:[{key:"1",value:9e4},{key:"2",value:8e4},{key:"3",value:75e3}]},{key:"3",productID:"MH03",value:"Th\u1ebb 20k",price:[{key:"1",value:2e4},{key:"2",value:19e3},{key:"3",value:18e3}],discount:[{key:"1",value:10},{key:"2",value:15},{key:"3",value:20}]},{key:"4",productID:"MH04",value:"Th\u1ebb 50k",price:[{key:"1",value:5e4},{key:"2",value:45e3},{key:"3",value:3e4}]}]}},26:function(e,t,a){e.exports=a(67)},32:function(e,t,a){},61:function(e){e.exports={table1:{columns:[{title:"M\xe3 m\u1eb7t h\xe0ng",dataIndex:"productID",key:"productID"},{title:"S\u1ed1 l\u01b0\u1ee3ng",dataIndex:"quantity",key:"quantity"},{title:"Gi\xe1",dataIndex:"price",key:"price"},{title:"VAT",dataIndex:"vat",key:"vat"},{title:"Chi\u1ebft kh\u1ea5u",dataIndex:"discount",key:"discount"},{title:"T\u1ed5ng ti\u1ec1n",dataIndex:"total",key:"total"}],data:[{productID:"H01",quantity:"10000",price:"50000",vat:"10%",discount:"0"},{productID:"H02",quantity:"6969",price:"96000",vat:"10%",discount:"15%"}]},table2:{columns:[{title:"T\u1eeb Serial",dataIndex:"fromSerial",key:"fromSerial"},{title:"T\u1edbi Serial",dataIndex:"toSerial",key:"toSerial"},{title:"S\u1ed1 l\u01b0\u1ee3ng",dataIndex:"quantity",key:"quantity"}],data:[{fromSerial:"00000000000000",toSerial:"9923013039020",quantity:"500000"},{fromSerial:"1209081204121",toSerial:"20492049021112",quantity:"12345"}]}}},63:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(12),c=a.n(i),s=(a(32),a(3)),r=a(4),o=a(6),m=a(5),u=a(7),d=a(20),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){e.value&&(a.setState({date:e.value}),a.props.onChange(e.value))},a.state={date:null},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(d.Calendar,{style:{width:"100%",height:"100%"},value:this.state.date,placeholder:"Ch\u1ecdn ng\xe0y",dateFormat:"dd/mm/yy",maxDate:new Date,onChange:this.handleChange,showIcon:!0})}}]),t}(n.Component);h.defaultProps={onChange:function(e){console.log(e),console.log(1)}};var v=h,p=a(8),y=a(21),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.value;a.props.onChange(t),a.setState({value:t})},a.state={value:null,listOptions:null},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.list!==e.list&&(this.setState({value:null}),this.props.onChange(null))}},{key:"render",value:function(){return l.a.createElement(y.Dropdown,{style:{width:this.props.width,height:"100%",minWidth:"50px",fontFamily:"Tahoma"},value:this.state.value,placeholder:this.props.placeholder,filterPlaceholder:"T\xecm ki\u1ebfm",disabled:this.props.disabled,filter:!0,showClear:!0,optionLabel:"value",options:this.props.list,onChange:this.handleChange})}}]),t}(n.Component);E.defaultProps={width:"100%",placeholder:"Choose here.",list:[],disabled:!1,onChange:function(e){console.log("default: "+e)}};var b=E,g=a(15),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).dateChange=function(e){console.log(e),a.setState({ngayBan:e})},a.drdHTTTChange=function(e){console.log(e),a.setState({httt:e})},a.drdNV1Change=function(e){console.log(e),a.setState({nv1:e})},a.drdNV2Change=function(e){console.log(e),a.setState({nv2:e})},a.drdLyDoChange=function(e){console.log(e),a.setState({lyDo:e})},a.drdLoaiGDChange=function(e){console.log(e),a.setState({loaiGD:e})},a.drdBHChange=function(e){console.log(e),a.setState({bh:e})},a.btnBaoLanhClick=function(){if(a.state.ngayBan&&a.state.httt&&a.state.nv1&&a.state.nv2&&a.state.lyDo&&a.state.loaiGD&&a.state.bh)return alert(JSON.stringify(a.state,null,4));alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin")},a.state={ngayBan:null,httt:null,nv1:null,nv2:null,lyDo:null,loaiGD:null,bh:null},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"column",style:{width:"50%"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Ng\xe0y b\xe1n"),l.a.createElement("div",{className:"input p-fluid"},l.a.createElement(v,{onChange:this.dateChange}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"HTTT"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{onChange:this.drdHTTTChange,list:g.ListHTTT,placeholder:"Ch\u1ecdn H\xecnh th\u1ee9c thanh to\xe1n."}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"NV b\xe1n h\xe0ng"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{onChange:this.drdNV1Change,width:"65%",list:g.ListNVBH,placeholder:"Ch\u1ecdn Nh\xe2n vi\xean b\xe1n h\xe0ng."}),l.a.createElement(b,{onChange:this.drdNV2Change,width:"35%",list:g.ListNVBH,disabled:!this.state.nv1})))),l.a.createElement("div",{className:"column",style:{width:"50%"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"L\xfd do"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{onChange:this.drdLyDoChange,list:g.ListLyDo,placeholder:"Ch\u1ecdn l\xfd do."}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Lo\u1ea1i giao d\u1ecbch"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{onChange:this.drdLoaiGDChange,list:g.ListLGD,placeholder:"Ch\u1ecdn Lo\u1ea1i giao d\u1ecbch"}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"BH/Susidy"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{width:"100%",list:g.ListNVBH,onChange:this.drdBHChange}),l.a.createElement(p.Button,{label:"B\u1ea3o\xa0l\xe3nh",style:{fontFamily:"Tahoma",marginLeft:10},disabled:!this.state.bh,onClick:this.btnBaoLanhClick})))))}}]),t}(l.a.Component),N=a(10),k=a(22),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState({checked:e.checked})},a.state={checked:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k.Checkbox,{checked:this.state.checked,onChange:this.onChange,style:{marginLeft:10},inputId:this.props.inputId}),l.a.createElement("label",{htmlFor:this.props.inputId,className:"p-checkbox-label"},this.props.label))}}]),t}(n.Component),C=a(23),L=a(24),w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onHover",value:function(){alert(1)}},{key:"render",value:function(){var e=this.props.columns.map(function(e){return l.a.createElement(L.Column,{key:e.key,field:e.dataIndex,header:e.title})});return l.a.createElement(C.DataTable,{value:this.props.data,onPage:this.onHover,style:{fontFamily:"Tahoma"}},e)}}]),t}(l.a.Component),I=a(15),S=a(61);Number.prototype.format=function(){return this.toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(",")};var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).drdMatHangChange=function(e){a.drdGiaChange(),document.getElementById("inputSL").value=1,a.setState({product:e,quantity:1})},a.drdGiaChange=function(e){var t=e?e.value:null;a.setState({price:t})},a.drdKhuyenMaiChange=function(e){var t=e?e.value:0;a.setState({discount:t})},a.txtSLBlur=function(e){var t=Number(e.target.value);t=(t=t<1?1:t)>1e6?1e6:t,document.getElementById("inputSL").value=t,a.setState({quantity:t})},a.btnThemClick=function(){if(a.state.product&&a.state.quantity&&a.state.price){var e=a.state.table1,t=!0,n=document.getElementById("chk1").checked&&a.state.discount?a.state.discount:0;if(e.map(function(l,i){if(l.productID===a.state.product.productID&&l.price===a.state.price&&l.km===n){e[i].quantity+=a.state.quantity;var c=e[i].price*e[i].quantity,s=c*n/100;return c-=s,e[i].discount="".concat(s.format()," (").concat(n,"%)"),e[i].total="".concat(c.format()," VN\u0110"),t=!1}}),console.log(t),t){var l=a.state.quantity*a.state.price,i=l*n/100;l-=i,e.push({productID:a.state.product.productID,quantity:a.state.quantity,price:a.state.price,vat:"10%",km:n,discount:"".concat(i.format()," (").concat(n,"%)"),total:"".concat(l.format()," VN\u0110")})}return a.setState({table1:e})}alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin")},a.state={product:null,price:0,discount:0,quantity:1,bh:null,table1:[],table2:[]},a.baseState=a.state,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"column",style:{width:"70%"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"M\u1eb7t h\xe0ng"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{onChange:this.drdMatHangChange,width:"35%",list:I.ListMatHang}),l.a.createElement(b,{width:"65%",list:I.ListMatHang,disabled:!this.state.product}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Gi\xe1"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{onChange:this.drdGiaChange,list:this.state.product?this.state.product.price:null}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Khuy\u1ebfn m\u1ea1i"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{onChange:this.drdKhuyenMaiChange,value:this.state.discount,list:this.state.product?this.state.product.discount:null,disabled:!this.state.product})))),l.a.createElement("div",{className:"column",style:{width:"30%",float:"right"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"S\u1ed1 l\u01b0\u1ee3ng"),l.a.createElement("div",{className:"input"},l.a.createElement(N.InputText,{maxLength:"8",id:"inputSL",onBlur:this.txtSLBlur,keyfilter:"pint",style:{minWidth:"50px"}}))),l.a.createElement(p.Button,{label:"Th\xeam",onClick:this.btnThemClick,style:{width:"50%",height:50,minWidth:90,marginLeft:"27%",marginTop:10}})),l.a.createElement(T,{inputId:"chk1",label:"T\xednh chi\u1ebft kh\u1ea5u kh\xe1ch h\xe0ng l\u1ebb."}),l.a.createElement("br",null),l.a.createElement(w,{data:this.state.table1,columns:S.table1.columns}),l.a.createElement("br",null),l.a.createElement(w,{data:this.state.table2,columns:S.table2.columns}))}}]),t}(l.a.Component),j=a(25),B=a(15),H=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"box"},l.a.createElement("h1",{style:{color:"blue"},align:"center"},"AQ/11P - 1 - 000001"),l.a.createElement("h3",{align:"center"},"Th\xf4ng tin kh\xe1ch h\xe0ng"),l.a.createElement("div",{className:"column",style:{width:"100%"}},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"T\xean KH"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{list:B.ListNVBH}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"S\u1ed1 \u0110t"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{width:"100%",list:B.ListHTTT}),l.a.createElement(p.Button,{label:"TT\xa0thu\xea\xa0bao",style:{marginLeft:5,fontFamily:"Tahoma"}}),l.a.createElement(p.Button,{label:"C\u01b0\u1edbc\xa0thu\xea\xa0bao",style:{marginLeft:5,fontFamily:"Tahoma"}}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"MST"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{list:B.ListHTTT}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"C\xf4ng ty"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{list:B.ListHTTT}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"\u0110\u1ecba ch\u1ec9"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{list:B.ListHTTT}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"T\xe0i kho\u1ea3n"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{list:B.ListHTTT}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"ID"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{list:B.ListHTTT}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Ghi ch\xfa"),l.a.createElement("div",{className:"input"},l.a.createElement(j.InputTextarea,{rows:5,style:{width:"100%"},autoResize:!0}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Th\xf4ng tin BS"),l.a.createElement("div",{className:"input"},l.a.createElement(b,{list:B.ListHTTT}))),l.a.createElement("hr",{color:"teal",width:"80%"}),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Ch\u01b0a thu\u1ebf"),l.a.createElement("div",{className:"input"},l.a.createElement(N.InputText,{keyfilter:"money",style:{width:"100%"},disabled:!0}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Thu\u1ebf"),l.a.createElement("div",{className:"input"},l.a.createElement(N.InputText,{keyfilter:"money",style:{width:"100%"},disabled:!0}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"Chi\u1ebft kh\u1ea5u"),l.a.createElement("div",{className:"input"},l.a.createElement(N.InputText,{keyfilter:"money",style:{width:"100%"},disabled:!0}))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"label"},"T\u1ed5ng ti\u1ec1n"),l.a.createElement("div",{className:"input"},l.a.createElement(N.InputText,{keyfilter:"money",style:{width:"100%"},disabled:!0}))),l.a.createElement(T,{inputId:"chk2",label:"B\xe1n h\xe0ng qua Fax, \u0111i\u1ec7n tho\u1ea1i."}),l.a.createElement("br",null)))}}]),t}(l.a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"box",style:{width:"100%"},align:"center"},l.a.createElement(p.Button,{label:"Ghi\xa0giao\xa0d\u1ecbch",style:{width:110,height:45,marginLeft:20,fontFamily:"Tahoma"}}),l.a.createElement(p.Button,{label:"Xem\xa0h\xf3a\xa0\u0111\u01a1n",style:{width:110,height:45,marginLeft:20,fontFamily:"Tahoma"}}),l.a.createElement(p.Button,{label:"L\u01b0u\xa0h\xf3a\xa0\u0111\u01a1n",style:{width:110,height:45,marginLeft:20,fontFamily:"Tahoma"}}),l.a.createElement(p.Button,{label:"Nh\u1eadp\xa0l\u1ea1i",style:{width:110,height:45,marginLeft:20,fontFamily:"Tahoma"}}),l.a.createElement(p.Button,{type:"reset",label:"Tho\xe1t",style:{width:110,height:45,marginLeft:20,fontFamily:"Tahoma"}}))}}]),t}(l.a.Component);a(63),a(64),a(65),a(66);var D=function(){return l.a.createElement("div",{className:"root"},l.a.createElement("div",{id:"r1c1"},l.a.createElement("div",null,l.a.createElement(f,null)),l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(O,null))),l.a.createElement("div",{id:"r1c2"},l.a.createElement(H,null)),l.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.53de1e47.chunk.js.map