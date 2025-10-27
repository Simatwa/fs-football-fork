"use strict";
(self.webpackChunkflashscore = self.webpackChunkflashscore || []).push([[2529], {52865: (e, t, n) => {
  document.addEventListener("keyup", e => {
    if (e.altKey && e.ctrlKey && e.shiftKey && 68 == e.keyCode) {
      cjs.Api.config.get("core_debugger", "internal") ? n.e(902).then(n.bind(n, 11894)).then(e => {
        cjs.dev = new e.default;
      }) : cjs.push.setDebugMode(true);
      document.addEventListener("internalToolData", e => {
        var {detail: t} = e;
        try {
          window.updater.response_update(null, null, t, "update");
        } catch (e) {
          console.log("Core.js intenral tools: Tried calling response_update, but it failed");
        }
      });
      document.addEventListener("internalToolLookingForEvent", e => {
        var {detail: t} = e, n = cjs.dic.get("dataEventHolderProxy").getHolder();
        if (n.hasEvent(t)) {
          var a = n.getEvent(t), o = new CustomEvent("internalToolEventFound", {detail: a});
          document.dispatchEvent(o);
        }
      });
    }
  });
}}, e => {
  var t;
  t = 52865, e(e.s = t);
}]);
