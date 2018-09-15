!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("chance"),require("slugify"),require("md5"),require("date-fns"),require("lodash"),require("faker")):"function"==typeof define&&define.amd?define(["chance","slugify","md5","date-fns","lodash","faker"],t):t(e.chance,e.slugify,e.md5,e.dateFns,e.lodash,e.faker)}(this,function(e,t,n,i,a,r){e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,a=a&&a.hasOwnProperty("default")?a.default:a,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},s=function(e){for(var t;!t;)t=e[o(0,e.length-1)];return t},l=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},u=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],d=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],f=["a","e","i","o","u","y"],c=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],h=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],p=["noun","a_noun","nouns","adjective","an_adjective"],g={noun:function(){return s(u)},a_noun:function(){return l(s(u))},nouns:function(){return(e=s(u)).endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!f.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s");var e},adjective:function(){return s(d)},an_adjective:function(){return l(s(d))}},m=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var a=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),r=void 0;p.includes(a)&&(r=g[a]()),t=t.replace(n[i],r)}return t}(s(c))},v=function(){var e,t=(Math.random()<.33?s(h):"")+m();return t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),s(e))},y=function(e){void 0===e&&(e=0),e||(e=o(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=v();n.push(i)}return n.join(" ")},w=function(e){void 0===e&&(e=0),e||(e=o(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=y();n.push(i)}return n.join("\n\n")},b=new e;function M(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),a=""+n.getDate(),r=n.getFullYear(),o=""+n.getHours(),s=""+n.getMinutes(),l=""+n.getSeconds();return i.length<2&&(i="0"+i),a.length<2&&(a="0"+a),o.length<2&&(o="0"+o),s.length<2&&(s="0"+s),l.length<2&&(l="0"+l),[r,i,a].join("-")+"T"+[o,s,l].join(":")+"+01:00"}function j(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),a=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&a.push(t);return a.length>0&&{start:Math.min.apply(Math,a),end:Math.max.apply(Math,a)}}function _(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function k(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var a=_(i[n]);a>t&&(t=a)}return t}function x(e){for(var t,n=!0,i=0,a=e;i<a.length;i+=1)if(I(t=a[i])!==t){n=!1;break}return n}function q(e){return Math.min.apply(Math,e)}function C(e){return Math.max.apply(Math,e)}function z(e){for(var t,n,i=999999999,a=0,r=e;a<r.length;a+=1){t=r[a];for(var o=0,s=e;o<s.length;o+=1)t!==(n=s[o])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function D(e,t,n){var i,a;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,a=Math.random(),a*=i,a=Math.floor(a),a*=n,a+=e}function T(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function O(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function S(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function E(e){return Math.min.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function $(e){return Math.max.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function U(e){return Math.min.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function F(e){return Math.max.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function L(e){return new Date(Math.min.apply(null,e))}function N(e){return new Date(Math.max.apply(null,e))}function P(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function I(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function A(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}function J(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(e)}function W(e,t){for(var n,i={},a=[],r=0,o=e;r<o.length;r+=1)void 0===i[n=o[r]]?i[n]=1:i[n]++;for(var s=0,l=t;s<l.length;s+=1)a.push(i[n=l[s]]);return a}function Y(e,a){if(e=String(e),"slug"===a)return t(e,{lower:!0});if("lower"===a)return e.toLowerCase();if("uppper"===a)return e.toLowerCase();if("md5"===a)return n(e);if("capitalize"===a)return I(e);if("optional"===a&&Math.random()>=.5)return"";if("date:"===a.substring(0,5)){var r=a.split(":");return i.format(new Date(e),r[1])}return e}function H(e,t){for(var n=Y(e,t[1]),i=2;t.length>i;)n=Y(n,t[i]),i++;return n}function B(e,t,n){var i=!1,a=t.slice(0),r=e;if(0===t.length)return null;for(;!i;){var o=a.shift();if(void 0===r[o+"_id"])return void 0!==r[o]?r[o]:null;var s=void 0;if(void 0!==n[o+"s"])for(s in n[o+"s"])n[o+"s"][s].id===r[o+"_id"]&&(r=n[o+"s"][s]);0===a.length&&(i=!0)}return null}var G,K=new e;G=c.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),c=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(G),module.exports=function(e){var t,n,i,o,s,l,u,d,f,c,h,p,m=[];for(t in e){var _={key:t,minID:1,maxID:1,totalCount:0,fields:{}},Y=void 0,G=void 0;for(Y in e[t])for(G in e[t][Y]){var Q=e[t][Y][G],R="undefined";"boolean"==typeof Q?R="boolean":"number"==typeof Q?R=Math.round(Q)===Q?"int":"float":"string"==typeof Q?R=/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(Q)?"date":A(Q)?"datetime":J(Q)?"time":1===Q.length?"char":"string":"object"==typeof Q&&(R="JSON"),void 0===_.fields[G]?_.fields[G]={types:[R],entries:[Q],allEntries:[Q],cnt:1}:(_.fields[G].types.push(R),_.fields[G].types=a.uniq(_.fields[G].types),_.fields[G].entries.push(Q),_.fields[G].entries=a.uniq(_.fields[G].entries),_.fields[G].allEntries.push(Q),_.fields[G].cnt++)}for(G in _.fields)"id"===G&&(_.totalCount=_.fields[G].cnt),1===_.fields[G].types.length&&(_.fields[G].type=_.fields[G].types[0]),_.fields[G].entries.length<_.fields[G].cnt?(_.fields[G].repeatEntries=!0,_.fields[G].weights=W(_.fields[G].allEntries,_.fields[G].entries)):_.fields[G].repeatEntries=!1,_.fields[G].required=!(_.fields[G].cnt<_.totalCount);_.gap=j(_.fields.id.entries),m.push(_)}for(t in m){var V=m[t];if(V.gap){var X=void 0,Z=void 0;for(X=V.gap.start;X<=V.gap.end;X++){var ee={};for(Z in V.fields){var te="";if(V.fields[Z].repeatEntries)te=K.weighted(V.fields[Z].entries,V.fields[Z].weights);else{if("id"===Z&&(te=X),"age"===Z&&"int"===V.fields[Z].type&&(te=K.age()),"firstname"===Z&&"string"===V.fields[Z].type&&(te=K.first()),"lastname"===Z&&"string"===V.fields[Z].type&&(te=K.last()),"company"===Z&&"string"===V.fields[Z].type&&(te=K.company()),"country"===Z&&"string"===V.fields[Z].type&&(te=K.country()),"email"===Z&&"string"===V.fields[Z].type&&(te=r.internet.exampleEmail()),"color"===Z&&"string"===V.fields[Z].type&&(te=K.color()),"ip"===Z&&"string"===V.fields[Z].type&&(te=K.ip()),"profession"===Z&&"string"===V.fields[Z].type&&(te=K.profession()),"url"===Z&&"string"===V.fields[Z].type&&(te=K.url()),"city"===Z&&"string"===V.fields[Z].type&&(te=K.city()),"street"===Z&&"string"===V.fields[Z].type&&(te=K.street()),"zip"===Z&&"int"===V.fields[Z].type&&(te=parseInt(K.zip())),"weekday"===Z&&"string"===V.fields[Z].type&&(te=K.weekday()),"year"===Z&&"int"===V.fields[Z].type&&(te=parseInt(K.year())),"password"===Z&&"string"===V.fields[Z].type&&(te=K.hash()),"guid"===Z&&"string"===V.fields[Z].type&&(te=K.guid()),"product"===Z&&"string"===V.fields[Z].type&&(te=r.commerce.productName()),"material"===Z&&"string"===V.fields[Z].type&&(te=r.commerce.productMaterial()),"iban"===Z&&"string"===V.fields[Z].type&&(te=r.finance.iban()),"bic"===Z&&"string"===V.fields[Z].type&&(te=r.finance.bic()),"avatar"===Z&&"string"===V.fields[Z].type&&(te=r.image.avatar()),"username"===Z&&"string"===V.fields[Z].type&&(te=r.internet.userName()),"homepage"===Z&&"string"===V.fields[Z].type&&(te=r.internet.url()),"job"===Z&&"string"===V.fields[Z].type&&(te=r.name.jobTitle()),"mimetype"===Z&&"string"===V.fields[Z].type&&(te=r.system.mimeType()),""===te&&"JSON"===V.fields[Z].type&&(te={}),""===te&&"string"===V.fields[Z].type){var ne=Math.min.apply(Math,V.fields[Z].entries.map(function(e){return e.length})),ie=T(V.fields[Z].entries),ae=O(V.fields[Z].entries),re=S(V.fields[Z].entries),oe=E(V.fields[Z].entries),se=$(V.fields[Z].entries),le=U(V.fields[Z].entries),ue=F(V.fields[Z].entries);te=ue>1?w(Math.floor(Math.random()*ue)+le):se>1?y(Math.floor(Math.random()*se)+oe):re>1?K.sentence({words:Math.floor(Math.random()*re)+ae}).slice(0,-1):V.fields[Z].entries[0][0].toUpperCase()===V.fields[Z].entries[0][0]?K.capitalize(K.word({length:Math.floor(Math.random()*ne)+ie})):K.string({length:Math.floor(Math.random()*ne)+ie}),V.fields[Z].entries[0]===V.fields[Z].entries[0].toUpperCase()?te=te.toUpperCase():V.fields[Z].entries[0]===V.fields[Z].entries[0].toLowerCase()?te=te.toLowerCase():x(V.fields[Z].entries)&&(te=I(te))}if(""===te&&"int"===V.fields[Z].type)te=D(q(V.fields[Z].entries),C(V.fields[Z].entries),z(V.fields[Z].entries));if(""===te&&"float"===V.fields[Z].type){var de=q(V.fields[Z].entries),fe=C(V.fields[Z].entries),ce=k(V.fields[Z].entries);te=Number((Math.random()*fe+de).toFixed(ce))}if(""===te&&"char"===V.fields[Z].type&&(te=V.fields[Z].entries[0]===V.fields[Z].entries[0].toUpperCase()?K.letter({casing:"upper"}):V.fields[Z].entries[0]===V.fields[Z].entries[0].toLowerCase()?K.letter({casing:"lower"}):K.letter()),""===te&&"date"===V.fields[Z].type){var he=L(P(V.fields[Z].entries)),pe=N(P(V.fields[Z].entries));u=he,d=pe,f=void 0,c=void 0,h=void 0,p=void 0,f=new Date(u.getTime()+Math.random()*(d.getTime()-u.getTime())),c=""+(f.getMonth()+1),h=""+f.getDate(),p=f.getFullYear(),c.length<2&&(c="0"+c),h.length<2&&(h="0"+h),te=[p,c,h].join("-")}if(""===te&&"datetime"===V.fields[Z].type)te=M(L(P(V.fields[Z].entries)),N(P(V.fields[Z].entries)));""===te&&"time"===V.fields[Z].type&&(o=void 0,s=void 0,l=void 0,o=String(b.hour({twentyfour:!0})),s=String(b.minute()),l=String(b.second()),te=[o,s,l].join(":"))}(V.fields[Z].required||Math.random()>=.5)&&(ee[Z]=te)}e[V.key].push(ee)}}}for(t in e)for(n in e[t])for(i in e[t][n]){var ge=e[t][n][i];"string"==typeof ge&&(e[t][n][i]=ge.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(i,a){var r=a.split("?"),o=r[0].split("|"),s=o[0].split(".");if("number"===s[0]&&1===s.length)return Math.floor(10*Math.random());if("sentence"===s[0]&&1===s.length)return v();if("word"===s[0]&&2===s.length){if(void 0!==g[s[1]])return o.length>1?H(g[s[1]](),o):g[s[1]]()}else{if("field"===s[0]&&2===s.length&&void 0!==e[t][n][s[1]])return o.length>1?H(e[t][n][s[1]],o):e[t][n][s[1]];if("field"===s[0]&&s.length>2){var l=s.slice(1),u=B(e[t][n],l,e);if(null!==u)return o.length>1?H(u,o):u;if(r.length>1)return r[1]}else if(r.length>1)return r[1]}return i}),e[t][n][i]=e[t][n][i].replace(/  +/g," "))}return e}});
//# sourceMappingURL=blowson.umd.js.map
