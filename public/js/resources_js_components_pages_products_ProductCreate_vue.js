(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_products_ProductCreate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductCreate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductCreate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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




var URL = _config_api__WEBPACK_IMPORTED_MODULE_0__.URI_BASE_API;
var RESOURCE = "products";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.getCategories();
  },
  data: function data() {
    return {
      product: {
        name: "",
        price: "",
        image: "",
        description: "",
        category_id: ""
      },
      money: {
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false
      },
      categories: [],
      error: {},
      errors: []
    };
  },
  components: {
    Money: v_money__WEBPACK_IMPORTED_MODULE_1__.Money
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
  methods: _objectSpread(_objectSpread({
    onChange: function onChange(e) {
      this.product.image = e.target.files[0];
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(["createProduct", "getProducts"])), {}, {
    addProduct: function addProduct() {
      var _this = this;

      this.$v.$touch();
      var formData = new FormData();
      formData.append("name", this.product.name);
      formData.append("price", this.product.price);
      formData.append("category_id", this.product.category_id);
      formData.append("description", this.product.description);

      if (this.product.image) {
        formData.append("image", this.product.image);
      }

      this.createProduct(formData).then(function (response) {
        console.log(response);

        if (response.status == 201) {
          _this.getProducts();

          _this.$refs.form.reset();

          $("#categories").val("").trigger("change");

          _this.$root.$emit("product", response);

          _this.$toast.open({
            message: "Produto cadastrado com sucesso!",
            type: "success",
            position: "bottom"
          });

          $("#spinner").addClass("d-none");

          _this.$router.push("/products");
        }
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
    getCategories: function getCategories() {
      var _this2 = this;

      axios.get("".concat(URL, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.CATEGORIES, "/getCategories"), {
        headers: {
          Authorization: "Bearer " + _config_api__WEBPACK_IMPORTED_MODULE_0__.TOKEN
        }
      }).then(function (response) {
        console.log(response.data);
        _this2.categories = response.data;
      });
    }
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

/***/ "./resources/js/components/pages/products/ProductCreate.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductCreate.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductCreate_vue_vue_type_template_id_025fa436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCreate.vue?vue&type=template&id=025fa436& */ "./resources/js/components/pages/products/ProductCreate.vue?vue&type=template&id=025fa436&");
/* harmony import */ var _ProductCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/ProductCreate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductCreate_vue_vue_type_template_id_025fa436___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductCreate_vue_vue_type_template_id_025fa436___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/ProductCreate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/ProductCreate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductCreate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductCreate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/products/ProductCreate.vue?vue&type=template&id=025fa436&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/ProductCreate.vue?vue&type=template&id=025fa436& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreate_vue_vue_type_template_id_025fa436___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreate_vue_vue_type_template_id_025fa436___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreate_vue_vue_type_template_id_025fa436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCreate.vue?vue&type=template&id=025fa436& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductCreate.vue?vue&type=template&id=025fa436&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductCreate.vue?vue&type=template&id=025fa436&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/products/ProductCreate.vue?vue&type=template&id=025fa436& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-tools" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-dark btn-sm",
                attrs: { to: "/products" }
              },
              [_c("i", { staticClass: "fas fa-undo-alt" }), _vm._v(" Voltar")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
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
                return _vm.addProduct($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "form-group col-sm-6" }, [
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
                            "\n                                O nome deve ter pelo menos\n                                " +
                              _vm._s(
                                _vm.$v.product.name.$params.minLength.min
                              ) +
                              "\n                                caracteres.\n                            "
                          )
                        ])
                      : _vm._e()
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-sm-3" }, [
                _c("label", { attrs: { for: "price" } }, [_vm._v("Valor")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.$v.product.price.$model,
                      expression: "$v.product.price.$model",
                      modifiers: { trim: true }
                    },
                    {
                      name: "money",
                      rawName: "v-money",
                      value: _vm.money,
                      expression: "money"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.$v.product.price.$error
                  },
                  attrs: { type: "text", name: "price", required: "" },
                  domProps: { value: _vm.$v.product.price.$model },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.$v.product.price,
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
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group col-sm-3" },
                [
                  _c("label", { attrs: { for: "categories" } }, [
                    _vm._v("Categoria")
                  ]),
                  _vm._v(" "),
                  _c(
                    "Select2",
                    {
                      attrs: {
                        options: _vm.categories,
                        value: _vm.product.category_id,
                        name: "category_id",
                        id: "categories"
                      },
                      model: {
                        value: _vm.product.category_id,
                        callback: function($$v) {
                          _vm.$set(_vm.product, "category_id", $$v)
                        },
                        expression: "product.category_id"
                      }
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Selecione")
                      ])
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mt-2" }, [
              _c("input", {
                ref: "file",
                attrs: { type: "file", name: "image" },
                on: { change: _vm.onChange }
              })
            ]),
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
                attrs: { type: "text" },
                domProps: { value: _vm.product.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.product, "description", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._m(1)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "card-title mb-0" }, [
      _c("i", { staticClass: "fas fa-barcode mr-2" }),
      _vm._v(" Novo Produto\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("span", {
          staticClass: "spinner-border spinner-border-sm d-none",
          attrs: { role: "status", id: "spinner", "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")]),
        _vm._v("\n                        Salvar\n                    ")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);