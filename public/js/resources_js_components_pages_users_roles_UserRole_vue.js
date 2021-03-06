(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_users_roles_UserRole_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/users/roles/UserRole.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/users/roles/UserRole.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/api */ "./resources/js/config/api.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      name: {},
      roles: {}
    };
  },
  mounted: function mounted() {
    this.getRoleById();
    this.getRoles();
  },
  methods: {
    getRoleById: function getRoleById() {
      var _this = this;

      var token = window.localStorage.getItem("token");
      axios.get("".concat(URL, "/").concat(RESOURCE, "/").concat(this.$route.params.id), {
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(function (response) {
        _this.name = response.data.data.name;
      });
    },
    getRoles: function getRoles() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var token = window.localStorage.getItem("token");
      axios.get("".concat(URL, "/users/").concat(this.$route.params.id, "/roules?page=") + page, {
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(function (response) {
        _this2.permissions = response.data;
      });
    },
    detachRole: function detachRole(id) {
      var _this3 = this;

      var token = window.localStorage.getItem("token");
      axios.get("".concat(URL, "/roles/").concat(this.$route.params.id, "/users/").concat(id, "/detach"), {
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(function () {
        _this3.getPermissions();

        _this3.$toast.open({
          message: "Cargo desvinculada com sucesso!",
          type: "success",
          position: "bottom"
        });
      })["catch"](function (e) {
        _this3.$toast.open({
          message: "Ops! Algo deu errado...<br>Tente novamente!",
          type: "error",
          position: "bottom"
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/pages/users/roles/UserRole.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/pages/users/roles/UserRole.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserRole_vue_vue_type_template_id_d3323320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRole.vue?vue&type=template&id=d3323320& */ "./resources/js/components/pages/users/roles/UserRole.vue?vue&type=template&id=d3323320&");
/* harmony import */ var _UserRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRole.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/users/roles/UserRole.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserRole_vue_vue_type_template_id_d3323320___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserRole_vue_vue_type_template_id_d3323320___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/users/roles/UserRole.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/users/roles/UserRole.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/users/roles/UserRole.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/users/roles/UserRole.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/users/roles/UserRole.vue?vue&type=template&id=d3323320&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/users/roles/UserRole.vue?vue&type=template&id=d3323320& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRole_vue_vue_type_template_id_d3323320___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRole_vue_vue_type_template_id_d3323320___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRole_vue_vue_type_template_id_d3323320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserRole.vue?vue&type=template&id=d3323320& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/users/roles/UserRole.vue?vue&type=template&id=d3323320&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/users/roles/UserRole.vue?vue&type=template&id=d3323320&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/users/roles/UserRole.vue?vue&type=template&id=d3323320& ***!
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
      { staticClass: "card" },
      [
        _c("preloader"),
        _vm._v(" "),
        _c("div", { staticClass: "card-header" }, [
          _c("h3", { staticClass: "card-title mb-0" }, [
            _c("i", { staticClass: "fas fa-id-badge mr-2" }),
            _vm._v(" Cargo do Usu??rio -\n                "),
            _c("strong", [_vm._v(_vm._s(_vm.name))])
          ]),
          _vm._v(" "),
          _vm._m(0)
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
                attrs: {
                  to: "/users/" + this.$route.params.id + "/roles/available"
                }
              },
              [_vm._v("Vincular Cargo\n            ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "float-right", attrs: { to: "/users" } },
              [
                _c(
                  "b-button",
                  {
                    attrs: {
                      pill: "",
                      variant: "outline-secondary",
                      size: "sm"
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-undo-alt" }),
                    _vm._v(" Voltar")
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                { staticClass: "table table-hover table-borderless" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.roles.data, function(role) {
                      return _c("tr", { key: role.id, attrs: { row: role } }, [
                        _c("td", { staticClass: "text-center align-middle" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(role.id) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "align-middle" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(role.name) +
                              "\n                            "
                          )
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
                        _c("td", { staticClass: "align-middle text-center" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.detachPermission(role.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-unlink mr-1" }),
                              _vm._v(
                                "\n                                    Desvincular\n                                "
                              )
                            ]
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "pagination pagination-sm justify-content-center"
              },
              [
                _c("pagination", {
                  attrs: { data: _vm.roles },
                  on: { "pagination-change-page": _vm.getRoles }
                })
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-tools" }, [
      _c("div", { staticClass: "input-group input-group-sm" }, [
        _c("input", {
          staticClass: "form-control float-right",
          attrs: { type: "text", name: "q", placeholder: "Pesquisa" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "input-group-append" }, [
          _c(
            "button",
            { staticClass: "btn btn-default", attrs: { type: "submit" } },
            [_c("i", { staticClass: "fas fa-search" })]
          )
        ])
      ])
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
        _c("th", [_vm._v("Cargo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descri????o")]),
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