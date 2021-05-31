(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_products_ProductList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api */ "./resources/js/config/api.js");
/* harmony import */ var v_money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-money */ "./node_modules/v-money/dist/v-money.js");
/* harmony import */ var v_money__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_money__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var URL = _config_api__WEBPACK_IMPORTED_MODULE_0__.URI_BASE_API;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    product: {
      type: Object
    }
  },
  data: function data() {
    return {
      errors: [],
      message: false,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false
      }
    };
  },
  validations: {
    product: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(5)
      },
      price: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(["getProducts", "updateProduct"])), {}, {
    onChange: function onChange(e) {
      this.image = e.target.files[0];
    },
    editProduct: function editProduct() {
      var _this = this;

      this.$v.$touch();
      var formData = new FormData();
      formData.append("name", this.product.name);
      formData.append("price", this.product.price);
      formData.append("description", this.product.description);
      formData.append("active", this.product.active ? 1 : 0);

      if (this.image) {
        formData.append("image", this.image);
      }

      formData.append("_method", "PUT");
      axios.post("".concat(URL, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.PRODUCTS, "/") + this.product.id, formData, {
        headers: {
          Authorization: "Bearer " + _config_api__WEBPACK_IMPORTED_MODULE_0__.TOKEN,
          "content-type": "multipart/form-data"
        }
      }).then(function (response) {
        console.log(response);

        _this.getProducts();

        _this.$refs.form.reset();

        _this.$root.$emit("product", response);

        _this.close();

        _this.$toast.open({
          message: "Produto atualizado com sucesso!",
          type: "info",
          position: "bottom"
        });
      })["catch"](function (e) {
        _this.errors = e.response.data.errors;

        if (_this.errors.image) {
          _this.$toast.open({
            message: "Arquivo inválido, você deve selecionar uma imagem!",
            type: "error",
            position: "bottom"
          });
        }
      });
    },
    close: function close() {
      this.$emit("close");
      this.message = false;
    },
    msgDelete: function msgDelete() {
      this.message = true;
    },
    deleteProduct: function deleteProduct(id) {
      var _this2 = this;

      axios["delete"]("".concat(URL, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.PRODUCTS, "/").concat(id), {
        headers: {
          Authorization: "Bearer " + _config_api__WEBPACK_IMPORTED_MODULE_0__.TOKEN
        }
      }).then(function () {
        _this2.close();

        _this2.$toast.open({
          message: "Produto excluído com sucesso!",
          type: "info",
          position: "bottom"
        });

        _this2.getProducts();
      });
    },
    handleFileObject: function handleFileObject() {
      this.image = this.$refs.file.files[0];
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api */ "./resources/js/config/api.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductEdit */ "./resources/js/components/pages/products/ProductEdit.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var URL = _config_api__WEBPACK_IMPORTED_MODULE_0__.URI_BASE_API;
var RESOURCE = "products";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["data"],
  data: function data() {
    return {
      visible: false,
      product: {},
      search: "",
      qty_filter: "",
      isModalVisible: false
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  components: {
    modal: _ProductEdit__WEBPACK_IMPORTED_MODULE_2__.default
  },
  computed: {
    products: function products() {
      return this.$store.state.products.items;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(["getProducts", "getProduct"])), {}, {
    showModal: function showModal(id) {
      var _this = this;

      this.getProduct(id).then(function (response) {
        _this.product = response.data.data;
        _this.isModalVisible = true;
      });
    },
    closeModal: function closeModal() {
      this.isModalVisible = false;
    },
    searchUnit: lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(function () {
      var _this2 = this;

      if (this.search != "") {
        axios.get("".concat(URL, "/").concat(RESOURCE, "/search?q=") + this.search, {
          headers: {
            Authorization: "Bearer " + _config_api__WEBPACK_IMPORTED_MODULE_0__.TOKEN
          }
        }).then(function (response) {
          _this2.products.data = response.data;
          _this2.qty_filter = response.data;
        });
      } else {
        this.getProducts();
      }
    })
  })
});

/***/ }),

/***/ "./node_modules/v-money/dist/v-money.js":
/*!**********************************************!*\
  !*** ./node_modules/v-money/dist/v-money.js ***!
  \**********************************************/
/***/ (function(module) {

(function(e,t){ true?module.exports=t():0})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){"use strict";var r=n(2),i=n(5),u=n(0);t.a=function(e,t){if(t.value){var o=n.i(i.a)(u.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.a)(e.value,o),t=Math.max(t,o.suffix.length),t=e.value.length-t,t=Math.max(t,o.prefix.length+1),n.i(r.b)(e,t),e.dispatchEvent(n.i(r.c)("change"))},e.onfocus=function(){n.i(r.b)(e,e.value.length-o.suffix.length)},e.oninput(),e.dispatchEvent(n.i(r.c)("input"))}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=u(e),i=c(r,t.precision),a=d(i).split("."),p=a[0],l=a[1];return p=f(p,t.thousands),t.prefix+n+s(p,l,t.decimal)+t.suffix}function i(e,t){var n=e.indexOf("-")>=0?-1:1,r=u(e),i=c(r,t);return parseFloat(i)*n}function u(e){return d(e).replace(/\D+/g,"")||"0"}function o(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(o(t))}function f(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function s(e,t,n){return t?e+n+t:e}function d(e){return e?e.toString():""}function p(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function l(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var m=n(0);n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return l})},function(e,t,n){"use strict";function r(e,t){t&&Object.keys(t).map(function(e){a.a[e]=t[e]}),e.directive("money",o.a),e.component("money",u.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(t,"Money",function(){return u.a}),n.d(t,"VMoney",function(){return o.a}),n.d(t,"options",function(){return a.a}),n.d(t,"VERSION",function(){return c});var c="0.8.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(u.a)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(u.d)(e.target.value,this.precision))}}}},function(e,t,n){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,u=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:u,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});

/***/ }),

/***/ "./resources/js/components/pages/products/ProductEdit.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductEdit.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductEdit_vue_vue_type_template_id_3f5f7ac4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductEdit.vue?vue&type=template&id=3f5f7ac4& */ "./resources/js/components/pages/products/ProductEdit.vue?vue&type=template&id=3f5f7ac4&");
/* harmony import */ var _ProductEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/ProductEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductEdit_vue_vue_type_template_id_3f5f7ac4___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductEdit_vue_vue_type_template_id_3f5f7ac4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/ProductEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/ProductList.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductList.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductList_vue_vue_type_template_id_30175358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.vue?vue&type=template&id=30175358& */ "./resources/js/components/pages/products/ProductList.vue?vue&type=template&id=30175358&");
/* harmony import */ var _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/ProductList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductList_vue_vue_type_template_id_30175358___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductList_vue_vue_type_template_id_30175358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/ProductList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/ProductEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/products/ProductList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/products/ProductEdit.vue?vue&type=template&id=3f5f7ac4&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductEdit.vue?vue&type=template&id=3f5f7ac4& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_template_id_3f5f7ac4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_template_id_3f5f7ac4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_template_id_3f5f7ac4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductEdit.vue?vue&type=template&id=3f5f7ac4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductEdit.vue?vue&type=template&id=3f5f7ac4&");


/***/ }),

/***/ "./resources/js/components/pages/products/ProductList.vue?vue&type=template&id=30175358&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductList.vue?vue&type=template&id=30175358& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_30175358___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_30175358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_30175358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductList.vue?vue&type=template&id=30175358& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductList.vue?vue&type=template&id=30175358&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductEdit.vue?vue&type=template&id=3f5f7ac4&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductEdit.vue?vue&type=template&id=3f5f7ac4& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "modal fade show",
        staticStyle: { "padding-right": "17px", display: "block" },
        attrs: {
          id: "modal-default",
          "aria-modal": "true",
          role: "dialog",
          name: "item-modal"
        }
      },
      [
        _c("preloader-card"),
        _vm._v(" "),
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h4", { staticClass: "modal-title" }, [
                _c("i", { staticClass: "fas fa-barcode mr-1" }),
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.product.name) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close"
                  },
                  on: { click: _vm.close }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                ref: "form",
                staticClass: "needs-validation",
                attrs: {
                  method: "post",
                  enctype: "multipart/form-data",
                  novalidate: ""
                },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.editProduct($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [_vm._v("Nome")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.$v.product.name.$model,
                          expression: "$v.product.name.$model",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control text-capitalize",
                      class: {
                        "is-invalid": _vm.$v.product.name.$error
                      },
                      attrs: { type: "text", name: "name", required: "" },
                      domProps: { value: _vm.$v.product.name.$model },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.$v.product.name,
                            "$model",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.$v.product.name.$error,
                            expression: "$v.product.name.$error"
                          }
                        ]
                      },
                      [
                        _vm.errors.name
                          ? _c("small", { class: ["text-danger"] }, [
                              _vm._v(_vm._s(_vm.errors.name[0]))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.product.name.minLength
                          ? _c("small", { class: ["text-danger"] }, [
                              _vm._v(
                                "\n                                    O nome deve ter pelo menos\n                                    " +
                                  _vm._s(
                                    _vm.$v.product.name.$params.minLength.min
                                  ) +
                                  "\n                                    caracteres.\n                                "
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "price" } }, [
                        _vm._v("Valor")
                      ]),
                      _vm._v(" "),
                      _c(
                        "money",
                        _vm._b(
                          {
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.$v.product.price.$error
                            },
                            attrs: { type: "text" },
                            model: {
                              value: _vm.$v.product.price.$model,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.$v.product.price,
                                  "$model",
                                  typeof $$v === "string" ? $$v.trim() : $$v
                                )
                              },
                              expression: "$v.product.price.$model"
                            }
                          },
                          "money",
                          _vm.money,
                          false
                        )
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.$v.product.price.$error,
                              expression: "$v.product.price.$error"
                            }
                          ]
                        },
                        [
                          _vm.errors.price
                            ? _c("small", { class: ["text-danger"] }, [
                                _vm._v(_vm._s(_vm.errors.price[0]))
                              ])
                            : _vm._e()
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "description" } }, [
                      _vm._v("Descrição")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product.description,
                          expression: "product.description"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", name: "description" },
                      domProps: { value: _vm.product.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.product,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      ref: "file",
                      attrs: { type: "file", name: "image" },
                      on: { change: _vm.onChange }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "form-inline" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.active,
                            expression: "product.active"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: {
                          type: "checkbox",
                          name: "active",
                          id: "flexCheckDefault"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.product.active)
                            ? _vm._i(_vm.product.active, null) > -1
                            : _vm.product.active
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.product.active,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.product,
                                    "active",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.product,
                                    "active",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.product, "active", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.product.active == 1 ? "Ativo" : "Inativo")
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group text-center" }, [
                    _c("img", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.product.image,
                          expression: "product.image"
                        }
                      ],
                      staticStyle: { "max-width": "70px" },
                      attrs: {
                        src: "/storage/" + _vm.product.image,
                        alt: _vm.product.name
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { type: "button", "data-dismiss": "modal" },
                      on: { click: _vm.msgDelete }
                    },
                    [
                      _vm._v(
                        "\n                            Excluir Produto\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { disabled: this.$v.$invalid }
                    },
                    [
                      _vm._v(
                        "\n                            Salvar\n                        "
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.message,
                    expression: "message"
                  }
                ],
                staticClass: "alert alert-danger m-2"
              },
              [
                _vm._v("\n                    Excluir "),
                _c("strong", [_vm._v(_vm._s(_vm.product.name))]),
                _vm._v("?\n                    "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-danger",
                    on: {
                      click: function($event) {
                        return _vm.deleteProduct(_vm.product.id)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Sim\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    on: { click: _vm.close }
                  },
                  [
                    _vm._v(
                      "\n                        Não\n                    "
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductList.vue?vue&type=template&id=30175358&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductList.vue?vue&type=template&id=30175358& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("preloader"),
          _vm._v(" "),
          _c("div", { staticClass: "card-header" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-tools" }, [
              _c("div", { staticClass: "input-group input-group-sm" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass: "form-control float-right",
                  attrs: { type: "text", name: "q", placeholder: "Pesquisa" },
                  domProps: { value: _vm.search },
                  on: {
                    keyup: _vm.searchUnit,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(1)
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-dark btn-sm mb-1 mt-1",
                  attrs: { to: "/products-create" }
                },
                [_vm._v("Novo Produto\n            ")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-borderless" },
                  [
                    _c("caption", [
                      _vm.search !== ""
                        ? _c("small", [
                            _c("b", [_vm._v(_vm._s(this.qty_filter.length))]),
                            _vm._v(
                              " produto(s)\n                            encontrado(s)"
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.products.data, function(product) {
                        return _c(
                          "tr",
                          {
                            key: product.id,
                            class: {
                              "text-danger": !product.active
                            },
                            attrs: { row: product }
                          },
                          [
                            _c(
                              "td",
                              { staticClass: "text-center align-middle" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(product.id) +
                                    "\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _vm._v(_vm._s(product.name))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _vm._v(
                                "\n                                R$ " +
                                  _vm._s(_vm._f("formatPrice")(product.price)) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(product.description) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "align-middle text-center" },
                              [
                                _c("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: product.image,
                                      expression: "product.image"
                                    }
                                  ],
                                  staticStyle: { "max-width": "50px" },
                                  attrs: {
                                    src: "/storage/" + product.image,
                                    alt: product.name
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "align-middle text-center" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        value: "Editar Produto",
                                        expression: "'Editar Produto'",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" },
                                    on: {
                                      click: function($event) {
                                        return _vm.showModal(product.id)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-pen" })]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "pagination pagination-sm justify-content-center"
                  },
                  [
                    _c("pagination", {
                      attrs: { data: _vm.products },
                      on: { "pagination-change-page": _vm.getProducts }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("modal", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isModalVisible,
            expression: "isModalVisible"
          }
        ],
        attrs: { product: _vm.product },
        on: { close: _vm.closeModal }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-title mb-0" }, [
      _c("i", { staticClass: "fas fa-barcode mr-2" }),
      _vm._v(" Produtos\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "btn btn-default", attrs: { type: "submit" } },
        [_c("i", { staticClass: "fas fa-search" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nome")]),
        _vm._v(" "),
        _c("th", [_vm._v("Valor")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descrição")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Foto")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _c("i", { staticClass: "fas fa-cogs" })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);