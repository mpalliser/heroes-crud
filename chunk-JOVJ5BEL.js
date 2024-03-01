import{G as Y,H as Vt,I as Nt,J,K as Gt,L as zt,M as Lt,P as qt,Q as Ht,R as Qt,a as wt,b as S,d as At,e as Et,h as Mt,j as It,k as Bt,l as Tt,n as Dt,o as Rt,p as Ft,s as jt,u as Ot,v as Pt}from"./chunk-NXJA7ZNR.js";import{A as Ct,F as St,K as X,U as N,V as G,X as T,Y as z,Z as L,f as U,h as kt,l as xt,z as yt}from"./chunk-RTD2AXDZ.js";import{c as gt,d as Z,f as V,g as W,h as K}from"./chunk-IX6G3U3V.js";import{$ as q,Bb as p,Cb as ft,Db as k,Hb as _t,Jb as H,Kb as Q,Lb as $,Nb as l,Pb as M,Qa as rt,Rb as I,S as nt,Va as u,Wa as C,X as it,Y as at,Ya as st,Za as ct,_a as lt,a as B,aa as A,ab as mt,ba as b,ea as E,fa as ot,ga as P,gb as v,hb as dt,hc as ht,i as w,ia as g,ib as f,ja as x,nb as ut,pc as bt,rb as r,sb as s,sc as vt,tb as _,ua as R,xb as y,zb as pt}from"./chunk-CBIIK22F.js";function Xt(a,i){if(a&1){let d=y();r(0,"div",1)(1,"button",2),p("click",function(){g(d);let t=k();return x(t.action())}),l(2),s()()}if(a&2){let d=k();u(2),M(" ",d.data.action," ")}}var Yt=["label"];function Jt(a,i){}var te=Math.pow(2,31)-1,F=class{constructor(i,d){this._overlayRef=d,this._afterDismissed=new w,this._afterOpened=new w,this._onAction=new w,this._dismissedByAction=!1,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,te))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ut=new q("MatSnackBarData"),D=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},ee=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=P({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0});let a=i;return a})(),ne=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=P({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0});let a=i;return a})(),ie=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=P({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0});let a=i;return a})(),Zt=(()=>{let i=class i{constructor(e,t){this.snackBarRef=e,this.data=t}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}};i.\u0275fac=function(t){return new(t||i)(C(F),C(Ut))},i.\u0275cmp=E({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[I],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(r(0,"div",0),l(1),s(),v(2,Xt,3,1,"div",1)),t&2&&(u(),M(" ",n.data.message,`
`),u(),ut(2,n.hasAction?2:-1))},dependencies:[N,ee,ne,ie],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0});let a=i;return a})(),ae={snackBarState:gt("state",[W("void, hidden",V({transform:"scale(0.8)",opacity:0})),W("visible",V({transform:"scale(1)",opacity:1})),K("* => visible",Z("150ms cubic-bezier(0, 0, 0.2, 1)")),K("* => void, * => hidden",Z("75ms cubic-bezier(0.4, 0.0, 1, 1)",V({opacity:0})))])},oe=0,re=(()=>{let i=class i extends Nt{constructor(e,t,n,o,c){super(),this._ngZone=e,this._elementRef=t,this._changeDetectorRef=n,this._platform=o,this.snackBarConfig=c,this._document=b(ht),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new w,this._onExit=new w,this._onEnter=new w,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${oe++}`,this.attachDomPortal=m=>{this._assertNotAttached();let h=this._portalOutlet.attachDomPortal(m);return this._afterPortalAttached(),h},c.politeness==="assertive"&&!c.announcementMessage?this._live="assertive":c.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}onAnimationEnd(e){let{fromState:t,toState:n}=e;if((n==="void"&&t!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){let o=this._onEnter;this._ngZone.run(()=>{o.next(),o.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(c=>e.classList.add(c)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,o="mdc-snackbar__label";n.classList.toggle(o,!n.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let o=t[n],c=o.getAttribute("aria-owns");this._trackedModals.add(o),c?c.indexOf(e)===-1&&o.setAttribute("aria-owns",c+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let n=t.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),t=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&t){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(n=document.activeElement),e.removeAttribute("aria-hidden"),t.appendChild(e),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}};i.\u0275fac=function(t){return new(t||i)(C(lt),C(rt),C(st),C(xt),C(D))},i.\u0275cmp=E({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,n){if(t&1&&(H(J,7),H(Yt,7)),t&2){let o;Q(o=$())&&(n._portalOutlet=o.first),Q(o=$())&&(n._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(t,n){t&1&&ft("@state.done",function(c){return n.onAnimationEnd(c)}),t&2&&pt("@state",n._animationState)},standalone:!0,features:[mt,I],decls:6,vars:3,consts:[[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["label",""],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1,2)(3,"div",3),v(4,Jt,0,0,"ng-template",4),s(),_(5,"div"),s()()),t&2&&(u(5),dt("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[J],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[ae.snackBarState]}});let a=i;return a})();function se(){return new D}var ce=new q("mat-snack-bar-default-options",{providedIn:"root",factory:se}),tt=(()=>{let i=class i{get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(e,t,n,o,c,m){this._overlay=e,this._live=t,this._injector=n,this._breakpointObserver=o,this._parentSnackBar=c,this._defaultConfig=m,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=Zt,this.snackBarContainerComponent=re,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",n){let o=B(B({},this._defaultConfig),n);return o.data={message:e,action:t},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=R.create({parent:n||this._injector,providers:[{provide:D,useValue:t}]}),c=new Y(this.snackBarContainerComponent,t.viewContainerRef,o),m=e.attach(c);return m.instance.snackBarConfig=t,m.instance}_attach(e,t){let n=B(B(B({},new D),this._defaultConfig),t),o=this._createOverlay(n),c=this._attachSnackBarContainer(o,n),m=new F(c,o);if(e instanceof _t){let h=new Vt(e,null,{$implicit:n.data,snackBarRef:m});m.instance=c.attachTemplatePortal(h)}else{let h=this._createInjector(n,m),j=new Y(e,void 0,h),O=c.attachComponentPortal(j);m.instance=O.instance}return this._breakpointObserver.observe(Ct.HandsetPortrait).pipe(nt(o.detachments())).subscribe(h=>{o.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),n.announcementMessage&&c._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(m,n),this._openedSnackBarRef=m,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration))}_createOverlay(e){let t=new zt;t.direction=e.direction;let n=this._overlay.position().global(),o=e.direction==="rtl",c=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,m=!c&&e.horizontalPosition!=="center";return c?n.left("0"):m?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,this._overlay.create(t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return R.create({parent:n||this._injector,providers:[{provide:F,useValue:t},{provide:Ut,useValue:e.data}]})}};i.\u0275fac=function(t){return new(t||i)(A(Lt),A(St),A(R),A(yt),A(i,12),A(ce))},i.\u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var Wt=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=ot({type:i}),i.\u0275inj=at({providers:[tt],imports:[qt,Gt,T,X,Zt,X]});let a=i;return a})();function de(a,i){if(a&1){let d=y();r(0,"button",11),p("click",function(){g(d);let t=k(),n;return x((n=t.formGroup.get("name"))==null?null:n.reset())}),r(1,"mat-icon"),l(2,"close"),s()()}}function ue(a,i){if(a&1){let d=y();r(0,"button",11),p("click",function(){g(d);let t=k(),n;return x((n=t.formGroup.get("race"))==null?null:n.reset())}),r(1,"mat-icon"),l(2,"close"),s()()}}function pe(a,i){if(a&1){let d=y();r(0,"button",11),p("click",function(){g(d);let t=k(),n;return x((n=t.formGroup.get("height"))==null?null:n.reset())}),r(1,"mat-icon"),l(2,"close"),s()()}}function fe(a,i){if(a&1){let d=y();r(0,"button",11),p("click",function(){g(d);let t=k(),n;return x((n=t.formGroup.get("weight"))==null?null:n.reset())}),r(1,"mat-icon"),l(2,"close"),s()()}}function _e(a,i){if(a&1){let d=y();r(0,"button",11),p("click",function(){g(d);let t=k(),n;return x((n=t.formGroup.get("eye-color"))==null?null:n.reset())}),r(1,"mat-icon"),l(2,"close"),s()()}}function he(a,i){if(a&1){let d=y();r(0,"button",11),p("click",function(){g(d);let t=k(),n;return x((n=t.formGroup.get("hair-color"))==null?null:n.reset())}),r(1,"mat-icon"),l(2,"close"),s()()}}var Kt=(()=>{let i=class i{constructor(){this.onCreateEvent=new ct,this.formBuilder=b(Tt)}set heroe(e){this.initForm(e)}submit(){this.onCreateEvent.emit(this.formGroup.value)}initForm(e){this.formGroup=this.formBuilder.group({id:[e?.id??null,[S.required]],name:[e?.name??"",[S.required]],"eye-color":[e?.appearance["eye-color"]??"",[S.required]],"hair-color":[e?.appearance["hair-color"]??"",[S.required]],height:[e?.appearance.height[1]??"",[S.required]],race:[e?.appearance.race??"",[S.required]],weight:[e?.appearance.weight[1]??"",[S.required]]})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=E({type:i,selectors:[["app-form"]],inputs:{heroe:"heroe"},outputs:{onCreateEvent:"onCreateEvent"},standalone:!0,features:[I],decls:34,vars:9,consts:[[1,"columns","is-multiline",3,"formGroup"],[1,"column","is-4"],["matInput","","formControlName","name"],["mat-icon-button","","matSuffix","",3,"click",4,"ngIf"],["matInput","","formControlName","race"],["matInput","","formControlName","height"],["matInput","","formControlName","weight"],["matInput","","formControlName","eye-color"],["matInput","","formControlName","hair-color"],[1,"column","is-12","is-flex","is-justify-content-flex-end"],["mat-raised-button","",3,"disabled","click"],["mat-icon-button","","matSuffix","",3,"click"]],template:function(t,n){if(t&1&&(r(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),l(3,"Nombre"),s(),_(4,"input",2),v(5,de,3,0,"button",3),s(),r(6,"mat-form-field",1)(7,"mat-label"),l(8,"Raza"),s(),_(9,"input",4),v(10,ue,3,0,"button",3),s(),r(11,"mat-form-field",1)(12,"mat-label"),l(13,"Altura (cm)"),s(),_(14,"input",5),v(15,pe,3,0,"button",3),s(),r(16,"mat-form-field",1)(17,"mat-label"),l(18,"Peso (kg)"),s(),_(19,"input",6),v(20,fe,3,0,"button",3),s(),r(21,"mat-form-field",1)(22,"mat-label"),l(23,"Color de ojos"),s(),_(24,"input",7),v(25,_e,3,0,"button",3),s(),r(26,"mat-form-field",1)(27,"mat-label"),l(28,"Color de pelo"),s(),_(29,"input",8),v(30,he,3,0,"button",3),s(),r(31,"div",9)(32,"button",10),p("click",function(){return n.submit()}),l(33),s()()()),t&2){let o,c,m,h,j,O,et;f("formGroup",n.formGroup),u(5),f("ngIf",(o=n.formGroup.get("name"))==null?null:o.value),u(5),f("ngIf",(c=n.formGroup.get("race"))==null?null:c.value),u(5),f("ngIf",(m=n.formGroup.get("height"))==null?null:m.value),u(5),f("ngIf",(h=n.formGroup.get("weight"))==null?null:h.value),u(5),f("ngIf",(j=n.formGroup.get("eye-color"))==null?null:j.value),u(5),f("ngIf",(O=n.formGroup.get("hair-color"))==null?null:O.value),u(2),f("disabled",n.formGroup.invalid),u(),M(" ",(et=n.formGroup.get("id"))!=null&&et.value?"Modificar":"Crear"," ")}},dependencies:[vt,bt,Pt,Ot,jt,Rt,Ft,Dt,Mt,wt,At,Et,It,Bt,T,N,G,L,z],encapsulation:2});let a=i;return a})();var pn=(()=>{let i=class i{constructor(){this.title=b(U).snapshot.title,this.snackBar=b(tt),this.router=b(kt);let e=b(U).snapshot.paramMap.get("id");e&&b(Ht).getById(e).subscribe(t=>{this.heroe=t})}goToHeroes(){this.router.navigate([""])}onCreate(){this.snackBar.open(`Heroe ${this.heroe.id?"actualizado":"creado"} satisfactoriamente`,"Cerrar"),this.goToHeroes()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=E({type:i,selectors:[["app-heroe"]],standalone:!0,features:[I],decls:8,vars:2,consts:[[1,"container"],[1,"title"],["mat-icon-button","",3,"click"],[3,"heroe","onCreateEvent"]],template:function(t,n){t&1&&(r(0,"div",0),_(1,"app-breadcrumbs"),r(2,"h1",1)(3,"button",2),p("click",function(){return n.goToHeroes()}),r(4,"mat-icon"),l(5,"arrow_back"),s()(),l(6),s(),r(7,"app-form",3),p("onCreateEvent",function(){return n.onCreate()}),s()()),t&2&&(u(6),M(" ",n.title," "),u(),f("heroe",n.heroe))},dependencies:[Kt,L,z,T,G,Wt,Qt],encapsulation:2});let a=i;return a})();export{pn as HeroeComponent};