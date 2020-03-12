(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".notifier__container * {\n  box-sizing: border-box;\n}\n\n.notifier__container-list {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style-type: none;\n}\n\n.notifier__notification {\n  display: block;\n  position: fixed;\n  visibility: hidden;\n  z-index: 10000;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.notifier__notification--material {\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  cursor: default;\n  padding-top: 11px;\n  padding-right: 26px;\n  padding-bottom: 10px;\n  padding-left: 26px;\n}\n\n.notifier__notification--material .notifier__notification-message {\n  display: inline-block;\n  margin-top: 0;\n  margin-bottom: 0;\n  vertical-align: top;\n  line-height: 32px;\n  font-size: 15px;\n}\n\n.notifier__notification--material .notifier__notification-button {\n  display: inline-block;\n  -webkit-transition: opacity .2s ease;\n  transition: opacity .2s ease;\n  opacity: .5;\n  margin-right: -10px;\n  margin-left: 10px;\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 6px;\n  width: 32px;\n  height: 32px;\n  vertical-align: top;\n}\n\n.notifier__notification--material .notifier__notification-button:hover, .notifier__notification--material .notifier__notification-button:focus {\n  opacity: 1;\n}\n\n.notifier__notification--material .notifier__notification-button:active {\n  -webkit-transform: scale(0.82);\n          transform: scale(0.82);\n  opacity: 1;\n}\n\n.notifier__notification--default {\n  background-color: #444;\n  color: #FFF;\n}\n\n.notifier__notification--default .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--error {\n  background-color: #D9534F;\n  color: #FFF;\n}\n\n.notifier__notification--error .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--info {\n  background-color: #5BC0DE;\n  color: #FFF;\n}\n\n.notifier__notification--info .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--success {\n  background-color: #5CB85C;\n  color: #FFF;\n}\n\n.notifier__notification--success .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--warning {\n  background-color: #F0AD4E;\n  color: #FFF;\n}\n\n.notifier__notification--warning .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n/* You can add global styles to this file, and also import other style files */\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #f9ce4c;\n  color: #222;\n  font-size: 14px;\n}\n\na {\n  text-decoration: none;\n}\n\nmain {\n  padding: 60px 15px 50px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n\n.menu {\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n  font-family: sans-serif;\n  background-color: #fff;\n}\n\n.menu__item {\n  height: 100%;\n}\n\n.menu .menuItem__content,\n.menuBtn {\n  color: #616161;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 10px;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 11px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.menu .menuItem__content:hover,\n.menu .menuBtn:hover {\n  color: #ffaa0c;\n}\n\n.menu__item .menuItem__content {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 11px;\n}\n\n.menuBrand .menuItem__content {\n  font-size: 18px;\n  width: 50px;\n  padding: 0;\n}\n\n.menuBtn {\n  border: none;\n  outline: none;\n}\n\n.menuBtn * {\n  margin-right: 5px;\n}\n\n.dropList {\n  display: none;\n  list-style: none;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  min-width: 100%;\n  z-index: 100;\n}\n\n.dropList__item {\n  padding: 0 10px;\n  line-height: 20px;\n  cursor: pointer;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.dropList__item:hover {\n  background-color: #ffe4b3;\n}\n\n.dropList__item.active {\n  background-color: #ffaa0c;\n}\n\n.dropMenu {\n  position: relative;\n}\n\n.dropMenu:hover .menuBtn {\n  color: #ffaa0c;\n}\n\n.dropMenu:hover .dropList {\n  display: block;\n}\n\n.mainMenu {\n  background-color: #5a5a5a;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px 0 #222;\n  z-index: 200;\n}\n\n.mainMenu .menuItem__content {\n  color: #fff;\n}\n\nh2 {\n  background: #fff;\n  padding: 10px;\n  margin: 0;\n  border-bottom: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy5jc3MiLCIvaG9tZS9taXJlaGlrby9Qcm9qZWN0cy9taXJlaGlrby9hbmd1bGFyL2FuZ2FwcC9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0NBQTRCO0VBQTVCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUN6R0EsOEVBQUE7O0FBRUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FETUE7O0VBRUUsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0hGOztBRE1BOztFQUdFLGNBQUE7QUNKRjs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtBQ0pGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FEVUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtBQ1BGOztBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FDUEYiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWVyX19jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ub3RpZmllcl9fY29udGFpbmVyLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwMDAwO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgcGFkZGluZy1yaWdodDogMjZweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2U7XG4gIG9wYWNpdHk6IC41O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbjpob3ZlciwgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbjpmb2N1cyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgyKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWRlZmF1bHQgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWVycm9yIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHtcbiAgZmlsbDogI0ZGRjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWluZm8gLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I4NUM7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tc3VjY2VzcyAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RTtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS13YXJuaW5nIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHtcbiAgZmlsbDogI0ZGRjtcbn1cbiIsIkBpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMuY3NzXCI7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuaHRtbCxcbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U0YztcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDYwcHggMTVweCA1MHB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLy8g0L7RgdC90L7QstC90YvQtSDRgdGC0LjQu9C4INC00LvRjyDQvdCw0LLQuNCz0LDRhtC40LhcblxuLm1lbnUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tZW51X19pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudSAubWVudUl0ZW1fX2NvbnRlbnQsXG4ubWVudUJ0biB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLm1lbnUgLm1lbnVJdGVtX19jb250ZW50OmhvdmVyLFxuLm1lbnUgLm1lbnVCdG46aG92ZXIge1xuICAvLyBjb2xvcjogIzBjZGNmZjtcbiAgY29sb3I6ICNmZmFhMGM7XG59XG5cbi5tZW51X19pdGVtIC5tZW51SXRlbV9fY29udGVudCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5tZW51QnJhbmQgLm1lbnVJdGVtX19jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1lbnVCdG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tZW51QnRuICoge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLy9kcm9wXG4uZHJvcExpc3Qge1xuICBkaXNwbGF5OiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmRyb3BMaXN0X19pdGVtIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLmRyb3BMaXN0X19pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRiMztcbn1cblxuLmRyb3BMaXN0X19pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhMGM7XG59XG5cbi5kcm9wTWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3BNZW51OmhvdmVyIC5tZW51QnRuIHtcbiAgY29sb3I6ICNmZmFhMGM7XG59XG5cbi5kcm9wTWVudTpob3ZlciAuZHJvcExpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy9jdXN0b20gbWVudVxuXG4ubWFpbk1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwICMyMjI7XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuLm1haW5NZW51IC5tZW51SXRlbV9fY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5oMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi8vIC50YWJsZSB7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuLy8gICB0ZCxcbi8vICAgdGgge1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4vLyAgIH1cbi8vICAgLnN0YXR1cyxcbi8vICAgLmNvbnRyb2xzIHtcbi8vICAgICB3aWR0aDogMTAwcHg7XG4vLyAgIH1cbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMuY3NzXCI7XG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljZTRjO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogNjBweCAxNXB4IDUwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWVudSB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1lbnVfX2l0ZW0ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51IC5tZW51SXRlbV9fY29udGVudCxcbi5tZW51QnRuIHtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ubWVudSAubWVudUl0ZW1fX2NvbnRlbnQ6aG92ZXIsXG4ubWVudSAubWVudUJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjZmZhYTBjO1xufVxuXG4ubWVudV9faXRlbSAubWVudUl0ZW1fX2NvbnRlbnQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ubWVudUJyYW5kIC5tZW51SXRlbV9fY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZW51QnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWVudUJ0biAqIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kcm9wTGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uZHJvcExpc3RfX2l0ZW0ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uZHJvcExpc3RfX2l0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGIzO1xufVxuXG4uZHJvcExpc3RfX2l0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWEwYztcbn1cblxuLmRyb3BNZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcE1lbnU6aG92ZXIgLm1lbnVCdG4ge1xuICBjb2xvcjogI2ZmYWEwYztcbn1cblxuLmRyb3BNZW51OmhvdmVyIC5kcm9wTGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWFpbk1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwICMyMjI7XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuLm1haW5NZW51IC5tZW51SXRlbV9fY29udGVudCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5oMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59Il19 */", '', '']]

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