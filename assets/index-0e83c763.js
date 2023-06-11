import{R as h,r as c,a as Ue}from"./index-c0290abd.js";import{_ as M}from"./extends-98964cd2.js";import{j as I}from"./jsx-runtime-5fc188ad.js";var x="colors",w="sizes",p="space",Ee={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ge=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,D=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Ge))(t);return o in e?e[o]:e[o]=r(t,...n)}},N=Symbol.for("sxs.internal"),ie=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ce=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Ye}=Object.prototype,ne=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),qe=/\s+(?![^()]*\))/,L=e=>t=>e(...typeof t=="string"?String(t).split(qe):[t]),de={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:L((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:L((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:L((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:L((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:L((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:L((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},re=/([\d.]+)([^]*)/,Je=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,Ke=(e,t)=>e in Xe&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${ne(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${ne(e)}:${n}fit-content`)+i):String(t),Xe={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},j=e=>e?e+"-":"",Ce=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,a)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?j(t)+(a.includes("$")?"":j(r))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),Qe=/\s*,\s*(?![^()]*\))/,et=Object.prototype.toString,F=(e,t,r,n,o)=>{let i,l,a;const s=(d,g,f)=>{let u,m;const b=v=>{for(u in v){const S=u.charCodeAt(0)===64,C=S&&Array.isArray(v[u])?v[u]:[v[u]];for(m of C){const E=/[A-Z]/.test($=u)?$:$.replace(/-[^]/g,R=>R[1].toUpperCase()),H=typeof m=="object"&&m&&m.toString===et&&(!n.utils[E]||!g.length);if(E in n.utils&&!H){const R=n.utils[E];if(R!==l){l=R,b(R(m)),l=null;continue}}else if(E in de){const R=de[E];if(R!==a){a=R,b(R(m)),a=null;continue}}if(S&&(y=u.slice(1)in n.media?"@media "+n.media[u.slice(1)]:u,u=y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,z,P,O,B,A)=>{const W=re.test(z),G=.0625*(W?-1:1),[Y,le]=W?[O,z]:[z,O];return"("+(P[0]==="="?"":P[0]===">"===W?"max-":"min-")+Y+":"+(P[0]!=="="&&P.length===1?le.replace(re,(Ze,ee,te)=>Number(ee)+G*(P===">"?1:-1)+te):le)+(B?") and ("+(B[0]===">"?"min-":"max-")+Y+":"+(B.length===1?A.replace(re,(Ze,ee,te)=>Number(ee)+G*(B===">"?-1:1)+te):A):"")+")"})),H){const R=S?f.concat(u):[...f],z=S?[...g]:Je(g,u.split(Qe));i!==void 0&&o(ue(...i)),i=void 0,s(m,z,R)}else i===void 0&&(i=[[],g,f]),u=S||u.charCodeAt(0)!==36?u:`--${j(n.prefix)}${u.slice(1).replace(/\$/g,"-")}`,m=H?m:typeof m=="number"?m&&E in tt?String(m)+"px":String(m):Ce(Ke(E,m??""),n.prefix,n.themeMap[E]),i[0].push(`${S?`${u} `:`${ne(u)}:`}${m}`)}}var y,$};b(d),i!==void 0&&o(ue(...i)),i=void 0};s(e,t,r)},ue=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,tt={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},fe=e=>String.fromCharCode(e+(e>25?39:97)),T=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=fe(r%52)+n;return fe(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),Z=["themed","global","styled","onevar","resonevar","allvar","inline"],rt=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},nt=e=>{let t;const r=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===i)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},n=()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const d in a)delete a[d]}const o=Object(e).styleSheets||[];for(const a of o)if(rt(a)){for(let s=0,d=a.cssRules;d[s];++s){const g=Object(d[s]);if(g.type!==1)continue;const f=Object(d[s+1]);if(f.type!==4)continue;++s;const{cssText:u}=g;if(!u.startsWith("--sxs"))continue;const m=u.slice(14,-3).trim().split(/\s+/),b=Z[m[0]];b&&(t||(t={sheet:a,reset:n,rules:{},toString:r}),t.rules[b]={group:f,index:s,cache:new Set(m)})}if(t)break}if(!t){const a=(s,d)=>({type:d,cssRules:[],insertRule(g,f){this.cssRules.splice(f,0,a(g,{import:3,undefined:1}[(g.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,g=>g.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let a=Z.length-1;a>=0;--a){const s=Z[a];if(!l[s]){const d=Z[a+1],g=l[d]?l[d].index:i.cssRules.length;i.insertRule("@media{}",g),i.insertRule(`--sxs{--sxs:${a}}`,g),l[s]={group:i.cssRules[g+1],index:g,cache:new Set([a])}}ot(l[s])}};return n(),t},ot=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},V=Symbol(),it=D(),pe=(e,t)=>it(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[N]){n.type==null&&(n.type=o[N].type);for(const i of o[N].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(at(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),st(e,n,t)}),at=({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${j(o.prefix)}c-${T(n)}`,l=[],a=[],s=Object.create(null),d=[];for(const u in r)s[u]=String(r[u]);if(typeof e=="object"&&e)for(const u in e){g=s,f=u,Ye.call(g,f)||(s[u]="undefined");const m=e[u];for(const b in m){const v={[u]:String(b)};String(b)==="undefined"&&d.push(u);const y=m[b],$=[v,y,!ce(y)];l.push($)}}var g,f;if(typeof t=="object"&&t)for(const u of t){let{css:m,...b}=u;m=typeof m=="object"&&m||{};for(const y in b)b[y]=String(b[y]);const v=[b,m,!ce(m)];a.push(v)}return[i,n,l,a,s,d]},st=(e,t,r)=>{const[n,o,i,l]=lt(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(f=>{function u(){for(let m=0;m<u[V].length;m++){const[b,v]=u[V][m];f.rules[b].apply(v)}return u[V]=[],null}return u[V]=[],u.rules={},Z.forEach(m=>u.rules[m]={apply:b=>u[V].push([m,b])}),u})(r):null,s=(a||r).rules,d=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,g=f=>{f=typeof f=="object"&&f||ct;const{css:u,...m}=f,b={};for(const $ in i)if(delete m[$],$ in f){let S=f[$];typeof S=="object"&&S?b[$]={"@initial":i[$],...S}:(S=String(S),b[$]=S!=="undefined"||l.has($)?S:i[$])}else b[$]=i[$];const v=new Set([...o]);for(const[$,S,C,E]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),F(S,[`.${$}`],[],e,z=>{s.styled.apply(z)}));const H=me(C,b,e.media),R=me(E,b,e.media,!0);for(const z of H)if(z!==void 0)for(const[P,O,B]of z){const A=`${$}-${T(O)}-${P}`;v.add(A);const W=(B?r.rules.resonevar:r.rules.onevar).cache,G=B?s.resonevar:s.onevar;W.has(A)||(W.add(A),F(O,[`.${A}`],[],e,Y=>{G.apply(Y)}))}for(const z of R)if(z!==void 0)for(const[P,O]of z){const B=`${$}-${T(O)}-${P}`;v.add(B),r.rules.allvar.cache.has(B)||(r.rules.allvar.cache.add(B),F(O,[`.${B}`],[],e,A=>{s.allvar.apply(A)}))}}if(typeof u=="object"&&u){const $=`${n}-i${T(u)}-css`;v.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),F(u,[`.${$}`],[],e,S=>{s.inline.apply(S)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&v.add($);const y=m.className=[...v].join(" ");return{type:t.type,className:y,selector:d,props:m,toString:()=>y,deferredInjector:a}};return ie(g,{className:n,selector:d,[N]:t,toString:()=>(r.rules.styled.cache.has(n)||g(),n)})},lt=e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),r.push(i),o.push(...a);for(const s in l){const d=l[s];(n[s]===void 0||d!=="undefined"||a.includes(d))&&(n[s]=d)}}return[t,r,n,new Set(o)]},me=(e,t,r,n)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,d=0,g=!1;for(s in i){const f=i[s];let u=t[s];if(u!==f){if(typeof u!="object"||!u)continue e;{let m,b,v=0;for(const y in u){if(f===String(u[y])){if(y!=="@initial"){const $=y.slice(1);(b=b||[]).push($ in r?r[$]:y.replace(/^@media ?/,"")),g=!0}d+=v,m=!0}++v}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!m)continue e}}}(o[d]=o[d]||[]).push([n?"cv":`${s}-${i[s]}`,l,g])}return o},ct={},dt=D(),ut=(e,t)=>dt(e,()=>(...r)=>{const n=()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=T(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}F(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return ie(n,{toString:n})}),ft=D(),pt=(e,t)=>ft(e,()=>r=>{const n=`${j(e.prefix)}k-${T(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];F(r,[],[],e,a=>i.push(a));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n};return ie(o,{get name(){return o()},toString:o})}),mt=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+j(this.prefix)+j(this.scale)+this.token}toString(){return this.computedValue}},gt=D(),ht=(e,t)=>gt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${j(e.prefix)}t-${T(n)}`}`,i={},l=[];for(const s in n){i[s]={};for(const d in n[s]){const g=`--${j(e.prefix)}${s}-${d}`,f=Ce(String(n[s][d]),e.prefix,s);i[s][d]=new mt(d,f,s,e.prefix),l.push(`${g}:${f}`)}}const a=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const s=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(s)}return r};return{...i,get className(){return a()},selector:o,toString:a}}),bt=D(),$t=D(),xt=e=>{const t=(r=>{let n=!1;const o=bt(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,d=typeof i.theme=="object"&&i.theme||{},g={prefix:l,media:a,theme:d,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...Ee},utils:typeof i.utils=="object"&&i.utils||{}},f=nt(s),u={css:pe(g,f),globalCss:ut(g,f),keyframes:pt(g,f),createTheme:ht(g,f),reset(){f.reset(),u.theme.toString()},theme:{},sheet:f,config:g,prefix:l,getCssText:f.toString,toString:f.toString};return String(u.theme=u.createTheme(d)),u});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>$t(r,()=>{const o=pe(r,n);return(...i)=>{const l=o(...i),a=l[N].type,s=h.forwardRef((d,g)=>{const f=d&&d.as||a,{props:u,deferredInjector:m}=l(d);return delete u.as,u.ref=g,m?h.createElement(h.Fragment,null,h.createElement(f,u),h.createElement(m,null)):h.createElement(f,u)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[N]=l[N],s}}))(t),t};function we(e,t=[]){let r=[];function n(i,l){const a=c.createContext(l),s=r.length;r=[...r,l];function d(f){const{scope:u,children:m,...b}=f,v=(u==null?void 0:u[e][s])||a,y=c.useMemo(()=>b,Object.values(b));return c.createElement(v.Provider,{value:y},m)}function g(f,u){const m=(u==null?void 0:u[e][s])||a,b=c.useContext(m);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,g]}const o=()=>{const i=r.map(l=>c.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return c.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[n,yt(o,...t)]}function yt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=n.reduce((a,{useScope:s,scopeName:d})=>{const f=s(i)[`__scope${d}`];return{...a,...f}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function ae(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}const J=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};function vt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Re(...e){return t=>e.forEach(r=>vt(r,t))}function Ie(...e){return c.useCallback(Re(...e),e)}const ze=c.forwardRef((e,t)=>{const{children:r,...n}=e,o=c.Children.toArray(r),i=o.find(kt);if(i){const l=i.props.children,a=o.map(s=>s===i?c.Children.count(l)>1?c.Children.only(null):c.isValidElement(l)?l.props.children:null:s);return c.createElement(oe,M({},n,{ref:t}),c.isValidElement(l)?c.cloneElement(l,void 0,a):null)}return c.createElement(oe,M({},n,{ref:t}),r)});ze.displayName="Slot";const oe=c.forwardRef((e,t)=>{const{children:r,...n}=e;return c.isValidElement(r)?c.cloneElement(r,{...Et(n,r.props),ref:t?Re(t,r.ref):r.ref}):c.Children.count(r)>1?c.Children.only(null):null});oe.displayName="SlotClone";const St=({children:e})=>c.createElement(c.Fragment,null,e);function kt(e){return c.isValidElement(e)&&e.type===St}function Et(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...a)=>{i(...a),o(...a)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}const Ct=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],U=Ct.reduce((e,t)=>{const r=c.forwardRef((n,o)=>{const{asChild:i,...l}=n,a=i?ze:t;return c.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),c.createElement(a,M({},l,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Be="Avatar",[wt,Kr]=we(Be),[Rt,Pe]=wt(Be),It=c.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=c.useState("idle");return c.createElement(Rt,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},c.createElement(U.span,M({},n,{ref:t})))}),zt="AvatarImage",Bt=c.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...i}=e,l=Pe(zt,r),a=Mt(n),s=ae(d=>{o(d),l.onImageLoadingStatusChange(d)});return J(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?c.createElement(U.img,M({},i,{ref:t,src:n})):null}),Pt="AvatarFallback",At=c.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=Pe(Pt,r),[l,a]=c.useState(n===void 0);return c.useEffect(()=>{if(n!==void 0){const s=window.setTimeout(()=>a(!0),n);return()=>window.clearTimeout(s)}},[n]),l&&i.imageLoadingStatus!=="loaded"?c.createElement(U.span,M({},o,{ref:t})):null});function Mt(e){const[t,r]=c.useState("idle");return c.useEffect(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=l=>()=>{n&&r(l)};return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}const jt=It,Ot=Bt,Nt=At,Tt=c.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var _t=Object.defineProperty,K=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,ge=(e,t,r)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))Ae.call(t,r)&&ge(e,r,t[r]);if(K)for(var r of K(t))Me.call(t,r)&&ge(e,r,t[r]);return e},be=(e,t)=>{var r={};for(var n in e)Ae.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&K)for(var n of K(e))t.indexOf(n)<0&&Me.call(e,n)&&(r[n]=e[n]);return r};const se=c.forwardRef((e,t)=>{const r=e,{alt:n,color:o,size:i,weight:l,mirrored:a,children:s,weights:d}=r,g=be(r,["alt","color","size","weight","mirrored","children","weights"]),f=c.useContext(Tt),{color:u="currentColor",size:m,weight:b="regular",mirrored:v=!1}=f,y=be(f,["color","size","weight","mirrored"]);return h.createElement("svg",he(he({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i??m,height:i??m,fill:o??u,viewBox:"0 0 256 256",transform:a||v?"scale(-1, 1)":void 0},y),g),!!n&&h.createElement("title",null,n),s,d.get(l??b))});se.displayName="IconBase";var Wt=Object.defineProperty,Lt=Object.defineProperties,Ft=Object.getOwnPropertyDescriptors,$e=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,xe=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Vt=(e,t)=>{for(var r in t||(t={}))Dt.call(t,r)&&xe(e,r,t[r]);if($e)for(var r of $e(t))Ht.call(t,r)&&xe(e,r,t[r]);return e},Zt=(e,t)=>Lt(e,Ft(t));const Ut=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),h.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),je=c.forwardRef((e,t)=>h.createElement(se,Zt(Vt({ref:t},e),{weights:Ut})));je.displayName="Check";var Gt=Object.defineProperty,Yt=Object.defineProperties,qt=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,ve=(e,t,r)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Xt=(e,t)=>{for(var r in t||(t={}))Jt.call(t,r)&&ve(e,r,t[r]);if(ye)for(var r of ye(t))Kt.call(t,r)&&ve(e,r,t[r]);return e},Qt=(e,t)=>Yt(e,qt(t));const er=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),h.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]),Oe=c.forwardRef((e,t)=>h.createElement(se,Qt(Xt({ref:t},e),{weights:er})));Oe.displayName="User";function Se(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function tr({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=rr({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,a=ae(r),s=c.useCallback(d=>{if(i){const f=typeof d=="function"?d(e):d;f!==e&&a(f)}else o(d)},[i,e,o,a]);return[l,s]}function rr({defaultProp:e,onChange:t}){const r=c.useState(e),[n]=r,o=c.useRef(n),i=ae(t);return c.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}function nr(e){const t=c.useRef({value:e,previous:e});return c.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function or(e){const[t,r]=c.useState(void 0);return J(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,d=Array.isArray(s)?s[0]:s;l=d.inlineSize,a=d.blockSize}else l=e.offsetWidth,a=e.offsetHeight;r({width:l,height:a})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function ir(e,t){return c.useReducer((r,n)=>{const o=t[r][n];return o??r},e)}const Ne=e=>{const{present:t,children:r}=e,n=ar(t),o=typeof r=="function"?r({present:n.isPresent}):c.Children.only(r),i=Ie(n.ref,o.ref);return typeof r=="function"||n.isPresent?c.cloneElement(o,{ref:i}):null};Ne.displayName="Presence";function ar(e){const[t,r]=c.useState(),n=c.useRef({}),o=c.useRef(e),i=c.useRef("none"),l=e?"mounted":"unmounted",[a,s]=ir(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const d=q(n.current);i.current=a==="mounted"?d:"none"},[a]),J(()=>{const d=n.current,g=o.current;if(g!==e){const u=i.current,m=q(d);e?s("MOUNT"):m==="none"||(d==null?void 0:d.display)==="none"?s("UNMOUNT"):s(g&&u!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),J(()=>{if(t){const d=f=>{const m=q(n.current).includes(f.animationName);f.target===t&&m&&Ue.flushSync(()=>s("ANIMATION_END"))},g=f=>{f.target===t&&(i.current=q(n.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:c.useCallback(d=>{d&&(n.current=getComputedStyle(d)),r(d)},[])}}function q(e){return(e==null?void 0:e.animationName)||"none"}const Te="Checkbox",[sr,Xr]=we(Te),[lr,cr]=sr(Te),dr=c.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:d,...g}=e,[f,u]=c.useState(null),m=Ie(t,C=>u(C)),b=c.useRef(!1),v=f?!!f.closest("form"):!0,[y=!1,$]=tr({prop:o,defaultProp:i,onChange:d}),S=c.useRef(y);return c.useEffect(()=>{const C=f==null?void 0:f.form;if(C){const E=()=>$(S.current);return C.addEventListener("reset",E),()=>C.removeEventListener("reset",E)}},[f,$]),c.createElement(lr,{scope:r,state:y,disabled:a},c.createElement(U.button,M({type:"button",role:"checkbox","aria-checked":_(y)?"mixed":y,"aria-required":l,"data-state":_e(y),"data-disabled":a?"":void 0,disabled:a,value:s},g,{ref:m,onKeyDown:Se(e.onKeyDown,C=>{C.key==="Enter"&&C.preventDefault()}),onClick:Se(e.onClick,C=>{$(E=>_(E)?!0:!E),v&&(b.current=C.isPropagationStopped(),b.current||C.stopPropagation())})})),v&&c.createElement(pr,{control:f,bubbles:!b.current,name:n,value:s,checked:y,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),ur="CheckboxIndicator",fr=c.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=cr(ur,r);return c.createElement(Ne,{present:n||_(i.state)||i.state===!0},c.createElement(U.span,M({"data-state":_e(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),pr=e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=c.useRef(null),l=nr(r),a=or(t);return c.useEffect(()=>{const s=i.current,d=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(d,"checked").set;if(l!==r&&f){const u=new Event("click",{bubbles:n});s.indeterminate=_(r),f.call(s,_(r)?!1:r),s.dispatchEvent(u)}},[l,r,n]),c.createElement("input",M({type:"checkbox","aria-hidden":!0,defaultChecked:_(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function _(e){return e==="indeterminate"}function _e(e){return _(e)?"indeterminate":e?"checked":"unchecked"}const mr=dr,gr=fr;var hr=Object.defineProperty,br=Object.defineProperties,$r=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,ke=(e,t,r)=>t in e?hr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&ke(e,r,t[r]);if(X)for(var r of X(t))Le.call(t,r)&&ke(e,r,t[r]);return e},Fe=(e,t)=>br(e,$r(t)),xr=(e,t)=>{var r={};for(var n in e)We.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&X)for(var n of X(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r},yr={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D",test:"#FFF"},vr={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},Sr={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},kr={default:"Roboto, sans-serif",code:"monospace"},Er={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Cr={regular:"400",medium:"500",bold:"700"},wr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:k,css:Qr,globalCss:en,keyframes:De,getCssText:tn,theme:rn,createTheme:nn,config:on}=xt({themeMap:Fe(Q({},Ee),{height:"space",width:"space"}),theme:{colors:yr,fonts:kr,fontSizes:Er,lineHeights:wr,fontWeights:Cr,space:vr,radii:Sr}}),Rr=k("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});Rr.displayName="Box";var He=k("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});He.displayName="Text";var Ir=k("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Ir.displayName="Heading";var zr=k(jt,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),Br=k(Ot,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),Pr=k(Nt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function Ar(e){return I.jsxs(zr,{children:[I.jsx(Br,Q({},e)),I.jsx(Pr,{delayMs:600,children:I.jsx(Oe,{})})]})}Ar.displayName="Avatar";var Mr=k("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});Mr.displayName="Button";var jr=k("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),Or=k("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),Nr=k("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Ve=c.forwardRef((e,t)=>{var r=e,{prefix:n}=r,o=xr(r,["prefix"]);return I.jsxs(jr,{children:[!!n&&I.jsx(Or,{children:n}),I.jsx(Nr,Q({ref:t},o))]})});Ve.displayName="TextInput";var Tr=k("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});Tr.displayName="TextArea";var _r=k(mr,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),Wr=De({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),Lr=De({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Fr=k(gr,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${Wr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${Lr} 200ms ease-out`}});function Dr(e){return I.jsx(_r,Fe(Q({},e),{children:I.jsx(Fr,{asChild:!0,children:I.jsx(je,{weight:"bold"})})}))}Dr.displayName="Checkbox";var Hr=k("div",{}),Vr=k(He,{color:"$gray200",defaultVariants:{size:"xs"}}),Zr=k("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Ur=k("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Gr({size:e,currentStep:t=1}){return I.jsxs(Hr,{children:[I.jsxs(Vr,{children:["Passo ",t," de ",e]}),I.jsx(Zr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>I.jsx(Ur,{active:t>=r},r))})]})}Gr.displayName="MultiStep";Ve.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{Ar as A,Rr as B,Dr as C,Ir as H,Gr as M,se as P,He as T,Tr as a,Ve as b,Mr as c};
//# sourceMappingURL=index-0e83c763.js.map
