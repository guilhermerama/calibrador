var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.mozilla.org",
  contentScript: 'window.alert("Page matches ruleset");'
});
