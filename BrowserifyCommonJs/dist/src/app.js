(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./js/library/src/main.js":[function(require,module,exports){
var numberGreaterThanOrEqualTo = require('./numberGreaterThanOrEqualTo');

window.legacy = {};

window.legacy.numberGreaterThanOrEqualTo = function() {
    console.info('numberGreaterThanOrEqualTo(1, 2)', numberGreaterThanOrEqualTo(1, 2));
    console.info('numberGreaterThanOrEqualTo(1, "dd")', numberGreaterThanOrEqualTo(1, 'dd'));
    console.info('numberGreaterThanOrEqualTo(4, 2)', numberGreaterThanOrEqualTo(4, 2));
    console.info('numberGreaterThanOrEqualTo(4, 4)', numberGreaterThanOrEqualTo(4, 4));
    console.info('numberGreaterThanOrEqualTo(NaN, NaN)', numberGreaterThanOrEqualTo(NaN, NaN));
};

},{"./numberGreaterThanOrEqualTo":"c:\\Web\\AddingModernTwistToLegacyApps\\BrowserifyCommonJs\\js\\library\\src\\numberGreaterThanOrEqualTo.js"}],"c:\\Web\\AddingModernTwistToLegacyApps\\BrowserifyCommonJs\\js\\library\\src\\numberGreaterThanOrEqualTo.js":[function(require,module,exports){
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

},{}]},{},["./js/library/src/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwianNcXGxpYnJhcnlcXHNyY1xcbWFpbi5qcyIsImpzXFxsaWJyYXJ5XFxzcmNcXG51bWJlckdyZWF0ZXJUaGFuT3JFcXVhbFRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG51bWJlckdyZWF0ZXJUaGFuT3JFcXVhbFRvID0gcmVxdWlyZSgnLi9udW1iZXJHcmVhdGVyVGhhbk9yRXF1YWxUbycpO1xyXG5cclxud2luZG93LmxlZ2FjeSA9IHt9O1xyXG5cclxud2luZG93LmxlZ2FjeS5udW1iZXJHcmVhdGVyVGhhbk9yRXF1YWxUbyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5pbmZvKCdudW1iZXJHcmVhdGVyVGhhbk9yRXF1YWxUbygxLCAyKScsIG51bWJlckdyZWF0ZXJUaGFuT3JFcXVhbFRvKDEsIDIpKTtcclxuICAgIGNvbnNvbGUuaW5mbygnbnVtYmVyR3JlYXRlclRoYW5PckVxdWFsVG8oMSwgXCJkZFwiKScsIG51bWJlckdyZWF0ZXJUaGFuT3JFcXVhbFRvKDEsICdkZCcpKTtcclxuICAgIGNvbnNvbGUuaW5mbygnbnVtYmVyR3JlYXRlclRoYW5PckVxdWFsVG8oNCwgMiknLCBudW1iZXJHcmVhdGVyVGhhbk9yRXF1YWxUbyg0LCAyKSk7XHJcbiAgICBjb25zb2xlLmluZm8oJ251bWJlckdyZWF0ZXJUaGFuT3JFcXVhbFRvKDQsIDQpJywgbnVtYmVyR3JlYXRlclRoYW5PckVxdWFsVG8oNCwgNCkpO1xyXG4gICAgY29uc29sZS5pbmZvKCdudW1iZXJHcmVhdGVyVGhhbk9yRXF1YWxUbyhOYU4sIE5hTiknLCBudW1iZXJHcmVhdGVyVGhhbk9yRXF1YWxUbyhOYU4sIE5hTikpO1xyXG59O1xyXG4iLCJ2YXIgbnVtYmVyR3JlYXRlclRoYW5PckVxdWFsVG8gPSBmdW5jdGlvbih2YWx1ZSwgdGVzdFZhbHVlKSB7XHJcbiAgICBpZiAoaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTih0ZXN0VmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSkgPj0gTnVtYmVyKHRlc3RWYWx1ZSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG51bWJlckdyZWF0ZXJUaGFuT3JFcXVhbFRvO1xyXG4iXX0=
