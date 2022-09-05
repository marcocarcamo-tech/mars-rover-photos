(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=window,D=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),W=new WeakMap;class st{constructor(t,e,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(D&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=W.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&W.set(e,t))}return t}toString(){return this.cssText}}const lt=r=>new st(typeof r=="string"?r:r+"",void 0,V),K=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new st(e,r,V)},ht=(r,t)=>{D?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},F=D?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return lt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var N;const U=window,q=U.trustedTypes,ct=q?q.emptyScript:"",X=U.reactiveElementPolyfillSupport,j={toAttribute(r,t){switch(t){case Boolean:r=r?ct:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},rt=(r,t)=>t!==r&&(t==t||r==r),T={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:rt};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=T){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||T}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(F(s))}else t!==void 0&&e.push(F(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ht(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=T){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:j).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:j;this._$El=o,this[o]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},X==null||X({ReactiveElement:f}),((N=U.reactiveElementVersions)!==null&&N!==void 0?N:U.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const I=window,_=I.trustedTypes,Z=_?_.createPolicy("lit-html",{createHTML:r=>r}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,ot="?"+v,dt=`<${ot}>`,A=document,S=(r="")=>A.createComment(r),x=r=>r===null||typeof r!="object"&&typeof r!="function",nt=Array.isArray,ut=r=>nt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,Y=/>/g,y=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,Q=/"/g,at=/^(?:script|style|textarea|title)$/i,pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),O=pt(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),tt=new WeakMap,mt=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new R(t.insertBefore(S(),c),c,void 0,e!=null?e:{})}return n._$AI(r),n},g=A.createTreeWalker(A,129,null,!1),vt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=C;for(let a=0;a<e;a++){const l=r[a];let m,h,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===C?h[1]==="!--"?n=J:h[1]!==void 0?n=Y:h[2]!==void 0?(at.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=y):h[3]!==void 0&&(n=y):n===y?h[0]===">"?(n=s!=null?s:C,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,m=h[1],n=h[3]===void 0?y:h[3]==='"'?Q:G):n===Q||n===G?n=y:n===J||n===Y?n=C:(n=y,s=void 0);const P=n===y&&r[a+1].startsWith("/>")?" ":"";o+=n===C?l+dt:d>=0?(i.push(m),l.slice(0,d)+"$lit$"+l.slice(d)+v+P):l+v+(d===-2?(i.push(void 0),a):P)}const c=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Z!==void 0?Z.createHTML(c):c,i]};class w{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[l,m]=vt(t,e);if(this.el=w.createElement(l,i),g.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=g.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(v)){const p=m[n++];if(h.push(d),p!==void 0){const P=s.getAttribute(p.toLowerCase()+"$lit$").split(v),k=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:k[2],strings:P,ctor:k[1]==="."?yt:k[1]==="?"?gt:k[1]==="@"?_t:M})}else a.push({type:6,index:o})}for(const d of h)s.removeAttribute(d)}if(at.test(s.tagName)){const h=s.textContent.split(v),d=h.length-1;if(d>0){s.textContent=_?_.emptyScript:"";for(let p=0;p<d;p++)s.append(h[p],S()),g.nextNode(),a.push({type:2,index:++o});s.append(h[d],S())}}}else if(s.nodeType===8)if(s.data===ot)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(v,h+1))!==-1;)a.push({type:7,index:o}),h+=v.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function b(r,t,e=r,i){var s,o,n,c;if(t===E)return t;let a=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const l=x(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,i)),i!==void 0?((n=(c=e)._$Cl)!==null&&n!==void 0?n:c._$Cl=[])[i]=a:e._$Cu=a),a!==void 0&&(t=b(r,a._$AS(r,t.values),a,i)),t}class $t{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);g.currentNode=o;let n=g.nextNode(),c=0,a=0,l=s[0];for(;l!==void 0;){if(c===l.index){let m;l.type===2?m=new R(n,n.nextSibling,this,t):l.type===1?m=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(m=new At(n,this,t)),this.v.push(m),l=s[++a]}c!==(l==null?void 0:l.index)&&(n=g.nextNode(),c++)}return o}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):ut(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=w.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{const n=new $t(o,this),c=n.p(this.options);n.m(i),this.k(c),this._$AH=n}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new w(t)),e}O(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new R(this.S(S()),this.S(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class M{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=b(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const c=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=b(this,c[i+a],e,a),l===E&&(l=this._$AH[a]),n||(n=!x(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}n&&!s&&this.P(t)}P(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class yt extends M{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===u?void 0:t}}const ft=_?_.emptyScript:"";class gt extends M{constructor(){super(...arguments),this.type=4}P(t){t&&t!==u?this.element.setAttribute(this.name,ft):this.element.removeAttribute(this.name)}}class _t extends M{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=b(this,t,e,0))!==null&&i!==void 0?i:u)===E)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class At{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const et=I.litHtmlPolyfillSupport;et==null||et(w,R),((L=I.litHtmlVersions)!==null&&L!==void 0?L:I.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z,B;class $ extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return E}}$.finalized=!0,$._$litElement$=!0,(z=globalThis.litElementHydrateSupport)===null||z===void 0||z.call(globalThis,{LitElement:$});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:$});((B=globalThis.litElementVersions)!==null&&B!==void 0?B:globalThis.litElementVersions=[]).push("3.2.2");class Et extends ${static get properties(){return{rovers:{type:Array},currentRover:{type:Object}}}static get styles(){return K`
    :host {
        color: #E6D5B8;
        display: flex;
        justify-content: center;
        height: 300px
    }

    input{
        width: 240px;
        height: 130px;
        object-fit: cover;
        margin-bottom: 6px;
    }
    #curiosity:hover, #opportunity:hover, #spirit:hover{
        width: 255px;
        height: 145px;
    }
    div{
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px 10px;
    }
    
  `}constructor(){super(),this.rovers=[{name:"curiosity",cameras:[{name:"Front Hazard Avoidance Camera",key:"fhaz"},{name:"Rear Hazard Avoidance Camera",key:"rhaz"},{name:"Mast Camera",key:"mast"},{name:"Chemistry and Camera Complex",key:"chemcam"},{name:"Mars Hands Lens Imager",key:"mahli"},{name:"Mars Descent Imager",key:"mardi"},{name:"Navigation Camera",key:"navcam"}],img:"https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg"},{name:"opportunity",cameras:[{name:"Front Hazard Avoidance Camera",key:"fhaz"},{name:"Rear Hazard Avoidance Camera",key:"rhaz"},{name:"Navigation Camera",key:"navcam"},{name:"Panoramic Camera",key:"pancam"},{name:"Miniature Thermal Emission Spectrometer (Mini-TES)",key:"minites"}],img:"https://3.bp.blogspot.com/-r0A2uYEyTeI/XNhKhBU93EI/AAAAAAAAXsI/X9tyHDi8CIMEWuxMKQ3wOb7VPILPwIDCACLcBGAs/s1600/800px-Opportunity_in_Endurance_Crater_%2528cropped%2529.jpg"},{name:"spirit",cameras:[{name:"Front Hazard Avoidance Camera",key:"fhaz"},{name:"Rear Hazard Avoidance Camera",key:"rhaz"},{name:"Navigation Camera",key:"navcam"},{name:"Panoramic Camera",key:"pancam"},{name:"Miniature Thermal Emission Spectrometer (Mini-TES)",key:"minites"}],img:"https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/mer_art_simulation_opportunity_endurance.jpg?mtime=1585760211"},this.currentRover={}]}render(){return O`
    <div><input id="curiosity" type="image" src="${this.rovers[0].img}" value="0" @click="${this.setRover}"></input><label>Curiosity</label></div>
    <div><input id="opportunity" type="image" src="${this.rovers[1].img}" value="1" @click="${this.setRover}"></input><label>Opportunity</label></div>
    <div><input id="spirit" type="image" src="${this.rovers[2].img}" value="2" @click="${this.setRover}"></input><label>Spirit</label></div>
    
    `}setRover(t){let e=t.target.getAttribute("value");this.currentRover=this.rovers[parseInt(e)],this.sendRoverCamsInfo()}sendRoverCamsInfo(){let t=this.currentRover;console.log("dispatching"),this.dispatchEvent(new CustomEvent("rover-cams-info",{detail:{currentRoverCamInfo:t},bubbles:!0,composed:!0}))}}customElements.define("rover-selection",Et);class bt extends ${static get properties(){return{url:{type:String},method:{type:String},photos:{type:Array}}}constructor(){super(),this.addEventListener("api-url",t=>{this.url=t.detail.url,this.fetchApi()})}render(){return O`
        <slot></slot>
        `}dispatchArray(t){this.dispatchEvent(new CustomEvent("photos-array",{detail:{photosArray:t},bubbles:!0,composed:!0}))}fetchApi(){return new Promise((t,e)=>{fetch(this.url).then(i=>{i.status==200?t(i.json()):e(i)})}).then(t=>{const e=t.photos;let i=[];e.forEach(s=>{let o=s.img_src;i.push(o)}),this.dispatchArray(i)}).catch(t=>console.error(t))}}customElements.define("fetch-api",bt);class Ct extends ${static get properties(){return{url:{type:String},date:{type:String},camera:{type:String},data:{type:String},roverCamsInfo:{type:Object}}}static get styles(){return K`
    :host {
      color: #E6D5B8;
      
      
    }
    form{
      display: flex;
      justify-content: center;
    }
    div{
      width: 15%;
      display: flex;
      flex-direction: column;
      margin: 16px 16px 16px 0;
    }
    input, select{
      margin-bottom: 16px;
      height: 25px;
    }
    
    label{
      margin-bottom: 6px;
    }
    button{
      background-color: #E45826;
      width: 10%;
      height: 40px;
      margin: auto 0; 
      color: #1B1A17;
      font-weight: 500;
    }
    button:hover {
      background-color: #F0A500;
      cursor: pointer;
    }
  `}constructor(){super(),this.data="",this.addEventListener("rover-cams-info",t=>{this.clearCameras(),console.log("recieving"),this.roverCamsInfo=t.detail.currentRoverCamInfo,console.log(this.roverCamsInfo),this.setRenderedCams()})}render(){return O`
    <h1>Look for a photo from a Mars Rover!</h1>
    <p>Please select a Rover</p>
    <slot></slot> 
    <form>
      <div>
        <label for="date">Photo Earth Date</label>
        <input id="date" type="date">
      </div>

      <div>
          <label for="camera">Camera</label>
          <select id="camera"></select>
      </div>
       
        
        <button type="button" @click=${this.sendURL}>Search</button>
    </form>
    <img src=${this.url}>
    
    `}getInput(){let t=this.renderRoot.getElementById("date").value,e=this.renderRoot.getElementById("camera").value;this.date=t,this.camera=e}setURL(){this.getInput();let t=`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.roverCamsInfo.name}/photos?earth_date=`+this.date+"&camera="+this.camera+"&api_key=DEMO_KEY";return console.log(t),t}sendURL(){let t=this.setURL();this.dispatchEvent(new CustomEvent("api-url",{detail:{url:t},bubbles:!0,composed:!0}))}setRenderedCams(){let t=this.roverCamsInfo.cameras,e=this.renderRoot.getElementById("camera");t.forEach(i=>{let s=i.key,o=i.name,n=document.createElement("option");n.setAttribute("id",s),n.setAttribute("value",s),n.innerHTML=o,e.appendChild(n)})}clearCameras(){let t=this.renderRoot.getElementById("camera");t.innerHTML=""}}customElements.define("input-screen",Ct);class St extends ${static get properties(){return{photosArray:{type:Array}}}static get styles(){return K`
    :host {
      display: block;
      color: #E6D5B8;
      width: 80%;
      margin: 0 auto;
      text-align: center;
      
    }

    img{
        display: block;
        width:600px;
        object-fit: cover;
        padding-bottom: 15px;
        margin: 0 auto;
    }
  `}constructor(){super(),this.addEventListener("photos-array",t=>{console.log("I've received array"),console.log(t),this.photosArray=t.detail.photosArray,console.log(this.photosArray),this.showImages(this.photosArray)})}render(){return O`
    <slot></slot>
    <div id="photos"></div>
    `}showImages(t){this.clearPhotos();let e=this.renderRoot.getElementById("photos");t.forEach(i=>{let s=document.createElement("img");s.setAttribute("src",i),e.appendChild(s)})}clearPhotos(){let t=this.renderRoot.getElementById("photos");t.innerHTML=""}}customElements.define("photo-container",St);
