import{S as q,i as j,s as B,k,q as R,a as T,l as x,m as E,r as Y,h as z,c as A,n as P,b as L,E as I,K as O,L as G,B as M,J as Q,M as N,u as U}from"../../../chunks/index-c7dfad0f.js";import{p as V}from"../../../chunks/parse-c28c2630.js";import{d as _}from"../../../chunks/singletons-e4e54494.js";/* empty css                               */_.disable_scroll_handling;_.goto;_.invalidate;const J=_.invalidateAll;_.prefetch;_.prefetch_routes;_.before_navigate;_.after_navigate;const X=_.apply_action;function Z(o){const e=JSON.parse(o);return e.data&&(e.data=V(e.data)),e}function ee(o,e=()=>{}){const n=async({action:a,result:l,reset:d})=>{l.type==="success"&&(d!==!1&&HTMLFormElement.prototype.reset.call(o),await J()),(location.origin+location.pathname===a.origin+a.pathname||l.type==="redirect"||l.type==="error")&&X(l)};async function h(a){var W,g,w,c,m;a.preventDefault();const l=new URL((W=a.submitter)!=null&&W.hasAttribute("formaction")?a.submitter.formAction:HTMLFormElement.prototype.cloneNode.call(o).action),d=new FormData(o),y=(g=a.submitter)==null?void 0:g.getAttribute("name");y&&d.append(y,(c=(w=a.submitter)==null?void 0:w.getAttribute("value"))!=null?c:"");const s=new AbortController;let u=!1;const b=(m=await e({action:l,cancel:()=>u=!0,controller:s,data:d,form:o}))!=null?m:n;if(u)return;let i;try{const f=await fetch(l,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:d,signal:s.signal});i=Z(await f.text())}catch(f){if((f==null?void 0:f.name)==="AbortError")return;i={type:"error",error:f}}b({action:l,data:d,form:o,update:f=>n({action:l,result:i,reset:f==null?void 0:f.reset}),result:i,get type(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")},get location(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")},get error(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")}})}return HTMLFormElement.prototype.addEventListener.call(o,"submit",h),{destroy(){HTMLFormElement.prototype.removeEventListener.call(o,"submit",h)}}}var D={};D.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];D.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];D.elizaQuits=["bye","goodbye","done","exit","quit"];D.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];D.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];D.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};D.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];D.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var t=D;function p(o){this.noRandom=!!o,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}p.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var o=0;o<t.elizaKeywords.length;o++){this.lastchoice[o]=[];for(var e=t.elizaKeywords[o][2],n=0;n<e.length;n++)this.lastchoice[o][n]=-1}};p.prototype._dataParsed=!1;p.prototype._init=function(){var o={};if(t.elizaSynons&&typeof t.elizaSynons=="object")for(var e in t.elizaSynons)o[e]="("+e+"|"+t.elizaSynons[e].join("|")+")";(!t.elizaKeywords||typeof t.elizaKeywords.length>"u")&&(t.elizaKeywords=[["###",0,[["###",[]]]]]);for(var n=/@(\S+)/,h=/(\S)\s*\*\s*(\S)/,a=/^\s*\*\s*(\S)/,l=/(\S)\s*\*\s*$/,d=/^\s*\*\s*$/,y=/\s+/g,s=0;s<t.elizaKeywords.length;s++){var u=t.elizaKeywords[s][2];t.elizaKeywords[s][3]=s;for(var e=0;e<u.length;e++){var r=u[e];if(r[0].charAt(0)=="$"){for(var b=1;r[0].charAt[b]==" ";)b++;r[0]=r[0].substring(b),r[2]=!0}else r[2]=!1;for(var i=n.exec(r[0]);i;){var W=o[i[1]]?o[i[1]]:i[1];r[0]=r[0].substring(0,i.index)+W+r[0].substring(i.index+i[0].length),i=n.exec(r[0])}if(d.test(r[0]))r[0]="\\s*(.*)\\s*";else{if(i=h.exec(r[0]),i){for(var g="",w=r[0];i;)g+=w.substring(0,i.index+1),i[1]!=")"&&(g+="\\b"),g+="\\s*(.*)\\s*",i[2]!="("&&i[2]!="\\"&&(g+="\\b"),g+=i[2],w=w.substring(i.index+i[0].length),i=h.exec(w);r[0]=g+w}if(i=a.exec(r[0]),i){var g="\\s*(.*)\\s*";i[1]!=")"&&i[1]!="\\"&&(g+="\\b"),r[0]=g+r[0].substring(i.index-1+i[0].length)}if(i=l.exec(r[0]),i){var g=r[0].substring(0,i.index+1);i[1]!="("&&(g+="\\b"),r[0]=g+"\\s*(.*)\\s*"}}r[0]=r[0].replace(y,"\\s+"),y.lastIndex=0}}if(t.elizaKeywords.sort(this._sortKeywords),p.prototype.pres={},p.prototype.posts={},t.elizaPres&&t.elizaPres.length){for(var c=new Array,e=0;e<t.elizaPres.length;e+=2)c.push(t.elizaPres[e]),p.prototype.pres[t.elizaPres[e]]=t.elizaPres[e+1];p.prototype.preExp=new RegExp("\\b("+c.join("|")+")\\b")}else p.prototype.preExp=/####/,p.prototype.pres["####"]="####";if(t.elizaPosts&&t.elizaPosts.length){for(var c=new Array,e=0;e<t.elizaPosts.length;e+=2)c.push(t.elizaPosts[e]),p.prototype.posts[t.elizaPosts[e]]=t.elizaPosts[e+1];p.prototype.postExp=new RegExp("\\b("+c.join("|")+")\\b")}else p.prototype.postExp=/####/,p.prototype.posts["####"]="####";(!t.elizaQuits||typeof t.elizaQuits.length>"u")&&(t.elizaQuits=[]),p.prototype._dataParsed=!0};p.prototype._sortKeywords=function(o,e){return o[1]>e[1]?-1:o[1]<e[1]||o[3]>e[3]?1:o[3]<e[3]?-1:0};p.prototype.transform=function(o){var e="";this.quit=!1,o=o.toLowerCase(),o=o.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),o=o.replace(/\s+-+\s+/g,"."),o=o.replace(/\s*[,\.\?!;]+\s*/g,"."),o=o.replace(/\s*\bbut\b\s*/g,"."),o=o.replace(/\s{2,}/g," ");for(var n=o.split("."),h=0;h<n.length;h++){var a=n[h];if(a!=""){for(var l=0;l<t.elizaQuits.length;l++)if(t.elizaQuits[l]==a)return this.quit=!0,this.getFinal();var d=this.preExp.exec(a);if(d){for(var y="",s=a;d;)y+=s.substring(0,d.index)+this.pres[d[1]],s=s.substring(d.index+d[0].length),d=this.preExp.exec(s);a=y+s}this.sentence=a;for(var u=0;u<t.elizaKeywords.length;u++)if(a.search(new RegExp("\\b"+t.elizaKeywords[u][0]+"\\b","i"))>=0&&(e=this._execRule(u)),e!="")return e}}if(e=this._memGet(),e==""){this.sentence=" ";var u=this._getRuleIndexByKey("xnone");u>=0&&(e=this._execRule(u))}return e!=""?e:"I am at a loss for words."};p.prototype._execRule=function(o){for(var e=t.elizaKeywords[o],n=e[2],h=/\(([0-9]+)\)/,a=0;a<n.length;a++){var l=this.sentence.match(n[a][0]);if(l!=null){var d=n[a][1],y=n[a][2],s=this.noRandom?0:Math.floor(Math.random()*d.length);this.noRandom&&this.lastchoice[o][a]>s||this.lastchoice[o][a]==s?(s=++this.lastchoice[o][a],s>=d.length&&(s=0,this.lastchoice[o][a]=-1)):this.lastchoice[o][a]=s;var u=d[s];if(this.debug&&alert(`match:
key: `+t.elizaKeywords[o][0]+`
rank: `+t.elizaKeywords[o][1]+`
decomp: `+n[a][0]+`
reasmb: `+u+`
memflag: `+y),u.search("^goto ","i")==0){var r=this._getRuleIndexByKey(u.substring(5));if(r>=0)return this._execRule(r)}var b=h.exec(u);if(b){for(var i="",W=u;b;){var g=l[parseInt(b[1])],w=this.postExp.exec(g);if(w){for(var c="",m=g;w;)c+=m.substring(0,w.index)+this.posts[w[1]],m=m.substring(w.index+w[0].length),w=this.postExp.exec(m);g=c+m}i+=W.substring(0,b.index)+g,W=W.substring(b.index+b[0].length),b=h.exec(W)}u=i+W}if(u=this._postTransform(u),y)this._memSave(u);else return u}}return""};p.prototype._postTransform=function(o){if(o=o.replace(/\s{2,}/g," "),o=o.replace(/\s+\./g,"."),t.elizaPostTransforms&&t.elizaPostTransforms.length)for(var e=0;e<t.elizaPostTransforms.length;e+=2)o=o.replace(t.elizaPostTransforms[e],t.elizaPostTransforms[e+1]),t.elizaPostTransforms[e].lastIndex=0;if(this.capitalizeFirstLetter){var n=/^([a-z])/,h=n.exec(o);h&&(o=h[0].toUpperCase()+o.substring(1))}return o};p.prototype._getRuleIndexByKey=function(o){for(var e=0;e<t.elizaKeywords.length;e++)if(t.elizaKeywords[e][0]==o)return e;return-1};p.prototype._memSave=function(o){this.mem.push(o),this.mem.length>this.memSize&&this.mem.shift()};p.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var o=Math.floor(Math.random()*this.mem.length),e=this.mem[o],n=o+1;n<this.mem.length;n++)this.mem[n-1]=this.mem[n];return this.mem.length--,e}else return""};p.prototype.getFinal=function(){return t.elizaFinals?t.elizaFinals[Math.floor(Math.random()*t.elizaFinals.length)]:""};p.prototype.getInitial=function(){return t.elizaInitials?t.elizaInitials[Math.floor(Math.random()*t.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(o){return this[this.length]=o});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var o=this[0],e=1;e<this.length;e++)this[e-1]=this[e];return this.length--,o});var oe=p;function $(o,e,n){const h=o.slice();return h[6]=e[n],h[8]=n,h}function F(o){let e,n,h,a=o[6].text+"",l,d;return{c(){e=k("div"),n=k("article"),h=k("span"),l=R(a),d=T()},l(y){e=x(y,"DIV",{});var s=E(e);n=x(s,"ARTICLE",{});var u=E(n);h=x(u,"SPAN",{});var r=E(h);l=Y(r,a),r.forEach(z),u.forEach(z),d=A(s),s.forEach(z)},m(y,s){L(y,e,s),I(e,n),I(n,h),I(h,l),I(e,d)},p(y,s){s&1&&a!==(a=y[6].text+"")&&U(l,a)},d(y){y&&z(e)}}}function te(o){let e,n,h,a,l,d,y,s,u,r,b,i,W,g,w=o[0],c=[];for(let m=0;m<w.length;m+=1)c[m]=F($(o,w,m));return{c(){e=k("div"),n=k("h1"),h=R("TODO: Complete assignment"),a=T(),l=k("div"),d=T(),y=k("form"),s=k("input"),u=T(),r=k("button"),b=R("Done"),i=T();for(let m=0;m<c.length;m+=1)c[m].c();this.h()},l(m){e=x(m,"DIV",{class:!0});var f=E(e);n=x(f,"H1",{});var v=E(n);h=Y(v,"TODO: Complete assignment"),v.forEach(z),a=A(f),l=x(f,"DIV",{class:!0});var S=E(l);S.forEach(z),d=A(f),y=x(f,"FORM",{method:!0});var H=E(y);s=x(H,"INPUT",{type:!0,name:!0,id:!0}),u=A(H),r=x(H,"BUTTON",{class:!0,type:!0});var C=E(r);b=Y(C,"Done"),C.forEach(z),H.forEach(z),i=A(f);for(let K=0;K<c.length;K+=1)c[K].l(f);f.forEach(z),this.h()},h(){P(l,"class","scrollable"),P(s,"type","text"),P(s,"name","text"),P(s,"id","newText"),P(r,"class","submitbutton"),P(r,"type","button"),P(y,"method","post"),P(e,"class","container")},m(m,f){L(m,e,f),I(e,n),I(n,h),I(e,a),I(e,l),I(e,d),I(e,y),I(y,s),I(y,u),I(y,r),I(r,b),I(e,i);for(let v=0;v<c.length;v+=1)c[v].m(e,null);W||(g=[O(r,"click",o[2]),G(ee.call(null,y,o[3]))],W=!0)},p(m,[f]){if(f&1){w=m[0];let v;for(v=0;v<w.length;v+=1){const S=$(m,w,v);c[v]?c[v].p(S,f):(c[v]=F(S),c[v].c(),c[v].m(e,null))}for(;v<c.length;v+=1)c[v].d(1);c.length=w.length}},i:M,o:M,d(m){m&&z(e),Q(c,m),W=!1,N(g)}}}function ae(o,e,n){let h=new oe,a=[{user:"eliza",text:h.getInitial()}];async function l(){let s=document.getElementById("newText").value;if(s===""){alert("You must enter something to do first");return}await new Promise(u=>setTimeout(u,100+Math.random()*100)),a.unshift({user:"you",text:s}),a.unshift({user:"eliza",text:h.transform(s)}),n(0,a),document.getElementById("newText").value=""}return[a,l,()=>l(),({form:s,data:u,action:r,cancel:b})=>{b(),u.get("text"),l()}]}class ue extends q{constructor(e){super(),j(this,e,ae,te,B,{})}}export{ue as default};
