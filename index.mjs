// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-cdf@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-quantile@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-mean@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-variance@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.1.0-esm/index.mjs";function x(e){var t,s,i;if(s=4,t=!0,arguments.length>0){if(!v(e))throw new TypeError(m("1Lt3L,Gc",e));if(g(e,"digits")){if(!b(e.digits))throw new TypeError(m("1Lt3P,Fv","digits",e.digits));s=e.digits}if(g(e,"decision")){if(!u(e.decision))throw new TypeError(m("1Lt2o,GE","decision",e.decision));t=e.decision}}switch(i="",i+=this.method,i+="\n\n",i+="Alternative hypothesis: ",i+="True difference in means is ",this.alternative){case"less":i+="less than ";break;case"greater":i+="greater than ";break;default:i+="not equal to "}return i+=this.nullValue,i+="\n\n",i+="    pValue: "+w(this.pValue,-s)+"\n",i+="    statistic: "+w(this.statistic,-s)+"\n",i+="    df: "+w(this.df,-s)+"\n",i+="    "+100*(1-this.alpha)+"% confidence interval: ["+w(this.ci[0],-s)+","+w(this.ci[1],-s)+"]",i+="\n\n",t&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":i+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",i+="\n"),i}function y(b,u,w){var y,E,L,G,T,q,k,V,P,D,F,R,W,J,S,U,X,A,O,z,B;if(!t(b)&&!e(b))throw new TypeError(m("1Lt8R,GO",b));if(!t(u)&&!e(u))throw new TypeError(m("1Lt9k,GP",u));if(V={},w&&(U=function(e,t){return v(t)?g(t,"alpha")&&(e.alpha=t.alpha,!c(e.alpha)||j(e.alpha))?new TypeError(m("1Lt8P,GU","alpha",e.alpha)):g(t,"alternative")&&(e.alternative=t.alternative,!f(e.alternative))?new TypeError(m("1Lt2W,Gh","alternative",e.alternative)):g(t,"difference")&&(e.difference=t.difference,!c(e.difference)||j(e.difference))?new TypeError(m("1Lt8P,GU","difference",e.difference)):g(t,"variance")&&(e.variance=t.variance,!f(e.variance))?new TypeError(m("1Lt2W,Gh","variance",e.variance)):null:new TypeError(m("1Lt2V,FD",t))}(V,w),U))throw U;if(k=V.difference||0,(E=void 0===V.alpha?.05:V.alpha)<0||E>1)throw new RangeError(m("1Lt8V,Gb","alpha",E));if(A=b.length,O=u.length,D=o(A,1,b,1),F=o(O,1,u,1),"equal"===(T=V.variance||"unequal"))B=(A-1)*D+(O-1)*F,y=n((B/=z=A+O-2)*(1/A+1/O));else{if("unequal"!==T)throw new Error(m("1Lt2X,3g,4S,GD,Gg,Jm","variance",["equal","unequal"].join('", "'),T));W=n(D/A),J=n(F/O),y=n(W*W+J*J),B=d(W,4)/(A-1),B+=d(J,4)/(O-1),z=d(y,4)/B}switch(R=((L=l(A,b,1))-(G=l(O,u,1))-k)/y,S=V.alternative||"two-sided"){case"two-sided":P=2*i(-a(R),z),(q=[R-r(1-E/2,z),R+r(1-E/2,z)])[0]=k+q[0]*y,q[1]=k+q[1]*y;break;case"greater":P=1-i(R,z),(q=[R-r(1-E,z),p])[0]=k+q[0]*y;break;case"less":P=i(R,z),(q=[h,R+r(1-E,z)])[1]=k+q[1]*y;break;default:throw new Error(m("1Lt2X,3g,4S,GD,Gg,Jm","alternative",["two-sided","less","greater"].join('", "'),S))}return s(X={},"rejected",P<=E),s(X,"alpha",E),s(X,"pValue",P),s(X,"statistic",R),s(X,"ci",q),s(X,"alternative",S),s(X,"df",z),s(X,"method","equal"===T?"Two-sample t-test":"Welch two-sample t-test"),s(X,"nullValue",k),s(X,"xmean",L),s(X,"ymean",G),s(X,"print",x),X}export{y as default};
//# sourceMappingURL=index.mjs.map