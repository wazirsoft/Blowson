!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("lodash"),require("chance"),require("slugify"),require("md5"),require("date-fns"),require("numeral"),require("marked"),require("prob.js"),require("pluralize"),require("faker"),require("json-stringify-pretty-compact")):"function"==typeof define&&define.amd?define(["lodash","chance","slugify","md5","date-fns","numeral","marked","prob.js","pluralize","faker","json-stringify-pretty-compact"],t):t(e.lodash,e.chance,e.slugify,e.md5,e.dateFns,e.numeral,e.marked,e.Prob,e.pluralize,e.faker,e.stringify)}(this,function(e,t,n,i,r,a,s,l,o,u,d){e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,i=i&&i.hasOwnProperty("default")?i.default:i,a=a&&a.hasOwnProperty("default")?a.default:a,s=s&&s.hasOwnProperty("default")?s.default:s,l=l&&l.hasOwnProperty("default")?l.default:l,o=o&&o.hasOwnProperty("default")?o.default:o,u=u&&u.hasOwnProperty("default")?u.default:u,d=d&&d.hasOwnProperty("default")?d.default:d;var f=function(e,t){var n=e,i=t-e+1;return Math.floor(Math.random()*i)+n},p=function(e){for(var t;!t;)t=e[f(0,e.length-1)];return t},h=function(e){var t="a";return e.match(/^(a|e|i|o)/)&&(t="an"),t+" "+e},c=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],g=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],m=["a","e","i","o","u","y"],y=["the {{noun}} is {{a_noun}}","{{a_noun}} is {{an_adjective}} {{noun}}","the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}","their {{noun}} was, in this moment, {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}} from the right perspective","the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}","{{an_adjective}} {{noun}} is {{a_noun}} of the mind","the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look","authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}","we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}","they were lost without the {{adjective}} {{noun}} that composed their {{noun}}","the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}","{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}","few can name {{an_adjective}} {{noun}} that isn't {{an_adjective}} {{noun}}","some posit the {{adjective}} {{noun}} to be less than {{adjective}}","{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}","{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}","the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}","{{a_noun}} is {{a_noun}}'s {{noun}}","{{a_noun}} is the {{noun}} of {{a_noun}}","{{an_adjective}} {{noun}}'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}","{{nouns}} are {{adjective}} {{nouns}}","{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}","before {{nouns}}, {{nouns}} were only {{nouns}}","those {{nouns}} are nothing more than {{nouns}}","some {{adjective}} {{nouns}} are thought of simply as {{nouns}}","one cannot separate {{nouns}} from {{adjective}} {{nouns}}","the {{nouns}} could be said to resemble {{adjective}} {{nouns}}","{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}"],v=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],w=["noun","a_noun","nouns","adjective","an_adjective"],b={noun:function(){return p(c)},a_noun:function(){return h(p(c))},nouns:function(){return(e=p(c)).endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!m.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s");var e},adjective:function(){return p(g)},an_adjective:function(){return h(p(g))}},M=function(){return function(e){var t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(var i=0;i<n.length;i++){var r=n[i].replace("{{","").replace("}}","").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),a=void 0;w.includes(r)&&(a=b[r]()),t=t.replace(n[i],a)}return t}(p(y))},j=function(){var e,t=(Math.random()<.33?p(v):"")+M();if(t=t.charAt(0).toUpperCase()+t.slice(1),t+=(e=".......!?!?;...".split(""),p(e)),Math.random()>=.9){t=p(["He said","She said","In his own words","In her own words","Yelling","Wispering","Quoting with intend"])+': "'+t+'"'}return t},k=function(e){void 0===e&&(e=0),e||(e=f(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=j();n.push(i)}return n.join(" ")},_=function(e){void 0===e&&(e=0),e||(e=f(3,10));for(var t=Math.min(e,15),n=[];n.length<t;){var i=k();n.push(i)}return n.join("\n\n")},x=new t;function O(e,t){var n=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),i=""+(n.getMonth()+1),r=""+n.getDate(),a=n.getFullYear(),s=""+n.getHours(),l=""+n.getMinutes(),o=""+n.getSeconds();return i.length<2&&(i="0"+i),r.length<2&&(r="0"+r),s.length<2&&(s="0"+s),l.length<2&&(l="0"+l),o.length<2&&(o="0"+o),[a,i,r].join("-")+"T"+[s,l,o].join(":")+"+01:00"}function T(e){var t,n=Math.min.apply(Math,e),i=Math.max.apply(Math,e),r=[];for(t=n;t<=i;t++)-1==e.indexOf(t)&&r.push(t);return r.length>0&&{start:Math.min.apply(Math,r),end:Math.max.apply(Math,r)}}function W(e){if(!isFinite(e))return 0;for(var t=1,n=0;Math.round(e*t)/t!==e;)t*=10,n++;return n}function q(e){for(var t=0,n=0,i=e;n<i.length;n+=1){var r=W(i[n]);r>t&&(t=r)}return t}function D(e){for(var t,n=!0,i=0,r=e;i<r.length;i+=1)if(Q(t=r[i])!==t){n=!1;break}return n}function F(e){return Math.min.apply(Math,e)}function N(e){return Math.max.apply(Math,e)}function z(e){for(var t,n,i=999999999,r=0,a=e;r<a.length;r+=1){t=a[r];for(var s=0,l=e;s<l.length;s+=1)t!==(n=l[s])&&Math.abs(t-n)<i&&(i=Math.abs(t-n))}return i}function C(e,t,n){var i,r;return arguments.length<2&&(t=e,e=0),n||(n=1),i=(t-e)/n,r=Math.random(),r*=i,r=Math.floor(r),r*=n,r+=e}function E(e,t){var n=Math.abs((l.normal(0,1)()+3)/6),i=Math.floor(n*(t-e)+e);return i<e&&(i=e),i>t&&(i=t),i}function P(e){return Math.max.apply(Math,e.map(function(e){return e.length}))}function S(e){return Math.min.apply(Math,e.map(function(e){return e.split(" ").length}))}function $(e){return Math.max.apply(Math,e.map(function(e){return e.split(" ").length}))}function A(e){return Math.min.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function I(e){return Math.max.apply(Math,e.map(function(e){return e.split(/[\.\!\?]+/).length}))}function U(e){return Math.min.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function L(e){return Math.max.apply(Math,e.map(function(e){return e.replace(/\n$/gm,"").split(/\n/).length}))}function J(e){return new Date(Math.min.apply(null,e))}function Y(e){return new Date(Math.max.apply(null,e))}function H(e){for(var t=[],n=0,i=e;n<i.length;n+=1)t.push(new Date(i[n]));return t}function Q(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})}function B(e,t){for(var n,i={},r=[],a=0,s=e;a<s.length;a+=1)void 0===i[n=s[a]]?i[n]=1:i[n]++;for(var l=0,o=t;l<o.length;l+=1)r.push(i[n=o[l]]);return r}function G(e){for(var t,n=null,i=null,r=!1,a=0,s=e;a<s.length;a+=1){if(t=s[a],null!==i&&t>i){if("desc"===n){r=!0;break}n="asc"}if(null!==i&&t<i){if("asc"===n){r=!0;break}n="desc"}i=t}return!r&&null!==n&&n}function K(e){for(var t=null,n=null,i=!1,r=0,a=e;r<a.length;r+=1){var s=new Date(a[r]);if(null!==n&&s>n){if("desc"===t){i=!0;break}t="asc"}if(null!==n&&s<n){if("asc"===t){i=!0;break}t="desc"}n=s}return!i&&null!==t&&t}function R(t,l){if(t.constructor!==Array){t=String(t);var u=Number(t);if("slug"===l)return n(t,{lower:!0});if("lower"===l)return t.toLowerCase();if("uppper"===l)return t.toLowerCase();if("md5"===l)return i(t);if("capitalize"===l)return Q(t);if("plural"===l)return o.plural(t);if("singular"===l)return o.singular(t);if("trim"===l)return t.replace(/\s/g,"");if("md"===l)return s(t);if(NaN!==u&&"round"===l)return Math.round(t);if(NaN!==u&&"floor"===l)return Math.floor(t);if(NaN!==u&&"num:"===l.substring(0,4)){var d=l.split(":");return a(u).format(d[1])}if("optional"===l&&Math.random()>=.5)return"";if("date:"===l.substring(0,5)){var f=l.split(":");return r.format(new Date(t),f[1])}return t}return"count"===l?t.length:"max"===l?N(t):"min"===l?F(t):"sum"===l?e.sum(t):"avg"===l?e.mean(t):t}function V(e,t){for(var n=R(e,t[1]),i=2;t.length>i;)n=R(n,t[i]),i++;return n}function X(e,t,n,i){var r=e[0];if(void 0!==i[r]){for(var a,s=[],l=0,o=i[r];l<o.length;l+=1)(a=o[l])[t+"_id"]===n&&s.push(e.length>1?a[e[1]]:a.id);return s}return[]}function Z(e,t,n){var i=!1,r=t.slice(0),a=e;if(0===t.length)return null;for(;!i;){var s=r.shift();if(void 0===a[s+"_id"])return void 0!==a[s]?void 0!==a[s][t[t.length-1]]?a[s][t[t.length-1]]:"object"!=typeof a[s]?a[s]:null:null;var l=void 0,u=o.plural(s);if(void 0!==n[u])for(l in n[u])n[u][l].id===a[s+"_id"]&&(a=n[u][l]);0===r.length&&(i=!0)}return null}function ee(e){var t="undefined",n=!1;return"boolean"==typeof e?t="boolean":"number"==typeof e?t=Math.round(e)===e?"int":"float":"string"==typeof e?/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e)?t="date":!function(e){return/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(e)}(e)?!function(e){return/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(e)}(e)?1===e.length?t="char":(/{{\s*([\w\.\?\|\:]+)\s*}}/.test(e)&&(n=!0),t="string"):t="time":t="datetime":"object"==typeof e&&(t=Array.isArray(e)?"array":"JSON"),{fieldType:t,containsTemplate:n}}function te(e,t,n){return t==n?e:(e.hasOwnProperty(t)&&(e[n]=e[t],delete e[t]),e)}function ne(e,t,n,i){for(var r=[],a=0,s=i;a<s.length;a+=1)if(prevField=s[a],"int"!==n&&"float"!==n||"int"!==prevField.type&&"float"!==prevField.type){if("date"===n&&"date"===prevField.type||"datetime"===n&&"datetime"===prevField.type){var l=new Date(t),o=new Date(prevField.value);r.push(l>o?e+">"+prevField.key:l<o?e+"<"+prevField.key:e+"="+prevField.key)}}else t>prevField.value?r.push(e+">"+prevField.key):t<prevField.value?r.push(e+"<"+prevField.key):r.push(e+"="+prevField.key);return r}function ie(e){for(var t,n=[],i=0,r=e;i<r.length;i+=1){var a=(t=r[i]).split(/>|<|=/);t.indexOf("<")>-1&&-1===e.indexOf(a[0]+">"+a[1])&&-1===e.indexOf(a[0]+"="+a[1])&&n.push(t),t.indexOf(">")>-1&&-1===e.indexOf(a[0]+"<"+a[1])&&-1===e.indexOf(a[0]+"="+a[1])&&n.push(t),t.indexOf("=")>-1&&-1===e.indexOf(a[0]+">"+a[1])&&-1===e.indexOf(a[0]+"<"+a[1])&&n.push(t)}return n}function re(e,t,n,i){if(0===t.length)return!0;if(""===e)return!1;for(var r,a=0,s=t;a<s.length;a+=1){var l=(r=s[a]).split(/>|<|=/);if(void 0!==n[l[1]]&&""!==n[l[1]])if("int"===i||"float"===i){if(r.indexOf("<")>-1&&e>=n[l[1]])return!1;if(r.indexOf(">")>-1&&e<=n[l[1]])return!1;if(r.indexOf("=")>-1&&e!==n[l[1]])return!1}else if("date"===i||"datetime"===i){var o=new Date(e),u=new Date(n[l[1]]);if(r.indexOf("<")>-1&&o>=u)return!1;if(r.indexOf(">")>-1&&o<=u)return!1;if(r.indexOf("=")>-1&&o!==u)return!1}}return!0}function ae(e,t,n){var i;for(i in t)if(e.indexOf(n+"="+i)>-1)return t[i];return null}var se,le=new t;se=y.concat(["congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}","incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}"]),y=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(se),module.exports=function(t){var n,i,r,a,s,l,f,p,h,c,g,m,y,v=!1,w={},M=[],W={},R=[];for(n in"string"==typeof w?(w=JSON.parse(t),v=!0):w=t,w)for(a in w[n])for(r in w[n][a]){var se=r.split("__");"__"!==r.substr(0,2)?se.length>1&&(W[n+"."+se[1]]=n+"."+se[0],te(w[n][a],r,se[1])):(R.push(n+"."+r.substr(2)),te(w[n][a],r,r.substr(2)))}for(n in w){var oe={key:n,minID:1,maxID:1,totalCount:0,fields:{}};for(a in w[n]){var ue=[];for(r in w[n][a]){var de=w[n][a][r],fe=ee(de),pe=fe.fieldType,he=fe.containsTemplate;if(void 0===oe.fields[r]?oe.fields[r]={types:[pe],entries:[de],allEntries:[de],containsTemplate:he,rules:[],cnt:1}:(oe.fields[r].types.push(pe),oe.fields[r].types=e.uniq(oe.fields[r].types),oe.fields[r].entries.push(de),oe.fields[r].entries=e.uniq(oe.fields[r].entries),oe.fields[r].allEntries.push(de),oe.fields[r].cnt++,he&&(oe.fields[r].containsTemplate=!0)),"JSON"===pe){var ce=void 0;for(ce in de){var ge=de[ce],me=ee(ge),ye=me.fieldType,ve=me.containsTemplate;void 0===oe.fields[r+"."+ce]?oe.fields[r+"."+ce]={types:[ye],entries:[ge],allEntries:[ge],containsTemplate:ve,cnt:1}:(oe.fields[r+"."+ce].types.push(ye),oe.fields[r+"."+ce].types=e.uniq(oe.fields[r+"."+ce].types),oe.fields[r+"."+ce].entries.push(ge),oe.fields[r+"."+ce].entries=e.uniq(oe.fields[r+"."+ce].entries),oe.fields[r+"."+ce].allEntries.push(ge),oe.fields[r+"."+ce].cnt++,ve&&(oe.fields[r+"."+ce].objContainsTemplate=!0))}}if(ue.length>0&&"id"!==r&&!r.endsWith("_id")&&!r.endsWith("_ids")){var we=ne(r,de,pe,ue);we.length>0&&(oe.fields[r].rules=oe.fields[r].rules.concat(we))}"id"===r||r.endsWith("_id")||r.endsWith("_ids")||ue.push({key:r,value:de,type:pe})}}for(r in oe.fields)"id"===r&&(oe.totalCount=oe.fields[r].cnt),oe.fields[r].type=1===oe.fields[r].types.length?oe.fields[r].types[0]:2==oe.fields[r].types.length&&oe.fields[r].types.indexOf("int")>-1&&oe.fields[r].types.indexOf("float")>-1?"float":"string",oe.fields[r].entries.length<oe.fields[r].cnt||oe.fields[r].containsTemplate?(oe.fields[r].repeatEntries=!0,oe.fields[r].weights=B(oe.fields[r].allEntries,oe.fields[r].entries)):oe.fields[r].repeatEntries=!1,oe.fields[r].required=!(oe.fields[r].cnt<oe.totalCount),oe.fields[r].rules=ie(e.uniq(oe.fields[r].rules)),oe.fields[r].dir=!1,"int"!==oe.fields[r].type&&"float"!==oe.fields[r].type||(oe.fields[r].dir=G(oe.fields[r].entries)),"date"!==oe.fields[r].type&&"datetime"!==oe.fields[r].type||(oe.fields[r].dir=K(oe.fields[r].entries));oe.gap=T(oe.fields.id.entries),M.push(oe)}for(n in M){var be=M[n];if(be.gap){var Me=void 0,je=void 0;for(Me=be.gap.start;Me<=be.gap.end;Me++){var ke={};for(je in be.fields){var _e="";if(be.fields[je].repeatEntries||be.fields[je].containsTemplate)_e=le.weighted(be.fields[je].entries,be.fields[je].weights);else{if("id"===je&&(_e=Me),"age"!==je&&!je.endsWith(".age")||"int"!==be.fields[je].type||(_e=le.age()),"firstname"!==je&&!je.endsWith(".firstname")||"string"!==be.fields[je].type||(_e=le.first()),"lastname"!==je&&!je.endsWith(".lastname")||"string"!==be.fields[je].type||(_e=le.last()),"company"!==je&&!je.endsWith(".company")||"string"!==be.fields[je].type||(_e=le.company()),"country"!==je&&!je.endsWith(".country")||"string"!==be.fields[je].type||(_e=le.country()),"email"!==je&&!je.endsWith(".email")||"string"!==be.fields[je].type||(_e=u.internet.exampleEmail()),"color"!==je&&!je.endsWith(".color")||"string"!==be.fields[je].type||(_e=le.color()),"ip"!==je&&!je.endsWith(".ip")||"string"!==be.fields[je].type||(_e=le.ip()),"profession"!==je&&!je.endsWith(".profession")||"string"!==be.fields[je].type||(_e=le.profession()),"url"!==je&&!je.endsWith(".url")||"string"!==be.fields[je].type||(_e=le.url()),"city"!==je&&!je.endsWith(".city")||"string"!==be.fields[je].type||(_e=le.city()),"street"!==je&&!je.endsWith(".street")||"string"!==be.fields[je].type||(_e=le.street()),"zip"!==je&&!je.endsWith(".zip")||"int"!==be.fields[je].type||(_e=parseInt(le.zip())),"weekday"!==je&&!je.endsWith(".weekday")||"string"!==be.fields[je].type||(_e=le.weekday()),"year"!==je&&!je.endsWith(".year")||"int"!==be.fields[je].type||(_e=parseInt(le.year())),"password"!==je&&!je.endsWith(".password")||"string"!==be.fields[je].type||(_e=le.hash()),"guid"!==je&&!je.endsWith(".guid")||"string"!==be.fields[je].type||(_e=le.guid()),"product"!==je&&!je.endsWith(".product")||"string"!==be.fields[je].type||(_e=u.commerce.productName()),"material"!==je&&!je.endsWith(".material")||"string"!==be.fields[je].type||(_e=u.commerce.productMaterial()),"iban"!==je&&!je.endsWith(".iban")||"string"!==be.fields[je].type||(_e=u.finance.iban()),"bic"!==je&&!je.endsWith(".bic")||"string"!==be.fields[je].type||(_e=u.finance.bic()),"avatar"!==je&&!je.endsWith(".avatar")||"string"!==be.fields[je].type||(_e=u.image.avatar()),"username"!==je&&!je.endsWith(".username")||"string"!==be.fields[je].type||(_e=u.internet.userName()),"homepage"!==je&&!je.endsWith(".homepage")||"string"!==be.fields[je].type||(_e=u.internet.url()),"job"!==je&&!je.endsWith(".job")||"string"!==be.fields[je].type||(_e=u.name.jobTitle()),"mimetype"!==je&&!je.endsWith(".mimetype")||"string"!==be.fields[je].type||(_e=u.system.mimeType()),""===_e&&"JSON"===be.fields[je].type&&(_e={}),""===_e&&"array"===be.fields[je].type){for(var xe=null,Oe=null,Te=0,We=0,qe=be.fields[je].entries;We<qe.length;We+=1){arrEntry=qe[We];var De=F(arrEntry),Fe=N(arrEntry),Ne=arrEntry.length;Ne>0&&(null===xe||De<xe)&&(xe=De),Ne>0&&(null===Oe||Fe>Oe)&&(Oe=Fe),Ne>Te&&(Te=Ne)}(_e=Array.from({length:Math.floor(Math.random()*Te)+1},function(){return C(xe,Oe,1)})).sort(function(e,t){return e-t})}if(""===_e&&"string"===be.fields[je].type){var ze=Math.min.apply(Math,be.fields[je].entries.map(function(e){return e.length})),Ce=P(be.fields[je].entries),Ee=S(be.fields[je].entries),Pe=$(be.fields[je].entries),Se=A(be.fields[je].entries),$e=I(be.fields[je].entries),Ae=U(be.fields[je].entries),Ie=L(be.fields[je].entries);_e=Ie>1?_(Math.floor(Math.random()*Ie)+Ae):$e>1?k(Math.floor(Math.random()*$e)+Se):Pe>1?le.sentence({words:Math.floor(Math.random()*Pe)+Ee}).slice(0,-1):be.fields[je].entries[0][0].toUpperCase()===be.fields[je].entries[0][0]?le.capitalize(le.word({length:Math.floor(Math.random()*ze)+Ce})):le.string({length:Math.floor(Math.random()*ze)+Ce}),be.fields[je].entries[0]===be.fields[je].entries[0].toUpperCase()?_e=_e.toUpperCase():be.fields[je].entries[0]===be.fields[je].entries[0].toLowerCase()?_e=_e.toLowerCase():D(be.fields[je].entries)&&(_e=Q(_e))}if(""===_e&&"int"===be.fields[je].type){var Ue=F(be.fields[je].entries),Le=N(be.fields[je].entries),Je=z(be.fields[je].entries),Ye=0,He=ae(be.fields[je].rules,ke,je),Qe=(Le-Ue)/(be.gap.end-be.gap.start+1);if("asc"===be.fields[je].dir?(Le=Math.ceil(Ue+(Me-be.gap.start+1)*Qe-1),Ue=Math.floor(Ue+(Me-be.gap.start)*Qe+1)):"desc"===be.fields[je].dir&&(Ue=Math.ceil(Le-(Me-be.gap.start+1)*Qe+1),Le=Math.floor(Le-(Me-be.gap.start)*Qe-1)),je.endsWith("_id"))_e=E(Ue,Le);else if(null===He)for(;0===Ye||!re(_e,be.fields[je].rules,ke,be.fields[je].type)&&Ye<100;)_e=C(Ue,Le,Je),Ye++;else _e=He}if(""===_e&&"float"===be.fields[je].type){var Be=F(be.fields[je].entries),Ge=N(be.fields[je].entries),Ke=q(be.fields[je].entries),Re=0,Ve=ae(be.fields[je].rules,ke,je),Xe=(Ge-Be-1)/(be.gap.end-be.gap.start+1);if("asc"===be.fields[je].dir?(Ge=Be+(Me-be.gap.start+1)*Xe+1,Be=Be+(Me-be.gap.start)*Xe+1):"desc"===be.fields[je].dir&&(Be=Ge-(Me-be.gap.start+1)*Xe-1,Ge=Ge-(Me-be.gap.start)*Xe-1),null===Ve)for(;0===Re||!re(_e,be.fields[je].rules,ke,be.fields[je].type)&&Re<100;)_e=Number(le.floating({min:Be,max:Ge}).toFixed(Ke)),Re++;else _e=Ve}if(""===_e&&"char"===be.fields[je].type&&(_e=be.fields[je].entries[0]===be.fields[je].entries[0].toUpperCase()?le.letter({casing:"upper"}):be.fields[je].entries[0]===be.fields[je].entries[0].toLowerCase()?le.letter({casing:"lower"}):le.letter()),""===_e&&"date"===be.fields[je].type){var Ze=J(H(be.fields[je].entries)),et=Y(H(be.fields[je].entries)),tt=0,nt=ae(be.fields[je].rules,ke,je),it=be.gap.end-be.gap.start+1,rt=(et.getTime()-Ze.getTime()-1)/it;if("asc"===be.fields[je].dir?(et=new Date(Ze.getTime()+(Me-be.gap.start+1)*rt+1),Ze=new Date(Ze.getTime()+(Me-be.gap.start)*rt+1)):"desc"===be.fields[je].dir&&(Ze=new Date(et.getTime()-(Me-be.gap.start+1)*rt-1),et=new Date(et.getTime()-(Me-be.gap.start)*rt-1)),null===nt)for(;0===tt||!re(_e,be.fields[je].rules,ke,be.fields[je].type)&&tt<100;)p=Ze,h=et,c=void 0,g=void 0,m=void 0,y=void 0,c=new Date(p.getTime()+Math.random()*(h.getTime()-p.getTime())),g=""+(c.getMonth()+1),m=""+c.getDate(),y=c.getFullYear(),g.length<2&&(g="0"+g),m.length<2&&(m="0"+m),_e=[y,g,m].join("-"),tt++;else _e=nt}if(""===_e&&"datetime"===be.fields[je].type){var at=J(H(be.fields[je].entries)),st=Y(H(be.fields[je].entries)),lt=0,ot=ae(be.fields[je].rules,ke,je),ut=be.gap.end-be.gap.start+1,dt=(st.getTime()-at.getTime()-1)/ut;if("asc"===be.fields[je].dir?(st=new Date(at.getTime()+(Me-be.gap.start+1)*dt+1),at=new Date(at.getTime()+(Me-be.gap.start)*dt+1)):"desc"===be.fields[je].dir&&(at=new Date(st.getTime()-(Me-be.gap.start+1)*dt-1),st=new Date(st.getTime()-(Me-be.gap.start)*dt-1)),null===ot)for(;0===lt||!re(_e,be.fields[je].rules,ke,be.fields[je].type)&&lt<100;)_e=O(at,st),lt++;else _e=ot}""===_e&&"time"===be.fields[je].type&&(s=void 0,l=void 0,f=void 0,s=String(x.hour({twentyfour:!0})),l=String(x.minute()),f=String(x.second()),_e=[s,l,f].join(":"))}if(be.fields[je].required||Math.random()>=.5)if(je.indexOf(".")>-1){var ft=je.split(".");void 0!==ke[ft[0]]&&(ke[ft[0]][ft[1]]=_e)}else ke[je]=_e}w[be.key].push(ke)}}}for(n in w)for(i in w[n]){var pt=function(){var e,t=w[n][i][r],a=w[n][i].id;"string"==typeof t&&(w[n][i][r]=t.replace(/{{\s*([\w\.\?\|\:]+)\s*}}/g,function(e,t){var r=t.split("?"),s=r[0].split("|"),l=s[0].split(".");if("number"===l[0]&&1===l.length)return Math.floor(10*Math.random());if("sentence"===l[0]&&1===l.length)return j();if("paragraph"===l[0]&&1===l.length)return k();if("word"===l[0]&&2===l.length){if(void 0!==b[l[1]])return s.length>1?V(b[l[1]](),s):b[l[1]]()}else{if("field"===l[0]&&2===l.length&&void 0!==w[n][i][l[1]])return s.length>1?V(w[n][i][l[1]],s):w[n][i][l[1]];if("field"===l[0]&&l.length>2){var u=l.slice(1),d=Z(w[n][i],u,w);if(null!==d)return s.length>1?V(d,s):d;if(r.length>1)return r[1]}else if("connected"===l[0]&&l.length>1){var f=X(l.slice(1),o.singular(n),a,w);if(f.length>0)return s.length>1?V(f,s):f.join(", ")}else if(r.length>1)return r[1]}return e}),w[n][i][r]=w[n][i][r].replace(/  +/g," "),e=w[n][i][r],!isNaN(parseFloat(e))&&isFinite(e)&&(w[n][i][r]=Number(w[n][i][r])))};for(r in w[n][i])pt()}for(n in w)for(a in w[n])for(r in w[n][a])R.indexOf(n+"."+r)>-1&&delete w[n][a][r],void 0!==W[n+"."+r]&&te(w[n][a],r,W[n+"."+r].split(".")[1]);return v?d(w):w}});
//# sourceMappingURL=blowson.umd.js.map
