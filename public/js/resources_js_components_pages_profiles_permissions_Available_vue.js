(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_profiles_permissions_Available_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/api */ "./resources/js/config/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var RESOURCE = "permissions";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id_permission: [],
      permissions: [],
      name: {}
    };
  },
  mounted: function mounted() {
    this.getProfileById();
    this.getPermissions();
  },
  methods: {
    getProfileById: function getProfileById() {
      var _this = this;

      var token = window.localStorage.getItem("token");
      axios.get("".concat(URL, "/profiles/").concat(this.$route.params.id), {
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(function (response) {
        _this.name = response.data.data.name;
      });
    },
    getPermissions: function getPermissions() {
      var _this2 = this;

      var token = window.localStorage.getItem("token");
      axios.get("".concat(URL, "/profiles/").concat(this.$route.params.id, "/permissions/available"), {
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(function (response) {
        console.log(response.data.data);
        _this2.permissions = response.data.data;
      });
    },
    addPermission: function addPermission() {
      var _this3 = this;

      var token = window.localStorage.getItem("token");
      axios.post("".concat(URL, "/profiles/").concat(this.$route.params.id, "/permissions"), this.id_permission, {
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(function () {
        _this3.$router.push("/profiles");

        _this3.$toast.open({
          message: "Permiss??o vinculada com sucesso!",
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

/***/ "./resources/js/components/pages/profiles/permissions/Available.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/profiles/permissions/Available.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Available_vue_vue_type_template_id_2ac502ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Available.vue?vue&type=template&id=2ac502ef& */ "./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=template&id=2ac502ef&");
/* harmony import */ var _Available_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Available.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Available_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Available_vue_vue_type_template_id_2ac502ef___WEBPACK_IMPORTED_MODULE_0__.render,
  _Available_vue_vue_type_template_id_2ac502ef___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/profiles/permissions/Available.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Available_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Available.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Available_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=template&id=2ac502ef&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=template&id=2ac502ef& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Available_vue_vue_type_template_id_2ac502ef___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Available_vue_vue_type_template_id_2ac502ef___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Available_vue_vue_type_template_id_2ac502ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Available.vue?vue&type=template&id=2ac502ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=template&id=2ac502ef&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=template&id=2ac502ef&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/profiles/permissions/Available.vue?vue&type=template&id=2ac502ef& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
            _vm._v(
              " Permiss??es do Perfil -\n                " +
                _vm._s(_vm.name) +
                "\n            "
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "form",
              {
                attrs: { method: "POST" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addPermission($event)
                  }
                }
              },
              [
                _c(
                  "table",
                  { staticClass: "table table-hover table-borderless" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.permissions, function(permission) {
                        return _c("tr", { key: permission.id }, [
                          _c(
                            "td",
                            { staticClass: "align-middle text-center" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.id_permission,
                                    expression: "id_permission"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  name: "permissions[]"
                                },
                                domProps: {
                                  value: permission.id,
                                  checked: Array.isArray(_vm.id_permission)
                                    ? _vm._i(_vm.id_permission, permission.id) >
                                      -1
                                    : _vm.id_permission
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.id_permission,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = permission.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.id_permission = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.id_permission = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.id_permission = $$c
                                    }
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(permission.name) +
                                "\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "align-middle" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(permission.description) +
                                "\n                                "
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ])
        ])
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
        _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nome")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descri????o")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-primary btn-sm" }, [
      _c("i", { staticClass: "fas fa-link mr-1" }),
      _vm._v(" Vincular\n                    ")
    ])
  }
]
render._withStripped = true



/***/ })

}]);