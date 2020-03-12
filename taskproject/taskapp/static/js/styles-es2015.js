(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".notifier__container * {\n  box-sizing: border-box;\n}\n\n.notifier__container-list {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style-type: none;\n}\n\n.notifier__notification {\n  display: block;\n  position: fixed;\n  visibility: hidden;\n  z-index: 10000;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.notifier__notification--material {\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  cursor: default;\n  padding-top: 11px;\n  padding-right: 26px;\n  padding-bottom: 10px;\n  padding-left: 26px;\n}\n\n.notifier__notification--material .notifier__notification-message {\n  display: inline-block;\n  margin-top: 0;\n  margin-bottom: 0;\n  vertical-align: top;\n  line-height: 32px;\n  font-size: 15px;\n}\n\n.notifier__notification--material .notifier__notification-button {\n  display: inline-block;\n  -webkit-transition: opacity .2s ease;\n  transition: opacity .2s ease;\n  opacity: .5;\n  margin-right: -10px;\n  margin-left: 10px;\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 6px;\n  width: 32px;\n  height: 32px;\n  vertical-align: top;\n}\n\n.notifier__notification--material .notifier__notification-button:hover, .notifier__notification--material .notifier__notification-button:focus {\n  opacity: 1;\n}\n\n.notifier__notification--material .notifier__notification-button:active {\n  -webkit-transform: scale(0.82);\n          transform: scale(0.82);\n  opacity: 1;\n}\n\n.notifier__notification--default {\n  background-color: #444;\n  color: #FFF;\n}\n\n.notifier__notification--default .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--error {\n  background-color: #D9534F;\n  color: #FFF;\n}\n\n.notifier__notification--error .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--info {\n  background-color: #5BC0DE;\n  color: #FFF;\n}\n\n.notifier__notification--info .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--success {\n  background-color: #5CB85C;\n  color: #FFF;\n}\n\n.notifier__notification--success .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n.notifier__notification--warning {\n  background-color: #F0AD4E;\n  color: #FFF;\n}\n\n.notifier__notification--warning .notifier__notification-button-icon {\n  fill: #FFF;\n}\n\n/* You can add global styles to this file, and also import other style files */\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #f9ce4c;\n  color: #222;\n  font-size: 14px;\n}\n\na {\n  text-decoration: none;\n}\n\nmain {\n  padding: 60px 15px 50px;\n  max-width: 960px;\n  margin: 0 auto;\n}\n\n.menu {\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n  font-family: sans-serif;\n  background-color: #fff;\n}\n\n.menu__item {\n  height: 100%;\n}\n\n.menu .menuItem__content,\n.menuBtn {\n  color: #616161;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 10px;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 11px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.menu .menuItem__content:hover,\n.menu .menuBtn:hover {\n  color: #ffaa0c;\n}\n\n.menu__item .menuItem__content {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 11px;\n}\n\n.menuBrand .menuItem__content {\n  font-size: 18px;\n  width: 50px;\n  padding: 0;\n}\n\n.menuBtn {\n  border: none;\n  outline: none;\n}\n\n.menuBtn * {\n  margin-right: 5px;\n}\n\n.dropList {\n  display: none;\n  list-style: none;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  min-width: 100%;\n  z-index: 100;\n}\n\n.dropList__item {\n  padding: 0 10px;\n  line-height: 20px;\n  cursor: pointer;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.dropList__item:hover {\n  background-color: #ffe4b3;\n}\n\n.dropList__item.active {\n  background-color: #ffaa0c;\n}\n\n.dropMenu {\n  position: relative;\n}\n\n.dropMenu:hover .menuBtn {\n  color: #ffaa0c;\n}\n\n.dropMenu:hover .dropList {\n  display: block;\n}\n\n.mainMenu {\n  background-color: #5a5a5a;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px 0 #222;\n  z-index: 200;\n}\n\n.mainMenu .menuItem__content {\n  color: #fff;\n}\n\nh2 {\n  background: #fff;\n  padding: 10px;\n  margin: 0;\n  border-bottom: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy5jc3MiLCIvaG9tZS9taXJlaGlrby93b3JrL2FuZ3VsYXIvYW5nYXBwL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBNEI7RUFBNUIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQ3pHQSw4RUFBQTs7QUFFQTs7RUFFRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREY7O0FETUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTs7RUFFRSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDSEY7O0FETUE7O0VBR0UsY0FBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0FDSkY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNMRjs7QURRQTtFQUNFLHlCQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7QUNMRjs7QURVQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUNQRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpZXJfX2NvbnRhaW5lciAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm5vdGlmaWVyX19jb250YWluZXItbGlzdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTAwMDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcbiAgb3BhY2l0eTogLjU7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uOmhvdmVyLCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uOmZvY3VzIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuODIpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZGVmYXVsdCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOTUzNEY7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZXJyb3IgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0taW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0taW5mbyAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1zdWNjZXNzIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHtcbiAgZmlsbDogI0ZGRjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLXdhcm5pbmcgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuIiwiQGltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy5jc3NcIjtcblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5odG1sLFxuYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljZTRjO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogNjBweCAxNXB4IDUwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vLyDQvtGB0L3QvtCy0L3Ri9C1INGB0YLQuNC70Lgg0LTQu9GPINC90LDQstC40LPQsNGG0LjQuFxuXG4ubWVudSB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1lbnVfX2l0ZW0ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51IC5tZW51SXRlbV9fY29udGVudCxcbi5tZW51QnRuIHtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ubWVudSAubWVudUl0ZW1fX2NvbnRlbnQ6aG92ZXIsXG4ubWVudSAubWVudUJ0bjpob3ZlciB7XG4gIC8vIGNvbG9yOiAjMGNkY2ZmO1xuICBjb2xvcjogI2ZmYWEwYztcbn1cblxuLm1lbnVfX2l0ZW0gLm1lbnVJdGVtX19jb250ZW50IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLm1lbnVCcmFuZCAubWVudUl0ZW1fX2NvbnRlbnQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWVudUJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1lbnVCdG4gKiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4vL2Ryb3Bcbi5kcm9wTGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uZHJvcExpc3RfX2l0ZW0ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uZHJvcExpc3RfX2l0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGIzO1xufVxuXG4uZHJvcExpc3RfX2l0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWEwYztcbn1cblxuLmRyb3BNZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcE1lbnU6aG92ZXIgLm1lbnVCdG4ge1xuICBjb2xvcjogI2ZmYWEwYztcbn1cblxuLmRyb3BNZW51OmhvdmVyIC5kcm9wTGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vL2N1c3RvbSBtZW51XG5cbi5tYWluTWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgIzIyMjtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubWFpbk1lbnUgLm1lbnVJdGVtX19jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmgyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLy8gLnRhYmxlIHtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4vLyAgIHRkLFxuLy8gICB0aCB7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbi8vICAgICBwYWRkaW5nOiAzcHggMTBweDtcbi8vICAgfVxuLy8gICAuc3RhdHVzLFxuLy8gICAuY29udHJvbHMge1xuLy8gICAgIHdpZHRoOiAxMDBweDtcbi8vICAgfVxuLy8gfVxuIiwiQGltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy5jc3NcIjtcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWNlNGM7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiA2MHB4IDE1cHggNTBweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tZW51IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubWVudV9faXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUgLm1lbnVJdGVtX19jb250ZW50LFxuLm1lbnVCdG4ge1xuICBjb2xvcjogIzYxNjE2MTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5tZW51IC5tZW51SXRlbV9fY29udGVudDpob3Zlcixcbi5tZW51IC5tZW51QnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmZmFhMGM7XG59XG5cbi5tZW51X19pdGVtIC5tZW51SXRlbV9fY29udGVudCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5tZW51QnJhbmQgLm1lbnVJdGVtX19jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1lbnVCdG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tZW51QnRuICoge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRyb3BMaXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5kcm9wTGlzdF9faXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5kcm9wTGlzdF9faXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU0YjM7XG59XG5cbi5kcm9wTGlzdF9faXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYTBjO1xufVxuXG4uZHJvcE1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wTWVudTpob3ZlciAubWVudUJ0biB7XG4gIGNvbG9yOiAjZmZhYTBjO1xufVxuXG4uZHJvcE1lbnU6aG92ZXIgLmRyb3BMaXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYWluTWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgIzIyMjtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubWFpbk1lbnUgLm1lbnVJdGVtX19jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmgyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn0iXX0= */", '', '']]

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

module.exports = __webpack_require__(/*! /home/mirehiko/work/angular/angapp/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map