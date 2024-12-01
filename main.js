// Utility Setup Code
var netint = Object.create(null); // An object to store other modules
(async function() {
  netint.javakilg = Function((await (await fetch("https://javakilg.kilgorezer.com/releases/A2.js")).text()) + "return JavaKilg");;
})();
