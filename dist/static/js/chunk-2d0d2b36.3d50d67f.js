(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d2b36"],{"5a2f":function(t,e,n){"use strict";n.r(e),n("28a5"),n("a481"),n("6b54"),n("4917"),n("c5f6");var r={name:"vue-easy-print",components:{},props:{spaceRow:{type:Boolean,default:!1},tableData:{type:Object,default:function(){}},tableShow:{type:Boolean,default:!1},buttonShow:{type:Boolean,default:!1},buttonClass:{type:String,default:"el-button el-button--default"},onePageRow:{type:Number,default:5},beforeCopy:Function,beforePrint:Function},data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=document.getElementById("easyPrintIframe");e?this.getStyle():((e=document.createElement("iframe")).id="easyPrintIframe",e.style.position="fixed",e.style.width="0",e.style.height="0",e.style.top="-100px",window.location.hostname!==document.domain&&navigator.userAgent.match(/msie/i)&&(e.src='javascript:document.write("<head><script>document.domain=\\"'+document.domain+'\\";<\/script></head><body></body>")'),e.onload=function(){t.getStyle()},document.body.appendChild(e))},print:function(){"function"==typeof this.beforeCopy&&this.beforeCopy();var t=document.getElementById("easyPrintIframe");t.contentDocument.body.innerHTML=this.$refs.template.innerHTML,"function"==typeof this.beforePrint&&this.beforePrint(),this.$nextTick(function(){setTimeout(function(){t.contentWindow.print()},100)})},getStyle:function(){for(var t=document.getElementById("easyPrintIframe"),e="",n=document.querySelectorAll("style"),r=0;r<n.length;r++)e+=n[r].outerHTML;t.contentDocument.head.innerHTML=e;for(var i=document.querySelectorAll("link"),o=0;o<i.length;o++){var a=document.createElement("link");a.setAttribute("rel","stylesheet"),i[o].type?a.setAttribute("type",i[o].type):a.setAttribute("type","text/css"),a.setAttribute("href",i[o].href),a.setAttribute("media","all"),t.contentDocument.head.appendChild(a)}},getChineseNumber:function(t){var e,n,r,i,o,a,u,s,l,c,d,f,p,h;if(void 0===t)return"";if(""==(t=t.toString()))return"";if(null!=t.match(/[^,.\d]/))return"";if(null==t.match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/))return"";if(t=(t=t.replace(/,/g,"")).replace(/^0+/,""),Number(t)>99999999999.99)return alert("您输入的金额太大，请重新输入!"),"";if((i=t.split(".")).length>1?(e=i[0],n=(n=i[1]).substr(0,2)):(e=i[0],n=""),o=new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖"),a=new Array("","拾","佰","仟"),u=new Array("","万","亿"),s=new Array("角","分"),r="",Number(e)>0){for(l=0,c=0;c<e.length;c++)p=(d=e.length-c-1)/4,h=d%4,"0"==(f=e.substr(c,1))?l++:(l>0&&(r+=o[0]),l=0,r+=o[Number(f)]+a[h]),0==h&&l<4&&(r+=u[p]);r+="元"}if(""!=n)for(c=0;c<n.length;c++)"0"!=(f=n.substr(c,1))&&(r+=o[Number(f)]+s[c]);return""==r&&(r="零元"),""==n&&(r+="整"),""+r}}},i=n("2877"),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.tableShow,expression:"tableShow"}],ref:"template"},[t._t("default",[n("span",[t._v("编写你自己的打印区域组件，然后slot插入到vue-easy-print")])],{getChineseNumber:t.getChineseNumber})],2),t.buttonShow?n("button",{class:t.buttonClass,attrs:{type:"button"},on:{click:t.print}},[n("span",[t._v("开始打印")])]):t._e()])},[],!1,null,null,null).exports,a={components:{vueEasyPrint:o},data:function(){return{}},methods:{print:function(){this.$refs.easyPrint.print()}}},u=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("vue-easy-print",{ref:"easyPrint",attrs:{"table-show":""}},[e("div",[e("p",[this._v("葫芦娃，葫芦娃")]),e("p",[this._v("一根藤上七朵花")]),e("p",[this._v("小小树藤是我家 啦啦啦啦")]),e("p",[this._v("啦啦啦啦")]),e("p",[this._v("...")])])]),e("a-button",{on:{click:this.print}},[this._v("打印")])],1)},[],!1,null,null,null);e.default=u.exports}}]);