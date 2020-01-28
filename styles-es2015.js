(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.oright {\n  float: right;\n}\n.loader {\n  text-align: center;\n  margin-top: 35%;\n  font-size: 24px;\n  float: center;\n  animation: rotate 2s infinite alternate-reverse;\n}\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/* The snackbar - position it at the bottom and in the middle of the screen */\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #bbdefb;\n  /* Black background color */\n  color: #1e88e5;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 10px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 65000;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */\n}\ntable {\n  word-break: break-word;\n}\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n    However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n.uk-offcanvas-bar {\n  background-color: white;\n  color: black;\n  border-left: 2px solid coral;\n}\nh3 {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxsb2FucHJvXFxzcmNcXGFwcFxccm9tYW4vLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uLy4uL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxZQUFBO0FDQ0Y7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7QUNBRjtBREdBO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VDQUY7RURFQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNBRjtBQUNGO0FETkE7RUFDRTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7RUNBRjtFREVBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ0FGO0FBQ0Y7QURHQSw2RUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFBb0Isd0NBQUE7RUFDcEIsZ0JBQUE7RUFBa0IsZ0NBQUE7RUFDbEIsbUJBQUE7RUFBcUIsbUNBQUE7RUFDckIseUJBeEJLO0VBd0JvQiwyQkFBQTtFQUN6QixjQXhCSztFQXdCUyxxQkFBQTtFQUNkLGtCQUFBO0VBQW9CLGtCQUFBO0VBQ3BCLG1CQUFBO0VBQXFCLG9CQUFBO0VBQ3JCLGFBQUE7RUFBZSxZQUFBO0VBQ2YsZUFBQTtFQUFpQiw2QkFBQTtFQUNqQixjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLFNBQUE7RUFBVyx3QkFBQTtFQUNYLFlBQUE7RUFBYyx5QkFBQTtBQ1doQjtBRFRBO0VBQ0Usc0JBQUE7QUNZRjtBRFZBLDhFQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUFxQixzQkFBQTtFQUNyQjt5REFBQTtFQUVBLGlEQUFBO0VBQ0EseUNBQUE7QUNjRjtBRFhBLCtDQUFBO0FBQ0E7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VDY0Y7RURaQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDY0Y7QUFDRjtBRFhBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQ2FGO0VEWEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ2FGO0FBQ0Y7QURWQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNZRjtFRFZBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUNZRjtBQUNGO0FEVEE7RUFDRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDV0Y7RURUQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VDV0Y7QUFDRjtBRFJBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNVRjtBRFJBO0VBQ0UsWUFBQTtBQ1dGIiwiZmlsZSI6Ii4uLy4uL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLm9yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiRkYXJrOiAjYmJkZWZiO1xuJGxpdGU6ICMxZTg4ZTU7XG4ubG9hZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzNSU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZmxvYXQ6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLyogVGhlIHNuYWNrYmFyIC0gcG9zaXRpb24gaXQgYXQgdGhlIGJvdHRvbSBhbmQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuICovXG4jc25hY2tiYXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IC8qIEhpZGRlbiBieSBkZWZhdWx0LiBWaXNpYmxlIG9uIGNsaWNrICovXG4gIG1pbi13aWR0aDogMjUwcHg7IC8qIFNldCBhIGRlZmF1bHQgbWluaW11bSB3aWR0aCAqL1xuICBtYXJnaW4tbGVmdDogLTEyNXB4OyAvKiBEaXZpZGUgdmFsdWUgb2YgbWluLXdpZHRoIGJ5IDIgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7IC8qIEJsYWNrIGJhY2tncm91bmQgY29sb3IgKi9cbiAgY29sb3I6ICRsaXRlOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyZWQgdGV4dCAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBSb3VuZGVkIGJvcmRlcnMgKi9cbiAgcGFkZGluZzogMTZweDsgLyogUGFkZGluZyAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHNjcmVlbiAqL1xuICB6LWluZGV4OiA2NTAwMDsgLyogQWRkIGEgei1pbmRleCBpZiBuZWVkZWQgKi9cbiAgbGVmdDogNTAlOyAvKiBDZW50ZXIgdGhlIHNuYWNrYmFyICovXG4gIGJvdHRvbTogMzBweDsgLyogMzBweCBmcm9tIHRoZSBib3R0b20gKi9cbn1cbnRhYmxlIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cbi8qIFNob3cgdGhlIHNuYWNrYmFyIHdoZW4gY2xpY2tpbmcgb24gYSBidXR0b24gKGNsYXNzIGFkZGVkIHdpdGggSmF2YVNjcmlwdCkgKi9cbiNzbmFja2Jhci5zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgLyogU2hvdyB0aGUgc25hY2tiYXIgKi9cbiAgLyogQWRkIGFuaW1hdGlvbjogVGFrZSAwLjUgc2Vjb25kcyB0byBmYWRlIGluIGFuZCBvdXQgdGhlIHNuYWNrYmFyLlxuICAgIEhvd2V2ZXIsIGRlbGF5IHRoZSBmYWRlIG91dCBwcm9jZXNzIGZvciAyLjUgc2Vjb25kcyAqL1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbn1cblxuLyogQW5pbWF0aW9ucyB0byBmYWRlIHRoZSBzbmFja2JhciBpbiBhbmQgb3V0ICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4udWstb2ZmY2FudmFzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgY29yYWw7XG59XG5oMyB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5vcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sb2FkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDM1JTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmbG9hdDogY2VudGVyO1xuICBhbmltYXRpb246IHJvdGF0ZSAycyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLyogVGhlIHNuYWNrYmFyIC0gcG9zaXRpb24gaXQgYXQgdGhlIGJvdHRvbSBhbmQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuICovXG4jc25hY2tiYXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0LiBWaXNpYmxlIG9uIGNsaWNrICovXG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIC8qIFNldCBhIGRlZmF1bHQgbWluaW11bSB3aWR0aCAqL1xuICBtYXJnaW4tbGVmdDogLTEyNXB4O1xuICAvKiBEaXZpZGUgdmFsdWUgb2YgbWluLXdpZHRoIGJ5IDIgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVmYjtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCBjb2xvciAqL1xuICBjb2xvcjogIzFlODhlNTtcbiAgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIENlbnRlcmVkIHRleHQgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLyogUm91bmRlZCBib3JkZXJzICovXG4gIHBhZGRpbmc6IDE2cHg7XG4gIC8qIFBhZGRpbmcgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBzY3JlZW4gKi9cbiAgei1pbmRleDogNjUwMDA7XG4gIC8qIEFkZCBhIHotaW5kZXggaWYgbmVlZGVkICovXG4gIGxlZnQ6IDUwJTtcbiAgLyogQ2VudGVyIHRoZSBzbmFja2JhciAqL1xuICBib3R0b206IDMwcHg7XG4gIC8qIDMwcHggZnJvbSB0aGUgYm90dG9tICovXG59XG5cbnRhYmxlIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLyogU2hvdyB0aGUgc25hY2tiYXIgd2hlbiBjbGlja2luZyBvbiBhIGJ1dHRvbiAoY2xhc3MgYWRkZWQgd2l0aCBKYXZhU2NyaXB0KSAqL1xuI3NuYWNrYmFyLnNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAvKiBTaG93IHRoZSBzbmFja2JhciAqL1xuICAvKiBBZGQgYW5pbWF0aW9uOiBUYWtlIDAuNSBzZWNvbmRzIHRvIGZhZGUgaW4gYW5kIG91dCB0aGUgc25hY2tiYXIuXG4gICAgSG93ZXZlciwgZGVsYXkgdGhlIGZhZGUgb3V0IHByb2Nlc3MgZm9yIDIuNSBzZWNvbmRzICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG4vKiBBbmltYXRpb25zIHRvIGZhZGUgdGhlIHNuYWNrYmFyIGluIGFuZCBvdXQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4udWstb2ZmY2FudmFzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgY29yYWw7XG59XG5cbmgzIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Documents\loanpro\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map