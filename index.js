var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "/.*caliber:11012.*/",
  contentScriptFile: data.url("replace.js")
});


