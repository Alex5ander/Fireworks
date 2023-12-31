(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wr="147",bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},go=0,ss=1,_o=2,Ia=1,xo=2,ii=3,Hn=0,Ct=1,tn=2,nn=0,kn=1,Nr=2,as=3,os=4,vo=5,Bn=100,Mo=101,yo=102,ls=103,cs=104,So=200,bo=201,wo=202,To=203,Fa=204,Na=205,Eo=206,Ao=207,Co=208,Lo=209,Do=210,Po=0,Ro=1,Io=2,Ur=3,Fo=4,No=5,Uo=6,zo=7,Xr=0,Oo=1,Bo=2,Yt=0,Go=1,ko=2,Ua=3,Vo=4,Ho=5,za=300,Wn=301,Xn=302,zr=303,Or=304,Hi=306,Br=1e3,It=1001,Gr=1002,ht=1003,us=1004,hs=1005,Et=1006,Wo=1007,Wi=1008,vn=1009,Xo=1010,qo=1011,Oa=1012,Yo=1013,mn=1014,gn=1015,si=1016,jo=1017,Zo=1018,Vn=1020,Ko=1021,$o=1022,Ft=1023,Jo=1024,Qo=1025,_n=1026,qn=1027,el=1028,tl=1029,nl=1030,il=1031,rl=1033,Qi=33776,er=33777,tr=33778,nr=33779,ds=35840,fs=35841,ps=35842,ms=35843,sl=36196,gs=37492,_s=37496,xs=37808,vs=37809,Ms=37810,ys=37811,Ss=37812,bs=37813,ws=37814,Ts=37815,Es=37816,As=37817,Cs=37818,Ls=37819,Ds=37820,Ps=37821,Rs=36492,Mn=3e3,Ge=3001,al=3200,ol=3201,Ba=0,ll=1,zt="srgb",ai="srgb-linear",ir=7680,cl=519,Is=35044,Fs="300 es",kr=1035;class Sn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rr=Math.PI/180,Ns=180/Math.PI;function oi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rt[s&255]+rt[s>>8&255]+rt[s>>16&255]+rt[s>>24&255]+"-"+rt[e&255]+rt[e>>8&255]+"-"+rt[e>>16&15|64]+rt[e>>24&255]+"-"+rt[t&63|128]+rt[t>>8&255]+"-"+rt[t>>16&255]+rt[t>>24&255]+rt[n&255]+rt[n>>8&255]+rt[n>>16&255]+rt[n>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function ul(s,e){return(s%e+e)%e}function sr(s,e,t){return(1-t)*s+t*e}function Us(s){return(s&s-1)===0&&s!==0}function Vr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],x=n[8],p=i[0],h=i[3],_=i[6],T=i[1],b=i[4],S=i[7],v=i[2],C=i[5],N=i[8];return r[0]=o*p+a*T+l*v,r[3]=o*h+a*b+l*C,r[6]=o*_+a*S+l*N,r[1]=c*p+u*T+d*v,r[4]=c*h+u*b+d*C,r[7]=c*_+u*S+d*N,r[2]=f*p+m*T+x*v,r[5]=f*h+m*b+x*C,r[8]=f*_+m*S+x*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,m=c*r-o*l,x=t*d+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=d*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ar.makeScale(e,t)),this}rotate(e){return this.premultiply(ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(ar.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ar=new xt;function Ga(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const or={[zt]:{[ai]:xn},[ai]:{[zt]:Oi}},ot={legacyMode:!0,get workingColorSpace(){return ai},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(or[e]&&or[e][t]!==void 0){const n=or[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},je={r:0,g:0,b:0},Dt={h:0,s:0,l:0},pi={h:0,s:0,l:0};function lr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function mi(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=ul(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lr(o,r,e+1/3),this.g=lr(o,r,e),this.b=lr(o,r,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ot.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ot.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ot.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ot.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zt){const n=ka[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ot.fromWorkingColorSpace(mi(this,je),e),dt(je.r*255,0,255)<<16^dt(je.g*255,0,255)<<8^dt(je.b*255,0,255)<<0}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(mi(this,je),t);const n=je.r,i=je.g,r=je.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(mi(this,je),t),e.r=je.r,e.g=je.g,e.b=je.b,e}getStyle(e=zt){return ot.fromWorkingColorSpace(mi(this,je),e),e!==zt?`color(${e} ${je.r} ${je.g} ${je.b})`:`rgb(${je.r*255|0},${je.g*255|0},${je.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=n,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(pi);const n=sr(Dt.h,pi.h,t),i=sr(Dt.s,pi.s,t),r=sr(Dt.l,pi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Te.NAMES=ka;let Tn;class Va{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tn===void 0&&(Tn=Gi("canvas")),Tn.width=e.width,Tn.height=e.height;const n=Tn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ha{constructor(e=null){this.isSource=!0,this.uuid=oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(cr(i[o].image)):r.push(cr(i[o]))}else r=cr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function cr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Va.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hl=0;class yt extends Sn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=It,i=It,r=Et,o=Wi,a=Ft,l=vn,c=yt.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=oi(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==za)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=za;yt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],x=l[9],p=l[2],h=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+p)<.1&&Math.abs(x+h)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(m+1)/2,v=(_+1)/2,C=(u+f)/4,N=(d+p)/4,g=(x+h)/4;return b>S&&b>v?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=C/n,r=N/n):S>v?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=C/i,r=g/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=N/r,i=g/r),this.set(n,i,r,t),this}let T=Math.sqrt((h-x)*(h-x)+(d-p)*(d-p)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(h-x)/T,this.y=(d-p)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nt extends Sn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Et,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wa extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],x=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(d!==p||l!==f||c!==m||u!==x){let h=1-a;const _=l*f+c*m+u*x+d*p,T=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const v=Math.sqrt(b),C=Math.atan2(v,_*T);h=Math.sin(h*C)/v,a=Math.sin(a*C)/v}const S=a*T;if(l=l*h+f*S,c=c*h+m*S,u=u*h+x*S,d=d*h+p*S,h===1-a){const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],f=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+u*d+l*m-c*f,e[t+1]=l*x+u*f+c*d-a*m,e[t+2]=c*x+u*m+a*f-l*d,e[t+3]=u*x-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),f=l(n/2),m=l(i/2),x=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d-f*m*x;break;case"YXZ":this._x=f*u*d+c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d+f*m*x;break;case"ZXY":this._x=f*u*d-c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d-f*m*x;break;case"ZYX":this._x=f*u*d-c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d+f*m*x;break;case"YZX":this._x=f*u*d+c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d-f*m*x;break;case"XZY":this._x=f*u*d-c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,d=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-d*-o,this.y=u*l+f*-o+d*-r-c*-a,this.z=d*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ur.copy(this).projectOnVector(e),this.sub(ur)}reflect(e){return this.sub(ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ur=new D,zs=new yn;class li{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)cn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(cn)}else n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox),hr.applyMatrix4(e.matrixWorld),this.union(hr);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),gi.subVectors(this.max,Jn),En.subVectors(e.a,Jn),An.subVectors(e.b,Jn),Cn.subVectors(e.c,Jn),jt.subVectors(An,En),Zt.subVectors(Cn,An),un.subVectors(En,Cn);let t=[0,-jt.z,jt.y,0,-Zt.z,Zt.y,0,-un.z,un.y,jt.z,0,-jt.x,Zt.z,0,-Zt.x,un.z,0,-un.x,-jt.y,jt.x,0,-Zt.y,Zt.x,0,-un.y,un.x,0];return!dr(t,En,An,Cn,gi)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,En,An,Cn,gi))?!1:(_i.crossVectors(jt,Zt),t=[_i.x,_i.y,_i.z],dr(t,En,An,Cn,gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return cn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kt=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,hr=new li,En=new D,An=new D,Cn=new D,jt=new D,Zt=new D,un=new D,Jn=new D,gi=new D,_i=new D,hn=new D;function dr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hn.fromArray(s,r);const a=i.x*Math.abs(hn.x)+i.y*Math.abs(hn.y)+i.z*Math.abs(hn.z),l=e.dot(hn),c=t.dot(hn),u=n.dot(hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fl=new li,Qn=new D,fr=new D;class Xi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);const t=Qn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add(fr)),this.expandByPoint(Qn.copy(e.center).sub(fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vt=new D,pr=new D,xi=new D,Kt=new D,mr=new D,vi=new D,gr=new D;class Xa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vt.copy(this.direction).multiplyScalar(t).add(this.origin),Vt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pr.copy(e).add(t).multiplyScalar(.5),xi.copy(t).sub(e).normalize(),Kt.copy(this.origin).sub(pr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(xi),a=Kt.dot(this.direction),l=-Kt.dot(xi),c=Kt.lengthSq(),u=Math.abs(1-o*o);let d,f,m,x;if(u>0)if(d=o*l-a,f=o*a-l,x=r*u,d>=0)if(f>=-x)if(f<=x){const p=1/u;d*=p,f*=p,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(xi).multiplyScalar(f).add(pr),m}intersectSphere(e,t){Vt.subVectors(e.center,this.origin);const n=Vt.dot(this.direction),i=Vt.dot(Vt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vt)!==null}intersectTriangle(e,t,n,i,r){mr.subVectors(t,e),vi.subVectors(n,e),gr.crossVectors(mr,vi);let o=this.direction.dot(gr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kt.subVectors(this.origin,e);const l=a*this.direction.dot(vi.crossVectors(Kt,vi));if(l<0)return null;const c=a*this.direction.dot(mr.cross(Kt));if(c<0||l+c>o)return null;const u=-a*Kt.dot(gr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,u,d,f,m,x,p,h){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=f,_[3]=m,_[7]=x,_[11]=p,_[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ln.setFromMatrixColumn(e,0).length(),r=1/Ln.setFromMatrixColumn(e,1).length(),o=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,x=a*u,p=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,x=c*u,p=c*d;t[0]=f+p*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,x=c*u,p=c*d;t[0]=f-p*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,x=a*u,p=a*d;t[0]=l*u,t[4]=x*c-m,t[8]=f*c+p,t[1]=l*d,t[5]=p*c+f,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,p=a*c;t[0]=l*u,t[4]=p-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+x,t[10]=f-p*d}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,p=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+p,t[5]=o*u,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*u,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pl,e,ml)}lookAt(e,t,n){const i=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),$t.crossVectors(n,gt),$t.lengthSq()===0&&(Math.abs(n.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),$t.crossVectors(n,gt)),$t.normalize(),Mi.crossVectors(gt,$t),i[0]=$t.x,i[4]=Mi.x,i[8]=gt.x,i[1]=$t.y,i[5]=Mi.y,i[9]=gt.y,i[2]=$t.z,i[6]=Mi.z,i[10]=gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],x=n[2],p=n[6],h=n[10],_=n[14],T=n[3],b=n[7],S=n[11],v=n[15],C=i[0],N=i[4],g=i[8],A=i[12],R=i[1],Y=i[5],ee=i[9],z=i[13],P=i[2],X=i[6],j=i[10],Z=i[14],q=i[3],ne=i[7],J=i[11],O=i[15];return r[0]=o*C+a*R+l*P+c*q,r[4]=o*N+a*Y+l*X+c*ne,r[8]=o*g+a*ee+l*j+c*J,r[12]=o*A+a*z+l*Z+c*O,r[1]=u*C+d*R+f*P+m*q,r[5]=u*N+d*Y+f*X+m*ne,r[9]=u*g+d*ee+f*j+m*J,r[13]=u*A+d*z+f*Z+m*O,r[2]=x*C+p*R+h*P+_*q,r[6]=x*N+p*Y+h*X+_*ne,r[10]=x*g+p*ee+h*j+_*J,r[14]=x*A+p*z+h*Z+_*O,r[3]=T*C+b*R+S*P+v*q,r[7]=T*N+b*Y+S*X+v*ne,r[11]=T*g+b*ee+S*j+v*J,r[15]=T*A+b*z+S*Z+v*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],x=e[3],p=e[7],h=e[11],_=e[15];return x*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*m-n*l*m)+p*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*u-r*l*u)+h*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*u-n*c*u)+_*(-i*a*u-t*l*d+t*a*f+i*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],x=e[12],p=e[13],h=e[14],_=e[15],T=d*h*c-p*f*c+p*l*m-a*h*m-d*l*_+a*f*_,b=x*f*c-u*h*c-x*l*m+o*h*m+u*l*_-o*f*_,S=u*p*c-x*d*c+x*a*m-o*p*m-u*a*_+o*d*_,v=x*d*l-u*p*l-x*a*f+o*p*f+u*a*h-o*d*h,C=t*T+n*b+i*S+r*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=T*N,e[1]=(p*f*r-d*h*r-p*i*m+n*h*m+d*i*_-n*f*_)*N,e[2]=(a*h*r-p*l*r+p*i*c-n*h*c-a*i*_+n*l*_)*N,e[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*m-n*l*m)*N,e[4]=b*N,e[5]=(u*h*r-x*f*r+x*i*m-t*h*m-u*i*_+t*f*_)*N,e[6]=(x*l*r-o*h*r-x*i*c+t*h*c+o*i*_-t*l*_)*N,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*m+t*l*m)*N,e[8]=S*N,e[9]=(x*d*r-u*p*r-x*n*m+t*p*m+u*n*_-t*d*_)*N,e[10]=(o*p*r-x*a*r+x*n*c-t*p*c-o*n*_+t*a*_)*N,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*m-t*a*m)*N,e[12]=v*N,e[13]=(u*p*i-x*d*i+x*n*f-t*p*f-u*n*h+t*d*h)*N,e[14]=(x*a*i-o*p*i-x*n*l+t*p*l+o*n*h-t*a*h)*N,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*f+t*a*f)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,m=r*u,x=r*d,p=o*u,h=o*d,_=a*d,T=l*c,b=l*u,S=l*d,v=n.x,C=n.y,N=n.z;return i[0]=(1-(p+_))*v,i[1]=(m+S)*v,i[2]=(x-b)*v,i[3]=0,i[4]=(m-S)*C,i[5]=(1-(f+_))*C,i[6]=(h+T)*C,i[7]=0,i[8]=(x+b)*N,i[9]=(h-T)*N,i[10]=(1-(f+p))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ln.set(i[0],i[1],i[2]).length();const o=Ln.set(i[4],i[5],i[6]).length(),a=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Pt.copy(this);const c=1/r,u=1/o,d=1/a;return Pt.elements[0]*=c,Pt.elements[1]*=c,Pt.elements[2]*=c,Pt.elements[4]*=u,Pt.elements[5]*=u,Pt.elements[6]*=u,Pt.elements[8]*=d,Pt.elements[9]*=d,Pt.elements[10]*=d,t.setFromRotationMatrix(Pt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*c,m=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ln=new D,Pt=new Be,pl=new D(0,0,0),ml=new D(1,1,1),$t=new D,Mi=new D,gt=new D,Os=new Be,Bs=new yn;class ci{constructor(e=0,t=0,n=0,i=ci.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Os.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Os,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bs.setFromEuler(this),this.setFromQuaternion(Bs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ci.DefaultOrder="XYZ";ci.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gl=0;const Gs=new D,Dn=new yn,Ht=new Be,yi=new D,ei=new D,_l=new D,xl=new yn,ks=new D(1,0,0),Vs=new D(0,1,0),Hs=new D(0,0,1),vl={type:"added"},Ws={type:"removed"};class Ze extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DefaultUp.clone();const e=new D,t=new ci,n=new yn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new xt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=Ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ze.DefaultMatrixWorldAutoUpdate,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(ks,e)}rotateY(e){return this.rotateOnAxis(Vs,e)}rotateZ(e){return this.rotateOnAxis(Hs,e)}translateOnAxis(e,t){return Gs.copy(e).applyQuaternion(this.quaternion),this.position.add(Gs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ks,e)}translateY(e){return this.translateOnAxis(Vs,e)}translateZ(e){return this.translateOnAxis(Hs,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ht.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yi.copy(e):yi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ht.lookAt(ei,yi,this.up):Ht.lookAt(yi,ei,this.up),this.quaternion.setFromRotationMatrix(Ht),i&&(Ht.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(Ht),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ws)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ws)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ht.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ht.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ht),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,e,_l),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ze.DefaultUp=new D(0,1,0);Ze.DefaultMatrixAutoUpdate=!0;Ze.DefaultMatrixWorldAutoUpdate=!0;const Rt=new D,Wt=new D,_r=new D,Xt=new D,Pn=new D,Rn=new D,Xs=new D,xr=new D,vr=new D,Mr=new D;class qt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rt.subVectors(e,t),i.cross(Rt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Rt.subVectors(i,t),Wt.subVectors(n,t),_r.subVectors(e,t);const o=Rt.dot(Rt),a=Rt.dot(Wt),l=Rt.dot(_r),c=Wt.dot(Wt),u=Wt.dot(_r),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xt),Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Xt),l.set(0,0),l.addScaledVector(r,Xt.x),l.addScaledVector(o,Xt.y),l.addScaledVector(a,Xt.z),l}static isFrontFacing(e,t,n,i){return Rt.subVectors(n,t),Wt.subVectors(e,t),Rt.cross(Wt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rt.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Rt.cross(Wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return qt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Pn.subVectors(i,n),Rn.subVectors(r,n),xr.subVectors(e,n);const l=Pn.dot(xr),c=Rn.dot(xr);if(l<=0&&c<=0)return t.copy(n);vr.subVectors(e,i);const u=Pn.dot(vr),d=Rn.dot(vr);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Pn,o);Mr.subVectors(e,r);const m=Pn.dot(Mr),x=Rn.dot(Mr);if(x>=0&&m<=x)return t.copy(r);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Rn,a);const h=u*x-m*d;if(h<=0&&d-u>=0&&m-x>=0)return Xs.subVectors(r,i),a=(d-u)/(d-u+(m-x)),t.copy(i).addScaledVector(Xs,a);const _=1/(h+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(Pn,o).addScaledVector(Rn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ml=0;class Zn extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=kn,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fa,this.blendDst=Na,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qr extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xe=new D,Si=new _e;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Is,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Si.fromBufferAttribute(this,t),Si.applyMatrix3(e),this.setXY(t,Si.x,Si.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Is&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ya extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ja extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ve extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yl=0;const Tt=new Be,yr=new Ze,In=new D,_t=new li,ti=new li,tt=new D;class St extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ga(e)?ja:Ya)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tt.makeRotationFromQuaternion(e),this.applyMatrix4(Tt),this}rotateX(e){return Tt.makeRotationX(e),this.applyMatrix4(Tt),this}rotateY(e){return Tt.makeRotationY(e),this.applyMatrix4(Tt),this}rotateZ(e){return Tt.makeRotationZ(e),this.applyMatrix4(Tt),this}translate(e,t,n){return Tt.makeTranslation(e,t,n),this.applyMatrix4(Tt),this}scale(e,t,n){return Tt.makeScale(e,t,n),this.applyMatrix4(Tt),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ve(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];_t.setFromBufferAttribute(r),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(_t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(_t.min,ti.min),_t.expandByPoint(tt),tt.addVectors(_t.max,ti.max),_t.expandByPoint(tt)):(_t.expandByPoint(ti.min),_t.expandByPoint(ti.max))}_t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tt.fromBufferAttribute(a,c),l&&(In.fromBufferAttribute(e,c),tt.add(In)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new D,u[R]=new D;const d=new D,f=new D,m=new D,x=new _e,p=new _e,h=new _e,_=new D,T=new D;function b(R,Y,ee){d.fromArray(i,R*3),f.fromArray(i,Y*3),m.fromArray(i,ee*3),x.fromArray(o,R*2),p.fromArray(o,Y*2),h.fromArray(o,ee*2),f.sub(d),m.sub(d),p.sub(x),h.sub(x);const z=1/(p.x*h.y-h.x*p.y);isFinite(z)&&(_.copy(f).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(z),T.copy(m).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(z),c[R].add(_),c[Y].add(_),c[ee].add(_),u[R].add(T),u[Y].add(T),u[ee].add(T))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,Y=S.length;R<Y;++R){const ee=S[R],z=ee.start,P=ee.count;for(let X=z,j=z+P;X<j;X+=3)b(n[X+0],n[X+1],n[X+2])}const v=new D,C=new D,N=new D,g=new D;function A(R){N.fromArray(r,R*3),g.copy(N);const Y=c[R];v.copy(Y),v.sub(N.multiplyScalar(N.dot(Y))).normalize(),C.crossVectors(g,Y);const z=C.dot(u[R])<0?-1:1;l[R*4]=v.x,l[R*4+1]=v.y,l[R*4+2]=v.z,l[R*4+3]=z}for(let R=0,Y=S.length;R<Y;++R){const ee=S[R],z=ee.start,P=ee.count;for(let X=z,j=z+P;X<j;X+=3)A(n[X+0]),A(n[X+1]),A(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,h),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let _=0;_<u;_++)f[x++]=c[m++]}return new Ut(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const qs=new Be,Fn=new Xa,Sr=new Xi,Jt=new D,Qt=new D,en=new D,br=new D,wr=new D,Tr=new D,bi=new D,wi=new D,Ti=new D,Ei=new _e,Ai=new _e,Ci=new _e,Er=new D,Li=new D;class vt extends Ze{constructor(e=new St,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),e.ray.intersectsSphere(Sr)===!1)||(qs.copy(r).invert(),Fn.copy(e.ray).applyMatrix4(qs),n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,m=n.groups,x=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const _=m[p],T=i[_.materialIndex],b=Math.max(_.start,x.start),S=Math.min(a.count,Math.min(_.start+_.count,x.start+x.count));for(let v=b,C=S;v<C;v+=3){const N=a.getX(v),g=a.getX(v+1),A=a.getX(v+2);o=Di(this,T,e,Fn,l,c,u,d,f,N,g,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let _=p,T=h;_<T;_+=3){const b=a.getX(_),S=a.getX(_+1),v=a.getX(_+2);o=Di(this,i,e,Fn,l,c,u,d,f,b,S,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const _=m[p],T=i[_.materialIndex],b=Math.max(_.start,x.start),S=Math.min(l.count,Math.min(_.start+_.count,x.start+x.count));for(let v=b,C=S;v<C;v+=3){const N=v,g=v+1,A=v+2;o=Di(this,T,e,Fn,l,c,u,d,f,N,g,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(l.count,x.start+x.count);for(let _=p,T=h;_<T;_+=3){const b=_,S=_+1,v=_+2;o=Di(this,i,e,Fn,l,c,u,d,f,b,S,v),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Sl(s,e,t,n,i,r,o,a){let l;if(e.side===Ct?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==tn,a),l===null)return null;Li.copy(a),Li.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Li);return c<t.near||c>t.far?null:{distance:c,point:Li.clone(),object:s}}function Di(s,e,t,n,i,r,o,a,l,c,u,d){Jt.fromBufferAttribute(i,c),Qt.fromBufferAttribute(i,u),en.fromBufferAttribute(i,d);const f=s.morphTargetInfluences;if(r&&f){bi.set(0,0,0),wi.set(0,0,0),Ti.set(0,0,0);for(let x=0,p=r.length;x<p;x++){const h=f[x],_=r[x];h!==0&&(br.fromBufferAttribute(_,c),wr.fromBufferAttribute(_,u),Tr.fromBufferAttribute(_,d),o?(bi.addScaledVector(br,h),wi.addScaledVector(wr,h),Ti.addScaledVector(Tr,h)):(bi.addScaledVector(br.sub(Jt),h),wi.addScaledVector(wr.sub(Qt),h),Ti.addScaledVector(Tr.sub(en),h)))}Jt.add(bi),Qt.add(wi),en.add(Ti)}s.isSkinnedMesh&&(s.boneTransform(c,Jt),s.boneTransform(u,Qt),s.boneTransform(d,en));const m=Sl(s,e,t,n,Jt,Qt,en,Er);if(m){a&&(Ei.fromBufferAttribute(a,c),Ai.fromBufferAttribute(a,u),Ci.fromBufferAttribute(a,d),m.uv=qt.getUV(Er,Jt,Qt,en,Ei,Ai,Ci,new _e)),l&&(Ei.fromBufferAttribute(l,c),Ai.fromBufferAttribute(l,u),Ci.fromBufferAttribute(l,d),m.uv2=qt.getUV(Er,Jt,Qt,en,Ei,Ai,Ci,new _e));const x={a:c,b:u,c:d,normal:new D,materialIndex:0};qt.getNormal(Jt,Qt,en,x.normal),m.face=x}return m}class ui extends St{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(d,2));function x(p,h,_,T,b,S,v,C,N,g,A){const R=S/N,Y=v/g,ee=S/2,z=v/2,P=C/2,X=N+1,j=g+1;let Z=0,q=0;const ne=new D;for(let J=0;J<j;J++){const O=J*Y-z;for(let V=0;V<X;V++){const $=V*R-ee;ne[p]=$*T,ne[h]=O*b,ne[_]=P,c.push(ne.x,ne.y,ne.z),ne[p]=0,ne[h]=0,ne[_]=C>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(V/N),d.push(1-J/g),Z+=1}}for(let J=0;J<g;J++)for(let O=0;O<N;O++){const V=f+O+X*J,$=f+O+X*(J+1),te=f+(O+1)+X*(J+1),se=f+(O+1)+X*J;l.push(V,$,se),l.push($,te,se),q+=6}a.addGroup(m,q,A),m+=q,f+=Z}}static fromJSON(e){return new ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yn(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ct(s){const e={};for(let t=0;t<s.length;t++){const n=Yn(s[t]);for(const i in n)e[i]=n[i]}return e}function bl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Za(s){return s.getRenderTarget()===null&&s.outputEncoding===Ge?zt:ai}const ki={clone:Yn,merge:ct};var wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wl,this.fragmentShader=Tl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yn(e.uniforms),this.uniformsGroups=bl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ka extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends Ka{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nn=-90,Un=1;class El extends Ze{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new At(Nn,Un,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new At(Nn,Un,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new At(Nn,Un,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new At(Nn,Un,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new At(Nn,Un,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new At(Nn,Un,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Yt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class $a extends yt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wn,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Al extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $a(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ui(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:Yn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:nn});r.uniforms.tEquirect.value=t;const o=new vt(i,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Et),new El(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ar=new D,Cl=new D,Ll=new xt;class dn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ar.subVectors(n,t).cross(Cl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ll.getNormalMatrix(e),i=this.coplanarPoint(Ar).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Xi,Pi=new D;class Yr{constructor(e=new dn,t=new dn,n=new dn,i=new dn,r=new dn,o=new dn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],f=n[8],m=n[9],x=n[10],p=n[11],h=n[12],_=n[13],T=n[14],b=n[15];return t[0].setComponents(a-i,d-l,p-f,b-h).normalize(),t[1].setComponents(a+i,d+l,p+f,b+h).normalize(),t[2].setComponents(a+r,d+c,p+m,b+_).normalize(),t[3].setComponents(a-r,d-c,p-m,b-_).normalize(),t[4].setComponents(a-o,d-u,p-x,b-T).normalize(),t[5].setComponents(a+o,d+u,p+x,b+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSprite(e){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Pi.x=i.normal.x>0?e.max.x:e.min.x,Pi.y=i.normal.y>0?e.max.y:e.min.y,Pi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ja(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Dl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const f=u.array,m=u.updateRange;s.bindBuffer(d,c),m.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class jr extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,m=[],x=[],p=[],h=[];for(let _=0;_<u;_++){const T=_*f-o;for(let b=0;b<c;b++){const S=b*d-r;x.push(S,-T,0),p.push(0,0,1),h.push(b/a),h.push(1-_/l)}}for(let _=0;_<l;_++)for(let T=0;T<a;T++){const b=T+c*_,S=T+c*(_+1),v=T+1+c*(_+1),C=T+1+c*_;m.push(b,S,C),m.push(S,v,C)}this.setIndex(m),this.setAttribute("position",new Ve(x,3)),this.setAttribute("normal",new Ve(p,3)),this.setAttribute("uv",new Ve(h,2))}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Il=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ul=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zl="vec3 transformed = vec3( position );",Ol=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Gl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ql=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$l=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ql=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ec=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ic="gl_FragColor = linearToOutputTexel( gl_FragColor );",rc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ac=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_c=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,yc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ec=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ac=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ic=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Xc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Kc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$c=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,nu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,yu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Su=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Tu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Eu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Au=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Du=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ru=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ou=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ku=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ju=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ku=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$u=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,th=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ih=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ah=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,oh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:Pl,alphamap_pars_fragment:Rl,alphatest_fragment:Il,alphatest_pars_fragment:Fl,aomap_fragment:Nl,aomap_pars_fragment:Ul,begin_vertex:zl,beginnormal_vertex:Ol,bsdfs:Bl,iridescence_fragment:Gl,bumpmap_pars_fragment:kl,clipping_planes_fragment:Vl,clipping_planes_pars_fragment:Hl,clipping_planes_pars_vertex:Wl,clipping_planes_vertex:Xl,color_fragment:ql,color_pars_fragment:Yl,color_pars_vertex:jl,color_vertex:Zl,common:Kl,cube_uv_reflection_fragment:$l,defaultnormal_vertex:Jl,displacementmap_pars_vertex:Ql,displacementmap_vertex:ec,emissivemap_fragment:tc,emissivemap_pars_fragment:nc,encodings_fragment:ic,encodings_pars_fragment:rc,envmap_fragment:sc,envmap_common_pars_fragment:ac,envmap_pars_fragment:oc,envmap_pars_vertex:lc,envmap_physical_pars_fragment:Mc,envmap_vertex:cc,fog_vertex:uc,fog_pars_vertex:hc,fog_fragment:dc,fog_pars_fragment:fc,gradientmap_pars_fragment:pc,lightmap_fragment:mc,lightmap_pars_fragment:gc,lights_lambert_fragment:_c,lights_lambert_pars_fragment:xc,lights_pars_begin:vc,lights_toon_fragment:yc,lights_toon_pars_fragment:Sc,lights_phong_fragment:bc,lights_phong_pars_fragment:wc,lights_physical_fragment:Tc,lights_physical_pars_fragment:Ec,lights_fragment_begin:Ac,lights_fragment_maps:Cc,lights_fragment_end:Lc,logdepthbuf_fragment:Dc,logdepthbuf_pars_fragment:Pc,logdepthbuf_pars_vertex:Rc,logdepthbuf_vertex:Ic,map_fragment:Fc,map_pars_fragment:Nc,map_particle_fragment:Uc,map_particle_pars_fragment:zc,metalnessmap_fragment:Oc,metalnessmap_pars_fragment:Bc,morphcolor_vertex:Gc,morphnormal_vertex:kc,morphtarget_pars_vertex:Vc,morphtarget_vertex:Hc,normal_fragment_begin:Wc,normal_fragment_maps:Xc,normal_pars_fragment:qc,normal_pars_vertex:Yc,normal_vertex:jc,normalmap_pars_fragment:Zc,clearcoat_normal_fragment_begin:Kc,clearcoat_normal_fragment_maps:$c,clearcoat_pars_fragment:Jc,iridescence_pars_fragment:Qc,output_fragment:eu,packing:tu,premultiplied_alpha_fragment:nu,project_vertex:iu,dithering_fragment:ru,dithering_pars_fragment:su,roughnessmap_fragment:au,roughnessmap_pars_fragment:ou,shadowmap_pars_fragment:lu,shadowmap_pars_vertex:cu,shadowmap_vertex:uu,shadowmask_pars_fragment:hu,skinbase_vertex:du,skinning_pars_vertex:fu,skinning_vertex:pu,skinnormal_vertex:mu,specularmap_fragment:gu,specularmap_pars_fragment:_u,tonemapping_fragment:xu,tonemapping_pars_fragment:vu,transmission_fragment:Mu,transmission_pars_fragment:yu,uv_pars_fragment:Su,uv_pars_vertex:bu,uv_vertex:wu,uv2_pars_fragment:Tu,uv2_pars_vertex:Eu,uv2_vertex:Au,worldpos_vertex:Cu,background_vert:Lu,background_frag:Du,backgroundCube_vert:Pu,backgroundCube_frag:Ru,cube_vert:Iu,cube_frag:Fu,depth_vert:Nu,depth_frag:Uu,distanceRGBA_vert:zu,distanceRGBA_frag:Ou,equirect_vert:Bu,equirect_frag:Gu,linedashed_vert:ku,linedashed_frag:Vu,meshbasic_vert:Hu,meshbasic_frag:Wu,meshlambert_vert:Xu,meshlambert_frag:qu,meshmatcap_vert:Yu,meshmatcap_frag:ju,meshnormal_vert:Zu,meshnormal_frag:Ku,meshphong_vert:$u,meshphong_frag:Ju,meshphysical_vert:Qu,meshphysical_frag:eh,meshtoon_vert:th,meshtoon_frag:nh,points_vert:ih,points_frag:rh,shadow_vert:sh,shadow_frag:ah,sprite_vert:oh,sprite_frag:lh},re={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},Ot={basic:{uniforms:ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:ct([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:ct([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:ct([re.points,re.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:ct([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:ct([re.common,re.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:ct([re.sprite,re.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:ct([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:ct([re.lights,re.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Ot.physical={uniforms:ct([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _e(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Ri={r:0,b:0,g:0};function ch(s,e,t,n,i,r,o){const a=new Te(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function x(h,_){let T=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b));const S=s.xr,v=S.getSession&&S.getSession();v&&v.environmentBlendMode==="additive"&&(b=null),b===null?p(a,l):b&&b.isColor&&(p(b,1),T=!0),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Hi)?(u===void 0&&(u=new vt(new ui(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Yn(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,N,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(d!==b||f!==b.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,d=b,f=b.version,m=s.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new vt(new jr(2,2),new Mt({name:"BackgroundMaterial",uniforms:Yn(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,m=s.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function p(h,_){h.getRGB(Ri,Za(s)),n.buffers.color.setClear(Ri.r,Ri.g,Ri.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(h,_=1){a.set(h),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(a,l)},render:x}}function uh(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=h(null);let c=l,u=!1;function d(P,X,j,Z,q){let ne=!1;if(o){const J=p(Z,j,X);c!==J&&(c=J,m(c.object)),ne=_(P,Z,j,q),ne&&T(P,Z,j,q)}else{const J=X.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=J,ne=!0)}q!==null&&t.update(q,34963),(ne||u)&&(u=!1,g(P,X,j,Z),q!==null&&s.bindBuffer(34963,t.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function x(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function p(P,X,j){const Z=j.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let ne=q[X.id];ne===void 0&&(ne={},q[X.id]=ne);let J=ne[Z];return J===void 0&&(J=h(f()),ne[Z]=J),J}function h(P){const X=[],j=[],Z=[];for(let q=0;q<i;q++)X[q]=0,j[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:Z,object:P,attributes:{},index:null}}function _(P,X,j,Z){const q=c.attributes,ne=X.attributes;let J=0;const O=j.getAttributes();for(const V in O)if(O[V].location>=0){const te=q[V];let se=ne[V];if(se===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function T(P,X,j,Z){const q={},ne=X.attributes;let J=0;const O=j.getAttributes();for(const V in O)if(O[V].location>=0){let te=ne[V];te===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const se={};se.attribute=te,te&&te.data&&(se.data=te.data),q[V]=se,J++}c.attributes=q,c.attributesNum=J,c.index=Z}function b(){const P=c.newAttributes;for(let X=0,j=P.length;X<j;X++)P[X]=0}function S(P){v(P,0)}function v(P,X){const j=c.newAttributes,Z=c.enabledAttributes,q=c.attributeDivisors;j[P]=1,Z[P]===0&&(s.enableVertexAttribArray(P),Z[P]=1),q[P]!==X&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,X),q[P]=X)}function C(){const P=c.newAttributes,X=c.enabledAttributes;for(let j=0,Z=X.length;j<Z;j++)X[j]!==P[j]&&(s.disableVertexAttribArray(j),X[j]=0)}function N(P,X,j,Z,q,ne){n.isWebGL2===!0&&(j===5124||j===5125)?s.vertexAttribIPointer(P,X,j,q,ne):s.vertexAttribPointer(P,X,j,Z,q,ne)}function g(P,X,j,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const q=Z.attributes,ne=j.getAttributes(),J=X.defaultAttributeValues;for(const O in ne){const V=ne[O];if(V.location>=0){let $=q[O];if($===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const te=$.normalized,se=$.itemSize,H=t.get($);if(H===void 0)continue;const Ae=H.buffer,de=H.type,xe=H.bytesPerElement;if($.isInterleavedBufferAttribute){const he=$.data,Fe=he.stride,Se=$.offset;if(he.isInstancedInterleavedBuffer){for(let ve=0;ve<V.locationSize;ve++)v(V.location+ve,he.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<V.locationSize;ve++)S(V.location+ve);s.bindBuffer(34962,Ae);for(let ve=0;ve<V.locationSize;ve++)N(V.location+ve,se/V.locationSize,de,te,Fe*xe,(Se+se/V.locationSize*ve)*xe)}else{if($.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)v(V.location+he,$.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let he=0;he<V.locationSize;he++)S(V.location+he);s.bindBuffer(34962,Ae);for(let he=0;he<V.locationSize;he++)N(V.location+he,se/V.locationSize,de,te,se*xe,se/V.locationSize*he*xe)}}else if(J!==void 0){const te=J[O];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(V.location,te);break;case 3:s.vertexAttrib3fv(V.location,te);break;case 4:s.vertexAttrib4fv(V.location,te);break;default:s.vertexAttrib1fv(V.location,te)}}}}C()}function A(){ee();for(const P in a){const X=a[P];for(const j in X){const Z=X[j];for(const q in Z)x(Z[q].object),delete Z[q];delete X[j]}delete a[P]}}function R(P){if(a[P.id]===void 0)return;const X=a[P.id];for(const j in X){const Z=X[j];for(const q in Z)x(Z[q].object),delete Z[q];delete X[j]}delete a[P.id]}function Y(P){for(const X in a){const j=a[X];if(j[P.id]===void 0)continue;const Z=j[P.id];for(const q in Z)x(Z[q].object),delete Z[q];delete j[P.id]}}function ee(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:b,enableAttribute:S,disableUnusedAttributes:C}}function hh(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function dh(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),x=s.getParameter(34076),p=s.getParameter(34921),h=s.getParameter(36347),_=s.getParameter(36348),T=s.getParameter(36349),b=f>0,S=o||e.has("OES_texture_float"),v=b&&S,C=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:C}}function fh(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new dn,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const x=d.length!==0||f||n!==0||i;return i=f,t=u(d,m,0),n=d.length,x},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,f,m){const x=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,_=s.get(d);if(!i||x===null||x.length===0||r&&!h)r?u(null):c();else{const T=r?0:n,b=T*4;let S=_.clippingState||null;l.value=S,S=u(x,f,b,m);for(let v=0;v!==b;++v)S[v]=t[v];_.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,x){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const _=m+p*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(h===null||h.length<_)&&(h=new Float32Array(_));for(let b=0,S=m;b!==p;++b,S+=4)o.copy(d[b]).applyMatrix4(T,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function ph(s){let e=new WeakMap;function t(o,a){return a===zr?o.mapping=Wn:a===Or&&(o.mapping=Xn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===zr||a===Or)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Al(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class qi extends Ka{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gn=4,Ys=[.125,.215,.35,.446,.526,.582],pn=20,Cr=new qi,js=new Te;let Lr=null;const fn=(1+Math.sqrt(5))/2,On=1/fn,Zs=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,fn,On),new D(0,fn,-On),new D(On,0,fn),new D(-On,0,fn),new D(fn,On,0),new D(-fn,On,0)];class Ks{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Lr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Js(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr),e.scissorTest=!1,Ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===Xn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:si,format:Ft,encoding:Mn,depthBuffer:!1},i=$s(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$s(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mh(r)),this._blurMaterial=gh(r,e,t)}return i}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,i){const a=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(js),u.toneMapping=Yt,u.autoClear=!1;const m=new qr({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),x=new vt(new ui,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(js),p=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):T===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const b=this._cubeSize;Ii(i,T*b,_>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wn||e.mapping===Xn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Js());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ii(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zs[(i-1)%Zs.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new vt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pn-1),p=r/x,h=isFinite(r)?1+Math.floor(u*p):pn;h>pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${pn}`);const _=[];let T=0;for(let N=0;N<pn;++N){const g=N/p,A=Math.exp(-g*g/2);_.push(A),N===0?T+=A:N<h&&(T+=2*A)}for(let N=0;N<_.length;N++)_[N]=_[N]/T;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=x,f.mipInt.value=b-n;const S=this._sizeLods[i],v=3*S*(i>b-Gn?i-b+Gn:0),C=4*(this._cubeSize-S);Ii(t,v,C,3*S,2*S),l.setRenderTarget(t),l.render(d,Cr)}}function mh(s){const e=[],t=[],n=[];let i=s;const r=s-Gn+1+Ys.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Gn?l=Ys[o-s+Gn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,p=3,h=2,_=1,T=new Float32Array(p*x*m),b=new Float32Array(h*x*m),S=new Float32Array(_*x*m);for(let C=0;C<m;C++){const N=C%3*2/3-1,g=C>2?0:-1,A=[N,g,0,N+2/3,g,0,N+2/3,g+1,0,N,g,0,N+2/3,g+1,0,N,g+1,0];T.set(A,p*x*C),b.set(f,h*x*C);const R=[C,C,C,C,C,C];S.set(R,_*x*C)}const v=new St;v.setAttribute("position",new Ut(T,p)),v.setAttribute("uv",new Ut(b,h)),v.setAttribute("faceIndex",new Ut(S,_)),e.push(v),i>Gn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $s(s,e,t){const n=new Nt(s,e,t);return n.texture.mapping=Hi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function gh(s,e,t){const n=new Float32Array(pn),i=new D(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Js(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Qs(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Zr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _h(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zr||l===Or,u=l===Wn||l===Xn;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ks(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Ks(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vh(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const m=d.morphAttributes;for(const x in m){const p=m[x];for(let h=0,_=p.length;h<_;h++)e.update(p[h],34962)}}function c(d){const f=[],m=d.index,x=d.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let b=0,S=T.length;b<S;b+=3){const v=T[b+0],C=T[b+1],N=T[b+2];f.push(v,C,C,N,N,v)}}else{const T=x.array;p=x.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const v=b+0,C=b+1,N=b+2;f.push(v,C,C,N,N,v)}}const h=new(Ga(f)?ja:Ya)(f,1);h.version=p;const _=r.get(d);_&&e.remove(_),r.set(d,h)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Mh(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*l),t.update(m,r,1)}function d(f,m,x){if(x===0)return;let p,h;if(i)p=s,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,m,a,f*l,x),t.update(m,r,x)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function yh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sh(s,e){return s[0]-e[0]}function bh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function wh(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==h){let j=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var x=j;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],g=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let R=0;S===!0&&(R=1),v===!0&&(R=2),C===!0&&(R=3);let Y=u.attributes.position.count*R,ee=1;Y>e.maxTextureSize&&(ee=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const z=new Float32Array(Y*ee*4*h),P=new Wa(z,Y,ee,h);P.type=gn,P.needsUpdate=!0;const X=R*4;for(let Z=0;Z<h;Z++){const q=N[Z],ne=g[Z],J=A[Z],O=Y*ee*4*Z;for(let V=0;V<q.count;V++){const $=V*X;S===!0&&(o.fromBufferAttribute(q,V),z[O+$+0]=o.x,z[O+$+1]=o.y,z[O+$+2]=o.z,z[O+$+3]=0),v===!0&&(o.fromBufferAttribute(ne,V),z[O+$+4]=o.x,z[O+$+5]=o.y,z[O+$+6]=o.z,z[O+$+7]=0),C===!0&&(o.fromBufferAttribute(J,V),z[O+$+8]=o.x,z[O+$+9]=o.y,z[O+$+10]=o.z,z[O+$+11]=J.itemSize===4?o.w:1)}}_={count:h,texture:P,size:new _e(Y,ee)},r.set(u,_),u.addEventListener("dispose",j)}let T=0;for(let S=0;S<m.length;S++)T+=m[S];const b=u.morphTargetsRelative?1:1-T;f.getUniforms().setValue(s,"morphTargetBaseInfluence",b),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==p){h=[];for(let v=0;v<p;v++)h[v]=[v,0];n[u.id]=h}for(let v=0;v<p;v++){const C=h[v];C[0]=v,C[1]=m[v]}h.sort(bh);for(let v=0;v<8;v++)v<p&&h[v][1]?(a[v][0]=h[v][0],a[v][1]=h[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Sh);const _=u.morphAttributes.position,T=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const C=a[v],N=C[0],g=C[1];N!==Number.MAX_SAFE_INTEGER&&g?(_&&u.getAttribute("morphTarget"+v)!==_[N]&&u.setAttribute("morphTarget"+v,_[N]),T&&u.getAttribute("morphNormal"+v)!==T[N]&&u.setAttribute("morphNormal"+v,T[N]),i[v]=g,b+=g):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),T&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(s,"morphTargetBaseInfluence",S),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Th(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Qa=new yt,eo=new Wa,to=new dl,no=new $a,ea=[],ta=[],na=new Float32Array(16),ia=new Float32Array(9),ra=new Float32Array(4);function Kn(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ea[i];if(r===void 0&&(r=new Float32Array(i),ea[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ke(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function $e(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yi(s,e){let t=ta[e];t===void 0&&(t=new Int32Array(e),ta[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Eh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ah(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2fv(this.addr,e),$e(t,e)}}function Ch(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ke(t,e))return;s.uniform3fv(this.addr,e),$e(t,e)}}function Lh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4fv(this.addr,e),$e(t,e)}}function Dh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$e(t,e)}else{if(Ke(t,n))return;ra.set(n),s.uniformMatrix2fv(this.addr,!1,ra),$e(t,n)}}function Ph(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$e(t,e)}else{if(Ke(t,n))return;ia.set(n),s.uniformMatrix3fv(this.addr,!1,ia),$e(t,n)}}function Rh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$e(t,e)}else{if(Ke(t,n))return;na.set(n),s.uniformMatrix4fv(this.addr,!1,na),$e(t,n)}}function Ih(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Fh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2iv(this.addr,e),$e(t,e)}}function Nh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;s.uniform3iv(this.addr,e),$e(t,e)}}function Uh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4iv(this.addr,e),$e(t,e)}}function zh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Oh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2uiv(this.addr,e),$e(t,e)}}function Bh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;s.uniform3uiv(this.addr,e),$e(t,e)}}function Gh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4uiv(this.addr,e),$e(t,e)}}function kh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Qa,i)}function Vh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||to,i)}function Hh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||no,i)}function Wh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eo,i)}function Xh(s){switch(s){case 5126:return Eh;case 35664:return Ah;case 35665:return Ch;case 35666:return Lh;case 35674:return Dh;case 35675:return Ph;case 35676:return Rh;case 5124:case 35670:return Ih;case 35667:case 35671:return Fh;case 35668:case 35672:return Nh;case 35669:case 35673:return Uh;case 5125:return zh;case 36294:return Oh;case 36295:return Bh;case 36296:return Gh;case 35678:case 36198:case 36298:case 36306:case 35682:return kh;case 35679:case 36299:case 36307:return Vh;case 35680:case 36300:case 36308:case 36293:return Hh;case 36289:case 36303:case 36311:case 36292:return Wh}}function qh(s,e){s.uniform1fv(this.addr,e)}function Yh(s,e){const t=Kn(e,this.size,2);s.uniform2fv(this.addr,t)}function jh(s,e){const t=Kn(e,this.size,3);s.uniform3fv(this.addr,t)}function Zh(s,e){const t=Kn(e,this.size,4);s.uniform4fv(this.addr,t)}function Kh(s,e){const t=Kn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $h(s,e){const t=Kn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Jh(s,e){const t=Kn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Qh(s,e){s.uniform1iv(this.addr,e)}function ed(s,e){s.uniform2iv(this.addr,e)}function td(s,e){s.uniform3iv(this.addr,e)}function nd(s,e){s.uniform4iv(this.addr,e)}function id(s,e){s.uniform1uiv(this.addr,e)}function rd(s,e){s.uniform2uiv(this.addr,e)}function sd(s,e){s.uniform3uiv(this.addr,e)}function ad(s,e){s.uniform4uiv(this.addr,e)}function od(s,e,t){const n=this.cache,i=e.length,r=Yi(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qa,r[o])}function ld(s,e,t){const n=this.cache,i=e.length,r=Yi(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||to,r[o])}function cd(s,e,t){const n=this.cache,i=e.length,r=Yi(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||no,r[o])}function ud(s,e,t){const n=this.cache,i=e.length,r=Yi(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||eo,r[o])}function hd(s){switch(s){case 5126:return qh;case 35664:return Yh;case 35665:return jh;case 35666:return Zh;case 35674:return Kh;case 35675:return $h;case 35676:return Jh;case 5124:case 35670:return Qh;case 35667:case 35671:return ed;case 35668:case 35672:return td;case 35669:case 35673:return nd;case 5125:return id;case 36294:return rd;case 36295:return sd;case 36296:return ad;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ld;case 35680:case 36300:case 36308:case 36293:return cd;case 36289:case 36303:case 36311:case 36292:return ud}}class dd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Xh(t.type)}}class fd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=hd(t.type)}}class pd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Dr=/(\w+)(\])?(\[|\.)?/g;function sa(s,e){s.seq.push(e),s.map[e.id]=e}function md(s,e,t){const n=s.name,i=n.length;for(Dr.lastIndex=0;;){const r=Dr.exec(n),o=Dr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sa(t,c===void 0?new dd(a,s,e):new fd(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new pd(a),sa(t,d)),t=d}}}class Bi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);md(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function aa(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let gd=0;function _d(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function xd(s){switch(s){case Mn:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function oa(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+_d(s.getShaderSource(e),o)}else return i}function vd(s,e){const t=xd(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Md(s,e){let t;switch(e){case Go:t="Linear";break;case ko:t="Reinhard";break;case Ua:t="OptimizedCineon";break;case Vo:t="ACESFilmic";break;case Ho:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ri).join(`
`)}function Sd(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bd(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ri(s){return s!==""}function la(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ca(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hr(s){return s.replace(wd,Td)}function Td(s,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hr(t)}const Ed=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ua(s){return s.replace(Ed,Ad)}function Ad(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ha(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cd(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ia?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===xo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Ld(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Wn:case Xn:e="ENVMAP_TYPE_CUBE";break;case Hi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dd(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xn:e="ENVMAP_MODE_REFRACTION";break}return e}function Pd(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xr:e="ENVMAP_BLENDING_MULTIPLY";break;case Oo:e="ENVMAP_BLENDING_MIX";break;case Bo:e="ENVMAP_BLENDING_ADD";break}return e}function Rd(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Id(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cd(t),c=Ld(t),u=Dd(t),d=Pd(t),f=Rd(t),m=t.isWebGL2?"":yd(t),x=Sd(r),p=i.createProgram();let h,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(ri).join(`
`),h.length>0&&(h+=`
`),_=[m,x].filter(ri).join(`
`),_.length>0&&(_+=`
`)):(h=[ha(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ri).join(`
`),_=[m,ha(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yt?"#define TONE_MAPPING":"",t.toneMapping!==Yt?be.tonemapping_pars_fragment:"",t.toneMapping!==Yt?Md("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,vd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ri).join(`
`)),o=Hr(o),o=la(o,t),o=ca(o,t),a=Hr(a),a=la(a,t),a=ca(a,t),o=ua(o),a=ua(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["#define varying in",t.glslVersion===Fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=T+h+o,S=T+_+a,v=aa(i,35633,b),C=aa(i,35632,S);if(i.attachShader(p,v),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(v).trim(),Y=i.getShaderInfoLog(C).trim();let ee=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){ee=!1;const P=oa(i,v,"vertex"),X=oa(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+P+`
`+X)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||Y==="")&&(z=!1);z&&(this.diagnostics={runnable:ee,programLog:A,vertexShader:{log:R,prefix:h},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(v),i.deleteShader(C);let N;this.getUniforms=function(){return N===void 0&&(N=new Bi(i,p)),N};let g;return this.getAttributes=function(){return g===void 0&&(g=bd(i,p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=gd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=C,this}let Fd=0;class Nd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ud(e),t.set(e,n)),n}}class Ud{constructor(e){this.id=Fd++,this.code=e,this.usedTimes=0}}function zd(s,e,t,n,i,r,o){const a=new qa,l=new Nd,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,A,R,Y,ee){const z=Y.fog,P=ee.geometry,X=g.isMeshStandardMaterial?Y.environment:null,j=(g.isMeshStandardMaterial?t:e).get(g.envMap||X),Z=j&&j.mapping===Hi?j.image.height:null,q=x[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const ne=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=ne!==void 0?ne.length:0;let O=0;P.morphAttributes.position!==void 0&&(O=1),P.morphAttributes.normal!==void 0&&(O=2),P.morphAttributes.color!==void 0&&(O=3);let V,$,te,se;if(q){const Fe=Ot[q];V=Fe.vertexShader,$=Fe.fragmentShader}else V=g.vertexShader,$=g.fragmentShader,l.update(g),te=l.getVertexShaderID(g),se=l.getFragmentShaderID(g);const H=s.getRenderTarget(),Ae=g.alphaTest>0,de=g.clearcoat>0,xe=g.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:g.type,vertexShader:V,fragmentShader:$,defines:g.defines,customVertexShaderID:te,customFragmentShaderID:se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?s.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Mn,map:!!g.map,matcap:!!g.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===ll,tangentSpaceNormalMap:g.normalMapType===Ba,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===Ge,clearcoat:de,clearcoatMap:de&&!!g.clearcoatMap,clearcoatRoughnessMap:de&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!g.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!g.iridescenceMap,iridescenceThicknessMap:xe&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===kn,alphaMap:!!g.alphaMap,alphaTest:Ae,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!P.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!z,useFog:g.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:O,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:Yt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===tn,flipSided:g.side===Ct,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function h(g){const A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)A.push(R),A.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(_(A,g),T(A,g),A.push(s.outputEncoding)),A.push(g.customProgramCacheKey),A.join()}function _(g,A){g.push(A.precision),g.push(A.outputEncoding),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.combine),g.push(A.vertexUvs),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function T(g,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),g.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),g.push(a.mask)}function b(g){const A=x[g.type];let R;if(A){const Y=Ot[A];R=ki.clone(Y.uniforms)}else R=g.uniforms;return R}function S(g,A){let R;for(let Y=0,ee=c.length;Y<ee;Y++){const z=c[Y];if(z.cacheKey===A){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Id(s,A,g,r),c.push(R)),R}function v(g){if(--g.usedTimes===0){const A=c.indexOf(g);c[A]=c[c.length-1],c.pop(),g.destroy()}}function C(g){l.remove(g)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:S,releaseProgram:v,releaseShaderCache:C,programs:c,dispose:N}}function Od(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Bd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function da(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,x,p,h){let _=s[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:p,group:h},s[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=p,_.group=h),e++,_}function a(d,f,m,x,p,h){const _=o(d,f,m,x,p,h);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(d,f,m,x,p,h){const _=o(d,f,m,x,p,h);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,f){t.length>1&&t.sort(d||Bd),n.length>1&&n.sort(f||da),i.length>1&&i.sort(f||da)}function u(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Gd(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new fa,s.set(n,[o])):i>=r.length?(o=new fa,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function kd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Te};break;case"SpotLight":t={position:new D,direction:new D,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Vd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hd=0;function Wd(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Xd(s,e){const t=new kd,n=Vd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,o=new Be,a=new Be;function l(u,d){let f=0,m=0,x=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,h=0,_=0,T=0,b=0,S=0,v=0,C=0,N=0,g=0;u.sort(Wd);const A=d!==!0?Math.PI:1;for(let Y=0,ee=u.length;Y<ee;Y++){const z=u[Y],P=z.color,X=z.intensity,j=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=P.r*X*A,m+=P.g*X*A,x+=P.b*X*A;else if(z.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(z.sh.coefficients[q],X);else if(z.isDirectionalLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const ne=z.shadow,J=n.get(z);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=z.shadow.matrix,S++}i.directional[p]=q,p++}else if(z.isSpotLight){const q=t.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(P).multiplyScalar(X*A),q.distance=j,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,i.spot[_]=q;const ne=z.shadow;if(z.map&&(i.spotLightMap[N]=z.map,N++,ne.updateMatrices(z),z.castShadow&&g++),i.spotLightMatrix[_]=ne.matrix,z.castShadow){const J=n.get(z);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=Z,C++}_++}else if(z.isRectAreaLight){const q=t.get(z);q.color.copy(P).multiplyScalar(X),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),i.rectArea[T]=q,T++}else if(z.isPointLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*A),q.distance=z.distance,q.decay=z.decay,z.castShadow){const ne=z.shadow,J=n.get(z);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,J.shadowCameraNear=ne.camera.near,J.shadowCameraFar=ne.camera.far,i.pointShadow[h]=J,i.pointShadowMap[h]=Z,i.pointShadowMatrix[h]=z.shadow.matrix,v++}i.point[h]=q,h++}else if(z.isHemisphereLight){const q=t.get(z);q.skyColor.copy(z.color).multiplyScalar(X*A),q.groundColor.copy(z.groundColor).multiplyScalar(X*A),i.hemi[b]=q,b++}}T>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=x;const R=i.hash;(R.directionalLength!==p||R.pointLength!==h||R.spotLength!==_||R.rectAreaLength!==T||R.hemiLength!==b||R.numDirectionalShadows!==S||R.numPointShadows!==v||R.numSpotShadows!==C||R.numSpotMaps!==N)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=T,i.point.length=h,i.hemi.length=b,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=C+N-g,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=g,R.directionalLength=p,R.pointLength=h,R.spotLength=_,R.rectAreaLength=T,R.hemiLength=b,R.numDirectionalShadows=S,R.numPointShadows=v,R.numSpotShadows=C,R.numSpotMaps=N,i.version=Hd++)}function c(u,d){let f=0,m=0,x=0,p=0,h=0;const _=d.matrixWorldInverse;for(let T=0,b=u.length;T<b;T++){const S=u[T];if(S.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(S.isSpotLight){const v=i.spot[x];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),x++}else if(S.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),a.identity(),o.copy(S.matrixWorld),o.premultiply(_),a.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const v=i.hemi[h];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),h++}}}return{setup:l,setupView:c,state:i}}function pa(s,e){const t=new Xd(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qd(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new pa(s,e),t.set(r,[l])):o>=a.length?(l=new pa(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Yd extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=al,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jd extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $d(s,e,t){let n=new Yr;const i=new _e,r=new _e,o=new nt,a=new Yd({depthPacking:ol}),l=new jd,c={},u=t.maxTextureSize,d={0:Ct,1:Hn,2:tn},f=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Zd,fragmentShader:Kd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new St;x.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new vt(x,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia,this.render=function(S,v,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const N=s.getRenderTarget(),g=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),R=s.state;R.setBlending(nn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let Y=0,ee=S.length;Y<ee;Y++){const z=S[Y],P=z.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const X=P.getFrameExtents();if(i.multiply(X),r.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,P.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,P.mapSize.y=r.y)),P.map===null){const Z=this.type!==ii?{minFilter:ht,magFilter:ht}:{};P.map=new Nt(i.x,i.y,Z),P.map.texture.name=z.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const j=P.getViewportCount();for(let Z=0;Z<j;Z++){const q=P.getViewport(Z);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),R.viewport(o),P.updateMatrices(z,Z),n=P.getFrustum(),b(v,C,P.camera,z,this.type)}P.isPointLightShadow!==!0&&this.type===ii&&_(P,C),P.needsUpdate=!1}h.needsUpdate=!1,s.setRenderTarget(N,g,A)};function _(S,v){const C=e.update(p);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Nt(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(v,null,C,f,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(v,null,C,m,p,null)}function T(S,v,C,N,g,A){let R=null;const Y=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(Y!==void 0?R=Y:R=C.isPointLight===!0?l:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const ee=R.uuid,z=v.uuid;let P=c[ee];P===void 0&&(P={},c[ee]=P);let X=P[z];X===void 0&&(X=R.clone(),P[z]=X),R=X}return R.visible=v.visible,R.wireframe=v.wireframe,A===ii?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=N,R.farDistance=g),R}function b(S,v,C,N,g){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&g===ii)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),ee=S.material;if(Array.isArray(ee)){const z=Y.groups;for(let P=0,X=z.length;P<X;P++){const j=z[P],Z=ee[j.materialIndex];if(Z&&Z.visible){const q=T(S,Z,N,C.near,C.far,g);s.renderBufferDirect(C,null,Y,q,S,j)}}}else if(ee.visible){const z=T(S,ee,N,C.near,C.far,g);s.renderBufferDirect(C,null,Y,z,S,null)}}const R=S.children;for(let Y=0,ee=R.length;Y<ee;Y++)b(R[Y],v,C,N,g)}}function Jd(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const k=new nt;let K=null;const ce=new nt(0,0,0,0);return{setMask:function(me){K!==me&&!L&&(s.colorMask(me,me,me,me),K=me)},setLocked:function(me){L=me},setClear:function(me,Ne,Qe,it,sn){sn===!0&&(me*=it,Ne*=it,Qe*=it),k.set(me,Ne,Qe,it),ce.equals(k)===!1&&(s.clearColor(me,Ne,Qe,it),ce.copy(k))},reset:function(){L=!1,K=null,ce.set(-1,0,0,0)}}}function r(){let L=!1,k=null,K=null,ce=null;return{setTest:function(me){me?Ae(2929):de(2929)},setMask:function(me){k!==me&&!L&&(s.depthMask(me),k=me)},setFunc:function(me){if(K!==me){switch(me){case Po:s.depthFunc(512);break;case Ro:s.depthFunc(519);break;case Io:s.depthFunc(513);break;case Ur:s.depthFunc(515);break;case Fo:s.depthFunc(514);break;case No:s.depthFunc(518);break;case Uo:s.depthFunc(516);break;case zo:s.depthFunc(517);break;default:s.depthFunc(515)}K=me}},setLocked:function(me){L=me},setClear:function(me){ce!==me&&(s.clearDepth(me),ce=me)},reset:function(){L=!1,k=null,K=null,ce=null}}}function o(){let L=!1,k=null,K=null,ce=null,me=null,Ne=null,Qe=null,it=null,sn=null;return{setTest:function(Oe){L||(Oe?Ae(2960):de(2960))},setMask:function(Oe){k!==Oe&&!L&&(s.stencilMask(Oe),k=Oe)},setFunc:function(Oe,Bt,wt){(K!==Oe||ce!==Bt||me!==wt)&&(s.stencilFunc(Oe,Bt,wt),K=Oe,ce=Bt,me=wt)},setOp:function(Oe,Bt,wt){(Ne!==Oe||Qe!==Bt||it!==wt)&&(s.stencilOp(Oe,Bt,wt),Ne=Oe,Qe=Bt,it=wt)},setLocked:function(Oe){L=Oe},setClear:function(Oe){sn!==Oe&&(s.clearStencil(Oe),sn=Oe)},reset:function(){L=!1,k=null,K=null,ce=null,me=null,Ne=null,Qe=null,it=null,sn=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,p=[],h=null,_=!1,T=null,b=null,S=null,v=null,C=null,N=null,g=null,A=!1,R=null,Y=null,ee=null,z=null,P=null;const X=s.getParameter(35661);let j=!1,Z=0;const q=s.getParameter(7938);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=Z>=2);let ne=null,J={};const O=s.getParameter(3088),V=s.getParameter(2978),$=new nt().fromArray(O),te=new nt().fromArray(V);function se(L,k,K){const ce=new Uint8Array(4),me=s.createTexture();s.bindTexture(L,me),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let Ne=0;Ne<K;Ne++)s.texImage2D(k+Ne,0,6408,1,1,0,6408,5121,ce);return me}const H={};H[3553]=se(3553,3553,1),H[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(Ur),Ye(!1),st(ss),Ae(2884),Je(nn);function Ae(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function de(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function xe(L,k){return m[L]!==k?(s.bindFramebuffer(L,k),m[L]=k,n&&(L===36009&&(m[36160]=k),L===36160&&(m[36009]=k)),!0):!1}function he(L,k){let K=p,ce=!1;if(L)if(K=x.get(k),K===void 0&&(K=[],x.set(k,K)),L.isWebGLMultipleRenderTargets){const me=L.texture;if(K.length!==me.length||K[0]!==36064){for(let Ne=0,Qe=me.length;Ne<Qe;Ne++)K[Ne]=36064+Ne;K.length=me.length,ce=!0}}else K[0]!==36064&&(K[0]=36064,ce=!0);else K[0]!==1029&&(K[0]=1029,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Fe(L){return h!==L?(s.useProgram(L),h=L,!0):!1}const Se={[Bn]:32774,[Mo]:32778,[yo]:32779};if(n)Se[ls]=32775,Se[cs]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[ls]=L.MIN_EXT,Se[cs]=L.MAX_EXT)}const ve={[So]:0,[bo]:1,[wo]:768,[Fa]:770,[Do]:776,[Co]:774,[Eo]:772,[To]:769,[Na]:771,[Lo]:775,[Ao]:773};function Je(L,k,K,ce,me,Ne,Qe,it){if(L===nn){_===!0&&(de(3042),_=!1);return}if(_===!1&&(Ae(3042),_=!0),L!==vo){if(L!==T||it!==A){if((b!==Bn||C!==Bn)&&(s.blendEquation(32774),b=Bn,C=Bn),it)switch(L){case kn:s.blendFuncSeparate(1,771,1,771);break;case Nr:s.blendFunc(1,1);break;case as:s.blendFuncSeparate(0,769,0,1);break;case os:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case kn:s.blendFuncSeparate(770,771,1,771);break;case Nr:s.blendFunc(770,1);break;case as:s.blendFuncSeparate(0,769,0,1);break;case os:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,v=null,N=null,g=null,T=L,A=it}return}me=me||k,Ne=Ne||K,Qe=Qe||ce,(k!==b||me!==C)&&(s.blendEquationSeparate(Se[k],Se[me]),b=k,C=me),(K!==S||ce!==v||Ne!==N||Qe!==g)&&(s.blendFuncSeparate(ve[K],ve[ce],ve[Ne],ve[Qe]),S=K,v=ce,N=Ne,g=Qe),T=L,A=!1}function qe(L,k){L.side===tn?de(2884):Ae(2884);let K=L.side===Ct;k&&(K=!K),Ye(K),L.blending===kn&&L.transparent===!1?Je(nn):Je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ce=L.stencilWrite;c.setTest(ce),ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ae(32926):de(32926)}function Ye(L){R!==L&&(L?s.frontFace(2304):s.frontFace(2305),R=L)}function st(L){L!==go?(Ae(2884),L!==Y&&(L===ss?s.cullFace(1029):L===_o?s.cullFace(1028):s.cullFace(1032))):de(2884),Y=L}function ke(L){L!==ee&&(j&&s.lineWidth(L),ee=L)}function Ue(L,k,K){L?(Ae(32823),(z!==k||P!==K)&&(s.polygonOffset(k,K),z=k,P=K)):de(32823)}function bt(L){L?Ae(3089):de(3089)}function ut(L){L===void 0&&(L=33984+X-1),ne!==L&&(s.activeTexture(L),ne=L)}function w(L,k,K){K===void 0&&(ne===null?K=33984+X-1:K=ne);let ce=J[K];ce===void 0&&(ce={type:void 0,texture:void 0},J[K]=ce),(ce.type!==L||ce.texture!==k)&&(ne!==K&&(s.activeTexture(K),ne=K),s.bindTexture(L,k||H[L]),ce.type=L,ce.texture=k)}function M(){const L=J[ne];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function B(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function E(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){$.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function fe(L){te.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),te.copy(L))}function Ce(L,k){let K=d.get(k);K===void 0&&(K=new WeakMap,d.set(k,K));let ce=K.get(L);ce===void 0&&(ce=s.getUniformBlockIndex(k,L.name),K.set(L,ce))}function Le(L,k){const ce=d.get(k).get(L);u.get(L)!==ce&&(s.uniformBlockBinding(k,ce,L.__bindingPointIndex),u.set(L,ce))}function ze(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ne=null,J={},m={},x=new WeakMap,p=[],h=null,_=!1,T=null,b=null,S=null,v=null,C=null,N=null,g=null,A=!1,R=null,Y=null,ee=null,z=null,P=null,$.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ae,disable:de,bindFramebuffer:xe,drawBuffers:he,useProgram:Fe,setBlending:Je,setMaterial:qe,setFlipSided:Ye,setCullFace:st,setLineWidth:ke,setPolygonOffset:Ue,setScissorTest:bt,activeTexture:ut,bindTexture:w,unbindTexture:M,compressedTexImage2D:B,compressedTexImage3D:Q,texImage2D:ue,texImage3D:oe,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:I,texStorage3D:le,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:E,scissor:pe,viewport:fe,reset:ze}}function Qd(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,M){return _?new OffscreenCanvas(w,M):Gi("canvas")}function b(w,M,B,Q){let ie=1;if((w.width>Q||w.height>Q)&&(ie=Q/Math.max(w.width,w.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ae=M?Vr:Math.floor,Me=ae(ie*w.width),E=ae(ie*w.height);p===void 0&&(p=T(Me,E));const I=B?T(Me,E):p;return I.width=Me,I.height=E,I.getContext("2d").drawImage(w,0,0,Me,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Me+"x"+E+")."),I}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return Us(w.width)&&Us(w.height)}function v(w){return a?!1:w.wrapS!==It||w.wrapT!==It||w.minFilter!==ht&&w.minFilter!==Et}function C(w,M){return w.generateMipmaps&&M&&w.minFilter!==ht&&w.minFilter!==Et}function N(w){s.generateMipmap(w)}function g(w,M,B,Q,ie=!1){if(a===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae=M;return M===6403&&(B===5126&&(ae=33326),B===5131&&(ae=33325),B===5121&&(ae=33321)),M===33319&&(B===5126&&(ae=33328),B===5131&&(ae=33327),B===5121&&(ae=33323)),M===6408&&(B===5126&&(ae=34836),B===5131&&(ae=34842),B===5121&&(ae=Q===Ge&&ie===!1?35907:32856),B===32819&&(ae=32854),B===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(w,M,B){return C(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==ht&&w.minFilter!==Et?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){return w===ht||w===us||w===hs?9728:9729}function Y(w){const M=w.target;M.removeEventListener("dispose",Y),z(M),M.isVideoTexture&&x.delete(M)}function ee(w){const M=w.target;M.removeEventListener("dispose",ee),X(M)}function z(w){const M=n.get(w);if(M.__webglInit===void 0)return;const B=w.source,Q=h.get(B);if(Q){const ie=Q[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(w),Object.keys(Q).length===0&&h.delete(B)}n.remove(w)}function P(w){const M=n.get(w);s.deleteTexture(M.__webglTexture);const B=w.source,Q=h.get(B);delete Q[M.__cacheKey],o.memory.textures--}function X(w){const M=w.texture,B=n.get(w),Q=n.get(M);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(B.__webglFramebuffer[ie]),B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ie=0;ie<B.__webglColorRenderbuffer.length;ie++)B.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[ie]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ie=0,ae=M.length;ie<ae;ie++){const Me=n.get(M[ie]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(M[ie])}n.remove(M),n.remove(w)}let j=0;function Z(){j=0}function q(){const w=j;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),j+=1,w}function ne(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function J(w,M){const B=n.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(B,w,M);return}}t.bindTexture(3553,B.__webglTexture,33984+M)}function O(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){de(B,w,M);return}t.bindTexture(35866,B.__webglTexture,33984+M)}function V(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){de(B,w,M);return}t.bindTexture(32879,B.__webglTexture,33984+M)}function $(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){xe(B,w,M);return}t.bindTexture(34067,B.__webglTexture,33984+M)}const te={[Br]:10497,[It]:33071,[Gr]:33648},se={[ht]:9728,[us]:9984,[hs]:9986,[Et]:9729,[Wo]:9985,[Wi]:9987};function H(w,M,B){if(B?(s.texParameteri(w,10242,te[M.wrapS]),s.texParameteri(w,10243,te[M.wrapT]),(w===32879||w===35866)&&s.texParameteri(w,32882,te[M.wrapR]),s.texParameteri(w,10240,se[M.magFilter]),s.texParameteri(w,10241,se[M.minFilter])):(s.texParameteri(w,10242,33071),s.texParameteri(w,10243,33071),(w===32879||w===35866)&&s.texParameteri(w,32882,33071),(M.wrapS!==It||M.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,10240,R(M.magFilter)),s.texParameteri(w,10241,R(M.minFilter)),M.minFilter!==ht&&M.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(M.type===gn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===si&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ae(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",Y));const Q=M.source;let ie=h.get(Q);ie===void 0&&(ie={},h.set(Q,ie));const ae=ne(M);if(ae!==w.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[ae].usedTimes++;const Me=ie[w.__cacheKey];Me!==void 0&&(ie[w.__cacheKey].usedTimes--,Me.usedTimes===0&&P(M)),w.__cacheKey=ae,w.__webglTexture=ie[ae].texture}return B}function de(w,M,B){let Q=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=35866),M.isData3DTexture&&(Q=32879);const ie=Ae(w,M),ae=M.source;t.bindTexture(Q,w.__webglTexture,33984+B);const Me=n.get(ae);if(ae.version!==Me.__version||ie===!0){t.activeTexture(33984+B),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const E=v(M)&&S(M.image)===!1;let I=b(M.image,E,!1,u);I=ut(M,I);const le=S(I)||a,ue=r.convert(M.format,M.encoding);let oe=r.convert(M.type),pe=g(M.internalFormat,ue,oe,M.encoding,M.isVideoTexture);H(Q,M,le);let fe;const Ce=M.mipmaps,Le=a&&M.isVideoTexture!==!0,ze=Me.__version===void 0||ie===!0,L=A(M,I,le);if(M.isDepthTexture)pe=6402,a?M.type===gn?pe=36012:M.type===mn?pe=33190:M.type===Vn?pe=35056:pe=33189:M.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===_n&&pe===6402&&M.type!==Oa&&M.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=mn,oe=r.convert(M.type)),M.format===qn&&pe===6402&&(pe=34041,M.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Vn,oe=r.convert(M.type))),ze&&(Le?t.texStorage2D(3553,1,pe,I.width,I.height):t.texImage2D(3553,0,pe,I.width,I.height,0,ue,oe,null));else if(M.isDataTexture)if(Ce.length>0&&le){Le&&ze&&t.texStorage2D(3553,L,pe,Ce[0].width,Ce[0].height);for(let k=0,K=Ce.length;k<K;k++)fe=Ce[k],Le?t.texSubImage2D(3553,k,0,0,fe.width,fe.height,ue,oe,fe.data):t.texImage2D(3553,k,pe,fe.width,fe.height,0,ue,oe,fe.data);M.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(3553,L,pe,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,ue,oe,I.data)):t.texImage2D(3553,0,pe,I.width,I.height,0,ue,oe,I.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&ze&&t.texStorage3D(35866,L,pe,Ce[0].width,Ce[0].height,I.depth);for(let k=0,K=Ce.length;k<K;k++)fe=Ce[k],M.format!==Ft?ue!==null?Le?t.compressedTexSubImage3D(35866,k,0,0,0,fe.width,fe.height,I.depth,ue,fe.data,0,0):t.compressedTexImage3D(35866,k,pe,fe.width,fe.height,I.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,k,0,0,0,fe.width,fe.height,I.depth,ue,oe,fe.data):t.texImage3D(35866,k,pe,fe.width,fe.height,I.depth,0,ue,oe,fe.data)}else{Le&&ze&&t.texStorage2D(3553,L,pe,Ce[0].width,Ce[0].height);for(let k=0,K=Ce.length;k<K;k++)fe=Ce[k],M.format!==Ft?ue!==null?Le?t.compressedTexSubImage2D(3553,k,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(3553,k,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,k,0,0,fe.width,fe.height,ue,oe,fe.data):t.texImage2D(3553,k,pe,fe.width,fe.height,0,ue,oe,fe.data)}else if(M.isDataArrayTexture)Le?(ze&&t.texStorage3D(35866,L,pe,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,ue,oe,I.data)):t.texImage3D(35866,0,pe,I.width,I.height,I.depth,0,ue,oe,I.data);else if(M.isData3DTexture)Le?(ze&&t.texStorage3D(32879,L,pe,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,ue,oe,I.data)):t.texImage3D(32879,0,pe,I.width,I.height,I.depth,0,ue,oe,I.data);else if(M.isFramebufferTexture){if(ze)if(Le)t.texStorage2D(3553,L,pe,I.width,I.height);else{let k=I.width,K=I.height;for(let ce=0;ce<L;ce++)t.texImage2D(3553,ce,pe,k,K,0,ue,oe,null),k>>=1,K>>=1}}else if(Ce.length>0&&le){Le&&ze&&t.texStorage2D(3553,L,pe,Ce[0].width,Ce[0].height);for(let k=0,K=Ce.length;k<K;k++)fe=Ce[k],Le?t.texSubImage2D(3553,k,0,0,ue,oe,fe):t.texImage2D(3553,k,pe,ue,oe,fe);M.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(3553,L,pe,I.width,I.height),t.texSubImage2D(3553,0,0,0,ue,oe,I)):t.texImage2D(3553,0,pe,ue,oe,I);C(M,le)&&N(Q),Me.__version=ae.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function xe(w,M,B){if(M.image.length!==6)return;const Q=Ae(w,M),ie=M.source;t.bindTexture(34067,w.__webglTexture,33984+B);const ae=n.get(ie);if(ie.version!==ae.__version||Q===!0){t.activeTexture(33984+B),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const Me=M.isCompressedTexture||M.image[0].isCompressedTexture,E=M.image[0]&&M.image[0].isDataTexture,I=[];for(let k=0;k<6;k++)!Me&&!E?I[k]=b(M.image[k],!1,!0,c):I[k]=E?M.image[k].image:M.image[k],I[k]=ut(M,I[k]);const le=I[0],ue=S(le)||a,oe=r.convert(M.format,M.encoding),pe=r.convert(M.type),fe=g(M.internalFormat,oe,pe,M.encoding),Ce=a&&M.isVideoTexture!==!0,Le=ae.__version===void 0||Q===!0;let ze=A(M,le,ue);H(34067,M,ue);let L;if(Me){Ce&&Le&&t.texStorage2D(34067,ze,fe,le.width,le.height);for(let k=0;k<6;k++){L=I[k].mipmaps;for(let K=0;K<L.length;K++){const ce=L[K];M.format!==Ft?oe!==null?Ce?t.compressedTexSubImage2D(34069+k,K,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(34069+k,K,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+k,K,0,0,ce.width,ce.height,oe,pe,ce.data):t.texImage2D(34069+k,K,fe,ce.width,ce.height,0,oe,pe,ce.data)}}}else{L=M.mipmaps,Ce&&Le&&(L.length>0&&ze++,t.texStorage2D(34067,ze,fe,I[0].width,I[0].height));for(let k=0;k<6;k++)if(E){Ce?t.texSubImage2D(34069+k,0,0,0,I[k].width,I[k].height,oe,pe,I[k].data):t.texImage2D(34069+k,0,fe,I[k].width,I[k].height,0,oe,pe,I[k].data);for(let K=0;K<L.length;K++){const me=L[K].image[k].image;Ce?t.texSubImage2D(34069+k,K+1,0,0,me.width,me.height,oe,pe,me.data):t.texImage2D(34069+k,K+1,fe,me.width,me.height,0,oe,pe,me.data)}}else{Ce?t.texSubImage2D(34069+k,0,0,0,oe,pe,I[k]):t.texImage2D(34069+k,0,fe,oe,pe,I[k]);for(let K=0;K<L.length;K++){const ce=L[K];Ce?t.texSubImage2D(34069+k,K+1,0,0,oe,pe,ce.image[k]):t.texImage2D(34069+k,K+1,fe,oe,pe,ce.image[k])}}}C(M,ue)&&N(34067),ae.__version=ie.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function he(w,M,B,Q,ie){const ae=r.convert(B.format,B.encoding),Me=r.convert(B.type),E=g(B.internalFormat,ae,Me,B.encoding);n.get(M).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,E,M.width,M.height,M.depth,0,ae,Me,null):t.texImage2D(ie,0,E,M.width,M.height,0,ae,Me,null)),t.bindFramebuffer(36160,w),Ue(M)?f.framebufferTexture2DMultisampleEXT(36160,Q,ie,n.get(B).__webglTexture,0,ke(M)):(ie===3553||ie>=34069&&ie<=34074)&&s.framebufferTexture2D(36160,Q,ie,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(w,M,B){if(s.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let Q=33189;if(B||Ue(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===gn?Q=36012:ie.type===mn&&(Q=33190));const ae=ke(M);Ue(M)?f.renderbufferStorageMultisampleEXT(36161,ae,Q,M.width,M.height):s.renderbufferStorageMultisample(36161,ae,Q,M.width,M.height)}else s.renderbufferStorage(36161,Q,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const Q=ke(M);B&&Ue(M)===!1?s.renderbufferStorageMultisample(36161,Q,35056,M.width,M.height):Ue(M)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,M.width,M.height):s.renderbufferStorage(36161,34041,M.width,M.height),s.framebufferRenderbuffer(36160,33306,36161,w)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0;ie<Q.length;ie++){const ae=Q[ie],Me=r.convert(ae.format,ae.encoding),E=r.convert(ae.type),I=g(ae.internalFormat,Me,E,ae.encoding),le=ke(M);B&&Ue(M)===!1?s.renderbufferStorageMultisample(36161,le,I,M.width,M.height):Ue(M)?f.renderbufferStorageMultisampleEXT(36161,le,I,M.width,M.height):s.renderbufferStorage(36161,I,M.width,M.height)}}s.bindRenderbuffer(36161,null)}function Se(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const Q=n.get(M.depthTexture).__webglTexture,ie=ke(M);if(M.depthTexture.format===_n)Ue(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ie):s.framebufferTexture2D(36160,36096,3553,Q,0);else if(M.depthTexture.format===qn)Ue(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ie):s.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function ve(w){const M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=s.createRenderbuffer(),Fe(M.__webglDepthbuffer[Q],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Fe(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Je(w,M,B){const Q=n.get(w);M!==void 0&&he(Q.__webglFramebuffer,w,w.texture,36064,3553),B!==void 0&&ve(w)}function qe(w){const M=w.texture,B=n.get(w),Q=n.get(M);w.addEventListener("dispose",ee),w.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=M.version,o.memory.textures++);const ie=w.isWebGLCubeRenderTarget===!0,ae=w.isWebGLMultipleRenderTargets===!0,Me=S(w)||a;if(ie){B.__webglFramebuffer=[];for(let E=0;E<6;E++)B.__webglFramebuffer[E]=s.createFramebuffer()}else{if(B.__webglFramebuffer=s.createFramebuffer(),ae)if(i.drawBuffers){const E=w.texture;for(let I=0,le=E.length;I<le;I++){const ue=n.get(E[I]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ue(w)===!1){const E=ae?M:[M];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let I=0;I<E.length;I++){const le=E[I];B.__webglColorRenderbuffer[I]=s.createRenderbuffer(),s.bindRenderbuffer(36161,B.__webglColorRenderbuffer[I]);const ue=r.convert(le.format,le.encoding),oe=r.convert(le.type),pe=g(le.internalFormat,ue,oe,le.encoding,w.isXRRenderTarget===!0),fe=ke(w);s.renderbufferStorageMultisample(36161,fe,pe,w.width,w.height),s.framebufferRenderbuffer(36160,36064+I,36161,B.__webglColorRenderbuffer[I])}s.bindRenderbuffer(36161,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,Q.__webglTexture),H(34067,M,Me);for(let E=0;E<6;E++)he(B.__webglFramebuffer[E],w,M,36064,34069+E);C(M,Me)&&N(34067),t.unbindTexture()}else if(ae){const E=w.texture;for(let I=0,le=E.length;I<le;I++){const ue=E[I],oe=n.get(ue);t.bindTexture(3553,oe.__webglTexture),H(3553,ue,Me),he(B.__webglFramebuffer,w,ue,36064+I,3553),C(ue,Me)&&N(3553)}t.unbindTexture()}else{let E=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?E=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,Q.__webglTexture),H(E,M,Me),he(B.__webglFramebuffer,w,M,36064,E),C(M,Me)&&N(E),t.unbindTexture()}w.depthBuffer&&ve(w)}function Ye(w){const M=S(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0,ie=B.length;Q<ie;Q++){const ae=B[Q];if(C(ae,M)){const Me=w.isWebGLCubeRenderTarget?34067:3553,E=n.get(ae).__webglTexture;t.bindTexture(Me,E),N(Me),t.unbindTexture()}}}function st(w){if(a&&w.samples>0&&Ue(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,Q=w.height;let ie=16384;const ae=[],Me=w.stencilBuffer?33306:36096,E=n.get(w),I=w.isWebGLMultipleRenderTargets===!0;if(I)for(let le=0;le<M.length;le++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),s.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let le=0;le<M.length;le++){ae.push(36064+le),w.depthBuffer&&ae.push(Me);const ue=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(ue===!1&&(w.depthBuffer&&(ie|=256),w.stencilBuffer&&(ie|=1024)),I&&s.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[le]),ue===!0&&(s.invalidateFramebuffer(36008,[Me]),s.invalidateFramebuffer(36009,[Me])),I){const oe=n.get(M[le]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,oe,0)}s.blitFramebuffer(0,0,B,Q,0,0,B,Q,ie,9728),m&&s.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let le=0;le<M.length;le++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+le,36161,E.__webglColorRenderbuffer[le]);const ue=n.get(M[le]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),s.framebufferTexture2D(36009,36064+le,3553,ue,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function ke(w){return Math.min(d,w.samples)}function Ue(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(w){const M=o.render.frame;x.get(w)!==M&&(x.set(w,M),w.update())}function ut(w,M){const B=w.encoding,Q=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===kr||B!==Mn&&(B===Ge?a===!1?e.has("EXT_sRGB")===!0&&Q===Ft?(w.format=kr,w.minFilter=Et,w.generateMipmaps=!1):M=Va.sRGBToLinear(M):(Q!==Ft||ie!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Je,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ue}function ef(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===vn)return 5121;if(r===jo)return 32819;if(r===Zo)return 32820;if(r===Xo)return 5120;if(r===qo)return 5122;if(r===Oa)return 5123;if(r===Yo)return 5124;if(r===mn)return 5125;if(r===gn)return 5126;if(r===si)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ko)return 6406;if(r===Ft)return 6408;if(r===Jo)return 6409;if(r===Qo)return 6410;if(r===_n)return 6402;if(r===qn)return 34041;if(r===$o)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===kr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===el)return 6403;if(r===tl)return 36244;if(r===nl)return 33319;if(r===il)return 33320;if(r===rl)return 36249;if(r===Qi||r===er||r===tr||r===nr)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===er)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ds||r===fs||r===ps||r===ms)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ds)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ps)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ms)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gs||r===_s)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===gs)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_s)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xs||r===vs||r===Ms||r===ys||r===Ss||r===bs||r===ws||r===Ts||r===Es||r===As||r===Cs||r===Ls||r===Ds||r===Ps)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===xs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ms)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ys)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ss)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ws)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ts)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Es)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===As)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ls)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ds)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ps)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Rs)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Vn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class tf extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fi extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nf={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n),_=this._getHandJoint(c,p);h!==null&&(_.matrix.fromArray(h.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=h.radius),_.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rf extends yt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:_n,u!==_n&&u!==qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_n&&(n=mn),n===void 0&&u===qn&&(n=Vn),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}}class sf extends Sn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,d=null,f=null,m=null;const x=t.getContextAttributes();let p=null,h=null;const _=[],T=[],b=new Set,S=new Map,v=new At;v.layers.enable(1),v.viewport=new nt;const C=new At;C.layers.enable(2),C.viewport=new nt;const N=[v,C],g=new tf;g.layers.enable(1),g.layers.enable(2);let A=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let V=_[O];return V===void 0&&(V=new Pr,_[O]=V),V.getTargetRaySpace()},this.getControllerGrip=function(O){let V=_[O];return V===void 0&&(V=new Pr,_[O]=V),V.getGripSpace()},this.getHand=function(O){let V=_[O];return V===void 0&&(V=new Pr,_[O]=V),V.getHandSpace()};function Y(O){const V=T.indexOf(O.inputSource);if(V===-1)return;const $=_[V];$!==void 0&&$.dispatchEvent({type:O.type,data:O.inputSource})}function ee(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",z);for(let O=0;O<_.length;O++){const V=T[O];V!==null&&(T[O]=null,_[O].disconnect(V))}A=null,R=null,e.setRenderTarget(p),f=null,d=null,u=null,i=null,h=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),h=new Nt(f.framebufferWidth,f.framebufferHeight,{format:Ft,type:vn,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let V=null,$=null,te=null;x.depth&&(te=x.stencil?35056:33190,V=x.stencil?qn:_n,$=x.stencil?Vn:mn);const se={colorFormat:32856,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(se),i.updateRenderState({layers:[d]}),h=new Nt(d.textureWidth,d.textureHeight,{format:Ft,type:vn,depthTexture:new rf(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const H=e.properties.get(h);H.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(O){for(let V=0;V<O.removed.length;V++){const $=O.removed[V],te=T.indexOf($);te>=0&&(T[te]=null,_[te].disconnect($))}for(let V=0;V<O.added.length;V++){const $=O.added[V];let te=T.indexOf($);if(te===-1){for(let H=0;H<_.length;H++)if(H>=T.length){T.push($),te=H;break}else if(T[H]===null){T[H]=$,te=H;break}if(te===-1)break}const se=_[te];se&&se.connect($)}}const P=new D,X=new D;function j(O,V,$){P.setFromMatrixPosition(V.matrixWorld),X.setFromMatrixPosition($.matrixWorld);const te=P.distanceTo(X),se=V.projectionMatrix.elements,H=$.projectionMatrix.elements,Ae=se[14]/(se[10]-1),de=se[14]/(se[10]+1),xe=(se[9]+1)/se[5],he=(se[9]-1)/se[5],Fe=(se[8]-1)/se[0],Se=(H[8]+1)/H[0],ve=Ae*Fe,Je=Ae*Se,qe=te/(-Fe+Se),Ye=qe*-Fe;V.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ye),O.translateZ(qe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const st=Ae+qe,ke=de+qe,Ue=ve-Ye,bt=Je+(te-Ye),ut=xe*de/ke*st,w=he*de/ke*st;O.projectionMatrix.makePerspective(Ue,bt,ut,w,st,ke)}function Z(O,V){V===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(V.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;g.near=C.near=v.near=O.near,g.far=C.far=v.far=O.far,(A!==g.near||R!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),A=g.near,R=g.far);const V=O.parent,$=g.cameras;Z(g,V);for(let se=0;se<$.length;se++)Z($[se],V);g.matrixWorld.decompose(g.position,g.quaternion,g.scale),O.matrix.copy(g.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const te=O.children;for(let se=0,H=te.length;se<H;se++)te[se].updateMatrixWorld(!0);$.length===2?j(g,v,C):g.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return g},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.getPlanes=function(){return b};let q=null;function ne(O,V){if(c=V.getViewerPose(l||o),m=V,c!==null){const $=c.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let te=!1;$.length!==g.cameras.length&&(g.cameras.length=0,te=!0);for(let se=0;se<$.length;se++){const H=$[se];let Ae=null;if(f!==null)Ae=f.getViewport(H);else{const xe=u.getViewSubImage(d,H);Ae=xe.viewport,se===0&&(e.setRenderTargetTextures(h,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let de=N[se];de===void 0&&(de=new At,de.layers.enable(se),de.viewport=new nt,N[se]=de),de.matrix.fromArray(H.transform.matrix),de.projectionMatrix.fromArray(H.projectionMatrix),de.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),se===0&&g.matrix.copy(de.matrix),te===!0&&g.cameras.push(de)}}for(let $=0;$<_.length;$++){const te=T[$],se=_[$];te!==null&&se!==void 0&&se.update(te,V,l||o)}if(q&&q(O,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let $=null;for(const te of b)V.detectedPlanes.has(te)||($===null&&($=[]),$.push(te));if($!==null)for(const te of $)b.delete(te),S.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of V.detectedPlanes)if(!b.has(te))b.add(te),S.set(te,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const se=S.get(te);te.lastChangedTime>se&&(S.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}m=null}const J=new Ja;J.setAnimationLoop(ne),this.setAnimationLoop=function(O){q=O},this.dispose=function(){}}}function af(s,e){function t(p,h){h.color.getRGB(p.fogColor.value,Za(s)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,_,T,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),u(p,h)):h.isMeshPhongMaterial?(i(p,h),c(p,h)):h.isMeshStandardMaterial?(i(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,b)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),x(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,_,T):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Ct&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Ct&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let T;h.map?T=h.map:h.specularMap?T=h.specularMap:h.displacementMap?T=h.displacementMap:h.normalMap?T=h.normalMap:h.bumpMap?T=h.bumpMap:h.roughnessMap?T=h.roughnessMap:h.metalnessMap?T=h.metalnessMap:h.alphaMap?T=h.alphaMap:h.emissiveMap?T=h.emissiveMap:h.clearcoatMap?T=h.clearcoatMap:h.clearcoatNormalMap?T=h.clearcoatNormalMap:h.clearcoatRoughnessMap?T=h.clearcoatRoughnessMap:h.iridescenceMap?T=h.iridescenceMap:h.iridescenceThicknessMap?T=h.iridescenceThicknessMap:h.specularIntensityMap?T=h.specularIntensityMap:h.specularColorMap?T=h.specularColorMap:h.transmissionMap?T=h.transmissionMap:h.thicknessMap?T=h.thicknessMap:h.sheenColorMap?T=h.sheenColorMap:h.sheenRoughnessMap&&(T=h.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let b;h.aoMap?b=h.aoMap:h.lightMap&&(b=h.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,_,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=T*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let b;h.map?b=h.map:h.alphaMap&&(b=h.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Ct&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function of(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(T,b){const S=b.program;n.uniformBlockBinding(T,S)}function c(T,b){let S=i[T.id];S===void 0&&(x(T),S=u(T),i[T.id]=S,T.addEventListener("dispose",h));const v=b.program;n.updateUBOMapping(T,v);const C=e.render.frame;r[T.id]!==C&&(f(T),r[T.id]=C)}function u(T){const b=d();T.__bindingPointIndex=b;const S=s.createBuffer(),v=T.__size,C=T.usage;return s.bindBuffer(35345,S),s.bufferData(35345,v,C),s.bindBuffer(35345,null),s.bindBufferBase(35345,b,S),S}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=i[T.id],S=T.uniforms,v=T.__cache;s.bindBuffer(35345,b);for(let C=0,N=S.length;C<N;C++){const g=S[C];if(m(g,C,v)===!0){const A=g.value,R=g.__offset;typeof A=="number"?(g.__data[0]=A,s.bufferSubData(35345,R,g.__data)):(g.value.isMatrix3?(g.__data[0]=g.value.elements[0],g.__data[1]=g.value.elements[1],g.__data[2]=g.value.elements[2],g.__data[3]=g.value.elements[0],g.__data[4]=g.value.elements[3],g.__data[5]=g.value.elements[4],g.__data[6]=g.value.elements[5],g.__data[7]=g.value.elements[0],g.__data[8]=g.value.elements[6],g.__data[9]=g.value.elements[7],g.__data[10]=g.value.elements[8],g.__data[11]=g.value.elements[0]):A.toArray(g.__data),s.bufferSubData(35345,R,g.__data))}}s.bindBuffer(35345,null)}function m(T,b,S){const v=T.value;if(S[b]===void 0)return typeof v=="number"?S[b]=v:S[b]=v.clone(),!0;if(typeof v=="number"){if(S[b]!==v)return S[b]=v,!0}else{const C=S[b];if(C.equals(v)===!1)return C.copy(v),!0}return!1}function x(T){const b=T.uniforms;let S=0;const v=16;let C=0;for(let N=0,g=b.length;N<g;N++){const A=b[N],R=p(A);if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,N>0){C=S%v;const Y=v-C;C!==0&&Y-R.boundary<0&&(S+=v-C,A.__offset=S)}S+=R.storage}return C=S%v,C>0&&(S+=v-C),T.__size=S,T.__cache={},this}function p(T){const b=T.value,S={boundary:0,storage:0};return typeof b=="number"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function h(T){const b=T.target;b.removeEventListener("dispose",h);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function _(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}function lf(){const s=Gi("canvas");return s.style.display="block",s}function cf(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:lf(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let d=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.physicallyCorrectLights=!1,this.toneMapping=Yt,this.toneMappingExposure=1;const p=this;let h=!1,_=0,T=0,b=null,S=-1,v=null;const C=new nt,N=new nt;let g=null,A=e.width,R=e.height,Y=1,ee=null,z=null;const P=new nt(0,0,A,R),X=new nt(0,0,A,R);let j=!1;const Z=new Yr;let q=!1,ne=!1,J=null;const O=new Be,V=new _e,$=new D,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return b===null?Y:1}let H=t;function Ae(y,U){for(let G=0;G<y.length;G++){const F=y[G],W=e.getContext(F,U);if(W!==null)return W}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wr}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),H===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),H=Ae(U,y),H===null)throw Ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let de,xe,he,Fe,Se,ve,Je,qe,Ye,st,ke,Ue,bt,ut,w,M,B,Q,ie,ae,Me,E,I,le;function ue(){de=new xh(H),xe=new dh(H,de,s),de.init(xe),E=new ef(H,de,xe),he=new Jd(H,de,xe),Fe=new yh,Se=new Od,ve=new Qd(H,de,he,Se,xe,E,Fe),Je=new ph(p),qe=new _h(p),Ye=new Dl(H,xe),I=new uh(H,de,Ye,xe),st=new vh(H,Ye,Fe,I),ke=new Th(H,st,Ye,Fe),ie=new wh(H,xe,ve),M=new fh(Se),Ue=new zd(p,Je,qe,de,xe,I,M),bt=new af(p,Se),ut=new Gd,w=new qd(de,xe),Q=new ch(p,Je,qe,he,ke,u,o),B=new $d(p,ke,xe),le=new of(H,Fe,xe,he),ae=new hh(H,de,Fe,xe),Me=new Mh(H,de,Fe,xe),Fe.programs=Ue.programs,p.capabilities=xe,p.extensions=de,p.properties=Se,p.renderLists=ut,p.shadowMap=B,p.state=he,p.info=Fe}ue();const oe=new sf(p,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const y=de.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=de.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(A,R,!1))},this.getSize=function(y){return y.set(A,R)},this.setSize=function(y,U,G){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=y,R=U,e.width=Math.floor(y*Y),e.height=Math.floor(U*Y),G!==!1&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(A*Y,R*Y).floor()},this.setDrawingBufferSize=function(y,U,G){A=y,R=U,Y=G,e.width=Math.floor(y*G),e.height=Math.floor(U*G),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(P)},this.setViewport=function(y,U,G,F){y.isVector4?P.set(y.x,y.y,y.z,y.w):P.set(y,U,G,F),he.viewport(C.copy(P).multiplyScalar(Y).floor())},this.getScissor=function(y){return y.copy(X)},this.setScissor=function(y,U,G,F){y.isVector4?X.set(y.x,y.y,y.z,y.w):X.set(y,U,G,F),he.scissor(N.copy(X).multiplyScalar(Y).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(y){he.setScissorTest(j=y)},this.setOpaqueSort=function(y){ee=y},this.setTransparentSort=function(y){z=y},this.getClearColor=function(y){return y.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(y=!0,U=!0,G=!0){let F=0;y&&(F|=16384),U&&(F|=256),G&&(F|=1024),H.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),ut.dispose(),w.dispose(),Se.dispose(),Je.dispose(),qe.dispose(),ke.dispose(),I.dispose(),le.dispose(),Ue.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ce),oe.removeEventListener("sessionend",me),J&&(J.dispose(),J=null),Ne.stop()};function pe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const y=Fe.autoReset,U=B.enabled,G=B.autoUpdate,F=B.needsUpdate,W=B.type;ue(),Fe.autoReset=y,B.enabled=U,B.autoUpdate=G,B.needsUpdate=F,B.type=W}function Ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Le(y){const U=y.target;U.removeEventListener("dispose",Le),ze(U)}function ze(y){L(y),Se.remove(y)}function L(y){const U=Se.get(y).programs;U!==void 0&&(U.forEach(function(G){Ue.releaseProgram(G)}),y.isShaderMaterial&&Ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,G,F,W,ge){U===null&&(U=te);const ye=W.isMesh&&W.matrixWorld.determinant()<0,we=ho(y,U,G,F,W);he.setMaterial(F,ye);let Ee=G.index,Ie=1;F.wireframe===!0&&(Ee=st.getWireframeAttribute(G),Ie=2);const De=G.drawRange,Pe=G.attributes.position;let He=De.start*Ie,ft=(De.start+De.count)*Ie;ge!==null&&(He=Math.max(He,ge.start*Ie),ft=Math.min(ft,(ge.start+ge.count)*Ie)),Ee!==null?(He=Math.max(He,0),ft=Math.min(ft,Ee.count)):Pe!=null&&(He=Math.max(He,0),ft=Math.min(ft,Pe.count));const Gt=ft-He;if(Gt<0||Gt===1/0)return;I.setup(W,F,we,G,Ee);let an,We=ae;if(Ee!==null&&(an=Ye.get(Ee),We=Me,We.setIndex(an)),W.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*se()),We.setMode(1)):We.setMode(4);else if(W.isLine){let Re=F.linewidth;Re===void 0&&(Re=1),he.setLineWidth(Re*se()),W.isLineSegments?We.setMode(1):W.isLineLoop?We.setMode(2):We.setMode(3)}else W.isPoints?We.setMode(0):W.isSprite&&We.setMode(4);if(W.isInstancedMesh)We.renderInstances(He,Gt,W.count);else if(G.isInstancedBufferGeometry){const Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Zi=Math.min(G.instanceCount,Re);We.renderInstances(He,Gt,Zi)}else We.render(He,Gt)},this.compile=function(y,U){function G(F,W,ge){F.transparent===!0&&F.side===tn?(F.side=Ct,F.needsUpdate=!0,wt(F,W,ge),F.side=Hn,F.needsUpdate=!0,wt(F,W,ge),F.side=tn):wt(F,W,ge)}f=w.get(y),f.init(),x.push(f),y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(p.physicallyCorrectLights),y.traverse(function(F){const W=F.material;if(W)if(Array.isArray(W))for(let ge=0;ge<W.length;ge++){const ye=W[ge];G(ye,y,F)}else G(W,y,F)}),x.pop(),f=null};let k=null;function K(y){k&&k(y)}function ce(){Ne.stop()}function me(){Ne.start()}const Ne=new Ja;Ne.setAnimationLoop(K),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(y){k=y,oe.setAnimationLoop(y),y===null?Ne.stop():Ne.start()},oe.addEventListener("sessionstart",ce),oe.addEventListener("sessionend",me),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,U,b),f=w.get(y,x.length),f.init(),x.push(f),O.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(O),ne=this.localClippingEnabled,q=M.init(this.clippingPlanes,ne,U),d=ut.get(y,m.length),d.init(),m.push(d),Qe(y,U,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(ee,z),q===!0&&M.beginShadows();const G=f.state.shadowsArray;if(B.render(G,y,U),q===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(d,y),f.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let W=0,ge=F.length;W<ge;W++){const ye=F[W];it(d,y,ye,ye.viewport)}}else it(d,y,U);b!==null&&(ve.updateMultisampleRenderTarget(b),ve.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(p,y,U),I.resetDefaultState(),S=-1,v=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Qe(y,U,G,F){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){F&&$.setFromMatrixPosition(y.matrixWorld).applyMatrix4(O);const ye=ke.update(y),we=y.material;we.visible&&d.push(y,ye,we,G,$.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Fe.render.frame&&(y.skeleton.update(),y.skeleton.frame=Fe.render.frame),!y.frustumCulled||Z.intersectsObject(y))){F&&$.setFromMatrixPosition(y.matrixWorld).applyMatrix4(O);const ye=ke.update(y),we=y.material;if(Array.isArray(we)){const Ee=ye.groups;for(let Ie=0,De=Ee.length;Ie<De;Ie++){const Pe=Ee[Ie],He=we[Pe.materialIndex];He&&He.visible&&d.push(y,ye,He,G,$.z,Pe)}}else we.visible&&d.push(y,ye,we,G,$.z,null)}}const ge=y.children;for(let ye=0,we=ge.length;ye<we;ye++)Qe(ge[ye],U,G,F)}function it(y,U,G,F){const W=y.opaque,ge=y.transmissive,ye=y.transparent;f.setupLightsView(G),ge.length>0&&sn(W,U,G),F&&he.viewport(C.copy(F)),W.length>0&&Oe(W,U,G),ge.length>0&&Oe(ge,U,G),ye.length>0&&Oe(ye,U,G),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function sn(y,U,G){const F=xe.isWebGL2;J===null&&(J=new Nt(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?si:vn,minFilter:Wi,samples:F&&r===!0?4:0})),p.getDrawingBufferSize(V),F?J.setSize(V.x,V.y):J.setSize(Vr(V.x),Vr(V.y));const W=p.getRenderTarget();p.setRenderTarget(J),p.clear();const ge=p.toneMapping;p.toneMapping=Yt,Oe(y,U,G),p.toneMapping=ge,ve.updateMultisampleRenderTarget(J),ve.updateRenderTargetMipmap(J),p.setRenderTarget(W)}function Oe(y,U,G){const F=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ge=y.length;W<ge;W++){const ye=y[W],we=ye.object,Ee=ye.geometry,Ie=F===null?ye.material:F,De=ye.group;we.layers.test(G.layers)&&Bt(we,U,G,Ee,Ie,De)}}function Bt(y,U,G,F,W,ge){y.onBeforeRender(p,U,G,F,W,ge),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(p,U,G,F,y,ge),W.transparent===!0&&W.side===tn?(W.side=Ct,W.needsUpdate=!0,p.renderBufferDirect(G,U,F,W,y,ge),W.side=Hn,W.needsUpdate=!0,p.renderBufferDirect(G,U,F,W,y,ge),W.side=tn):p.renderBufferDirect(G,U,F,W,y,ge),y.onAfterRender(p,U,G,F,W,ge)}function wt(y,U,G){U.isScene!==!0&&(U=te);const F=Se.get(y),W=f.state.lights,ge=f.state.shadowsArray,ye=W.state.version,we=Ue.getParameters(y,W.state,ge,U,G),Ee=Ue.getProgramCacheKey(we);let Ie=F.programs;F.environment=y.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(y.isMeshStandardMaterial?qe:Je).get(y.envMap||F.environment),Ie===void 0&&(y.addEventListener("dispose",Le),Ie=new Map,F.programs=Ie);let De=Ie.get(Ee);if(De!==void 0){if(F.currentProgram===De&&F.lightsStateVersion===ye)return ns(y,we),De}else we.uniforms=Ue.getUniforms(y),y.onBuild(G,we,p),y.onBeforeCompile(we,p),De=Ue.acquireProgram(we,Ee),Ie.set(Ee,De),F.uniforms=we.uniforms;const Pe=F.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=M.uniform),ns(y,we),F.needsLights=po(y),F.lightsStateVersion=ye,F.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix);const He=De.getUniforms(),ft=Bi.seqWithValue(He.seq,Pe);return F.currentProgram=De,F.uniformsList=ft,De}function ns(y,U){const G=Se.get(y);G.outputEncoding=U.outputEncoding,G.instancing=U.instancing,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function ho(y,U,G,F,W){U.isScene!==!0&&(U=te),ve.resetTextureUnits();const ge=U.fog,ye=F.isMeshStandardMaterial?U.environment:null,we=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Mn,Ee=(F.isMeshStandardMaterial?qe:Je).get(F.envMap||ye),Ie=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!F.normalMap&&!!G.attributes.tangent,Pe=!!G.morphAttributes.position,He=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color,Gt=F.toneMapped?p.toneMapping:Yt,an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,We=an!==void 0?an.length:0,Re=Se.get(F),Zi=f.state.lights;if(q===!0&&(ne===!0||y!==v)){const pt=y===v&&F.id===S;M.setState(F,y,pt)}let et=!1;F.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Zi.state.version||Re.outputEncoding!==we||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ee||F.fog===!0&&Re.fog!==ge||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==M.numPlanes||Re.numIntersection!==M.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==De||Re.morphTargets!==Pe||Re.morphNormals!==He||Re.morphColors!==ft||Re.toneMapping!==Gt||xe.isWebGL2===!0&&Re.morphTargetsCount!==We)&&(et=!0):(et=!0,Re.__version=F.version);let on=Re.currentProgram;et===!0&&(on=wt(F,U,W));let is=!1,$n=!1,Ki=!1;const at=on.getUniforms(),ln=Re.uniforms;if(he.useProgram(on.program)&&(is=!0,$n=!0,Ki=!0),F.id!==S&&(S=F.id,$n=!0),is||v!==y){if(at.setValue(H,"projectionMatrix",y.projectionMatrix),xe.logarithmicDepthBuffer&&at.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),v!==y&&(v=y,$n=!0,Ki=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const pt=at.map.cameraPosition;pt!==void 0&&pt.setValue(H,$.setFromMatrixPosition(y.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&at.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||W.isSkinnedMesh)&&at.setValue(H,"viewMatrix",y.matrixWorldInverse)}if(W.isSkinnedMesh){at.setOptional(H,W,"bindMatrix"),at.setOptional(H,W,"bindMatrixInverse");const pt=W.skeleton;pt&&(xe.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),at.setValue(H,"boneTexture",pt.boneTexture,ve),at.setValue(H,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $i=G.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0&&xe.isWebGL2===!0)&&ie.update(W,G,F,on),($n||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,at.setValue(H,"receiveShadow",W.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ln.envMap.value=Ee,ln.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),$n&&(at.setValue(H,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&fo(ln,Ki),ge&&F.fog===!0&&bt.refreshFogUniforms(ln,ge),bt.refreshMaterialUniforms(ln,F,Y,R,J),Bi.upload(H,Re.uniformsList,ln,ve)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Bi.upload(H,Re.uniformsList,ln,ve),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&at.setValue(H,"center",W.center),at.setValue(H,"modelViewMatrix",W.modelViewMatrix),at.setValue(H,"normalMatrix",W.normalMatrix),at.setValue(H,"modelMatrix",W.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const pt=F.uniformsGroups;for(let Ji=0,mo=pt.length;Ji<mo;Ji++)if(xe.isWebGL2){const rs=pt[Ji];le.update(rs,on),le.bind(rs,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function fo(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function po(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,U,G){Se.get(y.texture).__webglTexture=U,Se.get(y.depthTexture).__webglTexture=G;const F=Se.get(y);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=G===void 0,F.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const G=Se.get(y);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,G=0){b=y,_=U,T=G;let F=!0,W=null,ge=!1,ye=!1;if(y){const Ee=Se.get(y);Ee.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),F=!1):Ee.__webglFramebuffer===void 0?ve.setupRenderTarget(y):Ee.__hasExternalTextures&&ve.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);const Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const De=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(W=De[U],ge=!0):xe.isWebGL2&&y.samples>0&&ve.useMultisampledRTT(y)===!1?W=Se.get(y).__webglMultisampledFramebuffer:W=De,C.copy(y.viewport),N.copy(y.scissor),g=y.scissorTest}else C.copy(P).multiplyScalar(Y).floor(),N.copy(X).multiplyScalar(Y).floor(),g=j;if(he.bindFramebuffer(36160,W)&&xe.drawBuffers&&F&&he.drawBuffers(y,W),he.viewport(C),he.scissor(N),he.setScissorTest(g),ge){const Ee=Se.get(y.texture);H.framebufferTexture2D(36160,36064,34069+U,Ee.__webglTexture,G)}else if(ye){const Ee=Se.get(y.texture),Ie=U||0;H.framebufferTextureLayer(36160,36064,Ee.__webglTexture,G||0,Ie)}S=-1},this.readRenderTargetPixels=function(y,U,G,F,W,ge,ye){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){he.bindFramebuffer(36160,we);try{const Ee=y.texture,Ie=Ee.format,De=Ee.type;if(Ie!==Ft&&E.convert(Ie)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=De===si&&(de.has("EXT_color_buffer_half_float")||xe.isWebGL2&&de.has("EXT_color_buffer_float"));if(De!==vn&&E.convert(De)!==H.getParameter(35738)&&!(De===gn&&(xe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-F&&G>=0&&G<=y.height-W&&H.readPixels(U,G,F,W,E.convert(Ie),E.convert(De),ge)}finally{const Ee=b!==null?Se.get(b).__webglFramebuffer:null;he.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(y,U,G=0){const F=Math.pow(2,-G),W=Math.floor(U.image.width*F),ge=Math.floor(U.image.height*F);ve.setTexture2D(U,0),H.copyTexSubImage2D(3553,G,0,0,y.x,y.y,W,ge),he.unbindTexture()},this.copyTextureToTexture=function(y,U,G,F=0){const W=U.image.width,ge=U.image.height,ye=E.convert(G.format),we=E.convert(G.type);ve.setTexture2D(G,0),H.pixelStorei(37440,G.flipY),H.pixelStorei(37441,G.premultiplyAlpha),H.pixelStorei(3317,G.unpackAlignment),U.isDataTexture?H.texSubImage2D(3553,F,y.x,y.y,W,ge,ye,we,U.image.data):U.isCompressedTexture?H.compressedTexSubImage2D(3553,F,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):H.texSubImage2D(3553,F,y.x,y.y,ye,we,U.image),F===0&&G.generateMipmaps&&H.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(y,U,G,F,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=y.max.x-y.min.x+1,ye=y.max.y-y.min.y+1,we=y.max.z-y.min.z+1,Ee=E.convert(F.format),Ie=E.convert(F.type);let De;if(F.isData3DTexture)ve.setTexture3D(F,0),De=32879;else if(F.isDataArrayTexture)ve.setTexture2DArray(F,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,F.flipY),H.pixelStorei(37441,F.premultiplyAlpha),H.pixelStorei(3317,F.unpackAlignment);const Pe=H.getParameter(3314),He=H.getParameter(32878),ft=H.getParameter(3316),Gt=H.getParameter(3315),an=H.getParameter(32877),We=G.isCompressedTexture?G.mipmaps[0]:G.image;H.pixelStorei(3314,We.width),H.pixelStorei(32878,We.height),H.pixelStorei(3316,y.min.x),H.pixelStorei(3315,y.min.y),H.pixelStorei(32877,y.min.z),G.isDataTexture||G.isData3DTexture?H.texSubImage3D(De,W,U.x,U.y,U.z,ge,ye,we,Ee,Ie,We.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(De,W,U.x,U.y,U.z,ge,ye,we,Ee,We.data)):H.texSubImage3D(De,W,U.x,U.y,U.z,ge,ye,we,Ee,Ie,We),H.pixelStorei(3314,Pe),H.pixelStorei(32878,He),H.pixelStorei(3316,ft),H.pixelStorei(3315,Gt),H.pixelStorei(32877,an),W===0&&F.generateMipmaps&&H.generateMipmap(De),he.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?ve.setTextureCube(y,0):y.isData3DTexture?ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ve.setTexture2DArray(y,0):ve.setTexture2D(y,0),he.unbindTexture()},this.resetState=function(){_=0,T=0,b=null,he.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class io extends cf{}io.prototype.isWebGL1Renderer=!0;class uf extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ma extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ga=new Be,_a=new Be,Ni=[],hf=new Be,ni=new vt;class df extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ma(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,hf)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ni.geometry=this.geometry,ni.material=this.material,ni.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,ga),_a.multiplyMatrices(n,ga),ni.matrixWorld=_a,ni.raycast(e,Ni);for(let o=0,a=Ni.length;o<a;o++){const l=Ni[o];l.instanceId=r,l.object=this,t.push(l)}Ni.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ma(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ro extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xa=new D,va=new D,Ma=new Be,Rr=new Xa,Ui=new Xi;class ff extends Ze{constructor(e=new St,t=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xa.fromBufferAttribute(t,i-1),va.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xa.distanceTo(va);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere),Ui.applyMatrix4(i),Ui.radius+=r,e.ray.intersectsSphere(Ui)===!1)return;Ma.copy(i).invert(),Rr.copy(e.ray).applyMatrix4(Ma);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,d=new D,f=new D,m=this.isLineSegments?2:1,x=n.index,h=n.attributes.position;if(x!==null){const _=Math.max(0,o.start),T=Math.min(x.count,o.start+o.count);for(let b=_,S=T-1;b<S;b+=m){const v=x.getX(b),C=x.getX(b+1);if(c.fromBufferAttribute(h,v),u.fromBufferAttribute(h,C),Rr.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const g=e.ray.origin.distanceTo(f);g<e.near||g>e.far||t.push({distance:g,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),T=Math.min(h.count,o.start+o.count);for(let b=_,S=T-1;b<S;b+=m){if(c.fromBufferAttribute(h,b),u.fromBufferAttribute(h,b+1),Rr.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ya=new D,Sa=new D;class pf extends ff{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ya.fromBufferAttribute(t,i),Sa.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ya.distanceTo(Sa);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kr extends St{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],f=[],m=[];let x=0;const p=[],h=n/2;let _=0;T(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ve(d,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(m,2));function T(){const S=new D,v=new D;let C=0;const N=(t-e)/n;for(let g=0;g<=r;g++){const A=[],R=g/r,Y=R*(t-e)+e;for(let ee=0;ee<=i;ee++){const z=ee/i,P=z*l+a,X=Math.sin(P),j=Math.cos(P);v.x=Y*X,v.y=-R*n+h,v.z=Y*j,d.push(v.x,v.y,v.z),S.set(X,N,j).normalize(),f.push(S.x,S.y,S.z),m.push(z,1-R),A.push(x++)}p.push(A)}for(let g=0;g<i;g++)for(let A=0;A<r;A++){const R=p[A][g],Y=p[A+1][g],ee=p[A+1][g+1],z=p[A][g+1];u.push(R,Y,z),u.push(Y,ee,z),C+=6}c.addGroup(_,C,0),_+=C}function b(S){const v=x,C=new _e,N=new D;let g=0;const A=S===!0?e:t,R=S===!0?1:-1;for(let ee=1;ee<=i;ee++)d.push(0,h*R,0),f.push(0,R,0),m.push(.5,.5),x++;const Y=x;for(let ee=0;ee<=i;ee++){const P=ee/i*l+a,X=Math.cos(P),j=Math.sin(P);N.x=A*j,N.y=h*R,N.z=A*X,d.push(N.x,N.y,N.z),f.push(0,R,0),C.x=X*.5+.5,C.y=j*.5*R+.5,m.push(C.x,C.y),x++}for(let ee=0;ee<i;ee++){const z=v+ee,P=Y+ee;S===!0?u.push(P,P+1,z):u.push(P+1,P,z),g+=3}c.addGroup(_,g,S===!0?1:2),_+=g}}static fromJSON(e){return new Kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $r extends Kr{constructor(e=1,t=1,n=8,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ji extends St{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new D,f=new D,m=[],x=[],p=[],h=[];for(let _=0;_<=n;_++){const T=[],b=_/n;let S=0;_==0&&o==0?S=.5/t:_==n&&l==Math.PI&&(S=-.5/t);for(let v=0;v<=t;v++){const C=v/t;d.x=-e*Math.cos(i+C*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(i+C*r)*Math.sin(o+b*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),p.push(f.x,f.y,f.z),h.push(C+S,1-b),T.push(c++)}u.push(T)}for(let _=0;_<n;_++)for(let T=0;T<t;T++){const b=u[_][T+1],S=u[_][T],v=u[_+1][T],C=u[_+1][T+1];(_!==0||o>0)&&m.push(b,S,C),(_!==n-1||l<Math.PI)&&m.push(S,v,C)}this.setIndex(m),this.setAttribute("position",new Ve(x,3)),this.setAttribute("normal",new Ve(p,3)),this.setAttribute("uv",new Ve(h,2))}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jr extends Zn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class so extends Ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class mf extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ir=new Be,ba=new D,wa=new D;class gf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ba.setFromMatrixPosition(e.matrixWorld),t.position.copy(ba),wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wa),t.updateMatrixWorld(),Ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _f extends gf{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xf extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.target=new Ze,this.shadow=new _f}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ta(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ta();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ta(){return(typeof performance>"u"?Date:performance).now()}class Ea{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mf extends pf{constructor(e=10,t=10,n=4473924,i=8947848){n=new Te(n),i=new Te(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,x=-a;f<=t;f++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const p=f===r?n:i;p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3}const u=new St;u.setAttribute("position",new Ve(l,3)),u.setAttribute("color",new Ve(c,3));const d=new ro({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wr);const Aa={type:"change"},Fr={type:"start"},Ca={type:"end"};class yf extends Sn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bn.ROTATE,MIDDLE:bn.DOLLY,RIGHT:bn.PAN},this.touches={ONE:wn.ROTATE,TWO:wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",ut),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Aa),n.update(),r=i.NONE},this.update=function(){const E=new D,I=new yn().setFromUnitVectors(e.up,new D(0,1,0)),le=I.clone().invert(),ue=new D,oe=new yn,pe=2*Math.PI;return function(){const Ce=n.object.position;E.copy(Ce).sub(n.target),E.applyQuaternion(I),a.setFromVector3(E),n.autoRotate&&r===i.NONE&&A(N()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Le=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(ze)&&(Le<-Math.PI?Le+=pe:Le>Math.PI&&(Le-=pe),ze<-Math.PI?ze+=pe:ze>Math.PI&&(ze-=pe),Le<=ze?a.theta=Math.max(Le,Math.min(ze,a.theta)):a.theta=a.theta>(Le+ze)/2?Math.max(Le,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),E.setFromSpherical(a),E.applyQuaternion(le),Ce.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ue.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o?(n.dispatchEvent(Aa),ue.copy(n.object.position),oe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",Je),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",bt),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",Ye),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ut)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Ea,l=new Ea;let c=1;const u=new D;let d=!1;const f=new _e,m=new _e,x=new _e,p=new _e,h=new _e,_=new _e,T=new _e,b=new _e,S=new _e,v=[],C={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function g(){return Math.pow(.95,n.zoomSpeed)}function A(E){l.theta-=E}function R(E){l.phi-=E}const Y=function(){const E=new D;return function(le,ue){E.setFromMatrixColumn(ue,0),E.multiplyScalar(-le),u.add(E)}}(),ee=function(){const E=new D;return function(le,ue){n.screenSpacePanning===!0?E.setFromMatrixColumn(ue,1):(E.setFromMatrixColumn(ue,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(le),u.add(E)}}(),z=function(){const E=new D;return function(le,ue){const oe=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;E.copy(pe).sub(n.target);let fe=E.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*le*fe/oe.clientHeight,n.object.matrix),ee(2*ue*fe/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(le*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),ee(ue*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(E){n.object.isPerspectiveCamera?c/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(E){n.object.isPerspectiveCamera?c*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(E){f.set(E.clientX,E.clientY)}function Z(E){T.set(E.clientX,E.clientY)}function q(E){p.set(E.clientX,E.clientY)}function ne(E){m.set(E.clientX,E.clientY),x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const I=n.domElement;A(2*Math.PI*x.x/I.clientHeight),R(2*Math.PI*x.y/I.clientHeight),f.copy(m),n.update()}function J(E){b.set(E.clientX,E.clientY),S.subVectors(b,T),S.y>0?P(g()):S.y<0&&X(g()),T.copy(b),n.update()}function O(E){h.set(E.clientX,E.clientY),_.subVectors(h,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(h),n.update()}function V(E){E.deltaY<0?X(g()):E.deltaY>0&&P(g()),n.update()}function $(E){let I=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),I=!0;break}I&&(E.preventDefault(),n.update())}function te(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const E=.5*(v[0].pageX+v[1].pageX),I=.5*(v[0].pageY+v[1].pageY);f.set(E,I)}}function se(){if(v.length===1)p.set(v[0].pageX,v[0].pageY);else{const E=.5*(v[0].pageX+v[1].pageX),I=.5*(v[0].pageY+v[1].pageY);p.set(E,I)}}function H(){const E=v[0].pageX-v[1].pageX,I=v[0].pageY-v[1].pageY,le=Math.sqrt(E*E+I*I);T.set(0,le)}function Ae(){n.enableZoom&&H(),n.enablePan&&se()}function de(){n.enableZoom&&H(),n.enableRotate&&te()}function xe(E){if(v.length==1)m.set(E.pageX,E.pageY);else{const le=Me(E),ue=.5*(E.pageX+le.x),oe=.5*(E.pageY+le.y);m.set(ue,oe)}x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const I=n.domElement;A(2*Math.PI*x.x/I.clientHeight),R(2*Math.PI*x.y/I.clientHeight),f.copy(m)}function he(E){if(v.length===1)h.set(E.pageX,E.pageY);else{const I=Me(E),le=.5*(E.pageX+I.x),ue=.5*(E.pageY+I.y);h.set(le,ue)}_.subVectors(h,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(h)}function Fe(E){const I=Me(E),le=E.pageX-I.x,ue=E.pageY-I.y,oe=Math.sqrt(le*le+ue*ue);b.set(0,oe),S.set(0,Math.pow(b.y/T.y,n.zoomSpeed)),P(S.y),T.copy(b)}function Se(E){n.enableZoom&&Fe(E),n.enablePan&&he(E)}function ve(E){n.enableZoom&&Fe(E),n.enableRotate&&xe(E)}function Je(E){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",qe),n.domElement.addEventListener("pointerup",Ye)),Q(E),E.pointerType==="touch"?w(E):ke(E))}function qe(E){n.enabled!==!1&&(E.pointerType==="touch"?M(E):Ue(E))}function Ye(E){ie(E),v.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",Ye)),n.dispatchEvent(Ca),r=i.NONE}function st(E){ie(E)}function ke(E){let I;switch(E.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case bn.DOLLY:if(n.enableZoom===!1)return;Z(E),r=i.DOLLY;break;case bn.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;q(E),r=i.PAN}else{if(n.enableRotate===!1)return;j(E),r=i.ROTATE}break;case bn.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;j(E),r=i.ROTATE}else{if(n.enablePan===!1)return;q(E),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Fr)}function Ue(E){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ne(E);break;case i.DOLLY:if(n.enableZoom===!1)return;J(E);break;case i.PAN:if(n.enablePan===!1)return;O(E);break}}function bt(E){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(E.preventDefault(),n.dispatchEvent(Fr),V(E),n.dispatchEvent(Ca))}function ut(E){n.enabled===!1||n.enablePan===!1||$(E)}function w(E){switch(ae(E),v.length){case 1:switch(n.touches.ONE){case wn.ROTATE:if(n.enableRotate===!1)return;te(),r=i.TOUCH_ROTATE;break;case wn.PAN:if(n.enablePan===!1)return;se(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case wn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),r=i.TOUCH_DOLLY_PAN;break;case wn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Fr)}function M(E){switch(ae(E),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(E),n.update();break;default:r=i.NONE}}function B(E){n.enabled!==!1&&E.preventDefault()}function Q(E){v.push(E)}function ie(E){delete C[E.pointerId];for(let I=0;I<v.length;I++)if(v[I].pointerId==E.pointerId){v.splice(I,1);return}}function ae(E){let I=C[E.pointerId];I===void 0&&(I=new _e,C[E.pointerId]=I),I.set(E.pageX,E.pageY)}function Me(E){const I=E.pointerId===v[0].pointerId?v[1]:v[0];return C[I.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",Je),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",bt,{passive:!1}),this.update()}}class hi{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sf=new qi(-1,1,1,-1,0,1),Qr=new St;Qr.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3));Qr.setAttribute("uv",new Ve([0,2,0,0,2,0],2));class ao{constructor(e){this._mesh=new vt(Qr,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bf extends hi{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Vi={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class La extends hi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ki.clone(e.uniforms),this.material=new Mt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ao(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Da extends hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class wf extends hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Tf{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new _e);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Vi===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),La===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new La(Vi),this.clock=new vf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Da!==void 0&&(o instanceof Da?n=!0:o instanceof wf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new qi(-1,1,1,-1,0,1);const oo=new St;oo.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3));oo.setAttribute("uv",new Ve([0,2,0,0,2,0],2));const Pa={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class jn extends hi{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Nt(r,o);f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Nt(r,o);m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}Pa===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=Pa;this.highPassUniforms=ki.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new _e(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Vi===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=Vi;this.copyUniforms=ki.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Nr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new qr,this.fsQuad=new ao(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new _e(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=jn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=jn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new Mt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}jn.BlurDirectionX=new _e(1,0);jn.BlurDirectionY=new _e(0,1);const lo=window.innerWidth,co=window.innerHeight,es=new D(0,-.09807,0),Lt=new uf,di=new At(50,lo/co,.1,2e3);di.position.z=50;di.position.y=3;const Ef=new mf(0,0,1),uo=new xf(2236962,10);uo.position.y=10;Lt.add(Ef);Lt.add(uo);const rn=new io;rn.setSize(lo,co);rn.setClearColor(0);const Af=new bf(Lt,di),ts=new Tf(rn);ts.addPass(Af);const Cf=new jn(new _e(window.innerWidth,window.innerHeight),1.6,.1,.1);ts.addPass(Cf);rn.toneMapping=Ua;rn.toneMappingExposure=1.5;const Lf=new Mf(100,100);Lt.add(Lf);new yf(di,rn.domElement);document.body.appendChild(rn.domElement);const Df=[[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0],[0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0],[0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0]],Pf=[[0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0],[1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1],[0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1],[0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0],[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1],[1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0]],Rf=[[1,0,0,0,0,0,1,0,0,0,0,0,1],[0,1,0,0,0,0,1,0,0,0,0,1,0],[0,0,1,0,0,0,1,0,0,0,1,0,0],[0,0,0,1,0,0,1,0,0,1,0,0,0],[0,0,0,0,1,0,1,0,1,0,0,0,0],[0,0,0,0,0,1,1,1,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,1,0,0,0,0,0],[0,0,0,0,1,0,1,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,0,1,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,0,0],[0,1,0,0,0,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,1,0,0,0,0,0,1]],If=[[1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1],[1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0],[1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0],[1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1],[1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0]];function Ff(s,e,t=nw,n){let i=2,r=.1,o={forces:[],radius:[],color:t};for(let a=0;a<n.length;a++)for(let l=0;l<n[a].length;l++)if(n[a][l]==1)for(let c=.07;c<r;c+=.03){const u=c*2,d=(l-n[a].length/2)*i*c,f=-(a-n.length/2)*i*c;o.forces.push(new D(d,f,0)),o.radius.push(u)}return o}const Nf=()=>new Te(Math.random()*4294967295),Uf=(s,e)=>new D(Math.random()*s-e,0,Math.random()*s-e),zf=(s=new D(0,0,0),e=new D(0,0,0),t=new Te(16777215))=>{const n=new ji(1),i=new Jr({color:t,emissive:t,emissiveIntensity:1.2}),r=new vt(n,i);return r.position.set(s.x,s.y,s.z),r.userData.velocity=e,r.userData.isParticle=!0,r.userData.time=new Date,r.userData.update=()=>{r.userData.velocity.add(es),r.position.add(r.userData.velocity),new Date-r.userData.time>1e3&&Lt.remove(r)},r},lt=new Ze,zi=new Be,Of=(s=new D(0,0,0),e=new Te)=>{const t=Ff(s.x,s.y,e,[Pf,If,Df,Rf][Math.floor(Math.random()*4)]),n=t.forces.length,i=1,r=new df(new ji,new Jr({color:e,emissive:e,emissiveIntensity:Math.random()*2}),n);r.userData.isExplosion=!0,r.userData.velocities=[],r.userData.time=new Date;for(let o=0;o<n;o++)r.getMatrixAt(o,zi),zi.decompose(lt.position,lt.rotation,lt.scale),lt.position.x=s.x,lt.position.y=s.y,lt.position.z=s.z,lt.updateMatrix(),r.setMatrixAt(o,lt.matrix),r.userData.velocities.push(t.forces[o]);r.userData.update=()=>{for(let o=0;o<n;o++)r.getMatrixAt(o,zi),zi.decompose(lt.position,lt.rotation,lt.scale),r.userData.velocities[o].add(es),lt.position.add(r.userData.velocities[o]),lt.scale.set(i,i,i),lt.updateMatrix(),r.setMatrixAt(o,lt.matrix);r.instanceMatrix.needsUpdate=!0,new Date-r.userData.time>1e3&&Lt.remove(r)},Lt.add(r)},Bf=(s=new D(0,0,0))=>{const e=new D(0,2+Math.random()*8,0),t=Nf(),n=new $r(1,4),i=new Jr({color:t,emissive:t,emissiveIntensity:1.2}),r=new vt(n,i);r.position.set(s.x,s.y,s.z),r.userData.velocity=e,r.userData.update=()=>{r.userData.velocity.add(es),r.position.add(r.userData.velocity),Lt.add(zf(new D(r.position.x,r.position.y-2,r.position.z),new D(Math.random(),0,Math.random()),new D(4095))),r.userData.velocity.y<0&&(Of(r.position,r.material.color),Lt.remove(r))},r.userData.isFirework=!0,Lt.add(r)};let Ra=new Date;(function s(){rn.render(Lt,di),ts.render(),new Date-Ra>100&&(Bf(Uf(200,100)),Ra=new Date),Lt.children.forEach(e=>{e.userData.update&&e.userData.update()}),window.requestAnimationFrame(s)})();
