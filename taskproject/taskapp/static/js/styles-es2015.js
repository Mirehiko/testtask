(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  background-color: #f9ce4c;\n  color: #222;\n  font-size: 14px;\n}\na {\n  text-decoration: none;\n}\nmain {\n  padding: 60px 15px 50px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n.menu {\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n  font-family: sans-serif;\n  background-color: #fff;\n}\n.menu__item {\n  height: 100%;\n}\n.menu .menuItem__content,\n.menuBtn {\n  color: #616161;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 10px;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 11px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.menu .menuItem__content:hover,\n.menu .menuBtn:hover {\n  color: #0cdcff;\n  color: #ffaa0c;\n}\n.menu__item .menuItem__content {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 11px;\n}\n.menuBrand .menuItem__content {\n  font-size: 18px;\n  width: 50px;\n  padding: 0;\n}\n.menuBtn {\n  border: none;\n  outline: none;\n}\n.menuBtn * {\n  margin-right: 5px;\n}\n.dropList {\n  display: none;\n  list-style: none;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  min-width: 100%;\n  z-index: 100;\n}\n.dropList__item {\n  padding: 0 10px;\n  line-height: 20px;\n  cursor: pointer;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.dropList__item:hover {\n  background-color: #ffe4b3;\n}\n.dropList__item.active {\n  background-color: #ffaa0c;\n}\n.dropMenu {\n  position: relative;\n}\n.dropMenu:hover .menuBtn {\n  color: #ffaa0c;\n}\n.dropMenu:hover .dropList {\n  display: block;\n}\n.mainMenu {\n  background-color: #5a5a5a;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px 0 #222;\n  z-index: 200;\n}\n.mainMenu .menuItem__content {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUNBOztFQUVFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0Usc0JBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtBQ0NGO0FERUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FESUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtBQ0RGO0FESUE7O0VBRUUsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0RGO0FESUE7O0VBRUUsY0FBQTtFQUNBLGNBQUE7QUNERjtBRElBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDREY7QURJQTtFQUNFLGlCQUFBO0FDREY7QURLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7QUNGRjtBREtBO0VBQ0UsY0FBQTtBQ0ZGO0FET0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSxXQUFBO0FDSkYiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U0YztcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDYwcHggMTVweCA1MHB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLy8g0L7RgdC90L7QstC90YvQtSDRgdGC0LjQu9C4INC00LvRjyDQvdCw0LLQuNCz0LDRhtC40LhcblxuLm1lbnUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tZW51X19pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudSAubWVudUl0ZW1fX2NvbnRlbnQsXG4ubWVudUJ0biB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLm1lbnUgLm1lbnVJdGVtX19jb250ZW50OmhvdmVyLFxuLm1lbnUgLm1lbnVCdG46aG92ZXIge1xuICBjb2xvcjogIzBjZGNmZjtcbiAgY29sb3I6ICNmZmFhMGM7XG59XG5cbi5tZW51X19pdGVtIC5tZW51SXRlbV9fY29udGVudCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5tZW51QnJhbmQgLm1lbnVJdGVtX19jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1lbnVCdG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tZW51QnRuICoge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLy9kcm9wXG4uZHJvcExpc3Qge1xuICBkaXNwbGF5OiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmRyb3BMaXN0X19pdGVtIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLmRyb3BMaXN0X19pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRiMztcbn1cblxuLmRyb3BMaXN0X19pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhMGM7XG59XG5cbi5kcm9wTWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3BNZW51OmhvdmVyIC5tZW51QnRuIHtcbiAgY29sb3I6ICNmZmFhMGM7XG59XG5cbi5kcm9wTWVudTpob3ZlciAuZHJvcExpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy9jdXN0b20gbWVudVxuXG4ubWFpbk1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwICMyMjI7XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuLm1haW5NZW51IC5tZW51SXRlbV9fY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U0YztcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDYwcHggMTVweCA1MHB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1lbnUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tZW51X19pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudSAubWVudUl0ZW1fX2NvbnRlbnQsXG4ubWVudUJ0biB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLm1lbnUgLm1lbnVJdGVtX19jb250ZW50OmhvdmVyLFxuLm1lbnUgLm1lbnVCdG46aG92ZXIge1xuICBjb2xvcjogIzBjZGNmZjtcbiAgY29sb3I6ICNmZmFhMGM7XG59XG5cbi5tZW51X19pdGVtIC5tZW51SXRlbV9fY29udGVudCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5tZW51QnJhbmQgLm1lbnVJdGVtX19jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1lbnVCdG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tZW51QnRuICoge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRyb3BMaXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5kcm9wTGlzdF9faXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5kcm9wTGlzdF9faXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU0YjM7XG59XG5cbi5kcm9wTGlzdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYTBjO1xufVxuXG4uZHJvcE1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wTWVudTpob3ZlciAubWVudUJ0biB7XG4gIGNvbG9yOiAjZmZhYTBjO1xufVxuXG4uZHJvcE1lbnU6aG92ZXIgLmRyb3BMaXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYWluTWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgIzIyMjtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubWFpbk1lbnUgLm1lbnVJdGVtX19jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG59Il19 */", '', '']]

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

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

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

module.exports = __webpack_require__(/*! /home/mirehiko/Projects/mirehiko/angular/angapp/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map