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
})({"quiz.json":[function(require,module,exports) {
module.exports = [{
  "question": "자바스크립트를 만든 사람은 Brendan Eich이다.",
  "choices": ["true", "false"],
  "code": null,
  "correctAnswer": 0
}, {
  "question": "자바스크립트 프로그래밍 언어는 Mozilla가 독자적으로 관리하고 있다.",
  "choices": ["true", "false"],
  "code": null,
  "correctAnswer": 1
}, {
  "question": "자바스크립트 프로그래밍 언어는 ECMAScript 기준에 맞게 사용되어야 한다.",
  "choices": ["true", "false"],
  "code": null,
  "correctAnswer": 0
}, {
  "question": "유효한 자바스크립트의 자료형(Type)이 아닌 것은 무엇입니까?",
  "choices": ["number", "string", "function", "boolean"],
  "code": null,
  "correctAnswer": 2
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["'number'", "NaN", "'object'", "'string'"],
  "code": "typeof NaN",
  "correctAnswer": 0
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["'number'", "NaN", "'object'", "'string'"],
  "code": "typeof null",
  "correctAnswer": 2
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["true", "false"],
  "code": "null === null",
  "correctAnswer": 0
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["'102'", "102", "'732'", "12"],
  "code": "7 + 3 + '2'",
  "correctAnswer": 0
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["'2-10'", "2", "NaN", "-2"],
  "code": "'2' - 7 + 3",
  "correctAnswer": 3
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["true", "false"],
  "code": "[] === []",
  "correctAnswer": 1
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["true", "false"],
  "code": "typeof([]) === typeof([])",
  "correctAnswer": 0
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["'hello'", "'bye'"],
  "code": "true ? 'hello' : 'bye'",
  "correctAnswer": 0
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["'hello'", "'bye'"],
  "code": "'' ? 'hello' : 'bye'",
  "correctAnswer": 1
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["'hello'", "'bye'"],
  "code": "[] ? 'hello' : 'bye'",
  "correctAnswer": 0
}, {
  "question": "예제 코드의 결과값은 무엇입니까?",
  "choices": ["'hello'", "'bye'"],
  "code": "-0 ? 'hello' : 'bye'",
  "correctAnswer": 1
}, {
  "question": "예제 코드를 실행했을때 콘솔에 출력되는 값은 무엇입니까?",
  "choices": ["1", "2", "undefined", "ReferenceError"],
  "code": "var a = 1;\n\nfunction foo() {\n  console.log(a);\n  var a = 2;\n}\n\nfoo();",
  "correctAnswer": 2
}, {
  "question": "예제 코드를 실행했을때 콘솔에 출력되는 d의 값은 무엇입니까?",
  "choices": ["3", "'3'", "undefined", "'undefined'"],
  "code": "function foo(a, b) {\n  var c = a + b;\n  console.log(c);\n}\n\nvar d = typeof foo(1, 2);\nconsole.log(d);",
  "correctAnswer": 3
}, {
  "question": "예제 코드를 실행했을때 콘솔에 출력되는 값은 무엇입니까?",
  "choices": ["[1, 2]", "[1, 2, undefined]", "ReferenceError", "'object'"],
  "code": "function foo(a, b, c) {\n  return [a, b, c];\n}\n\nvar result = foo(1, 2);\nconsole.log(result);",
  "correctAnswer": 1
}, {
  "question": "예제 코드를 실행했을때 콘솔에 출력되는 값은 무엇입니까?",
  "choices": ["'number'", "'object'", "undefined", "'undefined'"],
  "code": "function foo(number) {\n  return\n  {\n    age: number\n  };\n}\n\nvar result = foo(21);\nconsole.log(typeof result);",
  "correctAnswer": 3
}, {
  "question": "예제 코드를 실행했을때 콘솔에 출력되는 값은 무엇입니까?",
  "choices": ["null", "undefined", "ReferenceError", "None of the above"],
  "code": "var report = {\n  date: new Date(),\n  content: 'secret report'\n};\n\nfunction shred(doc) {\n  doc = null;\n}\n\nshred(report);\nconsole.log(report);",
  "correctAnswer": 3
}, {
  "question": "나는 지금까지 모든 문제의 정답을 이해했고 앞으로도 평생 틀리지 않을 자신이 있다.",
  "choices": ["true", "false"],
  "code": null,
  "correctAnswer": 0
}];
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _quiz = _interopRequireDefault(require("./quiz.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $startButton = document.querySelector(".start-button");
var $nextButton = document.querySelector(".next-button");
var $restartButton = document.querySelector(".restart-button");
var $questionBoard = document.querySelector(".question-board");
var $question = document.querySelector(".question");
var $exampleCode = document.querySelector(".example-code");
var $answerBoard = document.querySelector(".answer-board");
var $answerButtons = document.querySelectorAll(".answer-buttons");
var $result = document.querySelector(".result");
var $finalSocre = document.querySelector(".final-score");
var $finishMessage = document.querySelector(".finish-message");
var $questionNumber = document.querySelector(".question-number");
var $timeRemaining = document.querySelector(".time-remaining");
var $score = document.querySelector(".score");
var TIME_LIMIT = 5;
var FINISH_MESSAGE = "Well done!";
var currentQuestionNumber = 0;
var correctAnswer = 0;
var score = 0;
var timeLeft = 0;
var intervalId = null;
$startButton.addEventListener("click", startQuiz);
$nextButton.addEventListener("click", setNextQuestion);
$restartButton.addEventListener("click", startQuiz);

function initialize() {
  currentQuestionNumber = 0;
  score = 0;
  $finalSocre.textContent = "";
  $finishMessage.textContent = "";
}

function startQuiz() {
  initialize();
  resetQuestionAndAnswers();
  setTopboard();
  setQuestion();
  $questionBoard.classList.remove("hide");
  $timeRemaining.classList.remove("hide");
  $startButton.classList.add("hide");
  $restartButton.classList.add("hide");
  $answerBoard.classList.remove("hide");
  $answerBoard.addEventListener("click", selectAnswer);
}

function resetQuestionAndAnswers() {
  $exampleCode.textContent = null;
  $result.textContent = "";

  for (var i = 0; i < $answerButtons.length; i++) {
    $answerButtons[i].textContent = "";
    $answerButtons[i].classList.remove("hide");
  }
}

function setTopboard() {
  setTimer();
  $questionNumber.textContent = "Question ".concat(currentQuestionNumber + 1, " of ").concat(_quiz.default.length);
  $score.textContent = "Score : ".concat(score, " / ").concat(_quiz.default.length);
}

function setTimer() {
  clearInterval(intervalId);
  timeLeft = TIME_LIMIT;
  $timeRemaining.textContent = "".concat(timeLeft, " sec");
  intervalId = setInterval(countdown, 1000);
}

function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    $timeRemaining.textContent = "".concat(timeLeft, " sec");
  } else {
    timeOut();
    clearInterval(intervalId);
  }
}

function timeOut() {
  $result.textContent = "Time Out!";
  $answerBoard.removeEventListener("click", selectAnswer);
  isLastQuestion();
}

function setQuestion() {
  $question.textContent = _quiz.default[currentQuestionNumber].question;
  $exampleCode.textContent = _quiz.default[currentQuestionNumber].code;

  for (var i = 0; i < _quiz.default[currentQuestionNumber].choices.length; i++) {
    $answerButtons[i].textContent = "(".concat(i + 1, ") ").concat(_quiz.default[currentQuestionNumber].choices[i]);
  }

  for (var _i = 0; _i < $answerButtons.length; _i++) {
    if (!$answerButtons[_i].textContent) {
      $answerButtons[_i].classList.add("hide");
    }
  }
}

function setNextQuestion() {
  currentQuestionNumber++;
  resetQuestionAndAnswers();
  setTopboard();
  setQuestion();
  $nextButton.classList.add("hide");
  $answerBoard.addEventListener("click", selectAnswer);
}

function selectAnswer(event) {
  correctAnswer = _quiz.default[currentQuestionNumber].correctAnswer;
  var userAnswer = Number(event.target.dataset.answerNumber);

  if (userAnswer === correctAnswer) {
    $result.textContent = "Correct!";
    score++;
    $score.textContent = "Score : ".concat(score, " / ").concat(_quiz.default.length);
  } else {
    $result.textContent = "Wrong!\nCorrect Answer : (".concat(correctAnswer + 1, ")");
  }

  clearInterval(intervalId);
  $answerBoard.removeEventListener("click", selectAnswer);
  isLastQuestion();
}

function isLastQuestion() {
  if (currentQuestionNumber < _quiz.default.length - 1) {
    $nextButton.classList.remove("hide");
  } else {
    $finalSocre.textContent = "Final score : ".concat(score, " / ").concat(_quiz.default.length);
    $finishMessage.textContent = FINISH_MESSAGE;
    $nextButton.classList.add("hide");
    $restartButton.classList.remove("hide");
  }
}
},{"./quiz.json":"quiz.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51905" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/card-quiz.e31bb0bc.js.map