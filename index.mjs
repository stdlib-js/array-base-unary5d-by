// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function f(f,o,r,a){var l,t,e,i,n,c,d,u,v,g,h,p,s,x,b,j,k,m,q,w,y,z;if(t=o[4],e=o[3],i=o[2],n=o[1],c=o[0],!(t<=0||e<=0||i<=0||n<=0||c<=0))for(arguments.length>4&&(l=arguments[4]),w=f[0],y=f[1],h=0;h<c;h++)for(b=w[h],q=y[h],g=0;g<n;g++)for(x=b[g],m=q[g],v=0;v<i;v++)for(s=x[v],k=m[v],u=0;u<e;u++)for(p=s[u],j=k[u],d=0;d<t;d++)void 0!==(z=a.call(l,p[d],[h,g,v,u,d],[w,y]))&&(j[d]=r(z))}export{f as default};
//# sourceMappingURL=index.mjs.map
