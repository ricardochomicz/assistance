(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_roles_permissions_RolePermissions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["data"],
  data: function data() {
    return {
      name: {},
      permissions: {}
    };
  },
  mounted: function mounted() {
    this.getRoleById();
    this.getPermissions();
  },
  methods: {
    getRoleById: function getRoleById() {
      var _this = this;

      axios.get("".concat(URL, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.ROLES, "/").concat(this.$route.params.id), {
        headers: {
          Authorization: "Bearer " + _config_api__WEBPACK_IMPORTED_MODULE_0__.TOKEN
        }
      }).then(function (response) {
        _this.name = response.data.data.name;
      });
    },
    getPermissions: function getPermissions() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("".concat(URL, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.ROLES, "/").concat(this.$route.params.id, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.PERMISSIONS, "?page=") + page, {
        headers: {
          Authorization: "Bearer " + _config_api__WEBPACK_IMPORTED_MODULE_0__.TOKEN
        }
      }).then(function (response) {
        _this2.permissions = response.data;
      });
    },
    detachPermission: function detachPermission(id) {
      var _this3 = this;

      axios.get("".concat(URL, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.ROLES, "/").concat(this.$route.params.id, "/").concat(_config_api__WEBPACK_IMPORTED_MODULE_0__.RESOURCES.PERMISSIONS, "/").concat(id, "/detach"), {
        headers: {
          Authorization: "Bearer " + _config_api__WEBPACK_IMPORTED_MODULE_0__.TOKEN
        }
      }).then(function () {
        _this3.getPermissions();

        _this3.$toast.open({
          message: "Permissão desvinculada com sucesso!",
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

/***/ "./resources/js/components/pages/roles/permissions/RolePermissions.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/roles/permissions/RolePermissions.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RolePermissions_vue_vue_type_template_id_f814c5aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RolePermissions.vue?vue&type=template&id=f814c5aa& */ "./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=template&id=f814c5aa&");
/* harmony import */ var _RolePermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolePermissions.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RolePermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RolePermissions_vue_vue_type_template_id_f814c5aa___WEBPACK_IMPORTED_MODULE_0__.render,
  _RolePermissions_vue_vue_type_template_id_f814c5aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/roles/permissions/RolePermissions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolePermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RolePermissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolePermissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=template&id=f814c5aa&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=template&id=f814c5aa& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolePermissions_vue_vue_type_template_id_f814c5aa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolePermissions_vue_vue_type_template_id_f814c5aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolePermissions_vue_vue_type_template_id_f814c5aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RolePermissions.vue?vue&type=template&id=f814c5aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=template&id=f814c5aa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=template&id=f814c5aa&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/roles/permissions/RolePermissions.vue?vue&type=template&id=f814c5aa& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
            _vm._v(" Permissões do Cargo -\n                "),
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
                  to:
                    "/roles/" + this.$route.params.id + "/permissions/available"
                }
              },
              [_vm._v("Vincular Permissão\n            ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "float-right", attrs: { to: "/profiles" } },
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
                    _vm._l(_vm.permissions.data, function(permission) {
                      return _c(
                        "tr",
                        { key: permission.id, attrs: { row: permission } },
                        [
                          _c(
                            "td",
                            { staticClass: "text-center align-middle" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(permission.id) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(permission.name) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(permission.description) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "align-middle text-center" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger btn-sm",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.detachPermission(permission.id)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-unlink mr-1"
                                  }),
                                  _vm._v(
                                    "\n                                    Desvincular\n                                "
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
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
                  attrs: { data: _vm.permissions },
                  on: { "pagination-change-page": _vm.getPermissions }
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
        _c("th", [_vm._v("Permissão")]),
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