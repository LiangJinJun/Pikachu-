// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"text.js":[function(require,module,exports) {
var string = "\n.clearfix:after {\n    content: \"\";\n    display: block;\n    height: 0;\n    clear: both;\n    visibility: hidden;\n}\n\n.clearfix {\n    *zoom: 1;\n}\n\nbody {\n    // background:#ffe600;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.pikachu *{\n    box-sizing:border-box;\n    margin:0;\n    padding:0;\n}\n.pikachu *::before ,\n.pikachu *::after {\n    box-sizing:border-box;\n    margin:0;\n    padding:0;\n}\n\n\n\n.pikachu {\n    position: fixed;\n    width: 100%;\n    /* height: 500px; */\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    // max-width: 640px;\n    // min-width: 320px;\n    background-color: #EAD71C;\n    min-height:50vh;\n    // overflow: hidden;\n}\n\n.bead1 {\n    width: 100%;\n    padding: 10px 25px 10px 25px;\n    position: relative;\n    top: 66px;\n}\n\n.eye {\n    /* position: relative; */\n    height: 80px;\n    width: 80px;\n    background-color: #000;\n    border-radius: 100%;\n    top: 80px;\n    z-index: 3;\n}\n\n.eye:after {\n    content: \"\";\n    position: absolute;\n    height: 30px;\n    width: 30px;\n    background-color: #FFF;\n    border-radius: 100%;\n    top: 16px;\n}\n\n.left-eye {\n    float: left;\n}\n\n.left-eye:after {\n    left: 45px;\n}\n\n.right-eye {\n    float: right;\n}\n\n.right-eye:after {\n    right: 45px;\n}\n\n.yuan {\n    width: 100%;\n}\n\n.cheek {\n    /* margin: 10px; */\n    position: relative;\n    height: 88px;\n    width: 88px;\n    background-color: #D63700;\n    border-radius: 100%;\n    border: 3px solid #000;\n    top: 138px;\n}\n\n.left-cheek {\n    /* left: 60px; */\n    float: left;\n    margin-left: 5px;\n    /* margin-left: 80px; */\n\n}\n\n.cheek>img {\n    /* border: 1px solid red; */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n\n.left-cheek>img {\n    transform: rotate(494deg);\n    transform-origin: 0 0;\n}\n\n.right-cheek {\n    /* margin-right: 80px; */\n    float: right;\n    margin-right: 5px;\n}\n\n.body1 {\n    width: 50%;\n    margin: 0 auto;\n    position: relative;\n    left: 0;\n    right: 0;\n    top: -231px;\n    height: 100%;\n    /* background-color: blue; */\n}\n\n.mouth {\n    position: relative;\n    /* position: fixed; */\n    margin: 0 auto;\n    height: 330px;\n    /* height: 35%; */\n    width: 160px;\n    /* width: 58%; */\n    background-color: #5D0B01;\n    border-radius: 100%;\n    border: 5px solid #000;\n    top: 138px;\n    /* left: 88px; */\n    left: 50%;\n    margin-left: -80px;\n    overflow: hidden;\n}\n\n.lips {\n    position: absolute;\n    height: 70px;\n    width: 100px;\n    background-color: #EAD71C;\n    border-radius: 100%;\n    box-shadow: 5px 5px 0px 0px;\n    /* left: 42px; */\n    left: 50%;\n    margin-left: -104px;\n    top: 220px;\n    z-index: 1;\n}\n\n.lips:after {\n    content: \"\";\n    position: absolute;\n    height: 70px;\n    width: 100px;\n    background-color: #EAD71C;\n    border-radius: 100%;\n    box-shadow: -5px 5px 0px 0px;\n    left: 108px;\n}\n\n.tongue {\n    position: absolute;\n    height: 150px;\n    width: 190px;\n    background-color: #CD565D;\n    border-radius: 100%;\n    border: 5px solid #000;\n    top: 200px;\n    left: -15px;\n    box-shadow: inset 0 0 80px #000;\n}\n\n.nose {\n    position: absolute;\n    height: 175px;\n    width: 80%;\n    background-color: #EAD71C;\n    /* left: 47px; */\n    left: 50%;\n    margin-left: -40%;\n    top: 82px;\n    z-index: 2;\n}\n\n.nose:before {\n    content: \"\";\n    position: absolute;\n    height: 20px;\n    width: 30px;\n    background-color: #000;\n    border-radius: 100% / 80% 80% 120% 120%;\n    top: 120px;\n    /* left: 116px; */\n    left: 50%;\n    margin-left: -15px;\n    z-index: 3;\n}\n/* \u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60~ */\n"; // import string from './css'
// console.log(1111)
// export default string;
// import string from 'css.js'

var n = 1;
var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
var id;
var time = 100;
var player = {
  init: function init() {
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    player.play();
    player.bindEvent();
  },
  bindEvent: function bindEvent() {
    var hashTable = {
      '#btnPause': player.pause,
      '#btnPlay': player.play,
      '#btnSlow': player.slow,
      '#btnNormal': player.normal,
      '#btnFast': player.fast
    };

    for (var key in hashTable) {
      document.querySelector(key).onclick = hashTable[key];
    }
  },
  run: function run() {
    n += 1;
    var ims = document.querySelector('#im');
    var ig = document.querySelector('#ig');

    if (n > string.length) {
      window.clearInterval(id);
      ims.style.display = "block";
      ig.style.display = "block";
      return;
    } // console.log(n + ':' + string.substr(0, n))


    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop = demo.scrollHeight; // console.log(n)
  },
  play: function play() {
    id = setInterval(player.run, time);
  },
  pause: function pause() {
    window.clearInterval(id);
  },
  slow: function slow() {
    player.pause();
    time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  }
};
player.init(); // const x = () => {
//     run()
// }

/* x和run是否等价 */
},{}],"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61049" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","text.js"], null)
//# sourceMappingURL=/text.89361752.js.map