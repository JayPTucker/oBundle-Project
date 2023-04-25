"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[444],{66755:function(e,t,r){function i(e){return"string"==typeof e&&0!==e.length}r.d(t,{Z:function(){return i}})},99706:function(e,t,r){r.d(t,{M:function(){return a}});var i="translations",n=function(e){return!!Object.keys(e[i]).length},a=function(e){var t=function(){for(var e=0;e<arguments.length;e++){var t=JSON.parse(e<0||arguments.length<=e?void 0:arguments[e]);if(n(t))return t}}(e.validationDictionaryJSON,e.validationFallbackDictionaryJSON,e.validationDefaultDictionaryJSON),r=Object.values(t[i]);return Object.keys(t[i]).map((function(e){return e.split(".").pop()})).reduce((function(e,t,i){return e[t]=r[i],e}),{})}},70444:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var i=r(49230),n=r(40097),a=r(66755),c=r(73609),o=r(99706),f=r(67313),u=r(42066),l=r(44505),m=r(55825);function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}var s=function(e){var t,r;function i(t){var r;(r=e.call(this,t)||this).validationDictionary=(0,o.M)(t);var i=m("#gift-certificate-balance"),a=m("#gift-certificate-form"),p=a.find('input[name="certificate_amount"]'),s=(0,n.Z)({submit:'#gift-certificate-form input[type="submit"]',delay:300,tap:f.kk});if(p.length){var d=a.find('input[name="certificate_amount"]'),g=d.data("min"),v=d.data("minFormatted"),h=d.data("max"),y=d.data("maxFormatted");s.add({selector:'#gift-certificate-form input[name="certificate_amount"]',validate:function(e,t){var r=Number(t);r||e(!1),e(r>=g&&r<=h)},errorMessage:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var n=e;return["[MIN]","[MAX]"].forEach((function(e,t){n=n.includes(e)?n.replace(e,r[t]):n})),n}(r.validationDictionary.certificate_amount_range,v,y)})}if(s.add([{selector:'#gift-certificate-form input[name="to_name"]',validate:function(e,t){e(function(e){return e.length}(t))},errorMessage:r.context.toName},{selector:'#gift-certificate-form input[name="to_email"]',validate:function(e,t){e(function(){return c.Z.email.apply(c.Z,arguments)}(t))},errorMessage:r.context.toEmail},{selector:'#gift-certificate-form input[name="from_name"]',validate:function(e,t){e(function(e){return e.length}(t))},errorMessage:r.context.fromName},{selector:'#gift-certificate-form input[name="from_email"]',validate:function(e,t){e(function(){return c.Z.email.apply(c.Z,arguments)}(t))},errorMessage:r.context.fromEmail},{selector:'#gift-certificate-form input[name="certificate_theme"]:first-of-type',triggeredBy:'#gift-certificate-form input[name="certificate_theme"]',validate:function(e){e("string"==typeof a.find('input[name="certificate_theme"]:checked').val())},errorMessage:r.context.certTheme},{selector:'#gift-certificate-form input[name="agree"]',validate:function(e){e(a.find('input[name="agree"]').get(0).checked)},errorMessage:r.context.agreeToTerms},{selector:'#gift-certificate-form input[name="agree2"]',validate:function(e){e(a.find('input[name="agree2"]').get(0).checked)},errorMessage:r.context.agreeToTerms}]),i.length){var _=r.checkCertBalanceValidator(i);i.on("submit",(function(){if(_.performCheck(),!_.areAll("valid"))return!1}))}return a.on("submit",(function(e){if(s.performCheck(),!s.areAll("valid"))return e.preventDefault()})),m("#gift-certificate-preview").click((function(e){if(e.preventDefault(),s.performCheck(),s.areAll("valid")){var t=(0,l._Z)(),i=m(e.currentTarget).data("previewUrl")+"&"+a.serialize();t.open(),u.hi.getPage(i,{},(function(e,i){if(e)return t.updateContent(r.context.previewError);t.updateContent(i,{wrap:!0})}))}})),r}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,p(t,r),i.prototype.checkCertBalanceValidator=function(e){var t=(0,n.Z)({submit:e.find('input[type="submit"]'),tap:f.kk});return t.add({selector:e.find('input[name="giftcertificatecode"]'),validate:function(e,t){e((0,a.Z)(t))},errorMessage:this.validationDictionary.invalid_gift_certificate}),t},i}(i.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.444.js.map
