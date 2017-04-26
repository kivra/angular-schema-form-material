/*!
 * angular-schema-form-material
 * @version 1.0.0-alpha.2
 * @date Wed, 26 Apr 2017 12:47:55 GMT
 * @link https://github.com/json-schema-form/angular-schema-form-material
 * @license MIT
 * Copyright (c) 2014-2017 JSON Schema Form
 */
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var path = '/material/default.html';
var html = "<div ng-class=\"{\n               'mdc-textfield--invalid': hasError(),\n               'has-success': hasSuccess(),\n               'has-feedback': form.feedback !== false}\"\n     style=\"box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex;\" \n     class=\"layout-column\">\n  <div class=\"mdc-textfield schema-form-{{::form.type}} {{::form.htmlClass}}\"\n       ng-class=\"{\n                 'mdc-textfield--invalid': hasError()\n                 }\">\n    <label class=\"mdc-textfield__label\"\n           for=\"my-textfield\">\n      {{ ::form.title }}\n    </label>\n    <input sf-field-model\n           id=\"{{::form.key|sfCamelKey}}\"\n           type=\"text\"\n           step=\"any\"\n           schema-validate=\"form\"\n           autocomplete=\"{{form.autocomplete}}\"\n           sf-changed=\"form\"\n           sf-type-parser=\"form.schema\"\n           name=\"{{::form.key|sfCamelKey}}\"\n           class=\"mdc-textfield__input\"\n           style=\"width: 100%;\">\n  </div>\n  <p class=\"mdc-textfield-helptext\"\n     sf-message=\"form.description\"\n     ng-class=\"{\n               'mdc-textfield-helptext--validation-msg': hasError(),\n               'mdc-textfield-helptext--persistent': hasError()\n               }\">\n  </p>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class MDCFoundation {
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  constructor(adapter = {}) {
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCFoundation;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12).Buffer))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var path = '/material/checkbox.html';
var html = "<div class=\"checkbox schema-form-checkbox {{::form.htmlClass}}\"\n     ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\"\n     sf-messages>\n  <md-checkbox sf-field-model\n               sf-changed=\"form\"\n               ng-disabled=\"form.readonly\"\n               schema-validate=\"form\"\n               sf-material-class=\"md-checked\"\n               class=\"{{::form.fieldHtmlClass}}\"\n               name=\"{{::form.key|sfCamelKey}}\"\n               aria-label=\"{{::form.title}}\">\n    <span>{{::form.title}}</span>\n  </md-checkbox>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var path = '/material/submit.html';
var html = "<section class=\"schema-form-submit {{::form.htmlClass}}\" sf-messages>\n  <md-button class=\"md-raised {{ form.style || 'md-primary' }} {{::form.fieldHtmlClass}} md-block\" \n             type=\"{{::form.type}}\"\n             ng-disabled=\"form.readonly\"\n             aria-label=\"{{::form.title}}\">\n    <md-tooltip ng-if=\"::form.tip\">{{::form.tip}}</md-tooltip>\n    {{::form.title}}\n  </md-button>\n</section>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
__webpack_require__(39);
__webpack_require__(38);
__webpack_require__(37);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(1);
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class MDCComponent {
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  constructor(root, foundation = undefined, ...args) {
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  // Wrapper method to add an event listener to the component's root element. This is most useful when
  // listening for custom events.
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  // Wrapper method to remove an event listener to the component's root element. This is most useful when
  // unlistening for custom events.
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  // Fires a cross-browser-compatible custom event from the component root of the given type,
  // with the given data.
  emit(evtType, evtData) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {detail: evtData});
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, false, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCComponent;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  INPUT_SELECTOR: '.mdc-textfield__input',
  LABEL_SELECTOR: '.mdc-textfield__label',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;


const cssClasses = {
  ROOT: 'mdc-textfield',
  UPGRADED: 'mdc-textfield--upgraded',
  DISABLED: 'mdc-textfield--disabled',
  FOCUSED: 'mdc-textfield--focused',
  INVALID: 'mdc-textfield--invalid',
  HELPTEXT_PERSISTENT: 'mdc-textfield-helptext--persistent',
  HELPTEXT_VALIDATION_MSG: 'mdc-textfield-helptext--validation-msg',
  LABEL_FLOAT_ABOVE: 'mdc-textfield__label--float-above',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(8);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCTextfieldFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      addClassToLabel: (/* className: string */) => {},
      removeClassFromLabel: (/* className: string */) => {},
      addClassToHelptext: (/* className: string */) => {},
      removeClassFromHelptext: (/* className: string */) => {},
      helptextHasClass: (/* className: string */) => /* boolean */ false,
      registerInputFocusHandler: (/* handler: EventListener */) => {},
      deregisterInputFocusHandler: (/* handler: EventListener */) => {},
      registerInputBlurHandler: (/* handler: EventListener */) => {},
      deregisterInputBlurHandler: (/* handler: EventListener */) => {},
      registerInputInputHandler: (/* handler: EventListener */) => {},
      deregisterInputInputHandler: (/* handler: EventListener */) => {},
      registerInputKeydownHandler: (/* handler: EventListener */) => {},
      deregisterInputKeydownHandler: (/* handler: EventListener */) => {},
      setHelptextAttr: (/* name: string, value: string */) => {},
      removeHelptextAttr: (/* name: string */) => {},
      getNativeInput: () => /* HTMLInputElement */ ({}),
    };
  }

  constructor(adapter = {}) {
    super(Object.assign(MDCTextfieldFoundation.defaultAdapter, adapter));

    this.receivedUserInput_ = false;
    this.inputFocusHandler_ = () => this.activateFocus_();
    this.inputBlurHandler_ = () => this.deactivateFocus_();
    this.inputInputHandler_ = () => this.autoCompleteFocus_();
    this.inputKeydownHandler_ = () => this.receivedUserInput_ = true;
  }

  init() {
    this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
    this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
    this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
    this.adapter_.registerInputInputHandler(this.inputInputHandler_);
    this.adapter_.registerInputKeydownHandler(this.inputKeydownHandler_);

    // Ensure label does not collide with any pre-filled value.
    if (this.getNativeInput_().value) {
      this.adapter_.addClassToLabel(MDCTextfieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
    }
  }

  destroy() {
    this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
    this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
    this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
    this.adapter_.deregisterInputInputHandler(this.inputInputHandler_);
    this.adapter_.deregisterInputKeydownHandler(this.inputKeydownHandler_);
  }

  activateFocus_() {
    const {FOCUSED, LABEL_FLOAT_ABOVE} = MDCTextfieldFoundation.cssClasses;
    this.adapter_.addClass(FOCUSED);
    this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
    this.showHelptext_();
  }

  autoCompleteFocus_() {
    if (!this.receivedUserInput_) {
      this.activateFocus_();
    }
  }

  showHelptext_() {
    const {ARIA_HIDDEN} = MDCTextfieldFoundation.strings;
    this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
  }

  deactivateFocus_() {
    const {FOCUSED, INVALID, LABEL_FLOAT_ABOVE} = MDCTextfieldFoundation.cssClasses;
    const input = this.getNativeInput_();
    const isValid = input.checkValidity();

    this.adapter_.removeClass(FOCUSED);
    if (!input.value) {
      this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
      this.receivedUserInput_ = false;
    }
    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }
    this.updateHelptextOnDeactivation_(isValid);
  }

  updateHelptextOnDeactivation_(isValid) {
    const {HELPTEXT_PERSISTENT, HELPTEXT_VALIDATION_MSG} = MDCTextfieldFoundation.cssClasses;
    const {ROLE} = MDCTextfieldFoundation.strings;
    const helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
    const helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
    const validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setHelptextAttr(ROLE, 'alert');
    } else {
      this.adapter_.removeHelptextAttr(ROLE);
    }

    if (helptextIsPersistent || validationMsgNeedsDisplay) {
      return;
    }
    this.hideHelptext_();
  }

  hideHelptext_() {
    const {ARIA_HIDDEN} = MDCTextfieldFoundation.strings;
    this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
  }

  isDisabled() {
    return this.getNativeInput_().disabled;
  }

  setDisabled(disabled) {
    const {DISABLED} = MDCTextfieldFoundation.cssClasses;
    this.getNativeInput_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }

  getNativeInput_() {
    return this.adapter_.getNativeInput() || {
      checkValidity: () => true,
      value: '',
      disabled: false,
    };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTextfieldFoundation;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(9);
/* unused harmony reexport MDCTextfieldFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







class MDCTextfield extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCTextfield(root);
  }

  constructor(...args) {
    super(...args);
    const input = this.input_;
    this.helptextElement = input.hasAttribute('aria-controls') ?
      document.getElementById(input.getAttribute('aria-controls')) : null;
  }

  initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  get input_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.INPUT_SELECTOR);
  }

  get label_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.LABEL_SELECTOR);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](Object.assign({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addClassToLabel: (className) => {
        const label = this.label_;
        if (label) {
          label.classList.add(className);
        }
      },
      removeClassFromLabel: (className) => {
        const label = this.label_;
        if (label) {
          label.classList.remove(className);
        }
      },
    }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
  }

  getInputAdapterMethods_() {
    return {
      registerInputFocusHandler: (handler) => this.input_.addEventListener('focus', handler),
      registerInputBlurHandler: (handler) => this.input_.addEventListener('blur', handler),
      registerInputInputHandler: (handler) => this.input_.addEventListener('input', handler),
      registerInputKeydownHandler: (handler) => this.input_.addEventListener('keydown', handler),
      deregisterInputFocusHandler: (handler) => this.input_.removeEventListener('focus', handler),
      deregisterInputBlurHandler: (handler) => this.input_.removeEventListener('blur', handler),
      deregisterInputInputHandler: (handler) => this.input_.removeEventListener('input', handler),
      deregisterInputKeydownHandler: (handler) => this.input_.removeEventListener('keydown', handler),
      getNativeInput: () => this.input_,
    };
  }

  getHelptextAdapterMethods_() {
    return {
      addClassToHelptext: (className) => {
        if (this.helptextElement) {
          this.helptextElement.classList.add(className);
        }
      },
      removeClassFromHelptext: (className) => {
        if (this.helptextElement) {
          this.helptextElement.classList.remove(className);
        }
      },
      helptextHasClass: (className) => {
        if (!this.helptextElement) {
          return false;
        }
        return this.helptextElement.classList.contains(className);
      },
      setHelptextAttr: (name, value) => {
        if (this.helptextElement) {
          this.helptextElement.setAttribute(name, value);
        }
      },
      removeHelptextAttr: (name) => {
        if (this.helptextElement) {
          this.helptextElement.removeAttribute(name);
        }
      },
    };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTextfield;



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(11)
var ieee754 = __webpack_require__(15)
var isArray = __webpack_require__(16)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/*!\n Material Components for the web\n Copyright (c) 2017 Google Inc.\n License: Apache-2.0\n*/\n.mdc-textfield{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;letter-spacing:.04em;display:inline-block;margin-bottom:8px;will-change:opacity,transform,color}.mdc-textfield__input{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));padding:0 0 8px;border:none;background:none;font-size:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.mdc-textfield__input::-webkit-input-placeholder{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));-webkit-transition:color .18s cubic-bezier(.4,0,.2,1);transition:color .18s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-textfield__input::-moz-placeholder{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));-webkit-transition:color .18s cubic-bezier(.4,0,.2,1);transition:color .18s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-textfield__input:-ms-input-placeholder{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));-webkit-transition:color .18s cubic-bezier(.4,0,.2,1);transition:color .18s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-textfield__input::placeholder{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));-webkit-transition:color .18s cubic-bezier(.4,0,.2,1);transition:color .18s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-textfield__input:focus{outline:none}.mdc-textfield__input:focus::-webkit-input-placeholder{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))}.mdc-textfield__input:focus::-moz-placeholder{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))}.mdc-textfield__input:focus:-ms-input-placeholder{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))}.mdc-textfield__input:focus::placeholder{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))}.mdc-textfield__input:invalid{box-shadow:none}.mdc-textfield__input--theme-dark,.mdc-theme--dark .mdc-textfield__input{color:#fff}.mdc-textfield__input--theme-dark::-webkit-input-placeholder,.mdc-theme--dark .mdc-textfield__input::-webkit-input-placeholder{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield__input--theme-dark::-moz-placeholder,.mdc-theme--dark .mdc-textfield__input::-moz-placeholder{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield__input--theme-dark:-ms-input-placeholder,.mdc-theme--dark .mdc-textfield__input:-ms-input-placeholder{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield__input--theme-dark::placeholder,.mdc-theme--dark .mdc-textfield__input::placeholder{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield__input--theme-dark:focus::-webkit-input-placeholder,.mdc-theme--dark .mdc-textfield__input:focus::-webkit-input-placeholder{color:hsla(0,0%,100%,.7);color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-textfield__input--theme-dark:focus::-moz-placeholder,.mdc-theme--dark .mdc-textfield__input:focus::-moz-placeholder{color:hsla(0,0%,100%,.7);color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-textfield__input--theme-dark:focus:-ms-input-placeholder,.mdc-theme--dark .mdc-textfield__input:focus:-ms-input-placeholder{color:hsla(0,0%,100%,.7);color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-textfield__input--theme-dark:focus::placeholder,.mdc-theme--dark .mdc-textfield__input:focus::placeholder{color:hsla(0,0%,100%,.7);color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))}.mdc-textfield__label{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));position:absolute;bottom:8px;left:0;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:color .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);transition:color .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);transition:transform .18s cubic-bezier(.4,0,.2,1),color .18s cubic-bezier(.4,0,.2,1);transition:transform .18s cubic-bezier(.4,0,.2,1),color .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);cursor:text}.mdc-textfield[dir=rtl] .mdc-textfield__label,[dir=rtl] .mdc-textfield .mdc-textfield__label{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top}.mdc-textfield--theme-dark .mdc-textfield__label,.mdc-theme--dark .mdc-textfield__label{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield__label--float-above{-webkit-transform:translateY(-100%) scale(.75);transform:translateY(-100%) scale(.75);cursor:auto}.mdc-textfield__input:-webkit-autofill+.mdc-textfield__label{-webkit-transform:translateY(-100%) scale(.75);transform:translateY(-100%) scale(.75);cursor:auto}.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth){display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;box-sizing:border-box;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;margin-top:16px}.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline){height:48px}.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after{position:absolute;bottom:0;left:0;width:100%;height:1px;-webkit-transform:translateY(50%) scaleY(1);transform:translateY(50%) scaleY(1);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transition:background-color .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);transition:background-color .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);transition:background-color .18s cubic-bezier(.4,0,.2,1),transform .18s cubic-bezier(.4,0,.2,1);transition:background-color .18s cubic-bezier(.4,0,.2,1),transform .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);background-color:rgba(0,0,0,.12);content:\"\"}.mdc-textfield--theme-dark .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after,.mdc-theme--dark .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after{background-color:hsla(0,0%,100%,.12)}.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth) .mdc-textfield__label{pointer-events:none}.mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after,.mdc-textfield--theme-dark.mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after,.mdc-theme--dark .mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline):after{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);-webkit-transform:translateY(100%) scaleY(2);transform:translateY(100%) scaleY(2);-webkit-transition:-webkit-transform .18s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .18s cubic-bezier(.4,0,.2,1);transition:transform .18s cubic-bezier(.4,0,.2,1);transition:transform .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1)}.mdc-textfield--focused .mdc-textfield__label,.mdc-textfield--theme-dark .mdc-textfield--focused .mdc-textfield__label,.mdc-theme--dark .mdc-textfield--focused .mdc-textfield__label{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-textfield--dense{margin-top:12px;margin-bottom:4px;font-size:.813rem}.mdc-textfield--dense .mdc-textfield__label--float-above{-webkit-transform:translateY(calc(-100% - 2px)) scale(.923);transform:translateY(calc(-100% - 2px)) scale(.923)}.mdc-textfield--invalid:not(.mdc-textfield--focused):after{background-color:#d50000}.mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label{color:#d50000}.mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused):after,.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused):after{background-color:#ff6e6e}.mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label,.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label{color:#ff6e6e}.mdc-textfield--disabled{border-bottom:1px dotted rgba(35,31,32,.26)}.mdc-textfield--disabled:after{display:none}.mdc-textfield--disabled .mdc-textfield__input{padding-bottom:7px}.mdc-textfield--theme-dark.mdc-textfield--disabled,.mdc-theme--dark .mdc-textfield--disabled{border-bottom:1px dotted hsla(0,0%,100%,.3)}.mdc-textfield--disabled+.mdc-textfield-helptext,.mdc-textfield--disabled .mdc-textfield__input,.mdc-textfield--disabled .mdc-textfield__label{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-textfield--theme-dark.mdc-textfield--disabled+.mdc-textfield-helptext,.mdc-textfield--theme-dark .mdc-textfield--disabled .mdc-textfield__input,.mdc-textfield--theme-dark .mdc-textfield--disabled .mdc-textfield__label,.mdc-theme--dark .mdc-textfield--disabled+.mdc-textfield-helptext,.mdc-theme--dark .mdc-textfield--disabled .mdc-textfield__input,.mdc-theme--dark .mdc-textfield--disabled .mdc-textfield__label{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield--disabled .mdc-textfield__label{bottom:7px;cursor:default}.mdc-textfield__input:required+.mdc-textfield__label:after{margin-left:1px;content:\"*\"}.mdc-textfield--focused .mdc-textfield__input:required+.mdc-textfield__label:after{color:#d50000}.mdc-textfield--focused .mdc-textfield--theme-dark .mdc-textfield__input:required+.mdc-textfield__label:after,.mdc-textfield--focused .mdc-theme--dark .mdc-textfield__input:required+.mdc-textfield__label:after{color:#ff6e6e}.mdc-textfield--multiline{display:-webkit-box;display:-ms-flexbox;display:flex;height:auto;-webkit-transition:none;transition:none}.mdc-textfield--multiline:after{content:normal}.mdc-textfield--multiline .mdc-textfield__input{padding:4px;-webkit-transition:border-color .18s cubic-bezier(.4,0,.2,1);transition:border-color .18s cubic-bezier(.4,0,.2,1);border:1px solid rgba(0,0,0,.12);border-radius:2px}.mdc-textfield--theme-dark .mdc-textfield--multiline .mdc-textfield__input,.mdc-theme--dark .mdc-textfield--multiline .mdc-textfield__input{border-color:hsla(0,0%,100%,.12)}.mdc-textfield--multiline .mdc-textfield__input:focus{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5)}.mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus){border-color:#d50000}.mdc-textfield--theme-dark .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus),.mdc-theme--dark .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus){border-color:#ff6e6e}.mdc-textfield--multiline .mdc-textfield__label{top:6px;bottom:auto;left:4px}.mdc-textfield--multiline[dir=rtl] .mdc-textfield--multiline .mdc-textfield__label,[dir=rtl] .mdc-textfield--multiline .mdc-textfield--multiline .mdc-textfield__label{right:4px;left:auto}.mdc-textfield--multiline .mdc-textfield__label--float-above{-webkit-transform:translateY(calc(-100% - 6px)) scale(.923);transform:translateY(calc(-100% - 6px)) scale(.923)}.mdc-textfield--multiline.mdc-textfield--disabled{border-bottom:none}.mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input{border:1px dotted rgba(35,31,32,.26)}.mdc-textfield--theme-dark .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input,.mdc-theme--dark .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input{border-color:hsla(0,0%,100%,.3)}.mdc-textfield--fullwidth{display:block;width:100%;box-sizing:border-box;margin:0;border:none;border-bottom:1px solid rgba(0,0,0,.12);outline:none}.mdc-textfield--fullwidth:not(.mdc-textfield--multiline){height:56px}.mdc-textfield--fullwidth.mdc-textfield--multiline{padding:20px 0 0}.mdc-textfield--fullwidth.mdc-textfield--dense:not(.mdc-textfield--multiline){height:48px}.mdc-textfield--fullwidth.mdc-textfield--dense.mdc-textfield--multiline{padding:16px 0 0}.mdc-textfield--fullwidth.mdc-textfield--disabled,.mdc-textfield--fullwidth.mdc-textfield--disabled.mdc-textfield--multiline{border-bottom:1px dotted rgba(0,0,0,.12)}.mdc-textfield--fullwidth--theme-dark,.mdc-theme--dark .mdc-textfield--fullwidth{border-bottom:1px solid hsla(0,0%,100%,.12)}.mdc-textfield--fullwidth--theme-dark.mdc-textfield--disabled,.mdc-textfield--fullwidth--theme-dark.mdc-textfield--disabled.mdc-textfield--multiline,.mdc-theme--dark .mdc-textfield--fullwidth.mdc-textfield--disabled,.mdc-theme--dark .mdc-textfield--fullwidth.mdc-textfield--disabled.mdc-textfield--multiline{border-bottom:1px dotted hsla(0,0%,100%,.12)}.mdc-textfield--fullwidth .mdc-textfield__input{width:100%;height:100%;padding:0;resize:none;border:none!important}.mdc-textfield:not(.mdc-textfield--upgraded):not(.mdc-textfield--multiline) .mdc-textfield__input{-webkit-transition:border-bottom-color .18s cubic-bezier(.4,0,.2,1);transition:border-bottom-color .18s cubic-bezier(.4,0,.2,1);border-bottom:1px solid rgba(0,0,0,.12)}.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:focus{border-color:#3f51b5;border-color:var(--mdc-theme-primary,#3f51b5)}.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));border-style:dotted;border-color:rgba(35,31,32,.26)}.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus){border-color:#d50000}.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:not(:focus),.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:not(:focus){border-color:hsla(0,0%,100%,.12)}.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled,.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5));border-color:hsla(0,0%,100%,.3)}.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus),.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus){border-color:#ff6e6e}.mdc-textfield-helptext{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38));margin:0;-webkit-transition:opacity .18s cubic-bezier(.4,0,.2,1);transition:opacity .18s cubic-bezier(.4,0,.2,1);font-size:.75rem;opacity:0;will-change:opacity}.mdc-textfield-helptext--theme-dark,.mdc-theme--dark .mdc-textfield-helptext{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))}.mdc-textfield+.mdc-textfield-helptext{margin-bottom:8px}.mdc-textfield--dense+.mdc-textfield-helptext{margin-bottom:4px}.mdc-textfield--focused+.mdc-textfield-helptext:not(.mdc-textfield-helptext--validation-msg){opacity:1}.mdc-textfield-helptext--persistent{-webkit-transition:none;transition:none;opacity:1;will-change:auto}.mdc-textfield--invalid+.mdc-textfield-helptext--validation-msg{color:#d50000;opacity:1}.mdc-textfield--theme-dark.mdc-textfield--invalid+.mdc-textfield-helptext--validation-msg,.mdc-theme--dark .mdc-textfield--invalid+.mdc-textfield-helptext--validation-msg{color:#ff6e6e}.mdc-form-field>.mdc-textfield+label{-ms-flex-item-align:start;align-self:flex-start}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports
exports.i(__webpack_require__(13), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var path = '/material/actions.html';
var html = "<section layout=\"row\" class=\"btn-group schema-form-actions {{form.htmlClass}}\"></section>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var path = '/material/array.html';
var html = "<div  class=\"schema-form-array {{::form.htmlClass}}\"\n      sf-field-model=\"sf-new-array\"\n      sf-new-array>\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{ form.title }}</label>\n  <md-list class=\"list-group\" sf-field-model ui-sortable=\"form.sortOptions\">\n    <md-list-item layout=\"row\" class=\"list-group-item\"\n             sf-field-model=\"ng-repeat\"\n             ng-repeat=\"item in modelArray track by $index\"\n             schema-form-array-items\n             class=\"{{::form.fieldHtmlClass}}\">\n      <md-button flex=\"none\" flex-order=\"2\"\n                 type=\"button\"\n                 ng-hide=\"form.readonly || form.remove === null\"\n                 ng-click=\"deleteFromArray($index)\"\n                 ng-disabled=\"form.schema.minItems >= modelArray.length\"\n                 class=\"md-icon-button\" aria-label=\"More\"\n                 style=\"position: relative; z-index: 20;\">\n        <md-icon>close</md-icon>\n      </md-button>\n    </md-list-item>\n  </md-list>\n  <div class=\"clearfix\" style=\"padding: 15px;\" ng-model=\"modelArray\" schema-validate=\"form\">\n    <div class=\"help-block\"\n         ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n         ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n\n    <md-button ng-hide=\"form.readonly || form.add === null\"\n            ng-click=\"appendToArray()\"\n            ng-disabled=\"form.schema.maxItems <= modelArray.length\"\n            type=\"button\"\n            class=\"btn md-raised md-primary {{ form.style.add || 'btn-default' }} pull-right\">\n      <i class=\"glyphicon glyphicon-plus\"></i>\n      {{ form.add || 'Add'}}\n    </md-button>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var path = '/material/autocomplete.html';
var html = "<div class=\"form-group {{::form.htmlClass}} schema-form-select\"\n     ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess(), 'has-feedback': form.feedback !== false}\"\n     sf-messages sf-layout>\n  <md-autocomplete flex\n    ng-disabled=\"form.readonly\"\n    ng-model=\"$$value$$\"\n    sf-autocomplete\n    sf-field-model=\"replaceAll\"\n    schema-validate=\"form\"\n    md-selected-item=\"$$value$$\"\n    md-search-text=\"searchText\"\n    md-selected-item-change=\"'todo';\"\n    md-items=\"item in evalExpr('this[\\''+form.optionFilter+'\\'](\\''+searchText+'\\')')\"\n    md-item-text=\"item.name\"\n    md-floating-label=\"{{::form.title}}\"\n    md-menu-class=\"autocomplete-custom-template\">\n    <md-item-template>\n      <span md-highlight-text=\"searchText\">{{item.name}}</span>\n    </md-item-template>\n    <md-not-found>\n      No matches found\n    </md-not-found>\n  </md-autocomplete>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var path = '/material/checkboxes.html';
var html = "<div sf-array=\"form\" sf-field-model\n     class=\"form-group schema-form-checkboxes {{::form.htmlClass}}\"\n     ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\"\n     sf-messages>\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{::form.title}}</label>\n  <div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\" >\n    <md-checkbox ng-model=\"titleMapValues[$index]\"\n                 sf-changed=\"form\"\n                 ng-disabled=\"::form.readonly\"\n                 name=\"{{::form.key|sfCamelKey}}\"\n                 ng-true-value=\"true\"\n                 ng-false-value=\"false\"\n                 aria-label=\"{{::form.title}}\">\n      {{::form.titleMap[$index].name}}\n    </md-checkbox>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var path = '/material/date.html';
var html = "<div class=\"schema-form-date {{::form.htmlClass}}\">\n  <label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label>\n  <md-datepicker sf-field-model\n                 sf-changed=\"form\"\n                 schema-validate=\"form\"\n                 sf-type-parser=\"form.schema\"\n                 id=\"{{::form.key|sfCamelKey}}\"\n                 ng-show=\"::form.key\"\n                 ng-class=\"::form.fieldHtmlClass\"\n                 ng-disabled=\"::form.readonly\"\n                 md-placeholder=\"Enter date\" sf-messages>\n  </md-datepicker>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var path = '/material/fieldset.html';
var html = "<fieldset ng-disabled=\"form.readonly\" class=\"standard {{form.htmlClass}}\" flex>\n  <legend ng-show=\"form.title\">{{ form.title }}</legend>\n</fieldset>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var path = '/material/help.html';
var html = "<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpvalue\"></div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var path = '/material/radio-buttons.html';
var html = "<div class=\"form-group schema-form-radiobuttons {{::form.htmlClass}}\"\n     ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\" sf-layout sf-messages>\n  <div>\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  </div>\n  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\">\n    <md-input-container ng-repeat=\"item in form.titleMap\">\n      <md-button type=\"button\"\n                 class=\"group md-raised\"\n                 sf-field-model=\"replaceAll\"\n                 ng-model=\"$$value$$\"\n                 sf-changed=\"form\"\n                 class=\"radio {{::form.fieldHtmlClass}}\"\n                 ng-class=\"{'md-primary': ($$value$$ == item.value)}\"\n                 ng-disabled=\"form.readonly\"\n                 ng-model-options=\"form.ngModelOptions\"\n                 schema-validate=\"form\"\n                 ng-value=\"item.value\"\n                 ng-click=\"$$value$$ = item.value\"\n                 name=\"{{form.key.join('.')}}\">\n        <span ng-bind-html=\"item.name\"></span>\n      </md-button>\n    </md-input-container>\n  </section>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var path = '/material/radios-inline.html';
var html = "<div class=\"form-group schema-form-radios-inline {{::form.htmlClass}}\"\n     ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\" sf-layout sf-messages>\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <md-radio-group layout=\"row\"\n                  sf-field-model=\"replaceAll\"\n                  ng-model=\"$$value$$\"\n                  class=\"{{::form.fieldHtmlClass}}\"\n                  ng-class=\"{ active: item.value === $$value$$ }\"\n                  sf-changed=\"form\"\n                  schema-validate=\"form\"\n                  ng-disabled=\"form.readonly\"\n                  name=\"{{form.key.join('.')}}\">\n    <md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=\"item.value\">\n      <span ng-bind-html=\"item.name\"></span>\n    </md-radio-button>\n  </md-radio-group>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var path = '/material/radios.html';
var html = "<div class=\"form-group schema-form-radios {{::form.htmlClass}}\"\n     ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\" aria-label=\"{{form.title}}\" layout=\"row\">{{form.title}} {{form.titleMap | json}}</label>\n  <div>\n    <md-radio-group sf-field-model\n                    sf-changed=\"form\"\n                    ng-disabled=\"form.readonly\"\n                    name=\"{{form.key.join('.')}}\"\n                    sf-layout sf-messages>\n      <md-radio-button ng-repeat=\"item in form.titleMap\"\n                       ng-value=\"item.value\"\n                       class=\"{{::form.fieldHtmlClass}}\"\n                       sf-field-model=\"ng-class\"\n                       ng-class=\"{ active: item.value === $$value$$ }\">\n        <span ng-bind-html=\"item.name\"></span>\n      </md-radio-button>\n    </md-radio-group>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var path = '/material/section.html';
var html = "<md-content class=\"schema-form-section {{::form.htmlClass}}\" sf-layout>\n</md-content>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var path = '/material/select.html';
var html = "<md-input-container\n    class=\"form-group {{::form.htmlClass}} schema-form-select\"\n    ng-class=\"{'has-error': hasError(), 'has-success': hasSuccess(), 'has-feedback': form.feedback !== false}\"\n    sf-messages sf-layout>\n  <label ng-show=\"::showTitle()\">{{::form.title}}</label>\n  <md-select sf-field-model schema-validate=\"form\">\n    <md-optgroup ng-repeat-start=\"(key, opt) in form.getOptions(form, evalExpr) | orderBy:'group' as optGroups\"\n                 ng-if=\"opt.group && opt.group != optGroups[key-1].group\"\n                 label=\"{{::opt.group}}\"\n                 aria-label=\"{{::opt.group}}\">\n      <md-option ng-repeat=\"(key, filtered) in form.getOptions(form, evalExpr) | filter: {group: opt.group} | orderBy:'name' as opts\"\n                 ng-value=\"::filtered.value\"\n                 aria-label=\"{{::filtered.name}}\">{{::filtered.name}}</md-option>\n    </md-optgroup>\n    <md-option   ng-if=\"!opt.group\"\n                 ng-value=\"::opt.value\"\n                 ng-repeat-end>{{::opt.name}}</md-option>\n  </md-select>\n</md-input-container>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var path = '/material/switch.html';
var html = "<md-input-container class=\"schema-form-switch {{::form.htmlClass}}\">\n  <md-switch sf-field-model\n             sf-changed=\"form\"\n             sf-type-parser=\"form.schema\"\n             sf-messages\n             schema-validate=\"form\"\n             id=\"{{::form.key|sfCamelKey}}\"\n             aria-label=\"{{form.title}}\"\n             ng-show=\"::form.key\"\n             ng-class=\"form.fieldHtmlClass\"\n             ng-disabled=\"::form.readonly\">\n    <span  ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</span>\n  </md-switch>\n</md-input-container>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var path = '/material/tabarray.html';
var html = "\n<div sf-array=\"form\" ng-init=\"selected = { tab: 0 }\"\n     class=\"clearfix schema-form-tabarray schema-form-tabarray-{{form.tabType || 'left'}} {{::form.htmlClass}}\">\n  <div ng-if=\"!form.tabType || form.tabType !== 'right'\"\n       ng-class=\"{'col-xs-3': !form.tabType || form.tabType === 'left'}\">\n    <ul class=\"nav nav-tabs\"\n        ng-class=\"{ 'tabs-left': !form.tabType || form.tabType === 'left'}\">\n      <li ng-repeat=\"item in modelArray track by $index\"\n          ng-click=\"$event.preventDefault() || (selected.tab = $index)\"\n          ng-class=\"{active: selected.tab === $index}\">\n          <a href=\"#\">{{interp(form.title,{'$index':$index, value: item}) || $index}}</a>\n      </li>\n      <li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || (selected.tab = appendToArray().length - 1)\">\n        <a href=\"#\">\n          <i class=\"glyphicon glyphicon-plus\"></i>\n          {{ form.add || 'Add'}}\n          </a>\n      </li>\n    </ul>\n  </div>\n\n  <div ng-class=\"{'col-xs-9': !form.tabType || form.tabType === 'left' || form.tabType === 'right'}\">\n    <div class=\"tab-content {{::form.fieldHtmlClass}}\">\n      <div class=\"tab-pane clearfix\"\n           ng-repeat=\"item in modelArray track by $index\"\n           ng-show=\"selected.tab === $index\"\n           ng-class=\"{active: selected.tab === $index}\">\n           <sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator>\n\n\n           <button ng-hide=\"form.readonly\"\n                   ng-click=\"selected.tab = deleteFromArray($index).length - 1\"\n                   type=\"button\"\n                   class=\"btn {{ form.style.remove || 'btn-default' }} pull-right\">\n             <i class=\"glyphicon glyphicon-trash\"></i>\n             {{ form.remove || 'Remove'}}\n           </button>\n      </div>\n    </div>\n  </div>\n\n  <div ng-if=\"form.tabType === 'right'\" class=\"col-xs-3\">\n    <ul class=\"nav nav-tabs tabs-right\">\n      <li ng-repeat=\"item in modelArray track by $index\"\n          ng-click=\"$event.preventDefault() || (selected.tab = $index)\"\n          ng-class=\"{active: selected.tab === $index}\">\n          <a href=\"#\">{{interp(form.title,{'$index':$index, value: item}) || $index}}</a>\n      </li>\n      <li ng-hide=\"form.readonly\" ng-click=\"$event.preventDefault() || appendToArray()\">\n        <a href=\"#\">\n          <i class=\"glyphicon glyphicon-plus\"></i>\n          {{ form.add || 'Add'}}\n          </a>\n      </li>\n    </ul>\n  </div>\n\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var path = '/material/tabs.html';
var html = "<div sf-field-model class=\"schema-form-tabs {{::form.htmlClass}}\">\n  <md-tabs md-dynamic-height md-selected=\"selected\" md-autoselect ng-init=\"selected = 0\"></md-tabs>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var path = '/material/textarea.html';
var html = "<md-input-container class=\"{{::form.htmlClass}} schema-form-textarea\" sf-messages sf-layout>\n  <label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label>\n  <textarea ng-class=\"::form.fieldHtmlClass\"\n            id=\"{{::form.key|sfCamelKey}}\"\n            sf-changed=\"form\"\n            ng-disabled=\"::form.readonly\"\n            sf-field-model\n            schema-validate=\"form\"\n            name=\"{{::form.key|sfCamelKey}}\"></textarea>\n</md-input-container>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(34);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(33)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

angular.module('schemaForm').directive('sfMaterialClass', sfMaterialClassDirective);

sfMaterialClassDirective.$inject = [
  '$compile', '$timeout'
];

function sfMaterialClassDirective($compile, $timeout) {
    return {
        restrict : 'A',
        scope    : false,
        link     : function(scope, element, attrs, ngModel) {
            function reduceHelper(obj, i) {return obj[i]}

            var modelValue;
            try {
                modelValue = scope.form.key.reduce(reduceHelper, scope.model);
            } catch (e) {
                modelValue = undefined;
            }

            // Element class is not set in DOM if executed immediately.
            // I don't understand exactly why but it's probably related to other directive job.
            $timeout(function() {
                if (modelValue !== null && typeof modelValue !== 'undefined' && modelValue !== false) {
                    element.addClass(attrs.sfMaterialClass);
                }
            }, 0);
        }
    };
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_actions_html__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_actions_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__material_actions_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_array_html__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_array_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_array_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_checkbox_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_submit_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_submit_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_date_html__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_date_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_date_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_default_html__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_default_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_default_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_fieldset_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_help_html__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_help_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_help_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_radios_html__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_radios_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_radios_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_radios_inline_html__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_radios_inline_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_radios_inline_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_radio_buttons_html__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_radio_buttons_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_radio_buttons_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_section_html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_section_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_section_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_select_html__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_select_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_select_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_switch_html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_switch_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__material_switch_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_tabs_html__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_tabs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__material_tabs_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_tabarray_html__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_tabarray_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__material_tabarray_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_textarea_html__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_textarea_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__material_textarea_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_textfield__ = __webpack_require__(10);
// ngtemplate-loader embeds the html on build


























angular
  .module('schemaForm')
  .config(materialDecoratorConfig)
  .directive('sfmExternalOptions', sfmExternalOptionsDirective)
  .filter('sfCamelKey', sfCamelKeyFilter);

materialDecoratorConfig.$inject = [
  'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider', '$injector'
];

function materialDecoratorConfig(
    schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider, $injector) {
  var base = 'decorators/material/';

  var simpleTransclusion = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions     = sfBuilderProvider.builders.ngModelOptions;
  var ngModel            = sfBuilderProvider.builders.ngModel;
  var sfField            = sfBuilderProvider.builders.sfField;
  var condition          = sfBuilderProvider.builders.condition;
  var array              = sfBuilderProvider.builders.array;
  var numeric            = sfBuilderProvider.builders.numeric;

  var sfLayout           = sfLayout;
  var sfMessagesNode     = sfMessagesNodeHandler();
  var sfMessages         = sfMessagesBuilder;
  var sfOptions          = sfOptionsBuilder;
  var mdAutocomplete     = mdAutocompleteBuilder;
  var mdSwitch           = mdSwitchBuilder;
  var mdDatepicker       = mdDatepickerBuilder;
  var mdTabs             = mdTabsBuilder;
  var textarea           = textareaBuilder;

  var core = [ sfField, ngModel, ngModelOptions, condition, sfLayout ];
  var defaults = core.concat([sfMessages]);
  var arrays = core.concat(array);

  schemaFormProvider.defaults.string.unshift(dateDefault);

  decoratorsProvider.defineDecorator('materialDecorator', {
    autocomplete: { template: __WEBPACK_IMPORTED_MODULE_2__material_autocomplete_html___default.a, builder: defaults.concat(mdAutocomplete) },
    boolean: { template: __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default.a, builder: defaults },
    button: { template: __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default.a, builder: defaults },
    checkbox: { template: __WEBPACK_IMPORTED_MODULE_3__material_checkbox_html___default.a, builder: defaults },
    checkboxes: { template: __WEBPACK_IMPORTED_MODULE_5__material_checkboxes_html___default.a, builder: arrays },
    date: { template: __WEBPACK_IMPORTED_MODULE_6__material_date_html___default.a, builder: defaults.concat(mdDatepicker) },
    'default': { template: __WEBPACK_IMPORTED_MODULE_7__material_default_html___default.a, builder: defaults },
    fieldset: { template: __WEBPACK_IMPORTED_MODULE_8__material_fieldset_html___default.a, builder: [ sfField, simpleTransclusion, condition ] },
    help: { template: __WEBPACK_IMPORTED_MODULE_9__material_help_html___default.a, builder: defaults },
    number: { template: __WEBPACK_IMPORTED_MODULE_7__material_default_html___default.a, builder: defaults.concat(numeric) },
    password: { template: __WEBPACK_IMPORTED_MODULE_7__material_default_html___default.a, builder: defaults },
    radios: { template: __WEBPACK_IMPORTED_MODULE_10__material_radios_html___default.a, builder: defaults },
    'radios-inline': { template: __WEBPACK_IMPORTED_MODULE_11__material_radios_inline_html___default.a, builder: defaults },
    radiobuttons: { template: __WEBPACK_IMPORTED_MODULE_12__material_radio_buttons_html___default.a, builder: defaults },
    section: { template: __WEBPACK_IMPORTED_MODULE_13__material_section_html___default.a, builder: [ sfField, simpleTransclusion, condition, sfLayout ] },
    select: { template: __WEBPACK_IMPORTED_MODULE_14__material_select_html___default.a, builder: defaults.concat(sfOptions) },
    submit: { template: __WEBPACK_IMPORTED_MODULE_4__material_submit_html___default.a, builder: defaults },
    tabs: { template: __WEBPACK_IMPORTED_MODULE_16__material_tabs_html___default.a, builder: [ sfField, mdTabs, condition ] },
    tabarray: { template: __WEBPACK_IMPORTED_MODULE_17__material_tabarray_html___default.a, builder: arrays },
    textarea: { template: __WEBPACK_IMPORTED_MODULE_18__material_textarea_html___default.a, builder: defaults.concat(textarea) },
    'switch': { template: __WEBPACK_IMPORTED_MODULE_15__material_switch_html___default.a, builder: defaults.concat(mdSwitch) }
  });

  function sfLayout(args) {
    var layoutDiv = args.fieldFrag.querySelector('[sf-layout]');
    // console.log(args.fieldFrag.querySelector);
    const tf = args.fieldFrag.querySelector('.mdc-textfield');
    if (tf) {
      const textfield = new __WEBPACK_IMPORTED_MODULE_19__material_textfield__["a" /* MDCTextfield */](args.fieldFrag.querySelector('.mdc-textfield'));
    }
    if (args.form.grid) {
      Object.getOwnPropertyNames(args.form.grid).forEach(function(property, idx, array) {
        layoutDiv.setAttribute(property, args.form.grid[property]);
      });
    };
  };

  function sfMessagesNodeHandler() {
    var html = `<p class="mdc-textfield-helptext"
     sf-message="form.description"
     ng-class="{
               'mdc-textfield-helptext--validation-msg': hasError(),
               'mdc-textfield-helptext--persistent': hasError()
               }"
     >
  </p>`
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  };

  function sfMessagesBuilder(args) {
    var messagesDiv = args.fieldFrag.querySelector('[sf-messages]');
    if (messagesDiv && sfMessagesNode) {
      var child = sfMessagesNode.cloneNode(true);
      messagesDiv.appendChild(child);
    }
  };

  function textareaBuilder(args) {
    var textareaFrag = args.fieldFrag.querySelector('textarea');
    var maxLength = args.form.maxlength || false;
    if (textareaFrag && maxLength) {
      textareaFrag.setAttribute('md-maxlength', maxLength);
    };
  };

  function mdAutocompleteBuilder(args) {
    var mdAutocompleteFrag = args.fieldFrag.querySelector('md-autocomplete');
    var minLength = args.form.minLength || 1;
    var maxLength = args.form.maxLength || false;
    var title = args.form.title || args.form.placeholder || args.form.key.slice(-1)[0];

    if (mdAutocompleteFrag) {
      if (args.form.onChange) {
        mdAutocompleteFrag.setAttribute('md-selected-item-change', 'args.form.onChange()');
        mdAutocompleteFrag.setAttribute('md-search-text-change', 'args.form.onChange(searchText)');
      };

      // mdAutocompleteFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
      mdAutocompleteFrag.setAttribute('md-min-length', minLength);
      if (maxLength) {
        mdAutocompleteFrag.setAttribute('md-max-length', maxLength);
      };

      if (title) {
        mdAutocompleteFrag.setAttribute('md-floating-label', title);
      };
    };
  };

  function mdSwitchBuilder(args) {
    var mdSwitchFrag = args.fieldFrag.querySelector('md-switch');
    if (args.form.schema.titleMap) {
      mdSwitchFrag.setAttribute('ng-true-value', args.form.schema.titleMap.true);
      mdSwitchFrag.setAttribute('ng-false-value', args.form.schema.titleMap.false);
    };
  };

  function sfOptionsBuilder(args) {
    var mdSelectFrag = args.fieldFrag.querySelector('md-select');
    var enumTitleMap = [];
    var i;
    var mdSelectFrag;

    args.form.selectOptions = [];
    args.form.getOptions = getOptionsHandler;

    if (args.form.schema.links && (typeof args.form.schema.links) === 'object') {
      var link;
      var related = /({)([^}]*)(})/gm;
      var source = /{{([^}]*)}}/gm;
      var matched;

      for (i = 0; i < args.form.schema.links.length; i++) {
        link = args.form.schema.links[i];
        if (link.rel === 'options') {
          // TODO enable filter to allow processing results
          // args.form.optionSource = link.href.replace(related, '$1$1 model.$2 | _externalOptionUri $3$3');
          args.form.optionSource = link.href.replace(related, '$1$1 model.$2 $3$3');
        };
      };

      mdSelectFrag.setAttribute('sfm-external-options', args.form.optionSource);
    }
    else {
      args.form.selectOptions = sfOptionsProcessor(args.form);
    };
  };

  function mdDatepickerBuilder(args) {
    var mdDatepickerFrag = args.fieldFrag.querySelector('md-datepicker');
    if (mdDatepickerFrag) {
      if (args.form.onChange) {
        mdDatepickerFrag.setAttribute('ng-change', 'args.form.onChange(searchText)');
      }
      // mdDatepickerFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
      var minDate = args.form.minimum || false;
      var maxDate = args.form.maximum || false;
      if (minDate) {
        mdDatepickerFrag.setAttribute('md-max-date', minDate);
      }
      if (maxDate) {
        mdDatepickerFrag.setAttribute('md-max-date', maxDate);
      }
    }
  };

  function mdTabsBuilder(args) {
    if (args.form.tabs && args.form.tabs.length > 0) {
      var mdTabsFrag = args.fieldFrag.querySelector('md-tabs');

      args.form.tabs.forEach(function(tab, index) {
        var evalExpr = '(evalExpr(' + args.path + '.tabs[' + index + ']' +
                       '.condition, { model: model, "arrayIndex": $index}))';
        var mdTab = document.createElement('md-tab');
        if(!!tab.condition) {
          mdTab.setAttribute('ng-if', evalExpr);
        };
        mdTab.setAttribute('label', '{{' + args.path + '.tabs[' + index + '].title}}');
        var mdTabBody = document.createElement('md-tab-body');
        var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
        mdTabBody.appendChild(childFrag);
        mdTab.appendChild(mdTabBody);
        mdTabsFrag.appendChild(mdTab);
      });
    }
  };

  /**
   * Material Datepicker
   */
  function dateDefault(name, schema, options) {
    if (schema.type === 'string' && (schema.format === 'date' || schema.format === 'date-time')) {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'date';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };
};

function getOptionsHandler(form, evalExpr) {
  if (form.optionData) {
    return evalExpr(form.optionData);
  };

  if (form.selectOptions) {
    return form.selectOptions;
  };

  return [];
};

function sfOptionsProcessor(data) {
  var enumTitleMap = [];

  if (data.titleMap) {
    return data.titleMap;
  }
  else if (data.enum && data.enum.length) {
    for (i = 0; i < data.enum.length; i++) {
      if (data.enum[i] && data.enum[i].length) {
        enumTitleMap.push({ name: data.enum[i], value: data.enum[i] });
      };
    };
  };

  return enumTitleMap;
};

sfmExternalOptionsDirective.$inject = [ '$http' ];

function sfmExternalOptionsDirective($http) {
  var directive = {
    link: link,
    restrict: 'A'
  };

  return directive;

  function link(scope, element, attrs) {
    attrs.$observe('sfmExternalOptions', function(dataURI) {
      $http.get(dataURI)
        .then(function(response) {
          scope.form.selectOptions = sfOptionsProcessor(response.data);
        });
    });
  };
};

/**
 * sfCamelKey Filter
 */
function sfCamelKeyFilter() {
  return function(formKey) {
    if (!formKey) { return ''; };
    var part, i, key;
    key = formKey.slice();
    for (i = 0; i < key.length; i++) {
      part = key[i].toLowerCase().split('');
      if (i && part.length) { part[0] = part[0].toUpperCase(); };
      key[i] = part.join('');
    };
    return key.join('');
  };
};

/*
  TODO add default filter for autocomplete which allows form.optionFilter or 'autocompleteFilter' to override
  Something along the following lines...
  if ($injector.has('autocompleteFilter')) {
    result = $filter('autocomplete')(input);
  }
  else
  if ($injector.has(args.form.optionFilter + 'Filter')) {
    result = $filter(args.form.optionFilter)(input);
  }
  else {
    if (args.form.optionFilter) {
      mdAutocomplete.setAttribute('md-items',
        'item in evalExpr("this[\""+form.optionFilter+"\"](\""+searchText+"\")")');
    }
  }

  .filter('autocompleteMovieTest', function() {
    function autocompleteMovieTestFilter(array, input){
      var current = input;
      // You could also call multiple filters here using:
      // current = $filter('filterName')(input)
      if(typeof current === 'string') {
        current = current.replace(' ','-').toLowerCase();
      }
      current = (!current) ? '_undefined' : current;
      return current;
    }

    return externalOptionUriFilter;
  })
*/


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * It might be a bug, but currently input[type=number] does not add
 * a parser, so the model gets populated with a string. It does however stop non numbers so it
 * must have some preproccessing. Anyway, this adds parser before schema-validate hooks into it.
 * FIXME: this is still not a complete solution. Inputting a string in an input[type=number] results
 * in parsers never firing and ngModel value removed. So no validation from schema-validate either.
 */
angular.module('schemaForm').directive('sfTypeParser', function() {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var once = scope.$watch(attrs.sfTypeParser, function(schema) {
        if (!schema) {
          return;
        }

        var isNumber  = schema.type.indexOf('number') !== -1;
        var isInteger = schema.type.indexOf('integer') !== -1;
        var numberRE  = /^[0-9]*$/;
        // Use index of since type can be either an array with two values or a string.
        if (isNumber || isInteger) {
          // The timing here seems to work. i.e. we get in before schema-validate
          ngModel.$parsers.push(function(viewValue) {
            var value;
            if (isNumber) {
              value = parseFloat(viewValue);
            } else if (numberRE.test(viewValue)) {
              // We test the value to check that it's a valid integer, otherwise we can easily
              // get float -> integer parsing behind the scenes.
              value = parseInt(viewValue, 10);
            }
            console.log('parser', numberRE.test(viewValue), viewValue, value)
            if (value === undefined || isNaN(value)) {
              //Let the validation fail. @FIXME: it fails with "required" for some reason.
              return viewValue;
            }
            return value;
          });
        }

        once();
      });
    }
  };
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);