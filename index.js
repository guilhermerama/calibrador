var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: /.*caliber.*/,
  contentScriptFile: data.url("replace.js"),
  attachTo: ["top"],
  onAttach: function(worker) {
        worker.port.on("click", function(urlClicked) {
            tabs.open(urlClicked);

        });
     },
});
