/* LazyLoad*/
(function(a){a.fn.Qlazyload=function(b,c){if(this.length){var d,e,f=a.extend({type:null,offsetParent:null,source:"src2",threshold:100},b||{}),g=this,h=function(a){for(var b=a.scrollLeft,c=a.scrollTop,d=a.offsetWidth,e=a.offsetHeight;a.offsetParent;)b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;return{left:b,top:c,width:d,height:e}},i=function(){var a=document.documentElement,b=document.body,c=window.pageXOffset?window.pageXOffset:a.scrollLeft||b.scrollLeft,d=window.pageYOffset?window.pageYOffset:a.scrollTop||b.scrollTop,e=a.clientWidth,f=a.clientHeight;return{left:c,top:d,width:e,height:f}},j=function(a,b){var c,d,e,g,h,i,j=f.threshold?parseInt(f.threshold):0;return c=a.left+a.width/2,d=b.left+b.width/2,e=a.top+a.height/2,g=b.top+b.height/2,h=(a.width+b.width)/2,i=(a.height+b.height)/2,Math.abs(c-d)<h+j&&Math.abs(e-g)<i+j},k=function(a,b,d){a&&(d.attr("src",b).removeAttr(f.source),c&&c(b,d))},l=function(b,d,e){if(b){var g=a("#"+d);g.html(e.val()).removeAttr(f.source),e.remove(),c&&c(d,e)}},m=function(a,b,d){a&&(d.removeAttr(f.source),c&&c(b,d))},n=function(){e=i(),g=g.filter(function(){return a(this).attr(f.source)}),a.each(g,function(){var b=a(this).attr(f.source);if(b){var c=f.offsetParent?h(a(f.offsetParent).get(0)):e,d=h(this),g=j(c,d);switch(f.type){case"image":k(g,b,a(this));break;case"textarea":l(g,b,a(this));break;case"module":m(g,b,a(this))}}})},o=function(){g.length>0&&(clearTimeout(d),d=setTimeout(function(){n()},10))};n(),f.offsetParent?a(f.offsetParent).bind("scroll",function(){o()}):a(window).bind("scroll",function(){o()}).bind("reset",function(){o()})}}})(jQuery);

$(document).ready(function(e){
$("img[src2]").Qlazyload({type:"image"});
});
/*fancybox*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(f($){R I,Y,V,n,1E,v,Z,k,1C,1r,S=0,9={},P=[],Q=0,4={},K=[],1Y=1R,14=1W 2B(),2A=/\\.(58|57|5g|55|4U)(.*)?$/i,45=/[^\\.]\\.(1K)\\s*$/i,2c,2d=1,1m=0,1d=\'\',U,E,A=t,1D=$.1i($(\'<D/>\')[0],{1B:0}),2z=$.2R.3J&&$.2R.4V<7&&!16.1w,2a=f(){Y.L();14.3b=14.34=1R;6(1Y){1Y.4P()}I.1t()},2s=f(){6(t===9.41(P,S,9)){Y.L();A=t;q}9.2S=t;9.c=\'O\';9.d=\'O\';I.15(\'<p G="b-3G">4Q 4W v 4X 50 4Y.<4Z />4K 4N 5j 4S.</p>\');1P()},24=f(){R g=P[S],m,C,k,1X,2t,17;2a();9=$.1i({},$.2G.b.4m,(X $(g).W(\'b\')==\'22\'?9:$(g).W(\'b\')));17=9.4i(P,S,9);6(17===t){A=t;q}z 6(X 17==\'1x\'){9=$.1i(9,17)}k=9.k||(g.3t?$(g).1T(\'k\'):g.k)||\'\';6(g.3t&&!9.19){9.19=$(g).25("2H:4x").M?$(g).25("2H:4x"):$(g)}6(k===\'\'&&9.19&&9.3A){k=9.19.1T(\'4w\')}m=9.m||(g.3t?$(g).1T(\'m\'):g.m)||1R;6((/^(?:28)/i).3e(m)||m==\'#\'){m=1R}6(9.C){C=9.C;6(!m){m=9.v}}z 6(9.v){C=\'15\'}z 6(m){6(m.2v(2A)){C=\'33\'}z 6(m.2v(45)){C=\'1K\'}z 6($(g).51("1f")){C=\'1f\'}z 6(m.1H("#")===0){C=\'1z\'}z{C=\'11\'}}6(!C){2s();q}6(C==\'1z\'){g=m.53(m.1H("#"));C=$(g).M>0?\'1z\':\'11\'}9.C=C;9.m=m;9.k=k;6(9.1L){6(9.C==\'15\'||9.C==\'1z\'||9.C==\'11\'){9.c=\'O\';9.d=\'O\'}z{9.1L=t}}6(9.4c){9.3a=H;9.2e=t;9.38=t;9.2E=t;9.2N=t}9.u=y(9.u,10);9.1c=y(9.1c,10);I.F(\'u\',(9.u+9.1c));$(\'.b-1z-I\').1l(\'b-1Q\').18(\'b-3Z\',f(){$(T).2M(v.25())});3O(C){1g\'15\':I.15(9.v);1P();1e;1g\'1z\':6($(g).52().1q(\'#b-v\')===H){A=t;q}$(\'<D 2L="b-1z-I" />\').L().4T($(g)).18(\'b-2V\',f(){$(T).2M(v.25())}).18(\'b-1Q\',f(){$(T).2M(I.25())});$(g).1j(I);1P();1e;1g\'33\':A=t;$.b.3c();14=1W 2B();14.3b=f(){2s()};14.34=f(){A=H;14.3b=14.34=1R;4g()};14.1k=m;1e;1g\'1K\':9.1G=\'3X\';1X=\'<1x 4O="54:5f-5h-5i-5k-5e" c="\'+9.c+\'" d="\'+9.d+\'"><2u 1N="5d" 3U="\'+m+\'"></2u>\';2t=\'\';$.56(9.1K,f(1N,3d){1X+=\'<2u 1N="\'+1N+\'" 3U="\'+3d+\'"></2u>\';2t+=\' \'+1N+\'="\'+3d+\'"\'});1X+=\'<3v 1k="\'+m+\'" C="59/x-5a-5c" c="\'+9.c+\'" d="\'+9.d+\'"\'+2t+\'></3v></1x>\';I.15(1X);1P();1e;1g\'11\':A=t;$.b.3c();9.11.3j=9.11.4G;1Y=$.11($.1i({},9.11,{5b:m,W:9.11.W||{},3G:f(1w,30,5l){6(1w.3T>0){2s()}},4G:f(W,30,1w){R o=X 1w==\'1x\'?1w:1Y;6(o.3T==47){6(X 9.11.3j==\'f\'){17=9.11.3j(m,W,30,1w);6(17===t){Y.L();q}z 6(X 17==\'4L\'||X 17==\'1x\'){W=17}}I.15(W);1P()}}}));1e;1g\'1f\':2F();1e}},1P=f(){R w=9.c,h=9.d;6(w.2y().1H(\'%\')>-1){w=y(($(16).c()-(9.1c*2))*2w(w)/2x,10)+\'1V\'}z{w=w==\'O\'?\'O\':w+\'1V\'}6(h.2y().1H(\'%\')>-1){h=y(($(16).d()-(9.1c*2))*2w(h)/2x,10)+\'1V\'}z{h=h==\'O\'?\'O\':h+\'1V\'}I.4M(\'<D 1v="c:\'+w+\';d:\'+h+\';4H: \'+(9.1G==\'O\'?\'O\':(9.1G==\'4J\'?\'2f\':\'29\'))+\';3u:4I;"></D>\');9.c=I.c();9.d=I.d();2F()},4g=f(){9.c=14.c;9.d=14.d;$("<2H />").1T({\'G\':\'b-2H\',\'1k\':14.1k,\'4w\':9.k}).1j(I);2F()},2F=f(){R l,35;Y.L();6(n.1q(":1J")&&t===4.3h(K,Q,4)){$.2g.2l(\'b-1Q\');A=t;q}A=H;$(v.1S(V)).1l();$(16).1l("1A.13 2f.13");$(1p).1l(\'2U.13\');6(n.1q(":1J")&&4.1n!==\'4R\'){n.F(\'d\',n.d())}K=P;Q=S;4=9;6(4.3a){V.F({\'5t-65\':4.46,\'1b\':4.4E,\'67\':4.2e?\'61\':\'O\',\'d\':$(1p).d()});6(!V.1q(\':1J\')){6(2z){$(\'4d:5Q(#b-I 4d)\').2o(f(){q T.1v.3q!==\'29\'}).F({\'3q\':\'29\'}).5Z(\'b-2V\',f(){T.1v.3q=\'5Y\'})}V.1a()}}z{V.L()}E=3S();4v();6(n.1q(":1J")){$(Z.1S(1C).1S(1r)).L();l=n.3u(),U={N:l.N,J:l.J,c:n.c(),d:n.d()};35=(U.c==E.c&&U.d==E.d);v.4b(4.2Q,0.3,f(){R 2O=f(){v.15(I.36()).4b(4.2Q,1,2q)};$.2g.2l(\'b-3Z\');v.1t().31(\'2o\').F({\'23-c\':4.u,\'c\':E.c-4.u*2,\'d\':9.1L?\'O\':E.d-1m-4.u*2});6(35){2O()}z{1D.1B=0;$(1D).2C({1B:1},{3l:4.43,3k:4.5V,3p:2k,3o:2O})}});q}n.31("1v");v.F(\'23-c\',4.u);6(4.32==\'42\'){U=3s();v.15(I.36());n.1a();6(4.1b){E.1b=0}1D.1B=0;$(1D).2C({1B:1},{3l:4.3i,3k:4.3Q,3p:2k,3o:2q});q}6(4.1n==\'2T\'&&1m>0){k.1a()}v.F({\'c\':E.c-4.u*2,\'d\':9.1L?\'O\':E.d-1m-4.u*2}).15(I.36());n.F(E).6b(4.32==\'4k\'?0:4.3i,2q)},3F=f(k){6(k&&k.M){6(4.1n==\'1F\'){q\'<4t G="b-k-1F-n" 5X="0" 5W="0"><4p><1O G="b-k-1F-J"></1O><1O G="b-k-1F-5U">\'+k+\'</1O><1O G="b-k-1F-2P"></1O></4p></4t>\'}q\'<D G="b-k-\'+4.1n+\'">\'+k+\'</D>\'}q t},4v=f(){1d=4.k||\'\';1m=0;k.1t().31(\'1v\').5R();6(4.2S===t){k.L();q}1d=$.5S(4.3g)?4.3g(1d,K,Q,4):3F(1d);6(!1d||1d===\'\'){k.L();q}k.2p(\'b-k-\'+4.1n).15(1d).1j(\'4r\').1a();3O(4.1n){1g\'2T\':k.F({\'c\':E.c-(4.u*2),\'3E\':4.u,\'5T\':4.u});1m=k.60(H);k.1j(1E);E.d+=1m;1e;1g\'69\':k.F({\'3E\':4.u,\'c\':E.c-(4.u*2),\'6a\':4.u}).1j(1E);1e;1g\'1F\':k.F(\'J\',y((k.c()-E.c-40)/2,10)*-1).1j(n);1e;6c:k.F({\'c\':E.c-(4.u*2),\'3B\':4.u,\'68\':4.u}).1j(n);1e}k.L()},3N=f(){6(4.2E||4.2Z){$(1p).18(\'2U.13\',f(e){6(e.2r==27&&4.2E){e.1s();$.b.Z()}z 6((e.2r==37||e.2r==39)&&4.2Z&&e.1I.3f!==\'62\'&&e.1I.3f!==\'63\'&&e.1I.3f!==\'64\'){e.1s();$.b[e.2r==37?\'2b\':\'2D\']()}})}6(!4.3w){1C.L();1r.L();q}6((4.2j&&K.M>1)||Q!==0){1C.1a()}6((4.2j&&K.M>1)||Q!=(K.M-1)){1r.1a()}},2q=f(){6(!$.4q.1b){v.26(0).1v.3P(\'2o\');n.26(0).1v.3P(\'2o\')}6(9.1L){v.F(\'d\',\'O\')}n.F(\'d\',\'O\');6(1d&&1d.M){k.1a()}6(4.2N){Z.1a()}3N();6(4.38){v.18(\'1o\',$.b.Z)}6(4.2e){V.18(\'1o\',$.b.Z)}$(16).18("1A.13",$.b.1A);6(4.48){$(16).18("2f.13",$.b.2h)}6(4.C==\'1f\'){$(\'<1f G="b-2X" 1N="b-2X\'+1W 5O().5w()+\'" 3I="0" 5v="0" \'+($.2R.3J?\'5x="H""\':\'\')+\' 1G="\'+9.1G+\'" 1k="\'+4.m+\'"></1f>\').1j(v)}n.1a();A=t;$.b.2h();4.4f(K,Q,4);3K()},3K=f(){R m,1Z;6((K.M-1)>Q){m=K[Q+1].m;6(X m!==\'22\'&&m.2v(2A)){1Z=1W 2B();1Z.1k=m}}6(Q>0){m=K[Q-1].m;6(X m!==\'22\'&&m.2v(2A)){1Z=1W 2B();1Z.1k=m}}},2k=f(l){R 21={c:y(U.c+(E.c-U.c)*l,10),d:y(U.d+(E.d-U.d)*l,10),N:y(U.N+(E.N-U.N)*l,10),J:y(U.J+(E.J-U.J)*l,10)};6(X E.1b!==\'22\'){21.1b=l<0.5?0.5:l}n.F(21);v.F({\'c\':21.c-4.u*2,\'d\':21.d-(1m*l)-4.u*2})},2i=f(){q[$(16).c()-(4.1c*2),$(16).d()-(4.1c*2),$(1p).5y()+4.1c,$(1p).5z()+4.1c]},3S=f(){R r=2i(),B={},1A=4.44,1u=4.u*2,2n;6(4.c.2y().1H(\'%\')>-1){B.c=y((r[0]*2w(4.c))/2x,10)}z{B.c=4.c+1u}6(4.d.2y().1H(\'%\')>-1){B.d=y((r[1]*2w(4.d))/2x,10)}z{B.d=4.d+1u}6(1A&&(B.c>r[0]||B.d>r[1])){6(9.C==\'33\'||9.C==\'1K\'){2n=(4.c)/(4.d);6((B.c)>r[0]){B.c=r[0];B.d=y(((B.c-1u)/2n)+1u,10)}6((B.d)>r[1]){B.d=r[1];B.c=y(((B.d-1u)*2n)+1u,10)}}z{B.c=1M.3D(B.c,r[0]);B.d=1M.3D(B.d,r[1])}}B.N=y(1M.2K(r[3]-20,r[3]+((r[1]-B.d-40)*0.5)),10);B.J=y(1M.2K(r[2]-20,r[2]+((r[0]-B.c-40)*0.5)),10);q B},3L=f(g){R l=g.5u();l.N+=y(g.F(\'5P\'),10)||0;l.J+=y(g.F(\'3B\'),10)||0;l.N+=y(g.F(\'23-N-c\'),10)||0;l.J+=y(g.F(\'23-J-c\'),10)||0;l.c=g.c();l.d=g.d();q l},3s=f(){R 19=9.19?$(9.19):t,2m={},l,r;6(19&&19.M){l=3L(19);2m={c:l.c+(4.u*2),d:l.d+(4.u*2),N:l.N-4.u-20,J:l.J-4.u-20}}z{r=2i();2m={c:4.u*2,d:4.u*2,N:y(r[3]+r[1]*0.5,10),J:y(r[2]+r[0]*0.5,10)}}q 2m},4D=f(){6(!Y.1q(\':1J\')){4z(2c);q}$(\'D\',Y).F(\'N\',(2d*-40)+\'1V\');2d=(2d+1)%12};$.2G.b=f(4s){6(!$(T).M){q T}$(T).W(\'b\',$.1i({},4s,($.4o?$(T).4o():{}))).1l(\'1o.13\').18(\'1o.13\',f(e){e.1s();6(A){q}A=H;$(T).5o();P=[];S=0;R 1h=$(T).1T(\'1h\')||\'\';6(!1h||1h==\'\'||1h===\'5n\'){P.4C(T)}z{P=$("a[1h="+1h+"], 5p[1h="+1h+"]");S=P.4y(T)}24();q});q T};$.b=f(g){R 1y;6(A){q}A=H;1y=X 1U[1]!==\'22\'?1U[1]:{};P=[];S=y(1y.4y,10)||0;6($.5q(g)){5s(R i=0,j=g.M;i<j;i++){6(X g[i]==\'1x\'){$(g[i]).W(\'b\',$.1i({},1y,g[i]))}z{g[i]=$({}).W(\'b\',$.1i({v:g[i]},1y))}}P=4A.5r(P,g)}z{6(X g==\'1x\'){$(g).W(\'b\',$.1i({},1y,g))}z{g=$({}).W(\'b\',$.1i({v:g},1y))}P.4C(g)}6(S>P.M||S<0){S=0}24()};$.b.3c=f(){4z(2c);Y.1a();2c=5A(4D,66)};$.b.5m=f(){Y.L()};$.b.2D=f(){q $.b.l(Q+1)};$.b.2b=f(){q $.b.l(Q-1)};$.b.l=f(l){6(A){q}l=y(l);P=K;6(l>-1&&l<K.M){S=l;24()}z 6(4.2j&&K.M>1){S=l>=K.M?0:K.M-1;24()}q};$.b.1Q=f(){6(A){q}A=H;$.2g.2l(\'b-1Q\');2a();9.4h(P,S,9);A=t};$.b.Z=f(){6(A||n.1q(\':29\')){q}A=H;6(4&&t===4.3h(K,Q,4)){A=t;q}2a();$(Z.1S(1C).1S(1r)).L();$(v.1S(V)).1l();$(16).1l("1A.13 2f.13");$(1p).1l(\'2U.13\');v.5B(\'1f\').1T(\'1k\',2z&&/^4B/i.3e(16.3x.m||\'\')?\'28:3H(t)\':\'3Y:3C\');6(4.1n!==\'2T\'){k.1t()}n.4e();f 3r(){V.4j(\'3W\');k.1t().L();n.L();$.2g.2l(\'b-2V\');v.1t();4.4a(K,Q,4);K=9=[];Q=S=0;4=9={};A=t}6(4.2Y==\'42\'){U=3s();R l=n.3u();E={N:l.N,J:l.J,c:n.c(),d:n.d()};6(4.1b){E.1b=1}k.1t().L();1D.1B=1;$(1D).2C({1B:0},{3l:4.2W,3k:4.3y,3p:2k,3o:3r})}z{n.4j(4.2Y==\'4k\'?0:4.2W,3r)}};$.b.1A=f(){6(V.1q(\':1J\')){V.F(\'d\',$(1p).d())}$.b.2h(H)};$.b.2h=f(){R r,3n;6(A){q}3n=1U[0]===H?1:0;r=2i();6(!3n&&(n.c()>r[0]||n.d()>r[1])){q}n.4e().2C({\'N\':y(1M.2K(r[3]-20,r[3]+((r[1]-v.d()-40)*0.5)-4.u)),\'J\':y(1M.2K(r[2]-20,r[2]+((r[0]-v.c()-40)*0.5)-4.u))},X 1U[0]==\'5K\'?1U[0]:47)};$.b.3z=f(){6($("#b-n").M){q}$(\'4r\').4u(I=$(\'<D G="b-I"></D>\'),Y=$(\'<D G="b-Y"><D></D></D>\'),V=$(\'<D G="b-V"></D>\'),n=$(\'<D G="b-n"></D>\'));1E=$(\'<D G="b-1E"></D>\').1j(n);1E.4u(v=$(\'<D G="b-v"></D>\'),Z=$(\'<a G="b-Z"></a>\'),k=$(\'<D G="b-k"></D>\'),1C=$(\'<a m="28:;" G="b-J"><2I 2L="3V-2J" G="b-J-2J"></2I></a>\'),1r=$(\'<a m="28:;" G="b-2P"><2I 2L="3V-2J" G="b-2P-2J"></2I></a>\'));Z.1o($.b.Z);Y.1o($.b.1Q);1C.1o(f(e){e.1s();$.b.2b()});1r.1o(f(e){e.1s();$.b.2D()});6($.2G.3R){n.18(\'3R.13\',f(e,4n){6(A){e.1s()}z 6($(e.1I).26(0).4l==0||$(e.1I).26(0).5J===$(e.1I).26(0).4l){e.1s();$.b[4n>0?\'2b\':\'2D\']()}})}6(!$.4q.1b){n.2p(\'b-5L\')}6(2z){Y.2p(\'b-3M\');n.2p(\'b-3M\');$(\'<1f G="b-L-5M-2X" 1k="\'+(/^4B/i.3e(16.3x.m||\'\')?\'28:3H(t)\':\'3Y:3C\')+\'" 1G="3X" 23="0" 3I="0" 5N="-1"></1f>\').5I(1E)}};$.2G.b.4m={u:10,1c:40,1b:t,4c:t,2j:t,1G:\'O\',c:5H,d:5D,44:H,1L:H,48:t,11:{},1K:{5C:\'5E\'},2e:H,38:t,3a:H,4E:0.8,46:\'#5F\',2S:H,1n:\'1F\',3g:1R,3A:t,32:\'4F\',2Y:\'4F\',3i:3m,2W:3m,43:3m,2Q:\'3W\',3Q:\'49\',3y:\'49\',2N:H,3w:H,2E:H,2Z:H,4i:f(){},4h:f(){},4f:f(){},3h:f(){},4a:f(){},41:f(){}};$(1p).5G(f(){$.b.3z()})})(4A);',62,385,'||||currentOpts||if|||selectedOpts||fancybox|width|height||function|obj||||title|pos|href|wrap|||return|view||false|padding|content|||parseInt|else|busy|to|type|div|final_pos|css|id|true|tmp|left|currentArray|hide|length|top|auto|selectedArray|currentIndex|var|selectedIndex|this|start_pos|overlay|data|typeof|loading|close||ajax||fb|imgPreloader|html|window|ret|bind|orig|show|opacity|margin|titleStr|break|iframe|case|rel|extend|appendTo|src|unbind|titleHeight|titlePosition|click|document|is|nav_right|preventDefault|empty|double_padding|style|XMLHttpRequest|object|opts|inline|resize|prop|nav_left|fx|outer|float|scrolling|indexOf|target|visible|swf|autoDimensions|Math|name|td|_process_inline|cancel|null|add|attr|arguments|px|new|str|ajaxLoader|objNext||dim|undefined|border|_start|children|get||javascript|hidden|_abort|prev|loadingTimer|loadingFrame|hideOnOverlayClick|scroll|event|center|_get_viewport|cyclic|_draw|trigger|from|ratio|filter|addClass|_finish|keyCode|_error|emb|param|match|parseFloat|100|toString|isIE6|imgRegExp|Image|animate|next|enableEscapeButton|_show|fn|img|span|ico|max|class|replaceWith|showCloseButton|finish_resizing|right|changeFade|browser|titleShow|inside|keydown|cleanup|speedOut|frame|transitionOut|enableKeyboardNav|textStatus|removeAttr|transitionIn|image|onload|equal|contents||hideOnContentClick||overlayShow|onerror|showActivity|val|test|tagName|titleFormat|onCleanup|speedIn|win|easing|duration|300|align|complete|step|visibility|_cleanup|_get_zoom_from|nodeName|position|embed|showNavArrows|location|easingOut|init|titleFromAlt|paddingLeft|blank|min|marginLeft|_format_title|error|void|frameborder|msie|_preload_images|_get_obj_pos|ie6|_set_navigation|switch|removeAttribute|easingIn|mousewheel|_get_zoom_to|status|value|fancy|fast|no|about|change||onError|elastic|changeSpeed|autoScale|swfRegExp|overlayColor|200|centerOnScroll|swing|onClosed|fadeTo|modal|select|stop|onComplete|_process_image|onCancel|onStart|fadeOut|none|clientHeight|defaults|delta|metadata|tr|support|body|options|table|append|_process_title|alt|first|index|clearInterval|jQuery|https|push|_animate_loading|overlayOpacity|fade|success|overflow|relative|yes|Please|string|wrapInner|try|classid|abort|The|outside|later|insertBefore|jpeg|version|requested|cannot|loaded|br|be|hasClass|parent|substr|clsid|bmp|each|gif|jpg|application|shockwave|url|flash|movie|444553540000|D27CDB6E|png|AE6D|11cf|again|96B8|errorThrown|hideActivity|nofollow|blur|area|isArray|merge|for|background|offset|hspace|getTime|allowtransparency|scrollLeft|scrollTop|setInterval|find|wmode|340|transparent|000|ready|560|prependTo|scrollHeight|number|ie|sel|tabindex|Date|paddingTop|not|removeClass|isFunction|marginRight|main|easingChange|cellspacing|cellpadding|inherit|one|outerHeight|pointer|INPUT|TEXTAREA|SELECT|color||cursor|paddingRight|over|bottom|fadeIn|default'.split('|'),0,{}))

// 手机滚动
document.addEventListener('touchstart', (e) => {
  self.moveY = e.targetTouches[0].pageY;
});
document.addEventListener('touchmove', (e) => {
  e.preventDefault();
  let moveWidth = self.moveY - e.targetTouches[0].pageY;
  if (moveWidth !== 0) {
    document.body.scrollTop += moveWidth;
  }
});


//获取首页
function getIndexData() {
    $.ajax({
        async: false,
        type: "get",
        url:"http://hyu6209260001.my3w.com/public/index/api/home_api",
        // url:"47.110.254.11:80",
        data: {
        "name":$("#author").val(),
        "phone":$("#email").val(),
        "centent":$("#comment").val()
        },
        success: function(msg) {
        // alert(msg);
        var data = JSON.parse(msg);
        // console.log(msg);
        if (data.msg == 1) {
            alert("您的留言我们收到，感谢您对驭浪的支持！");
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}

//获取关于我们
function getAboutData() {
    $.ajax({
        async: false,
        type: "get",
        url:"http://hyu6209260001.my3w.com/public/index/api/about_api",
        // url:"47.110.254.11:80",
        data: {
        "name":$("#author").val(),
        "phone":$("#email").val(),
        "centent":$("#comment").val()
        },
        success: function(msg) {
        // alert(msg);
        var data = JSON.parse(msg);
        // console.log(msg);
        if (data.msg == 1) {
            alert("您的留言我们收到，感谢您对驭浪的支持！");
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}

//获取公司动态
function getProjectData() {
    $.ajax({
        async: false,
        type: "get",
        url:"http://hyu6209260001.my3w.com/public/index/api/project_api",
        // url:"47.110.254.11:80",
        data: {
        "name":$("#author").val(),
        "phone":$("#email").val(),
        "centent":$("#comment").val()
        },
        success: function(msg) {
        // alert(msg);
        var data = JSON.parse(msg);
        // console.log(msg);
        if (data.msg == 1) {
            alert("您的留言我们收到，感谢您对驭浪的支持！");
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}

//获取公司动态类型
function getActiveTypeData() {
    $.ajax({
        async: false,
        type: "post",
        url:"http://hyu6209260001.my3w.com/public/index/api/active_type_api",
        // url:"47.110.254.11:80",
        data: {
        "name":$("#author").val(),
        "phone":$("#email").val(),
        "centent":$("#comment").val()
        },
        success: function(msg) {
        // alert(msg);
        var data = JSON.parse(msg);
        // console.log(msg);
        if (data.msg == 1) {
            alert("您的留言我们收到，感谢您对驭浪的支持！");
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}

//获取公司动态列表
function getActiveData() {
    $.ajax({
        async: false,
        type: "post",
        url:"http://hyu6209260001.my3w.com/public/index/api/active_api",
        // url:"47.110.254.11:80",
        data: {
        "name":$("#author").val(),
        "phone":$("#email").val(),
        "centent":$("#comment").val()
        },
        success: function(msg) {
        // alert(msg);
        var data = JSON.parse(msg);
        // console.log(msg);
        if (data.msg == 1) {
            alert("您的留言我们收到，感谢您对驭浪的支持！");
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}

//获取招聘列表
function getJobData() {
    $.ajax({
        async: false,
        type: "post",
        url:"http://hyu6209260001.my3w.com/public/index/api/job_api",
        // url:"47.110.254.11:80",
        data: {
        "name":$("#author").val(),
        "phone":$("#email").val(),
        "centent":$("#comment").val()
        },
        success: function(msg) {
        // alert(msg);
        var data = JSON.parse(msg);
        // console.log(msg);
        if (data.msg == 1) {
            alert("您的留言我们收到，感谢您对驭浪的支持！");
          };
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
             alert("请求失败，请刷新！");
          // alert(XMLHttpRequest.status);
          // alert(XMLHttpRequest.readyState);
          // alert(textStatus);
        }
    });
}