(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_roles_RoleList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/api */ "./resources/js/config/api.js");
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



var URL = _config_api__WEBPACK_IMPORTED_MODULE_0__.URI_BASE_API;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    role: {
      type: Object
    }
  },
  data: function data() {
    return {
      errors: []
    };
  },
  validations: {
    role: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__.minLength)(5)
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(["getRoles", "updateRole"])), {}, {
    editRole: function editRole() {
      var _this = this;

      this.$v.$touch();
      var token = window.localStorage.getItem("token");
      axios.put("".concat(URL, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.ROLES, "/").concat(this.role.id), this.role, {
        headers: {
          Authorization: "Bearer " + _config_api__WEBPACK_IMPORTED_MODULE_0__.TOKEN
        }
      }).then(function (response) {
        _this.getRoles();

        _this.$root.$emit("role", response);

        _this.close();

        _this.$toast.open({
          message: "Cargo atualizado com sucesso!",
          type: "info",
          position: "bottom"
        });
      })["catch"](function (e) {
        _this.errors = e.response.data.errors || {};

        _this.$toast.open({
          message: "Ops! Algo deu errado...<br>Preencha os campos obrigatórios!",
          type: "error",
          position: "bottom"
        });
      });
    },
    close: function close() {
      this.$emit("close");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _RoleEdit_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoleEdit.vue */ "./resources/js/components/pages/roles/RoleEdit.vue");
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




var URL = _config_api__WEBPACK_IMPORTED_MODULE_0__.URI_BASE_API;
var RESOURCE = "roles";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["data"],
  data: function data() {
    return {
      role: {},
      search: "",
      qty_filter: "",
      isModalVisible: false
    };
  },
  mounted: function mounted() {
    this.getRoles();
  },
  components: {
    modal: _RoleEdit_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  computed: {
    roles: function roles() {
      return this.$store.state.roles.items;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(["getRoles", "getRole"])), {}, {
    showModal: function showModal(id) {
      var _this = this;

      this.getRole(id).then(function (response) {
        _this.role = response.data.data;
        _this.isModalVisible = true;
      });
    },
    closeModal: function closeModal() {
      this.isModalVisible = false;
    },
    searchUnit: lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(function () {
      var _this2 = this;

      var token = window.localStorage.getItem("token");

      if (this.search != "") {
        axios.get("".concat(URL, "/").concat(RESOURCE, "/search?q=") + this.search, {
          headers: {
            Authorization: "Bearer " + token
          }
        }).then(function (response) {
          _this2.roles.data = response.data;
          _this2.qty_filter = response.data;
        });
      } else {
        this.getRoles();
      }
    })
  })
});

/***/ }),

/***/ "./resources/js/components/pages/roles/RoleEdit.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/roles/RoleEdit.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RoleEdit_vue_vue_type_template_id_d377ea70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleEdit.vue?vue&type=template&id=d377ea70& */ "./resources/js/components/pages/roles/RoleEdit.vue?vue&type=template&id=d377ea70&");
/* harmony import */ var _RoleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/roles/RoleEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RoleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RoleEdit_vue_vue_type_template_id_d377ea70___WEBPACK_IMPORTED_MODULE_0__.render,
  _RoleEdit_vue_vue_type_template_id_d377ea70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/roles/RoleEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/roles/RoleList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/roles/RoleList.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RoleList_vue_vue_type_template_id_f2083948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleList.vue?vue&type=template&id=f2083948& */ "./resources/js/components/pages/roles/RoleList.vue?vue&type=template&id=f2083948&");
/* harmony import */ var _RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleList.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/roles/RoleList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RoleList_vue_vue_type_template_id_f2083948___WEBPACK_IMPORTED_MODULE_0__.render,
  _RoleList_vue_vue_type_template_id_f2083948___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/roles/RoleList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/roles/RoleEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/roles/RoleEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoleEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/roles/RoleList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/roles/RoleList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoleList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/roles/RoleEdit.vue?vue&type=template&id=d377ea70&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/roles/RoleEdit.vue?vue&type=template&id=d377ea70& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_template_id_d377ea70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_template_id_d377ea70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_template_id_d377ea70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoleEdit.vue?vue&type=template&id=d377ea70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleEdit.vue?vue&type=template&id=d377ea70&");


/***/ }),

/***/ "./resources/js/components/pages/roles/RoleList.vue?vue&type=template&id=f2083948&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/roles/RoleList.vue?vue&type=template&id=f2083948& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_f2083948___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_f2083948___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_f2083948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoleList.vue?vue&type=template&id=f2083948& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleList.vue?vue&type=template&id=f2083948&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleEdit.vue?vue&type=template&id=d377ea70&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleEdit.vue?vue&type=template&id=d377ea70& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                _c("i", { staticClass: "fas fa-id-card-alt mr-1" }),
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.role.name) +
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
                attrs: { method: "put", novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.editRole($event)
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
                          value: _vm.$v.role.name.$model,
                          expression: "$v.role.name.$model",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control text-capitalize",
                      class: {
                        "is-invalid": _vm.$v.role.name.$error
                      },
                      attrs: { type: "text", name: "name", required: "" },
                      domProps: { value: _vm.$v.role.name.$model },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.$v.role.name,
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
                            value: _vm.$v.role.name.$error,
                            expression: "$v.role.name.$error"
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
                        !_vm.$v.role.name.minLength
                          ? _c("small", { class: ["text-danger"] }, [
                              _vm._v(
                                "\n                                    O nome deve ter pelo menos\n                                    " +
                                  _vm._s(
                                    _vm.$v.role.name.$params.minLength.min
                                  ) +
                                  "\n                                    caracteres.\n                                "
                              )
                            ])
                          : _vm._e()
                      ]
                    )
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
                          value: _vm.role.description,
                          expression: "role.description"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.role.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.role, "description", $event.target.value)
                        }
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
                      on: { click: _vm.close }
                    },
                    [
                      _vm._v(
                        "\n                            Fechar\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", disabled: this.$v.$invalid }
                    },
                    [
                      _vm._v(
                        "\n                            Salvar\n                        "
                      )
                    ]
                  )
                ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleList.vue?vue&type=template&id=f2083948&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/RoleList.vue?vue&type=template&id=f2083948& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: "/roles-create" }
                },
                [_vm._v("Novo Cargo\n            ")]
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
                              " cargos\n                            encontrado(s)"
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.roles.data, function(role) {
                        return _c(
                          "tr",
                          { key: role.id, attrs: { row: role } },
                          [
                            _c(
                              "td",
                              { staticClass: "text-center align-middle" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(role.id) +
                                    "\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _vm._v(_vm._s(role.name))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(role.description) +
                                  "\n                            "
                              )
                            ]),
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
                                        value: "Editar Perfil",
                                        expression: "'Editar Perfil'",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    attrs: { variant: "primary" },
                                    on: {
                                      click: function($event) {
                                        return _vm.showModal(role.id)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-pen" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip",
                                        value: "Permissões",
                                        expression: "'Permissões'"
                                      }
                                    ],
                                    staticClass: "btn btn-secondary text-white",
                                    attrs: {
                                      to: "/roles/" + role.id + "/permissions"
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-lock" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip",
                                        value: "Usuários",
                                        expression: "'Usuários'"
                                      }
                                    ],
                                    staticClass: "btn btn-secondary text-white",
                                    attrs: {
                                      to: "/roles/" + role.id + "/users"
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-users" })]
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
                      attrs: { data: _vm.roles },
                      on: { "pagination-change-page": _vm.getRoles }
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
        attrs: { role: _vm.role },
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
      _c("i", { staticClass: "fas fa-id-card-alt mr-2" }),
      _vm._v(" Cargos\n            ")
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
        _c("th", [_vm._v("Descrição")]),
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