(this.webpackJsonphypermedia2=this.webpackJsonphypermedia2||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),o=n(10),l=n.n(o),a=(n(21),n(2)),d=(n(22),n(39));var r=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(i.useState)(!1),l=Object(a.a)(o,2),r=l[0],x=l[1],j=Object(i.useState)(!0),b=Object(a.a)(j,2),m=b[0],h=b[1],p=Object(i.useState)(!1),u=Object(a.a)(p,2),v=u[0],O=u[1],y=Object(i.useState)(!1),g=Object(a.a)(y,2),f=g[0],N=g[1],w=Object(i.useState)(!1),I=Object(a.a)(w,2),k=I[0],z=I[1],S=Object(i.useState)(!1),C=Object(a.a)(S,2),E=C[0],P=C[1],L=Object(i.useState)(!1),B=Object(a.a)(L,2),D=B[0],M=B[1],A=Object(i.useState)(null),F=Object(a.a)(A,2),U=F[0],W=F[1],J=Object(i.useState)(null),T=Object(a.a)(J,2),R=T[0],X=T[1],Y=Object(i.useState)(!1),q=Object(a.a)(Y,2),G=q[0],H=q[1],K=Object(i.useRef)(null),Q=Object(i.useState)([]),V=Object(a.a)(Q,2),Z=V[0],$=(V[1],function(){var e=Object(i.useState)({x:750,y:350}),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(e){c({x:e.touches[0].screenX,y:e.touches[0].screenY},{passive:!0})};return document.body.addEventListener("touchmove",e),function(){document.body.removeEventListener("touchmove",e)}}),[]),n}()),_=$.x,ee=$.y;function te(){return G?Object(c.jsxs)("div",{id:"note-pad",children:[Object(c.jsx)("input",{id:"new-note",ref:K,type:"text"}),Object(c.jsx)("div",{children:Object(c.jsx)("ul",{id:"notes-list",children:Z.map((function(e,t){return Object(c.jsx)("li",{children:e},t)}))})}),Object(c.jsx)("button",{id:"add-note-btn",onClick:function(){""!==K.current.value&&(Z.push(K.current.value),s(!n)),K.current.value=""},children:"+"})]}):null}function ne(e){e.preventDefault(),e.repeat||O(!v)}function ce(e){e.preventDefault(),e.repeat||(N(!f),v&&O(!v))}function ie(){return k?Object(c.jsx)("img",{className:"inventory-item",src:"/imgs/rod.png",alt:"small rod"}):null}function se(){return E?Object(c.jsx)("img",{className:"inventory-item mbox-inventory",src:"/imgs/musicbox-inventory.png",alt:"musicbox"}):null}function oe(){(k&&E&&null!=U&&"mbox-inventory-panel"===U.id&&null!=R&&"rod-inventory-panel"===R.id||k&&E&&null!=U&&"rod-inventory-panel"===U.id&&null!=R&&"mbox-inventory-panel"===R.id)&&(console.log("you added something together!!"),M(!0),X(null),W(null))}function le(){return D?Object(c.jsxs)("div",{className:"contextual-box",children:[Object(c.jsx)("button",{className:"btn context-btn",onClick:function(){M(!1)},children:Object(c.jsx)("span",{style:{transform:"translate(0px,-2px)"},children:"\u2612"})}),Object(c.jsx)("img",{className:"contextual-box-img",src:"/imgs/musicbox.gif",alt:"musicbox spinning"})]}):null}function ae(){return r?null:Object(c.jsx)("div",{style:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"620px",zIndex:"100",backgroundColor:"black"},children:Object(c.jsx)(d.a,{style:{zIndex:"101"}})})}return v||f?v?Object(c.jsxs)("div",{className:"content-wrap",children:[ae(),Object(c.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"scene dark1 responsive",src:"/imgs/scene2.mp4",alt:"scene two",onLoadedData:function(){x(!0)}}),Object(c.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,id:"light",className:m?"scene light1 responsive":"scene light1 responsive light-off",src:"/imgs/scene2.mp4",alt:"scene two",style:{maskPosition:"".concat(_-210,"px ").concat(ee-250,"px"),WebkitMaskPosition:"".concat(_-210,"px ").concat(ee-250,"px")}}),Object(c.jsxs)("p",{children:["x:",_]}),Object(c.jsxs)("p",{children:["y:",ee]}),k?null:Object(c.jsx)("div",{id:"rod-box",className:_>=620&&_<832&&ee>=429?"item glow":"item ",children:Object(c.jsx)("img",{id:"rod",alt:"small rod",className:"",src:"/imgs/rod.gif",onClick:function(){z(!0),document.getElementById("rod-box").style.display="none",document.getElementById("rod").classList.add("put-in-pack")},onLoad:function(){console.log("rod loaded")}})}),Object(c.jsx)("div",{id:"path-el",className:"back-to-home",onClick:function(e){ne(e),x(!1)},onMouseEnter:function(e){document.getElementById("path-text").classList.add("show")},style:{transform:"rotate(-90deg) translate(-500px, -500px)",width:"100px"},children:Object(c.jsx)("span",{id:"path-text",className:"icon",children:Object(c.jsx)("svg",{height:"80",viewBox:"0 0 52 60",width:"100",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{id:"Up-Arrow",children:[Object(c.jsx)("path",{id:"Shape",d:"m.422 48.2 4.4 10.563c.30646207.7489663 1.03576041 1.2379322 1.845 1.237h38.666c.8082203.0026096 1.5377417-.4838697 1.846-1.231 4.9-11.777 4.324-10.43 4.472-10.647.371214-.5410551.4505938-1.2307607.212-1.842l-9-23.143 3.69-8.888c.3796294-.4467605.5389673-1.0401859.4341772-1.6170156-.1047901-.5768296-.4626685-1.0762947-.9751772-1.3609844l-18.992-10.835c-.6292665-.3635455-1.4047335-.3635455-2.034 0l-19.007 10.838c-.51041628.2860644-.86605691.7855074-.96943022 1.3614167-.10337331.5759094.05636658 1.167861.43543022 1.6135833l3.7 8.9-9 23.127c-.25858821.6446969-.15295159 1.3784328.277 1.924zm44.911 9.8h-38.666l-3.748-9h46.162zm-5.633-43h4.376l-2.26 5.443zm-13.677-12.831 18.968 10.831h-5.291c-.6627701-.0061358-1.2855311.316474-1.6628338.8614001-.3773028.5449261-.4601335 1.2413795-.2211662 1.8595999l12.164 31.279h-47.975l12.178-31.28c.238474-.6179412.1555415-1.3138672-.2214702-1.8584618-.3770116-.5445947-.9991938-.8672092-1.6615298-.8615382h-5.284l-.011-.012zm-18.101 12.831h4.4l-2.132 5.461z"}),Object(c.jsx)("path",{id:"Shape",d:"m10.605 38.034c-.5332127-.1431788-1.08157088.1728546-1.225.706l-1.346 5c-.14359403.5335071.17249293 1.082406.706 1.226s1.08240597-.1724929 1.226-.706l1.346-5c.0690266-.2563388.0332935-.5296048-.0993245-.7595759-.1326179-.2299712-.351236-.3977725-.6076755-.4664241z"}),Object(c.jsx)("path",{id:"Shape",d:"m11.7 33.966c.2562027.0690611.5293493.0334647.7592956-.0989513.2299462-.1324161.397837-.3507938.4667044-.6070487l4.038-15c.143594-.5335071-.172493-1.0824059-.706-1.226-.5335071-.143594-1.082406.1724929-1.226.706l-4.032 15c-.1442267.5317199.1687826 1.0799333.7 1.226z"}),Object(c.jsx)("path",{id:"Shape",d:"m8.929 50.628c-.20544993-.5130725-.78792747-.7624499-1.301-.557s-.76244993.7879275-.557 1.301l2 5c.20544993.5130725.78792747.7624499 1.301.557.5130725-.2054499.7624499-.7879275.557-1.301z"})]})})})}),Object(c.jsx)("div",{id:"path-el",className:"to-cave-entrance",style:{width:"fit-content",height:"fit-content",transform:"rotate(90deg)"},onClick:function(e){ce(e),x(!1)},onMouseEnter:function(e){document.getElementById("path-text").classList.add("show")},children:Object(c.jsx)("span",{id:"path-text",className:"icon",children:Object(c.jsx)("svg",{height:"80",viewBox:"0 0 52 60",width:"100",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{id:"Up-Arrow",children:[Object(c.jsx)("path",{id:"Shape",d:"m.422 48.2 4.4 10.563c.30646207.7489663 1.03576041 1.2379322 1.845 1.237h38.666c.8082203.0026096 1.5377417-.4838697 1.846-1.231 4.9-11.777 4.324-10.43 4.472-10.647.371214-.5410551.4505938-1.2307607.212-1.842l-9-23.143 3.69-8.888c.3796294-.4467605.5389673-1.0401859.4341772-1.6170156-.1047901-.5768296-.4626685-1.0762947-.9751772-1.3609844l-18.992-10.835c-.6292665-.3635455-1.4047335-.3635455-2.034 0l-19.007 10.838c-.51041628.2860644-.86605691.7855074-.96943022 1.3614167-.10337331.5759094.05636658 1.167861.43543022 1.6135833l3.7 8.9-9 23.127c-.25858821.6446969-.15295159 1.3784328.277 1.924zm44.911 9.8h-38.666l-3.748-9h46.162zm-5.633-43h4.376l-2.26 5.443zm-13.677-12.831 18.968 10.831h-5.291c-.6627701-.0061358-1.2855311.316474-1.6628338.8614001-.3773028.5449261-.4601335 1.2413795-.2211662 1.8595999l12.164 31.279h-47.975l12.178-31.28c.238474-.6179412.1555415-1.3138672-.2214702-1.8584618-.3770116-.5445947-.9991938-.8672092-1.6615298-.8615382h-5.284l-.011-.012zm-18.101 12.831h4.4l-2.132 5.461z"}),Object(c.jsx)("path",{id:"Shape",d:"m10.605 38.034c-.5332127-.1431788-1.08157088.1728546-1.225.706l-1.346 5c-.14359403.5335071.17249293 1.082406.706 1.226s1.08240597-.1724929 1.226-.706l1.346-5c.0690266-.2563388.0332935-.5296048-.0993245-.7595759-.1326179-.2299712-.351236-.3977725-.6076755-.4664241z"}),Object(c.jsx)("path",{id:"Shape",d:"m11.7 33.966c.2562027.0690611.5293493.0334647.7592956-.0989513.2299462-.1324161.397837-.3507938.4667044-.6070487l4.038-15c.143594-.5335071-.172493-1.0824059-.706-1.226-.5335071-.143594-1.082406.1724929-1.226.706l-4.032 15c-.1442267.5317199.1687826 1.0799333.7 1.226z"}),Object(c.jsx)("path",{id:"Shape",d:"m8.929 50.628c-.20544993-.5130725-.78792747-.7624499-1.301-.557s-.76244993.7879275-.557 1.301l2 5c.20544993.5130725.78792747.7624499 1.301.557.5130725-.2054499.7624499-.7879275.557-1.301z"})]})})})}),Object(c.jsxs)("div",{id:"inventory",children:[te(),Object(c.jsx)("span",{id:"notes-icon",style:{position:"absolute",fontSize:"70px",transform:"translate(-60px, 0px)",cursor:"pointer"},onClick:function(){H(!G)},children:"\u270e"}),Object(c.jsx)("div",{id:"rod-inventory-panel",className:k&&E&&null!=U&&"mbox-inventory-panel"===U.id?"inventory-item-box add-item":"inventory-item-box",tabIndex:"0",onClick:function(e){e.preventDefault(),X(U),W(document.activeElement),console.log(U)},children:ie()}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{id:"mbox-inventory-panel",className:k&&E&&null!=U&&"rod-inventory-panel"===U.id?"inventory-item-box add-item":"inventory-item-box",tabIndex:"0",onClick:function(e){e.preventDefault(),X(U),W(document.activeElement),console.log(U)},children:se()}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("span",{id:"flashlight-icon",onClick:function(){h(!m)},children:"\ud83d\udd26"})]}),oe(),le()]},"2"):f?Object(c.jsxs)("div",{className:"content-wrap",children:[ae(),Object(c.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"scene dark1 responsive",src:"/imgs/scene3.mp4",alt:"scene",onLoadedData:function(){x(!0)}}),Object(c.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,id:"light",className:m?"scene light1 responsive":"scene light1 responsive light-off",src:"/imgs/scene3.mp4",alt:"scene",style:{maskPosition:"".concat(_-210,"px ").concat(ee-250,"px"),WebkitMaskPosition:"".concat(_-210,"px ").concat(ee-250,"px")}}),Object(c.jsxs)("p",{children:["x:",_]}),Object(c.jsxs)("p",{children:["y:",ee]}),E?null:Object(c.jsx)("div",{id:"mbox-ground-box",className:_<=177&&ee<=388&&ee>=147?"item glow":"item ",children:Object(c.jsx)("img",{id:"mbox-ground",className:"",src:"/imgs/musicbox-ground.gif",alt:"musicbox",onClick:function(){P(!0)}})}),Object(c.jsx)("div",{id:"path-el",className:"back-left",style:{width:"fit-content",height:"fit-content",transform:"rotate(-90deg)"},onClick:function(e){ce(e),ne(e),x(!1)},onMouseEnter:function(e){document.getElementById("path-text").classList.add("show")},children:Object(c.jsx)("span",{id:"path-text",className:"icon",children:Object(c.jsx)("svg",{height:"80",viewBox:"0 0 52 60",width:"100",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{id:"Up-Arrow",children:[Object(c.jsx)("path",{id:"Shape",d:"m.422 48.2 4.4 10.563c.30646207.7489663 1.03576041 1.2379322 1.845 1.237h38.666c.8082203.0026096 1.5377417-.4838697 1.846-1.231 4.9-11.777 4.324-10.43 4.472-10.647.371214-.5410551.4505938-1.2307607.212-1.842l-9-23.143 3.69-8.888c.3796294-.4467605.5389673-1.0401859.4341772-1.6170156-.1047901-.5768296-.4626685-1.0762947-.9751772-1.3609844l-18.992-10.835c-.6292665-.3635455-1.4047335-.3635455-2.034 0l-19.007 10.838c-.51041628.2860644-.86605691.7855074-.96943022 1.3614167-.10337331.5759094.05636658 1.167861.43543022 1.6135833l3.7 8.9-9 23.127c-.25858821.6446969-.15295159 1.3784328.277 1.924zm44.911 9.8h-38.666l-3.748-9h46.162zm-5.633-43h4.376l-2.26 5.443zm-13.677-12.831 18.968 10.831h-5.291c-.6627701-.0061358-1.2855311.316474-1.6628338.8614001-.3773028.5449261-.4601335 1.2413795-.2211662 1.8595999l12.164 31.279h-47.975l12.178-31.28c.238474-.6179412.1555415-1.3138672-.2214702-1.8584618-.3770116-.5445947-.9991938-.8672092-1.6615298-.8615382h-5.284l-.011-.012zm-18.101 12.831h4.4l-2.132 5.461z"}),Object(c.jsx)("path",{id:"Shape",d:"m10.605 38.034c-.5332127-.1431788-1.08157088.1728546-1.225.706l-1.346 5c-.14359403.5335071.17249293 1.082406.706 1.226s1.08240597-.1724929 1.226-.706l1.346-5c.0690266-.2563388.0332935-.5296048-.0993245-.7595759-.1326179-.2299712-.351236-.3977725-.6076755-.4664241z"}),Object(c.jsx)("path",{id:"Shape",d:"m11.7 33.966c.2562027.0690611.5293493.0334647.7592956-.0989513.2299462-.1324161.397837-.3507938.4667044-.6070487l4.038-15c.143594-.5335071-.172493-1.0824059-.706-1.226-.5335071-.143594-1.082406.1724929-1.226.706l-4.032 15c-.1442267.5317199.1687826 1.0799333.7 1.226z"}),Object(c.jsx)("path",{id:"Shape",d:"m8.929 50.628c-.20544993-.5130725-.78792747-.7624499-1.301-.557s-.76244993.7879275-.557 1.301l2 5c.20544993.5130725.78792747.7624499 1.301.557.5130725-.2054499.7624499-.7879275.557-1.301z"})]})})})}),Object(c.jsxs)("div",{id:"inventory",children:[te(),Object(c.jsx)("span",{id:"notes-icon",style:{position:"absolute",fontSize:"70px",transform:"translate(-60px, 0px)",cursor:"pointer"},onClick:function(){H(!G)},children:"\u270e"}),Object(c.jsx)("div",{id:"rod-inventory-panel",className:k&&E&&null!=U&&"mbox-inventory-panel"===U.id?"inventory-item-box add-item":"inventory-item-box",tabIndex:"0",onClick:function(e){e.preventDefault(),X(U),W(document.activeElement),console.log(U)},children:ie()}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{id:"mbox-inventory-panel",className:k&&E&&null!=U&&"rod-inventory-panel"===U.id?"inventory-item-box add-item":"inventory-item-box",tabIndex:"0",onClick:function(e){e.preventDefault(),X(U),W(document.activeElement),console.log(U)},children:se()}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("span",{id:"flashlight-icon",onClick:function(){h(!m)},children:"\ud83d\udd26"})]}),oe(),le()]},"3"):void 0:Object(c.jsxs)("div",{className:"content-wrap",children:[ae(),Object(c.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"scene dark1 responsive",src:"/imgs/scene1.mp4",alt:"scene one",onLoadedData:function(){x(!0)}}),Object(c.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,id:"light",className:m?"scene light1 responsive":"scene light1 responsive light-off",src:"/imgs/scene1.mp4",alt:"scene 1",style:{maskPosition:"".concat(_-210,"px ").concat(ee-250,"px"),WebkitMaskPosition:"".concat(_-210,"px ").concat(ee-250,"px")}}),Object(c.jsxs)("p",{children:["x:",_]}),Object(c.jsxs)("p",{children:["y:",ee]}),Object(c.jsx)("div",{id:"path-el",onClick:function(e){ne(e),x(!1)},onMouseEnter:function(e){document.getElementById("path-text").classList.add("show")},children:Object(c.jsx)("span",{id:"path-text",className:"icon",children:Object(c.jsx)("svg",{height:"80",viewBox:"0 0 52 60",width:"100",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsxs)("g",{id:"Up-Arrow",children:[Object(c.jsx)("path",{id:"Shape",d:"m.422 48.2 4.4 10.563c.30646207.7489663 1.03576041 1.2379322 1.845 1.237h38.666c.8082203.0026096 1.5377417-.4838697 1.846-1.231 4.9-11.777 4.324-10.43 4.472-10.647.371214-.5410551.4505938-1.2307607.212-1.842l-9-23.143 3.69-8.888c.3796294-.4467605.5389673-1.0401859.4341772-1.6170156-.1047901-.5768296-.4626685-1.0762947-.9751772-1.3609844l-18.992-10.835c-.6292665-.3635455-1.4047335-.3635455-2.034 0l-19.007 10.838c-.51041628.2860644-.86605691.7855074-.96943022 1.3614167-.10337331.5759094.05636658 1.167861.43543022 1.6135833l3.7 8.9-9 23.127c-.25858821.6446969-.15295159 1.3784328.277 1.924zm44.911 9.8h-38.666l-3.748-9h46.162zm-5.633-43h4.376l-2.26 5.443zm-13.677-12.831 18.968 10.831h-5.291c-.6627701-.0061358-1.2855311.316474-1.6628338.8614001-.3773028.5449261-.4601335 1.2413795-.2211662 1.8595999l12.164 31.279h-47.975l12.178-31.28c.238474-.6179412.1555415-1.3138672-.2214702-1.8584618-.3770116-.5445947-.9991938-.8672092-1.6615298-.8615382h-5.284l-.011-.012zm-18.101 12.831h4.4l-2.132 5.461z"}),Object(c.jsx)("path",{id:"Shape",d:"m10.605 38.034c-.5332127-.1431788-1.08157088.1728546-1.225.706l-1.346 5c-.14359403.5335071.17249293 1.082406.706 1.226s1.08240597-.1724929 1.226-.706l1.346-5c.0690266-.2563388.0332935-.5296048-.0993245-.7595759-.1326179-.2299712-.351236-.3977725-.6076755-.4664241z"}),Object(c.jsx)("path",{id:"Shape",d:"m11.7 33.966c.2562027.0690611.5293493.0334647.7592956-.0989513.2299462-.1324161.397837-.3507938.4667044-.6070487l4.038-15c.143594-.5335071-.172493-1.0824059-.706-1.226-.5335071-.143594-1.082406.1724929-1.226.706l-4.032 15c-.1442267.5317199.1687826 1.0799333.7 1.226z"}),Object(c.jsx)("path",{id:"Shape",d:"m8.929 50.628c-.20544993-.5130725-.78792747-.7624499-1.301-.557s-.76244993.7879275-.557 1.301l2 5c.20544993.5130725.78792747.7624499 1.301.557.5130725-.2054499.7624499-.7879275.557-1.301z"})]})})})}),Object(c.jsxs)("div",{id:"inventory",children:[te(),Object(c.jsx)("span",{id:"notes-icon",style:{position:"absolute",fontSize:"70px",transform:"translate(-60px, 0px)",cursor:"pointer"},onClick:function(){H(!G)},children:"\u270e"}),Object(c.jsx)("div",{id:"rod-inventory-panel",className:k&&E&&null!=U&&"mbox-inventory-panel"===U.id?"inventory-item-box add-item":"inventory-item-box",tabIndex:"0",onClick:function(e){e.preventDefault(),X(U),W(document.activeElement),console.log(U)},children:ie()}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{id:"mbox-inventory-panel",className:k&&E&&null!=U&&"rod-inventory-panel"===U.id?"inventory-item-box add-item":"inventory-item-box",tabIndex:"0",onClick:function(e){e.preventDefault(),X(U),W(document.activeElement),console.log(U)},children:se()}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("div",{className:"inventory-item-box",tabIndex:"0"}),Object(c.jsx)("span",{id:"flashlight-icon",onClick:function(){h(!m)},children:"\ud83d\udd26"})]}),oe(),le()]},"1")},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(r,{})}),document.getElementById("root")),x()}},[[27,1,2]]]);
//# sourceMappingURL=main.328beb8e.chunk.js.map