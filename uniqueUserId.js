var uniqueID = (function(){
  var _storageName = "uniqueID";
  var _cookieDomain = ".domain.com";
  var _cookieDuration = 365; // days
  var _allowLocalStorage = true;

  var _storageEnabled = (_allowLocalStorage && typeof Storage !== void(0)) ? true : false;
  function genGuid(t){var n=new Date,e=function(t){return t-=100*Math.floor(t/100),10>t?"0"+t:t},o=function(t){return Math.floor(Math.random()*Math.pow(10,t))};return e(n.getHours())+""+e(n.getMinutes())+e(n.getSeconds())+o(t-6)};
  function setCookie(e,t,i,o){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3);var a="expires="+n.toUTCString();document.cookie=e+"="+t+"; "+a+";domain="+o+";path=/"}
  function getCookie(t){for(var n=t+"=",r=document.cookie.split(";"),e=0;e<r.length;e++){for(var i=r[e];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return""}
  
  var storedID = (_storageEnabled) ? localStorage.getItem(_storageName) : getCookie(_storageName);
  if(storedID != "" && storedID != null) {
    return storedID;
  } else {
    var newID = genGuid(13);
    (_storageEnabled) ? localStorage.setItem(_storageName, newID) : setCookie(_storageName, newID, _cookieDuration, _cookieDomain);
    return newID;
  }
})();
