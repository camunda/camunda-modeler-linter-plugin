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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
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
/* harmony import */ var bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bpmnlint/rules/no-bpmndi */ "./node_modules/bpmnlint/rules/no-bpmndi.js");
/* harmony import */ var bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bpmnlint/rules/no-complex-gateway */ "./node_modules/bpmnlint/rules/no-complex-gateway.js");
/* harmony import */ var bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bpmnlint/rules/no-disconnected */ "./node_modules/bpmnlint/rules/no-disconnected.js");
/* harmony import */ var bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bpmnlint/rules/no-duplicate-sequence-flows */ "./node_modules/bpmnlint/rules/no-duplicate-sequence-flows.js");
/* harmony import */ var bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bpmnlint/rules/no-gateway-join-fork */ "./node_modules/bpmnlint/rules/no-gateway-join-fork.js");
/* harmony import */ var bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bpmnlint/rules/no-implicit-split */ "./node_modules/bpmnlint/rules/no-implicit-split.js");
/* harmony import */ var bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bpmnlint/rules/no-inclusive-gateway */ "./node_modules/bpmnlint/rules/no-inclusive-gateway.js");
/* harmony import */ var bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bpmnlint/rules/single-blank-start-event */ "./node_modules/bpmnlint/rules/single-blank-start-event.js");
/* harmony import */ var bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bpmnlint/rules/single-event-definition */ "./node_modules/bpmnlint/rules/single-event-definition.js");
/* harmony import */ var bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bpmnlint/rules/start-event-required */ "./node_modules/bpmnlint/rules/start-event-required.js");
/* harmony import */ var bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bpmnlint/rules/sub-process-blank-start-event */ "./node_modules/bpmnlint/rules/sub-process-blank-start-event.js");
/* harmony import */ var bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! bpmnlint/rules/superfluous-gateway */ "./node_modules/bpmnlint/rules/superfluous-gateway.js");
/* harmony import */ var bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bpmnlint_plugin_camunda_rules_avoid_lanes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bpmnlint-plugin-camunda/rules/avoid-lanes */ "./node_modules/bpmnlint-plugin-camunda/rules/avoid-lanes.js");
/* harmony import */ var bpmnlint_plugin_camunda_rules_avoid_lanes__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_plugin_camunda_rules_avoid_lanes__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var bpmnlint_plugin_camunda_rules_forking_conditions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! bpmnlint-plugin-camunda/rules/forking-conditions */ "./node_modules/bpmnlint-plugin-camunda/rules/forking-conditions.js");
/* harmony import */ var bpmnlint_plugin_camunda_rules_forking_conditions__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_plugin_camunda_rules_forking_conditions__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var bpmnlint_plugin_camunda_rules_no_collapsed_sub_processes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! bpmnlint-plugin-camunda/rules/no-collapsed-sub-processes */ "./node_modules/bpmnlint-plugin-camunda/rules/no-collapsed-sub-processes.js");
/* harmony import */ var bpmnlint_plugin_camunda_rules_no_collapsed_sub_processes__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(bpmnlint_plugin_camunda_rules_no_collapsed_sub_processes__WEBPACK_IMPORTED_MODULE_19__);

const cache = {};

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

const resolver = new Resolver();

const rules = {
  "conditional-flows": "error",
  "end-event-required": "error",
  "event-sub-process-typed-start-event": "error",
  "fake-join": "warn",
  "label-required": "error",
  "no-bpmndi": "error",
  "no-complex-gateway": "error",
  "no-disconnected": "error",
  "no-duplicate-sequence-flows": "error",
  "no-gateway-join-fork": "error",
  "no-implicit-split": "error",
  "no-inclusive-gateway": "error",
  "single-blank-start-event": "error",
  "single-event-definition": "error",
  "start-event-required": "error",
  "sub-process-blank-start-event": "error",
  "superfluous-gateway": "warning",
  "camunda/avoid-lanes": "warn",
  "camunda/forking-conditions": "error",
  "camunda/no-collapsed-sub-processes": "error"
};

const config = {
  rules: rules
};

const bundle = {
  resolver: resolver,
  config: config
};



/* harmony default export */ __webpack_exports__["default"] = (bundle);




cache['bpmnlint/conditional-flows'] = bpmnlint_rules_conditional_flows__WEBPACK_IMPORTED_MODULE_0___default.a;


cache['bpmnlint/end-event-required'] = bpmnlint_rules_end_event_required__WEBPACK_IMPORTED_MODULE_1___default.a;


cache['bpmnlint/event-sub-process-typed-start-event'] = bpmnlint_rules_event_sub_process_typed_start_event__WEBPACK_IMPORTED_MODULE_2___default.a;


cache['bpmnlint/fake-join'] = bpmnlint_rules_fake_join__WEBPACK_IMPORTED_MODULE_3___default.a;


cache['bpmnlint/label-required'] = bpmnlint_rules_label_required__WEBPACK_IMPORTED_MODULE_4___default.a;


cache['bpmnlint/no-bpmndi'] = bpmnlint_rules_no_bpmndi__WEBPACK_IMPORTED_MODULE_5___default.a;


cache['bpmnlint/no-complex-gateway'] = bpmnlint_rules_no_complex_gateway__WEBPACK_IMPORTED_MODULE_6___default.a;


cache['bpmnlint/no-disconnected'] = bpmnlint_rules_no_disconnected__WEBPACK_IMPORTED_MODULE_7___default.a;


cache['bpmnlint/no-duplicate-sequence-flows'] = bpmnlint_rules_no_duplicate_sequence_flows__WEBPACK_IMPORTED_MODULE_8___default.a;


cache['bpmnlint/no-gateway-join-fork'] = bpmnlint_rules_no_gateway_join_fork__WEBPACK_IMPORTED_MODULE_9___default.a;


cache['bpmnlint/no-implicit-split'] = bpmnlint_rules_no_implicit_split__WEBPACK_IMPORTED_MODULE_10___default.a;


cache['bpmnlint/no-inclusive-gateway'] = bpmnlint_rules_no_inclusive_gateway__WEBPACK_IMPORTED_MODULE_11___default.a;


cache['bpmnlint/single-blank-start-event'] = bpmnlint_rules_single_blank_start_event__WEBPACK_IMPORTED_MODULE_12___default.a;


cache['bpmnlint/single-event-definition'] = bpmnlint_rules_single_event_definition__WEBPACK_IMPORTED_MODULE_13___default.a;


cache['bpmnlint/start-event-required'] = bpmnlint_rules_start_event_required__WEBPACK_IMPORTED_MODULE_14___default.a;


cache['bpmnlint/sub-process-blank-start-event'] = bpmnlint_rules_sub_process_blank_start_event__WEBPACK_IMPORTED_MODULE_15___default.a;


cache['bpmnlint/superfluous-gateway'] = bpmnlint_rules_superfluous_gateway__WEBPACK_IMPORTED_MODULE_16___default.a;


cache['bpmnlint-plugin-camunda/avoid-lanes'] = bpmnlint_plugin_camunda_rules_avoid_lanes__WEBPACK_IMPORTED_MODULE_17___default.a;


cache['bpmnlint-plugin-camunda/forking-conditions'] = bpmnlint_plugin_camunda_rules_forking_conditions__WEBPACK_IMPORTED_MODULE_18___default.a;


cache['bpmnlint-plugin-camunda/no-collapsed-sub-processes'] = bpmnlint_plugin_camunda_rules_no_collapsed_sub_processes__WEBPACK_IMPORTED_MODULE_19___default.a;

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var bpmn_js_bpmnlint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmn-js-bpmnlint */ "./node_modules/bpmn-js-bpmnlint/dist/index.esm.js");
/* harmony import */ var _bpmnlintrc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.bpmnlintrc */ "./.bpmnlintrc");






const persistLintingStateModule = {
  __init__: [
    [ 'eventBus', function(eventBus) {

      eventBus.on('linting.toggle', function(event) {
        const {
          active
        } = event;

        setLintingActive(active);
      });

    } ]
  ]
}

Object(camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["registerClientPlugin"])(config => {

  const {
    additionalModules,
    ...rest
  } = config;

  return {
    ...rest,
    additionalModules: [
      ...(additionalModules || []),
      bpmn_js_bpmnlint__WEBPACK_IMPORTED_MODULE_1__["default"],
      persistLintingStateModule
    ],
    linting: {
      bpmnlint: _bpmnlintrc__WEBPACK_IMPORTED_MODULE_2__["default"],
      active: getLintingActive()
    }
  }
}, 'bpmn.modeler.configure');


// helpers ///////////////

const LINTING_STATE_KEY = 'camunda-modeler-linter-plugin.active';

function getLintingActive() {
  const str = window.localStorage.getItem(LINTING_STATE_KEY);

  return str && JSON.parse(str) || false;
}

function setLintingActive(active) {
  window.localStorage.setItem(LINTING_STATE_KEY, JSON.stringify(active));
}

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
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! min-dom */ "./node_modules/bpmn-js-bpmnlint/node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var diagram_js_lib_util_EscapeUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diagram-js/lib/util/EscapeUtil */ "./node_modules/diagram-js/lib/util/EscapeUtil.js");





function EditorActions(injector, linting) {
  var editorActions = injector.get('editorActions', false);

  editorActions && editorActions.register({
    toggleLinting: function() {
      linting.toggle();
    }
  });
}

EditorActions.$inject = [
  'injector',
  'linting'
];

var ErrorSvg = "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 352 512\"><path fill=\"currentColor\" d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path></svg>";

var WarningSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M288 328.83c-45.518 0-82.419 34.576-82.419 77.229 0 42.652 36.9 77.229 82.419 77.229 45.518 0 82.419-34.577 82.419-77.23 0-42.652-36.9-77.229-82.419-77.229zM207.439 57.034l11.61 204.348c.544 9.334 8.78 16.64 18.755 16.64h100.392c9.975 0 18.211-7.306 18.754-16.64l11.611-204.348c.587-10.082-7.98-18.56-18.754-18.56H226.192c-10.775 0-19.34 8.478-18.753 18.56z\"/></svg>";

var SuccessSvg = "<svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"></path></svg>";

var OFFSET_TOP = -7,
    OFFSET_RIGHT = -7;

var LOW_PRIORITY = 500;

var emptyConfig = {
  resolver: {
    resolveRule: function() {
      return null;
    }
  },
  config: {}
};

var stateToIcon = {
  error: ErrorSvg,
  warning: WarningSvg,
  success: SuccessSvg,
  inactive: SuccessSvg
};

function Linting(
    bpmnjs,
    canvas,
    config,
    elementRegistry,
    eventBus,
    overlays,
    translate
) {
  this._bpmnjs = bpmnjs;
  this._canvas = canvas;
  this._elementRegistry = elementRegistry;
  this._eventBus = eventBus;
  this._overlays = overlays;
  this._translate = translate;

  this._issues = {};

  this._active = config && config.active || false;
  this._linterConfig = emptyConfig;

  this._overlayIds = {};

  var self = this;

  eventBus.on([
    'import.done',
    'elements.changed',
    'linting.configChanged',
    'linting.toggle'
  ], LOW_PRIORITY, function(e) {
    if (self.isActive()) {
      self.update();
    }
  });

  eventBus.on('linting.toggle', function(event) {

    const active = event.active;

    if (!active) {
      self._clearIssues();
      self._updateButton();
    }
  });

  eventBus.on('diagram.clear', function() {
    self._clearIssues();
  });

  var linterConfig = config && config.bpmnlint;

  linterConfig && eventBus.once('diagram.init', function() {

    // bail out if config was already provided
    // during initialization of other modules
    if (self.getLinterConfig() !== emptyConfig) {
      return;
    }

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

Linting.prototype._init = function() {
  this._createButton();

  this._updateButton();
};

Linting.prototype.isActive = function() {
  return this._active;
};

Linting.prototype._formatIssues = function(issues) {

  let self = this;

  // (1) reduce issues to flat list of issues including the affected element
  let reports = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["reduce"])(issues, function(reports, ruleReports, rule) {

    return reports.concat(ruleReports.map(function(report) {
      report.rule = rule;

      return report;
    }));

  }, []);

  // (2) if affected element is not visible, then report it on root level
  reports = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["map"])(reports, function(report) {
    const element = self._elementRegistry.get(report.id);

    if (!element) {
      report.isChildIssue = true;
      report.actualElementId = report.id;

      report.id = self._canvas.getRootElement().id;
    }

    return report;
  });

  // (3) group issues per elementId (resulting in ie. [elementId1: [{issue1}, {issue2}]] structure)
  reports = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(reports, function(report) {
    return report.id;
  });

  return reports;
};

/**
 * Toggle linting on or off.
 *
 * @param {boolean} [newActive]
 *
 * @return {boolean} the new active state
 */
Linting.prototype.toggle = function(newActive) {

  newActive = typeof newActive === 'undefined' ? !this.isActive() : newActive;

  this._setActive(newActive);

  return newActive;
};

Linting.prototype._setActive = function(active) {

  if (this._active === active) {
    return;
  }

  this._active = active;

  this._eventBus.fire('linting.toggle', { active: active });
};

/**
 * Update overlays. Always lint and check wether overlays need update or not.
 */
Linting.prototype.update = function() {
  var self = this;

  var definitions = this._bpmnjs.getDefinitions();

  if (!definitions) {
    return;
  }

  var lintStart = this._lintStart = Math.random();

  this.lint().then(function(newIssues) {

    if (self._lintStart !== lintStart) {
      return;
    }

    newIssues = self._formatIssues(newIssues);

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

    self._clearOverlays();
    self._createIssues(add);

    self._issues = newIssues;

    self._updateButton();

    self._fireComplete(newIssues);
  });
};

Linting.prototype._fireComplete = function(issues) {
  this._eventBus.fire('linting.completed', { issues: issues });
};

Linting.prototype._createIssues = function(issues) {
  for (var id in issues) {
    this._createElementIssues(id, issues[id]);
  }
};

/**
 * Create overlay including all issues which are given for a single element.
 *
 * @param {string} elementId - id of element, for which the issue shall be displayed.
 * @param {Array} elementIssues - All element issues including warnings and errors.
 */
Linting.prototype._createElementIssues = function(elementId, elementIssues) {
  var element = this._elementRegistry.get(elementId);

  if (!element) {
    return;
  }

  var menuPosition;
  var position;

  if (element === this._canvas.getRootElement()) {
    menuPosition = 'bottom-right';

    position = {
      top: 20,
      left: 150
    };
  } else {
    menuPosition = 'top-right';

    position = {
      top: OFFSET_TOP,
      left: OFFSET_RIGHT
    };
  }

  var issuesByType = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(elementIssues, function(elementIssue) {
    return (elementIssue.isChildIssue ? 'child' : '') + elementIssue.category;
  });

  var errors = issuesByType.error,
      warnings = issuesByType.warn,
      childErrors = issuesByType.childerror,
      childWarnings = issuesByType.childwarning;

  if (!errors && !warnings && !childErrors && !childWarnings) {
    return;
  }

  var $html = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])(
    '<div class="bjsl-overlay bjsl-issues-' + menuPosition + '"></div>'
  );

  var $icon = (errors || childErrors)
    ? Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<div class="bjsl-icon bjsl-icon-error">' + ErrorSvg + '</div>')
    : Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<div class="bjsl-icon bjsl-icon-warning">' + WarningSvg + '</div>');

  var $dropdown = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<div class="bjsl-dropdown"></div>');
  var $dropdownContent = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<div class="bjsl-dropdown-content"></div>');

  var $issueContainer = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<div class="bjsl-issues"></div>');

  var $issues = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<div class="bjsl-current-element-issues"></div>');
  var $issueList = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<ul></ul>');

  $html.appendChild($icon);
  $html.appendChild($dropdown);

  $dropdown.appendChild($dropdownContent);
  $dropdownContent.appendChild($issueContainer);

  $issueContainer.appendChild($issues);

  $issues.appendChild($issueList);

  // Add errors and warnings to issueList
  if (errors) {
    this._addErrors($issueList, errors);
  }

  if (warnings) {
    this._addWarnings($issueList, warnings);
  }

  // If errors or warnings for child elements of the current element are to be displayed,
  // then add an additional list
  if (childErrors || childWarnings) {
    var $childIssues = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<div class="bjsl-child-issues"></div>');
    var $childIssueList = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<ul></ul>');
    var $childIssueLabel = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<a class="bjsl-issue-heading">Issues for child elements:</a>');

    if (childErrors) {
      this._addErrors($childIssueList, childErrors);
    }

    if (childWarnings) {
      this._addWarnings($childIssueList, childWarnings);
    }

    if (errors || warnings) {
      var $childIssuesSeperator = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])('<hr/>');
      $childIssues.appendChild($childIssuesSeperator);
    }

    $childIssues.appendChild($childIssueLabel);
    $childIssues.appendChild($childIssueList);
    $issueContainer.appendChild($childIssues);
  }

  this._overlayIds[elementId] = this._overlays.add(element, 'linting', {
    position: position,
    html: $html,
    scale: {
      min: .9
    }
  });
};

Linting.prototype._addErrors = function($ul, errors) {

  var self = this;

  errors.forEach(function(error) {
    self._addEntry($ul, 'error', error);
  });
};

Linting.prototype._addWarnings = function($ul, warnings) {

  var self = this;

  warnings.forEach(function(error) {
    self._addEntry($ul, 'warning', error);
  });
};

Linting.prototype._addEntry = function($ul, state, entry) {

  var rule = entry.rule,
      message = this._translate(entry.message),
      actualElementId = entry.actualElementId;

  var icon = stateToIcon[state];

  var $entry = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])(
    '<li class="' + state + '">' +
      '<span class="icon"> ' + icon + '</span>' +
      '<a title="' + Object(diagram_js_lib_util_EscapeUtil__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(rule) + ': ' + Object(diagram_js_lib_util_EscapeUtil__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(message) + '" ' +
         'data-rule="' + Object(diagram_js_lib_util_EscapeUtil__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(rule) + '" ' +
         'data-message="' + Object(diagram_js_lib_util_EscapeUtil__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(message) + '"' +
      '>' +
        Object(diagram_js_lib_util_EscapeUtil__WEBPACK_IMPORTED_MODULE_3__["escapeHTML"])(message) +
      '</a>' +
      (actualElementId
        ? '<a class="bjsl-id-hint"><code>' + actualElementId + '</code></a>'
        : '') +
    '</li>'
  );

  $ul.appendChild($entry);
};

Linting.prototype._clearOverlays = function() {
  this._overlays.remove({ type: 'linting' });

  this._overlayIds = {};
};

Linting.prototype._clearIssues = function() {
  this._issues = {};

  this._clearOverlays();
};

Linting.prototype._setButtonState = function(state, errors, warnings) {
  var button = this._button;

  var icon = stateToIcon[state];

  var html = icon + '<span>' + this._translate('{errors} Errors, {warnings} Warnings', { errors: errors.toString(), warnings: warnings.toString() }) + '</span>';

  [
    'error',
    'inactive',
    'success',
    'warning'
  ].forEach(function(s) {
    if (state === s) {
      button.classList.add('bjsl-button-' + s);
    } else {
      button.classList.remove('bjsl-button-' + s);
    }
  });

  button.innerHTML = html;
};

Linting.prototype._updateButton = function() {

  if (!this.isActive()) {
    this._setButtonState('inactive', 0, 0);

    return;
  }

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

  var state = (errors && 'error') || (warnings && 'warning') || 'success';

  this._setButtonState(state, errors, warnings);
};

Linting.prototype._createButton = function() {

  var self = this;

  this._button = Object(min_dom__WEBPACK_IMPORTED_MODULE_2__["domify"])(
    '<button class="bjsl-button bjsl-button-inactive" title="' + this._translate('Toggle linting') + '"></button>'
  );

  this._button.addEventListener('click', function() {
    self.toggle();
  });

  this._canvas.getContainer().appendChild(this._button);
};

Linting.prototype.lint = function() {
  var definitions = this._bpmnjs.getDefinitions();

  var linter = new bpmnlint__WEBPACK_IMPORTED_MODULE_0__["Linter"](this._linterConfig);

  return linter.lint(definitions);
};

Linting.$inject = [
  'bpmnjs',
  'canvas',
  'config.linting',
  'elementRegistry',
  'eventBus',
  'overlays',
  'translate'
];

var index = {
  __init__: [ 'linting', 'lintingEditorActions' ],
  linting: [ 'type', Linting ],
  lintingEditorActions: ['type', EditorActions ]
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/bpmn-js-bpmnlint/node_modules/min-dom/dist/index.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bpmn-js-bpmnlint/node_modules/min-dom/dist/index.esm.js ***!
  \******************************************************************************/
/*! exports provided: attr, classes, clear, closest, delegate, domify, event, matches, query, queryAll, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domify", function() { return domify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return componentEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matchesSelector; });
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

var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

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
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
function closest (element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE && currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matchesSelector(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matchesSelector(currentElem, selector) ? currentElem : null;
}

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

function bind$1(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return componentEvent.bind(el, type, function (e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */
function unbind$1(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return componentEvent.unbind(el, type, fn, capture);
}

var delegate = {
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




/***/ }),

/***/ "./node_modules/bpmnlint-plugin-camunda/rules/avoid-lanes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bpmnlint-plugin-camunda/rules/avoid-lanes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * Rule that reports the usage of lanes.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmn:Lane')) {
      reporter.report(node.id, 'lanes should be avoided');
    }
  }

  return {
    check: check
  };
};


/***/ }),

/***/ "./node_modules/bpmnlint-plugin-camunda/rules/forking-conditions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bpmnlint-plugin-camunda/rules/forking-conditions.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks that sequence flows after
 * an exclusive forking gateway have conditions
 * attached.
 */
module.exports = function() {

  function check(node, reporter) {

    const outgoing = node.outgoing || [];

    if (!is(node, 'bpmn:ExclusiveGateway') || outgoing.length < 2) {
      return;
    }

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

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}

/***/ }),

/***/ "./node_modules/bpmnlint-plugin-camunda/rules/no-collapsed-sub-processes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bpmnlint-plugin-camunda/rules/no-collapsed-sub-processes.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");


/**
 * Rule that reports the usage of collapsed sub-processes.
 */
module.exports = function() {

  function check(node, reporter) {
    if (is(node, 'bpmndi:BPMNShape')) {

      const bpmnElement = node.bpmnElement;

      if (is(bpmnElement, 'bpmn:SubProcess') && !node.isExpanded) {
        reporter.report(bpmnElement.id, 'Sub-process should be expanded');
      }
    }
  }

  return {
    check: check
  };
};


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

    const actualConfig = this.cachedConfigs[id] = this.normalizeConfig(config, pkg);

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

    const overrideRules = this.normalizeConfig(config, 'bpmnlint').rules;

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

Linter.prototype.parseRuleName = function(name, localPackage = 'bpmnlint') {

  /**
   * We recognize the following rule name patterns:
   *
   * {RULE_NAME} => PKG = 'bpmnlint'
   * bpmnlint/{RULE_NAME} => PKG = 'bpmnlint'
   * {PACKAGE_SHORTCUT}/{RULE_NAME} => PKG = 'bpmnlint-plugin-{PACKAGE_SHORTCUT}'
   * bpmnlint-plugin-{PACKAGE_SHORTCUT}/{RULE_NAME} => PKG = 'bpmnlint-plugin-{PACKAGE_SHORTCUT}'
   * @scope/{PACKAGE_SHORTCUT}/{RULE_NAME} => PKG = '@scope/bpmnlint-plugin-{PACKAGE_SHORTCUT}'
   * @scope/bpmnlint-plugin-{PACKAGE_SHORTCUT}/{RULE_NAME} => PKG = '@scope/bpmnlint-plugin-{PACKAGE_SHORTCUT}'
   */

  const match = /^(?:(?:(@[^/]+)\/)?([^@]{1}[^/]*)\/)?([^/]+)$/.exec(name);

  if (!match) {
    throw new Error(`unparseable rule name <${name}>`);
  }

  const [
    _,
    ns,
    packageName,
    ruleName
  ] = match;

  if (!packageName) {
    return {
      pkg: localPackage,
      ruleName
    };
  }

  const pkg = `${ns ? ns + '/' : '' }${prefixPackage(packageName)}`;

  return {
    pkg,
    ruleName
  };
};


Linter.prototype.parseConfigName = function(name) {

  /**
   * We recognize the following config name patterns:
   *
   * bpmnlint:{CONFIG_NAME} => PKG = 'bpmnlint'
   * plugin:{PACKAGE_SHORTCUT}/{CONFIG_NAME} => PKG = 'bpmnlint-plugin-{PACKAGE_SHORTCUT}'
   * plugin:bpmnlint-plugin-{PACKAGE_SHORTCUT}/{CONFIG_NAME} => PKG = 'bpmnlint-plugin-{PACKAGE_SHORTCUT}'
   * plugin:@scope/{PACKAGE_SHORTCUT}/{CONFIG_NAME} => PKG = '@scope/bpmnlint-plugin-{PACKAGE_SHORTCUT}'
   * plugin:@scope/bpmnlint-plugin-{PACKAGE_SHORTCUT}/{CONFIG_NAME} => PKG = '@scope/bpmnlint-plugin-{PACKAGE_SHORTCUT}'
   */

  const match = /^(?:(?:plugin:(?:(@[^/]+)\/)?([^@]{1}[^/]*)\/)|bpmnlint:)([^/]+)$/.exec(name);

  if (!match) {
    throw new Error(`unparseable config name <${name}>`);
  }

  const [
    _,
    ns,
    packageName,
    configName
  ] = match;

  if (!packageName) {
    return {
      pkg: 'bpmnlint',
      configName
    };
  }

  const pkg = `${ns ? ns + '/' : '' }${prefixPackage(packageName)}`;

  return {
    pkg,
    configName
  };
};


Linter.prototype.getSimplePackageName = function(name) {

  /**
   * We recognize the following package name patterns:
   *
   * bpmnlint => PKG = 'bpmnlint'
   * {PACKAGE_SHORTCUT} => PKG = PACKAGE_SHORTCUT
   * bpmnlint-plugin-{PACKAGE_SHORTCUT}' => PKG = PACKAGE_SHORTCUT
   * @scope/{PACKAGE_SHORTCUT} => PKG = '@scope/{PACKAGE_SHORTCUT}'
   * @scope/bpmnlint-plugin-{PACKAGE_SHORTCUT}' => PKG = '@scope/PACKAGE_SHORTCUT'
   */

  const match = /^(?:(@[^/]+)\/)?([^/]+)$/.exec(name);

  if (!match) {
    throw new Error(`unparseable package name <${name}>`);
  }

  const [
    _,
    ns,
    packageName
  ] = match;

  return `${ns ? ns + '/' : '' }${unprefixPackage(packageName)}`;
};


/**
 * Validate and return validated config.
 *
 * @param  {Object} config
 * @param  {String} localPackage
 *
 * @return {Object} validated config
 */
Linter.prototype.normalizeConfig = function(config, localPackage) {

  const rules = config.rules || {};

  const validatedRules = Object.keys(rules).reduce((normalizedRules, name) => {

    const value = rules[name];

    const {
      pkg,
      ruleName
    } = this.parseRuleName(name, localPackage);

    const normalizedName = (
      pkg === 'bpmnlint'
        ? ruleName
        : `${this.getSimplePackageName(pkg)}/${ruleName}`
    );

    normalizedRules[normalizedName] = value;

    return normalizedRules;
  }, {});

  return {
    ...config,
    rules: validatedRules
  };
};


// helpers ///////////////////////////

function prefixPackage(pkg) {

  if (pkg === 'bpmnlint') {
    return 'bpmnlint';
  }

  if (pkg.startsWith('bpmnlint-plugin-')) {
    return pkg;
  }

  return `bpmnlint-plugin-${pkg}`;
}


function unprefixPackage(pkg) {

  if (pkg.startsWith('bpmnlint-plugin-')) {
    return pkg.substring('bpmnlint-plugin-'.length);
  }

  return pkg;
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

  const check = rule.check;

  const enter = check && check.enter || check;
  const leave = check && check.leave;

  if (!enter && !leave) {
    throw new Error('no check implemented');
  }

  traverse(moddleRoot, {
    enter: enter ? (node) => enter(node, reporter) : null,
    leave: leave ? (node) => leave(node, reporter) : null
  });

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
 * @param {{ enter?: Function; leave?: Function }} options
 */
module.exports = function traverse(element, options) {

  const enter = options.enter || null;
  const leave = options.leave || null;

  const enterSubTree = enter && enter(element);

  const descriptor = element.$descriptor;

  if (enterSubTree !== false && !descriptor.isGeneric) {

    const containedProperties = descriptor.properties.filter(p => {
      return !p.isAttr && !p.isReference && p.type !== 'String';
    });

    containedProperties.forEach(p => {
      if (p.name in element) {
        const propertyValue = element[p.name];

        if (p.isMany) {
          propertyValue.forEach(child => {
            traverse(child, options);
          });
        } else {
          traverse(propertyValue, options);
        }
      }
    });
  }

  leave && leave(element);
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

/***/ "./node_modules/bpmnlint/rules/no-bpmndi.js":
/*!**************************************************!*\
  !*** ./node_modules/bpmnlint/rules/no-bpmndi.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

const {
  flatten
} = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");

/**
 * A rule that checks that there is no BPMNDI information missing for elements,
 * which require BPMNDI.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Definitions')) {
      return false;
    }

    // (1) Construct array of all BPMN elements
    const bpmnElements = getAllBpmnElements(node.rootElements);

    // (2) Filter BPMN elements without visual representation
    const visualBpmnElements = bpmnElements.filter(hasVisualRepresentation);

    // (3) Construct array of BPMNDI references
    const diBpmnReferences = getAllDiBpmnReferences(node);

    // (4) Report elements without BPMNDI
    visualBpmnElements.forEach((element) => {
      if (diBpmnReferences.indexOf(element.id) === -1) {
        reporter.report(element.id, 'Element is missing bpmndi');
      }
    });
  }

  return {
    check
  };

};


// helpers /////////////////////////////

/**
 * Get all BPMN elements within a bpmn:Definitions node
 *
 * @param {array<ModdleElement>} rootElements - An array of Moddle rootElements
 * @return {array<Object>} A flat array with all BPMN elements, each represented with { id: elementId, $type: elementType }
 *
 */
function getAllBpmnElements(rootElements) {
  return flatten(rootElements.map((rootElement) => {

    // Include
    // * flowElements (e.g., tasks, sequenceFlows),
    // * nested flowElements,
    // * participants,
    // * artifacts (groups),
    // * laneSets
    // * nested laneSets
    // * childLaneSets
    // * nested childLaneSets
    const elements = flatten([].concat(
      rootElement.flowElements || [],
      (rootElement.flowElements && getAllBpmnElements(rootElement.flowElements.filter(hasFlowElements))) || [],
      rootElement.participants || [],
      rootElement.artifacts || [],
      (rootElement.laneSets && rootElement.laneSets[0].lanes) || [],
      (rootElement.laneSets && getAllBpmnElements(rootElement.laneSets[0].lanes.filter(hasChildLaneSet))) || [],
      (rootElement.childLaneSet && rootElement.childLaneSet.lanes) || [],
      (rootElement.childLaneSet && getAllBpmnElements(rootElement.childLaneSet.lanes.filter(hasChildLaneSet))) || []
    ));

    if (elements.length > 0) {
      return elements.map((element) => {

        return {
          id: element.id,
          $type: element.$type
        };
      });
    } else {

      // We are not interested in the rest here (DI)
      return [];
    }
  }));
}

/**
 * Get all BPMN elements within a bpmn:Definitions node
 *
 * @param {ModdleElement} definitionsNode - A moddleElement representing the
 * bpmn:Definitions element
 * @return {array<String>} A flat array with all BPMNDI element ids part of
 * this bpmn:Definitions node
 *
 */
function getAllDiBpmnReferences(definitionsNode) {
  return flatten(
    definitionsNode.diagrams.map((diagram) => {

      const diElements = diagram.plane.planeElement || [];

      return diElements.map((element) => {

        return element.bpmnElement.id;
      });
    })
  );
}

function hasVisualRepresentation(element) {
  const noVisRepresentation = ['bpmn:DataObject'];

  return noVisRepresentation.includes(element.$type) ? false : true;
}

function hasFlowElements(element) {
  return element.flowElements ? true : false;
}

function hasChildLaneSet(element) {
  return element.childLaneSet ? true : false;
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
  isAny,
  is
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
    ]) || node.triggeredByEvent) {
      return;
    }

    // compensation activity and boundary events are
    // linked visually via associations. If these associations
    // exist we are fine, too
    if (isCompensationLinked(node)) {
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


// helpers /////////////////

function isCompensationBoundary(node) {

  var eventDefinitions = node.eventDefinitions;

  if (!is(node, 'bpmn:BoundaryEvent')) {
    return false;
  }

  if (!eventDefinitions || eventDefinitions.length !== 1) {
    return false;
  }

  return is(eventDefinitions[0], 'bpmn:CompensateEventDefinition');
}

function isCompensationActivity(node) {
  return node.isForCompensation;
}

function isCompensationLinked(node) {
  var source = isCompensationBoundary(node);
  var target = isCompensationActivity(node);

  // TODO(nikku): check, whether compensation association exists
  return source || target;
}

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
 * A rule that verifies that there are no disconnected
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

/***/ "./node_modules/bpmnlint/rules/superfluous-gateway.js":
/*!************************************************************!*\
  !*** ./node_modules/bpmnlint/rules/superfluous-gateway.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  is
} = __webpack_require__(/*! bpmnlint-utils */ "./node_modules/bpmnlint-utils/dist/index.esm.js");

/**
 * A rule that checks, whether a gateway has only one source and target.
 *
 * Those gateways are superfluous since they don't do anything.
 */
module.exports = function() {

  function check(node, reporter) {

    if (!is(node, 'bpmn:Gateway')) {
      return;
    }

    const incoming = node.incoming || [];
    const outgoing = node.outgoing || [];

    if (incoming.length === 1 && outgoing.length === 1) {
      reporter.report(node.id, 'Gateway is superfluous. It only has one source and target.');
    }
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

/***/ "./node_modules/css.escape/css.escape.js":
/*!***********************************************!*\
  !*** ./node_modules/css.escape/css.escape.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (true) {
		// For Node.js.
		module.exports = factory(root);
	} else {}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/diagram-js/lib/util/EscapeUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/diagram-js/lib/util/EscapeUtil.js ***!
  \********************************************************/
/*! exports provided: escapeCSS, escapeHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHTML", function() { return escapeHTML; });
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css.escape */ "./node_modules/css.escape/css.escape.js");
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_escape__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "escapeCSS", function() { return css_escape__WEBPACK_IMPORTED_MODULE_0___default.a; });


var HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};

function escapeHTML(str) {
  str = '' + str;

  return str && str.replace(/[&<>"']/g, function(match) {
    return HTML_ESCAPE_MAP[match];
  });
}


/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: assign, bind, debounce, ensureArray, every, filter, find, findIndex, flatten, forEach, get, groupBy, has, isArray, isDefined, isFunction, isNil, isNumber, isObject, isString, isUndefined, keys, map, matchPattern, merge, omit, pick, reduce, set, size, some, sortBy, throttle, unionBy, uniqueBy, values, without */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionBy", function() { return unionBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
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
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @param {Object} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 */

function set(target, path, value) {
  var currentTarget = target;
  forEach(path, function (key, idx) {
    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    var nextKey = path[idx + 1];
    var nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });
  return target;
}
/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 */

function get(target, path, defaultValue) {
  var currentTarget = target;
  forEach(path, function (key) {
    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;
      return false;
    }

    currentTarget = currentTarget[key];
  });
  return isUndefined(currentTarget) ? defaultValue : currentTarget;
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
      if (key === '__proto__') {
        return;
      }

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=client.js.map