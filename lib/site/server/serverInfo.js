/* See http://stackoverflow.com/questions/2976651 */

var getScriptURL = (function() {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    return function() { return myScript.src; };
})();

document.getElementById('info').innerHTML += 'This script was loaded  from: ' + getScriptURL();

document.getElementById('info').innerHTML += '<br>Root domain: ' + getScriptURL().match(/\/\/[^/]+/)[0];

document.getElementById('info').innerHTML += '<br>Script file: ' + getScriptURL().match(/[^/]+\.js$/)[0];
