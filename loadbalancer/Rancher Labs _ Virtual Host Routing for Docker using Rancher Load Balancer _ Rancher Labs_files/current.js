window.hbspt=window.hbspt||{},window.hbspt.cta=window.hbspt.cta||{__hstc:"",__hssc:"",__hsfp:"",__utk:"",email:"",__analyticsPageId:"",TRACKING_CODE_TIMEOUT:2e3,timings:{currentJsExec:(new Date).getTime()},canonicalURL:"",targetTypes:["tc_country","tc_deviceCategory","tc_visitSource","tc_drillDownRule","tc_language"],isPreviewUrl:function(){return window.location.host.indexOf("hs-sites.com")>0?!0:this.utils.getParameterByName("hs_preview")?!0:!1},load:function(e,t,n){function i(){l||(r.displayCTA(e,t,n),l=!0)}function s(){0===u.length&&i()}function a(e){window._hsq.push(["addCookieListener",function(t,n,i){r.__hstc=t,r.__hssc=n,r.__hsfp=i,e()}])}function o(e){window._hsq.push(["addContentMetadataListener",function(t){t&&t.legacyPageId&&(r.__analyticsPageId=t.legacyPageId,e())}])}function c(e){window._hsq.push(["addUserTokenListener",function(n){r.__utk=n,r.utils.log(t+" got utk '"+n+"'"),e()}])}var r=this,u=[],l=!1;r.utils.log(t+" loading");try{document.getElementById("hs-cta-"+t).style.visibility="hidden"}catch(d){r.utils.log(t+" couldn't be hidden")}this.__utk=this.__utk||this.utils.getCookieValue("hubspotutk"),this.__hssc=this.__hssc||this.utils.getCookieValue("__hssc"),this.__hstc=this.__hstc||this.utils.getCookieValue("__hstc"),this.canonicalURL=this.canonicalURL||this.getCanonicalURL(),this.isPreviewUrl()&&(this.email=r.utils.getParameterByName("email")),this.isPreviewUrl()?i():(window._hsq=window._hsq||[],(""===this.__hssc||""===this.__hstc)&&(u.push("cookie"),a(function(){r.utils.remove(u,"cookie"),s()})),""===this.__utk&&(u.push("utk"),c(function(){r.utils.remove(u,"utk"),s()})),""===this.__analyticsPageId&&(u.push("analyticsPageId"),o(function(){r.utils.remove(u,"analyticsPageId"),s()}),this.utils.domReady(function(){r.utils.isCos()||(r.utils.log(t+" domready and not cos page"),r.utils.remove(u,"analyticsPageId"),s())})),0===u.length?i():(r.utils.log(t+" data needed: "+u.join(",")),window.setTimeout(function(){l||(r.utils.log(t+" never got data: "+u.join(",")),i())},r.TRACKING_CODE_TIMEOUT),this.utils.domReady(function(){r.domReadyCalled=!0,r.hasAnalytics=r.utils.hasHubspotAnalytics(),r.analyticsEvaluated=r.utils.analyticsEvaluated()})))},getCanonicalURL:function(){for(var e=document.getElementsByTagName("link"),t=0;t<e.length;t++){var n=e[t];if("canonical"===n.rel)return n.href}return window.location.href},getTcOverridesQueryString:function(){var e="";for(i=0;i<this.targetTypes.length;i++){var t=this.utils.getParameterByName(this.targetTypes[i]);""!==t&&(e+="&"+this.targetTypes[i]+"="+encodeURIComponent(t))}return e},displayCTA:function(e,t,n){var i=document.createElement("script"),n=n||{},s=this,a=s.utils.getServiceDomain(n.env)+"/ctas/v2/public";i.type="text/javascript",i.async=!0,i.src="//"+a+"/cs/loader-v2.js?pg="+t+"&pid="+e+"&canon="+encodeURIComponent(this.canonicalURL)+"&__hssc="+this.__hssc+"&__hstc="+this.__hstc+"&__hsfp="+this.__hsfp,this.email&&(i.src+="&email="+encodeURIComponent(this.email)),this.__utk&&(i.src+="&hsutk="+encodeURIComponent(this.__utk)),i.src=i.src+"&utm_referrer="+encodeURIComponent(document.referrer),this.utils.getParameterByName("utm_campaign")&&(i.src+="&utm_campaign="+encodeURIComponent(this.utils.getParameterByName("utm_campaign"))),this.utils.getParameterByName("utm_medium")&&(i.src+="&utm_medium="+this.utils.getParameterByName("utm_medium")),this.__analyticsPageId&&(i.src+="&pageId="+this.__analyticsPageId);var o=this.getTcOverridesQueryString();""!==o&&(i.src+=o),this.isPreviewUrl()||(i.src+="&lag="+((new Date).getTime()-s.timings.currentJsExec)),this.domReadyCalled&&(i.src+="&rdy=1"),this.hasAnalytics&&(i.src+="&an=1"),this.analyticsEvaluated&&(i.src+="&ae=1"),i.src+="&sv="+this.constants.currentProjectVersion,s.utils.log(t+" loading with src: "+i.src),(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(i),setTimeout(function(){try{s.utils.log(t+" trying to unhide default cta"),document.getElementById("hs-cta-"+t).style.visibility="visible"}catch(e){s.utils.log(t+" was already gone")}},2500)},afterLoad:function(){var e=this;return e.__hsfp?void e.utils.setHsfpOnLinks(e.__hsfp):void(e.isPreviewUrl()||window._hsq.push(["addCookieListener",function(t,n,i){e.__hsfp=i,e.utils.setHsfpOnLinks(i)}]))}},hbspt.cta.constants={currentProjectVersion:"static-1.50"},function(e){e.utils={getCookieValue:function(e){var t=new RegExp("(^|; )"+e+"=([^;]*)"),n=t.exec(document.cookie);return n?n[2]:""},getParameterByName:function(e){e=e.replace(/[\\[]/,"\\\\[").replace(/[\\]]/,"\\\\]");var t=new RegExp("[\\\\?&]"+e+"=([^&#]*)"),n=t.exec(window.location.search);return null===n?"":decodeURIComponent(n[1].replace(/\\+/g," "))},toQueryString:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},setCookie:function(e,t,n){var i=new Date,s=new Date;n=n||1,s.setTime(i.getTime()+864e5*n),document.cookie=e+"="+escape(t)+";expires="+s.toGMTString()},isCos:function(){if(window.hsVars&&window.hsVars.portal_id)return!0;for(var e=document.getElementsByTagName("meta"),t=0;t<e.length;t++){var n=e[t];if("generator"==n.getAttribute("name")&&"HubSpot"==n.getAttribute("content"))return!0}return!1},analyticsEvaluated:function(){return Boolean(window._hstc_loaded)},hasHubspotAnalytics:function(){for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t++){var n=e[t].getAttribute("src");if(n&&n.indexOf("/analytics")>=0&&(n.indexOf("js.hs-analytics.net")>=0||n.indexOf("js.hubspotqa.com")>=0))return!0}return!1},classNameify:function(e){var t=["hs"];return t=t.concat(e.split(" ")),t.join("-")},injectCss:function(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)},remove:function(e,t){for(var n=e.length;n--;)e[n]===t&&e.splice(n,1)},domReady:function(t){return e.domReady?t():void(document.addEventListener?document.addEventListener("DOMContentLoaded",function(){e.domReady=!0,t()}):window.attachEvent("onload",function(){e.domReady=!0,t()}))},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},setHsfpOnLinks:function(e){for(var t=document.getElementsByClassName("cta_button"),n=0;n<t.length;n++){var i=t[n];"a"==i.tagName.toLowerCase()&&i.href&&-1===i.href.indexOf("__hsfp")&&(i.href=this.addParameterToUrl(i.href,"__hsfp",e),this.log("Added __hsfp "+e+" to cta "+i.id))}},addParameterToUrl:function(e,t,n){var i=e.split("?");return i.length>1?i[1].length&&(e+="&"):e+="?",e+=t+"="+encodeURIComponent(n)},getServiceDomain:function(e){return"local"===e?"local.hubspotqa.com":"qa"===e?"cta-service-cms2.hubspotqa.com":"cta-service-cms2.hubspot.com"},isDebug:function(){return window.location.href.toLowerCase().indexOf("hsctadebug")>=0},log:function(e){if(this.isDebug()&&(e=(new Date).getTime()+" [CTA]: "+e,window.console&&window.console.log(e),this.getParameterByName("selenium"))){var t=document.getElementById("selenium_log");t||(t=document.createElement("pre"),t.id="selenium_log",document.body.appendChild(t)),t.appendChild(document.createTextNode(e+"\n"))}},getCurrentUrl:function(){return window.location.href.toLowerCase()},matchesUrl:function(e){return this.getCurrentUrl().indexOf(e.toLowerCase())>=0}}}(window.hbspt.cta);