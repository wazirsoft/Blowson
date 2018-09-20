import e from"chance";import t from"slugify";import n from"md5";import{format as i}from"date-fns";import r from"numeral";import a from"prob.js";import s from"lodash";import o from"faker";var l=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},u=function(e){for(var t;!t;)t=e[l(0,e.length-1)];return t},d=function(e){return e.endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!p.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s")},f=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},h=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],c=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],p=["a","e","i","o","u","y"],g=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],m=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],v=["noun","a_noun","nouns","adjective","an_adjective"],y={noun:function(){return u(h)},a_noun:function(){return f(u(h))},nouns:function(){return d(u(h))},adjective:function(){return u(c)},an_adjective:function(){return f(u(c))}},b=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var r=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),a=void 0;v.includes(r)&&(a=y[r]()),t=t.replace(n[i],a)}return t}(u(g))},w=function(){var e,t=(Math.random()<.33?u(m):"")+b();if(t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),u(e)),Math.random()>=.9){t=u(["He said","She said","In his own words","In her own words","Yelling","Wispering","Quoting with intend"])+': "'+t+'"'}return t},M=function(e){void 0===e&&(e=0),e||(e=l(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=w();n.push(i)}return n.join(" ")},j=function(e){void 0===e&&(e=0),e||(e=l(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=M();n.push(i)}return n.join("\n\n")},_=new e;function k(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),r=""+n.getDate(),a=n.getFullYear(),s=""+n.getHours(),o=""+n.getMinutes(),l=""+n.getSeconds();return i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),s.length<2&&(s="0"+s),o.length<2&&(o="0"+o),l.length<2&&(l="0"+l),[a,i,r].join("-")+"T"+[s,o,l].join(":")+"+01:00"}function W(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),r=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&r.push(t);return r.length>0&&{start:Math.min.apply(Math,r),end:Math.max.apply(Math,r)}}function x(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function T(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var r=x(i[n]);r>t&&(t=r)}return t}function C(e){for(var t,n=!0,i=0,r=e;i<r.length;i+=1)if(H(t=r[i])!==t){n=!1;break}return n}function E(e){return Math.min.apply(Math,e)}function N(e){return Math.max.apply(Math,e)}function q(e){for(var t,n,i=999999999,r=0,a=e;r<a.length;r+=1){t=a[r];for(var s=0,o=e;s<o.length;s+=1)t!==(n=o[s])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function z(e,t,n){var i,r;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,r=Math.random(),r*=i,r=Math.floor(r),r*=n,r+=e}function D(e,t){var n=Math.abs((a.normal(0,1)()+3)/6),i=Math.floor(n*(t-e)+e);return i<e&&(i=e),i>t&&(i=t),i}function S(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function O(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function $(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function I(e){return Math.min.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function U(e){return Math.max.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function A(e){return Math.min.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function L(e){return Math.max.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function F(e){return new Date(Math.min.apply(null,e))}function J(e){return new Date(Math.max.apply(null,e))}function Y(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function H(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function P(e,t){for(var n,i={},r=[],a=0,s=e;a<s.length;a+=1)void 0===i[n=s[a]]?i[n]=1:i[n]++;for(var o=0,l=t;o<l.length;o+=1)r.push(i[n=l[o]]);return r}function Q(e,a){e=String(e);var s=Number(e);if("slug"===a)return t(e,{lower:!0});if("lower"===a)return e.toLowerCase();if("uppper"===a)return e.toLowerCase();if("md5"===a)return n(e);if("capitalize"===a)return H(e);if("trim"===a)return e.replace(/\s/g,"");if(NaN!==s&&"round"===a)return Math.round(e);if(NaN!==s&&"floor"===a)return Math.floor(e);if(NaN!==s&&"num:"===a.substring(0,4)){var o=a.split(":");return r(s).format(o[1])}if("optional"===a&&Math.random()>=.5)return"";if("date:"===a.substring(0,5)){var l=a.split(":");return i(new Date(e),l[1])}return e}function B(e,t){for(var n=Q(e,t[1]),i=2;t.length>i;)n=Q(n,t[i]),i++;return n}function G(e,t,n){var i=!1,r=t.slice(0),a=e;if(0===t.length)return null;for(;!i;){var s=r.shift();if(void 0===a[s+"_id"])return void 0!==a[s]?void 0!==a[s][t[t.length-1]]?a[s][t[t.length-1]]:"object"!=typeof a[s]?a[s]:null:null;var o=void 0,l=d(s);if(void 0!==n[l])for(o in n[l])n[l][o].id===a[s+"_id"]&&(a=n[l][o]);0===r.length&&(i=!0)}return null}function K(e){var t="undefined",n=!1;return"boolean"==typeof e?t="boolean":"number"==typeof e?t=Math.round(e)===e?"int":"float":"string"==typeof e?/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e)?t="date":!function(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}(e)?!function(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(e)}(e)?1===e.length?t="char":(/{{\s*([\w\.\?\|\:]+)\s*}}/.test(e)&&(n=!0),t="string"):t="time":t="datetime":"object"==typeof e&&(t=Array.isArray(e)?"array":"JSON"),{fieldType:t,containsTemplate:n}}function R(e,t,n){return t==n?e:(e.hasOwnProperty(t)&&(e[n]=e[t],delete e[t]),e)}var V,X=new e;V=g.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),g=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(V),module.exports=function(e){var t,n,i,r,a,l,u,d,f,h,c,p,g,m=[],v={},b=[];for(t in e)for(r in e[t])for(i in e[t][r]){var x=i.split("__");"__"!==i.substr(0,2)?x.length>1&&(v[t+"."+x[1]]=t+"."+x[0],R(e[t][r],i,x[1])):(b.push(t+"."+i.substr(2)),R(e[t][r],i,i.substr(2)))}for(t in e){var Q={key:t,minID:1,maxID:1,totalCount:0,fields:{}};for(r in e[t])for(i in e[t][r]){var V=e[t][r][i],Z=K(V),ee=Z.fieldType,te=Z.containsTemplate;if(void 0===Q.fields[i]?Q.fields[i]={types:[ee],entries:[V],allEntries:[V],containsTemplate:te,cnt:1}:(Q.fields[i].types.push(ee),Q.fields[i].types=s.uniq(Q.fields[i].types),Q.fields[i].entries.push(V),Q.fields[i].entries=s.uniq(Q.fields[i].entries),Q.fields[i].allEntries.push(V),Q.fields[i].cnt++,te&&(Q.fields[i].containsTemplate=!0)),"JSON"===ee){var ne=void 0;for(ne in V){var ie=V[ne],re=K(ie),ae=re.fieldType,se=re.containsTemplate;void 0===Q.fields[i+"."+ne]?Q.fields[i+"."+ne]={types:[ae],entries:[ie],allEntries:[ie],containsTemplate:se,cnt:1}:(Q.fields[i+"."+ne].types.push(ae),Q.fields[i+"."+ne].types=s.uniq(Q.fields[i+"."+ne].types),Q.fields[i+"."+ne].entries.push(ie),Q.fields[i+"."+ne].entries=s.uniq(Q.fields[i+"."+ne].entries),Q.fields[i+"."+ne].allEntries.push(ie),Q.fields[i+"."+ne].cnt++,se&&(Q.fields[i+"."+ne].objContainsTemplate=!0))}}}for(i in Q.fields)"id"===i&&(Q.totalCount=Q.fields[i].cnt),1===Q.fields[i].types.length&&(Q.fields[i].type=Q.fields[i].types[0]),Q.fields[i].entries.length<Q.fields[i].cnt||Q.fields[i].containsTemplate?(Q.fields[i].repeatEntries=!0,Q.fields[i].weights=P(Q.fields[i].allEntries,Q.fields[i].entries)):Q.fields[i].repeatEntries=!1,Q.fields[i].required=!(Q.fields[i].cnt<Q.totalCount);Q.gap=W(Q.fields.id.entries),m.push(Q)}for(t in m){var oe=m[t];if(oe.gap){var le=void 0,ue=void 0;for(le=oe.gap.start;le<=oe.gap.end;le++){var de={};for(ue in oe.fields){var fe="";if(oe.fields[ue].repeatEntries||oe.fields[ue].containsTemplate)fe=X.weighted(oe.fields[ue].entries,oe.fields[ue].weights);else{if("id"===ue&&(fe=le),"age"!==ue&&!ue.endsWith(".age")||"int"!==oe.fields[ue].type||(fe=X.age()),"firstname"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.first()),"lastname"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.last()),"company"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.company()),"country"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.country()),"email"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.internet.exampleEmail()),"color"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.color()),"ip"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.ip()),"profession"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.profession()),"url"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.url()),"city"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.city()),"street"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.street()),"zip"!==ue&&!ue.endsWith(".age")||"int"!==oe.fields[ue].type||(fe=parseInt(X.zip())),"weekday"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.weekday()),"year"!==ue&&!ue.endsWith(".age")||"int"!==oe.fields[ue].type||(fe=parseInt(X.year())),"password"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.hash()),"guid"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=X.guid()),"product"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.commerce.productName()),"material"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.commerce.productMaterial()),"iban"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.finance.iban()),"bic"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.finance.bic()),"avatar"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.image.avatar()),"username"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.internet.userName()),"homepage"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.internet.url()),"job"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.name.jobTitle()),"mimetype"!==ue&&!ue.endsWith(".age")||"string"!==oe.fields[ue].type||(fe=o.system.mimeType()),""===fe&&"JSON"===oe.fields[ue].type&&(fe={}),""===fe&&"array"===oe.fields[ue].type){for(var he=null,ce=null,pe=0,ge=0,me=oe.fields[ue].entries;ge<me.length;ge+=1){arrEntry=me[ge];var ve=E(arrEntry),ye=N(arrEntry),be=arrEntry.length;be>0&&(null===he||ve<he)&&(he=ve),be>0&&(null===ce||ye>ce)&&(ce=ye),be>pe&&(pe=be)}(fe=Array.from({length:Math.floor(Math.random()*pe)+1},function(){return z(he,ce,1)})).sort(function(e,t){return e-t})}if(""===fe&&"string"===oe.fields[ue].type){var we=Math.min.apply(Math,oe.fields[ue].entries.map(function(e){return e.length})),Me=S(oe.fields[ue].entries),je=O(oe.fields[ue].entries),_e=$(oe.fields[ue].entries),ke=I(oe.fields[ue].entries),We=U(oe.fields[ue].entries),xe=A(oe.fields[ue].entries),Te=L(oe.fields[ue].entries);fe=Te>1?j(Math.floor(Math.random()*Te)+xe):We>1?M(Math.floor(Math.random()*We)+ke):_e>1?X.sentence({words:Math.floor(Math.random()*_e)+je}).slice(0,-1):oe.fields[ue].entries[0][0].toUpperCase()===oe.fields[ue].entries[0][0]?X.capitalize(X.word({length:Math.floor(Math.random()*we)+Me})):X.string({length:Math.floor(Math.random()*we)+Me}),oe.fields[ue].entries[0]===oe.fields[ue].entries[0].toUpperCase()?fe=fe.toUpperCase():oe.fields[ue].entries[0]===oe.fields[ue].entries[0].toLowerCase()?fe=fe.toLowerCase():C(oe.fields[ue].entries)&&(fe=H(fe))}if(""===fe&&"int"===oe.fields[ue].type){var Ce=E(oe.fields[ue].entries),Ee=N(oe.fields[ue].entries),Ne=q(oe.fields[ue].entries);fe=ue.endsWith("_id")?D(Ce,Ee):z(Ce,Ee,Ne)}if(""===fe&&"float"===oe.fields[ue].type){var qe=E(oe.fields[ue].entries),ze=N(oe.fields[ue].entries),De=T(oe.fields[ue].entries);fe=Number((Math.random()*ze+qe).toFixed(De))}if(""===fe&&"char"===oe.fields[ue].type&&(fe=oe.fields[ue].entries[0]===oe.fields[ue].entries[0].toUpperCase()?X.letter({casing:"upper"}):oe.fields[ue].entries[0]===oe.fields[ue].entries[0].toLowerCase()?X.letter({casing:"lower"}):X.letter()),""===fe&&"date"===oe.fields[ue].type){var Se=F(Y(oe.fields[ue].entries)),Oe=J(Y(oe.fields[ue].entries));d=Se,f=Oe,h=void 0,c=void 0,p=void 0,g=void 0,h=new Date(d.getTime()+Math.random()*(f.getTime()-d.getTime())),c=""+(h.getMonth()+1),p=""+h.getDate(),g=h.getFullYear(),c.length<2&&(c="0"+c),p.length<2&&(p="0"+p),fe=[g,c,p].join("-")}if(""===fe&&"datetime"===oe.fields[ue].type)fe=k(F(Y(oe.fields[ue].entries)),J(Y(oe.fields[ue].entries)));""===fe&&"time"===oe.fields[ue].type&&(a=void 0,l=void 0,u=void 0,a=String(_.hour({twentyfour:!0})),l=String(_.minute()),u=String(_.second()),fe=[a,l,u].join(":"))}if(oe.fields[ue].required||Math.random()>=.5)if(ue.indexOf(".")>-1){var $e=ue.split(".");void 0!==de[$e[0]]&&(de[$e[0]][$e[1]]=fe)}else de[ue]=fe}e[oe.key].push(de)}}}for(t in e)for(n in e[t])for(i in e[t][n]){var Ie=e[t][n][i];"string"==typeof Ie&&(e[t][n][i]=Ie.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(i,r){var a=r.split("?"),s=a[0].split("|"),o=s[0].split(".");if("number"===o[0]&&1===o.length)return Math.floor(10*Math.random());if("sentence"===o[0]&&1===o.length)return w();if("paragraph"===o[0]&&1===o.length)return M();if("word"===o[0]&&2===o.length){if(void 0!==y[o[1]])return s.length>1?B(y[o[1]](),s):y[o[1]]()}else{if("field"===o[0]&&2===o.length&&void 0!==e[t][n][o[1]])return s.length>1?B(e[t][n][o[1]],s):e[t][n][o[1]];if("field"===o[0]&&o.length>2){var l=o.slice(1),u=G(e[t][n],l,e);if(null!==u)return s.length>1?B(u,s):u;if(a.length>1)return a[1]}else if(a.length>1)return a[1]}return i}),e[t][n][i]=e[t][n][i].replace(/  +/g," "))}for(t in e)for(r in e[t])for(i in e[t][r])b.indexOf(t+"."+i)>-1&&delete e[t][r][i],void 0!==v[t+"."+i]&&R(e[t][r],i,v[t+"."+i].split(".")[1]);return e};
//# sourceMappingURL=blowson.m.js.map
