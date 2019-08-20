(window.webpackJsonpbuttonmaker=window.webpackJsonpbuttonmaker||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),l=a.n(r),c=a(2),d=a(1),i=(a(10),function(e){var t=e.button;return o.a.createElement(n.Fragment,null,o.a.createElement("h2",null,"Button Preview:"),o.a.createElement("div",{className:"button-window"},o.a.createElement("button",{style:{fontFamily:t.fontFamily,fontSize:"".concat(t.fontSize,"px"),fontWeight:"".concat(t.textBold?"bold":"normal"),fontStyle:"".concat(t.textItalic?"italic":"normal"),color:"".concat(t.textColor),paddingLeft:"".concat(t.paddingLeft,"px"),paddingRight:"".concat(t.paddingRight,"px"),paddingTop:"".concat(t.paddingTop,"px"),paddingBottom:"".concat(t.paddingBottom,"px"),borderWidth:"".concat(t.borderWidth,"px"),borderStyle:"".concat(t.borderStyle),borderColor:"".concat(t.borderColor),borderTopLeftRadius:"".concat(t.borderRadiusTopLeft,"px"),borderTopRightRadius:"".concat(t.borderRadiusTopRight,"px"),borderBottomLeftRadius:"".concat(t.borderRadiusBottomLeft,"px"),borderBottomRightRadius:"".concat(t.borderRadiusBottomRight,"px"),backgroundColor:"".concat(t.background),textShadow:"".concat(t.hasTextShadow?"\n                  ".concat(t.textShadowX,"px\n                  ").concat(t.textShadowY,"px\n                  ").concat(t.textShadowBlur,"px\n                  ").concat(t.textShadowColor,"\n                "):""),boxShadow:"".concat(t.hasBoxShadow?"\n                  ".concat(t.boxShadowX,"px\n                  ").concat(t.boxShadowY,"px\n                  ").concat(t.boxShadowBlur,"px\n                  ").concat(t.boxShadowSize,"px\n                  ").concat(t.boxShadowColor,"\n                "):""),backgroundImage:"".concat(t.hasGradient?"".concat(t.gradientType,"(").concat(t.gradientFrom,", ").concat(t.gradientTo,")"):"")},className:"my-button"},t.text)))}),m=function(e){var t=e.innerText,a=Object(n.useRef)(null),r=Object(n.useRef)(null),l=Object(n.useState)(!1),c=Object(d.a)(l,2),i=c[0],m=c[1];return o.a.createElement(n.Fragment,null,o.a.createElement("h3",null,"HTML output:",o.a.createElement("div",{className:"code-copy"},i?o.a.createElement("p",{className:"code-copy-success"},"Code Copied"):o.a.createElement("img",{className:"code-copy-img",src:"images/copy.png",title:"Copy to clipboard",alt:"copy",onClick:function(e){var t=a.current.innerText;r.current.value=t,r.current.className+=" active",r.current.select(),document.execCommand("copy"),e.target.focus(),r.current.classList.remove("active"),m(!0),setTimeout(function(){m(!1)},5e3)}}))),o.a.createElement("code",{className:"html-output",ref:a},"<",o.a.createElement("span",{className:"red"},"div")," ",o.a.createElement("span",{className:"green"},"class"),"=",o.a.createElement("span",{className:"orange"},'"my-button"'),">",o.a.createElement("span",{className:"gap"},t),"<",o.a.createElement("span",{className:"red"},"/div"),">"),o.a.createElement("textarea",{ref:r,defaultValue:"Some text to copys"}))},u=function(e){var t=e.button,a=Object(n.useRef)(null),r=Object(n.useRef)(null),l=Object(n.useState)(!1),c=Object(d.a)(l,2),i=c[0],m=c[1];return o.a.createElement(n.Fragment,null,o.a.createElement("h3",null,"CSS output:",o.a.createElement("div",{className:"code-copy"},i?o.a.createElement("p",{className:"code-copy-success"},"Code Copied"):o.a.createElement("img",{className:"code-copy-img",src:"images/copy.png",title:"Copy to clipboard",alt:"copy",onClick:function(e){var t=a.current.innerText;r.current.value=t,r.current.className+=" active",r.current.select(),document.execCommand("copy"),e.target.focus(),r.current.classList.remove("active"),m(!0),setTimeout(function(){m(!1)},5e3)}}))),o.a.createElement("code",{className:"css-output",ref:a},".",o.a.createElement("span",{className:"span green"},"my-button")," ",o.a.createElement("span",{className:"red"},"{"),o.a.createElement("span",{className:"prop"}," ",o.a.createElement("span",{className:"orange"},"font-family"),": ",t.fontFamily,";"),o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"font-size"),": ",t.fontSize,"px;"),!0===t.textBold?o.a.createElement(n.Fragment,null,o.a.createElement("span",{className:"prop"}," ",o.a.createElement("span",{className:"orange"},"font-weight"),": bold;")):"",!0===t.textItalic?o.a.createElement(n.Fragment,null,o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"font-style"),": italic;")):"",o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"color"),": ",t.textColor,";"),!0===t.hasTextShadow?o.a.createElement(n.Fragment,null,o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"text-shadow"),": ",t.textShadowX,"px ",t.textShadowY,"px ",t.textShadowBlur,"px"," ",t.textShadowColor,";")):"",o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"padding"),": ",t.paddingTop,"px"," ",t.paddingRight,"px ",t.paddingBottom,"px ",t.paddingLeft,"px;"),t.borderWidth>0?o.a.createElement(n.Fragment,null,o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"border"),": ",t.borderWidth,"px"," ",t.borderStyle," ",t.borderColor,";")):"",o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"border-radius"),":"," ",t.borderRadiusTopLeft,"px ",t.borderRadiusTopRight,"px"," ",t.borderRadiusBottomRight,"px ",t.borderRadiusBottomLeft,"px;"),!0===t.hasBoxShadow?o.a.createElement(n.Fragment,null,o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"box-shadow"),": ",t.boxShadowX,"px"," ",t.boxShadowY,"px ",t.boxShadowBlur,"px"," ",t.boxShadowSize,"px ",t.boxShadowColor,";")):"",o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"background"),": ",t.background,";"),!0===t.hasGradient?o.a.createElement(n.Fragment,null,o.a.createElement("span",{className:"prop"},o.a.createElement("span",{className:"orange"},"background-image"),":"," ",t.gradientType,"(",t.gradientFrom,", ",t.gradientTo,");")):"",o.a.createElement("span",{className:"red"},"}")),o.a.createElement("textarea",{ref:r,defaultValue:"Some text to copys"}))},s=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:"logo192.png",className:"logo",alt:"logo"}),o.a.createElement("span",{className:"website-title"},"ButtonMaker"))},p=function(){return o.a.createElement("footer",{className:"footer"},"Created by ",o.a.createElement("a",{href:"https://1alexvash.github.io/"},"Alexander Vashchuk"))};function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var h=function(){var e=Object(n.useState)("not set"),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({text:"Click Me",fontFamily:"Arial",fontSize:20,textBold:!1,textItalic:!1,textColor:"#FFFFFF",paddingLeft:8,paddingRight:8,paddingTop:15,paddingBottom:15,borderWidth:2,borderStyle:"solid",borderColor:"#333333",borderRadiusTopLeft:8,borderRadiusTopRight:8,borderRadiusBottomLeft:8,borderRadiusBottomRight:8,background:"deepskyblue",hasTextShadow:!1,textShadowX:0,textShadowY:0,textShadowBlur:0,textShadowColor:"#333333",hasBoxShadow:!1,boxShadowX:2,boxShadowY:4,boxShadowBlur:5,boxShadowSize:1,boxShadowColor:"#333333",hasGradient:!1,gradientType:"linear-gradient",gradientFrom:"#FF0000",gradientTo:"#FFFF00"}),h=Object(d.a)(l,2),b=h[0],E=h[1];function x(e,t){E(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},b,Object(c.a)({},t,e)))}return o.a.createElement("div",{className:"App"},o.a.createElement(s,null),o.a.createElement("div",{className:"input"},o.a.createElement("div",{className:"tab tab-text ".concat("tab-text"===a?"active":"")},o.a.createElement("div",{className:"tab-name",onClick:function(){return r("tab-text")}},"Text:"," ",o.a.createElement("img",{src:"images/arrow-down.png",alt:"arrow-down",className:"arrow-down"})),o.a.createElement("div",{className:"tab-content"},o.a.createElement("div",{className:"input-group text-inner"},o.a.createElement("label",{htmlFor:"text"},"Button Text:"),o.a.createElement("input",{id:"text",onChange:function(e){return x(e.target.value,"text")},defaultValue:b.text,type:"text",placeholder:"Button Text"})),o.a.createElement("div",{className:"input-group text-family"},o.a.createElement("label",{htmlFor:"borderStyle"},"Font Family:"),o.a.createElement("select",{id:"borderStyle",onChange:function(e){return x(e.target.value,"fontFamily")}},o.a.createElement("option",{value:"Arial"},"Arial"),o.a.createElement("option",{value:"Verdana"},"Verdana"),o.a.createElement("option",{value:"Georgia"},"Georgia"),o.a.createElement("option",{value:"Times New Roman"},"Times New Roman"),o.a.createElement("option",{value:"Courier New"},"Courier New"),o.a.createElement("option",{value:"Lucida Console"},"Lucida Console"))),o.a.createElement("div",{className:"input-group text-size"},o.a.createElement("label",{htmlFor:"textSize"},"Font Size:"),o.a.createElement("input",{id:"textSize",onChange:function(e){return x(e.target.value,"fontSize")},defaultValue:b.fontSize,type:"number",placeholder:"Text Size",min:"10",max:"100"})),o.a.createElement("div",{className:"input-group text-style"},o.a.createElement("label",{htmlFor:"textBold"},"Bold:"),o.a.createElement("input",{id:"textBold",onChange:function(e){return x(e.target.checked,"textBold")},checked:b.textBold,type:"checkbox"}),o.a.createElement("label",{htmlFor:"textBold"},"Italic:"),o.a.createElement("input",{id:"textBold",onChange:function(e){return x(e.target.checked,"textItalic")},checked:b.textItalic,type:"checkbox"})),o.a.createElement("div",{className:"input-group text-color"},o.a.createElement("label",{htmlFor:"textColor"},"Text Color:"),o.a.createElement("input",{id:"textColor",onChange:function(e){return x(e.target.value,"textColor")},defaultValue:b.textColor,type:"color"})),o.a.createElement("div",{className:"input-group text-has-shadow"},o.a.createElement("label",{htmlFor:"hasTextShadow"},"Add Text Shadow:"),o.a.createElement("input",{id:"hasTextShadow",onChange:function(e){return x(e.target.checked,"hasTextShadow")},checked:b.hasTextShadow,type:"checkbox"})),b.hasTextShadow?o.a.createElement("div",{className:"input-group text-shadow"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"textShadowX"},"X:"),o.a.createElement("input",{id:"textShadowX",onChange:function(e){return x(e.target.value,"textShadowX")},value:b.textShadowX,type:"number"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"textShadowY"},"Y:"),o.a.createElement("input",{id:"textShadowY",onChange:function(e){return x(e.target.value,"textShadowY")},value:b.textShadowY,type:"number"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"textShadowBlur"},"Blur:"),o.a.createElement("input",{id:"textShadowBlur",onChange:function(e){return x(e.target.value,"textShadowBlur")},value:b.textShadowBlur,type:"number"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"textShadowColor"},"Color:"),o.a.createElement("input",{id:"textShadowColor",onChange:function(e){return x(e.target.value,"textShadowColor")},value:b.textShadowColor,type:"color"}))):"")),o.a.createElement("div",{className:"tab tab-paddings ".concat("tab-paddings"===a?"active":"")},o.a.createElement("div",{className:"tab-name",onClick:function(){return r("tab-paddings")}},"Paddings:"," ",o.a.createElement("img",{src:"images/arrow-down.png",alt:"arrow-down",className:"arrow-down"})),o.a.createElement("div",{className:"tab-content"},o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"paddingLeft"},"Left Padding:"),o.a.createElement("input",{id:"paddingLeft",onChange:function(e){return x(e.target.value,"paddingLeft")},value:b.paddingLeft,type:"number",min:"0",max:"100"})),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"paddingRight"},"Right Padding:"),o.a.createElement("input",{id:"paddingRight",onChange:function(e){return x(e.target.value,"paddingRight")},value:b.paddingRight,type:"number",min:"0",max:"100"})),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"paddingTop"},"Top Padding:"),o.a.createElement("input",{id:"paddingTop",onChange:function(e){return x(e.target.value,"paddingTop")},value:b.paddingTop,type:"number",min:"0",max:"100"})),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"paddingBottom"},"Bottom Padding:"),o.a.createElement("input",{id:"paddingBottom",onChange:function(e){return x(e.target.value,"paddingBottom")},value:b.paddingBottom,type:"number",min:"0",max:"100"})))),o.a.createElement("div",{className:"tab tab-border ".concat("tab-border"===a?"active":"")},o.a.createElement("div",{className:"tab-name",onClick:function(){return r("tab-border")}},"Border:"," ",o.a.createElement("img",{src:"images/arrow-down.png",alt:"arrow-down",className:"arrow-down"})),o.a.createElement("div",{className:"tab-content"},o.a.createElement("div",{className:"input-group border-width"},o.a.createElement("label",{htmlFor:"topLeft"},"Border Width:"),o.a.createElement("input",{id:"topLeft",onChange:function(e){return x(e.target.value,"borderWidth")},value:b.borderWidth,type:"number",min:"0",max:"20"})),o.a.createElement("div",{className:"input-group border-style"},o.a.createElement("label",{htmlFor:"borderStyle"},"Border Style:"),o.a.createElement("select",{id:"borderStyle",onChange:function(e){return x(e.target.value,"borderStyle")}},o.a.createElement("option",{value:"solid"},"Solid"),o.a.createElement("option",{value:"dotted"},"Dotted"),o.a.createElement("option",{value:"dashed"},"Dashed"))),o.a.createElement("div",{className:"input-group border-color"},o.a.createElement("label",{htmlFor:"borderColor"},"Border Color:"),o.a.createElement("input",{id:"borderColor",onChange:function(e){return x(e.target.value,"borderColor")},defaultValue:b.borderColor,type:"color"})),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"topLeft"},"Top Left Radius:"),o.a.createElement("input",{id:"topLeft",onChange:function(e){return x(e.target.value,"borderRadiusTopLeft")},value:b.borderRadiusTopLeft,type:"number",min:"0",max:"100"})),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"topRight"},"Top Right Radius:"),o.a.createElement("input",{id:"topRight",onChange:function(e){return x(e.target.value,"borderRadiusTopRight")},value:b.borderRadiusTopRight,type:"number",min:"0",max:"100"})),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"bottomLeft"},"Bottom Left Radius:"),o.a.createElement("input",{id:"bottomLeft",onChange:function(e){return x(e.target.value,"borderRadiusBottomLeft")},value:b.borderRadiusBottomLeft,type:"number",min:"0",max:"100"})),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"bottomRight"},"Bottom Right Radius:"),o.a.createElement("input",{id:"bottomRight",onChange:function(e){return x(e.target.value,"borderRadiusBottomRight")},value:b.borderRadiusBottomRight,type:"number",min:"0",max:"100"})))),o.a.createElement("div",{className:"tab tab-box-shadow ".concat("tab-box-shadow"===a?"active":"")},o.a.createElement("div",{className:"tab-name",onClick:function(){return r("tab-box-shadow")}},"Box Shadow:"," ",o.a.createElement("img",{src:"images/arrow-down.png",alt:"arrow-down",className:"arrow-down"})),o.a.createElement("div",{className:"tab-content"},o.a.createElement("div",{className:"input-group has-box-shadow"},o.a.createElement("label",{htmlFor:"hasBoxShadow"},"Turn On Box Shadow"),o.a.createElement("input",{id:"hasBoxShadow",value:b.hasBoxShadow,onClick:function(e){return x(e.target.checked,"hasBoxShadow")},type:"checkbox"})),o.a.createElement("div",{className:"input-group box-shadow"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"boxShadowX"},"X:"),o.a.createElement("input",{id:"boxShadowX",onChange:function(e){return x(e.target.value,"boxShadowX")},value:b.boxShadowX,type:"number"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"boxShadowY"},"Y:"),o.a.createElement("input",{id:"boxShadowY",onChange:function(e){return x(e.target.value,"boxShadowY")},value:b.boxShadowY,type:"number"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"boxShadowBlur"},"Blur:"),o.a.createElement("input",{id:"boxShadowBlur",onChange:function(e){return x(e.target.value,"boxShadowBlur")},value:b.boxShadowBlur,type:"number"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"boxShadowSize"},"Size:"),o.a.createElement("input",{id:"boxShadowSize",onChange:function(e){return x(e.target.value,"boxShadowSize")},value:b.boxShadowSize,type:"number"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"boxShadowColor"},"Color:"),o.a.createElement("input",{id:"boxShadowColor",onChange:function(e){return x(e.target.value,"boxShadowColor")},value:b.boxShadowColor,type:"color"}))))),o.a.createElement("div",{className:"tab tab-background ".concat("tab-background"===a?"active":"")},o.a.createElement("div",{className:"tab-name",onClick:function(){return r("tab-background")}},"Background:"," ",o.a.createElement("img",{src:"images/arrow-down.png",alt:"arrow-down",className:"arrow-down"})),o.a.createElement("div",{className:"tab-content"},o.a.createElement("div",{className:"input-group button-background"},o.a.createElement("label",{htmlFor:"backgroundColor"},"Background Color:"),o.a.createElement("input",{id:"backgroundColor",onChange:function(e){return x(e.target.value,"background")},defaultValue:b.background,type:"color"})),o.a.createElement("div",{className:"input-group has-gradient"},o.a.createElement("label",{htmlFor:"hasGradient"},"Add Gradient"),o.a.createElement("input",{id:"hasGradient",onClick:function(e){return x(e.target.checked,"hasGradient")},checked:b.hasGradient,type:"checkbox"})),b.hasGradient?o.a.createElement("div",{className:"input-group gradient-type"},o.a.createElement("label",{htmlFor:"gradientType"},"Gradient Type:"),o.a.createElement("select",{id:"gradientType",onChange:function(e){return x(e.target.value,"gradientType")},defaultValue:b.gradientType},o.a.createElement("option",{value:"linear-gradient"},"Linear"),o.a.createElement("option",{value:"radial-gradient"},"Radial"))):"",b.hasGradient?o.a.createElement("div",{className:"input-group gradient"},o.a.createElement("label",{htmlFor:"gradientFrom"},"From:"),o.a.createElement("input",{id:"gradientFrom",onChange:function(e){return x(e.target.value,"gradientFrom")},defaultValue:b.gradientFrom,type:"color"}),o.a.createElement("label",{htmlFor:"gradientTo"},"To:"),o.a.createElement("input",{id:"gradientTo",onChange:function(e){return x(e.target.value,"gradientTo")},defaultValue:b.gradientTo,type:"color"})):""))),o.a.createElement("div",{className:"output"},o.a.createElement(i,{button:b}),o.a.createElement(m,{innerText:b.text}),o.a.createElement(u,{button:b})),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.ede90544.chunk.js.map