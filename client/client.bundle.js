/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.bpmnlintrc":
/*!*********************!*\
  !*** ./.bpmnlintrc ***!
  \*********************/
/*! exports provided: resolver, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolver", function() { return resolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmnlint/rules/conditional-flows */ "./node_modules/bpmnlint/rules/conditional-flows.js");
/* harmony import */ var bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmnlint/rules/end-event-required */ "./node_modules/bpmnlint/rules/end-event-required.js");
/* harmony import */ var bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmnlint/rules/event-sub-process-typed-start-event */ "./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js");
/* harmony import */ var bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmnlint/rules/fake-join */ "./node_modules/bpmnlint/rules/fake-join.js");
/* harmony import */ var bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bpmnlint/rules/label-required */ "./node_modules/bpmnlint/rules/label-required.js");
/* harmony import */ var bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bpmnlint/rules/no-complex-gateway */ "./node_modules/bpmnlint/rules/no-complex-gateway.js");
/* harmony import */ var bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bpmnlint/rules/no-disconnected */ "./node_modules/bpmnlint/rules/no-disconnected.js");
/* harmony import */ var bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bpmnlint/rules/no-duplicate-sequence-flows */ "./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js");
/* harmony import */ var bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bpmnlint/rules/no-gateway-join-fork */ "./node_modules/bpmnlint/rules/no-gateway-join-fork.js");
/* harmony import */ var bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bpmnlint/rules/no-implicit-split */ "./node_modules/bpmnlint/rules/no-implicit-split.js");
/* harmony import */ var bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bpmnlint/rules/no-inclusive-gateway */ "./node_modules/bpmnlint/rules/no-inclusive-gateway.js");
/* harmony import */ var bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bpmnlint/rules/single-blank-start-event */ "./node_modules/bpmnlint/rules/single-blank-start-event.js");
/* harmony import */ var bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bpmnlint/rules/single-event-definition */ "./node_modules/bpmnlint/rules/single-event-definition.js");
/* harmony import */ var bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bpmnlint/rules/start-event-required */ "./node_modules/bpmnlint/rules/start-event-required.js");
/* harmony import */ var bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bpmnlint/rules/sub-process-blank-start-event */ "./node_modules/bpmnlint/rules/sub-process-blank-start-event.js");
/* harmony import */ var bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_14__);

var cache = {};

/**
 * A resolver that caches rules and configuration as part of the bundle,
 * making them accessible in the browser.
 *
 * @param {Object} cache
 */
function Resolver() {}

Resolver.prototype.resolveRule = function(pkg, ruleName) {

  const rule = cache[pkg + '/' + ruleName];

  if (!rule) {
    throw new Error('cannot resolve rule <' + pkg + '/' + ruleName + '>');
  }

  return rule;
};

Resolver.prototype.resolveConfig = function(pkg, configName) {
  throw new Error(
    'cannot resolve config <' + configName + '> in <' + pkg +'>'
  );
};

var resolver = new Resolver();

var rules = {
  "conditional-flows": "error",
  "end-event-required": "error",
  "event-sub-process-typed-start-event": "error",
  "fake-join": "warn",
  "label-required": "error",
  "no-complex-gateway": "error",
  "no-disconnected": "error",
  "no-duplicate-sequence-flows": "error",
  "no-gateway-join-fork": "error",
  "no-implicit-split": "error",
  "no-inclusive-gateway": "error",
  "single-blank-start-event": "error",
  "single-event-definition": "error",
  "start-event-required": "error",
  "sub-process-blank-start-event": "error"
};

var config = {
  rules: rules
};

var bundle = {
  resolver: resolver,
  config: config
};



/* harmony default export */ __webpack_exports__["default"] = (bundle);




cache['bpmnlint/conditional-flows'] = bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0___default.a;


cache['bpmnlint/end-event-required'] = bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1___default.a;


cache['bpmnlint/event-sub-process-typed-start-event'] = bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2___default.a;


cache['bpmnlint/fake-join'] = bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3___default.a;


cache['bpmnlint/label-required'] = bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4___default.a;


cache['bpmnlint/no-complex-gateway'] = bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_5___default.a;


cache['bpmnlint/no-disconnected'] = bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_6___default.a;


cache['bpmnlint/no-duplicate-sequence-flows'] = bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_7___default.a;


cache['bpmnlint/no-gateway-join-fork'] = bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_8___default.a;


cache['bpmnlint/no-implicit-split'] = bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_9___default.a;


cache['bpmnlint/no-inclusive-gateway'] = bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_10___default.a;


cache['bpmnlint/single-blank-start-event'] = bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_11___default.a;


cache['bpmnlint/single-event-definition'] = bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_12___default.a;


cache['bpmnlint/start-event-required'] = bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_13___default.a;


cache['bpmnlint/sub-process-blank-start-event'] = bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_14___default.a;

/***/ }),

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var bpmn_js_bpmnlint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmn-js-bpmnlint */ "./node_modules/bpmn-js-bpmnlint/dist/index.esm.js");
/* harmony import */ var _bpmnlintrc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.bpmnlintrc */ "./.bpmnlintrc");






Object(camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["registerClientPlugin"])(config => {

  const {
    additionalModules,
    ...rest
  } = config;

  return {
    ...rest,
    additionalModules: [].concat(additionalModules || [], bpmn_js_bpmnlint__WEBPACK_IMPORTED_MODULE_1__["default"]),
    linting: {
      bpmnlint: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_2__["default"]
    }
  }
}, 'bpmn.modeler.configure');

/***/ }),

/***/ "./node_modules/bpmn-js-bpmnlint/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/bpmn-js-bpmnlint/dist/index.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bpmnlint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmnlint */ "./node_modules/bpmnlint/lib/index.js");
/* harmony import */ var bpmnlint__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bpmnlint__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");




var ErrorSvg = "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 352 512\"><path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path></svg>";

var WarningSvg = "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z\"></path></svg>";

var SuccessSvg = "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"></path></svg>";

var OFFSET_TOP = -5,
    OFFSET_RIGHT = -5;

var LOW_PRIORITY = 500;

var emptyConfig = {
  resolver: {
    resolveRule: function() {
      return null;
    }
  },
  config: {}
};


function Linting(
    config, bpmnjs, canvas,
    elementRegistry, eventBus,
    overlays
) {

  this._bpmnjs = bpmnjs;
  this._canvas = canvas;
  this._elementRegistry = elementRegistry;
  this._eventBus = eventBus;
  this._overlays = overlays;

  this._issues = {};
  this._lintingActive = false;
  this._linterConfig = emptyConfig;

  this._overlayIds = {};

  var self = this;

  eventBus.on([
    'elements.changed',
    'linting.configChanged',
    'linting.toggle'
  ], LOW_PRIORITY, function(e) {
    if (self.lintingActive()) {
      self.update();
    }
  });

  eventBus.on('diagram.clear', function() {
    self.clearIssues();
  });

  var linterConfig = config && config.bpmnlint;

  linterConfig && eventBus.once('diagram.init', function() {
    try {
      self.setLinterConfig(linterConfig);
    } catch (err) {
      console.error(
        '[bpmn-js-bpmnlint] Invalid lint rules configured. ' +
        'Please doublecheck your linting.bpmnlint configuration, ' +
        'cf. https://github.com/bpmn-io/bpmn-js-bpmnlint#configure-lint-rules'
      );
    }
  });

  this._init();
}

Linting.prototype.setLinterConfig = function(linterConfig) {

  if (!linterConfig.config || !linterConfig.resolver) {
    throw new Error('Expected linterConfig = { config, resolver }');
  }

  this._linterConfig = linterConfig;

  this._eventBus.fire('linting.configChanged');
};

Linting.prototype.getLinterConfig = function() {
  return this._linterConfig;
};

Linting.prototype._init = function(config) {
  var self = this;

  var button = this._button = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])(
    '<button class="bpmn-js-bpmnlint-button inactive"></button>'
  );

  this.updateButton();

  button.addEventListener('click', function() {
    self.toggleLinting();
  });

  this._canvas.getContainer().appendChild(button);
};

Linting.prototype.lintingActive = function() {
  return this._lintingActive;
};

Linting.prototype.formatIssues = function(issues) {

  const reports = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["reduce"])(issues, function(reports, ruleReports, rule) {

    return reports.concat(ruleReports.map(function(report) {
      report.rule = rule;

      return report;
    }));

  }, []);

  return Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(reports, function(report) {
    return report.id;
  });
};

Linting.prototype.toggleLinting = function() {
  if (this.lintingActive()) {
    this.deactivateLinting();
  } else {
    this.activateLinting();
  }
};

Linting.prototype.activateLinting = function() {
  this.setActive(true);
};

Linting.prototype.deactivateLinting = function() {
  this.setActive(false);

  this.clearIssues();

  this.updateButton();
};

Linting.prototype.setActive = function(active) {

  if (this._lintingActive === active) {
    return;
  }

  this._lintingActive = active;

  this._eventBus.fire('linting.toggle', { active: active });
};

/**
 * Update overlays. Always lint and check wether overlays need update or not.
 */
Linting.prototype.update = function() {
  var self = this;

  var lintStart = this._lintStart = Math.random();

  this.lint().then(function(newIssues) {

    if (self._lintStart !== lintStart) {
      return;
    }

    newIssues = self.formatIssues(newIssues);

    var remove = {},
        update = {},
        add = {};

    for (var id1 in self._issues) {
      if (!newIssues[id1]) {
        remove[id1] = self._issues[id1];
      }
    }

    for (var id2 in newIssues) {
      if (!self._issues[id2]) {
        add[id2] = newIssues[id2];
      } else {
        if (newIssues[id2] !== self._issues[id2]) {
          update[id2] = newIssues[id2];
        }
      }
    }

    remove = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])(remove, update);
    add = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])(add, update);

    self.removeProcessIssues();

    self.removeIssues(remove);
    self.createIssues(add);

    self._issues = newIssues;

    self.updateButton();

    self._fireComplete(newIssues);
  });
};

Linting.prototype._fireComplete = function(issues) {
  this._eventBus.fire('linting.completed', { issues: issues });
};

Linting.prototype.createIssues = function(issues) {
  for (var id in issues) {
    this.createElementIssues(id, issues[id]);
  }
};

/**
 * Create overlays for an elements issues.
 *
 * @param {String} elementId - Elements ID.
 * @param {Array} elementIssues - All element issues including warnings and errors.
 */
Linting.prototype.createElementIssues = function(elementId, elementIssues) {

  var element = this._elementRegistry.get(elementId);

  if (!element) {
    // gracefully handle element not found
    return;
  }

  var isProcess = element.type === 'bpmn:Process';

  var position = { top: OFFSET_TOP, right: OFFSET_RIGHT };

  elementIssues = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(elementIssues, function(elementIssue) {
    return elementIssue.category;
  });

  var errors = elementIssues.error,
      warnings = elementIssues.warn;

  var html = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<div class="bpmn-js-bpmnlint-issues"><div class="icons"></div></div>');

  var icons = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["query"])('.icons', html);

  var group;

  if (errors) {
    icons.appendChild(Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<span class="icon error">' + ErrorSvg + '</span>'));

    group = this.createGroup(errors, 'error', 'Errors', ErrorSvg);

    html.appendChild(group);
  }

  if (warnings) {
    icons.appendChild(Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<span class="icon warning">' + WarningSvg + '</span>'));

    group = this.createGroup(warnings, 'warning', 'Warnings', WarningSvg);

    html.appendChild(group);
  }

  if (isProcess) {
    this.createProcessIssues(html);
  } else {
    this._overlayIds[elementId] = this._overlays.add(element, 'bpmnlint', {
      position: position,
      html: html,
      scale: {
        min: 1,
        max: 1
      }
    });
  }

};

Linting.prototype.createGroup = function(issues, type, label, icon) {

  var group = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])(
    '<div class="group">' +
      '<div class="header ' + type + '">' + icon + label + '</div>' +
    '</div>'
  );

  issues.forEach(function(issue) {
    var collapsable = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])(
      '<div class="collapsable ' + type + '">' +
      issue.message +
      '</div>'
    );

    group.appendChild(collapsable);
  });

  return group;
};

Linting.prototype.removeIssues = function(issues) {
  var overlayId;

  for (var id in issues) {
    if (id === 'Process') {
      this.removeProcessIssues();
    } else {
      overlayId = this._overlayIds[id];

      // ignore process
      if (overlayId) {
        this._overlays.remove(overlayId);
      }
    }
  }
};

/**
 * Removes all overlays and clears cached issues.
 */
Linting.prototype.clearIssues = function() {
  var overlayId;

  for (var id in this._overlayIds) {
    overlayId = this._overlayIds[id];

    this._overlays.remove(overlayId);
  }

  this._issues = {};

  this.removeProcessIssues();
};

/**
 * Sets button state to reflect if linting is active.
 *
 * @param {String} state
 */
Linting.prototype.setButtonState = function(state, html) {
  if (state === 'success') {
    this._button.classList.add('success');
    this._button.classList.remove('error');
    this._button.classList.remove('inactive');
    this._button.classList.remove('warning');
  } else if (state === 'error') {
    this._button.classList.add('error');
    this._button.classList.remove('inactive');
    this._button.classList.remove('success');
    this._button.classList.remove('warning');
  } else if (state === 'warning') {
    this._button.classList.add('warning');
    this._button.classList.remove('error');
    this._button.classList.remove('inactive');
    this._button.classList.remove('success');
  } else if (state === 'inactive') {
    this._button.classList.add('inactive');
    this._button.classList.remove('error');
    this._button.classList.remove('success');
    this._button.classList.remove('warning');
  }

  this._button.innerHTML = html;
};

Linting.prototype.updateButton = function() {
  if (this._lintingActive) {
    var errors = 0,
        warnings = 0;

    for (var id in this._issues) {
      this._issues[id].forEach(function(issue) {
        if (issue.category === 'error') {
          errors++;
        } else if (issue.category === 'warn') {
          warnings++;
        }
      });
    }

    if (errors) {
      this.setButtonState('error', ErrorSvg + '<span>' + errors + ' Errors, ' + warnings + ' Warnings</span>');
    } else if (warnings) {
      this.setButtonState('warning', WarningSvg + '<span>' + errors + ' Errors, ' + warnings + ' Warnings</span>');
    } else {
      this.setButtonState('success', SuccessSvg + '<span>0 Errors, 0 Warnings</span>');
    }

  } else {
    this.setButtonState('inactive', SuccessSvg + '<span>0 Errors, 0 Warnings</span>');
  }

};

Linting.prototype.createProcessIssues = function(html) {
  var container = this._canvas.getContainer();

  html.classList.add('bpmn-js-bpmnlint-process-issues');

  container.appendChild(html);
};

Linting.prototype.removeProcessIssues = function() {
  var container = this._canvas.getContainer();

  var html = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["query"])('.bpmn-js-bpmnlint-process-issues', container);

  if (html) {
    Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["remove"])(html);
  }
};

Linting.prototype.lint = function() {

  var definitions = this._bpmnjs.getDefinitions();

  var linter = new bpmnlint__WEBPACK_IMPORTED_MODULE_0__["Linter"](this._linterConfig);

  return linter.lint(definitions);
};

Linting.$inject = [
  'config.linting',
  'bpmnjs',
  'canvas',
  'elementRegistry',
  'eventBus',
  'overlays'
];

function EditorActions(injector, linting) {
  var editorActions = injector.get('editorActions', false);

  editorActions && editorActions.register({
    toggleLinting: function() {
      linting.toggleLinting();
    }
  });
}

EditorActions.$inject = [
  'injector',
  'linting'
];

var index = {
  __init__: [ 'linting', 'lintingEditorActions' ],
  linting: [ 'type', Linting ],
  lintingEditorActions: ['type', EditorActions]
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/bpmnlint-utils/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmnlint-utils/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: is, isAny */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAny", function() { return isAny; });
/**
 * Checks whether node is of specific bpmn type.
 *
 * @param {ModdleElement} node
 * @param {String} type
 *
 * @return {Boolean}
 */
function is(node, type) {

  if (type.indexOf(':') === -1) {
    type = 'bpmn:' + type;
  }

  return (
    (typeof node.$instanceOf === 'function')
      ? node.$instanceOf(type)
      : node.$type === type
  );
}

/**
 * Checks whether node has any of the specified types.
 *
 * @param {ModdleElement} node
 * @param {Array<String>} types
 *
 * @return {Boolean}
 */
function isAny(node, types) {
  return types.some(function(type) {
    return is(node, type);
  });
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/bpmnlint/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/bpmnlint/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Linter = __webpack_require__(/*! ./linter */ "./node_modules/bpmnlint/lib/linter.js");

module.exports = {
  Linter
};

/***/ }),

/***/ "./node_modules/bpmnlint/lib/linter.js":
/*!*********************************************!*\
  !*** ./node_modules/bpmnlint/lib/linter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const testRule = __webpack_require__(/*! ./test-rule */ "./node_modules/bpmnlint/lib/test-rule.js");

const categoryMap = {
  0: 'off',
  1: 'warn',
  2: 'error'
};


function Linter(options = {}) {

  const {
    config,
    resolver
  } = options;

  if (typeof resolver === 'undefined') {
    throw new Error('must provide <options.resolver>');
  }

  this.config = config;
  this.resolver = resolver;

  this.cachedRules = {};
  this.cachedConfigs = {};
}


module.exports = Linter;

/**
 * Applies a rule on the moddleRoot and adds reports to the finalReport
 *
 * @param {ModdleElement} moddleRoot
 *
 * @param {Object} ruleDefinition.name
 * @param {Object} ruleDefinition.config
 * @param {Object} ruleDefinition.category
 * @param {Rule} ruleDefinition.rule
 *
 * @return {Array<ValidationErrors>} rule reports
 */
Linter.prototype.applyRule = function applyRule(moddleRoot, ruleDefinition) {

  const {
    config,
    rule,
    category,
    name
  } = ruleDefinition;

  try {

    const reports = testRule({
      moddleRoot,
      rule,
      config
    });

    return reports.map(function(report) {
      return {
        ...report,
        category
      };
    });
  } catch (e) {
    console.error('rule <' + name + '> failed with error: ', e);

    return [
      {
        message: 'Rule error: ' + e.message,
        category: 'error'
      }
    ];
  }

};


Linter.prototype.resolveRule = function(name) {

  const {
    pkg,
    ruleName
  } = this.parseRuleName(name);

  const id = `${pkg}-${ruleName}`;

  const rule = this.cachedRules[id];

  if (rule) {
    return Promise.resolve(rule);
  }

  return Promise.resolve(this.resolver.resolveRule(pkg, ruleName)).then((ruleFactory) => {

    if (!ruleFactory) {
      throw new Error(`unknown rule <${name}>`);
    }

    const rule = this.cachedRules[id] = ruleFactory();

    return rule;
  });
};

Linter.prototype.resolveConfig = function(name) {

  const {
    pkg,
    configName
  } = this.parseConfigName(name);

  const id = `${pkg}-${configName}`;

  const config = this.cachedConfigs[id];

  if (config) {
    return Promise.resolve(config);
  }

  return Promise.resolve(this.resolver.resolveConfig(pkg, configName)).then((config) => {

    if (!config) {
      throw new Error(`unknown config <${name}>`);
    }

    const actualConfig = this.cachedConfigs[id] = normalizeConfig(config, pkg);

    return actualConfig;
  });
};

/**
 * Take a linter config and return list of resolved rules.
 *
 * @param {Object} config
 *
 * @return {Array<RuleDefinition>}
 */
Linter.prototype.resolveRules = function(config) {

  return this.resolveConfiguredRules(config).then((rulesConfig) => {

    // parse rule values
    const parsedRules = Object.entries(rulesConfig).map(([ name, value ]) => {
      const {
        category,
        config
      } = this.parseRuleValue(value);

      return {
        name,
        category,
        config
      };
    });

    // filter only for enabled rules
    const enabledRules = parsedRules.filter(definition => definition.category !== 'off');

    // load enabled rules
    const loaders = enabledRules.map((definition) => {

      const {
        name
      } = definition;

      return this.resolveRule(name).then(function(rule) {
        return {
          ...definition,
          rule
        };
      });
    });

    return Promise.all(loaders);
  });
};


Linter.prototype.resolveConfiguredRules = function(config) {

  let parents = config.extends;

  if (typeof parents === 'string') {
    parents = [ parents ];
  }

  if (typeof parents === 'undefined') {
    parents = [];
  }

  return Promise.all(
    parents.map((configName) => {
      return this.resolveConfig(configName).then((config) => {
        return this.resolveConfiguredRules(config);
      });
    })
  ).then((inheritedRules) => {

    const overrideRules = normalizeConfig(config, 'bpmnlint').rules;

    const rules = [ ...inheritedRules, overrideRules ].reduce((rules, currentRules) => {
      return {
        ...rules,
        ...currentRules
      };
    }, {});

    return rules;
  });
};


/**
 * Lint the given model root, using the specified linter config.
 *
 * @param {ModdleElement} moddleRoot
 * @param {Object} [config] the bpmnlint configuration to use
 *
 * @return {Object} lint results, keyed by category names
 */
Linter.prototype.lint = function(moddleRoot, config) {

  config = config || this.config;

  // load rules
  return this.resolveRules(config).then((ruleDefinitions) => {

    const allReports = {};

    ruleDefinitions.forEach((ruleDefinition) => {

      const {
        name
      } = ruleDefinition;

      const reports = this.applyRule(moddleRoot, ruleDefinition);

      if (reports.length) {
        allReports[name] = reports;
      }
    });

    return allReports;
  });
};


Linter.prototype.parseRuleValue = function(value) {

  let category;
  let config;

  if (Array.isArray(value)) {
    category = value[0];
    config = value[1];
  } else {
    category = value;
    config = {};
  }

  // normalize rule flag to <error> and <warn> which
  // may be upper case or a number at this point
  if (typeof category === 'string') {
    category = category.toLowerCase();
  }

  category = categoryMap[category] || category;

  return {
    config,
    category
  };
};

Linter.prototype.parseRuleName = function(name) {

  const slashIdx = name.indexOf('/');

  // resolve rule as built-in, if unprefixed
  if (slashIdx === -1) {
    return {
      pkg: 'bpmnlint',
      ruleName: name
    };
  }

  const pkg = name.substring(0, slashIdx);
  const ruleName = name.substring(slashIdx + 1);

  if (pkg === 'bpmnlint') {
    return {
      pkg: 'bpmnlint',
      ruleName
    };
  } else {
    return {
      pkg: 'bpmnlint-plugin-' + pkg,
      ruleName
    };
  }
};


Linter.prototype.parseConfigName = function(name) {

  const localMatch = /^bpmnlint:(.*)$/.exec(name);

  if (localMatch) {
    return {
      pkg: 'bpmnlint',
      configName: localMatch[1]
    };
  }

  const pluginMatch = /^plugin:([^/]+)\/(.+)$/.exec(name);

  if (!pluginMatch) {
    throw new Error(`invalid config name <${ name }>`);
  }

  return {
    pkg: 'bpmnlint-plugin-' + pluginMatch[1],
    configName: pluginMatch[2]
  };
};


// helpers ///////////////////////////

/**
 * Validate and return validated config.
 *
 * @param  {Object} config
 * @param  {String} pkg
 *
 * @return {Object} validated config
 */
function normalizeConfig(config, pkg) {

  const rules = config.rules || {};

  const validatedRules = Object.keys(rules).reduce((normalizedRules, name) => {

    const value = rules[name];

    // prefix local rule definition
    if (name.indexOf('bpmnlint/') === 0) {
      name = name.substring('bpmnlint/'.length);
    }

    normalizedRules[name] = value;

    return normalizedRules;
  }, {});

  return {
    ...config,
    rules: validatedRules
  };
}

/***/ }),

/***/ "./node_modules/bpmnlint/lib/test-rule.js":
/*!************************************************!*\
  !*** ./node_modules/bpmnlint/lib/test-rule.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const traverse = __webpack_require__(/*! ./traverse */ "./node_modules/bpmnlint/lib/traverse.js");

class Reporter {
  constructor({ moddleRoot, rule }) {
    this.rule = rule;
    this.moddleRoot = moddleRoot;
    this.messages = [];
    this.report = this.report.bind(this);
  }

  report(id, message) {
    this.messages.push({ id, message });
  }
}

module.exports = function testRule({ moddleRoot, rule }) {
  const reporter = new Reporter({ rule, moddleRoot });
  traverse(moddleRoot, node => rule.check(node, reporter));
  return reporter.messages;
};


/***/ }),

/***/ "./node_modules/bpmnlint/lib/traverse.js":
/*!***********************************************!*\
  !*** ./node_modules/bpmnlint/lib/traverse.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Traverse a moddle tree, depth first from top to bottom
 * and call the passed visitor fn.
 *
 * @param {ModdleElement} element
 * @param {Function} fn
 */
module.exports = function traverse(element, fn) {
  fn(element);

  var descriptor = element.$descriptor;

  if (descriptor.isGeneric) {
    return;
  }

  var containedProperties = descriptor.properties.filter(p => {
    return !p.isAttr && !p.isReference && p.type !== 'String';
  });

  containedProperties.forEach(p => {
    if (p.name in element) {
      const propertyValue = element[p.name];

      if (p.isMany) {
        propertyValue.forEach(child => {
          traverse(child, fn);
        });
      } else {
        traverse(propertyValue, fn);
      }
    }
  });
};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/conditional-flows.js":
/*!**********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/conditional-flows.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A rule that checks that sequence flows outgoing from a
 * conditional forking gateway or activity are
 * either default flows _or_ have a condition attached
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isConditionalForking(node)) {
      return;
    }

    const outgoing = node.outgoing || [];

    outgoing.forEach((flow) => {
      const missingCondition = (
        !hasCondition(flow) &&
        !isDefaultFlow(node, flow)
      );

      if (missingCondition) {
        reporter.report(flow.id, 'Sequence flow is missing condition');
      }
    });
  }

  return {
    check
  };

};


// helpers /////////////////////////////

function isConditionalForking(node) {

  const defaultFlow = node['default'];
  const outgoing = node.outgoing || [];

  return defaultFlow || outgoing.find(hasCondition);
}

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/end-event-required.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/end-event-required.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks the presence of an end event per scope.
 */
module.exports = function() {

  function hasEndEvent(node) {
    const flowElements = node.flowElements || [];

    return (
      flowElements.some(node => is(node, 'bpmn:EndEvent'))
    );
  }

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Process',
      'bpmn:SubProcess'
    ])) {
      return;
    }

    if (!hasEndEvent(node)) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' is missing end event');
    }
  }

  return { check };
};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/event-sub-process-typed-start-event.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks that start events inside an event sub-process
 * are typed.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:SubProcess') || !node.triggeredByEvent) {
      return;
    }

    const flowElements = node.flowElements || [];

    flowElements.forEach(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      if (eventDefinitions.length === 0) {
        reporter.report(flowElement.id, 'Start event is missing event definition');
      }
    });
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/fake-join.js":
/*!**************************************************!*\
  !*** ./node_modules/bpmnlint/rules/fake-join.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks that no fake join is modeled by attempting
 * to give a task or event join semantics.
 *
 * Users should model a parallel joining gateway
 * to achieve the desired behavior.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Task',
      'bpmn:Event'
    ])) {
      return;
    }

    const incoming = node.incoming || [];

    if (incoming.length > 1) {
      reporter.report(node.id, 'Incoming flows do not join');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/helper.js":
/*!***********************************************!*\
  !*** ./node_modules/bpmnlint/rules/helper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * Create a checker that disallows the given element type.
 *
 * @param {String} type
 *
 * @return {Function} ruleImpl
 */
function disallowNodeType(type) {

  return function() {

    function check(node, reporter) {

      if (is(node, type)) {
        reporter.report(node.id, 'Element has disallowed type <' + type + '>');
      }
    }

    return {
      check
    };

  };

}

module.exports.disallowNodeType = disallowNodeType;

/***/ }),

/***/ "./node_modules/bpmnlint/rules/label-required.js":
/*!*******************************************************!*\
  !*** ./node_modules/bpmnlint/rules/label-required.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks the presence of a label.
 */
module.exports = function() {

  function check(node, reporter) {

    if (isAny(node, [
      'bpmn:ParallelGateway',
      'bpmn:EventBasedGateway'
    ])) {
      return;
    }

    // ignore joining gateways
    if (is(node, 'bpmn:Gateway') && !isForking(node)) {
      return;
    }

    if (is(node, 'bpmn:BoundaryEvent')) {
      return;
    }

    // ignore sub-processes
    if (is(node, 'bpmn:SubProcess')) {
      // TODO(nikku): better ignore expanded sub-processes only
      return;
    }

    // ignore sequence flow without condition
    if (is(node, 'bpmn:SequenceFlow') && !hasCondition(node)) {
      return;
    }

    // ignore data objects and artifacts for now
    if (isAny(node, [
      'bpmn:FlowNode',
      'bpmn:SequenceFlow',
      'bpmn:Participant',
      'bpmn:Lane'
    ])) {

      const name = (node.name || '').trim();

      if (name.length === 0) {
        reporter.report(node.id, 'Element is missing label/name');
      }
    }
  }

  return { check };
};


// helpers ////////////////////////

function isForking(node) {
  const outgoing = node.outgoing || [];

  return outgoing.length > 1;
}

function hasCondition(node) {
  return node.conditionExpression;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-complex-gateway.js":
/*!***********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-complex-gateway.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const disallowNodeType = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js").disallowNodeType;

module.exports = disallowNodeType('bpmn:ComplexGateway');

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-disconnected.js":
/*!********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-disconnected.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that verifies that there exists no disconnected
 * flow elements, i.e. elements without incoming
 * _or_ outgoing sequence flows
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Task',
      'bpmn:Gateway',
      'bpmn:SubProcess',
      'bpmn:Event'
    ])) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (!incoming.length && !outgoing.length) {
      reporter.report(node.id, 'Element is not connected');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js":
/*!********************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that verifies that there exists no disconnected
 * flow elements, i.e. elements without incoming
 * _or_ outgoing sequence flows
 */
module.exports = function() {

  const keyed = {};

  const outgoingReported = {};
  const incomingReported = {};

  function check(node, reporter) {

    if (!is(node, 'bpmn:SequenceFlow')) {
      return;
    }

    const key = flowKey(node);

    if (key in keyed) {
      reporter.report(node.id, 'SequenceFlow is a duplicate');

      const sourceId = node.sourceRef.id;
      const targetId = node.targetRef.id;

      console.log(sourceId, targetId);

      if (!outgoingReported[sourceId]) {
        reporter.report(sourceId, 'Duplicate outgoing sequence flows');

        outgoingReported[sourceId] = true;
      }

      if (!incomingReported[targetId]) {
        reporter.report(targetId, 'Duplicate incoming sequence flows');

        incomingReported[targetId] = true;
      }
    } else {
      keyed[key] = node;
    }
  }

  return {
    check
  };

};


// helpers /////////////////

function flowKey(flow) {
  const conditionExpression = flow.conditionExpression;

  const condition = conditionExpression ? conditionExpression.body : '';
  const source = flow.sourceRef ? flow.sourceRef.id : flow.id;
  const target = flow.targetRef ? flow.targetRef.id : flow.id;

  return source + '#' + target + '#' + condition;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-gateway-join-fork.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-gateway-join-fork.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks, whether a gateway forks and joins
 * at the same time.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Gateway')) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (incoming.length > 1 && outgoing.length > 1) {
      reporter.report(node.id, 'Gateway forks and joins');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-implicit-split.js":
/*!**********************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-implicit-split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks that no implicit split is modeled
 * starting from a task.
 *
 * users should model the parallel splitting gateway
 * explicitly instead.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Task',
      'bpmn:Event'
    ])) {
      return;
    }

    const outgoing = node.outgoing || [];

    const outgoingWithoutCondition = outgoing.filter((flow) => {
      return !hasCondition(flow) && !isDefaultFlow(node, flow);
    });

    if (outgoingWithoutCondition.length > 1) {
      reporter.report(node.id, 'Flow splits implicitly');
    }
  }

  return {
    check
  };

};


// helpers /////////////////////////////

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}

/***/ }),

/***/ "./node_modules/bpmnlint/rules/no-inclusive-gateway.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-inclusive-gateway.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const disallowNodeType = __webpack_require__(/*! ./helper */ "./node_modules/bpmnlint/rules/helper.js").disallowNodeType;

module.exports = disallowNodeType('bpmn:InclusiveGateway');

/***/ }),

/***/ "./node_modules/bpmnlint/rules/single-blank-start-event.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/single-blank-start-event.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks whether not more than one blank start event
 * exists per scope.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:FlowElementsContainer')) {
      return;
    }

    const flowElements = node.flowElements || [];

    const blankStartEvents = flowElements.filter(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      return eventDefinitions.length === 0;
    });

    if (blankStartEvents.length > 1) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' has multiple blank start events');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/single-event-definition.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/single-event-definition.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that verifies that an event contains maximum one event definition.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Event')) {
      return;
    }

    const eventDefinitions = node.eventDefinitions || [];

    if (eventDefinitions.length > 1) {
      reporter.report(node.id, 'Event has multiple event definitions');
    }
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/bpmnlint/rules/start-event-required.js":
/*!*************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/start-event-required.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is,
  isAny
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks for the presence of a start event per scope.
 */
module.exports = function() {

  function hasStartEvent(node) {
    const flowElements = node.flowElements || [];

    return (
      flowElements.some(node => is(node, 'bpmn:StartEvent'))
    );
  }

  function check(node, reporter) {

    if (!isAny(node, [
      'bpmn:Process',
      'bpmn:SubProcess'
    ])) {
      return;
    }

    if (!hasStartEvent(node)) {
      const type = is(node, 'bpmn:SubProcess') ? 'Sub process' : 'Process';

      reporter.report(node.id, type + ' is missing start event');
    }
  }

  return { check };
};


/***/ }),

/***/ "./node_modules/bpmnlint/rules/sub-process-blank-start-event.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/sub-process-blank-start-event.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * A rule that checks that start events inside a normal sub-processes
 * are blank (do not have an event definition).
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:SubProcess') || node.triggeredByEvent) {
      return;
    }

    const flowElements = node.flowElements || [];

    flowElements.forEach(function(flowElement) {

      if (!is(flowElement, 'bpmn:StartEvent')) {
        return false;
      }

      const eventDefinitions = flowElement.eventDefinitions || [];

      if (eventDefinitions.length > 0) {
        reporter.report(flowElement.id, 'Start event must be blank');
      }
    });
  }

  return {
    check
  };

};

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/*! exports provided: registerClientPlugin, registerBpmnJSPlugin, registerBpmnJSModdleExtension, getModelerDirectory, getPluginsDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClientPlugin", function() { return registerClientPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSPlugin", function() { return registerBpmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSModdleExtension", function() { return registerBpmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelerDirectory", function() { return getModelerDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPluginsDirectory", function() { return getPluginsDirectory; });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: flatten, find, findIndex, filter, forEach, without, reduce, every, some, map, keys, size, values, groupBy, uniqueBy, unionBy, sortBy, matchPattern, debounce, throttle, bind, isUndefined, isDefined, isNil, isArray, isObject, isNumber, isFunction, isString, ensureArray, has, assign, pick, omit, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionBy", function() { return unionBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire() {
    var now = Date.now();
    var scheduledDiff = lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  return function () {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  };
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}




/***/ }),

/***/ "./node_modules/min-dom/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/min-dom/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: attr, classes, clear, closest, delegate, domify, event, matches, query, queryAll, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegateEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domify", function() { return domify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return componentEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matchesSelector$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
function attr(el, name, val) {
  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name);
  }

  // set
  el.setAttribute(name, val);

  return el;
}

var indexOf = [].indexOf;

var indexof = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes(el) {
  return new ClassList(el);
}

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function (name) {
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = indexof(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function (name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = indexof(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function (re) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function (name, force) {
  // classList
  if (this.list) {
    if ('undefined' !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ('undefined' !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function () {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has = ClassList.prototype.contains = function (name) {
  return this.list ? this.list.contains(name) : !!~indexof(this.array(), name);
};

/**
 * Remove all children from the given element.
 */
function clear(el) {

  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}

/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

var matchesSelector = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

var closest = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode;

  while (parent && parent !== document) {
    if (matchesSelector(parent, selector)) return parent;
    parent = parent.parentNode;
  }
};

var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = function(el, type, fn, capture){
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var unbind_1 = function(el, type, fn, capture){
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};

var componentEvent = {
	bind: bind_1,
	unbind: unbind_1
};

/**
 * Module dependencies.
 */



/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = ['focus', 'blur'];

var bind$1 = function(el, selector, type, fn, capture){
  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;

  return componentEvent.bind(el, type, function(e){
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget) fn.call(el, e);
  }, capture);
};

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

var unbind$1 = function(el, type, fn, capture){
  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;

  componentEvent.unbind(el, type, fn, capture);
};

var delegateEvents = {
	bind: bind$1,
	unbind: unbind$1
};

/**
 * Expose `parse`.
 */

var domify = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

var proto$1 = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor$1 = proto$1.matches
  || proto$1.matchesSelector
  || proto$1.webkitMatchesSelector
  || proto$1.mozMatchesSelector
  || proto$1.msMatchesSelector
  || proto$1.oMatchesSelector;

var matchesSelector$1 = match$1;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match$1(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor$1) return vendor$1.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

function all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}

function remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}




/***/ })

/******/ });
//# sourceMappingURL=client.bundle.js.map