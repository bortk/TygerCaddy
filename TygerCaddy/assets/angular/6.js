(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Usze:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){},i=e("pMnS"),o=e("ZYCi"),a=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),d=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function r(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u["\u0275did"](1,212992,null,0,o.r,[o.b,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null)],function(l,n){l(n,1,0)},null)}var s=u["\u0275ccf"]("app-headers",a,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-headers",[],null,null,null,r,d)),u["\u0275did"](1,114688,null,0,a,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),c=e("Ip0R"),p=e("t/Na"),g=(e("JQBr"),e("jmvC")),h=function(){function l(l,n){this.http=l,this.cookieService=n,this.url="/api/headers",this.token=localStorage.getItem("currentUser")}return l.prototype.authHeader=function(){return this.cookieValue=this.cookieService.get("csrftoken"),{headers:new p.g({"X-CSRFToken":this.cookieValue,Authorization:"Token "+this.token})}},l.prototype.getHeaders=function(){return this.http.get(this.url+"/",this.authHeader())},l.prototype.getHeader=function(l){return this.http.get(this.url+"/"+l,this.authHeader())},l.prototype.addHeader=function(l){return console.log(this.cookieValue),this.http.post(this.url+"/",l,this.authHeader())},l.prototype.updateHeader=function(l,n){return this.cookieValue=this.cookieService.get("csrftoken"),console.log(this.cookieValue),this.http.put(this.url+"/"+n+"/",l,this.authHeader())},l.prototype.deleteHeader=function(l){return this.cookieValue=this.cookieService.get("csrftoken"),console.log(this.cookieValue),this.http.delete(this.url+"/"+l+"/",this.authHeader())},l.prototype.validateToken=function(){},l.ngInjectableDef=u.defineInjectable({factory:function(){return new l(u.inject(p.c),u.inject(g.a))},token:l,providedIn:"root"}),l}(),f=function(){function l(l){this.headerservice=l}return l.prototype.ngOnInit=function(){this.loadProxyList()},l.prototype.loadProxyList=function(){var l=this;this.headerservice.getHeaders().subscribe(function(n){l.headers=n,console.log("loaded proxy list")})},l.prototype.deleteHeader=function(l){this.headerservice.deleteHeader(l.id).subscribe(),console.log("deleted"),this.removeFromList(l)},l.prototype.removeFromList=function(l){this.headers=this.headers.filter(function(n){return n!==l})},l}(),v=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,0,"i",[["class","fa fa-arrow-circle-down text-primary"]],null,null,null,null,null))],null,null)}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,0,"i",[["class","fa fa-arrow-circle-up text-primary"]],null,null,null,null,null))],null,null)}function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,18,"div",[["class","col-sm-6 col-lg-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,17,"div",[["class","card card-accent-info "]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,13,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](4,671744,null,0,o.p,[o.m,o.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](5,2),(l()(),u["\u0275ted"](6,null,[" "," "])),(l()(),u["\u0275eld"](7,0,null,null,8,"span",[["class","float-right"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,m)),u["\u0275did"](9,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,[" \xa0 "])),(l()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](12,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275ted"](-1,null,[" \xa0 "])),(l()(),u["\u0275eld"](14,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.deleteHeader(l.context.$implicit)&&u),u},null,null)),(l()(),u["\u0275eld"](15,0,null,null,0,"i",[["class","fa fa-trash text-danger"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](17,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](18,null,["Value : ",""]))],function(l,n){l(n,4,0,l(n,5,0,"/headers/edit/",n.context.$implicit.id)),l(n,9,0,n.context.$implicit.downstream),l(n,12,0,n.context.$implicit.upstream)},function(l,n){l(n,3,0,u["\u0275nov"](n,4).target,u["\u0275nov"](n,4).href),l(n,6,0,n.context.$implicit.value),l(n,18,0,n.context.$implicit.value)})}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,15,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,14,"div",[["class","card"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,13,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,y)),u["\u0275did"](5,802816,null,0,c.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](6,0,null,null,9,"div",[["class","col-sm-6 col-lg-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,8,"div",[["class","card bg-primary text-white"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,7,"div",[["class","card-body  text-center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,0,null,null,5,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,11).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](11,671744,null,0,o.p,[o.m,o.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](12,1),(l()(),u["\u0275eld"](13,0,null,null,0,"i",[["class","fa fa-plus fa-2x text-white"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Add new "]))],function(l,n){l(n,5,0,n.component.headers),l(n,11,0,l(n,12,0,"/headers/add"))},function(l,n){l(n,10,0,u["\u0275nov"](n,11).target,u["\u0275nov"](n,11).href)})}var k=u["\u0275ccf"]("app-view",f,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-view",[],null,null,null,C,v)),u["\u0275did"](1,114688,null,0,f,[h],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),w=e("gIcY"),x=(e("BuZO"),e("PG31"),e("6UzD"),e("Ue6e")),R=e("Wu76"),D=function(){function l(l,n,e,u,t,i){this.route=l,this.http=n,this.proxyservice=e,this.hostService=u,this.headerservice=t,this.router=i,this.is_new=!0}return l.prototype.ngOnInit=function(){var l=this;this.edit_enabled=!1,this.sub=this.route.data.subscribe(function(n){return l.setTitle(n.title,n.type)}),this.route.params.subscribe(function(n){l.id=+n.id;var e=+n.host;l.id?l.loadHeaderData():l.loadDefault(e)}),this.proxyservice.getProxies().subscribe(function(n){l.proxy=n})},l.prototype.loadHeaderData=function(){var l=this;this.edit_enabled=!1,this.is_new=!1,this.headerservice.getHeader(this.id).subscribe(function(n){l.header=n,console.log(l.header),l.page_title="Header Details "})},l.prototype.loadDefault=function(l){void 0===l&&(l=null),console.log("default loaded"),this.to_proxy=l,this.edit_enabled=!0,this.header={id:null,header:"",upstream:!1,downstream:!1,value:"",proxy:l}},l.prototype.setTitle=function(l,n){this.page_title=l},l.prototype.isDisabled=function(){return!this.edit_enabled},l.prototype.toggle_edit=function(){this.edit_enabled=!this.edit_enabled,this.page_title=this.edit_enabled?"Edit Header ":"Header Details"},l.prototype.onSubmit=function(){var l=this;console.log(this.header),this.is_new?this.headerservice.addHeader(this.header).subscribe(function(n){l.header=n,l.page_title="Edit header",l.router.navigate(["/headers/edit/"+n.id+"/"])}):this.headerservice.updateHeader(this.header,this.header.id).subscribe(function(n){l.header=n,l.page_title="Edit Header"})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),I=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),u["\u0275did"](1,147456,null,0,w.l,[u.ElementRef,u.Renderer2,[2,w.m]],{value:[0,"value"]},null),u["\u0275did"](2,147456,null,0,w.r,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,2,0,n.context.$implicit.id)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function H(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.toggle_edit()&&u),u},null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-ban"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Edit"]))],null,null)}function V(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](1,671744,null,0,o.p,[o.m,o.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](2,2),(l()(),u["\u0275ted"](-1,null,[" Go to proxy"]))],function(l,n){l(n,1,0,l(n,2,0,"/proxy/edit/",n.component.header.proxy))},function(l,n){l(n,0,0,u["\u0275nov"](n,1).target,u["\u0275nov"](n,1).href)})}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,61,"form",[["action",""],["method","post"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0,i=l.component;return"submit"===n&&(t=!1!==u["\u0275nov"](l,2).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.onSubmit()&&t),t},null,null)),u["\u0275did"](1,16384,null,0,w.p,[],null,null),u["\u0275did"](2,4210688,[["hostForm",4]],0,w.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,w.c,null,[w.j]),u["\u0275did"](4,16384,null,0,w.i,[[4,w.c]],null,null),(l()(),u["\u0275eld"](5,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Header"])),(l()(),u["\u0275eld"](8,0,null,null,5,"input",[["class","form-control"],["id","header"],["name","header"],["placeholder","Header name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,i=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,9)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,9).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,9)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,9)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.header.header=e)&&t),t},null,null)),u["\u0275did"](9,16384,null,0,w.d,[u.Renderer2,u.ElementRef,[2,w.a]],null,null),u["\u0275prd"](1024,null,w.f,function(l){return[l]},[w.d]),u["\u0275did"](11,671744,null,0,w.k,[[2,w.c],[8,null],[8,null],[6,w.f]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,w.g,null,[w.k]),u["\u0275did"](13,16384,null,0,w.h,[[4,w.g]],null,null),(l()(),u["\u0275eld"](14,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,1,"label",[["for","proxy_from"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Value"])),(l()(),u["\u0275eld"](17,0,null,null,5,"input",[["class","form-control"],["id","value"],["name","value"],["placeholder","header value"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,i=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,18)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,18).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,18)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,18)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.header.value=e)&&t),t},null,null)),u["\u0275did"](18,16384,null,0,w.d,[u.Renderer2,u.ElementRef,[2,w.a]],null,null),u["\u0275prd"](1024,null,w.f,function(l){return[l]},[w.d]),u["\u0275did"](20,671744,null,0,w.k,[[2,w.c],[8,null],[8,null],[6,w.f]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,w.g,null,[w.k]),u["\u0275did"](22,16384,null,0,w.h,[[4,w.g]],null,null),(l()(),u["\u0275eld"](23,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](24,0,null,null,8,"div",[["class","form-check form-check-inline mr-1"]],null,null,null,null,null)),(l()(),u["\u0275eld"](25,0,null,null,5,"input",[["class","form-check-input"],["id","upstream"],["name","upstream"],["type","checkbox"],["value","false"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,i=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,26).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,26).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.header.upstream=e)&&t),t},null,null)),u["\u0275did"](26,16384,null,0,w.b,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,w.f,function(l){return[l]},[w.b]),u["\u0275did"](28,671744,null,0,w.k,[[2,w.c],[8,null],[8,null],[6,w.f]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,w.g,null,[w.k]),u["\u0275did"](30,16384,null,0,w.h,[[4,w.g]],null,null),(l()(),u["\u0275eld"](31,0,null,null,1,"label",[["class","form-check-label"],["for","upstream"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Upstream"])),(l()(),u["\u0275eld"](33,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](34,0,null,null,8,"div",[["class","form-check form-check-inline mr-1"]],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,5,"input",[["class","form-check-input"],["id","downstream"],["name","downstream"],["type","checkbox"],["value","false"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,i=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,36).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,36).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.header.downstream=e)&&t),t},null,null)),u["\u0275did"](36,16384,null,0,w.b,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,w.f,function(l){return[l]},[w.b]),u["\u0275did"](38,671744,null,0,w.k,[[2,w.c],[8,null],[8,null],[6,w.f]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,w.g,null,[w.k]),u["\u0275did"](40,16384,null,0,w.h,[[4,w.g]],null,null),(l()(),u["\u0275eld"](41,0,null,null,1,"label",[["class","form-check-label"],["for","downstream"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Downstream"])),(l()(),u["\u0275eld"](43,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](44,0,null,null,1,"label",[["for","single_host"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Proxy"])),(l()(),u["\u0275eld"](46,0,null,null,7,"select",[["class","form-control"],["id","proxy"],["name","proxy"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,i=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,47).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,47).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.header.proxy=e)&&t),t},null,null)),u["\u0275did"](47,16384,null,0,w.m,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,w.f,function(l){return[l]},[w.m]),u["\u0275did"](49,671744,null,0,w.k,[[2,w.c],[8,null],[8,null],[6,w.f]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,w.g,null,[w.k]),u["\u0275did"](51,16384,null,0,w.h,[[4,w.g]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,_)),u["\u0275did"](53,802816,null,0,c.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](54,0,null,null,7,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),u["\u0275eld"](55,0,null,null,2,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),u["\u0275eld"](56,0,null,null,0,"i",[["class","fa fa-dot-circle-o"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Submit"])),(l()(),u["\u0275and"](16777216,null,null,1,null,H)),u["\u0275did"](59,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,V)),u["\u0275did"](61,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,11,0,"header",e.isDisabled(),e.header.header),l(n,20,0,"value",e.isDisabled(),e.header.value),l(n,28,0,"upstream",e.isDisabled(),e.header.upstream),l(n,38,0,"downstream",e.isDisabled(),e.header.downstream),l(n,49,0,"proxy",e.isDisabled(),e.header.proxy),l(n,53,0,e.proxy),l(n,59,0,!e.is_new),l(n,61,0,e.header.proxy)},function(l,n){var e=n.component;l(n,0,0,u["\u0275nov"](n,4).ngClassUntouched,u["\u0275nov"](n,4).ngClassTouched,u["\u0275nov"](n,4).ngClassPristine,u["\u0275nov"](n,4).ngClassDirty,u["\u0275nov"](n,4).ngClassValid,u["\u0275nov"](n,4).ngClassInvalid,u["\u0275nov"](n,4).ngClassPending),l(n,8,0,u["\u0275nov"](n,13).ngClassUntouched,u["\u0275nov"](n,13).ngClassTouched,u["\u0275nov"](n,13).ngClassPristine,u["\u0275nov"](n,13).ngClassDirty,u["\u0275nov"](n,13).ngClassValid,u["\u0275nov"](n,13).ngClassInvalid,u["\u0275nov"](n,13).ngClassPending),l(n,17,0,u["\u0275nov"](n,22).ngClassUntouched,u["\u0275nov"](n,22).ngClassTouched,u["\u0275nov"](n,22).ngClassPristine,u["\u0275nov"](n,22).ngClassDirty,u["\u0275nov"](n,22).ngClassValid,u["\u0275nov"](n,22).ngClassInvalid,u["\u0275nov"](n,22).ngClassPending),l(n,25,0,u["\u0275nov"](n,30).ngClassUntouched,u["\u0275nov"](n,30).ngClassTouched,u["\u0275nov"](n,30).ngClassPristine,u["\u0275nov"](n,30).ngClassDirty,u["\u0275nov"](n,30).ngClassValid,u["\u0275nov"](n,30).ngClassInvalid,u["\u0275nov"](n,30).ngClassPending),l(n,35,0,u["\u0275nov"](n,40).ngClassUntouched,u["\u0275nov"](n,40).ngClassTouched,u["\u0275nov"](n,40).ngClassPristine,u["\u0275nov"](n,40).ngClassDirty,u["\u0275nov"](n,40).ngClassValid,u["\u0275nov"](n,40).ngClassInvalid,u["\u0275nov"](n,40).ngClassPending),l(n,46,0,u["\u0275nov"](n,51).ngClassUntouched,u["\u0275nov"](n,51).ngClassTouched,u["\u0275nov"](n,51).ngClassPristine,u["\u0275nov"](n,51).ngClassDirty,u["\u0275nov"](n,51).ngClassValid,u["\u0275nov"](n,51).ngClassInvalid,u["\u0275nov"](n,51).ngClassPending),l(n,55,0,e.isDisabled())})}function S(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,11,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,9,"div",[],null,null,null,null,null)),u["\u0275did"](3,278528,null,0,c.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{ngClass:[0,"ngClass"]},null),u["\u0275pod"](4,{"col-sm-6":0,"col-sm-12":1}),(l()(),u["\u0275eld"](5,0,null,null,6,"div",[["class","card"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](8,null,["",""])),(l()(),u["\u0275eld"](9,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,T)),u["\u0275did"](11,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,l(n,4,0,!e.is_new,e.is_new)),l(n,11,0,e.header)},function(l,n){l(n,8,0,n.component.page_title)})}var M=u["\u0275ccf"]("app-edit",D,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-edit",[],null,null,null,S,I)),u["\u0275did"](1,245760,null,0,D,[o.a,p.c,x.a,R.a,h,o.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),P=e("WmtN"),L=e("S7LP"),F=e("6aHO"),N=e("dArN"),E={title:"Proxies"},O={title:"View"},U={title:"Proxy Details",type:"edit"},K={title:"Add",type:"add"},$=function(){},j=e("aZVl"),A=e("qina"),q=e("OsAV");e.d(n,"HeadersModuleNgFactory",function(){return z});var z=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,s,k,M,P.a]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[u.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,w.q,w.q,[]),u["\u0275mpd"](4608,L.a,L.a,[]),u["\u0275mpd"](4608,F.a,F.a,[u.ComponentFactoryResolver,u.NgZone,u.Injector,L.a,u.ApplicationRef]),u["\u0275mpd"](4608,N.a,N.a,[]),u["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),u["\u0275mpd"](1073742336,o.q,o.q,[[2,o.w],[2,o.m]]),u["\u0275mpd"](1073742336,$,$,[]),u["\u0275mpd"](1073742336,w.n,w.n,[]),u["\u0275mpd"](1073742336,w.e,w.e,[]),u["\u0275mpd"](1073742336,j.a,j.a,[]),u["\u0275mpd"](1073742336,A.a,A.a,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,o.k,function(){return[[{path:"",component:a,data:E,children:[{path:"view",component:f,data:O},{path:"edit/:id",component:D,data:U},{path:"add",component:D,data:K}]}]]},[]),u["\u0275mpd"](256,q.a,{autoClose:!0},[])])})}}]);