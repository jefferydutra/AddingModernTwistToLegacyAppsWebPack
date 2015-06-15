/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var numberGreaterThanOrEqualTo = __webpack_require__(1);

	window.legacy = {};

	window.legacy.numberGreaterThanOrEqualTo = function() {
	  console.info('numberGreaterThanOrEqualTo(1, 2)', numberGreaterThanOrEqualTo(1, 2));
	  console.info('numberGreaterThanOrEqualTo(1, "dd")', numberGreaterThanOrEqualTo(1, 'dd'));
	  console.info('numberGreaterThanOrEqualTo(4, 2)', numberGreaterThanOrEqualTo(4, 2));
	  console.info('numberGreaterThanOrEqualTo(4, 4)', numberGreaterThanOrEqualTo(4, 4));
	  console.info('numberGreaterThanOrEqualTo(NaN, NaN)', numberGreaterThanOrEqualTo(NaN, NaN));
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	var numberGreaterThanOrEqualTo = function(value, testValue) {
	  if (isNaN(value)) {
	    return false;
	  }

	  if (isNaN(testValue)) {
	    return true;
	  }

	  return Number(value) >= Number(testValue);
	};

	module.exports = numberGreaterThanOrEqualTo;


/***/ }
/******/ ]);