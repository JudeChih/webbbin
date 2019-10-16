/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/
    __webpack_require__.i = function(value) { return value; };
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                    /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 426);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__(2),
            core = __webpack_require__(32),
            hide = __webpack_require__(16),
            redefine = __webpack_require__(17),
            ctx = __webpack_require__(33),
            PROTOTYPE = 'prototype';

        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F,
                IS_GLOBAL = type & $export.G,
                IS_STATIC = type & $export.S,
                IS_PROTO = type & $export.P,
                IS_BIND = type & $export.B,
                target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
                exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
                expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
                key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                // export native or passed
                out = (own ? target : source)[key];
                // bind timers to global for call from export context
                exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                // extend global
                if (target) redefine(target, key, out, type & $export.U);
                // export
                if (exports[key] != out) hide(exports, key, exp);
                if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
        };
        global.core = core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library` 
        module.exports = $export;

        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__(4);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
        };

        /***/
    }),
    /* 2 */
    /***/
    (function(module, exports) {

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
            window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

        /***/
    }),
    /* 3 */
    /***/
    (function(module, exports) {

        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };

        /***/
    }),
    /* 4 */
    /***/
    (function(module, exports) {

        module.exports = function(it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

        /***/
    }),
    /* 5 */
    /***/
    (function(module, exports, __webpack_require__) {

        var store = __webpack_require__(70)('wks'),
            uid = __webpack_require__(49),
            Symbol = __webpack_require__(2).Symbol,
            USE_SYMBOL = typeof Symbol == 'function';

        var $exports = module.exports = function(name) {
            return store[name] || (store[name] =
                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
        };

        $exports.store = store;

        /***/
    }),
    /* 6 */
    /***/
    (function(module, exports) {

        // this module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle

        module.exports = function normalizeComponent(
            rawScriptExports,
            compiledTemplate,
            scopeId,
            cssModules
        ) {
            var esModule
            var scriptExports = rawScriptExports = rawScriptExports || {}

            // ES6 modules interop
            var type = typeof rawScriptExports.default
            if (type === 'object' || type === 'function') {
                esModule = rawScriptExports
                scriptExports = rawScriptExports.default
            }

            // Vue.extend constructor export interop
            var options = typeof scriptExports === 'function' ?
                scriptExports.options :
                scriptExports

            // render functions
            if (compiledTemplate) {
                options.render = compiledTemplate.render
                options.staticRenderFns = compiledTemplate.staticRenderFns
            }

            // scopedId
            if (scopeId) {
                options._scopeId = scopeId
            }

            // inject cssModules
            if (cssModules) {
                var computed = Object.create(options.computed || null)
                Object.keys(cssModules).forEach(function(key) {
                    var module = cssModules[key]
                    computed[key] = function() { return module }
                })
                options.computed = computed
            }

            return {
                esModule: esModule,
                exports: scriptExports,
                options: options
            }
        }


        /***/
    }),
    /* 7 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        // blobs module getters list
        var getBlobs = exports.getBlobs = 'getBlobs';
        var getCreateFolderBlobVisibility = exports.getCreateFolderBlobVisibility = 'getCreateFolderBlobVisibility';
        var getDisplayType = exports.getDisplayType = 'getDisplayType';
        var getIsAnyBlobInRenameMode = exports.getIsAnyBlobInRenameMode = 'getIsAnyBlobInRenameMode';
        var getIsAnyBlobInSelectedMode = exports.getIsAnyBlobInSelectedMode = 'getIsAnyBlobInSelectedMode';
        var getNewFolder = exports.getNewFolder = 'getNewFolder';
        var getSelectedBlob = exports.getSelectedBlob = 'getSelectedBlob';
        var getDisplayFilter = exports.getDisplayFilter = 'getDisplayFilter';

        // breadcrumb module getters list
        var getPath = exports.getPath = 'getPath';
        var getPathUp = exports.getPathUp = 'getPathUp';
        var isLoading = exports.isLoading = 'isLoading';

        // tree module getters list
        var getTree = exports.getTree = 'getTree';

        // uploads module getters list
        var getUploads = exports.getUploads = 'getUploads';
        var getUploadsCount = exports.getUploadsCount = 'getUploadsCount';

        /***/
    }),
    /* 8 */
    /***/
    (function(module, exports, __webpack_require__) {

        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(3)(function() {
            return Object.defineProperty({}, 'a', { get: function() { return 7; } }).a != 7;
        });

        /***/
    }),
    /* 9 */
    /***/
    (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__(1),
            IE8_DOM_DEFINE = __webpack_require__(114),
            toPrimitive = __webpack_require__(30),
            dP = Object.defineProperty;

        exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) { /* empty */ }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
        };

        /***/
    }),
    /* 10 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.1.15 ToLength
        var toInteger = __webpack_require__(38),
            min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
    }),
    /* 11 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        // blobs module actions list
        var deleteBlob = exports.deleteBlob = 'deleteBlob';
        var fetchContent = exports.fetchContent = 'fetchContent';
        var openBlob = exports.openBlob = 'openBlob';
        var saveBlob = exports.saveBlob = 'renameBlob';

        // breadcrumb module actions list
        var changePath = exports.changePath = 'changePath';

        // tree module actions list
        var fetchTree = exports.fetchTree = 'fetchTree';

        // uploads module actions list
        var addUploads = exports.addUploads = 'addUploads';
        var uploadAllFiles = exports.uploadAllFiles = 'uploadAllFiles';
        var uploadFile = exports.uploadFile = 'uploadFile';

        /***/
    }),
    /* 12 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(25);
        module.exports = function(it) {
            return Object(defined(it));
        };

        /***/
    }),
    /* 13 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var settings = document.getElementById('settings');

        /**
         * Get setting configuration from app headers.
         * @param {string} key Settings attribute key.
         * @param {boolean} [asJson] Parse value as json object.
         * @returns {string}
         */
        var getSettings = function getSettings(key) {
            var asJson = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var strValue = settings.getAttribute('data-' + key);
            if (asJson) {
                return JSON.parse(strValue.replaceAll('\'', '"'));
            }

            return strValue;
        };

        var mediaTypes = {
            file: 'file',
            dir: 'dir',
            image: 'image',
            media: 'media',
            document: 'document'
        };

        exports.default = {
            authorization: getSettings('authorization', true),
            dirIcon: getSettings('dir-icon-url'),
            filesUrl: getSettings('files-url'),
            foldersUrl: getSettings('folders-url'),
            iconDir: getSettings('icon-dir'),
            params: getSettings('params', true),
            treeUrl: getSettings('tree-url'),

            /**
             * Gets icon absolute URL depending on name.
             * @param {string} name
             * @returns {string|null}
             */
            icon: function icon(name) {
                return name ? '' + this.iconDir + name + '.png' : null;
            },


            /**
             * Gets current configuration target editor.
             * @returns {string}
             */
            target: function target() {
                if (this.params && this.params.target) {
                    return this.params.target.toLowerCase();
                }

                return 'input';
            },


            /**
             * Available media types.
             * @var {object}
             */
            mediaTypes: mediaTypes,

            /**
             * Get currently available media type.
             * @returns {string}
             */
            mediaType: function mediaType() {
                if (this.params && this.params.type && mediaTypes[this.params.type]) {
                    return this.params.type;
                }

                return mediaTypes.file;
            },


            /**
             * User defined callback name for file select.
             * @returns {boolean}
             */
            callback: function callback() {
                if (this.params && this.params.callback) {
                    return this.params.callback;
                }

                return false;
            },


            /**
             * Get scoped image size or false if it is not set.
             * @return {Boolean|String}
             */
            imageSize: function imageSize() {
                if (this.mediaType() === mediaTypes.image && this.params && this.params.select) {
                    return this.params.select;
                }

                return false;
            }
        };

        /***/
    }),
    /* 14 */
    /***/
    (function(module, exports) {

        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };

        /***/
    }),
    /* 15 */
    /***/
    (function(module, exports) {

        module.exports = function(it) {
            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
            return it;
        };

        /***/
    }),
    /* 16 */
    /***/
    (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__(9),
            createDesc = __webpack_require__(37);
        module.exports = __webpack_require__(8) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };

        /***/
    }),
    /* 17 */
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__(2),
            hide = __webpack_require__(16),
            has = __webpack_require__(14),
            SRC = __webpack_require__(49)('src'),
            TO_STRING = 'toString',
            $toString = Function[TO_STRING],
            TPL = ('' + $toString).split(TO_STRING);

        __webpack_require__(32).inspectSource = function(it) {
            return $toString.call(it);
        };

        (module.exports = function(O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction) has(val, 'name') || hide(val, 'name', key);
            if (O[key] === val) return;
            if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === global) {
                O[key] = val;
            } else {
                if (!safe) {
                    delete O[key];
                    hide(O, key, val);
                } else {
                    if (O[key]) O[key] = val;
                    else hide(O, key, val);
                }
            }
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || $toString.call(this);
        });

        /***/
    }),
    /* 18 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            fails = __webpack_require__(3),
            defined = __webpack_require__(25),
            quot = /"/g;
        // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
        var createHTML = function(string, tag, attribute, value) {
            var S = String(defined(string)),
                p1 = '<' + tag;
            if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
            return p1 + '>' + S + '</' + tag + '>';
        };
        module.exports = function(NAME, exec) {
            var O = {};
            O[NAME] = exec(createHTML);
            $export($export.P + $export.F * fails(function() {
                var test = '' [NAME]('"');
                return test !== test.toLowerCase() || test.split('"').length > 3;
            }), 'String', O);
        };

        /***/
    }),
    /* 19 */
    /***/
    (function(module, exports, __webpack_require__) {

        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(57),
            defined = __webpack_require__(25);
        module.exports = function(it) {
            return IObject(defined(it));
        };

        /***/
    }),
    /* 20 */
    /***/
    (function(module, exports) {

        /*
        	MIT License http://www.opensource.org/licenses/mit-license.php
        	Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        module.exports = function() {
            var list = [];

            // return the list of modules as css string
            list.toString = function toString() {
                var result = [];
                for (var i = 0; i < this.length; i++) {
                    var item = this[i];
                    if (item[2]) {
                        result.push("@media " + item[2] + "{" + item[1] + "}");
                    } else {
                        result.push(item[1]);
                    }
                }
                return result.join("");
            };

            // import a list of modules into the list
            list.i = function(modules, mediaQuery) {
                if (typeof modules === "string")
                    modules = [
                        [null, modules, ""]
                    ];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (typeof id === "number")
                        alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        } else if (mediaQuery) {
                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };


        /***/
    }),
    /* 21 */
    /***/
    (function(module, exports, __webpack_require__) {

        /*
          MIT License http://www.opensource.org/licenses/mit-license.php
          Author Tobias Koppers @sokra
          Modified by Evan You @yyx990803
        */

        var hasDocument = typeof document !== 'undefined'

        if (typeof DEBUG !== 'undefined' && DEBUG) {
            if (!hasDocument) {
                throw new Error(
                    'vue-style-loader cannot be used in a non-browser environment. ' +
                    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
                )
            }
        }

        var listToStyles = __webpack_require__(423)

        /*
        type StyleObject = {
          id: number;
          parts: Array<StyleObjectPart>
        }

        type StyleObjectPart = {
          css: string;
          media: string;
          sourceMap: ?string
        }
        */

        var stylesInDom = {
            /*
              [id: number]: {
                id: number,
                refs: number,
                parts: Array<(obj?: StyleObjectPart) => void>
              }
            */
        }

        var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
        var singletonElement = null
        var singletonCounter = 0
        var isProduction = false
        var noop = function() {}

        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

        module.exports = function(parentId, list, _isProduction) {
            isProduction = _isProduction

            var styles = listToStyles(parentId, list)
            addStylesToDom(styles)

            return function update(newList) {
                var mayRemove = []
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i]
                    var domStyle = stylesInDom[item.id]
                    domStyle.refs--
                        mayRemove.push(domStyle)
                }
                if (newList) {
                    styles = listToStyles(parentId, newList)
                    addStylesToDom(styles)
                } else {
                    styles = []
                }
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i]
                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j]()
                        }
                        delete stylesInDom[domStyle.id]
                    }
                }
            }
        }

        function addStylesToDom(styles /* Array<StyleObject> */ ) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i]
                var domStyle = stylesInDom[item.id]
                if (domStyle) {
                    domStyle.refs++
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j])
                        }
                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j]))
                    }
                    if (domStyle.parts.length > item.parts.length) {
                        domStyle.parts.length = item.parts.length
                    }
                } else {
                    var parts = []
                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j]))
                    }
                    stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
                }
            }
        }

        function createStyleElement() {
            var styleElement = document.createElement('style')
            styleElement.type = 'text/css'
            head.appendChild(styleElement)
            return styleElement
        }

        function addStyle(obj /* StyleObjectPart */ ) {
            var update, remove
            var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

            if (styleElement) {
                if (isProduction) {
                    // has SSR styles and in production mode.
                    // simply do nothing.
                    return noop
                } else {
                    // has SSR styles but in dev mode.
                    // for some reason Chrome can't handle source map in server-rendered
                    // style tags - source maps in <style> only works if the style tag is
                    // created and inserted dynamically. So we remove the server rendered
                    // styles and inject new ones.
                    styleElement.parentNode.removeChild(styleElement)
                }
            }

            if (isOldIE) {
                // use singleton mode for IE9.
                var styleIndex = singletonCounter++
                    styleElement = singletonElement || (singletonElement = createStyleElement())
                update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
            } else {
                // use multi-style-tag mode in all other cases
                styleElement = createStyleElement()
                update = applyToTag.bind(null, styleElement)
                remove = function() {
                    styleElement.parentNode.removeChild(styleElement)
                }
            }

            update(obj)

            return function updateStyle(newObj /* StyleObjectPart */ ) {
                if (newObj) {
                    if (newObj.css === obj.css &&
                        newObj.media === obj.media &&
                        newObj.sourceMap === obj.sourceMap) {
                        return
                    }
                    update(obj = newObj)
                } else {
                    remove()
                }
            }
        }

        var replaceText = (function() {
            var textStore = []

            return function(index, replacement) {
                textStore[index] = replacement
                return textStore.filter(Boolean).join('\n')
            }
        })()

        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? '' : obj.css

            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = replaceText(index, css)
            } else {
                var cssNode = document.createTextNode(css)
                var childNodes = styleElement.childNodes
                if (childNodes[index]) styleElement.removeChild(childNodes[index])
                if (childNodes.length) {
                    styleElement.insertBefore(cssNode, childNodes[index])
                } else {
                    styleElement.appendChild(cssNode)
                }
            }
        }

        function applyToTag(styleElement, obj) {
            var css = obj.css
            var media = obj.media
            var sourceMap = obj.sourceMap

            if (media) {
                styleElement.setAttribute('media', media)
            }

            if (sourceMap) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
                    // http://stackoverflow.com/a/26603875
                css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
            }

            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = css
            } else {
                while (styleElement.firstChild) {
                    styleElement.removeChild(styleElement.firstChild)
                }
                styleElement.appendChild(document.createTextNode(css))
            }
        }


        /***/
    }),
    /* 22 */
    /***/
    (function(module, exports, __webpack_require__) {

        var pIE = __webpack_require__(58),
            createDesc = __webpack_require__(37),
            toIObject = __webpack_require__(19),
            toPrimitive = __webpack_require__(30),
            has = __webpack_require__(14),
            IE8_DOM_DEFINE = __webpack_require__(114),
            gOPD = Object.getOwnPropertyDescriptor;

        exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) { /* empty */ }
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };

        /***/
    }),
    /* 23 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__(14),
            toObject = __webpack_require__(12),
            IE_PROTO = __webpack_require__(88)('IE_PROTO'),
            ObjectProto = Object.prototype;

        module.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
        };

        /***/
    }),
    /* 24 */
    /***/
    (function(module, exports) {

        var toString = {}.toString;

        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };

        /***/
    }),
    /* 25 */
    /***/
    (function(module, exports) {

        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };

        /***/
    }),
    /* 26 */
    /***/
    (function(module, exports, __webpack_require__) {

        var fails = __webpack_require__(3);

        module.exports = function(method, arg) {
            return !!method && fails(function() {
                arg ? method.call(null, function() {}, 1) : method.call(null);
            });
        };

        /***/
    }),
    /* 27 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        // blobs module mutations list
        var removeBlob = exports.removeBlob = 'removeBlob';
        var removeSelectedBlob = exports.removeSelectedBlob = 'removeSelectedBlob';
        var setBlobs = exports.setBlobs = 'setBlobs';
        var setCreateFolderBlobVisibility = exports.setCreateFolderBlobVisibility = 'setCreateFolderBlobVisibility';
        var setDisplayType = exports.setDisplayType = 'setDisplayType';
        var setNewBlob = exports.setNewBlob = 'setNewBlob';
        var setRename = exports.setRename = 'setRename';
        var setRenameBlob = exports.setRenameBlob = 'setRenameBlob';
        var setSelectedBlob = exports.setSelectedBlob = 'setSelectedBlob';
        var setUpdatedBlob = exports.setUpdatedBlob = 'setUpdatedBlob';
        var setDisplayFilter = exports.setDisplayFilter = 'setDisplayFilter';

        // breadcrumb module mutations list
        var setLoadingStarted = exports.setLoadingStarted = 'setLoadingStarted';
        var setLoadingCompleted = exports.setLoadingCompleted = 'setLoadingCompleted';
        var setPath = exports.setPath = 'setPath';

        // tree module mutations list
        var setTree = exports.setTree = 'setTree';

        // uploads module mutations list
        var removeUpload = exports.removeUpload = 'removeUpload';
        var setNewUpload = exports.setNewUpload = 'setNewUpload';
        var setUploadFileError = exports.setUploadFileError = 'setUploadFileError';
        var setUploadFileLoading = exports.setUploadFileLoading = 'setUploadFileLoading';

        /***/
    }),
    /* 28 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
        var ctx = __webpack_require__(33),
            IObject = __webpack_require__(57),
            toObject = __webpack_require__(12),
            toLength = __webpack_require__(10),
            asc = __webpack_require__(171);
        module.exports = function(TYPE, $create) {
            var IS_MAP = TYPE == 1,
                IS_FILTER = TYPE == 2,
                IS_SOME = TYPE == 3,
                IS_EVERY = TYPE == 4,
                IS_FIND_INDEX = TYPE == 6,
                NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
                create = $create || asc;
            return function($this, callbackfn, that) {
                var O = toObject($this),
                    self = IObject(O),
                    f = ctx(callbackfn, that, 3),
                    length = toLength(self.length),
                    index = 0,
                    result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
                    val, res;
                for (; length > index; index++)
                    if (NO_HOLES || index in self) {
                        val = self[index];
                        res = f(val, index, O);
                        if (TYPE) {
                            if (IS_MAP) result[index] = res; // map
                            else if (res) switch (TYPE) {
                                    case 3:
                                        return true; // some
                                    case 5:
                                        return val; // find
                                    case 6:
                                        return index; // findIndex
                                    case 2:
                                        result.push(val); // filter
                                } else if (IS_EVERY) return false; // every
                        }
                    }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
            };
        };

        /***/
    }),
    /* 29 */
    /***/
    (function(module, exports, __webpack_require__) {

        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__(0),
            core = __webpack_require__(32),
            fails = __webpack_require__(3);
        module.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY],
                exp = {};
            exp[KEY] = exec(fn);
            $export($export.S + $export.F * fails(function() { fn(1); }), 'Object', exp);
        };

        /***/
    }),
    /* 30 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__(4);
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
            if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };

        /***/
    }),
    /* 31 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* WEBPACK VAR INJECTION */
        (function(process, global) {
            /*!
             * Vue.js v2.3.4
             * (c) 2014-2017 Evan You
             * Released under the MIT License.
             */
            /*  */

            // these helpers produces better vm code in JS engines due to their
            // explicitness and function inlining
            function isUndef(v) {
                return v === undefined || v === null
            }

            function isDef(v) {
                return v !== undefined && v !== null
            }

            function isTrue(v) {
                return v === true
            }

            function isFalse(v) {
                return v === false
            }
            /**
             * Check if value is primitive
             */
            function isPrimitive(value) {
                return typeof value === 'string' || typeof value === 'number'
            }

            /**
             * Quick object check - this is primarily used to tell
             * Objects from primitive values when we know the value
             * is a JSON-compliant type.
             */
            function isObject(obj) {
                return obj !== null && typeof obj === 'object'
            }

            var _toString = Object.prototype.toString;

            /**
             * Strict object type check. Only returns true
             * for plain JavaScript objects.
             */
            function isPlainObject(obj) {
                return _toString.call(obj) === '[object Object]'
            }

            function isRegExp(v) {
                return _toString.call(v) === '[object RegExp]'
            }

            /**
             * Convert a value to a string that is actually rendered.
             */
            function toString(val) {
                return val == null ?
                    '' :
                    typeof val === 'object' ?
                    JSON.stringify(val, null, 2) :
                    String(val)
            }

            /**
             * Convert a input value to a number for persistence.
             * If the conversion fails, return original string.
             */
            function toNumber(val) {
                var n = parseFloat(val);
                return isNaN(n) ? val : n
            }

            /**
             * Make a map and return a function for checking if a key
             * is in that map.
             */
            function makeMap(
                str,
                expectsLowerCase
            ) {
                var map = Object.create(null);
                var list = str.split(',');
                for (var i = 0; i < list.length; i++) {
                    map[list[i]] = true;
                }
                return expectsLowerCase ?

                    function(val) { return map[val.toLowerCase()]; } :
                    function(val) { return map[val]; }
            }

            /**
             * Check if a tag is a built-in tag.
             */
            var isBuiltInTag = makeMap('slot,component', true);

            /**
             * Remove an item from an array
             */
            function remove(arr, item) {
                if (arr.length) {
                    var index = arr.indexOf(item);
                    if (index > -1) {
                        return arr.splice(index, 1)
                    }
                }
            }

            /**
             * Check whether the object has the property.
             */
            var hasOwnProperty = Object.prototype.hasOwnProperty;

            function hasOwn(obj, key) {
                return hasOwnProperty.call(obj, key)
            }

            /**
             * Create a cached version of a pure function.
             */
            function cached(fn) {
                var cache = Object.create(null);
                return (function cachedFn(str) {
                    var hit = cache[str];
                    return hit || (cache[str] = fn(str))
                })
            }

            /**
             * Camelize a hyphen-delimited string.
             */
            var camelizeRE = /-(\w)/g;
            var camelize = cached(function(str) {
                return str.replace(camelizeRE, function(_, c) { return c ? c.toUpperCase() : ''; })
            });

            /**
             * Capitalize a string.
             */
            var capitalize = cached(function(str) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            });

            /**
             * Hyphenate a camelCase string.
             */
            var hyphenateRE = /([^-])([A-Z])/g;
            var hyphenate = cached(function(str) {
                return str
                    .replace(hyphenateRE, '$1-$2')
                    .replace(hyphenateRE, '$1-$2')
                    .toLowerCase()
            });

            /**
             * Simple bind, faster than native
             */
            function bind(fn, ctx) {
                function boundFn(a) {
                    var l = arguments.length;
                    return l ?
                        l > 1 ?
                        fn.apply(ctx, arguments) :
                        fn.call(ctx, a) :
                        fn.call(ctx)
                }
                // record original fn length
                boundFn._length = fn.length;
                return boundFn
            }

            /**
             * Convert an Array-like object to a real Array.
             */
            function toArray(list, start) {
                start = start || 0;
                var i = list.length - start;
                var ret = new Array(i);
                while (i--) {
                    ret[i] = list[i + start];
                }
                return ret
            }

            /**
             * Mix properties into target object.
             */
            function extend(to, _from) {
                for (var key in _from) {
                    to[key] = _from[key];
                }
                return to
            }

            /**
             * Merge an Array of Objects into a single Object.
             */
            function toObject(arr) {
                var res = {};
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i]) {
                        extend(res, arr[i]);
                    }
                }
                return res
            }

            /**
             * Perform no operation.
             */
            function noop() {}

            /**
             * Always return false.
             */
            var no = function() { return false; };

            /**
             * Return same value
             */
            var identity = function(_) { return _; };

            /**
             * Generate a static keys string from compiler modules.
             */


            /**
             * Check if two values are loosely equal - that is,
             * if they are plain objects, do they have the same shape?
             */
            function looseEqual(a, b) {
                var isObjectA = isObject(a);
                var isObjectB = isObject(b);
                if (isObjectA && isObjectB) {
                    try {
                        return JSON.stringify(a) === JSON.stringify(b)
                    } catch (e) {
                        // possible circular reference
                        return a === b
                    }
                } else if (!isObjectA && !isObjectB) {
                    return String(a) === String(b)
                } else {
                    return false
                }
            }

            function looseIndexOf(arr, val) {
                for (var i = 0; i < arr.length; i++) {
                    if (looseEqual(arr[i], val)) { return i }
                }
                return -1
            }

            /**
             * Ensure a function is called only once.
             */
            function once(fn) {
                var called = false;
                return function() {
                    if (!called) {
                        called = true;
                        fn.apply(this, arguments);
                    }
                }
            }

            var SSR_ATTR = 'data-server-rendered';

            var ASSET_TYPES = [
                'component',
                'directive',
                'filter'
            ];

            var LIFECYCLE_HOOKS = [
                'beforeCreate',
                'created',
                'beforeMount',
                'mounted',
                'beforeUpdate',
                'updated',
                'beforeDestroy',
                'destroyed',
                'activated',
                'deactivated'
            ];

            /*  */

            var config = ({
                /**
                 * Option merge strategies (used in core/util/options)
                 */
                optionMergeStrategies: Object.create(null),

                /**
                 * Whether to suppress warnings.
                 */
                silent: false,

                /**
                 * Show production mode tip message on boot?
                 */
                productionTip: process.env.NODE_ENV !== 'production',

                /**
                 * Whether to enable devtools
                 */
                devtools: process.env.NODE_ENV !== 'production',

                /**
                 * Whether to record perf
                 */
                performance: false,

                /**
                 * Error handler for watcher errors
                 */
                errorHandler: null,

                /**
                 * Ignore certain custom elements
                 */
                ignoredElements: [],

                /**
                 * Custom user key aliases for v-on
                 */
                keyCodes: Object.create(null),

                /**
                 * Check if a tag is reserved so that it cannot be registered as a
                 * component. This is platform-dependent and may be overwritten.
                 */
                isReservedTag: no,

                /**
                 * Check if an attribute is reserved so that it cannot be used as a component
                 * prop. This is platform-dependent and may be overwritten.
                 */
                isReservedAttr: no,

                /**
                 * Check if a tag is an unknown element.
                 * Platform-dependent.
                 */
                isUnknownElement: no,

                /**
                 * Get the namespace of an element
                 */
                getTagNamespace: noop,

                /**
                 * Parse the real tag name for the specific platform.
                 */
                parsePlatformTagName: identity,

                /**
                 * Check if an attribute must be bound using property, e.g. value
                 * Platform-dependent.
                 */
                mustUseProp: no,

                /**
                 * Exposed for legacy reasons
                 */
                _lifecycleHooks: LIFECYCLE_HOOKS
            });

            /*  */

            var emptyObject = Object.freeze({});

            /**
             * Check if a string starts with $ or _
             */
            function isReserved(str) {
                var c = (str + '').charCodeAt(0);
                return c === 0x24 || c === 0x5F
            }

            /**
             * Define a property.
             */
            function def(obj, key, val, enumerable) {
                Object.defineProperty(obj, key, {
                    value: val,
                    enumerable: !!enumerable,
                    writable: true,
                    configurable: true
                });
            }

            /**
             * Parse simple path.
             */
            var bailRE = /[^\w.$]/;

            function parsePath(path) {
                if (bailRE.test(path)) {
                    return
                }
                var segments = path.split('.');
                return function(obj) {
                    for (var i = 0; i < segments.length; i++) {
                        if (!obj) { return }
                        obj = obj[segments[i]];
                    }
                    return obj
                }
            }

            /*  */

            var warn = noop;
            var tip = noop;
            var formatComponentName = (null); // work around flow check

            if (process.env.NODE_ENV !== 'production') {
                var hasConsole = typeof console !== 'undefined';
                var classifyRE = /(?:^|[-_])(\w)/g;
                var classify = function(str) {
                    return str
                        .replace(classifyRE, function(c) { return c.toUpperCase(); })
                        .replace(/[-_]/g, '');
                };

                warn = function(msg, vm) {
                    if (hasConsole && (!config.silent)) {
                        console.error("[Vue warn]: " + msg + (
                            vm ? generateComponentTrace(vm) : ''
                        ));
                    }
                };

                tip = function(msg, vm) {
                    if (hasConsole && (!config.silent)) {
                        console.warn("[Vue tip]: " + msg + (
                            vm ? generateComponentTrace(vm) : ''
                        ));
                    }
                };

                formatComponentName = function(vm, includeFile) {
                    if (vm.$root === vm) {
                        return '<Root>'
                    }
                    var name = typeof vm === 'string' ?
                        vm :
                        typeof vm === 'function' && vm.options ?
                        vm.options.name :
                        vm._isVue ?
                        vm.$options.name || vm.$options._componentTag :
                        vm.name;

                    var file = vm._isVue && vm.$options.__file;
                    if (!name && file) {
                        var match = file.match(/([^/\\]+)\.vue$/);
                        name = match && match[1];
                    }

                    return (
                        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
                        (file && includeFile !== false ? (" at " + file) : '')
                    )
                };

                var repeat = function(str, n) {
                    var res = '';
                    while (n) {
                        if (n % 2 === 1) { res += str; }
                        if (n > 1) { str += str; }
                        n >>= 1;
                    }
                    return res
                };

                var generateComponentTrace = function(vm) {
                    if (vm._isVue && vm.$parent) {
                        var tree = [];
                        var currentRecursiveSequence = 0;
                        while (vm) {
                            if (tree.length > 0) {
                                var last = tree[tree.length - 1];
                                if (last.constructor === vm.constructor) {
                                    currentRecursiveSequence++;
                                    vm = vm.$parent;
                                    continue
                                } else if (currentRecursiveSequence > 0) {
                                    tree[tree.length - 1] = [last, currentRecursiveSequence];
                                    currentRecursiveSequence = 0;
                                }
                            }
                            tree.push(vm);
                            vm = vm.$parent;
                        }
                        return '\n\nfound in\n\n' + tree
                            .map(function(vm, i) {
                                return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ?
                                    ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)") :
                                    formatComponentName(vm)));
                            })
                            .join('\n')
                    } else {
                        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
                    }
                };
            }

            /*  */

            function handleError(err, vm, info) {
                if (config.errorHandler) {
                    config.errorHandler.call(null, err, vm, info);
                } else {
                    if (process.env.NODE_ENV !== 'production') {
                        warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
                    }
                    /* istanbul ignore else */
                    if (inBrowser && typeof console !== 'undefined') {
                        console.error(err);
                    } else {
                        throw err
                    }
                }
            }

            /*  */
            /* globals MutationObserver */

            // can we use __proto__?
            var hasProto = '__proto__' in {};

            // Browser environment sniffing
            var inBrowser = typeof window !== 'undefined';
            var UA = inBrowser && window.navigator.userAgent.toLowerCase();
            var isIE = UA && /msie|trident/.test(UA);
            var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
            var isEdge = UA && UA.indexOf('edge/') > 0;
            var isAndroid = UA && UA.indexOf('android') > 0;
            var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
            var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

            var supportsPassive = false;
            if (inBrowser) {
                try {
                    var opts = {};
                    Object.defineProperty(opts, 'passive', ({
                        get: function get() {
                            /* istanbul ignore next */
                            supportsPassive = true;
                        }
                    })); // https://github.com/facebook/flow/issues/285
                    window.addEventListener('test-passive', null, opts);
                } catch (e) {}
            }

            // this needs to be lazy-evaled because vue may be required before
            // vue-server-renderer can set VUE_ENV
            var _isServer;
            var isServerRendering = function() {
                if (_isServer === undefined) {
                    /* istanbul ignore if */
                    if (!inBrowser && typeof global !== 'undefined') {
                        // detect presence of vue-server-renderer and avoid
                        // Webpack shimming the process
                        _isServer = global['process'].env.VUE_ENV === 'server';
                    } else {
                        _isServer = false;
                    }
                }
                return _isServer
            };

            // detect devtools
            var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            /* istanbul ignore next */
            function isNative(Ctor) {
                return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
            }

            var hasSymbol =
                typeof Symbol !== 'undefined' && isNative(Symbol) &&
                typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

            /**
             * Defer a task to execute it asynchronously.
             */
            var nextTick = (function() {
                var callbacks = [];
                var pending = false;
                var timerFunc;

                function nextTickHandler() {
                    pending = false;
                    var copies = callbacks.slice(0);
                    callbacks.length = 0;
                    for (var i = 0; i < copies.length; i++) {
                        copies[i]();
                    }
                }

                // the nextTick behavior leverages the microtask queue, which can be accessed
                // via either native Promise.then or MutationObserver.
                // MutationObserver has wider support, however it is seriously bugged in
                // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
                // completely stops working after triggering a few times... so, if native
                // Promise is available, we will use it:
                /* istanbul ignore if */
                if (typeof Promise !== 'undefined' && isNative(Promise)) {
                    var p = Promise.resolve();
                    var logError = function(err) { console.error(err); };
                    timerFunc = function() {
                        p.then(nextTickHandler).catch(logError);
                        // in problematic UIWebViews, Promise.then doesn't completely break, but
                        // it can get stuck in a weird state where callbacks are pushed into the
                        // microtask queue but the queue isn't being flushed, until the browser
                        // needs to do some other work, e.g. handle a timer. Therefore we can
                        // "force" the microtask queue to be flushed by adding an empty timer.
                        if (isIOS) { setTimeout(noop); }
                    };
                } else if (typeof MutationObserver !== 'undefined' && (
                        isNative(MutationObserver) ||
                        // PhantomJS and iOS 7.x
                        MutationObserver.toString() === '[object MutationObserverConstructor]'
                    )) {
                    // use MutationObserver where native Promise is not available,
                    // e.g. PhantomJS IE11, iOS7, Android 4.4
                    var counter = 1;
                    var observer = new MutationObserver(nextTickHandler);
                    var textNode = document.createTextNode(String(counter));
                    observer.observe(textNode, {
                        characterData: true
                    });
                    timerFunc = function() {
                        counter = (counter + 1) % 2;
                        textNode.data = String(counter);
                    };
                } else {
                    // fallback to setTimeout
                    /* istanbul ignore next */
                    timerFunc = function() {
                        setTimeout(nextTickHandler, 0);
                    };
                }

                return function queueNextTick(cb, ctx) {
                    var _resolve;
                    callbacks.push(function() {
                        if (cb) {
                            try {
                                cb.call(ctx);
                            } catch (e) {
                                handleError(e, ctx, 'nextTick');
                            }
                        } else if (_resolve) {
                            _resolve(ctx);
                        }
                    });
                    if (!pending) {
                        pending = true;
                        timerFunc();
                    }
                    if (!cb && typeof Promise !== 'undefined') {
                        return new Promise(function(resolve, reject) {
                            _resolve = resolve;
                        })
                    }
                }
            })();

            var _Set;
            /* istanbul ignore if */
            if (typeof Set !== 'undefined' && isNative(Set)) {
                // use native Set when available.
                _Set = Set;
            } else {
                // a non-standard Set polyfill that only works with primitive keys.
                _Set = (function() {
                    function Set() {
                        this.set = Object.create(null);
                    }
                    Set.prototype.has = function has(key) {
                        return this.set[key] === true
                    };
                    Set.prototype.add = function add(key) {
                        this.set[key] = true;
                    };
                    Set.prototype.clear = function clear() {
                        this.set = Object.create(null);
                    };

                    return Set;
                }());
            }

            /*  */


            var uid$1 = 0;

            /**
             * A dep is an observable that can have multiple
             * directives subscribing to it.
             */
            var Dep = function Dep() {
                this.id = uid$1++;
                this.subs = [];
            };

            Dep.prototype.addSub = function addSub(sub) {
                this.subs.push(sub);
            };

            Dep.prototype.removeSub = function removeSub(sub) {
                remove(this.subs, sub);
            };

            Dep.prototype.depend = function depend() {
                if (Dep.target) {
                    Dep.target.addDep(this);
                }
            };

            Dep.prototype.notify = function notify() {
                // stabilize the subscriber list first
                var subs = this.subs.slice();
                for (var i = 0, l = subs.length; i < l; i++) {
                    subs[i].update();
                }
            };

            // the current target watcher being evaluated.
            // this is globally unique because there could be only one
            // watcher being evaluated at any time.
            Dep.target = null;
            var targetStack = [];

            function pushTarget(_target) {
                if (Dep.target) { targetStack.push(Dep.target); }
                Dep.target = _target;
            }

            function popTarget() {
                Dep.target = targetStack.pop();
            }

            /*
             * not type checking this file because flow doesn't play well with
             * dynamically accessing methods on Array prototype
             */

            var arrayProto = Array.prototype;
            var arrayMethods = Object.create(arrayProto);
            [
                'push',
                'pop',
                'shift',
                'unshift',
                'splice',
                'sort',
                'reverse'
            ]
            .forEach(function(method) {
                // cache original method
                var original = arrayProto[method];
                def(arrayMethods, method, function mutator() {
                    var arguments$1 = arguments;

                    // avoid leaking arguments:
                    // http://jsperf.com/closure-with-arguments
                    var i = arguments.length;
                    var args = new Array(i);
                    while (i--) {
                        args[i] = arguments$1[i];
                    }
                    var result = original.apply(this, args);
                    var ob = this.__ob__;
                    var inserted;
                    switch (method) {
                        case 'push':
                            inserted = args;
                            break
                        case 'unshift':
                            inserted = args;
                            break
                        case 'splice':
                            inserted = args.slice(2);
                            break
                    }
                    if (inserted) { ob.observeArray(inserted); }
                    // notify change
                    ob.dep.notify();
                    return result
                });
            });

            /*  */

            var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

            /**
             * By default, when a reactive property is set, the new value is
             * also converted to become reactive. However when passing down props,
             * we don't want to force conversion because the value may be a nested value
             * under a frozen data structure. Converting it would defeat the optimization.
             */
            var observerState = {
                shouldConvert: true,
                isSettingProps: false
            };

            /**
             * Observer class that are attached to each observed
             * object. Once attached, the observer converts target
             * object's property keys into getter/setters that
             * collect dependencies and dispatches updates.
             */
            var Observer = function Observer(value) {
                this.value = value;
                this.dep = new Dep();
                this.vmCount = 0;
                def(value, '__ob__', this);
                if (Array.isArray(value)) {
                    var augment = hasProto ?
                        protoAugment :
                        copyAugment;
                    augment(value, arrayMethods, arrayKeys);
                    this.observeArray(value);
                } else {
                    this.walk(value);
                }
            };

            /**
             * Walk through each property and convert them into
             * getter/setters. This method should only be called when
             * value type is Object.
             */
            Observer.prototype.walk = function walk(obj) {
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length; i++) {
                    defineReactive$$1(obj, keys[i], obj[keys[i]]);
                }
            };

            /**
             * Observe a list of Array items.
             */
            Observer.prototype.observeArray = function observeArray(items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    observe(items[i]);
                }
            };

            // helpers

            /**
             * Augment an target Object or Array by intercepting
             * the prototype chain using __proto__
             */
            function protoAugment(target, src) {
                /* eslint-disable no-proto */
                target.__proto__ = src;
                /* eslint-enable no-proto */
            }

            /**
             * Augment an target Object or Array by defining
             * hidden properties.
             */
            /* istanbul ignore next */
            function copyAugment(target, src, keys) {
                for (var i = 0, l = keys.length; i < l; i++) {
                    var key = keys[i];
                    def(target, key, src[key]);
                }
            }

            /**
             * Attempt to create an observer instance for a value,
             * returns the new observer if successfully observed,
             * or the existing observer if the value already has one.
             */
            function observe(value, asRootData) {
                if (!isObject(value)) {
                    return
                }
                var ob;
                if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
                    ob = value.__ob__;
                } else if (
                    observerState.shouldConvert &&
                    !isServerRendering() &&
                    (Array.isArray(value) || isPlainObject(value)) &&
                    Object.isExtensible(value) &&
                    !value._isVue
                ) {
                    ob = new Observer(value);
                }
                if (asRootData && ob) {
                    ob.vmCount++;
                }
                return ob
            }

            /**
             * Define a reactive property on an Object.
             */
            function defineReactive$$1(
                obj,
                key,
                val,
                customSetter
            ) {
                var dep = new Dep();

                var property = Object.getOwnPropertyDescriptor(obj, key);
                if (property && property.configurable === false) {
                    return
                }

                // cater for pre-defined getter/setters
                var getter = property && property.get;
                var setter = property && property.set;

                var childOb = observe(val);
                Object.defineProperty(obj, key, {
                    enumerable: true,
                    configurable: true,
                    get: function reactiveGetter() {
                        var value = getter ? getter.call(obj) : val;
                        if (Dep.target) {
                            dep.depend();
                            if (childOb) {
                                childOb.dep.depend();
                            }
                            if (Array.isArray(value)) {
                                dependArray(value);
                            }
                        }
                        return value
                    },
                    set: function reactiveSetter(newVal) {
                        var value = getter ? getter.call(obj) : val;
                        /* eslint-disable no-self-compare */
                        if (newVal === value || (newVal !== newVal && value !== value)) {
                            return
                        }
                        /* eslint-enable no-self-compare */
                        if (process.env.NODE_ENV !== 'production' && customSetter) {
                            customSetter();
                        }
                        if (setter) {
                            setter.call(obj, newVal);
                        } else {
                            val = newVal;
                        }
                        childOb = observe(newVal);
                        dep.notify();
                    }
                });
            }

            /**
             * Set a property on an object. Adds the new property and
             * triggers change notification if the property doesn't
             * already exist.
             */
            function set(target, key, val) {
                if (Array.isArray(target) && typeof key === 'number') {
                    target.length = Math.max(target.length, key);
                    target.splice(key, 1, val);
                    return val
                }
                if (hasOwn(target, key)) {
                    target[key] = val;
                    return val
                }
                var ob = (target).__ob__;
                if (target._isVue || (ob && ob.vmCount)) {
                    process.env.NODE_ENV !== 'production' && warn(
                        'Avoid adding reactive properties to a Vue instance or its root $data ' +
                        'at runtime - declare it upfront in the data option.'
                    );
                    return val
                }
                if (!ob) {
                    target[key] = val;
                    return val
                }
                defineReactive$$1(ob.value, key, val);
                ob.dep.notify();
                return val
            }

            /**
             * Delete a property and trigger change if necessary.
             */
            function del(target, key) {
                if (Array.isArray(target) && typeof key === 'number') {
                    target.splice(key, 1);
                    return
                }
                var ob = (target).__ob__;
                if (target._isVue || (ob && ob.vmCount)) {
                    process.env.NODE_ENV !== 'production' && warn(
                        'Avoid deleting properties on a Vue instance or its root $data ' +
                        '- just set it to null.'
                    );
                    return
                }
                if (!hasOwn(target, key)) {
                    return
                }
                delete target[key];
                if (!ob) {
                    return
                }
                ob.dep.notify();
            }

            /**
             * Collect dependencies on array elements when the array is touched, since
             * we cannot intercept array element access like property getters.
             */
            function dependArray(value) {
                for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
                    e = value[i];
                    e && e.__ob__ && e.__ob__.dep.depend();
                    if (Array.isArray(e)) {
                        dependArray(e);
                    }
                }
            }

            /*  */

            /**
             * Option overwriting strategies are functions that handle
             * how to merge a parent option value and a child option
             * value into the final value.
             */
            var strats = config.optionMergeStrategies;

            /**
             * Options with restrictions
             */
            if (process.env.NODE_ENV !== 'production') {
                strats.el = strats.propsData = function(parent, child, vm, key) {
                    if (!vm) {
                        warn(
                            "option \"" + key + "\" can only be used during instance " +
                            'creation with the `new` keyword.'
                        );
                    }
                    return defaultStrat(parent, child)
                };
            }

            /**
             * Helper that recursively merges two data objects together.
             */
            function mergeData(to, from) {
                if (!from) { return to }
                var key, toVal, fromVal;
                var keys = Object.keys(from);
                for (var i = 0; i < keys.length; i++) {
                    key = keys[i];
                    toVal = to[key];
                    fromVal = from[key];
                    if (!hasOwn(to, key)) {
                        set(to, key, fromVal);
                    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
                        mergeData(toVal, fromVal);
                    }
                }
                return to
            }

            /**
             * Data
             */
            strats.data = function(
                parentVal,
                childVal,
                vm
            ) {
                if (!vm) {
                    // in a Vue.extend merge, both should be functions
                    if (!childVal) {
                        return parentVal
                    }
                    if (typeof childVal !== 'function') {
                        process.env.NODE_ENV !== 'production' && warn(
                            'The "data" option should be a function ' +
                            'that returns a per-instance value in component ' +
                            'definitions.',
                            vm
                        );
                        return parentVal
                    }
                    if (!parentVal) {
                        return childVal
                    }
                    // when parentVal & childVal are both present,
                    // we need to return a function that returns the
                    // merged result of both functions... no need to
                    // check if parentVal is a function here because
                    // it has to be a function to pass previous merges.
                    return function mergedDataFn() {
                        return mergeData(
                            childVal.call(this),
                            parentVal.call(this)
                        )
                    }
                } else if (parentVal || childVal) {
                    return function mergedInstanceDataFn() {
                        // instance merge
                        var instanceData = typeof childVal === 'function' ?
                            childVal.call(vm) :
                            childVal;
                        var defaultData = typeof parentVal === 'function' ?
                            parentVal.call(vm) :
                            undefined;
                        if (instanceData) {
                            return mergeData(instanceData, defaultData)
                        } else {
                            return defaultData
                        }
                    }
                }
            };

            /**
             * Hooks and props are merged as arrays.
             */
            function mergeHook(
                parentVal,
                childVal
            ) {
                return childVal ?
                    parentVal ?
                    parentVal.concat(childVal) :
                    Array.isArray(childVal) ?
                    childVal : [childVal] :
                    parentVal
            }

            LIFECYCLE_HOOKS.forEach(function(hook) {
                strats[hook] = mergeHook;
            });

            /**
             * Assets
             *
             * When a vm is present (instance creation), we need to do
             * a three-way merge between constructor options, instance
             * options and parent options.
             */
            function mergeAssets(parentVal, childVal) {
                var res = Object.create(parentVal || null);
                return childVal ?
                    extend(res, childVal) :
                    res
            }

            ASSET_TYPES.forEach(function(type) {
                strats[type + 's'] = mergeAssets;
            });

            /**
             * Watchers.
             *
             * Watchers hashes should not overwrite one
             * another, so we merge them as arrays.
             */
            strats.watch = function(parentVal, childVal) {
                /* istanbul ignore if */
                if (!childVal) { return Object.create(parentVal || null) }
                if (!parentVal) { return childVal }
                var ret = {};
                extend(ret, parentVal);
                for (var key in childVal) {
                    var parent = ret[key];
                    var child = childVal[key];
                    if (parent && !Array.isArray(parent)) {
                        parent = [parent];
                    }
                    ret[key] = parent ?
                        parent.concat(child) : [child];
                }
                return ret
            };

            /**
             * Other object hashes.
             */
            strats.props =
                strats.methods =
                strats.computed = function(parentVal, childVal) {
                    if (!childVal) { return Object.create(parentVal || null) }
                    if (!parentVal) { return childVal }
                    var ret = Object.create(null);
                    extend(ret, parentVal);
                    extend(ret, childVal);
                    return ret
                };

            /**
             * Default strategy.
             */
            var defaultStrat = function(parentVal, childVal) {
                return childVal === undefined ?
                    parentVal :
                    childVal
            };

            /**
             * Validate component names
             */
            function checkComponents(options) {
                for (var key in options.components) {
                    var lower = key.toLowerCase();
                    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
                        warn(
                            'Do not use built-in or reserved HTML elements as component ' +
                            'id: ' + key
                        );
                    }
                }
            }

            /**
             * Ensure all props option syntax are normalized into the
             * Object-based format.
             */
            function normalizeProps(options) {
                var props = options.props;
                if (!props) { return }
                var res = {};
                var i, val, name;
                if (Array.isArray(props)) {
                    i = props.length;
                    while (i--) {
                        val = props[i];
                        if (typeof val === 'string') {
                            name = camelize(val);
                            res[name] = { type: null };
                        } else if (process.env.NODE_ENV !== 'production') {
                            warn('props must be strings when using array syntax.');
                        }
                    }
                } else if (isPlainObject(props)) {
                    for (var key in props) {
                        val = props[key];
                        name = camelize(key);
                        res[name] = isPlainObject(val) ?
                            val : { type: val };
                    }
                }
                options.props = res;
            }

            /**
             * Normalize raw function directives into object format.
             */
            function normalizeDirectives(options) {
                var dirs = options.directives;
                if (dirs) {
                    for (var key in dirs) {
                        var def = dirs[key];
                        if (typeof def === 'function') {
                            dirs[key] = { bind: def, update: def };
                        }
                    }
                }
            }

            /**
             * Merge two option objects into a new one.
             * Core utility used in both instantiation and inheritance.
             */
            function mergeOptions(
                parent,
                child,
                vm
            ) {
                if (process.env.NODE_ENV !== 'production') {
                    checkComponents(child);
                }

                if (typeof child === 'function') {
                    child = child.options;
                }

                normalizeProps(child);
                normalizeDirectives(child);
                var extendsFrom = child.extends;
                if (extendsFrom) {
                    parent = mergeOptions(parent, extendsFrom, vm);
                }
                if (child.mixins) {
                    for (var i = 0, l = child.mixins.length; i < l; i++) {
                        parent = mergeOptions(parent, child.mixins[i], vm);
                    }
                }
                var options = {};
                var key;
                for (key in parent) {
                    mergeField(key);
                }
                for (key in child) {
                    if (!hasOwn(parent, key)) {
                        mergeField(key);
                    }
                }

                function mergeField(key) {
                    var strat = strats[key] || defaultStrat;
                    options[key] = strat(parent[key], child[key], vm, key);
                }
                return options
            }

            /**
             * Resolve an asset.
             * This function is used because child instances need access
             * to assets defined in its ancestor chain.
             */
            function resolveAsset(
                options,
                type,
                id,
                warnMissing
            ) {
                /* istanbul ignore if */
                if (typeof id !== 'string') {
                    return
                }
                var assets = options[type];
                // check local registration variations first
                if (hasOwn(assets, id)) { return assets[id] }
                var camelizedId = camelize(id);
                if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
                var PascalCaseId = capitalize(camelizedId);
                if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
                // fallback to prototype chain
                var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
                if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
                    warn(
                        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
                        options
                    );
                }
                return res
            }

            /*  */

            function validateProp(
                key,
                propOptions,
                propsData,
                vm
            ) {
                var prop = propOptions[key];
                var absent = !hasOwn(propsData, key);
                var value = propsData[key];
                // handle boolean props
                if (isType(Boolean, prop.type)) {
                    if (absent && !hasOwn(prop, 'default')) {
                        value = false;
                    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
                        value = true;
                    }
                }
                // check default value
                if (value === undefined) {
                    value = getPropDefaultValue(vm, prop, key);
                    // since the default value is a fresh copy,
                    // make sure to observe it.
                    var prevShouldConvert = observerState.shouldConvert;
                    observerState.shouldConvert = true;
                    observe(value);
                    observerState.shouldConvert = prevShouldConvert;
                }
                if (process.env.NODE_ENV !== 'production') {
                    assertProp(prop, key, value, vm, absent);
                }
                return value
            }

            /**
             * Get the default value of a prop.
             */
            function getPropDefaultValue(vm, prop, key) {
                // no default, return undefined
                if (!hasOwn(prop, 'default')) {
                    return undefined
                }
                var def = prop.default;
                // warn against non-factory defaults for Object & Array
                if (process.env.NODE_ENV !== 'production' && isObject(def)) {
                    warn(
                        'Invalid default value for prop "' + key + '": ' +
                        'Props with type Object/Array must use a factory function ' +
                        'to return the default value.',
                        vm
                    );
                }
                // the raw prop value was also undefined from previous render,
                // return previous default value to avoid unnecessary watcher trigger
                if (vm && vm.$options.propsData &&
                    vm.$options.propsData[key] === undefined &&
                    vm._props[key] !== undefined
                ) {
                    return vm._props[key]
                }
                // call factory function for non-Function types
                // a value is Function if its prototype is function even across different execution context
                return typeof def === 'function' && getType(prop.type) !== 'Function' ?
                    def.call(vm) :
                    def
            }

            /**
             * Assert whether a prop is valid.
             */
            function assertProp(
                prop,
                name,
                value,
                vm,
                absent
            ) {
                if (prop.required && absent) {
                    warn(
                        'Missing required prop: "' + name + '"',
                        vm
                    );
                    return
                }
                if (value == null && !prop.required) {
                    return
                }
                var type = prop.type;
                var valid = !type || type === true;
                var expectedTypes = [];
                if (type) {
                    if (!Array.isArray(type)) {
                        type = [type];
                    }
                    for (var i = 0; i < type.length && !valid; i++) {
                        var assertedType = assertType(value, type[i]);
                        expectedTypes.push(assertedType.expectedType || '');
                        valid = assertedType.valid;
                    }
                }
                if (!valid) {
                    warn(
                        'Invalid prop: type check failed for prop "' + name + '".' +
                        ' Expected ' + expectedTypes.map(capitalize).join(', ') +
                        ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
                        vm
                    );
                    return
                }
                var validator = prop.validator;
                if (validator) {
                    if (!validator(value)) {
                        warn(
                            'Invalid prop: custom validator check failed for prop "' + name + '".',
                            vm
                        );
                    }
                }
            }

            var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

            function assertType(value, type) {
                var valid;
                var expectedType = getType(type);
                if (simpleCheckRE.test(expectedType)) {
                    valid = typeof value === expectedType.toLowerCase();
                } else if (expectedType === 'Object') {
                    valid = isPlainObject(value);
                } else if (expectedType === 'Array') {
                    valid = Array.isArray(value);
                } else {
                    valid = value instanceof type;
                }
                return {
                    valid: valid,
                    expectedType: expectedType
                }
            }

            /**
             * Use function string name to check built-in types,
             * because a simple equality check will fail when running
             * across different vms / iframes.
             */
            function getType(fn) {
                var match = fn && fn.toString().match(/^\s*function (\w+)/);
                return match ? match[1] : ''
            }

            function isType(type, fn) {
                if (!Array.isArray(fn)) {
                    return getType(fn) === getType(type)
                }
                for (var i = 0, len = fn.length; i < len; i++) {
                    if (getType(fn[i]) === getType(type)) {
                        return true
                    }
                }
                /* istanbul ignore next */
                return false
            }

            /*  */

            /* not type checking this file because flow doesn't play well with Proxy */

            var initProxy;

            if (process.env.NODE_ENV !== 'production') {
                var allowedGlobals = makeMap(
                    'Infinity,undefined,NaN,isFinite,isNaN,' +
                    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
                    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
                    'require' // for Webpack/Browserify
                );

                var warnNonPresent = function(target, key) {
                    warn(
                        "Property or method \"" + key + "\" is not defined on the instance but " +
                        "referenced during render. Make sure to declare reactive data " +
                        "properties in the data option.",
                        target
                    );
                };

                var hasProxy =
                    typeof Proxy !== 'undefined' &&
                    Proxy.toString().match(/native code/);

                if (hasProxy) {
                    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
                    config.keyCodes = new Proxy(config.keyCodes, {
                        set: function set(target, key, value) {
                            if (isBuiltInModifier(key)) {
                                warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
                                return false
                            } else {
                                target[key] = value;
                                return true
                            }
                        }
                    });
                }

                var hasHandler = {
                    has: function has(target, key) {
                        var has = key in target;
                        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
                        if (!has && !isAllowed) {
                            warnNonPresent(target, key);
                        }
                        return has || !isAllowed
                    }
                };

                var getHandler = {
                    get: function get(target, key) {
                        if (typeof key === 'string' && !(key in target)) {
                            warnNonPresent(target, key);
                        }
                        return target[key]
                    }
                };

                initProxy = function initProxy(vm) {
                    if (hasProxy) {
                        // determine which proxy handler to use
                        var options = vm.$options;
                        var handlers = options.render && options.render._withStripped ?
                            getHandler :
                            hasHandler;
                        vm._renderProxy = new Proxy(vm, handlers);
                    } else {
                        vm._renderProxy = vm;
                    }
                };
            }

            var mark;
            var measure;

            if (process.env.NODE_ENV !== 'production') {
                var perf = inBrowser && window.performance;
                /* istanbul ignore if */
                if (
                    perf &&
                    perf.mark &&
                    perf.measure &&
                    perf.clearMarks &&
                    perf.clearMeasures
                ) {
                    mark = function(tag) { return perf.mark(tag); };
                    measure = function(name, startTag, endTag) {
                        perf.measure(name, startTag, endTag);
                        perf.clearMarks(startTag);
                        perf.clearMarks(endTag);
                        perf.clearMeasures(name);
                    };
                }
            }

            /*  */

            var VNode = function VNode(
                tag,
                data,
                children,
                text,
                elm,
                context,
                componentOptions
            ) {
                this.tag = tag;
                this.data = data;
                this.children = children;
                this.text = text;
                this.elm = elm;
                this.ns = undefined;
                this.context = context;
                this.functionalContext = undefined;
                this.key = data && data.key;
                this.componentOptions = componentOptions;
                this.componentInstance = undefined;
                this.parent = undefined;
                this.raw = false;
                this.isStatic = false;
                this.isRootInsert = true;
                this.isComment = false;
                this.isCloned = false;
                this.isOnce = false;
            };

            var prototypeAccessors = { child: {} };

            // DEPRECATED: alias for componentInstance for backwards compat.
            /* istanbul ignore next */
            prototypeAccessors.child.get = function() {
                return this.componentInstance
            };

            Object.defineProperties(VNode.prototype, prototypeAccessors);

            var createEmptyVNode = function() {
                var node = new VNode();
                node.text = '';
                node.isComment = true;
                return node
            };

            function createTextVNode(val) {
                return new VNode(undefined, undefined, undefined, String(val))
            }

            // optimized shallow clone
            // used for static nodes and slot nodes because they may be reused across
            // multiple renders, cloning them avoids errors when DOM manipulations rely
            // on their elm reference.
            function cloneVNode(vnode) {
                var cloned = new VNode(
                    vnode.tag,
                    vnode.data,
                    vnode.children,
                    vnode.text,
                    vnode.elm,
                    vnode.context,
                    vnode.componentOptions
                );
                cloned.ns = vnode.ns;
                cloned.isStatic = vnode.isStatic;
                cloned.key = vnode.key;
                cloned.isComment = vnode.isComment;
                cloned.isCloned = true;
                return cloned
            }

            function cloneVNodes(vnodes) {
                var len = vnodes.length;
                var res = new Array(len);
                for (var i = 0; i < len; i++) {
                    res[i] = cloneVNode(vnodes[i]);
                }
                return res
            }

            /*  */

            var normalizeEvent = cached(function(name) {
                var passive = name.charAt(0) === '&';
                name = passive ? name.slice(1) : name;
                var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
                name = once$$1 ? name.slice(1) : name;
                var capture = name.charAt(0) === '!';
                name = capture ? name.slice(1) : name;
                return {
                    name: name,
                    once: once$$1,
                    capture: capture,
                    passive: passive
                }
            });

            function createFnInvoker(fns) {
                function invoker() {
                    var arguments$1 = arguments;

                    var fns = invoker.fns;
					
					
                    if (Array.isArray(fns)) {
                        for (var i = 0; i < fns.length; i++) {
                            fns[i].apply(null, arguments$1);
                        }
                    } else {
                        // return handler return value for single handlers
                        return fns.apply(null, arguments)
                    }
                }
                invoker.fns = fns;
                return invoker;
				
            }

            function updateListeners(
                on,
                oldOn,
                add,
                remove$$1,
                vm
            ) {
                var name, cur, old, event;
                for (name in on) {
                    cur = on[name];
                    old = oldOn[name];
                    event = normalizeEvent(name);
                    if (isUndef(cur)) {
                        process.env.NODE_ENV !== 'production' && warn(
                            "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
                            vm
                        );
                    } else if (isUndef(old)) {
                        if (isUndef(cur.fns)) {
                            cur = on[name] = createFnInvoker(cur);
                        }
                        add(event.name, cur, event.once, event.capture, event.passive);
                    } else if (cur !== old) {
                        old.fns = cur;
                        on[name] = old;
                    }
                }
                for (name in oldOn) {
                    if (isUndef(on[name])) {
                        event = normalizeEvent(name);
                        remove$$1(event.name, oldOn[name], event.capture);
                    }
                }
            }

            /*  */

            function mergeVNodeHook(def, hookKey, hook) {
                var invoker;
                var oldHook = def[hookKey];

                function wrappedHook() {
                    hook.apply(this, arguments);
                    // important: remove merged hook to ensure it's called only once
                    // and prevent memory leak
                    remove(invoker.fns, wrappedHook);
                }

                if (isUndef(oldHook)) {
                    // no existing hook
                    invoker = createFnInvoker([wrappedHook]);
                } else {
                    /* istanbul ignore if */
                    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
                        // already a merged invoker
                        invoker = oldHook;
                        invoker.fns.push(wrappedHook);
                    } else {
                        // existing plain hook
                        invoker = createFnInvoker([oldHook, wrappedHook]);
                    }
                }

                invoker.merged = true;
                def[hookKey] = invoker;
            }

            /*  */

            function extractPropsFromVNodeData(
                data,
                Ctor,
                tag
            ) {
                // we are only extracting raw values here.
                // validation and default values are handled in the child
                // component itself.
                var propOptions = Ctor.options.props;
                if (isUndef(propOptions)) {
                    return
                }
                var res = {};
                var attrs = data.attrs;
                var props = data.props;
                if (isDef(attrs) || isDef(props)) {
                    for (var key in propOptions) {
                        var altKey = hyphenate(key);
                        if (process.env.NODE_ENV !== 'production') {
                            var keyInLowerCase = key.toLowerCase();
                            if (
                                key !== keyInLowerCase &&
                                attrs && hasOwn(attrs, keyInLowerCase)
                            ) {
                                tip(
                                    "Prop \"" + keyInLowerCase + "\" is passed to component " +
                                    (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
                                    " \"" + key + "\". " +
                                    "Note that HTML attributes are case-insensitive and camelCased " +
                                    "props need to use their kebab-case equivalents when using in-DOM " +
                                    "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
                                );
                            }
                        }
                        checkProp(res, props, key, altKey, true) ||
                            checkProp(res, attrs, key, altKey, false);
                    }
                }
                return res
            }

            function checkProp(
                res,
                hash,
                key,
                altKey,
                preserve
            ) {
                if (isDef(hash)) {
                    if (hasOwn(hash, key)) {
                        res[key] = hash[key];
                        if (!preserve) {
                            delete hash[key];
                        }
                        return true
                    } else if (hasOwn(hash, altKey)) {
                        res[key] = hash[altKey];
                        if (!preserve) {
                            delete hash[altKey];
                        }
                        return true
                    }
                }
                return false
            }

            /*  */

            // The template compiler attempts to minimize the need for normalization by
            // statically analyzing the template at compile time.
            //
            // For plain HTML markup, normalization can be completely skipped because the
            // generated render function is guaranteed to return Array<VNode>. There are
            // two cases where extra normalization is needed:

            // 1. When the children contains components - because a functional component
            // may return an Array instead of a single root. In this case, just a simple
            // normalization is needed - if any child is an Array, we flatten the whole
            // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
            // because functional components already normalize their own children.
            function simpleNormalizeChildren(children) {
                for (var i = 0; i < children.length; i++) {
                    if (Array.isArray(children[i])) {
                        return Array.prototype.concat.apply([], children)
                    }
                }
                return children
            }

            // 2. When the children contains constructs that always generated nested Arrays,
            // e.g. <template>, <slot>, v-for, or when the children is provided by user
            // with hand-written render functions / JSX. In such cases a full normalization
            // is needed to cater to all possible types of children values.
            function normalizeChildren(children) {
                return isPrimitive(children) ? [createTextVNode(children)] :
                    Array.isArray(children) ?
                    normalizeArrayChildren(children) :
                    undefined
            }

            function isTextNode(node) {
                return isDef(node) && isDef(node.text) && isFalse(node.isComment)
            }

            function normalizeArrayChildren(children, nestedIndex) {
                var res = [];
                var i, c, last;
                for (i = 0; i < children.length; i++) {
                    c = children[i];
                    if (isUndef(c) || typeof c === 'boolean') { continue }
                    last = res[res.length - 1];
                    //  nested
                    if (Array.isArray(c)) {
                        res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
                    } else if (isPrimitive(c)) {
                        if (isTextNode(last)) {
                            // merge adjacent text nodes
                            // this is necessary for SSR hydration because text nodes are
                            // essentially merged when rendered to HTML strings
                            (last).text += String(c);
                        } else if (c !== '') {
                            // convert primitive to vnode
                            res.push(createTextVNode(c));
                        }
                    } else {
                        if (isTextNode(c) && isTextNode(last)) {
                            // merge adjacent text nodes
                            res[res.length - 1] = createTextVNode(last.text + c.text);
                        } else {
                            // default key for nested array children (likely generated by v-for)
                            if (isTrue(children._isVList) &&
                                isDef(c.tag) &&
                                isUndef(c.key) &&
                                isDef(nestedIndex)) {
                                c.key = "__vlist" + nestedIndex + "_" + i + "__";
                            }
                            res.push(c);
                        }
                    }
                }
                return res
            }

            /*  */

            function ensureCtor(comp, base) {
                return isObject(comp) ?
                    base.extend(comp) :
                    comp
            }

            function resolveAsyncComponent(
                factory,
                baseCtor,
                context
            ) {
                if (isTrue(factory.error) && isDef(factory.errorComp)) {
                    return factory.errorComp
                }

                if (isDef(factory.resolved)) {
                    return factory.resolved
                }

                if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
                    return factory.loadingComp
                }

                if (isDef(factory.contexts)) {
                    // already pending
                    factory.contexts.push(context);
                } else {
                    var contexts = factory.contexts = [context];
                    var sync = true;

                    var forceRender = function() {
                        for (var i = 0, l = contexts.length; i < l; i++) {
                            contexts[i].$forceUpdate();
                        }
                    };

                    var resolve = once(function(res) {
                        // cache resolved
                        factory.resolved = ensureCtor(res, baseCtor);
                        // invoke callbacks only if this is not a synchronous resolve
                        // (async resolves are shimmed as synchronous during SSR)
                        if (!sync) {
                            forceRender();
                        }
                    });

                    var reject = once(function(reason) {
                        process.env.NODE_ENV !== 'production' && warn(
                            "Failed to resolve async component: " + (String(factory)) +
                            (reason ? ("\nReason: " + reason) : '')
                        );
                        if (isDef(factory.errorComp)) {
                            factory.error = true;
                            forceRender();
                        }
                    });

                    var res = factory(resolve, reject);

                    if (isObject(res)) {
                        if (typeof res.then === 'function') {
                            // () => Promise
                            if (isUndef(factory.resolved)) {
                                res.then(resolve, reject);
                            }
                        } else if (isDef(res.component) && typeof res.component.then === 'function') {
                            res.component.then(resolve, reject);

                            if (isDef(res.error)) {
                                factory.errorComp = ensureCtor(res.error, baseCtor);
                            }

                            if (isDef(res.loading)) {
                                factory.loadingComp = ensureCtor(res.loading, baseCtor);
                                if (res.delay === 0) {
                                    factory.loading = true;
                                } else {
                                    setTimeout(function() {
                                        if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                            factory.loading = true;
                                            forceRender();
                                        }
                                    }, res.delay || 200);
                                }
                            }

                            if (isDef(res.timeout)) {
                                setTimeout(function() {
                                    if (isUndef(factory.resolved)) {
                                        reject(
                                            process.env.NODE_ENV !== 'production' ?
                                            ("timeout (" + (res.timeout) + "ms)") :
                                            null
                                        );
                                    }
                                }, res.timeout);
                            }
                        }
                    }

                    sync = false;
                    // return in case resolved synchronously
                    return factory.loading ?
                        factory.loadingComp :
                        factory.resolved
                }
            }

            /*  */

            function getFirstComponentChild(children) {
                if (Array.isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                        var c = children[i];
                        if (isDef(c) && isDef(c.componentOptions)) {
                            return c
                        }
                    }
                }
            }

            /*  */

            /*  */

            function initEvents(vm) {
                vm._events = Object.create(null);
                vm._hasHookEvent = false;
                // init parent attached events
                var listeners = vm.$options._parentListeners;
                if (listeners) {
                    updateComponentListeners(vm, listeners);
                }
            }

            var target;

            function add(event, fn, once$$1) {
                if (once$$1) {
                    target.$once(event, fn);
                } else {
                    target.$on(event, fn);
                }
            }

            function remove$1(event, fn) {
                target.$off(event, fn);
            }

            function updateComponentListeners(
                vm,
                listeners,
                oldListeners
            ) {
                target = vm;
                updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
            }

            function eventsMixin(Vue) {
                var hookRE = /^hook:/;
                Vue.prototype.$on = function(event, fn) {
                    var this$1 = this;

                    var vm = this;
                    if (Array.isArray(event)) {
                        for (var i = 0, l = event.length; i < l; i++) {
                            this$1.$on(event[i], fn);
                        }
                    } else {
                        (vm._events[event] || (vm._events[event] = [])).push(fn);
                        // optimize hook:event cost by using a boolean flag marked at registration
                        // instead of a hash lookup
                        if (hookRE.test(event)) {
                            vm._hasHookEvent = true;
                        }
                    }
                    return vm
                };

                Vue.prototype.$once = function(event, fn) {
                    var vm = this;

                    function on() {
                        vm.$off(event, on);
                        fn.apply(vm, arguments);
                    }
                    on.fn = fn;
                    vm.$on(event, on);
                    return vm
                };

                Vue.prototype.$off = function(event, fn) {
                    var this$1 = this;

                    var vm = this;
                    // all
                    if (!arguments.length) {
                        vm._events = Object.create(null);
                        return vm
                    }
                    // array of events
                    if (Array.isArray(event)) {
                        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                            this$1.$off(event[i$1], fn);
                        }
                        return vm
                    }
                    // specific event
                    var cbs = vm._events[event];
                    if (!cbs) {
                        return vm
                    }
                    if (arguments.length === 1) {
                        vm._events[event] = null;
                        return vm
                    }
                    // specific handler
                    var cb;
                    var i = cbs.length;
                    while (i--) {
                        cb = cbs[i];
                        if (cb === fn || cb.fn === fn) {
                            cbs.splice(i, 1);
                            break
                        }
                    }
                    return vm
                };

                Vue.prototype.$emit = function(event) {
                    var vm = this;
                    if (process.env.NODE_ENV !== 'production') {
                        var lowerCaseEvent = event.toLowerCase();
                        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                            tip(
                                "Event \"" + lowerCaseEvent + "\" is emitted in component " +
                                (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
                                "Note that HTML attributes are case-insensitive and you cannot use " +
                                "v-on to listen to camelCase events when using in-DOM templates. " +
                                "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
                            );
                        }
                    }
                    var cbs = vm._events[event];
                    if (cbs) {
                        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                        var args = toArray(arguments, 1);
                        for (var i = 0, l = cbs.length; i < l; i++) {
                            cbs[i].apply(vm, args);
                        }
                    }
                    return vm;
					
                };
            }

            /*  */

            /**
             * Runtime helper for resolving raw children VNodes into a slot object.
             */
            function resolveSlots(
                children,
                context
            ) {
                var slots = {};
                if (!children) {
                    return slots
                }
                var defaultSlot = [];
                for (var i = 0, l = children.length; i < l; i++) {
                    var child = children[i];
                    // named slots should only be respected if the vnode was rendered in the
                    // same context.
                    if ((child.context === context || child.functionalContext === context) &&
                        child.data && child.data.slot != null
                    ) {
                        var name = child.data.slot;
                        var slot = (slots[name] || (slots[name] = []));
                        if (child.tag === 'template') {
                            slot.push.apply(slot, child.children);
                        } else {
                            slot.push(child);
                        }
                    } else {
                        defaultSlot.push(child);
                    }
                }
                // ignore whitespace
                if (!defaultSlot.every(isWhitespace)) {
                    slots.default = defaultSlot;
                }
                return slots
            }

            function isWhitespace(node) {
                return node.isComment || node.text === ' '
            }

            function resolveScopedSlots(
                fns, // see flow/vnode
                res
            ) {
                res = res || {};
                for (var i = 0; i < fns.length; i++) {
                    if (Array.isArray(fns[i])) {
                        resolveScopedSlots(fns[i], res);
                    } else {
                        res[fns[i].key] = fns[i].fn;
                    }
                }
                return res
            }

            /*  */

            var activeInstance = null;

            function initLifecycle(vm) {
                var options = vm.$options;

                // locate first non-abstract parent
                var parent = options.parent;
                if (parent && !options.abstract) {
                    while (parent.$options.abstract && parent.$parent) {
                        parent = parent.$parent;
                    }
                    parent.$children.push(vm);
                }

                vm.$parent = parent;
                vm.$root = parent ? parent.$root : vm;

                vm.$children = [];
                vm.$refs = {};

                vm._watcher = null;
                vm._inactive = null;
                vm._directInactive = false;
                vm._isMounted = false;
                vm._isDestroyed = false;
                vm._isBeingDestroyed = false;
            }

            function lifecycleMixin(Vue) {
                Vue.prototype._update = function(vnode, hydrating) {
                    var vm = this;
                    if (vm._isMounted) {
                        callHook(vm, 'beforeUpdate');
                    }
                    var prevEl = vm.$el;
                    var prevVnode = vm._vnode;
                    var prevActiveInstance = activeInstance;
                    activeInstance = vm;
                    vm._vnode = vnode;
                    // Vue.prototype.__patch__ is injected in entry points
                    // based on the rendering backend used.
                    if (!prevVnode) {
                        // initial render
                        vm.$el = vm.__patch__(
                            vm.$el, vnode, hydrating, false /* removeOnly */ ,
                            vm.$options._parentElm,
                            vm.$options._refElm
                        );
                    } else {
                        // updates
                        vm.$el = vm.__patch__(prevVnode, vnode);
                    }
                    activeInstance = prevActiveInstance;
                    // update __vue__ reference
                    if (prevEl) {
                        prevEl.__vue__ = null;
                    }
                    if (vm.$el) {
                        vm.$el.__vue__ = vm;
                    }
                    // if parent is an HOC, update its $el as well
                    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                        vm.$parent.$el = vm.$el;
                    }
                    // updated hook is called by the scheduler to ensure that children are
                    // updated in a parent's updated hook.
                };

                Vue.prototype.$forceUpdate = function() {
                    var vm = this;
                    if (vm._watcher) {
                        vm._watcher.update();
                    }
                };

                Vue.prototype.$destroy = function() {
                    var vm = this;
                    if (vm._isBeingDestroyed) {
                        return
                    }
                    callHook(vm, 'beforeDestroy');
                    vm._isBeingDestroyed = true;
                    // remove self from parent
                    var parent = vm.$parent;
                    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                        remove(parent.$children, vm);
                    }
                    // teardown watchers
                    if (vm._watcher) {
                        vm._watcher.teardown();
                    }
                    var i = vm._watchers.length;
                    while (i--) {
                        vm._watchers[i].teardown();
                    }
                    // remove reference from data ob
                    // frozen object may not have observer.
                    if (vm._data.__ob__) {
                        vm._data.__ob__.vmCount--;
                    }
                    // call the last hook...
                    vm._isDestroyed = true;
                    // invoke destroy hooks on current rendered tree
                    vm.__patch__(vm._vnode, null);
                    // fire destroyed hook
                    callHook(vm, 'destroyed');
                    // turn off all instance listeners.
                    vm.$off();
                    // remove __vue__ reference
                    if (vm.$el) {
                        vm.$el.__vue__ = null;
                    }
                    // remove reference to DOM nodes (prevents leak)
                    vm.$options._parentElm = vm.$options._refElm = null;
                };
            }

            function mountComponent(
                vm,
                el,
                hydrating
            ) {
                vm.$el = el;
                if (!vm.$options.render) {
                    vm.$options.render = createEmptyVNode;
                    if (process.env.NODE_ENV !== 'production') {
                        /* istanbul ignore if */
                        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                            vm.$options.el || el) {
                            warn(
                                'You are using the runtime-only build of Vue where the template ' +
                                'compiler is not available. Either pre-compile the templates into ' +
                                'render functions, or use the compiler-included build.',
                                vm
                            );
                        } else {
                            warn(
                                'Failed to mount component: template or render function not defined.',
                                vm
                            );
                        }
                    }
                }
                callHook(vm, 'beforeMount');

                var updateComponent;
                /* istanbul ignore if */
                if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
                    updateComponent = function() {
                        var name = vm._name;
                        var id = vm._uid;
                        var startTag = "vue-perf-start:" + id;
                        var endTag = "vue-perf-end:" + id;

                        mark(startTag);
                        var vnode = vm._render();
                        mark(endTag);
                        measure((name + " render"), startTag, endTag);

                        mark(startTag);
                        vm._update(vnode, hydrating);
                        mark(endTag);
                        measure((name + " patch"), startTag, endTag);
                    };
                } else {
                    updateComponent = function() {
                        vm._update(vm._render(), hydrating);
                    };
                }

                vm._watcher = new Watcher(vm, updateComponent, noop);
                hydrating = false;

                // manually mounted instance, call mounted on self
                // mounted is called for render-created child components in its inserted hook
                if (vm.$vnode == null) {
                    vm._isMounted = true;
                    callHook(vm, 'mounted');
                }
                return vm
            }

            function updateChildComponent(
                vm,
                propsData,
                listeners,
                parentVnode,
                renderChildren
            ) {
                // determine whether component has slot children
                // we need to do this before overwriting $options._renderChildren
                var hasChildren = !!(
                    renderChildren || // has new static slots
                    vm.$options._renderChildren || // has old static slots
                    parentVnode.data.scopedSlots || // has new scoped slots
                    vm.$scopedSlots !== emptyObject // has old scoped slots
                );

                vm.$options._parentVnode = parentVnode;
                vm.$vnode = parentVnode; // update vm's placeholder node without re-render
                if (vm._vnode) { // update child tree's parent
                    vm._vnode.parent = parentVnode;
                }
                vm.$options._renderChildren = renderChildren;

                // update props
                if (propsData && vm.$options.props) {
                    observerState.shouldConvert = false;
                    if (process.env.NODE_ENV !== 'production') {
                        observerState.isSettingProps = true;
                    }
                    var props = vm._props;
                    var propKeys = vm.$options._propKeys || [];
                    for (var i = 0; i < propKeys.length; i++) {
                        var key = propKeys[i];
                        props[key] = validateProp(key, vm.$options.props, propsData, vm);
                    }
                    observerState.shouldConvert = true;
                    if (process.env.NODE_ENV !== 'production') {
                        observerState.isSettingProps = false;
                    }
                    // keep a copy of raw propsData
                    vm.$options.propsData = propsData;
                }
                // update listeners
                if (listeners) {
                    var oldListeners = vm.$options._parentListeners;
                    vm.$options._parentListeners = listeners;
                    updateComponentListeners(vm, listeners, oldListeners);
                }
                // resolve slots + force update if has children
                if (hasChildren) {
                    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
                    vm.$forceUpdate();
                }
            }

            function isInInactiveTree(vm) {
                while (vm && (vm = vm.$parent)) {
                    if (vm._inactive) { return true }
                }
                return false
            }

            function activateChildComponent(vm, direct) {
                if (direct) {
                    vm._directInactive = false;
                    if (isInInactiveTree(vm)) {
                        return
                    }
                } else if (vm._directInactive) {
                    return
                }
                if (vm._inactive || vm._inactive === null) {
                    vm._inactive = false;
                    for (var i = 0; i < vm.$children.length; i++) {
                        activateChildComponent(vm.$children[i]);
                    }
                    callHook(vm, 'activated');
                }
            }

            function deactivateChildComponent(vm, direct) {
                if (direct) {
                    vm._directInactive = true;
                    if (isInInactiveTree(vm)) {
                        return
                    }
                }
                if (!vm._inactive) {
                    vm._inactive = true;
                    for (var i = 0; i < vm.$children.length; i++) {
                        deactivateChildComponent(vm.$children[i]);
                    }
                    callHook(vm, 'deactivated');
                }
            }

            function callHook(vm, hook) {
                var handlers = vm.$options[hook];
                if (handlers) {
                    for (var i = 0, j = handlers.length; i < j; i++) {
                        try {
                            handlers[i].call(vm);
                        } catch (e) {
                            handleError(e, vm, (hook + " hook"));
                        }
                    }
                }
                if (vm._hasHookEvent) {
                    vm.$emit('hook:' + hook);
                }
            }

            /*  */


            var MAX_UPDATE_COUNT = 100;

            var queue = [];
            var activatedChildren = [];
            var has = {};
            var circular = {};
            var waiting = false;
            var flushing = false;
            var index = 0;

            /**
             * Reset the scheduler's state.
             */
            function resetSchedulerState() {
                index = queue.length = activatedChildren.length = 0;
                has = {};
                if (process.env.NODE_ENV !== 'production') {
                    circular = {};
                }
                waiting = flushing = false;
            }

            /**
             * Flush both queues and run the watchers.
             */
            function flushSchedulerQueue() {
                flushing = true;
                var watcher, id;

                // Sort queue before flush.
                // This ensures that:
                // 1. Components are updated from parent to child. (because parent is always
                //    created before the child)
                // 2. A component's user watchers are run before its render watcher (because
                //    user watchers are created before the render watcher)
                // 3. If a component is destroyed during a parent component's watcher run,
                //    its watchers can be skipped.
                queue.sort(function(a, b) { return a.id - b.id; });

                // do not cache length because more watchers might be pushed
                // as we run existing watchers
                for (index = 0; index < queue.length; index++) {
                    watcher = queue[index];
                    id = watcher.id;
                    has[id] = null;
                    watcher.run();
                    // in dev build, check and stop circular updates.
                    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
                        circular[id] = (circular[id] || 0) + 1;
                        if (circular[id] > MAX_UPDATE_COUNT) {
                            warn(
                                'You may have an infinite update loop ' + (
                                    watcher.user ?
                                    ("in watcher with expression \"" + (watcher.expression) + "\"") :
                                    "in a component render function."
                                ),
                                watcher.vm
                            );
                            break
                        }
                    }
                }

                // keep copies of post queues before resetting state
                var activatedQueue = activatedChildren.slice();
                var updatedQueue = queue.slice();

                resetSchedulerState();

                // call component updated and activated hooks
                callActivatedHooks(activatedQueue);
                callUpdateHooks(updatedQueue);

                // devtool hook
                /* istanbul ignore if */
                if (devtools && config.devtools) {
                    devtools.emit('flush');
                }
            }

            function callUpdateHooks(queue) {
                var i = queue.length;
                while (i--) {
                    var watcher = queue[i];
                    var vm = watcher.vm;
                    if (vm._watcher === watcher && vm._isMounted) {
                        callHook(vm, 'updated');
                    }
                }
            }

            /**
             * Queue a kept-alive component that was activated during patch.
             * The queue will be processed after the entire tree has been patched.
             */
            function queueActivatedComponent(vm) {
                // setting _inactive to false here so that a render function can
                // rely on checking whether it's in an inactive tree (e.g. router-view)
                vm._inactive = false;
                activatedChildren.push(vm);
            }

            function callActivatedHooks(queue) {
                for (var i = 0; i < queue.length; i++) {
                    queue[i]._inactive = true;
                    activateChildComponent(queue[i], true /* true */ );
                }
            }

            /**
             * Push a watcher into the watcher queue.
             * Jobs with duplicate IDs will be skipped unless it's
             * pushed when the queue is being flushed.
             */
            function queueWatcher(watcher) {
                var id = watcher.id;
                if (has[id] == null) {
                    has[id] = true;
                    if (!flushing) {
                        queue.push(watcher);
                    } else {
                        // if already flushing, splice the watcher based on its id
                        // if already past its id, it will be run next immediately.
                        var i = queue.length - 1;
                        while (i > index && queue[i].id > watcher.id) {
                            i--;
                        }
                        queue.splice(i + 1, 0, watcher);
                    }
                    // queue the flush
                    if (!waiting) {
                        waiting = true;
                        nextTick(flushSchedulerQueue);
                    }
                }
            }

            /*  */

            var uid$2 = 0;

            /**
             * A watcher parses an expression, collects dependencies,
             * and fires callback when the expression value changes.
             * This is used for both the $watch() api and directives.
             */
            var Watcher = function Watcher(
                vm,
                expOrFn,
                cb,
                options
            ) {
                this.vm = vm;
                vm._watchers.push(this);
                // options
                if (options) {
                    this.deep = !!options.deep;
                    this.user = !!options.user;
                    this.lazy = !!options.lazy;
                    this.sync = !!options.sync;
                } else {
                    this.deep = this.user = this.lazy = this.sync = false;
                }
                this.cb = cb;
                this.id = ++uid$2; // uid for batching
                this.active = true;
                this.dirty = this.lazy; // for lazy watchers
                this.deps = [];
                this.newDeps = [];
                this.depIds = new _Set();
                this.newDepIds = new _Set();
                this.expression = process.env.NODE_ENV !== 'production' ?
                    expOrFn.toString() :
                    '';
                // parse expression for getter
                if (typeof expOrFn === 'function') {
                    this.getter = expOrFn;
                } else {
                    this.getter = parsePath(expOrFn);
                    if (!this.getter) {
                        this.getter = function() {};
                        process.env.NODE_ENV !== 'production' && warn(
                            "Failed watching path: \"" + expOrFn + "\" " +
                            'Watcher only accepts simple dot-delimited paths. ' +
                            'For full control, use a function instead.',
                            vm
                        );
                    }
                }
                this.value = this.lazy ?
                    undefined :
                    this.get();
            };

            /**
             * Evaluate the getter, and re-collect dependencies.
             */
            Watcher.prototype.get = function get() {
                pushTarget(this);
                var value;
                var vm = this.vm;
                if (this.user) {
                    try {
                        value = this.getter.call(vm, vm);
                    } catch (e) {
                        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
                    }
                } else {
                    value = this.getter.call(vm, vm);
                }
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) {
                    traverse(value);
                }
                popTarget();
                this.cleanupDeps();
                return value
            };

            /**
             * Add a dependency to this directive.
             */
            Watcher.prototype.addDep = function addDep(dep) {
                var id = dep.id;
                if (!this.newDepIds.has(id)) {
                    this.newDepIds.add(id);
                    this.newDeps.push(dep);
                    if (!this.depIds.has(id)) {
                        dep.addSub(this);
                    }
                }
            };

            /**
             * Clean up for dependency collection.
             */
            Watcher.prototype.cleanupDeps = function cleanupDeps() {
                var this$1 = this;

                var i = this.deps.length;
                while (i--) {
                    var dep = this$1.deps[i];
                    if (!this$1.newDepIds.has(dep.id)) {
                        dep.removeSub(this$1);
                    }
                }
                var tmp = this.depIds;
                this.depIds = this.newDepIds;
                this.newDepIds = tmp;
                this.newDepIds.clear();
                tmp = this.deps;
                this.deps = this.newDeps;
                this.newDeps = tmp;
                this.newDeps.length = 0;
            };

            /**
             * Subscriber interface.
             * Will be called when a dependency changes.
             */
            Watcher.prototype.update = function update() {
                /* istanbul ignore else */
                if (this.lazy) {
                    this.dirty = true;
                } else if (this.sync) {
                    this.run();
                } else {
                    queueWatcher(this);
                }
            };

            /**
             * Scheduler job interface.
             * Will be called by the scheduler.
             */
            Watcher.prototype.run = function run() {
                if (this.active) {
                    var value = this.get();
                    if (
                        value !== this.value ||
                        // Deep watchers and watchers on Object/Arrays should fire even
                        // when the value is the same, because the value may
                        // have mutated.
                        isObject(value) ||
                        this.deep
                    ) {
                        // set new value
                        var oldValue = this.value;
                        this.value = value;
                        if (this.user) {
                            try {
                                this.cb.call(this.vm, value, oldValue);
                            } catch (e) {
                                handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
                            }
                        } else {
                            this.cb.call(this.vm, value, oldValue);
                        }
                    }
                }
            };

            /**
             * Evaluate the value of the watcher.
             * This only gets called for lazy watchers.
             */
            Watcher.prototype.evaluate = function evaluate() {
                this.value = this.get();
                this.dirty = false;
            };

            /**
             * Depend on all deps collected by this watcher.
             */
            Watcher.prototype.depend = function depend() {
                var this$1 = this;

                var i = this.deps.length;
                while (i--) {
                    this$1.deps[i].depend();
                }
            };

            /**
             * Remove self from all dependencies' subscriber list.
             */
            Watcher.prototype.teardown = function teardown() {
                var this$1 = this;

                if (this.active) {
                    // remove self from vm's watcher list
                    // this is a somewhat expensive operation so we skip it
                    // if the vm is being destroyed.
                    if (!this.vm._isBeingDestroyed) {
                        remove(this.vm._watchers, this);
                    }
                    var i = this.deps.length;
                    while (i--) {
                        this$1.deps[i].removeSub(this$1);
                    }
                    this.active = false;
                }
            };

            /**
             * Recursively traverse an object to evoke all converted
             * getters, so that every nested property inside the object
             * is collected as a "deep" dependency.
             */
            var seenObjects = new _Set();

            function traverse(val) {
                seenObjects.clear();
                _traverse(val, seenObjects);
            }

            function _traverse(val, seen) {
                var i, keys;
                var isA = Array.isArray(val);
                if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
                    return
                }
                if (val.__ob__) {
                    var depId = val.__ob__.dep.id;
                    if (seen.has(depId)) {
                        return
                    }
                    seen.add(depId);
                }
                if (isA) {
                    i = val.length;
                    while (i--) { _traverse(val[i], seen); }
                } else {
                    keys = Object.keys(val);
                    i = keys.length;
                    while (i--) { _traverse(val[keys[i]], seen); }
                }
            }

            /*  */

            var sharedPropertyDefinition = {
                enumerable: true,
                configurable: true,
                get: noop,
                set: noop
            };

            function proxy(target, sourceKey, key) {
                sharedPropertyDefinition.get = function proxyGetter() {
                    return this[sourceKey][key]
                };
                sharedPropertyDefinition.set = function proxySetter(val) {
                    this[sourceKey][key] = val;
                };
                Object.defineProperty(target, key, sharedPropertyDefinition);
            }

            function initState(vm) {
                vm._watchers = [];
                var opts = vm.$options;
                if (opts.props) { initProps(vm, opts.props); }
                if (opts.methods) { initMethods(vm, opts.methods); }
                if (opts.data) {
                    initData(vm);
                } else {
                    observe(vm._data = {}, true /* asRootData */ );
                }
                if (opts.computed) { initComputed(vm, opts.computed); }
                if (opts.watch) { initWatch(vm, opts.watch); }
            }

            var isReservedProp = {
                key: 1,
                ref: 1,
                slot: 1
            };

            function initProps(vm, propsOptions) {
                var propsData = vm.$options.propsData || {};
                var props = vm._props = {};
                // cache prop keys so that future props updates can iterate using Array
                // instead of dynamic object key enumeration.
                var keys = vm.$options._propKeys = [];
                var isRoot = !vm.$parent;
                // root instance props should be converted
                observerState.shouldConvert = isRoot;
                var loop = function(key) {
                    keys.push(key);
                    var value = validateProp(key, propsOptions, propsData, vm);
                    /* istanbul ignore else */
                    if (process.env.NODE_ENV !== 'production') {
                        if (isReservedProp[key] || config.isReservedAttr(key)) {
                            warn(
                                ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
                                vm
                            );
                        }
                        defineReactive$$1(props, key, value, function() {
                            if (vm.$parent && !observerState.isSettingProps) {
                                warn(
                                    "Avoid mutating a prop directly since the value will be " +
                                    "overwritten whenever the parent component re-renders. " +
                                    "Instead, use a data or computed property based on the prop's " +
                                    "value. Prop being mutated: \"" + key + "\"",
                                    vm
                                );
                            }
                        });
                    } else {
                        defineReactive$$1(props, key, value);
                    }
                    // static props are already proxied on the component's prototype
                    // during Vue.extend(). We only need to proxy props defined at
                    // instantiation here.
                    if (!(key in vm)) {
                        proxy(vm, "_props", key);
                    }
                };

                for (var key in propsOptions) loop(key);
                observerState.shouldConvert = true;
            }

            function initData(vm) {
                var data = vm.$options.data;
                data = vm._data = typeof data === 'function' ?
                    getData(data, vm) :
                    data || {};
                if (!isPlainObject(data)) {
                    data = {};
                    process.env.NODE_ENV !== 'production' && warn(
                        'data functions should return an object:\n' +
                        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
                        vm
                    );
                }
                // proxy data on instance
                var keys = Object.keys(data);
                var props = vm.$options.props;
                var i = keys.length;
                while (i--) {
                    if (props && hasOwn(props, keys[i])) {
                        process.env.NODE_ENV !== 'production' && warn(
                            "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
                            "Use prop default value instead.",
                            vm
                        );
                    } else if (!isReserved(keys[i])) {
                        proxy(vm, "_data", keys[i]);
                    }
                }
                // observe data
                observe(data, true /* asRootData */ );
            }

            function getData(data, vm) {
                try {
                    return data.call(vm)
                } catch (e) {
                    handleError(e, vm, "data()");
                    return {}
                }
            }

            var computedWatcherOptions = { lazy: true };

            function initComputed(vm, computed) {
                var watchers = vm._computedWatchers = Object.create(null);

                for (var key in computed) {
                    var userDef = computed[key];
                    var getter = typeof userDef === 'function' ? userDef : userDef.get;
                    if (process.env.NODE_ENV !== 'production') {
                        if (getter === undefined) {
                            warn(
                                ("No getter function has been defined for computed property \"" + key + "\"."),
                                vm
                            );
                            getter = noop;
                        }
                    }
                    // create internal watcher for the computed property.
                    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

                    // component-defined computed properties are already defined on the
                    // component prototype. We only need to define computed properties defined
                    // at instantiation here.
                    if (!(key in vm)) {
                        defineComputed(vm, key, userDef);
                    } else if (process.env.NODE_ENV !== 'production') {
                        if (key in vm.$data) {
                            warn(("The computed property \"" + key + "\" is already defined in data."), vm);
                        } else if (vm.$options.props && key in vm.$options.props) {
                            warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
                        }
                    }
                }
            }

            function defineComputed(target, key, userDef) {
                if (typeof userDef === 'function') {
                    sharedPropertyDefinition.get = createComputedGetter(key);
                    sharedPropertyDefinition.set = noop;
                } else {
                    sharedPropertyDefinition.get = userDef.get ?
                        userDef.cache !== false ?
                        createComputedGetter(key) :
                        userDef.get :
                        noop;
                    sharedPropertyDefinition.set = userDef.set ?
                        userDef.set :
                        noop;
                }
                Object.defineProperty(target, key, sharedPropertyDefinition);
            }

            function createComputedGetter(key) {
                return function computedGetter() {
                    var watcher = this._computedWatchers && this._computedWatchers[key];
                    if (watcher) {
                        if (watcher.dirty) {
                            watcher.evaluate();
                        }
                        if (Dep.target) {
                            watcher.depend();
                        }
                        return watcher.value
                    }
                }
            }

            function initMethods(vm, methods) {
                var props = vm.$options.props;
                for (var key in methods) {
                    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
                    if (process.env.NODE_ENV !== 'production') {
                        if (methods[key] == null) {
                            warn(
                                "method \"" + key + "\" has an undefined value in the component definition. " +
                                "Did you reference the function correctly?",
                                vm
                            );
                        }
                        if (props && hasOwn(props, key)) {
                            warn(
                                ("method \"" + key + "\" has already been defined as a prop."),
                                vm
                            );
                        }
                    }
                }
            }

            function initWatch(vm, watch) {
                for (var key in watch) {
                    var handler = watch[key];
                    if (Array.isArray(handler)) {
                        for (var i = 0; i < handler.length; i++) {
                            createWatcher(vm, key, handler[i]);
                        }
                    } else {
                        createWatcher(vm, key, handler);
                    }
                }
            }

            function createWatcher(vm, key, handler) {
                var options;
                if (isPlainObject(handler)) {
                    options = handler;
                    handler = handler.handler;
                }
                if (typeof handler === 'string') {
                    handler = vm[handler];
                }
                vm.$watch(key, handler, options);
            }

            function stateMixin(Vue) {
                // flow somehow has problems with directly declared definition object
                // when using Object.defineProperty, so we have to procedurally build up
                // the object here.
                var dataDef = {};
                dataDef.get = function() { return this._data };
                var propsDef = {};
                propsDef.get = function() { return this._props };
                if (process.env.NODE_ENV !== 'production') {
                    dataDef.set = function(newData) {
                        warn(
                            'Avoid replacing instance root $data. ' +
                            'Use nested data properties instead.',
                            this
                        );
                    };
                    propsDef.set = function() {
                        warn("$props is readonly.", this);
                    };
                }
                Object.defineProperty(Vue.prototype, '$data', dataDef);
                Object.defineProperty(Vue.prototype, '$props', propsDef);

                Vue.prototype.$set = set;
                Vue.prototype.$delete = del;

                Vue.prototype.$watch = function(
                    expOrFn,
                    cb,
                    options
                ) {
                    var vm = this;
                    options = options || {};
                    options.user = true;
                    var watcher = new Watcher(vm, expOrFn, cb, options);
                    if (options.immediate) {
                        cb.call(vm, watcher.value);
                    }
                    return function unwatchFn() {
                        watcher.teardown();
                    }
                };
            }

            /*  */

            function initProvide(vm) {
                var provide = vm.$options.provide;
                if (provide) {
                    vm._provided = typeof provide === 'function' ?
                        provide.call(vm) :
                        provide;
                }
            }

            function initInjections(vm) {
                var result = resolveInject(vm.$options.inject, vm);
                if (result) {
                    Object.keys(result).forEach(function(key) {
                        /* istanbul ignore else */
                        if (process.env.NODE_ENV !== 'production') {
                            defineReactive$$1(vm, key, result[key], function() {
                                warn(
                                    "Avoid mutating an injected value directly since the changes will be " +
                                    "overwritten whenever the provided component re-renders. " +
                                    "injection being mutated: \"" + key + "\"",
                                    vm
                                );
                            });
                        } else {
                            defineReactive$$1(vm, key, result[key]);
                        }
                    });
                }
            }

            function resolveInject(inject, vm) {
                if (inject) {
                    // inject is :any because flow is not smart enough to figure out cached
                    // isArray here
                    var isArray = Array.isArray(inject);
                    var result = Object.create(null);
                    var keys = isArray ?
                        inject :
                        hasSymbol ?
                        Reflect.ownKeys(inject) :
                        Object.keys(inject);

                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        var provideKey = isArray ? key : inject[key];
                        var source = vm;
                        while (source) {
                            if (source._provided && provideKey in source._provided) {
                                result[key] = source._provided[provideKey];
                                break
                            }
                            source = source.$parent;
                        }
                    }
                    return result
                }
            }

            /*  */

            function createFunctionalComponent(
                Ctor,
                propsData,
                data,
                context,
                children
            ) {
                var props = {};
                var propOptions = Ctor.options.props;
                if (isDef(propOptions)) {
                    for (var key in propOptions) {
                        props[key] = validateProp(key, propOptions, propsData || {});
                    }
                } else {
                    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
                    if (isDef(data.props)) { mergeProps(props, data.props); }
                }
                // ensure the createElement function in functional components
                // gets a unique context - this is necessary for correct named slot check
                var _context = Object.create(context);
                var h = function(a, b, c, d) { return createElement(_context, a, b, c, d, true); };
                var vnode = Ctor.options.render.call(null, h, {
                    data: data,
                    props: props,
                    children: children,
                    parent: context,
                    listeners: data.on || {},
                    injections: resolveInject(Ctor.options.inject, context),
                    slots: function() { return resolveSlots(children, context); }
                });
                if (vnode instanceof VNode) {
                    vnode.functionalContext = context;
                    vnode.functionalOptions = Ctor.options;
                    if (data.slot) {
                        (vnode.data || (vnode.data = {})).slot = data.slot;
                    }
                }
                return vnode
            }

            function mergeProps(to, from) {
                for (var key in from) {
                    to[camelize(key)] = from[key];
                }
            }

            /*  */

            // hooks to be invoked on component VNodes during patch
            var componentVNodeHooks = {
                init: function init(
                    vnode,
                    hydrating,
                    parentElm,
                    refElm
                ) {
                    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
                        var child = vnode.componentInstance = createComponentInstanceForVnode(
                            vnode,
                            activeInstance,
                            parentElm,
                            refElm
                        );
                        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
                    } else if (vnode.data.keepAlive) {
                        // kept-alive components, treat as a patch
                        var mountedNode = vnode; // work around flow
                        componentVNodeHooks.prepatch(mountedNode, mountedNode);
                    }
                },

                prepatch: function prepatch(oldVnode, vnode) {
                    var options = vnode.componentOptions;
                    var child = vnode.componentInstance = oldVnode.componentInstance;
                    updateChildComponent(
                        child,
                        options.propsData, // updated props
                        options.listeners, // updated listeners
                        vnode, // new parent vnode
                        options.children // new children
                    );
                },

                insert: function insert(vnode) {
                    var context = vnode.context;
                    var componentInstance = vnode.componentInstance;
                    if (!componentInstance._isMounted) {
                        componentInstance._isMounted = true;
                        callHook(componentInstance, 'mounted');
                    }
                    if (vnode.data.keepAlive) {
                        if (context._isMounted) {
                            // vue-router#1212
                            // During updates, a kept-alive component's child components may
                            // change, so directly walking the tree here may call activated hooks
                            // on incorrect children. Instead we push them into a queue which will
                            // be processed after the whole patch process ended.
                            queueActivatedComponent(componentInstance);
                        } else {
                            activateChildComponent(componentInstance, true /* direct */ );
                        }
                    }
                },

                destroy: function destroy(vnode) {
                    var componentInstance = vnode.componentInstance;
                    if (!componentInstance._isDestroyed) {
                        if (!vnode.data.keepAlive) {
                            componentInstance.$destroy();
                        } else {
                            deactivateChildComponent(componentInstance, true /* direct */ );
                        }
                    }
                }
            };

            var hooksToMerge = Object.keys(componentVNodeHooks);

            function createComponent(
                Ctor,
                data,
                context,
                children,
                tag
            ) {
                if (isUndef(Ctor)) {
                    return
                }

                var baseCtor = context.$options._base;

                // plain options object: turn it into a constructor
                if (isObject(Ctor)) {
                    Ctor = baseCtor.extend(Ctor);
                }

                // if at this stage it's not a constructor or an async component factory,
                // reject.
                if (typeof Ctor !== 'function') {
                    if (process.env.NODE_ENV !== 'production') {
                        warn(("Invalid Component definition: " + (String(Ctor))), context);
                    }
                    return
                }

                // async component
                if (isUndef(Ctor.cid)) {
                    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
                    if (Ctor === undefined) {
                        // return nothing if this is indeed an async component
                        // wait for the callback to trigger parent update.
                        return
                    }
                }

                // resolve constructor options in case global mixins are applied after
                // component constructor creation
                resolveConstructorOptions(Ctor);

                data = data || {};

                // transform component v-model data into props & events
                if (isDef(data.model)) {
                    transformModel(Ctor.options, data);
                }

                // extract props
                var propsData = extractPropsFromVNodeData(data, Ctor, tag);

                // functional component
                if (isTrue(Ctor.options.functional)) {
                    return createFunctionalComponent(Ctor, propsData, data, context, children)
                }

                // extract listeners, since these needs to be treated as
                // child component listeners instead of DOM listeners
                var listeners = data.on;
                // replace with listeners with .native modifier
                data.on = data.nativeOn;

                if (isTrue(Ctor.options.abstract)) {
                    // abstract components do not keep anything
                    // other than props & listeners
                    data = {};
                }

                // merge component management hooks onto the placeholder node
                mergeHooks(data);

                // return a placeholder vnode
                var name = Ctor.options.name || tag;
                var vnode = new VNode(
                    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
                    data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
                );
                return vnode
            }

            function createComponentInstanceForVnode(
                vnode, // we know it's MountedComponentVNode but flow doesn't
                parent, // activeInstance in lifecycle state
                parentElm,
                refElm
            ) {
                var vnodeComponentOptions = vnode.componentOptions;
                var options = {
                    _isComponent: true,
                    parent: parent,
                    propsData: vnodeComponentOptions.propsData,
                    _componentTag: vnodeComponentOptions.tag,
                    _parentVnode: vnode,
                    _parentListeners: vnodeComponentOptions.listeners,
                    _renderChildren: vnodeComponentOptions.children,
                    _parentElm: parentElm || null,
                    _refElm: refElm || null
                };
                // check inline-template render functions
                var inlineTemplate = vnode.data.inlineTemplate;
                if (isDef(inlineTemplate)) {
                    options.render = inlineTemplate.render;
                    options.staticRenderFns = inlineTemplate.staticRenderFns;
                }
                return new vnodeComponentOptions.Ctor(options)
            }

            function mergeHooks(data) {
                if (!data.hook) {
                    data.hook = {};
                }
                for (var i = 0; i < hooksToMerge.length; i++) {
                    var key = hooksToMerge[i];
                    var fromParent = data.hook[key];
                    var ours = componentVNodeHooks[key];
                    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
                }
            }

            function mergeHook$1(one, two) {
                return function(a, b, c, d) {
                    one(a, b, c, d);
                    two(a, b, c, d);
                }
            }

            // transform component v-model info (value and callback) into
            // prop and event handler respectively.
            function transformModel(options, data) {
                var prop = (options.model && options.model.prop) || 'value';
                var event = (options.model && options.model.event) || 'input';
                (data.props || (data.props = {}))[prop] = data.model.value;
                var on = data.on || (data.on = {});
                if (isDef(on[event])) {
                    on[event] = [data.model.callback].concat(on[event]);
                } else {
                    on[event] = data.model.callback;
                }
            }

            /*  */

            var SIMPLE_NORMALIZE = 1;
            var ALWAYS_NORMALIZE = 2;

            // wrapper function for providing a more flexible interface
            // without getting yelled at by flow
            function createElement(
                context,
                tag,
                data,
                children,
                normalizationType,
                alwaysNormalize
            ) {
                if (Array.isArray(data) || isPrimitive(data)) {
                    normalizationType = children;
                    children = data;
                    data = undefined;
                }
                if (isTrue(alwaysNormalize)) {
                    normalizationType = ALWAYS_NORMALIZE;
                }
                return _createElement(context, tag, data, children, normalizationType)
            }

            function _createElement(
                context,
                tag,
                data,
                children,
                normalizationType
            ) {
                if (isDef(data) && isDef((data).__ob__)) {
                    process.env.NODE_ENV !== 'production' && warn(
                        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
                        'Always create fresh vnode data objects in each render!',
                        context
                    );
                    return createEmptyVNode()
                }
                if (!tag) {
                    // in case of component :is set to falsy value
                    return createEmptyVNode()
                }
                // support single function children as default scoped slot
                if (Array.isArray(children) &&
                    typeof children[0] === 'function'
                ) {
                    data = data || {};
                    data.scopedSlots = { default: children[0] };
                    children.length = 0;
                }
                if (normalizationType === ALWAYS_NORMALIZE) {
                    children = normalizeChildren(children);
                } else if (normalizationType === SIMPLE_NORMALIZE) {
                    children = simpleNormalizeChildren(children);
                }
                var vnode, ns;
                if (typeof tag === 'string') {
                    var Ctor;
                    ns = config.getTagNamespace(tag);
                    if (config.isReservedTag(tag)) {
                        // platform built-in elements
                        vnode = new VNode(
                            config.parsePlatformTagName(tag), data, children,
                            undefined, undefined, context
                        );
                    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
                        // component
                        vnode = createComponent(Ctor, data, context, children, tag);
                    } else {
                        // unknown or unlisted namespaced elements
                        // check at runtime because it may get assigned a namespace when its
                        // parent normalizes children
                        vnode = new VNode(
                            tag, data, children,
                            undefined, undefined, context
                        );
                    }
                } else {
                    // direct component options / constructor
                    vnode = createComponent(tag, data, context, children);
                }
                if (isDef(vnode)) {
                    if (ns) { applyNS(vnode, ns); }
                    return vnode
                } else {
                    return createEmptyVNode()
                }
            }

            function applyNS(vnode, ns) {
                vnode.ns = ns;
                if (vnode.tag === 'foreignObject') {
                    // use default namespace inside foreignObject
                    return
                }
                if (isDef(vnode.children)) {
                    for (var i = 0, l = vnode.children.length; i < l; i++) {
                        var child = vnode.children[i];
                        if (isDef(child.tag) && isUndef(child.ns)) {
                            applyNS(child, ns);
                        }
                    }
                }
            }

            /*  */

            /**
             * Runtime helper for rendering v-for lists.
             */
            function renderList(
                val,
                render
            ) {
                var ret, i, l, keys, key;
                if (Array.isArray(val) || typeof val === 'string') {
                    ret = new Array(val.length);
                    for (i = 0, l = val.length; i < l; i++) {
                        ret[i] = render(val[i], i);
                    }
                } else if (typeof val === 'number') {
                    ret = new Array(val);
                    for (i = 0; i < val; i++) {
                        ret[i] = render(i + 1, i);
                    }
                } else if (isObject(val)) {
                    keys = Object.keys(val);
                    ret = new Array(keys.length);
                    for (i = 0, l = keys.length; i < l; i++) {
                        key = keys[i];
                        ret[i] = render(val[key], key, i);
                    }
                }
                if (isDef(ret)) {
                    (ret)._isVList = true;
                }
                return ret
            }

            /*  */

            /**
             * Runtime helper for rendering <slot>
             */
            function renderSlot(
                name,
                fallback,
                props,
                bindObject
            ) {
                var scopedSlotFn = this.$scopedSlots[name];
                if (scopedSlotFn) { // scoped slot
                    props = props || {};
                    if (bindObject) {
                        extend(props, bindObject);
                    }
                    return scopedSlotFn(props) || fallback
                } else {
                    var slotNodes = this.$slots[name];
                    // warn duplicate slot usage
                    if (slotNodes && process.env.NODE_ENV !== 'production') {
                        slotNodes._rendered && warn(
                            "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
                            "- this will likely cause render errors.",
                            this
                        );
                        slotNodes._rendered = true;
                    }
                    return slotNodes || fallback
                }
            }

            /*  */

            /**
             * Runtime helper for resolving filters
             */
            function resolveFilter(id) {
                return resolveAsset(this.$options, 'filters', id, true) || identity
            }

            /*  */

            /**
             * Runtime helper for checking keyCodes from config.
             */
            function checkKeyCodes(
                eventKeyCode,
                key,
                builtInAlias
            ) {
                var keyCodes = config.keyCodes[key] || builtInAlias;
                if (Array.isArray(keyCodes)) {
                    return keyCodes.indexOf(eventKeyCode) === -1
                } else {
                    return keyCodes !== eventKeyCode
                }
            }

            /*  */

            /**
             * Runtime helper for merging v-bind="object" into a VNode's data.
             */
            function bindObjectProps(
                data,
                tag,
                value,
                asProp
            ) {
                if (value) {
                    if (!isObject(value)) {
                        process.env.NODE_ENV !== 'production' && warn(
                            'v-bind without argument expects an Object or Array value',
                            this
                        );
                    } else {
                        if (Array.isArray(value)) {
                            value = toObject(value);
                        }
                        var hash;
                        for (var key in value) {
                            if (key === 'class' || key === 'style') {
                                hash = data;
                            } else {
                                var type = data.attrs && data.attrs.type;
                                hash = asProp || config.mustUseProp(tag, type, key) ?
                                    data.domProps || (data.domProps = {}) :
                                    data.attrs || (data.attrs = {});
                            }
                            if (!(key in hash)) {
                                hash[key] = value[key];
                            }
                        }
                    }
                }
                return data
            }

            /*  */

            /**
             * Runtime helper for rendering static trees.
             */
            function renderStatic(
                index,
                isInFor
            ) {
                var tree = this._staticTrees[index];
                // if has already-rendered static tree and not inside v-for,
                // we can reuse the same tree by doing a shallow clone.
                if (tree && !isInFor) {
                    return Array.isArray(tree) ?
                        cloneVNodes(tree) :
                        cloneVNode(tree)
                }
                // otherwise, render a fresh tree.
                tree = this._staticTrees[index] =
                    this.$options.staticRenderFns[index].call(this._renderProxy);
                markStatic(tree, ("__static__" + index), false);
                return tree
            }

            /**
             * Runtime helper for v-once.
             * Effectively it means marking the node as static with a unique key.
             */
            function markOnce(
                tree,
                index,
                key
            ) {
                markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
                return tree
            }

            function markStatic(
                tree,
                key,
                isOnce
            ) {
                if (Array.isArray(tree)) {
                    for (var i = 0; i < tree.length; i++) {
                        if (tree[i] && typeof tree[i] !== 'string') {
                            markStaticNode(tree[i], (key + "_" + i), isOnce);
                        }
                    }
                } else {
                    markStaticNode(tree, key, isOnce);
                }
            }

            function markStaticNode(node, key, isOnce) {
                node.isStatic = true;
                node.key = key;
                node.isOnce = isOnce;
            }

            /*  */

            function initRender(vm) {
                vm._vnode = null; // the root of the child tree
                vm._staticTrees = null;
                var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
                var renderContext = parentVnode && parentVnode.context;
                vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
                vm.$scopedSlots = emptyObject;
                // bind the createElement fn to this instance
                // so that we get proper render context inside it.
                // args order: tag, data, children, normalizationType, alwaysNormalize
                // internal version is used by render functions compiled from templates
                vm._c = function(a, b, c, d) { return createElement(vm, a, b, c, d, false); };
                // normalization is always applied for the public version, used in
                // user-written render functions.
                vm.$createElement = function(a, b, c, d) { return createElement(vm, a, b, c, d, true); };
            }

            function renderMixin(Vue) {
                Vue.prototype.$nextTick = function(fn) {
                    return nextTick(fn, this)
                };

                Vue.prototype._render = function() {
                    var vm = this;
                    var ref = vm.$options;
                    var render = ref.render;
                    var staticRenderFns = ref.staticRenderFns;
                    var _parentVnode = ref._parentVnode;

                    if (vm._isMounted) {
                        // clone slot nodes on re-renders
                        for (var key in vm.$slots) {
                            vm.$slots[key] = cloneVNodes(vm.$slots[key]);
                        }
                    }

                    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

                    if (staticRenderFns && !vm._staticTrees) {
                        vm._staticTrees = [];
                    }
                    // set parent vnode. this allows render functions to have access
                    // to the data on the placeholder node.
                    vm.$vnode = _parentVnode;
                    // render self
                    var vnode;
                    try {
                        vnode = render.call(vm._renderProxy, vm.$createElement);
                    } catch (e) {
                        handleError(e, vm, "render function");
                        // return error render result,
                        // or previous vnode to prevent render error causing blank component
                        /* istanbul ignore else */
                        if (process.env.NODE_ENV !== 'production') {
                            vnode = vm.$options.renderError ?
                                vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) :
                                vm._vnode;
                        } else {
                            vnode = vm._vnode;
                        }
                    }
                    // return empty vnode in case the render function errored out
                    if (!(vnode instanceof VNode)) {
                        if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
                            warn(
                                'Multiple root nodes returned from render function. Render function ' +
                                'should return a single root node.',
                                vm
                            );
                        }
                        vnode = createEmptyVNode();
                    }
                    // set parent
                    vnode.parent = _parentVnode;
                    return vnode
                };

                // internal render helpers.
                // these are exposed on the instance prototype to reduce generated render
                // code size.
                Vue.prototype._o = markOnce;
                Vue.prototype._n = toNumber;
                Vue.prototype._s = toString;
                Vue.prototype._l = renderList;
                Vue.prototype._t = renderSlot;
                Vue.prototype._q = looseEqual;
                Vue.prototype._i = looseIndexOf;
                Vue.prototype._m = renderStatic;
                Vue.prototype._f = resolveFilter;
                Vue.prototype._k = checkKeyCodes;
                Vue.prototype._b = bindObjectProps;
                Vue.prototype._v = createTextVNode;
                Vue.prototype._e = createEmptyVNode;
                Vue.prototype._u = resolveScopedSlots;
            }

            /*  */

            var uid = 0;

            function initMixin(Vue) {
                Vue.prototype._init = function(options) {
                    var vm = this;
                    // a uid
                    vm._uid = uid++;

                    var startTag, endTag;
                    /* istanbul ignore if */
                    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
                        startTag = "vue-perf-init:" + (vm._uid);
                        endTag = "vue-perf-end:" + (vm._uid);
                        mark(startTag);
                    }

                    // a flag to avoid this being observed
                    vm._isVue = true;
                    // merge options
                    if (options && options._isComponent) {
                        // optimize internal component instantiation
                        // since dynamic options merging is pretty slow, and none of the
                        // internal component options needs special treatment.
                        initInternalComponent(vm, options);
                    } else {
                        vm.$options = mergeOptions(
                            resolveConstructorOptions(vm.constructor),
                            options || {},
                            vm
                        );
                    }
                    /* istanbul ignore else */
                    if (process.env.NODE_ENV !== 'production') {
                        initProxy(vm);
                    } else {
                        vm._renderProxy = vm;
                    }
                    // expose real self
                    vm._self = vm;
                    initLifecycle(vm);
                    initEvents(vm);
                    initRender(vm);
                    callHook(vm, 'beforeCreate');
                    initInjections(vm); // resolve injections before data/props
                    initState(vm);
                    initProvide(vm); // resolve provide after data/props
                    callHook(vm, 'created');

                    /* istanbul ignore if */
                    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
                        vm._name = formatComponentName(vm, false);
                        mark(endTag);
                        measure(((vm._name) + " init"), startTag, endTag);
                    }

                    if (vm.$options.el) {
                        vm.$mount(vm.$options.el);
                    }
                };
            }

            function initInternalComponent(vm, options) {
                var opts = vm.$options = Object.create(vm.constructor.options);
                // doing this because it's faster than dynamic enumeration.
                opts.parent = options.parent;
                opts.propsData = options.propsData;
                opts._parentVnode = options._parentVnode;
                opts._parentListeners = options._parentListeners;
                opts._renderChildren = options._renderChildren;
                opts._componentTag = options._componentTag;
                opts._parentElm = options._parentElm;
                opts._refElm = options._refElm;
                if (options.render) {
                    opts.render = options.render;
                    opts.staticRenderFns = options.staticRenderFns;
                }
            }

            function resolveConstructorOptions(Ctor) {
                var options = Ctor.options;
                if (Ctor.super) {
                    var superOptions = resolveConstructorOptions(Ctor.super);
                    var cachedSuperOptions = Ctor.superOptions;
                    if (superOptions !== cachedSuperOptions) {
                        // super option changed,
                        // need to resolve new options.
                        Ctor.superOptions = superOptions;
                        // check if there are any late-modified/attached options (#4976)
                        var modifiedOptions = resolveModifiedOptions(Ctor);
                        // update base extend options
                        if (modifiedOptions) {
                            extend(Ctor.extendOptions, modifiedOptions);
                        }
                        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
                        if (options.name) {
                            options.components[options.name] = Ctor;
                        }
                    }
                }
                return options
            }

            function resolveModifiedOptions(Ctor) {
                var modified;
                var latest = Ctor.options;
                var extended = Ctor.extendOptions;
                var sealed = Ctor.sealedOptions;
                for (var key in latest) {
                    if (latest[key] !== sealed[key]) {
                        if (!modified) { modified = {}; }
                        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
                    }
                }
                return modified
            }

            function dedupe(latest, extended, sealed) {
                // compare latest and sealed to ensure lifecycle hooks won't be duplicated
                // between merges
                if (Array.isArray(latest)) {
                    var res = [];
                    sealed = Array.isArray(sealed) ? sealed : [sealed];
                    extended = Array.isArray(extended) ? extended : [extended];
                    for (var i = 0; i < latest.length; i++) {
                        // push original options and not sealed options to exclude duplicated options
                        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
                            res.push(latest[i]);
                        }
                    }
                    return res
                } else {
                    return latest
                }
            }

            function Vue$3(options) {
                if (process.env.NODE_ENV !== 'production' &&
                    !(this instanceof Vue$3)
                ) {
                    warn('Vue is a constructor and should be called with the `new` keyword');
                }
                this._init(options);
            }

            initMixin(Vue$3);
            stateMixin(Vue$3);
            eventsMixin(Vue$3);
            lifecycleMixin(Vue$3);
            renderMixin(Vue$3);

            /*  */

            function initUse(Vue) {
                Vue.use = function(plugin) {
                    /* istanbul ignore if */
                    if (plugin.installed) {
                        return this
                    }
                    // additional parameters
                    var args = toArray(arguments, 1);
                    args.unshift(this);
                    if (typeof plugin.install === 'function') {
                        plugin.install.apply(plugin, args);
                    } else if (typeof plugin === 'function') {
                        plugin.apply(null, args);
                    }
                    plugin.installed = true;
                    return this
                };
            }

            /*  */

            function initMixin$1(Vue) {
                Vue.mixin = function(mixin) {
                    this.options = mergeOptions(this.options, mixin);
                    return this
                };
            }

            /*  */

            function initExtend(Vue) {
                /**
                 * Each instance constructor, including Vue, has a unique
                 * cid. This enables us to create wrapped "child
                 * constructors" for prototypal inheritance and cache them.
                 */
                Vue.cid = 0;
                var cid = 1;

                /**
                 * Class inheritance
                 */
                Vue.extend = function(extendOptions) {
                    extendOptions = extendOptions || {};
                    var Super = this;
                    var SuperId = Super.cid;
                    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                    if (cachedCtors[SuperId]) {
                        return cachedCtors[SuperId]
                    }

                    var name = extendOptions.name || Super.options.name;
                    if (process.env.NODE_ENV !== 'production') {
                        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
                            warn(
                                'Invalid component name: "' + name + '". Component names ' +
                                'can only contain alphanumeric characters and the hyphen, ' +
                                'and must start with a letter.'
                            );
                        }
                    }

                    var Sub = function VueComponent(options) {
                        this._init(options);
                    };
                    Sub.prototype = Object.create(Super.prototype);
                    Sub.prototype.constructor = Sub;
                    Sub.cid = cid++;
                    Sub.options = mergeOptions(
                        Super.options,
                        extendOptions
                    );
                    Sub['super'] = Super;

                    // For props and computed properties, we define the proxy getters on
                    // the Vue instances at extension time, on the extended prototype. This
                    // avoids Object.defineProperty calls for each instance created.
                    if (Sub.options.props) {
                        initProps$1(Sub);
                    }
                    if (Sub.options.computed) {
                        initComputed$1(Sub);
                    }

                    // allow further extension/mixin/plugin usage
                    Sub.extend = Super.extend;
                    Sub.mixin = Super.mixin;
                    Sub.use = Super.use;

                    // create asset registers, so extended classes
                    // can have their private assets too.
                    ASSET_TYPES.forEach(function(type) {
                        Sub[type] = Super[type];
                    });
                    // enable recursive self-lookup
                    if (name) {
                        Sub.options.components[name] = Sub;
                    }

                    // keep a reference to the super options at extension time.
                    // later at instantiation we can check if Super's options have
                    // been updated.
                    Sub.superOptions = Super.options;
                    Sub.extendOptions = extendOptions;
                    Sub.sealedOptions = extend({}, Sub.options);

                    // cache constructor
                    cachedCtors[SuperId] = Sub;
                    return Sub
                };
            }

            function initProps$1(Comp) {
                var props = Comp.options.props;
                for (var key in props) {
                    proxy(Comp.prototype, "_props", key);
                }
            }

            function initComputed$1(Comp) {
                var computed = Comp.options.computed;
                for (var key in computed) {
                    defineComputed(Comp.prototype, key, computed[key]);
                }
            }

            /*  */

            function initAssetRegisters(Vue) {
                /**
                 * Create asset registration methods.
                 */
                ASSET_TYPES.forEach(function(type) {
                    Vue[type] = function(
                        id,
                        definition
                    ) {
                        if (!definition) {
                            return this.options[type + 's'][id]
                        } else {
                            /* istanbul ignore if */
                            if (process.env.NODE_ENV !== 'production') {
                                if (type === 'component' && config.isReservedTag(id)) {
                                    warn(
                                        'Do not use built-in or reserved HTML elements as component ' +
                                        'id: ' + id
                                    );
                                }
                            }
                            if (type === 'component' && isPlainObject(definition)) {
                                definition.name = definition.name || id;
                                definition = this.options._base.extend(definition);
                            }
                            if (type === 'directive' && typeof definition === 'function') {
                                definition = { bind: definition, update: definition };
                            }
                            this.options[type + 's'][id] = definition;
                            return definition
                        }
                    };
                });
            }

            /*  */

            var patternTypes = [String, RegExp];

            function getComponentName(opts) {
                return opts && (opts.Ctor.options.name || opts.tag)
            }

            function matches(pattern, name) {
                if (typeof pattern === 'string') {
                    return pattern.split(',').indexOf(name) > -1
                } else if (isRegExp(pattern)) {
                    return pattern.test(name)
                }
                /* istanbul ignore next */
                return false
            }

            function pruneCache(cache, current, filter) {
                for (var key in cache) {
                    var cachedNode = cache[key];
                    if (cachedNode) {
                        var name = getComponentName(cachedNode.componentOptions);
                        if (name && !filter(name)) {
                            if (cachedNode !== current) {
                                pruneCacheEntry(cachedNode);
                            }
                            cache[key] = null;
                        }
                    }
                }
            }

            function pruneCacheEntry(vnode) {
                if (vnode) {
                    vnode.componentInstance.$destroy();
                }
            }

            var KeepAlive = {
                name: 'keep-alive',
                abstract: true,

                props: {
                    include: patternTypes,
                    exclude: patternTypes
                },

                created: function created() {
                    this.cache = Object.create(null);
                },

                destroyed: function destroyed() {
                    var this$1 = this;

                    for (var key in this$1.cache) {
                        pruneCacheEntry(this$1.cache[key]);
                    }
                },

                watch: {
                    include: function include(val) {
                        pruneCache(this.cache, this._vnode, function(name) { return matches(val, name); });
                    },
                    exclude: function exclude(val) {
                        pruneCache(this.cache, this._vnode, function(name) { return !matches(val, name); });
                    }
                },

                render: function render() {
                    var vnode = getFirstComponentChild(this.$slots.default);
                    var componentOptions = vnode && vnode.componentOptions;
                    if (componentOptions) {
                        // check pattern
                        var name = getComponentName(componentOptions);
                        if (name && (
                                (this.include && !matches(this.include, name)) ||
                                (this.exclude && matches(this.exclude, name))
                            )) {
                            return vnode
                        }
                        var key = vnode.key == null
                            // same constructor may get registered as different local components
                            // so cid alone is not enough (#3269)
                            ?
                            componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '') :
                            vnode.key;
                        if (this.cache[key]) {
                            vnode.componentInstance = this.cache[key].componentInstance;
                        } else {
                            this.cache[key] = vnode;
                        }
                        vnode.data.keepAlive = true;
                    }
                    return vnode
                }
            };

            var builtInComponents = {
                KeepAlive: KeepAlive
            };

            /*  */

            function initGlobalAPI(Vue) {
                // config
                var configDef = {};
                configDef.get = function() { return config; };
                if (process.env.NODE_ENV !== 'production') {
                    configDef.set = function() {
                        warn(
                            'Do not replace the Vue.config object, set individual fields instead.'
                        );
                    };
                }
                Object.defineProperty(Vue, 'config', configDef);

                // exposed util methods.
                // NOTE: these are not considered part of the public API - avoid relying on
                // them unless you are aware of the risk.
                Vue.util = {
                    warn: warn,
                    extend: extend,
                    mergeOptions: mergeOptions,
                    defineReactive: defineReactive$$1
                };

                Vue.set = set;
                Vue.delete = del;
                Vue.nextTick = nextTick;

                Vue.options = Object.create(null);
                ASSET_TYPES.forEach(function(type) {
                    Vue.options[type + 's'] = Object.create(null);
                });

                // this is used to identify the "base" constructor to extend all plain-object
                // components with in Weex's multi-instance scenarios.
                Vue.options._base = Vue;

                extend(Vue.options.components, builtInComponents);

                initUse(Vue);
                initMixin$1(Vue);
                initExtend(Vue);
                initAssetRegisters(Vue);
            }

            initGlobalAPI(Vue$3);

            Object.defineProperty(Vue$3.prototype, '$isServer', {
                get: isServerRendering
            });

            Object.defineProperty(Vue$3.prototype, '$ssrContext', {
                get: function get() {
                    /* istanbul ignore next */
                    return this.$vnode.ssrContext
                }
            });

            Vue$3.version = '2.3.4';

            /*  */

            // these are reserved for web because they are directly compiled away
            // during template compilation
            var isReservedAttr = makeMap('style,class');

            // attributes that should be using props for binding
            var acceptValue = makeMap('input,textarea,option,select');
            var mustUseProp = function(tag, type, attr) {
                return (
                    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
                    (attr === 'selected' && tag === 'option') ||
                    (attr === 'checked' && tag === 'input') ||
                    (attr === 'muted' && tag === 'video')
                )
            };

            var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

            var isBooleanAttr = makeMap(
                'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
                'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
                'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
                'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
                'required,reversed,scoped,seamless,selected,sortable,translate,' +
                'truespeed,typemustmatch,visible'
            );

            var xlinkNS = 'http://www.w3.org/1999/xlink';

            var isXlink = function(name) {
                return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
            };

            var getXlinkProp = function(name) {
                return isXlink(name) ? name.slice(6, name.length) : ''
            };

            var isFalsyAttrValue = function(val) {
                return val == null || val === false
            };

            /*  */

            function genClassForVnode(vnode) {
                var data = vnode.data;
                var parentNode = vnode;
                var childNode = vnode;
                while (isDef(childNode.componentInstance)) {
                    childNode = childNode.componentInstance._vnode;
                    if (childNode.data) {
                        data = mergeClassData(childNode.data, data);
                    }
                }
                while (isDef(parentNode = parentNode.parent)) {
                    if (parentNode.data) {
                        data = mergeClassData(data, parentNode.data);
                    }
                }
                return genClassFromData(data)
            }

            function mergeClassData(child, parent) {
                return {
                    staticClass: concat(child.staticClass, parent.staticClass),
                    class: isDef(child.class) ? [child.class, parent.class] : parent.class
                }
            }

            function genClassFromData(data) {
                var dynamicClass = data.class;
                var staticClass = data.staticClass;
                if (isDef(staticClass) || isDef(dynamicClass)) {
                    return concat(staticClass, stringifyClass(dynamicClass))
                }
                /* istanbul ignore next */
                return ''
            }

            function concat(a, b) {
                return a ? b ? (a + ' ' + b) : a : (b || '')
            }

            function stringifyClass(value) {
                if (isUndef(value)) {
                    return ''
                }
                if (typeof value === 'string') {
                    return value
                }
                var res = '';
                if (Array.isArray(value)) {
                    var stringified;
                    for (var i = 0, l = value.length; i < l; i++) {
                        if (isDef(value[i])) {
                            if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
                                res += stringified + ' ';
                            }
                        }
                    }
                    return res.slice(0, -1)
                }
                if (isObject(value)) {
                    for (var key in value) {
                        if (value[key]) { res += key + ' '; }
                    }
                    return res.slice(0, -1)
                }
                /* istanbul ignore next */
                return res
            }

            /*  */

            var namespaceMap = {
                svg: 'http://www.w3.org/2000/svg',
                math: 'http://www.w3.org/1998/Math/MathML'
            };

            var isHTMLTag = makeMap(
                'html,body,base,head,link,meta,style,title,' +
                'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
                'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
                'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
                's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
                'embed,object,param,source,canvas,script,noscript,del,ins,' +
                'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
                'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
                'output,progress,select,textarea,' +
                'details,dialog,menu,menuitem,summary,' +
                'content,element,shadow,template'
            );

            // this map is intentionally selective, only covering SVG elements that may
            // contain child elements.
            var isSVG = makeMap(
                'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
                'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
                'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
                true
            );



            var isReservedTag = function(tag) {
                return isHTMLTag(tag) || isSVG(tag)
            };

            function getTagNamespace(tag) {
                if (isSVG(tag)) {
                    return 'svg'
                }
                // basic support for MathML
                // note it doesn't support other MathML elements being component roots
                if (tag === 'math') {
                    return 'math'
                }
            }

            var unknownElementCache = Object.create(null);

            function isUnknownElement(tag) {
                /* istanbul ignore if */
                if (!inBrowser) {
                    return true
                }
                if (isReservedTag(tag)) {
                    return false
                }
                tag = tag.toLowerCase();
                /* istanbul ignore if */
                if (unknownElementCache[tag] != null) {
                    return unknownElementCache[tag]
                }
                var el = document.createElement(tag);
                if (tag.indexOf('-') > -1) {
                    // http://stackoverflow.com/a/28210364/1070244
                    return (unknownElementCache[tag] = (
                        el.constructor === window.HTMLUnknownElement ||
                        el.constructor === window.HTMLElement
                    ))
                } else {
                    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
                }
            }

            /*  */

            /**
             * Query an element selector if it's not an element already.
             */
            function query(el) {
                if (typeof el === 'string') {
                    var selected = document.querySelector(el);
                    if (!selected) {
                        process.env.NODE_ENV !== 'production' && warn(
                            'Cannot find element: ' + el
                        );
                        return document.createElement('div')
                    }
                    return selected
                } else {
                    return el
                }
            }

            /*  */

            function createElement$1(tagName, vnode) {
                var elm = document.createElement(tagName);
                if (tagName !== 'select') {
                    return elm
                }
                // false or null will remove the attribute but undefined will not
                if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
                    elm.setAttribute('multiple', 'multiple');
                }
                return elm
            }

            function createElementNS(namespace, tagName) {
                return document.createElementNS(namespaceMap[namespace], tagName)
            }

            function createTextNode(text) {
                return document.createTextNode(text)
            }

            function createComment(text) {
                return document.createComment(text)
            }

            function insertBefore(parentNode, newNode, referenceNode) {
                parentNode.insertBefore(newNode, referenceNode);
            }

            function removeChild(node, child) {
                node.removeChild(child);
            }

            function appendChild(node, child) {
                node.appendChild(child);
            }

            function parentNode(node) {
                return node.parentNode
            }

            function nextSibling(node) {
                return node.nextSibling
            }

            function tagName(node) {
                return node.tagName
            }

            function setTextContent(node, text) {
                node.textContent = text;
            }

            function setAttribute(node, key, val) {
                node.setAttribute(key, val);
            }


            var nodeOps = Object.freeze({
                createElement: createElement$1,
                createElementNS: createElementNS,
                createTextNode: createTextNode,
                createComment: createComment,
                insertBefore: insertBefore,
                removeChild: removeChild,
                appendChild: appendChild,
                parentNode: parentNode,
                nextSibling: nextSibling,
                tagName: tagName,
                setTextContent: setTextContent,
                setAttribute: setAttribute
            });

            /*  */

            var ref = {
                create: function create(_, vnode) {
                    registerRef(vnode);
                },
                update: function update(oldVnode, vnode) {
                    if (oldVnode.data.ref !== vnode.data.ref) {
                        registerRef(oldVnode, true);
                        registerRef(vnode);
                    }
                },
                destroy: function destroy(vnode) {
                    registerRef(vnode, true);
                }
            };

            function registerRef(vnode, isRemoval) {
                var key = vnode.data.ref;
                if (!key) { return }

                var vm = vnode.context;
                var ref = vnode.componentInstance || vnode.elm;
                var refs = vm.$refs;
                if (isRemoval) {
                    if (Array.isArray(refs[key])) {
                        remove(refs[key], ref);
                    } else if (refs[key] === ref) {
                        refs[key] = undefined;
                    }
                } else {
                    if (vnode.data.refInFor) {
                        if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
                            refs[key].push(ref);
                        } else {
                            refs[key] = [ref];
                        }
                    } else {
                        refs[key] = ref;
                    }
                }
            }

            /**
             * Virtual DOM patching algorithm based on Snabbdom by
             * Simon Friis Vindum (@paldepind)
             * Licensed under the MIT License
             * https://github.com/paldepind/snabbdom/blob/master/LICENSE
             *
             * modified by Evan You (@yyx990803)
             *

            /*
             * Not type-checking this because this file is perf-critical and the cost
             * of making flow understand it is not worth it.
             */

            var emptyNode = new VNode('', {}, []);

            var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

            function sameVnode(a, b) {
                return (
                    a.key === b.key &&
                    a.tag === b.tag &&
                    a.isComment === b.isComment &&
                    isDef(a.data) === isDef(b.data) &&
                    sameInputType(a, b)
                )
            }

            // Some browsers do not support dynamically changing type for <input>
            // so they need to be treated as different nodes
            function sameInputType(a, b) {
                if (a.tag !== 'input') { return true }
                var i;
                var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
                var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
                return typeA === typeB
            }

            function createKeyToOldIdx(children, beginIdx, endIdx) {
                var i, key;
                var map = {};
                for (i = beginIdx; i <= endIdx; ++i) {
                    key = children[i].key;
                    if (isDef(key)) { map[key] = i; }
                }
                return map
            }

            function createPatchFunction(backend) {
                var i, j;
                var cbs = {};

                var modules = backend.modules;
                var nodeOps = backend.nodeOps;

                for (i = 0; i < hooks.length; ++i) {
                    cbs[hooks[i]] = [];
                    for (j = 0; j < modules.length; ++j) {
                        if (isDef(modules[j][hooks[i]])) {
                            cbs[hooks[i]].push(modules[j][hooks[i]]);
                        }
                    }
                }

                function emptyNodeAt(elm) {
                    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
                }

                function createRmCb(childElm, listeners) {
                    function remove$$1() {
                        if (--remove$$1.listeners === 0) {
                            removeNode(childElm);
                        }
                    }
                    remove$$1.listeners = listeners;
                    return remove$$1
                }

                function removeNode(el) {
                    var parent = nodeOps.parentNode(el);
                    // element may have already been removed due to v-html / v-text
                    if (isDef(parent)) {
                        nodeOps.removeChild(parent, el);
                    }
                }

                var inPre = 0;

                function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
                    vnode.isRootInsert = !nested; // for transition enter check
                    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                        return
                    }

                    var data = vnode.data;
                    var children = vnode.children;
                    var tag = vnode.tag;
                    if (isDef(tag)) {
                        if (process.env.NODE_ENV !== 'production') {
                            if (data && data.pre) {
                                inPre++;
                            }
                            if (!inPre &&
                                !vnode.ns &&
                                !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
                                config.isUnknownElement(tag)
                            ) {
                                warn(
                                    'Unknown custom element: <' + tag + '> - did you ' +
                                    'register the component correctly? For recursive components, ' +
                                    'make sure to provide the "name" option.',
                                    vnode.context
                                );
                            }
                        }
                        vnode.elm = vnode.ns ?
                            nodeOps.createElementNS(vnode.ns, tag) :
                            nodeOps.createElement(tag, vnode);
                        setScope(vnode);

                        /* istanbul ignore if */
                        {
                            createChildren(vnode, children, insertedVnodeQueue);
                            if (isDef(data)) {
                                invokeCreateHooks(vnode, insertedVnodeQueue);
                            }
                            insert(parentElm, vnode.elm, refElm);
                        }

                        if (process.env.NODE_ENV !== 'production' && data && data.pre) {
                            inPre--;
                        }
                    } else if (isTrue(vnode.isComment)) {
                        vnode.elm = nodeOps.createComment(vnode.text);
                        insert(parentElm, vnode.elm, refElm);
                    } else {
                        vnode.elm = nodeOps.createTextNode(vnode.text);
                        insert(parentElm, vnode.elm, refElm);
                    }
                }

                function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
                    var i = vnode.data;
                    if (isDef(i)) {
                        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
                        if (isDef(i = i.hook) && isDef(i = i.init)) {
                            i(vnode, false /* hydrating */ , parentElm, refElm);
                        }
                        // after calling the init hook, if the vnode is a child component
                        // it should've created a child instance and mounted it. the child
                        // component also has set the placeholder vnode's elm.
                        // in that case we can just return the element and be done.
                        if (isDef(vnode.componentInstance)) {
                            initComponent(vnode, insertedVnodeQueue);
                            if (isTrue(isReactivated)) {
                                reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                            }
                            return true
                        }
                    }
                }

                function initComponent(vnode, insertedVnodeQueue) {
                    if (isDef(vnode.data.pendingInsert)) {
                        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
                        vnode.data.pendingInsert = null;
                    }
                    vnode.elm = vnode.componentInstance.$el;
                    if (isPatchable(vnode)) {
                        invokeCreateHooks(vnode, insertedVnodeQueue);
                        setScope(vnode);
                    } else {
                        // empty component root.
                        // skip all element-related modules except for ref (#3455)
                        registerRef(vnode);
                        // make sure to invoke the insert hook
                        insertedVnodeQueue.push(vnode);
                    }
                }

                function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
                    var i;
                    // hack for #4339: a reactivated component with inner transition
                    // does not trigger because the inner node's created hooks are not called
                    // again. It's not ideal to involve module-specific logic in here but
                    // there doesn't seem to be a better way to do it.
                    var innerNode = vnode;
                    while (innerNode.componentInstance) {
                        innerNode = innerNode.componentInstance._vnode;
                        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
                            for (i = 0; i < cbs.activate.length; ++i) {
                                cbs.activate[i](emptyNode, innerNode);
                            }
                            insertedVnodeQueue.push(innerNode);
                            break
                        }
                    }
                    // unlike a newly created component,
                    // a reactivated keep-alive component doesn't insert itself
                    insert(parentElm, vnode.elm, refElm);
                }

                function insert(parent, elm, ref) {
                    if (isDef(parent)) {
                        if (isDef(ref)) {
                            if (ref.parentNode === parent) {
                                nodeOps.insertBefore(parent, elm, ref);
                            }
                        } else {
                            nodeOps.appendChild(parent, elm);
                        }
                    }
                }

                function createChildren(vnode, children, insertedVnodeQueue) {
                    if (Array.isArray(children)) {
                        for (var i = 0; i < children.length; ++i) {
                            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
                        }
                    } else if (isPrimitive(vnode.text)) {
                        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
                    }
                }

                function isPatchable(vnode) {
                    while (vnode.componentInstance) {
                        vnode = vnode.componentInstance._vnode;
                    }
                    return isDef(vnode.tag)
                }

                function invokeCreateHooks(vnode, insertedVnodeQueue) {
                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                        cbs.create[i$1](emptyNode, vnode);
                    }
                    i = vnode.data.hook; // Reuse variable
                    if (isDef(i)) {
                        if (isDef(i.create)) { i.create(emptyNode, vnode); }
                        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
                    }
                }

                // set scope id attribute for scoped CSS.
                // this is implemented as a special case to avoid the overhead
                // of going through the normal attribute patching process.
                function setScope(vnode) {
                    var i;
                    var ancestor = vnode;
                    while (ancestor) {
                        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
                            nodeOps.setAttribute(vnode.elm, i, '');
                        }
                        ancestor = ancestor.parent;
                    }
                    // for slot content they should also get the scopeId from the host instance.
                    if (isDef(i = activeInstance) &&
                        i !== vnode.context &&
                        isDef(i = i.$options._scopeId)
                    ) {
                        nodeOps.setAttribute(vnode.elm, i, '');
                    }
                }

                function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
                    for (; startIdx <= endIdx; ++startIdx) {
                        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
                    }
                }

                function invokeDestroyHook(vnode) {
                    var i, j;
                    var data = vnode.data;
                    if (isDef(data)) {
                        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
                        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
                    }
                    if (isDef(i = vnode.children)) {
                        for (j = 0; j < vnode.children.length; ++j) {
                            invokeDestroyHook(vnode.children[j]);
                        }
                    }
                }

                function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
                    for (; startIdx <= endIdx; ++startIdx) {
                        var ch = vnodes[startIdx];
                        if (isDef(ch)) {
                            if (isDef(ch.tag)) {
                                removeAndInvokeRemoveHook(ch);
                                invokeDestroyHook(ch);
                            } else { // Text node
                                removeNode(ch.elm);
                            }
                        }
                    }
                }

                function removeAndInvokeRemoveHook(vnode, rm) {
                    if (isDef(rm) || isDef(vnode.data)) {
                        var i;
                        var listeners = cbs.remove.length + 1;
                        if (isDef(rm)) {
                            // we have a recursively passed down rm callback
                            // increase the listeners count
                            rm.listeners += listeners;
                        } else {
                            // directly removing
                            rm = createRmCb(vnode.elm, listeners);
                        }
                        // recursively invoke hooks on child component root node
                        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
                            removeAndInvokeRemoveHook(i, rm);
                        }
                        for (i = 0; i < cbs.remove.length; ++i) {
                            cbs.remove[i](vnode, rm);
                        }
                        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
                            i(vnode, rm);
                        } else {
                            rm();
                        }
                    } else {
                        removeNode(vnode.elm);
                    }
                }

                function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
                    var oldStartIdx = 0;
                    var newStartIdx = 0;
                    var oldEndIdx = oldCh.length - 1;
                    var oldStartVnode = oldCh[0];
                    var oldEndVnode = oldCh[oldEndIdx];
                    var newEndIdx = newCh.length - 1;
                    var newStartVnode = newCh[0];
                    var newEndVnode = newCh[newEndIdx];
                    var oldKeyToIdx, idxInOld, elmToMove, refElm;

                    // removeOnly is a special flag used only by <transition-group>
                    // to ensure removed elements stay in correct relative positions
                    // during leaving transitions
                    var canMove = !removeOnly;

                    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                        if (isUndef(oldStartVnode)) {
                            oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
                        } else if (isUndef(oldEndVnode)) {
                            oldEndVnode = oldCh[--oldEndIdx];
                        } else if (sameVnode(oldStartVnode, newStartVnode)) {
                            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                            oldStartVnode = oldCh[++oldStartIdx];
                            newStartVnode = newCh[++newStartIdx];
                        } else if (sameVnode(oldEndVnode, newEndVnode)) {
                            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                            oldEndVnode = oldCh[--oldEndIdx];
                            newEndVnode = newCh[--newEndIdx];
                        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
                            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                            oldStartVnode = oldCh[++oldStartIdx];
                            newEndVnode = newCh[--newEndIdx];
                        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
                            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                            oldEndVnode = oldCh[--oldEndIdx];
                            newStartVnode = newCh[++newStartIdx];
                        } else {
                            if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
                            idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
                            if (isUndef(idxInOld)) { // New element
                                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
                                newStartVnode = newCh[++newStartIdx];
                            } else {
                                elmToMove = oldCh[idxInOld];
                                /* istanbul ignore if */
                                if (process.env.NODE_ENV !== 'production' && !elmToMove) {
                                    warn(
                                        'It seems there are duplicate keys that is causing an update error. ' +
                                        'Make sure each v-for item has a unique key.'
                                    );
                                }
                                if (sameVnode(elmToMove, newStartVnode)) {
                                    patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                                    oldCh[idxInOld] = undefined;
                                    canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
                                    newStartVnode = newCh[++newStartIdx];
                                } else {
                                    // same key but different element. treat as new element
                                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
                                    newStartVnode = newCh[++newStartIdx];
                                }
                            }
                        }
                    }
                    if (oldStartIdx > oldEndIdx) {
                        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
                        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
                    } else if (newStartIdx > newEndIdx) {
                        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
                    }
                }

                function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
                    if (oldVnode === vnode) {
                        return
                    }
                    // reuse element for static trees.
                    // note we only do this if the vnode is cloned -
                    // if the new node is not cloned it means the render functions have been
                    // reset by the hot-reload-api and we need to do a proper re-render.
                    if (isTrue(vnode.isStatic) &&
                        isTrue(oldVnode.isStatic) &&
                        vnode.key === oldVnode.key &&
                        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
                    ) {
                        vnode.elm = oldVnode.elm;
                        vnode.componentInstance = oldVnode.componentInstance;
                        return
                    }
                    var i;
                    var data = vnode.data;
                    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
                        i(oldVnode, vnode);
                    }
                    var elm = vnode.elm = oldVnode.elm;
                    var oldCh = oldVnode.children;
                    var ch = vnode.children;
                    if (isDef(data) && isPatchable(vnode)) {
                        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
                        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
                    }
                    if (isUndef(vnode.text)) {
                        if (isDef(oldCh) && isDef(ch)) {
                            if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
                        } else if (isDef(ch)) {
                            if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
                            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
                        } else if (isDef(oldCh)) {
                            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
                        } else if (isDef(oldVnode.text)) {
                            nodeOps.setTextContent(elm, '');
                        }
                    } else if (oldVnode.text !== vnode.text) {
                        nodeOps.setTextContent(elm, vnode.text);
                    }
                    if (isDef(data)) {
                        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
                    }
                }

                function invokeInsertHook(vnode, queue, initial) {
                    // delay insert hooks for component root nodes, invoke them after the
                    // element is really inserted
                    if (isTrue(initial) && isDef(vnode.parent)) {
                        vnode.parent.data.pendingInsert = queue;
                    } else {
                        for (var i = 0; i < queue.length; ++i) {
                            queue[i].data.hook.insert(queue[i]);
                        }
                    }
                }

                var bailed = false;
                // list of modules that can skip create hook during hydration because they
                // are already rendered on the client or has no need for initialization
                var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

                // Note: this is a browser-only function so we can assume elms are DOM nodes.
                function hydrate(elm, vnode, insertedVnodeQueue) {
                    if (process.env.NODE_ENV !== 'production') {
                        if (!assertNodeMatch(elm, vnode)) {
                            return false
                        }
                    }
                    vnode.elm = elm;
                    var tag = vnode.tag;
                    var data = vnode.data;
                    var children = vnode.children;
                    if (isDef(data)) {
                        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */ ); }
                        if (isDef(i = vnode.componentInstance)) {
                            // child component. it should have hydrated its own tree.
                            initComponent(vnode, insertedVnodeQueue);
                            return true
                        }
                    }
                    if (isDef(tag)) {
                        if (isDef(children)) {
                            // empty element, allow client to pick up and populate children
                            if (!elm.hasChildNodes()) {
                                createChildren(vnode, children, insertedVnodeQueue);
                            } else {
                                var childrenMatch = true;
                                var childNode = elm.firstChild;
                                for (var i$1 = 0; i$1 < children.length; i$1++) {
                                    if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                                        childrenMatch = false;
                                        break
                                    }
                                    childNode = childNode.nextSibling;
                                }
                                // if childNode is not null, it means the actual childNodes list is
                                // longer than the virtual children list.
                                if (!childrenMatch || childNode) {
                                    if (process.env.NODE_ENV !== 'production' &&
                                        typeof console !== 'undefined' &&
                                        !bailed
                                    ) {
                                        bailed = true;
                                        console.warn('Parent: ', elm);
                                        console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                                    }
                                    return false
                                }
                            }
                        }
                        if (isDef(data)) {
                            for (var key in data) {
                                if (!isRenderedModule(key)) {
                                    invokeCreateHooks(vnode, insertedVnodeQueue);
                                    break
                                }
                            }
                        }
                    } else if (elm.data !== vnode.text) {
                        elm.data = vnode.text;
                    }
                    return true
                }

                function assertNodeMatch(node, vnode) {
                    if (isDef(vnode.tag)) {
                        return (
                            vnode.tag.indexOf('vue-component') === 0 ||
                            vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
                        )
                    } else {
                        return node.nodeType === (vnode.isComment ? 8 : 3)
                    }
                }

                return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
                    if (isUndef(vnode)) {
                        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
                        return
                    }

                    var isInitialPatch = false;
                    var insertedVnodeQueue = [];

                    if (isUndef(oldVnode)) {
                        // empty mount (likely as component), create new root element
                        isInitialPatch = true;
                        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
                    } else {
                        var isRealElement = isDef(oldVnode.nodeType);
                        if (!isRealElement && sameVnode(oldVnode, vnode)) {
                            // patch existing root node
                            patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
                        } else {
                            if (isRealElement) {
                                // mounting to a real element
                                // check if this is server-rendered content and if we can perform
                                // a successful hydration.
                                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                                    oldVnode.removeAttribute(SSR_ATTR);
                                    hydrating = true;
                                }
                                if (isTrue(hydrating)) {
                                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                                        invokeInsertHook(vnode, insertedVnodeQueue, true);
                                        return oldVnode
                                    } else if (process.env.NODE_ENV !== 'production') {
                                        warn(
                                            'The client-side rendered virtual DOM tree is not matching ' +
                                            'server-rendered content. This is likely caused by incorrect ' +
                                            'HTML markup, for example nesting block-level elements inside ' +
                                            '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                            'full client-side render.'
                                        );
                                    }
                                }
                                // either not server-rendered, or hydration failed.
                                // create an empty node and replace it
                                oldVnode = emptyNodeAt(oldVnode);
                            }
                            // replacing existing element
                            var oldElm = oldVnode.elm;
                            var parentElm$1 = nodeOps.parentNode(oldElm);
                            createElm(
                                vnode,
                                insertedVnodeQueue,
                                // extremely rare edge case: do not insert if old element is in a
                                // leaving transition. Only happens when combining transition +
                                // keep-alive + HOCs. (#4590)
                                oldElm._leaveCb ? null : parentElm$1,
                                nodeOps.nextSibling(oldElm)
                            );

                            if (isDef(vnode.parent)) {
                                // component root element replaced.
                                // update parent placeholder node element, recursively
                                var ancestor = vnode.parent;
                                while (ancestor) {
                                    ancestor.elm = vnode.elm;
                                    ancestor = ancestor.parent;
                                }
                                if (isPatchable(vnode)) {
                                    for (var i = 0; i < cbs.create.length; ++i) {
                                        cbs.create[i](emptyNode, vnode.parent);
                                    }
                                }
                            }

                            if (isDef(parentElm$1)) {
                                removeVnodes(parentElm$1, [oldVnode], 0, 0);
                            } else if (isDef(oldVnode.tag)) {
                                invokeDestroyHook(oldVnode);
                            }
                        }
                    }

                    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
                    return vnode.elm
                }
            }

            /*  */

            var directives = {
                create: updateDirectives,
                update: updateDirectives,
                destroy: function unbindDirectives(vnode) {
                    updateDirectives(vnode, emptyNode);
                }
            };

            function updateDirectives(oldVnode, vnode) {
                if (oldVnode.data.directives || vnode.data.directives) {
                    _update(oldVnode, vnode);
                }
            }

            function _update(oldVnode, vnode) {
                var isCreate = oldVnode === emptyNode;
                var isDestroy = vnode === emptyNode;
                var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
                var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

                var dirsWithInsert = [];
                var dirsWithPostpatch = [];

                var key, oldDir, dir;
                for (key in newDirs) {
                    oldDir = oldDirs[key];
                    dir = newDirs[key];
                    if (!oldDir) {
                        // new directive, bind
                        callHook$1(dir, 'bind', vnode, oldVnode);
                        if (dir.def && dir.def.inserted) {
                            dirsWithInsert.push(dir);
                        }
                    } else {
                        // existing directive, update
                        dir.oldValue = oldDir.value;
                        callHook$1(dir, 'update', vnode, oldVnode);
                        if (dir.def && dir.def.componentUpdated) {
                            dirsWithPostpatch.push(dir);
                        }
                    }
                }

                if (dirsWithInsert.length) {
                    var callInsert = function() {
                        for (var i = 0; i < dirsWithInsert.length; i++) {
                            callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
                        }
                    };
                    if (isCreate) {
                        mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
                    } else {
                        callInsert();
                    }
                }

                if (dirsWithPostpatch.length) {
                    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function() {
                        for (var i = 0; i < dirsWithPostpatch.length; i++) {
                            callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
                        }
                    });
                }

                if (!isCreate) {
                    for (key in oldDirs) {
                        if (!newDirs[key]) {
                            // no longer present, unbind
                            callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
                        }
                    }
                }
            }

            var emptyModifiers = Object.create(null);

            function normalizeDirectives$1(
                dirs,
                vm
            ) {
                var res = Object.create(null);
                if (!dirs) {
                    return res
                }
                var i, dir;
                for (i = 0; i < dirs.length; i++) {
                    dir = dirs[i];
                    if (!dir.modifiers) {
                        dir.modifiers = emptyModifiers;
                    }
                    res[getRawDirName(dir)] = dir;
                    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
                }
                return res
            }

            function getRawDirName(dir) {
                return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
            }

            function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
                var fn = dir.def && dir.def[hook];
                if (fn) {
                    try {
                        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
                    } catch (e) {
                        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
                    }
                }
            }

            var baseModules = [
                ref,
                directives
            ];

            /*  */

            function updateAttrs(oldVnode, vnode) {
                if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
                    return
                }
                var key, cur, old;
                var elm = vnode.elm;
                var oldAttrs = oldVnode.data.attrs || {};
                var attrs = vnode.data.attrs || {};
                // clone observed objects, as the user probably wants to mutate it
                if (isDef(attrs.__ob__)) {
                    attrs = vnode.data.attrs = extend({}, attrs);
                }

                for (key in attrs) {
                    cur = attrs[key];
                    old = oldAttrs[key];
                    if (old !== cur) {
                        setAttr(elm, key, cur);
                    }
                }
                // #4391: in IE9, setting type can reset value for input[type=radio]
                /* istanbul ignore if */
                if (isIE9 && attrs.value !== oldAttrs.value) {
                    setAttr(elm, 'value', attrs.value);
                }
                for (key in oldAttrs) {
                    if (isUndef(attrs[key])) {
                        if (isXlink(key)) {
                            elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
                        } else if (!isEnumeratedAttr(key)) {
                            elm.removeAttribute(key);
                        }
                    }
                }
            }

            function setAttr(el, key, value) {
                if (isBooleanAttr(key)) {
                    // set attribute for blank value
                    // e.g. <option disabled>Select one</option>
                    if (isFalsyAttrValue(value)) {
                        el.removeAttribute(key);
                    } else {
                        el.setAttribute(key, key);
                    }
                } else if (isEnumeratedAttr(key)) {
                    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
                } else if (isXlink(key)) {
                    if (isFalsyAttrValue(value)) {
                        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
                    } else {
                        el.setAttributeNS(xlinkNS, key, value);
                    }
                } else {
                    if (isFalsyAttrValue(value)) {
                        el.removeAttribute(key);
                    } else {
                        el.setAttribute(key, value);
                    }
                }
            }

            var attrs = {
                create: updateAttrs,
                update: updateAttrs
            };

            /*  */

            function updateClass(oldVnode, vnode) {
                var el = vnode.elm;
                var data = vnode.data;
                var oldData = oldVnode.data;
                if (
                    isUndef(data.staticClass) &&
                    isUndef(data.class) && (
                        isUndef(oldData) || (
                            isUndef(oldData.staticClass) &&
                            isUndef(oldData.class)
                        )
                    )
                ) {
                    return
                }

                var cls = genClassForVnode(vnode);

                // handle transition classes
                var transitionClass = el._transitionClasses;
                if (isDef(transitionClass)) {
                    cls = concat(cls, stringifyClass(transitionClass));
                }

                // set the class
                if (cls !== el._prevClass) {
                    el.setAttribute('class', cls);
                    el._prevClass = cls;
                }
            }

            var klass = {
                create: updateClass,
                update: updateClass
            };

            /*  */

            var validDivisionCharRE = /[\w).+\-_$\]]/;



            function wrapFilter(exp, filter) {
                var i = filter.indexOf('(');
                if (i < 0) {
                    // _f: resolveFilter
                    return ("_f(\"" + filter + "\")(" + exp + ")")
                } else {
                    var name = filter.slice(0, i);
                    var args = filter.slice(i + 1);
                    return ("_f(\"" + name + "\")(" + exp + "," + args)
                }
            }

            /*  */

            /*  */

            /**
             * Cross-platform code generation for component v-model
             */


            /**
             * Cross-platform codegen helper for generating v-model value assignment code.
             */


            /**
             * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
             *
             * for loop possible cases:
             *
             * - test
             * - test[idx]
             * - test[test1[idx]]
             * - test["a"][idx]
             * - xxx.test[a[a].test1[idx]]
             * - test.xxx.a["asa"][test1[idx]]
             *
             */

            var str;
            var index$1;

            /*  */

            // in some cases, the event used has to be determined at runtime
            // so we used some reserved tokens during compile.
            var RANGE_TOKEN = '__r';
            var CHECKBOX_RADIO_TOKEN = '__c';

            /*  */

            // normalize v-model event tokens that can only be determined at runtime.
            // it's important to place the event as the first in the array because
            // the whole point is ensuring the v-model callback gets called before
            // user-attached handlers.
            function normalizeEvents(on) {
                var event;
                /* istanbul ignore if */
                if (isDef(on[RANGE_TOKEN])) {
                    // IE input[type=range] only supports `change` event
                    event = isIE ? 'change' : 'input';
                    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
                    delete on[RANGE_TOKEN];
                }
                if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
                    // Chrome fires microtasks in between click/change, leads to #4521
                    event = isChrome ? 'click' : 'change';
                    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
                    delete on[CHECKBOX_RADIO_TOKEN];
                }
            }

            var target$1;

            function add$1(
                event,
                handler,
                once$$1,
                capture,
                passive
            ) {
                if (once$$1) {
                    var oldHandler = handler;
                    var _target = target$1; // save current target element in closure
                    handler = function(ev) {
                        var res = arguments.length === 1 ?
                            oldHandler(ev) :
                            oldHandler.apply(null, arguments);
                        if (res !== null) {
                            remove$2(event, handler, capture, _target);
                        }
                    };
                }
                target$1.addEventListener(
                    event,
                    handler,
                    supportsPassive ? { capture: capture, passive: passive } :
                    capture
                );
            }

            function remove$2(
                event,
                handler,
                capture,
                _target
            ) {
                (_target || target$1).removeEventListener(event, handler, capture);
            }

            function updateDOMListeners(oldVnode, vnode) {
                if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
                    return
                }
                var on = vnode.data.on || {};
                var oldOn = oldVnode.data.on || {};
                target$1 = vnode.elm;
                normalizeEvents(on);
                updateListeners(on, oldOn, add$1, remove$2, vnode.context);
            }

            var events = {
                create: updateDOMListeners,
                update: updateDOMListeners
            };

            /*  */

            function updateDOMProps(oldVnode, vnode) {
                if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
                    return
                }
                var key, cur;
                var elm = vnode.elm;
                var oldProps = oldVnode.data.domProps || {};
                var props = vnode.data.domProps || {};
                // clone observed objects, as the user probably wants to mutate it
                if (isDef(props.__ob__)) {
                    props = vnode.data.domProps = extend({}, props);
                }

                for (key in oldProps) {
                    if (isUndef(props[key])) {
                        elm[key] = '';
                    }
                }
                for (key in props) {
                    cur = props[key];
                    // ignore children if the node has textContent or innerHTML,
                    // as these will throw away existing DOM nodes and cause removal errors
                    // on subsequent patches (#3360)
                    if (key === 'textContent' || key === 'innerHTML') {
                        if (vnode.children) { vnode.children.length = 0; }
                        if (cur === oldProps[key]) { continue }
                    }

                    if (key === 'value') {
                        // store value as _value as well since
                        // non-string values will be stringified
                        elm._value = cur;
                        // avoid resetting cursor position when value is the same
                        var strCur = isUndef(cur) ? '' : String(cur);
                        if (shouldUpdateValue(elm, vnode, strCur)) {
                            elm.value = strCur;
                        }
                    } else {
                        elm[key] = cur;
                    }
                }
            }

            // check platforms/web/util/attrs.js acceptValue


            function shouldUpdateValue(
                elm,
                vnode,
                checkVal
            ) {
                return (!elm.composing && (
                    vnode.tag === 'option' ||
                    isDirty(elm, checkVal) ||
                    isInputChanged(elm, checkVal)
                ))
            }

            function isDirty(elm, checkVal) {
                // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
                return document.activeElement !== elm && elm.value !== checkVal
            }

            function isInputChanged(elm, newVal) {
                var value = elm.value;
                var modifiers = elm._vModifiers; // injected by v-model runtime
                if ((isDef(modifiers) && modifiers.number) || elm.type === 'number') {
                    return toNumber(value) !== toNumber(newVal)
                }
                if (isDef(modifiers) && modifiers.trim) {
                    return value.trim() !== newVal.trim()
                }
                return value !== newVal
            }

            var domProps = {
                create: updateDOMProps,
                update: updateDOMProps
            };

            /*  */

            var parseStyleText = cached(function(cssText) {
                var res = {};
                var listDelimiter = /;(?![^(]*\))/g;
                var propertyDelimiter = /:(.+)/;
                cssText.split(listDelimiter).forEach(function(item) {
                    if (item) {
                        var tmp = item.split(propertyDelimiter);
                        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                    }
                });
                return res
            });

            // merge static and dynamic style data on the same vnode
            function normalizeStyleData(data) {
                var style = normalizeStyleBinding(data.style);
                // static style is pre-processed into an object during compilation
                // and is always a fresh object, so it's safe to merge into it
                return data.staticStyle ?
                    extend(data.staticStyle, style) :
                    style
            }

            // normalize possible array / string values into Object
            function normalizeStyleBinding(bindingStyle) {
                if (Array.isArray(bindingStyle)) {
                    return toObject(bindingStyle)
                }
                if (typeof bindingStyle === 'string') {
                    return parseStyleText(bindingStyle)
                }
                return bindingStyle
            }

            /**
             * parent component style should be after child's
             * so that parent component's style could override it
             */
            function getStyle(vnode, checkChild) {
                var res = {};
                var styleData;

                if (checkChild) {
                    var childNode = vnode;
                    while (childNode.componentInstance) {
                        childNode = childNode.componentInstance._vnode;
                        if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
                            extend(res, styleData);
                        }
                    }
                }

                if ((styleData = normalizeStyleData(vnode.data))) {
                    extend(res, styleData);
                }

                var parentNode = vnode;
                while ((parentNode = parentNode.parent)) {
                    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
                        extend(res, styleData);
                    }
                }
                return res
            }

            /*  */

            var cssVarRE = /^--/;
            var importantRE = /\s*!important$/;
            var setProp = function(el, name, val) {
                /* istanbul ignore if */
                if (cssVarRE.test(name)) {
                    el.style.setProperty(name, val);
                } else if (importantRE.test(val)) {
                    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
                } else {
                    var normalizedName = normalize(name);
                    if (Array.isArray(val)) {
                        // Support values array created by autoprefixer, e.g.
                        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                        // Set them one by one, and the browser will only set those it can recognize
                        for (var i = 0, len = val.length; i < len; i++) {
                            el.style[normalizedName] = val[i];
                        }
                    } else {
                        el.style[normalizedName] = val;
                    }
                }
            };

            var prefixes = ['Webkit', 'Moz', 'ms'];

            var testEl;
            var normalize = cached(function(prop) {
                testEl = testEl || document.createElement('div');
                prop = camelize(prop);
                if (prop !== 'filter' && (prop in testEl.style)) {
                    return prop
                }
                var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
                for (var i = 0; i < prefixes.length; i++) {
                    var prefixed = prefixes[i] + upper;
                    if (prefixed in testEl.style) {
                        return prefixed
                    }
                }
            });

            function updateStyle(oldVnode, vnode) {
                var data = vnode.data;
                var oldData = oldVnode.data;

                if (isUndef(data.staticStyle) && isUndef(data.style) &&
                    isUndef(oldData.staticStyle) && isUndef(oldData.style)
                ) {
                    return
                }

                var cur, name;
                var el = vnode.elm;
                var oldStaticStyle = oldData.staticStyle;
                var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

                // if static style exists, stylebinding already merged into it when doing normalizeStyleData
                var oldStyle = oldStaticStyle || oldStyleBinding;

                var style = normalizeStyleBinding(vnode.data.style) || {};

                // store normalized style under a different key for next diff
                // make sure to clone it if it's reactive, since the user likley wants
                // to mutate it.
                vnode.data.normalizedStyle = isDef(style.__ob__) ?
                    extend({}, style) :
                    style;

                var newStyle = getStyle(vnode, true);

                for (name in oldStyle) {
                    if (isUndef(newStyle[name])) {
                        setProp(el, name, '');
                    }
                }
                for (name in newStyle) {
                    cur = newStyle[name];
                    if (cur !== oldStyle[name]) {
                        // ie9 setting to null has no effect, must use empty string
                        setProp(el, name, cur == null ? '' : cur);
                    }
                }
            }

            var style = {
                create: updateStyle,
                update: updateStyle
            };

            /*  */

            /**
             * Add class with compatibility for SVG since classList is not supported on
             * SVG elements in IE
             */
            function addClass(el, cls) {
                /* istanbul ignore if */
                if (!cls || !(cls = cls.trim())) {
                    return
                }

                /* istanbul ignore else */
                if (el.classList) {
                    if (cls.indexOf(' ') > -1) {
                        cls.split(/\s+/).forEach(function(c) { return el.classList.add(c); });
                    } else {
                        el.classList.add(cls);
                    }
                } else {
                    var cur = " " + (el.getAttribute('class') || '') + " ";
                    if (cur.indexOf(' ' + cls + ' ') < 0) {
                        el.setAttribute('class', (cur + cls).trim());
                    }
                }
            }

            /**
             * Remove class with compatibility for SVG since classList is not supported on
             * SVG elements in IE
             */
            function removeClass(el, cls) {
                /* istanbul ignore if */
                if (!cls || !(cls = cls.trim())) {
                    return
                }

                /* istanbul ignore else */
                if (el.classList) {
                    if (cls.indexOf(' ') > -1) {
                        cls.split(/\s+/).forEach(function(c) { return el.classList.remove(c); });
                    } else {
                        el.classList.remove(cls);
                    }
                } else {
                    var cur = " " + (el.getAttribute('class') || '') + " ";
                    var tar = ' ' + cls + ' ';
                    while (cur.indexOf(tar) >= 0) {
                        cur = cur.replace(tar, ' ');
                    }
                    el.setAttribute('class', cur.trim());
                }
            }

            /*  */

            function resolveTransition(def$$1) {
                if (!def$$1) {
                    return
                }
                /* istanbul ignore else */
                if (typeof def$$1 === 'object') {
                    var res = {};
                    if (def$$1.css !== false) {
                        extend(res, autoCssTransition(def$$1.name || 'v'));
                    }
                    extend(res, def$$1);
                    return res
                } else if (typeof def$$1 === 'string') {
                    return autoCssTransition(def$$1)
                }
            }

            var autoCssTransition = cached(function(name) {
                return {
                    enterClass: (name + "-enter"),
                    enterToClass: (name + "-enter-to"),
                    enterActiveClass: (name + "-enter-active"),
                    leaveClass: (name + "-leave"),
                    leaveToClass: (name + "-leave-to"),
                    leaveActiveClass: (name + "-leave-active")
                }
            });

            var hasTransition = inBrowser && !isIE9;
            var TRANSITION = 'transition';
            var ANIMATION = 'animation';

            // Transition property/event sniffing
            var transitionProp = 'transition';
            var transitionEndEvent = 'transitionend';
            var animationProp = 'animation';
            var animationEndEvent = 'animationend';
            if (hasTransition) {
                /* istanbul ignore if */
                if (window.ontransitionend === undefined &&
                    window.onwebkittransitionend !== undefined
                ) {
                    transitionProp = 'WebkitTransition';
                    transitionEndEvent = 'webkitTransitionEnd';
                }
                if (window.onanimationend === undefined &&
                    window.onwebkitanimationend !== undefined
                ) {
                    animationProp = 'WebkitAnimation';
                    animationEndEvent = 'webkitAnimationEnd';
                }
            }

            // binding to window is necessary to make hot reload work in IE in strict mode
            var raf = inBrowser && window.requestAnimationFrame ?
                window.requestAnimationFrame.bind(window) :
                setTimeout;

            function nextFrame(fn) {
                raf(function() {
                    raf(fn);
                });
            }

            function addTransitionClass(el, cls) {
                (el._transitionClasses || (el._transitionClasses = [])).push(cls);
                addClass(el, cls);
            }

            function removeTransitionClass(el, cls) {
                if (el._transitionClasses) {
                    remove(el._transitionClasses, cls);
                }
                removeClass(el, cls);
            }

            function whenTransitionEnds(
                el,
                expectedType,
                cb
            ) {
                var ref = getTransitionInfo(el, expectedType);
                var type = ref.type;
                var timeout = ref.timeout;
                var propCount = ref.propCount;
                if (!type) { return cb() }
                var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
                var ended = 0;
                var end = function() {
                    el.removeEventListener(event, onEnd);
                    cb();
                };
                var onEnd = function(e) {
                    if (e.target === el) {
                        if (++ended >= propCount) {
                            end();
                        }
                    }
                };
                setTimeout(function() {
                    if (ended < propCount) {
                        end();
                    }
                }, timeout + 1);
                el.addEventListener(event, onEnd);
            }

            var transformRE = /\b(transform|all)(,|$)/;

            function getTransitionInfo(el, expectedType) {
                var styles = window.getComputedStyle(el);
                var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
                var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
                var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
                var animationDelays = styles[animationProp + 'Delay'].split(', ');
                var animationDurations = styles[animationProp + 'Duration'].split(', ');
                var animationTimeout = getTimeout(animationDelays, animationDurations);

                var type;
                var timeout = 0;
                var propCount = 0;
                /* istanbul ignore if */
                if (expectedType === TRANSITION) {
                    if (transitionTimeout > 0) {
                        type = TRANSITION;
                        timeout = transitionTimeout;
                        propCount = transitionDurations.length;
                    }
                } else if (expectedType === ANIMATION) {
                    if (animationTimeout > 0) {
                        type = ANIMATION;
                        timeout = animationTimeout;
                        propCount = animationDurations.length;
                    }
                } else {
                    timeout = Math.max(transitionTimeout, animationTimeout);
                    type = timeout > 0 ?
                        transitionTimeout > animationTimeout ?
                        TRANSITION :
                        ANIMATION :
                        null;
                    propCount = type ?
                        type === TRANSITION ?
                        transitionDurations.length :
                        animationDurations.length :
                        0;
                }
                var hasTransform =
                    type === TRANSITION &&
                    transformRE.test(styles[transitionProp + 'Property']);
                return {
                    type: type,
                    timeout: timeout,
                    propCount: propCount,
                    hasTransform: hasTransform
                }
            }

            function getTimeout(delays, durations) {
                /* istanbul ignore next */
                while (delays.length < durations.length) {
                    delays = delays.concat(delays);
                }

                return Math.max.apply(null, durations.map(function(d, i) {
                    return toMs(d) + toMs(delays[i])
                }))
            }

            function toMs(s) {
                return Number(s.slice(0, -1)) * 1000
            }

            /*  */

            function enter(vnode, toggleDisplay) {
                var el = vnode.elm;

                // call leave callback now
                if (isDef(el._leaveCb)) {
                    el._leaveCb.cancelled = true;
                    el._leaveCb();
                }

                var data = resolveTransition(vnode.data.transition);
                if (isUndef(data)) {
                    return
                }

                /* istanbul ignore if */
                if (isDef(el._enterCb) || el.nodeType !== 1) {
                    return
                }

                var css = data.css;
                var type = data.type;
                var enterClass = data.enterClass;
                var enterToClass = data.enterToClass;
                var enterActiveClass = data.enterActiveClass;
                var appearClass = data.appearClass;
                var appearToClass = data.appearToClass;
                var appearActiveClass = data.appearActiveClass;
                var beforeEnter = data.beforeEnter;
                var enter = data.enter;
                var afterEnter = data.afterEnter;
                var enterCancelled = data.enterCancelled;
                var beforeAppear = data.beforeAppear;
                var appear = data.appear;
                var afterAppear = data.afterAppear;
                var appearCancelled = data.appearCancelled;
                var duration = data.duration;

                // activeInstance will always be the <transition> component managing this
                // transition. One edge case to check is when the <transition> is placed
                // as the root node of a child component. In that case we need to check
                // <transition>'s parent for appear check.
                var context = activeInstance;
                var transitionNode = activeInstance.$vnode;
                while (transitionNode && transitionNode.parent) {
                    transitionNode = transitionNode.parent;
                    context = transitionNode.context;
                }

                var isAppear = !context._isMounted || !vnode.isRootInsert;

                if (isAppear && !appear && appear !== '') {
                    return
                }

                var startClass = isAppear && appearClass ?
                    appearClass :
                    enterClass;
                var activeClass = isAppear && appearActiveClass ?
                    appearActiveClass :
                    enterActiveClass;
                var toClass = isAppear && appearToClass ?
                    appearToClass :
                    enterToClass;

                var beforeEnterHook = isAppear ?
                    (beforeAppear || beforeEnter) :
                    beforeEnter;
                var enterHook = isAppear ?
                    (typeof appear === 'function' ? appear : enter) :
                    enter;
                var afterEnterHook = isAppear ?
                    (afterAppear || afterEnter) :
                    afterEnter;
                var enterCancelledHook = isAppear ?
                    (appearCancelled || enterCancelled) :
                    enterCancelled;

                var explicitEnterDuration = toNumber(
                    isObject(duration) ?
                    duration.enter :
                    duration
                );

                if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
                    checkDuration(explicitEnterDuration, 'enter', vnode);
                }

                var expectsCSS = css !== false && !isIE9;
                var userWantsControl = getHookArgumentsLength(enterHook);

                var cb = el._enterCb = once(function() {
                    if (expectsCSS) {
                        removeTransitionClass(el, toClass);
                        removeTransitionClass(el, activeClass);
                    }
                    if (cb.cancelled) {
                        if (expectsCSS) {
                            removeTransitionClass(el, startClass);
                        }
                        enterCancelledHook && enterCancelledHook(el);
                    } else {
                        afterEnterHook && afterEnterHook(el);
                    }
                    el._enterCb = null;
                });

                if (!vnode.data.show) {
                    // remove pending leave element on enter by injecting an insert hook
                    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function() {
                        var parent = el.parentNode;
                        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
                        if (pendingNode &&
                            pendingNode.tag === vnode.tag &&
                            pendingNode.elm._leaveCb
                        ) {
                            pendingNode.elm._leaveCb();
                        }
                        enterHook && enterHook(el, cb);
                    });
                }

                // start enter transition
                beforeEnterHook && beforeEnterHook(el);
                if (expectsCSS) {
                    addTransitionClass(el, startClass);
                    addTransitionClass(el, activeClass);
                    nextFrame(function() {
                        addTransitionClass(el, toClass);
                        removeTransitionClass(el, startClass);
                        if (!cb.cancelled && !userWantsControl) {
                            if (isValidDuration(explicitEnterDuration)) {
                                setTimeout(cb, explicitEnterDuration);
                            } else {
                                whenTransitionEnds(el, type, cb);
                            }
                        }
                    });
                }

                if (vnode.data.show) {
                    toggleDisplay && toggleDisplay();
                    enterHook && enterHook(el, cb);
                }

                if (!expectsCSS && !userWantsControl) {
                    cb();
                }
            }

            function leave(vnode, rm) {
                var el = vnode.elm;

                // call enter callback now
                if (isDef(el._enterCb)) {
                    el._enterCb.cancelled = true;
                    el._enterCb();
                }

                var data = resolveTransition(vnode.data.transition);
                if (isUndef(data)) {
                    return rm()
                }

                /* istanbul ignore if */
                if (isDef(el._leaveCb) || el.nodeType !== 1) {
                    return
                }

                var css = data.css;
                var type = data.type;
                var leaveClass = data.leaveClass;
                var leaveToClass = data.leaveToClass;
                var leaveActiveClass = data.leaveActiveClass;
                var beforeLeave = data.beforeLeave;
                var leave = data.leave;
                var afterLeave = data.afterLeave;
                var leaveCancelled = data.leaveCancelled;
                var delayLeave = data.delayLeave;
                var duration = data.duration;

                var expectsCSS = css !== false && !isIE9;
                var userWantsControl = getHookArgumentsLength(leave);

                var explicitLeaveDuration = toNumber(
                    isObject(duration) ?
                    duration.leave :
                    duration
                );

                if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
                    checkDuration(explicitLeaveDuration, 'leave', vnode);
                }

                var cb = el._leaveCb = once(function() {
                    if (el.parentNode && el.parentNode._pending) {
                        el.parentNode._pending[vnode.key] = null;
                    }
                    if (expectsCSS) {
                        removeTransitionClass(el, leaveToClass);
                        removeTransitionClass(el, leaveActiveClass);
                    }
                    if (cb.cancelled) {
                        if (expectsCSS) {
                            removeTransitionClass(el, leaveClass);
                        }
                        leaveCancelled && leaveCancelled(el);
                    } else {
                        rm();
                        afterLeave && afterLeave(el);
                    }
                    el._leaveCb = null;
                });

                if (delayLeave) {
                    delayLeave(performLeave);
                } else {
                    performLeave();
                }

                function performLeave() {
                    // the delayed leave may have already been cancelled
                    if (cb.cancelled) {
                        return
                    }
                    // record leaving element
                    if (!vnode.data.show) {
                        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
                    }
                    beforeLeave && beforeLeave(el);
                    if (expectsCSS) {
                        addTransitionClass(el, leaveClass);
                        addTransitionClass(el, leaveActiveClass);
                        nextFrame(function() {
                            addTransitionClass(el, leaveToClass);
                            removeTransitionClass(el, leaveClass);
                            if (!cb.cancelled && !userWantsControl) {
                                if (isValidDuration(explicitLeaveDuration)) {
                                    setTimeout(cb, explicitLeaveDuration);
                                } else {
                                    whenTransitionEnds(el, type, cb);
                                }
                            }
                        });
                    }
                    leave && leave(el, cb);
                    if (!expectsCSS && !userWantsControl) {
                        cb();
                    }
                }
            }

            // only used in dev mode
            function checkDuration(val, name, vnode) {
                if (typeof val !== 'number') {
                    warn(
                        "<transition> explicit " + name + " duration is not a valid number - " +
                        "got " + (JSON.stringify(val)) + ".",
                        vnode.context
                    );
                } else if (isNaN(val)) {
                    warn(
                        "<transition> explicit " + name + " duration is NaN - " +
                        'the duration expression might be incorrect.',
                        vnode.context
                    );
                }
            }

            function isValidDuration(val) {
                return typeof val === 'number' && !isNaN(val)
            }

            /**
             * Normalize a transition hook's argument length. The hook may be:
             * - a merged hook (invoker) with the original in .fns
             * - a wrapped component method (check ._length)
             * - a plain function (.length)
             */
            function getHookArgumentsLength(fn) {
                if (isUndef(fn)) {
                    return false
                }
                var invokerFns = fn.fns;
                if (isDef(invokerFns)) {
                    // invoker
                    return getHookArgumentsLength(
                        Array.isArray(invokerFns) ?
                        invokerFns[0] :
                        invokerFns
                    )
                } else {
                    return (fn._length || fn.length) > 1
                }
            }

            function _enter(_, vnode) {
                if (vnode.data.show !== true) {
                    enter(vnode);
                }
            }

            var transition = inBrowser ? {
                create: _enter,
                activate: _enter,
                remove: function remove$$1(vnode, rm) {
                    /* istanbul ignore else */
                    if (vnode.data.show !== true) {
                        leave(vnode, rm);
                    } else {
                        rm();
                    }
                }
            } : {};

            var platformModules = [
                attrs,
                klass,
                events,
                domProps,
                style,
                transition
            ];

            /*  */

            // the directive module should be applied last, after all
            // built-in modules have been applied.
            var modules = platformModules.concat(baseModules);

            var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

            /**
             * Not type checking this file because flow doesn't like attaching
             * properties to Elements.
             */

            /* istanbul ignore if */
            if (isIE9) {
                // http://www.matts411.com/post/internet-explorer-9-oninput/
                document.addEventListener('selectionchange', function() {
                    var el = document.activeElement;
                    if (el && el.vmodel) {
                        trigger(el, 'input');
                    }
                });
            }

            var model$1 = {
                inserted: function inserted(el, binding, vnode) {
                    if (vnode.tag === 'select') {
                        var cb = function() {
                            setSelected(el, binding, vnode.context);
                        };
                        cb();
                        /* istanbul ignore if */
                        if (isIE || isEdge) {
                            setTimeout(cb, 0);
                        }
                    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
                        el._vModifiers = binding.modifiers;
                        if (!binding.modifiers.lazy) {
                            // Safari < 10.2 & UIWebView doesn't fire compositionend when
                            // switching focus before confirming composition choice
                            // this also fixes the issue where some browsers e.g. iOS Chrome
                            // fires "change" instead of "input" on autocomplete.
                            el.addEventListener('change', onCompositionEnd);
                            if (!isAndroid) {
                                el.addEventListener('compositionstart', onCompositionStart);
                                el.addEventListener('compositionend', onCompositionEnd);
                            }
                            /* istanbul ignore if */
                            if (isIE9) {
                                el.vmodel = true;
                            }
                        }
                    }
                },
                componentUpdated: function componentUpdated(el, binding, vnode) {
                    if (vnode.tag === 'select') {
                        setSelected(el, binding, vnode.context);
                        // in case the options rendered by v-for have changed,
                        // it's possible that the value is out-of-sync with the rendered options.
                        // detect such cases and filter out values that no longer has a matching
                        // option in the DOM.
                        var needReset = el.multiple ?
                            binding.value.some(function(v) { return hasNoMatchingOption(v, el.options); }) :
                            binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
                        if (needReset) {
                            trigger(el, 'change');
                        }
                    }
                }
            };

            function setSelected(el, binding, vm) {
                var value = binding.value;
                var isMultiple = el.multiple;
                if (isMultiple && !Array.isArray(value)) {
                    process.env.NODE_ENV !== 'production' && warn(
                        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
                        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
                        vm
                    );
                    return
                }
                var selected, option;
                for (var i = 0, l = el.options.length; i < l; i++) {
                    option = el.options[i];
                    if (isMultiple) {
                        selected = looseIndexOf(value, getValue(option)) > -1;
                        if (option.selected !== selected) {
                            option.selected = selected;
                        }
                    } else {
                        if (looseEqual(getValue(option), value)) {
                            if (el.selectedIndex !== i) {
                                el.selectedIndex = i;
                            }
                            return
                        }
                    }
                }
                if (!isMultiple) {
                    el.selectedIndex = -1;
                }
            }

            function hasNoMatchingOption(value, options) {
                for (var i = 0, l = options.length; i < l; i++) {
                    if (looseEqual(getValue(options[i]), value)) {
                        return false
                    }
                }
                return true
            }

            function getValue(option) {
                return '_value' in option ?
                    option._value :
                    option.value
            }

            function onCompositionStart(e) {
                e.target.composing = true;
            }

            function onCompositionEnd(e) {
                // prevent triggering an input event for no reason
                if (!e.target.composing) { return }
                e.target.composing = false;
                trigger(e.target, 'input');
            }

            function trigger(el, type) {
                var e = document.createEvent('HTMLEvents');
                e.initEvent(type, true, true);
                el.dispatchEvent(e);
            }

            /*  */

            // recursively search for possible transition defined inside the component root
            function locateNode(vnode) {
                return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ?
                    locateNode(vnode.componentInstance._vnode) :
                    vnode
            }

            var show = {
                bind: function bind(el, ref, vnode) {
                    var value = ref.value;

                    vnode = locateNode(vnode);
                    var transition = vnode.data && vnode.data.transition;
                    var originalDisplay = el.__vOriginalDisplay =
                        el.style.display === 'none' ? '' : el.style.display;
                    if (value && transition && !isIE9) {
                        vnode.data.show = true;
                        enter(vnode, function() {
                            el.style.display = originalDisplay;
                        });
                    } else {
                        el.style.display = value ? originalDisplay : 'none';
                    }
                },

                update: function update(el, ref, vnode) {
                    var value = ref.value;
                    var oldValue = ref.oldValue;

                    /* istanbul ignore if */
                    if (value === oldValue) { return }
                    vnode = locateNode(vnode);
                    var transition = vnode.data && vnode.data.transition;
                    if (transition && !isIE9) {
                        vnode.data.show = true;
                        if (value) {
                            enter(vnode, function() {
                                el.style.display = el.__vOriginalDisplay;
                            });
                        } else {
                            leave(vnode, function() {
                                el.style.display = 'none';
                            });
                        }
                    } else {
                        el.style.display = value ? el.__vOriginalDisplay : 'none';
                    }
                },

                unbind: function unbind(
                    el,
                    binding,
                    vnode,
                    oldVnode,
                    isDestroy
                ) {
                    if (!isDestroy) {
                        el.style.display = el.__vOriginalDisplay;
                    }
                }
            };

            var platformDirectives = {
                model: model$1,
                show: show
            };

            /*  */

            // Provides transition support for a single element/component.
            // supports transition mode (out-in / in-out)

            var transitionProps = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };

            // in case the child is also an abstract component, e.g. <keep-alive>
            // we want to recursively retrieve the real component to be rendered
            function getRealChild(vnode) {
                var compOptions = vnode && vnode.componentOptions;
                if (compOptions && compOptions.Ctor.options.abstract) {
                    return getRealChild(getFirstComponentChild(compOptions.children))
                } else {
                    return vnode
                }
            }

            function extractTransitionData(comp) {
                var data = {};
                var options = comp.$options;
                // props
                for (var key in options.propsData) {
                    data[key] = comp[key];
                }
                // events.
                // extract listeners and pass them directly to the transition methods
                var listeners = options._parentListeners;
                for (var key$1 in listeners) {
                    data[camelize(key$1)] = listeners[key$1];
                }
                return data
            }

            function placeholder(h, rawChild) {
                if (/\d-keep-alive$/.test(rawChild.tag)) {
                    return h('keep-alive', {
                        props: rawChild.componentOptions.propsData
                    })
                }
            }

            function hasParentTransition(vnode) {
                while ((vnode = vnode.parent)) {
                    if (vnode.data.transition) {
                        return true
                    }
                }
            }

            function isSameChild(child, oldChild) {
                return oldChild.key === child.key && oldChild.tag === child.tag
            }

            var Transition = {
                name: 'transition',
                props: transitionProps,
                abstract: true,

                render: function render(h) {
                    var this$1 = this;

                    var children = this.$slots.default;
                    if (!children) {
                        return
                    }

                    // filter out text nodes (possible whitespaces)
                    children = children.filter(function(c) { return c.tag; });
                    /* istanbul ignore if */
                    if (!children.length) {
                        return
                    }

                    // warn multiple elements
                    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
                        warn(
                            '<transition> can only be used on a single element. Use ' +
                            '<transition-group> for lists.',
                            this.$parent
                        );
                    }

                    var mode = this.mode;

                    // warn invalid mode
                    if (process.env.NODE_ENV !== 'production' &&
                        mode && mode !== 'in-out' && mode !== 'out-in'
                    ) {
                        warn(
                            'invalid <transition> mode: ' + mode,
                            this.$parent
                        );
                    }

                    var rawChild = children[0];

                    // if this is a component root node and the component's
                    // parent container node also has transition, skip.
                    if (hasParentTransition(this.$vnode)) {
                        return rawChild
                    }

                    // apply transition data to child
                    // use getRealChild() to ignore abstract components e.g. keep-alive
                    var child = getRealChild(rawChild);
                    /* istanbul ignore if */
                    if (!child) {
                        return rawChild
                    }

                    if (this._leaving) {
                        return placeholder(h, rawChild)
                    }

                    // ensure a key that is unique to the vnode type and to this transition
                    // component instance. This key will be used to remove pending leaving nodes
                    // during entering.
                    var id = "__transition-" + (this._uid) + "-";
                    child.key = child.key == null ?
                        id + child.tag :
                        isPrimitive(child.key) ?
                        (String(child.key).indexOf(id) === 0 ? child.key : id + child.key) :
                        child.key;

                    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
                    var oldRawChild = this._vnode;
                    var oldChild = getRealChild(oldRawChild);

                    // mark v-show
                    // so that the transition module can hand over the control to the directive
                    if (child.data.directives && child.data.directives.some(function(d) { return d.name === 'show'; })) {
                        child.data.show = true;
                    }

                    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
                        // replace old child transition data with fresh one
                        // important for dynamic transitions!
                        var oldData = oldChild && (oldChild.data.transition = extend({}, data));
                        // handle transition mode
                        if (mode === 'out-in') {
                            // return placeholder node and queue update when leave finishes
                            this._leaving = true;
                            mergeVNodeHook(oldData, 'afterLeave', function() {
                                this$1._leaving = false;
                                this$1.$forceUpdate();
                            });
                            return placeholder(h, rawChild)
                        } else if (mode === 'in-out') {
                            var delayedLeave;
                            var performLeave = function() { delayedLeave(); };
                            mergeVNodeHook(data, 'afterEnter', performLeave);
                            mergeVNodeHook(data, 'enterCancelled', performLeave);
                            mergeVNodeHook(oldData, 'delayLeave', function(leave) { delayedLeave = leave; });
                        }
                    }

                    return rawChild
                }
            };

            /*  */

            // Provides transition support for list items.
            // supports move transitions using the FLIP technique.

            // Because the vdom's children update algorithm is "unstable" - i.e.
            // it doesn't guarantee the relative positioning of removed elements,
            // we force transition-group to update its children into two passes:
            // in the first pass, we remove all nodes that need to be removed,
            // triggering their leaving transition; in the second pass, we insert/move
            // into the final desired state. This way in the second pass removed
            // nodes will remain where they should be.

            var props = extend({
                tag: String,
                moveClass: String
            }, transitionProps);

            delete props.mode;

            var TransitionGroup = {
                props: props,

                render: function render(h) {
                    var tag = this.tag || this.$vnode.data.tag || 'span';
                    var map = Object.create(null);
                    var prevChildren = this.prevChildren = this.children;
                    var rawChildren = this.$slots.default || [];
                    var children = this.children = [];
                    var transitionData = extractTransitionData(this);

                    for (var i = 0; i < rawChildren.length; i++) {
                        var c = rawChildren[i];
                        if (c.tag) {
                            if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                                children.push(c);
                                map[c.key] = c;
                                (c.data || (c.data = {})).transition = transitionData;
                            } else if (process.env.NODE_ENV !== 'production') {
                                var opts = c.componentOptions;
                                var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
                                warn(("<transition-group> children must be keyed: <" + name + ">"));
                            }
                        }
                    }

                    if (prevChildren) {
                        var kept = [];
                        var removed = [];
                        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                            var c$1 = prevChildren[i$1];
                            c$1.data.transition = transitionData;
                            c$1.data.pos = c$1.elm.getBoundingClientRect();
                            if (map[c$1.key]) {
                                kept.push(c$1);
                            } else {
                                removed.push(c$1);
                            }
                        }
                        this.kept = h(tag, null, kept);
                        this.removed = removed;
                    }

                    return h(tag, null, children)
                },

                beforeUpdate: function beforeUpdate() {
                    // force removing pass
                    this.__patch__(
                        this._vnode,
                        this.kept,
                        false, // hydrating
                        true // removeOnly (!important, avoids unnecessary moves)
                    );
                    this._vnode = this.kept;
                },

                updated: function updated() {
                    var children = this.prevChildren;
                    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
                    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
                        return
                    }

                    // we divide the work into three loops to avoid mixing DOM reads and writes
                    // in each iteration - which helps prevent layout thrashing.
                    children.forEach(callPendingCbs);
                    children.forEach(recordPosition);
                    children.forEach(applyTranslation);

                    // force reflow to put everything in position
                    var body = document.body;
                    var f = body.offsetHeight; // eslint-disable-line

                    children.forEach(function(c) {
                        if (c.data.moved) {
                            var el = c.elm;
                            var s = el.style;
                            addTransitionClass(el, moveClass);
                            s.transform = s.WebkitTransform = s.transitionDuration = '';
                            el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                                if (!e || /transform$/.test(e.propertyName)) {
                                    el.removeEventListener(transitionEndEvent, cb);
                                    el._moveCb = null;
                                    removeTransitionClass(el, moveClass);
                                }
                            });
                        }
                    });
                },

                methods: {
                    hasMove: function hasMove(el, moveClass) {
                        /* istanbul ignore if */
                        if (!hasTransition) {
                            return false
                        }
                        if (this._hasMove != null) {
                            return this._hasMove
                        }
                        // Detect whether an element with the move class applied has
                        // CSS transitions. Since the element may be inside an entering
                        // transition at this very moment, we make a clone of it and remove
                        // all other transition classes applied to ensure only the move class
                        // is applied.
                        var clone = el.cloneNode();
                        if (el._transitionClasses) {
                            el._transitionClasses.forEach(function(cls) { removeClass(clone, cls); });
                        }
                        addClass(clone, moveClass);
                        clone.style.display = 'none';
                        this.$el.appendChild(clone);
                        var info = getTransitionInfo(clone);
                        this.$el.removeChild(clone);
                        return (this._hasMove = info.hasTransform)
                    }
                }
            };

            function callPendingCbs(c) {
                /* istanbul ignore if */
                if (c.elm._moveCb) {
                    c.elm._moveCb();
                }
                /* istanbul ignore if */
                if (c.elm._enterCb) {
                    c.elm._enterCb();
                }
            }

            function recordPosition(c) {
                c.data.newPos = c.elm.getBoundingClientRect();
            }

            function applyTranslation(c) {
                var oldPos = c.data.pos;
                var newPos = c.data.newPos;
                var dx = oldPos.left - newPos.left;
                var dy = oldPos.top - newPos.top;
                if (dx || dy) {
                    c.data.moved = true;
                    var s = c.elm.style;
                    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
                    s.transitionDuration = '0s';
                }
            }

            var platformComponents = {
                Transition: Transition,
                TransitionGroup: TransitionGroup
            };

            /*  */

            // install platform specific utils
            Vue$3.config.mustUseProp = mustUseProp;
            Vue$3.config.isReservedTag = isReservedTag;
            Vue$3.config.isReservedAttr = isReservedAttr;
            Vue$3.config.getTagNamespace = getTagNamespace;
            Vue$3.config.isUnknownElement = isUnknownElement;

            // install platform runtime directives & components
            extend(Vue$3.options.directives, platformDirectives);
            extend(Vue$3.options.components, platformComponents);

            // install platform patch function
            Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

            // public mount method
            Vue$3.prototype.$mount = function(
                el,
                hydrating
            ) {
                el = el && inBrowser ? query(el) : undefined;
                return mountComponent(this, el, hydrating)
            };

            // devtools global hook
            /* istanbul ignore next */
            setTimeout(function() {
                if (config.devtools) {
                    if (devtools) {
                        devtools.emit('init', Vue$3);
                    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
                        console[console.info ? 'info' : 'log'](
                            'Download the Vue Devtools extension for a better development experience:\n' +
                            'https://github.com/vuejs/vue-devtools'
                        );
                    }
                }
                if (process.env.NODE_ENV !== 'production' &&
                    config.productionTip !== false &&
                    inBrowser && typeof console !== 'undefined'
                ) {
                    console[console.info ? 'info' : 'log'](
                        "You are running Vue in development mode.\n" +
                        "Make sure to turn on production mode when deploying for production.\n" +
                        "See more tips at https://vuejs.org/guide/deployment.html"
                    );
                }
            }, 0);

            /*  */

            /* harmony default export */
            __webpack_exports__["default"] = (Vue$3);

            /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(364), __webpack_require__(100)))

        /***/
    }),
    /* 32 */
    /***/
    (function(module, exports) {

        var core = module.exports = { version: '2.4.0' };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

        /***/
    }),
    /* 33 */
    /***/
    (function(module, exports, __webpack_require__) {

        // optional / simple context binding
        var aFunction = __webpack_require__(15);
        module.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
                case 1:
                    return function(a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c);
                    };
            }
            return function( /* ...args */ ) {
                return fn.apply(that, arguments);
            };
        };

        /***/
    }),
    /* 34 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Map = __webpack_require__(130),
            $export = __webpack_require__(0),
            shared = __webpack_require__(70)('metadata'),
            store = shared.store || (shared.store = new(__webpack_require__(133)));

        var getOrCreateMetadataMap = function(target, targetKey, create) {
            var targetMetadata = store.get(target);
            if (!targetMetadata) {
                if (!create) return undefined;
                store.set(target, targetMetadata = new Map);
            }
            var keyMetadata = targetMetadata.get(targetKey);
            if (!keyMetadata) {
                if (!create) return undefined;
                targetMetadata.set(targetKey, keyMetadata = new Map);
            }
            return keyMetadata;
        };
        var ordinaryHasOwnMetadata = function(MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, false);
            return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
        };
        var ordinaryGetOwnMetadata = function(MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, false);
            return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
        };
        var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P) {
            getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
        };
        var ordinaryOwnMetadataKeys = function(target, targetKey) {
            var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
                keys = [];
            if (metadataMap) metadataMap.forEach(function(_, key) { keys.push(key); });
            return keys;
        };
        var toMetaKey = function(it) {
            return it === undefined || typeof it == 'symbol' ? it : String(it);
        };
        var exp = function(O) {
            $export($export.S, 'Reflect', O);
        };

        module.exports = {
            store: store,
            map: getOrCreateMetadataMap,
            has: ordinaryHasOwnMetadata,
            get: ordinaryGetOwnMetadata,
            set: ordinaryDefineOwnMetadata,
            keys: ordinaryOwnMetadataKeys,
            key: toMetaKey,
            exp: exp
        };

        /***/
    }),
    /* 35 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        if (__webpack_require__(8)) {
            var LIBRARY = __webpack_require__(42),
                global = __webpack_require__(2),
                fails = __webpack_require__(3),
                $export = __webpack_require__(0),
                $typed = __webpack_require__(71),
                $buffer = __webpack_require__(95),
                ctx = __webpack_require__(33),
                anInstance = __webpack_require__(41),
                propertyDesc = __webpack_require__(37),
                hide = __webpack_require__(16),
                redefineAll = __webpack_require__(46),
                toInteger = __webpack_require__(38),
                toLength = __webpack_require__(10),
                toIndex = __webpack_require__(48),
                toPrimitive = __webpack_require__(30),
                has = __webpack_require__(14),
                same = __webpack_require__(127),
                classof = __webpack_require__(56),
                isObject = __webpack_require__(4),
                toObject = __webpack_require__(12),
                isArrayIter = __webpack_require__(80),
                create = __webpack_require__(43),
                getPrototypeOf = __webpack_require__(23),
                gOPN = __webpack_require__(44).f,
                getIterFn = __webpack_require__(97),
                uid = __webpack_require__(49),
                wks = __webpack_require__(5),
                createArrayMethod = __webpack_require__(28),
                createArrayIncludes = __webpack_require__(61),
                speciesConstructor = __webpack_require__(89),
                ArrayIterators = __webpack_require__(98),
                Iterators = __webpack_require__(53),
                $iterDetect = __webpack_require__(67),
                setSpecies = __webpack_require__(47),
                arrayFill = __webpack_require__(73),
                arrayCopyWithin = __webpack_require__(107),
                $DP = __webpack_require__(9),
                $GOPD = __webpack_require__(22),
                dP = $DP.f,
                gOPD = $GOPD.f,
                RangeError = global.RangeError,
                TypeError = global.TypeError,
                Uint8Array = global.Uint8Array,
                ARRAY_BUFFER = 'ArrayBuffer',
                SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
                BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
                PROTOTYPE = 'prototype',
                ArrayProto = Array[PROTOTYPE],
                $ArrayBuffer = $buffer.ArrayBuffer,
                $DataView = $buffer.DataView,
                arrayForEach = createArrayMethod(0),
                arrayFilter = createArrayMethod(2),
                arraySome = createArrayMethod(3),
                arrayEvery = createArrayMethod(4),
                arrayFind = createArrayMethod(5),
                arrayFindIndex = createArrayMethod(6),
                arrayIncludes = createArrayIncludes(true),
                arrayIndexOf = createArrayIncludes(false),
                arrayValues = ArrayIterators.values,
                arrayKeys = ArrayIterators.keys,
                arrayEntries = ArrayIterators.entries,
                arrayLastIndexOf = ArrayProto.lastIndexOf,
                arrayReduce = ArrayProto.reduce,
                arrayReduceRight = ArrayProto.reduceRight,
                arrayJoin = ArrayProto.join,
                arraySort = ArrayProto.sort,
                arraySlice = ArrayProto.slice,
                arrayToString = ArrayProto.toString,
                arrayToLocaleString = ArrayProto.toLocaleString,
                ITERATOR = wks('iterator'),
                TAG = wks('toStringTag'),
                TYPED_CONSTRUCTOR = uid('typed_constructor'),
                DEF_CONSTRUCTOR = uid('def_constructor'),
                ALL_CONSTRUCTORS = $typed.CONSTR,
                TYPED_ARRAY = $typed.TYPED,
                VIEW = $typed.VIEW,
                WRONG_LENGTH = 'Wrong length!';

            var $map = createArrayMethod(1, function(O, length) {
                return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
            });

            var LITTLE_ENDIAN = fails(function() {
                return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
            });

            var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function() {
                new Uint8Array(1).set({});
            });

            var strictToLength = function(it, SAME) {
                if (it === undefined) throw TypeError(WRONG_LENGTH);
                var number = +it,
                    length = toLength(it);
                if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
                return length;
            };

            var toOffset = function(it, BYTES) {
                var offset = toInteger(it);
                if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
                return offset;
            };

            var validate = function(it) {
                if (isObject(it) && TYPED_ARRAY in it) return it;
                throw TypeError(it + ' is not a typed array!');
            };

            var allocate = function(C, length) {
                if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
                    throw TypeError('It is not a typed array constructor!');
                }
                return new C(length);
            };

            var speciesFromList = function(O, list) {
                return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
            };

            var fromList = function(C, list) {
                var index = 0,
                    length = list.length,
                    result = allocate(C, length);
                while (length > index) result[index] = list[index++];
                return result;
            };

            var addGetter = function(it, key, internal) {
                dP(it, key, { get: function() { return this._d[internal]; } });
            };

            var $from = function from(source /*, mapfn, thisArg */ ) {
                var O = toObject(source),
                    aLen = arguments.length,
                    mapfn = aLen > 1 ? arguments[1] : undefined,
                    mapping = mapfn !== undefined,
                    iterFn = getIterFn(O),
                    i, length, values, result, step, iterator;
                if (iterFn != undefined && !isArrayIter(iterFn)) {
                    for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
                        values.push(step.value);
                    }
                    O = values;
                }
                if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
                for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
                    result[i] = mapping ? mapfn(O[i], i) : O[i];
                }
                return result;
            };

            var $of = function of( /*...items*/ ) {
                var index = 0,
                    length = arguments.length,
                    result = allocate(this, length);
                while (length > index) result[index] = arguments[index++];
                return result;
            };

            // iOS Safari 6.x fails here
            var TO_LOCALE_BUG = !!Uint8Array && fails(function() { arrayToLocaleString.call(new Uint8Array(1)); });

            var $toLocaleString = function toLocaleString() {
                return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
            };

            var proto = {
                copyWithin: function copyWithin(target, start /*, end */ ) {
                    return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
                },
                every: function every(callbackfn /*, thisArg */ ) {
                    return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                fill: function fill(value /*, start, end */ ) { // eslint-disable-line no-unused-vars
                    return arrayFill.apply(validate(this), arguments);
                },
                filter: function filter(callbackfn /*, thisArg */ ) {
                    return speciesFromList(this, arrayFilter(validate(this), callbackfn,
                        arguments.length > 1 ? arguments[1] : undefined));
                },
                find: function find(predicate /*, thisArg */ ) {
                    return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                },
                findIndex: function findIndex(predicate /*, thisArg */ ) {
                    return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                },
                forEach: function forEach(callbackfn /*, thisArg */ ) {
                    arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                indexOf: function indexOf(searchElement /*, fromIndex */ ) {
                    return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                },
                includes: function includes(searchElement /*, fromIndex */ ) {
                    return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                },
                join: function join(separator) { // eslint-disable-line no-unused-vars
                    return arrayJoin.apply(validate(this), arguments);
                },
                lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */ ) { // eslint-disable-line no-unused-vars
                    return arrayLastIndexOf.apply(validate(this), arguments);
                },
                map: function map(mapfn /*, thisArg */ ) {
                    return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                reduce: function reduce(callbackfn /*, initialValue */ ) { // eslint-disable-line no-unused-vars
                    return arrayReduce.apply(validate(this), arguments);
                },
                reduceRight: function reduceRight(callbackfn /*, initialValue */ ) { // eslint-disable-line no-unused-vars
                    return arrayReduceRight.apply(validate(this), arguments);
                },
                reverse: function reverse() {
                    var that = this,
                        length = validate(that).length,
                        middle = Math.floor(length / 2),
                        index = 0,
                        value;
                    while (index < middle) {
                        value = that[index];
                        that[index++] = that[--length];
                        that[length] = value;
                    }
                    return that;
                },
                some: function some(callbackfn /*, thisArg */ ) {
                    return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                sort: function sort(comparefn) {
                    return arraySort.call(validate(this), comparefn);
                },
                subarray: function subarray(begin, end) {
                    var O = validate(this),
                        length = O.length,
                        $begin = toIndex(begin, length);
                    return new(speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
                        O.buffer,
                        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
                        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
                    );
                }
            };

            var $slice = function slice(start, end) {
                return speciesFromList(this, arraySlice.call(validate(this), start, end));
            };

            var $set = function set(arrayLike /*, offset */ ) {
                validate(this);
                var offset = toOffset(arguments[1], 1),
                    length = this.length,
                    src = toObject(arrayLike),
                    len = toLength(src.length),
                    index = 0;
                if (len + offset > length) throw RangeError(WRONG_LENGTH);
                while (index < len) this[offset + index] = src[index++];
            };

            var $iterators = {
                entries: function entries() {
                    return arrayEntries.call(validate(this));
                },
                keys: function keys() {
                    return arrayKeys.call(validate(this));
                },
                values: function values() {
                    return arrayValues.call(validate(this));
                }
            };

            var isTAIndex = function(target, key) {
                return isObject(target) &&
                    target[TYPED_ARRAY] &&
                    typeof key != 'symbol' &&
                    key in target &&
                    String(+key) == String(key);
            };
            var $getDesc = function getOwnPropertyDescriptor(target, key) {
                return isTAIndex(target, key = toPrimitive(key, true)) ?
                    propertyDesc(2, target[key]) :
                    gOPD(target, key);
            };
            var $setDesc = function defineProperty(target, key, desc) {
                if (isTAIndex(target, key = toPrimitive(key, true)) &&
                    isObject(desc) &&
                    has(desc, 'value') &&
                    !has(desc, 'get') &&
                    !has(desc, 'set')
                    // TODO: add validation descriptor w/o calling accessors
                    &&
                    !desc.configurable &&
                    (!has(desc, 'writable') || desc.writable) &&
                    (!has(desc, 'enumerable') || desc.enumerable)
                ) {
                    target[key] = desc.value;
                    return target;
                } else return dP(target, key, desc);
            };

            if (!ALL_CONSTRUCTORS) {
                $GOPD.f = $getDesc;
                $DP.f = $setDesc;
            }

            $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
                getOwnPropertyDescriptor: $getDesc,
                defineProperty: $setDesc
            });

            if (fails(function() { arrayToString.call({}); })) {
                arrayToString = arrayToLocaleString = function toString() {
                    return arrayJoin.call(this);
                }
            }

            var $TypedArrayPrototype$ = redefineAll({}, proto);
            redefineAll($TypedArrayPrototype$, $iterators);
            hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
            redefineAll($TypedArrayPrototype$, {
                slice: $slice,
                set: $set,
                constructor: function() { /* noop */ },
                toString: arrayToString,
                toLocaleString: $toLocaleString
            });
            addGetter($TypedArrayPrototype$, 'buffer', 'b');
            addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
            addGetter($TypedArrayPrototype$, 'byteLength', 'l');
            addGetter($TypedArrayPrototype$, 'length', 'e');
            dP($TypedArrayPrototype$, TAG, {
                get: function() { return this[TYPED_ARRAY]; }
            });

            module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
                CLAMPED = !!CLAMPED;
                var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
                    ISNT_UINT8 = NAME != 'Uint8Array',
                    GETTER = 'get' + KEY,
                    SETTER = 'set' + KEY,
                    TypedArray = global[NAME],
                    Base = TypedArray || {},
                    TAC = TypedArray && getPrototypeOf(TypedArray),
                    FORCED = !TypedArray || !$typed.ABV,
                    O = {},
                    TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
                var getter = function(that, index) {
                    var data = that._d;
                    return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
                };
                var setter = function(that, index, value) {
                    var data = that._d;
                    if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
                    data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
                };
                var addElement = function(that, index) {
                    dP(that, index, {
                        get: function() {
                            return getter(this, index);
                        },
                        set: function(value) {
                            return setter(this, index, value);
                        },
                        enumerable: true
                    });
                };
                if (FORCED) {
                    TypedArray = wrapper(function(that, data, $offset, $length) {
                        anInstance(that, TypedArray, NAME, '_d');
                        var index = 0,
                            offset = 0,
                            buffer, byteLength, length, klass;
                        if (!isObject(data)) {
                            length = strictToLength(data, true)
                            byteLength = length * BYTES;
                            buffer = new $ArrayBuffer(byteLength);
                        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                            buffer = data;
                            offset = toOffset($offset, BYTES);
                            var $len = data.byteLength;
                            if ($length === undefined) {
                                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                                byteLength = $len - offset;
                                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                            } else {
                                byteLength = toLength($length) * BYTES;
                                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
                            }
                            length = byteLength / BYTES;
                        } else if (TYPED_ARRAY in data) {
                            return fromList(TypedArray, data);
                        } else {
                            return $from.call(TypedArray, data);
                        }
                        hide(that, '_d', {
                            b: buffer,
                            o: offset,
                            l: byteLength,
                            e: length,
                            v: new $DataView(buffer)
                        });
                        while (index < length) addElement(that, index++);
                    });
                    TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
                    hide(TypedArrayPrototype, 'constructor', TypedArray);
                } else if (!$iterDetect(function(iter) {
                        // V8 works with iterators, but fails in many other cases
                        // https://code.google.com/p/v8/issues/detail?id=4552
                        new TypedArray(null); // eslint-disable-line no-new
                        new TypedArray(iter); // eslint-disable-line no-new
                    }, true)) {
                    TypedArray = wrapper(function(that, data, $offset, $length) {
                        anInstance(that, TypedArray, NAME);
                        var klass;
                        // `ws` module bug, temporarily remove validation length for Uint8Array
                        // https://github.com/websockets/ws/pull/645
                        if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
                        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                            return $length !== undefined ?
                                new Base(data, toOffset($offset, BYTES), $length) :
                                $offset !== undefined ?
                                new Base(data, toOffset($offset, BYTES)) :
                                new Base(data);
                        }
                        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                        return $from.call(TypedArray, data);
                    });
                    arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
                        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
                    });
                    TypedArray[PROTOTYPE] = TypedArrayPrototype;
                    if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
                }
                var $nativeIterator = TypedArrayPrototype[ITERATOR],
                    CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
                    $iterator = $iterators.values;
                hide(TypedArray, TYPED_CONSTRUCTOR, true);
                hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
                hide(TypedArrayPrototype, VIEW, true);
                hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

                if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
                    dP(TypedArrayPrototype, TAG, {
                        get: function() { return NAME; }
                    });
                }

                O[NAME] = TypedArray;

                $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

                $export($export.S, NAME, {
                    BYTES_PER_ELEMENT: BYTES,
                    from: $from,
                    of: $of
                });

                if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

                $export($export.P, NAME, proto);

                setSpecies(NAME);

                $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

                $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

                $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });

                $export($export.P + $export.F * fails(function() {
                    new TypedArray(1).slice();
                }), NAME, { slice: $slice });

                $export($export.P + $export.F * (fails(function() {
                    return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
                }) || !fails(function() {
                    TypedArrayPrototype.toLocaleString.call([1, 2]);
                })), NAME, { toLocaleString: $toLocaleString });

                Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
                if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
            };
        } else module.exports = function() { /* empty */ };

        /***/
    }),
    /* 36 */
    /***/
    (function(module, exports, __webpack_require__) {

        var META = __webpack_require__(49)('meta'),
            isObject = __webpack_require__(4),
            has = __webpack_require__(14),
            setDesc = __webpack_require__(9).f,
            id = 0;
        var isExtensible = Object.isExtensible || function() {
            return true;
        };
        var FREEZE = !__webpack_require__(3)(function() {
            return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
            setDesc(it, META, {
                value: {
                    i: 'O' + ++id, // object ID
                    w: {} // weak collections IDs
                }
            });
        };
        var fastKey = function(it, create) {
            // return primitive with prefix
            if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return 'F';
                // not necessary to add metadata
                if (!create) return 'E';
                // add missing metadata
                setMeta(it);
                // return object ID
            }
            return it[META].i;
        };
        var getWeak = function(it, create) {
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return true;
                // not necessary to add metadata
                if (!create) return false;
                // add missing metadata
                setMeta(it);
                // return hash weak collections IDs
            }
            return it[META].w;
        };
        // add metadata on freeze-family methods calling
        var onFreeze = function(it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
            return it;
        };
        var meta = module.exports = {
            KEY: META,
            NEED: false,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };

        /***/
    }),
    /* 37 */
    /***/
    (function(module, exports) {

        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };

        /***/
    }),
    /* 38 */
    /***/
    (function(module, exports) {

        // 7.1.4 ToInteger
        var ceil = Math.ceil,
            floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
    }),
    /* 39 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(421)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(150),
            /* template */
            __webpack_require__(407),
            /* scopeId */
            "data-v-e5563536",
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/Btn.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] Btn.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-e5563536", Component.options)
                } else {
                    hotAPI.reload("data-v-e5563536", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 40 */
    ,
    /* 41 */
    /***/
    (function(module, exports) {

        module.exports = function(it, Constructor, name, forbiddenField) {
            if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
                throw TypeError(name + ': incorrect invocation!');
            }
            return it;
        };

        /***/
    }),
    /* 42 */
    /***/
    (function(module, exports) {

        module.exports = false;

        /***/
    }),
    /* 43 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__(1),
            dPs = __webpack_require__(120),
            enumBugKeys = __webpack_require__(76),
            IE_PROTO = __webpack_require__(88)('IE_PROTO'),
            Empty = function() { /* empty */ },
            PROTOTYPE = 'prototype';

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = __webpack_require__(75)('iframe'),
                i = enumBugKeys.length,
                lt = '<',
                gt = '>',
                iframeDocument;
            iframe.style.display = 'none';
            __webpack_require__(78).appendChild(iframe);
            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty;
                Empty[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
        };


        /***/
    }),
    /* 44 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__(122),
            hiddenKeys = __webpack_require__(76).concat('length', 'prototype');

        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };

        /***/
    }),
    /* 45 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__(122),
            enumBugKeys = __webpack_require__(76);

        module.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
        };

        /***/
    }),
    /* 46 */
    /***/
    (function(module, exports, __webpack_require__) {

        var redefine = __webpack_require__(17);
        module.exports = function(target, src, safe) {
            for (var key in src) redefine(target, key, src[key], safe);
            return target;
        };

        /***/
    }),
    /* 47 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__(2),
            dP = __webpack_require__(9),
            DESCRIPTORS = __webpack_require__(8),
            SPECIES = __webpack_require__(5)('species');

        module.exports = function(KEY) {
            var C = global[KEY];
            if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                configurable: true,
                get: function() { return this; }
            });
        };

        /***/
    }),
    /* 48 */
    /***/
    (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__(38),
            max = Math.max,
            min = Math.min;
        module.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };

        /***/
    }),
    /* 49 */
    /***/
    (function(module, exports) {

        var id = 0,
            px = Math.random();
        module.exports = function(key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };

        /***/
    }),
    /* 50 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; };
        }();

        var _folder = __webpack_require__(104);

        var _folder2 = _interopRequireDefault(_folder);

        var _file = __webpack_require__(103);

        var _file2 = _interopRequireDefault(_file);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        /**
         * @property {string} bytes
         * @property {string} dir
         * @property {string} extension
         * @property {string} fullName
         * @property {string} mediaType
         * @property {string} mime
         * @property {string} mimeType
         * @property {string} name
         * @property {string} path
         * @property {string} thumb
         * @property {array} thumbs
         * @property {string} type
         * @property {string} updatedAt
         * @property {string} url
         * @property {string} xs
         */
        var Blob = function() {
            function Blob(data) {
                _classCallCheck(this, Blob);

                Object.assign(this, data);

                this.$date = data.updatedAt ? data.updatedAt.dateFromUnixTimestamp() : '';
                this.$id = data.path ? data.path.replaceAll('/', '-') : 'folder-up';
                this.$newName = data.name;
                this.$temp = !!data.$temp;
                this.$rename = !!data.$rename;
                this.$selected = !!data.$selected;
                this.$isContextVisible = false;
            }

            /**
             * Is blob type of folder.
             * @return {boolean}
             */


            _createClass(Blob, [{
                key: 'save',


                /**
                 * Save changes of blob on the server side.
                 * @param {String} path Current state path.
                 * @returns {Promise.<Blob>}
                 */
                value: function save(path) {
                    var _this = this;

                    var action = 'update';

                    if (this.$temp) {
                        action = 'create';
                        this.path = this.dir = this.fullName = path;
                    }

                    return new Promise(function(resolve, reject) {
                        _this.api[action](_this, _this.$newName).then(function(blob) {
                            return resolve(blob);
                        }, function(err) {
                            return reject(err.data);
                        });
                    });
                }

                /**
                 * Delete current blob on the server side.
                 * @returns {Promise.<Boolean>}
                 */

            }, {
                key: 'delete',
                value: function _delete() {
                    var _this2 = this;

                    return new Promise(function(resolve, reject) {
                        _this2.api.delete(_this2).then(function(state) {
                            return resolve(state);
                        }, reject);
                    });
                }
            }, {
                key: 'isDir',
                get: function get() {
                    return this.type === 'dir';
                }

                /**
                 * Get current blob API class.
                 * @return {folderApi|fileApi}
                 */

            }, {
                key: 'api',
                get: function get() {
                    return this.isDir ? _folder2.default : _file2.default;
                }
            }]);

            return Blob;
        }();

        exports.default = Blob;

        /***/
    }),
    /* 51 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = __webpack_require__(5)('unscopables'),
            ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(16)(ArrayProto, UNSCOPABLES, {});
        module.exports = function(key) {
            ArrayProto[UNSCOPABLES][key] = true;
        };

        /***/
    }),
    /* 52 */
    /***/
    (function(module, exports, __webpack_require__) {

        var ctx = __webpack_require__(33),
            call = __webpack_require__(116),
            isArrayIter = __webpack_require__(80),
            anObject = __webpack_require__(1),
            toLength = __webpack_require__(10),
            getIterFn = __webpack_require__(97),
            BREAK = {},
            RETURN = {};
        var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
            var iterFn = ITERATOR ? function() { return iterable; } : getIterFn(iterable),
                f = ctx(fn, that, entries ? 2 : 1),
                index = 0,
                length, step, iterator, result;
            if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
            // fast case for arrays with default iterator
            if (isArrayIter(iterFn))
                for (length = toLength(iterable.length); length > index; index++) {
                    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                    if (result === BREAK || result === RETURN) return result;
                } else
                    for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                        result = call(iterator, f, step.value, entries);
                        if (result === BREAK || result === RETURN) return result;
                    }
        };
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;

        /***/
    }),
    /* 53 */
    /***/
    (function(module, exports) {

        module.exports = {};

        /***/
    }),
    /* 54 */
    /***/
    (function(module, exports, __webpack_require__) {

        var def = __webpack_require__(9).f,
            has = __webpack_require__(14),
            TAG = __webpack_require__(5)('toStringTag');

        module.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
        };

        /***/
    }),
    /* 55 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            defined = __webpack_require__(25),
            fails = __webpack_require__(3),
            spaces = __webpack_require__(93),
            space = '[' + spaces + ']',
            non = '\u200b\u0085',
            ltrim = RegExp('^' + space + space + '*'),
            rtrim = RegExp(space + space + '*$');

        var exporter = function(KEY, exec, ALIAS) {
            var exp = {};
            var FORCE = fails(function() {
                return !!spaces[KEY]() || non[KEY]() != non;
            });
            var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
            if (ALIAS) exp[ALIAS] = fn;
            $export($export.P + $export.F * FORCE, 'String', exp);
        };

        // 1 -> String#trimLeft
        // 2 -> String#trimRight
        // 3 -> String#trim
        var trim = exporter.trim = function(string, TYPE) {
            string = String(defined(string));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
        };

        module.exports = exporter;

        /***/
    }),
    /* 56 */
    /***/
    (function(module, exports, __webpack_require__) {

        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__(24),
            TAG = __webpack_require__(5)('toStringTag')
            // ES3 wrong here
            ,
            ARG = cof(function() { return arguments; }()) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (e) { /* empty */ }
        };

        module.exports = function(it) {
            var O, T, B;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                :
                typeof(T = tryGet(O = Object(it), TAG)) == 'string' ? T
                // builtinTag case
                :
                ARG ? cof(O)
                // ES3 arguments fallback
                :
                (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };

        /***/
    }),
    /* 57 */
    /***/
    (function(module, exports, __webpack_require__) {

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(24);
        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == 'String' ? it.split('') : Object(it);
        };

        /***/
    }),
    /* 58 */
    /***/
    (function(module, exports) {

        exports.f = {}.propertyIsEnumerable;

        /***/
    }),
    /* 59 */
    ,
    /* 60 */
    ,
    /* 61 */
    /***/
    (function(module, exports, __webpack_require__) {

        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__(19),
            toLength = __webpack_require__(10),
            toIndex = __webpack_require__(48);
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIObject($this),
                    length = toLength(O.length),
                    index = toIndex(fromIndex, length),
                    value;
                // Array#includes uses SameValueZero equality algorithm
                if (IS_INCLUDES && el != el)
                    while (length > index) {
                        value = O[index++];
                        if (value != value) return true;
                        // Array#toIndex ignores holes, Array#includes - not
                    } else
                        for (; length > index; index++)
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                return !IS_INCLUDES && -1;
            };
        };

        /***/
    }),
    /* 62 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__(2),
            $export = __webpack_require__(0),
            redefine = __webpack_require__(17),
            redefineAll = __webpack_require__(46),
            meta = __webpack_require__(36),
            forOf = __webpack_require__(52),
            anInstance = __webpack_require__(41),
            isObject = __webpack_require__(4),
            fails = __webpack_require__(3),
            $iterDetect = __webpack_require__(67),
            setToStringTag = __webpack_require__(54),
            inheritIfRequired = __webpack_require__(79);

        module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
            var Base = global[NAME],
                C = Base,
                ADDER = IS_MAP ? 'set' : 'add',
                proto = C && C.prototype,
                O = {};
            var fixMethod = function(KEY) {
                var fn = proto[KEY];
                redefine(proto, KEY,
                    KEY == 'delete' ? function(a) {
                        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'has' ? function has(a) {
                        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'get' ? function get(a) {
                        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; } :
                    function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
                );
            };
            if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
                    new C().entries().next();
                }))) {
                // create collection constructor
                C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                redefineAll(C.prototype, methods);
                meta.NEED = true;
            } else {
                var instance = new C
                    // early implementations not supports chaining
                    ,
                    HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
                    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
                    ,
                    THROWS_ON_PRIMITIVES = fails(function() { instance.has(1); })
                    // most early implementations doesn't supports iterables, most modern - not close it correctly
                    ,
                    ACCEPT_ITERABLES = $iterDetect(function(iter) { new C(iter); }) // eslint-disable-line no-new
                    // for early implementations -0 and +0 not the same
                    ,
                    BUGGY_ZERO = !IS_WEAK && fails(function() {
                        // V8 ~ Chromium 42- fails only with 5+ elements
                        var $instance = new C(),
                            index = 5;
                        while (index--) $instance[ADDER](index, index);
                        return !$instance.has(-0);
                    });
                if (!ACCEPT_ITERABLES) {
                    C = wrapper(function(target, iterable) {
                        anInstance(target, C, NAME);
                        var that = inheritIfRequired(new Base, target, C);
                        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                        return that;
                    });
                    C.prototype = proto;
                    proto.constructor = C;
                }
                if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                    fixMethod('delete');
                    fixMethod('has');
                    IS_MAP && fixMethod('get');
                }
                if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                // weak collections should not contains .clear method
                if (IS_WEAK && proto.clear) delete proto.clear;
            }

            setToStringTag(C, NAME);

            O[NAME] = C;
            $export($export.G + $export.W + $export.F * (C != Base), O);

            if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

            return C;
        };

        /***/
    }),
    /* 63 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var hide = __webpack_require__(16),
            redefine = __webpack_require__(17),
            fails = __webpack_require__(3),
            defined = __webpack_require__(25),
            wks = __webpack_require__(5);

        module.exports = function(KEY, length, exec) {
            var SYMBOL = wks(KEY),
                fns = exec(defined, SYMBOL, '' [KEY]),
                strfn = fns[0],
                rxfn = fns[1];
            if (fails(function() {
                    var O = {};
                    O[SYMBOL] = function() { return 7; };
                    return '' [KEY](O) != 7;
                })) {
                redefine(String.prototype, KEY, strfn);
                hide(RegExp.prototype, SYMBOL, length == 2
                    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                    ?

                    function(string, arg) { return rxfn.call(string, this, arg); }
                    // 21.2.5.6 RegExp.prototype[@@match](string)
                    // 21.2.5.9 RegExp.prototype[@@search](string)
                    :
                    function(string) { return rxfn.call(string, this); }
                );
            }
        };

        /***/
    }),
    /* 64 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 21.2.5.3 get RegExp.prototype.flags
        var anObject = __webpack_require__(1);
        module.exports = function() {
            var that = anObject(this),
                result = '';
            if (that.global) result += 'g';
            if (that.ignoreCase) result += 'i';
            if (that.multiline) result += 'm';
            if (that.unicode) result += 'u';
            if (that.sticky) result += 'y';
            return result;
        };

        /***/
    }),
    /* 65 */
    /***/
    (function(module, exports) {

        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function(fn, args, that) {
            var un = that === undefined;
            switch (args.length) {
                case 0:
                    return un ? fn() :
                        fn.call(that);
                case 1:
                    return un ? fn(args[0]) :
                        fn.call(that, args[0]);
                case 2:
                    return un ? fn(args[0], args[1]) :
                        fn.call(that, args[0], args[1]);
                case 3:
                    return un ? fn(args[0], args[1], args[2]) :
                        fn.call(that, args[0], args[1], args[2]);
                case 4:
                    return un ? fn(args[0], args[1], args[2], args[3]) :
                        fn.call(that, args[0], args[1], args[2], args[3]);
            }
            return fn.apply(that, args);
        };

        /***/
    }),
    /* 66 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.2.8 IsRegExp(argument)
        var isObject = __webpack_require__(4),
            cof = __webpack_require__(24),
            MATCH = __webpack_require__(5)('match');
        module.exports = function(it) {
            var isRegExp;
            return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
        };

        /***/
    }),
    /* 67 */
    /***/
    (function(module, exports, __webpack_require__) {

        var ITERATOR = __webpack_require__(5)('iterator'),
            SAFE_CLOSING = false;

        try {
            var riter = [7][ITERATOR]();
            riter['return'] = function() { SAFE_CLOSING = true; };
            Array.from(riter, function() { throw 2; });
        } catch (e) { /* empty */ }

        module.exports = function(exec, skipClosing) {
            if (!skipClosing && !SAFE_CLOSING) return false;
            var safe = false;
            try {
                var arr = [7],
                    iter = arr[ITERATOR]();
                iter.next = function() { return { done: safe = true }; };
                arr[ITERATOR] = function() { return iter; };
                exec(arr);
            } catch (e) { /* empty */ }
            return safe;
        };

        /***/
    }),
    /* 68 */
    /***/
    (function(module, exports, __webpack_require__) {

        // Forced replacement prototype accessors methods
        module.exports = __webpack_require__(42) || !__webpack_require__(3)(function() {
            var K = Math.random();
            // In FF throws only define methods
            __defineSetter__.call(null, K, function() { /* empty */ });
            delete __webpack_require__(2)[K];
        });

        /***/
    }),
    /* 69 */
    /***/
    (function(module, exports) {

        exports.f = Object.getOwnPropertySymbols;

        /***/
    }),
    /* 70 */
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__(2),
            SHARED = '__core-js_shared__',
            store = global[SHARED] || (global[SHARED] = {});
        module.exports = function(key) {
            return store[key] || (store[key] = {});
        };

        /***/
    }),
    /* 71 */
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__(2),
            hide = __webpack_require__(16),
            uid = __webpack_require__(49),
            TYPED = uid('typed_array'),
            VIEW = uid('view'),
            ABV = !!(global.ArrayBuffer && global.DataView),
            CONSTR = ABV,
            i = 0,
            l = 9,
            Typed;

        var TypedArrayConstructors = (
            'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
        ).split(',');

        while (i < l) {
            if (Typed = global[TypedArrayConstructors[i++]]) {
                hide(Typed.prototype, TYPED, true);
                hide(Typed.prototype, VIEW, true);
            } else CONSTR = false;
        }

        module.exports = {
            ABV: ABV,
            CONSTR: CONSTR,
            TYPED: TYPED,
            VIEW: VIEW
        };

        /***/
    }),
    /* 72 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var index = 0;

        var TreeItem = function TreeItem(data) {
            var _this = this;

            _classCallCheck(this, TreeItem);

            this.path = data.path;
            this.name = data.name;
            this.children = [];
            this.$id = Date.now() + ++index;

            if (!data.children || data.children.length < 1) {
                return;
            }

            data.children.forEach(function(item) {
                _this.children.push(new TreeItem(item));
            });
        };

        exports.default = TreeItem;

        /***/
    }),
    /* 73 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

        var toObject = __webpack_require__(12),
            toIndex = __webpack_require__(48),
            toLength = __webpack_require__(10);
        module.exports = function fill(value /*, start = 0, end = @length */ ) {
            var O = toObject(this),
                length = toLength(O.length),
                aLen = arguments.length,
                index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
                end = aLen > 2 ? arguments[2] : undefined,
                endPos = end === undefined ? length : toIndex(end, length);
            while (endPos > index) O[index++] = value;
            return O;
        };

        /***/
    }),
    /* 74 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $defineProperty = __webpack_require__(9),
            createDesc = __webpack_require__(37);

        module.exports = function(object, index, value) {
            if (index in object) $defineProperty.f(object, index, createDesc(0, value));
            else object[index] = value;
        };

        /***/
    }),
    /* 75 */
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__(4),
            document = __webpack_require__(2).document
            // in old IE typeof document.createElement is 'object'
            ,
            is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };

        /***/
    }),
    /* 76 */
    /***/
    (function(module, exports) {

        // IE 8- don't enum bug keys
        module.exports = (
            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
        ).split(',');

        /***/
    }),
    /* 77 */
    /***/
    (function(module, exports, __webpack_require__) {

        var MATCH = __webpack_require__(5)('match');
        module.exports = function(KEY) {
            var re = /./;
            try {
                '/./' [KEY](re);
            } catch (e) {
                try {
                    re[MATCH] = false;
                    return !'/./' [KEY](re);
                } catch (f) { /* empty */ }
            }
            return true;
        };

        /***/
    }),
    /* 78 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(2).document && document.documentElement;

        /***/
    }),
    /* 79 */
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__(4),
            setPrototypeOf = __webpack_require__(87).set;
        module.exports = function(that, target, C) {
            var P, S = target.constructor;
            if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
                setPrototypeOf(that, P);
            }
            return that;
        };

        /***/
    }),
    /* 80 */
    /***/
    (function(module, exports, __webpack_require__) {

        // check on default Array iterator
        var Iterators = __webpack_require__(53),
            ITERATOR = __webpack_require__(5)('iterator'),
            ArrayProto = Array.prototype;

        module.exports = function(it) {
            return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };

        /***/
    }),
    /* 81 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__(24);
        module.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == 'Array';
        };

        /***/
    }),
    /* 82 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var create = __webpack_require__(43),
            descriptor = __webpack_require__(37),
            setToStringTag = __webpack_require__(54),
            IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(16)(IteratorPrototype, __webpack_require__(5)('iterator'), function() { return this; });

        module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
            setToStringTag(Constructor, NAME + ' Iterator');
        };

        /***/
    }),
    /* 83 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__(42),
            $export = __webpack_require__(0),
            redefine = __webpack_require__(17),
            hide = __webpack_require__(16),
            has = __webpack_require__(14),
            Iterators = __webpack_require__(53),
            $iterCreate = __webpack_require__(82),
            setToStringTag = __webpack_require__(54),
            getPrototypeOf = __webpack_require__(23),
            ITERATOR = __webpack_require__(5)('iterator'),
            BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
            ,
            FF_ITERATOR = '@@iterator',
            KEYS = 'keys',
            VALUES = 'values';

        var returnThis = function() { return this; };

        module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                    case KEYS:
                        return function keys() { return new Constructor(this, kind); };
                    case VALUES:
                        return function values() { return new Constructor(this, kind); };
                }
                return function entries() { return new Constructor(this, kind); };
            };
            var TAG = NAME + ' Iterator',
                DEF_VALUES = DEFAULT == VALUES,
                VALUES_BUG = false,
                proto = Base.prototype,
                $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
                $default = $native || getMethod(DEFAULT),
                $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
                $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
                methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
                if (IteratorPrototype !== Object.prototype) {
                    // Set @@toStringTag to native iterators
                    setToStringTag(IteratorPrototype, TAG, true);
                    // fix for some old engines
                    if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() { return $native.call(this); };
            }
            // Define iterator
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                hide(proto, ITERATOR, $default);
            }
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED)
                    for (key in methods) {
                        if (!(key in proto)) redefine(proto, key, methods[key]);
                    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };

        /***/
    }),
    /* 84 */
    /***/
    (function(module, exports) {

        // 20.2.2.14 Math.expm1(x)
        var $expm1 = Math.expm1;
        module.exports = (!$expm1
            // Old FF bug
            ||
            $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
            // Tor Browser bug
            ||
            $expm1(-2e-17) != -2e-17
        ) ? function expm1(x) {
            return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
        } : $expm1;

        /***/
    }),
    /* 85 */
    /***/
    (function(module, exports) {

        // 20.2.2.28 Math.sign(x)
        module.exports = Math.sign || function sign(x) {
            return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
        };

        /***/
    }),
    /* 86 */
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__(2),
            macrotask = __webpack_require__(94).set,
            Observer = global.MutationObserver || global.WebKitMutationObserver,
            process = global.process,
            Promise = global.Promise,
            isNode = __webpack_require__(24)(process) == 'process';

        module.exports = function() {
            var head, last, notify;

            var flush = function() {
                var parent, fn;
                if (isNode && (parent = process.domain)) parent.exit();
                while (head) {
                    fn = head.fn;
                    head = head.next;
                    try {
                        fn();
                    } catch (e) {
                        if (head) notify();
                        else last = undefined;
                        throw e;
                    }
                }
                last = undefined;
                if (parent) parent.enter();
            };

            // Node.js
            if (isNode) {
                notify = function() {
                    process.nextTick(flush);
                };
                // browsers with MutationObserver
            } else if (Observer) {
                var toggle = true,
                    node = document.createTextNode('');
                new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
                notify = function() {
                    node.data = toggle = !toggle;
                };
                // environments with maybe non-completely correct, but existent Promise
            } else if (Promise && Promise.resolve) {
                var promise = Promise.resolve();
                notify = function() {
                    promise.then(flush);
                };
                // for other environments - macrotask based on:
                // - setImmediate
                // - MessageChannel
                // - window.postMessag
                // - onreadystatechange
                // - setTimeout
            } else {
                notify = function() {
                    // strange IE + webpack dev server bug - use .call(global)
                    macrotask.call(global, flush);
                };
            }

            return function(fn) {
                var task = { fn: fn, next: undefined };
                if (last) last.next = task;
                if (!head) {
                    head = task;
                    notify();
                }
                last = task;
            };
        };

        /***/
    }),
    /* 87 */
    /***/
    (function(module, exports, __webpack_require__) {

        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__(4),
            anObject = __webpack_require__(1);
        var check = function(O, proto) {
            anObject(O);
            if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
            set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
                function(test, buggy, set) {
                    try {
                        set = __webpack_require__(33)(Function.call, __webpack_require__(22).f(Object.prototype, '__proto__').set, 2);
                        set(test, []);
                        buggy = !(test instanceof Array);
                    } catch (e) { buggy = true; }
                    return function setPrototypeOf(O, proto) {
                        check(O, proto);
                        if (buggy) O.__proto__ = proto;
                        else set(O, proto);
                        return O;
                    };
                }({}, false) : undefined),
            check: check
        };

        /***/
    }),
    /* 88 */
    /***/
    (function(module, exports, __webpack_require__) {

        var shared = __webpack_require__(70)('keys'),
            uid = __webpack_require__(49);
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };

        /***/
    }),
    /* 89 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = __webpack_require__(1),
            aFunction = __webpack_require__(15),
            SPECIES = __webpack_require__(5)('species');
        module.exports = function(O, D) {
            var C = anObject(O).constructor,
                S;
            return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
        };

        /***/
    }),
    /* 90 */
    /***/
    (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__(38),
            defined = __webpack_require__(25);
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var s = String(defined(that)),
                    i = toInteger(pos),
                    l = s.length,
                    a, b;
                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ?
                    TO_STRING ? s.charAt(i) : a :
                    TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };

        /***/
    }),
    /* 91 */
    /***/
    (function(module, exports, __webpack_require__) {

        // helper for String#{startsWith, endsWith, includes}
        var isRegExp = __webpack_require__(66),
            defined = __webpack_require__(25);

        module.exports = function(that, searchString, NAME) {
            if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
            return String(defined(that));
        };

        /***/
    }),
    /* 92 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var toInteger = __webpack_require__(38),
            defined = __webpack_require__(25);

        module.exports = function repeat(count) {
            var str = String(defined(this)),
                res = '',
                n = toInteger(count);
            if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
            for (; n > 0;
                (n >>>= 1) && (str += str))
                if (n & 1) res += str;
            return res;
        };

        /***/
    }),
    /* 93 */
    /***/
    (function(module, exports) {

        module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

        /***/
    }),
    /* 94 */
    /***/
    (function(module, exports, __webpack_require__) {

        var ctx = __webpack_require__(33),
            invoke = __webpack_require__(65),
            html = __webpack_require__(78),
            cel = __webpack_require__(75),
            global = __webpack_require__(2),
            process = global.process,
            setTask = global.setImmediate,
            clearTask = global.clearImmediate,
            MessageChannel = global.MessageChannel,
            counter = 0,
            queue = {},
            ONREADYSTATECHANGE = 'onreadystatechange',
            defer, channel, port;
        var run = function() {
            var id = +this;
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id];
                fn();
            }
        };
        var listener = function(event) {
            run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
            setTask = function setImmediate(fn) {
                var args = [],
                    i = 1;
                while (arguments.length > i) args.push(arguments[i++]);
                queue[++counter] = function() {
                    invoke(typeof fn == 'function' ? fn : Function(fn), args);
                };
                defer(counter);
                return counter;
            };
            clearTask = function clearImmediate(id) {
                delete queue[id];
            };
            // Node.js 0.8-
            if (__webpack_require__(24)(process) == 'process') {
                defer = function(id) {
                    process.nextTick(ctx(run, id, 1));
                };
                // Browsers with MessageChannel, includes WebWorkers
            } else if (MessageChannel) {
                channel = new MessageChannel;
                port = channel.port2;
                channel.port1.onmessage = listener;
                defer = ctx(port.postMessage, port, 1);
                // Browsers with postMessage, skip WebWorkers
                // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                defer = function(id) {
                    global.postMessage(id + '', '*');
                };
                global.addEventListener('message', listener, false);
                // IE8-
            } else if (ONREADYSTATECHANGE in cel('script')) {
                defer = function(id) {
                    html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
                        html.removeChild(this);
                        run.call(id);
                    };
                };
                // Rest old browsers
            } else {
                defer = function(id) {
                    setTimeout(ctx(run, id, 1), 0);
                };
            }
        }
        module.exports = {
            set: setTask,
            clear: clearTask
        };

        /***/
    }),
    /* 95 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__(2),
            DESCRIPTORS = __webpack_require__(8),
            LIBRARY = __webpack_require__(42),
            $typed = __webpack_require__(71),
            hide = __webpack_require__(16),
            redefineAll = __webpack_require__(46),
            fails = __webpack_require__(3),
            anInstance = __webpack_require__(41),
            toInteger = __webpack_require__(38),
            toLength = __webpack_require__(10),
            gOPN = __webpack_require__(44).f,
            dP = __webpack_require__(9).f,
            arrayFill = __webpack_require__(73),
            setToStringTag = __webpack_require__(54),
            ARRAY_BUFFER = 'ArrayBuffer',
            DATA_VIEW = 'DataView',
            PROTOTYPE = 'prototype',
            WRONG_LENGTH = 'Wrong length!',
            WRONG_INDEX = 'Wrong index!',
            $ArrayBuffer = global[ARRAY_BUFFER],
            $DataView = global[DATA_VIEW],
            Math = global.Math,
            RangeError = global.RangeError,
            Infinity = global.Infinity,
            BaseBuffer = $ArrayBuffer,
            abs = Math.abs,
            pow = Math.pow,
            floor = Math.floor,
            log = Math.log,
            LN2 = Math.LN2,
            BUFFER = 'buffer',
            BYTE_LENGTH = 'byteLength',
            BYTE_OFFSET = 'byteOffset',
            $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
            $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
            $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

        // IEEE754 conversions based on https://github.com/feross/ieee754
        var packIEEE754 = function(value, mLen, nBytes) {
            var buffer = Array(nBytes),
                eLen = nBytes * 8 - mLen - 1,
                eMax = (1 << eLen) - 1,
                eBias = eMax >> 1,
                rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
                i = 0,
                s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
                e, m, c;
            value = abs(value)
            if (value != value || value === Infinity) {
                m = value != value ? 1 : 0;
                e = eMax;
            } else {
                e = floor(log(value) / LN2);
                if (value * (c = pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                }
                if (e + eBias >= 1) {
                    value += rt / c;
                } else {
                    value += rt * pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                    e++;
                    c /= 2;
                }
                if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                } else if (e + eBias >= 1) {
                    m = (value * c - 1) * pow(2, mLen);
                    e = e + eBias;
                } else {
                    m = value * pow(2, eBias - 1) * pow(2, mLen);
                    e = 0;
                }
            }
            for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
            e = e << mLen | m;
            eLen += mLen;
            for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
            buffer[--i] |= s * 128;
            return buffer;
        };
        var unpackIEEE754 = function(buffer, mLen, nBytes) {
            var eLen = nBytes * 8 - mLen - 1,
                eMax = (1 << eLen) - 1,
                eBias = eMax >> 1,
                nBits = eLen - 7,
                i = nBytes - 1,
                s = buffer[i--],
                e = s & 127,
                m;
            s >>= 7;
            for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
            m = e & (1 << -nBits) - 1;
            e >>= -nBits;
            nBits += mLen;
            for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
            if (e === 0) {
                e = 1 - eBias;
            } else if (e === eMax) {
                return m ? NaN : s ? -Infinity : Infinity;
            } else {
                m = m + pow(2, mLen);
                e = e - eBias;
            }
            return (s ? -1 : 1) * m * pow(2, e - mLen);
        };

        var unpackI32 = function(bytes) {
            return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
        };
        var packI8 = function(it) {
            return [it & 0xff];
        };
        var packI16 = function(it) {
            return [it & 0xff, it >> 8 & 0xff];
        };
        var packI32 = function(it) {
            return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
        };
        var packF64 = function(it) {
            return packIEEE754(it, 52, 8);
        };
        var packF32 = function(it) {
            return packIEEE754(it, 23, 4);
        };

        var addGetter = function(C, key, internal) {
            dP(C[PROTOTYPE], key, { get: function() { return this[internal]; } });
        };

        var get = function(view, bytes, index, isLittleEndian) {
            var numIndex = +index,
                intIndex = toInteger(numIndex);
            if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
            var store = view[$BUFFER]._b,
                start = intIndex + view[$OFFSET],
                pack = store.slice(start, start + bytes);
            return isLittleEndian ? pack : pack.reverse();
        };
        var set = function(view, bytes, index, conversion, value, isLittleEndian) {
            var numIndex = +index,
                intIndex = toInteger(numIndex);
            if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
            var store = view[$BUFFER]._b,
                start = intIndex + view[$OFFSET],
                pack = conversion(+value);
            for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
        };

        var validateArrayBufferArguments = function(that, length) {
            anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
            var numberLength = +length,
                byteLength = toLength(numberLength);
            if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
            return byteLength;
        };

        if (!$typed.ABV) {
            $ArrayBuffer = function ArrayBuffer(length) {
                var byteLength = validateArrayBufferArguments(this, length);
                this._b = arrayFill.call(Array(byteLength), 0);
                this[$LENGTH] = byteLength;
            };

            $DataView = function DataView(buffer, byteOffset, byteLength) {
                anInstance(this, $DataView, DATA_VIEW);
                anInstance(buffer, $ArrayBuffer, DATA_VIEW);
                var bufferLength = buffer[$LENGTH],
                    offset = toInteger(byteOffset);
                if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
                byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
                if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
                this[$BUFFER] = buffer;
                this[$OFFSET] = offset;
                this[$LENGTH] = byteLength;
            };

            if (DESCRIPTORS) {
                addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
                addGetter($DataView, BUFFER, '_b');
                addGetter($DataView, BYTE_LENGTH, '_l');
                addGetter($DataView, BYTE_OFFSET, '_o');
            }

            redefineAll($DataView[PROTOTYPE], {
                getInt8: function getInt8(byteOffset) {
                    return get(this, 1, byteOffset)[0] << 24 >> 24;
                },
                getUint8: function getUint8(byteOffset) {
                    return get(this, 1, byteOffset)[0];
                },
                getInt16: function getInt16(byteOffset /*, littleEndian */ ) {
                    var bytes = get(this, 2, byteOffset, arguments[1]);
                    return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
                },
                getUint16: function getUint16(byteOffset /*, littleEndian */ ) {
                    var bytes = get(this, 2, byteOffset, arguments[1]);
                    return bytes[1] << 8 | bytes[0];
                },
                getInt32: function getInt32(byteOffset /*, littleEndian */ ) {
                    return unpackI32(get(this, 4, byteOffset, arguments[1]));
                },
                getUint32: function getUint32(byteOffset /*, littleEndian */ ) {
                    return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
                },
                getFloat32: function getFloat32(byteOffset /*, littleEndian */ ) {
                    return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
                },
                getFloat64: function getFloat64(byteOffset /*, littleEndian */ ) {
                    return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
                },
                setInt8: function setInt8(byteOffset, value) {
                    set(this, 1, byteOffset, packI8, value);
                },
                setUint8: function setUint8(byteOffset, value) {
                    set(this, 1, byteOffset, packI8, value);
                },
                setInt16: function setInt16(byteOffset, value /*, littleEndian */ ) {
                    set(this, 2, byteOffset, packI16, value, arguments[2]);
                },
                setUint16: function setUint16(byteOffset, value /*, littleEndian */ ) {
                    set(this, 2, byteOffset, packI16, value, arguments[2]);
                },
                setInt32: function setInt32(byteOffset, value /*, littleEndian */ ) {
                    set(this, 4, byteOffset, packI32, value, arguments[2]);
                },
                setUint32: function setUint32(byteOffset, value /*, littleEndian */ ) {
                    set(this, 4, byteOffset, packI32, value, arguments[2]);
                },
                setFloat32: function setFloat32(byteOffset, value /*, littleEndian */ ) {
                    set(this, 4, byteOffset, packF32, value, arguments[2]);
                },
                setFloat64: function setFloat64(byteOffset, value /*, littleEndian */ ) {
                    set(this, 8, byteOffset, packF64, value, arguments[2]);
                }
            });
        } else {
            if (!fails(function() {
                    new $ArrayBuffer; // eslint-disable-line no-new
                }) || !fails(function() {
                    new $ArrayBuffer(.5); // eslint-disable-line no-new
                })) {
                $ArrayBuffer = function ArrayBuffer(length) {
                    return new BaseBuffer(validateArrayBufferArguments(this, length));
                };
                var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
                for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
                    if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
                };
                if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
            }
            // iOS Safari 7.x bug
            var view = new $DataView(new $ArrayBuffer(2)),
                $setInt8 = $DataView[PROTOTYPE].setInt8;
            view.setInt8(0, 2147483648);
            view.setInt8(1, 2147483649);
            if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
                setInt8: function setInt8(byteOffset, value) {
                    $setInt8.call(this, byteOffset, value << 24 >> 24);
                },
                setUint8: function setUint8(byteOffset, value) {
                    $setInt8.call(this, byteOffset, value << 24 >> 24);
                }
            }, true);
        }
        setToStringTag($ArrayBuffer, ARRAY_BUFFER);
        setToStringTag($DataView, DATA_VIEW);
        hide($DataView[PROTOTYPE], $typed.VIEW, true);
        exports[ARRAY_BUFFER] = $ArrayBuffer;
        exports[DATA_VIEW] = $DataView;

        /***/
    }),
    /* 96 */
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__(2),
            core = __webpack_require__(32),
            LIBRARY = __webpack_require__(42),
            wksExt = __webpack_require__(129),
            defineProperty = __webpack_require__(9).f;
        module.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
        };

        /***/
    }),
    /* 97 */
    /***/
    (function(module, exports, __webpack_require__) {

        var classof = __webpack_require__(56),
            ITERATOR = __webpack_require__(5)('iterator'),
            Iterators = __webpack_require__(53);
        module.exports = __webpack_require__(32).getIteratorMethod = function(it) {
            if (it != undefined) return it[ITERATOR] ||
                it['@@iterator'] ||
                Iterators[classof(it)];
        };

        /***/
    }),
    /* 98 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var addToUnscopables = __webpack_require__(51),
            step = __webpack_require__(117),
            Iterators = __webpack_require__(53),
            toIObject = __webpack_require__(19);

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(83)(Array, 'Array', function(iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function() {
            var O = this._t,
                kind = this._k,
                index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == 'keys') return step(0, index);
            if (kind == 'values') return step(0, O[index]);
            return step(0, [index, O[index]]);
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');

        /***/
    }),
    /* 99 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(411)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(157),
            /* template */
            __webpack_require__(390),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/Blob.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] Blob.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-198a1f95", Component.options)
                } else {
                    hotAPI.reload("data-v-198a1f95", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 100 */
    /***/
    (function(module, exports) {

        var g;

        // This works in non-strict mode
        g = (function() {
            return this;
        })();

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
            // This works if the window reference is available
            if (typeof window === "object")
                g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/
    }),
    /* 101 */
    ,
    /* 102 */
    ,
    /* 103 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        var _Blob = __webpack_require__(50);

        var _Blob2 = _interopRequireDefault(_Blob);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            /**
             * Rename folder.
             * @param {Blob} blob
             * @param {string} name
             * @returns {Promise.<Blob>}
             */
            update: function update(blob, name) {
                return new Promise(function(resolve, reject) {
                    _vue2.default.http.patch(_settings2.default.filesUrl + '/' + blob.path, { name: name }).then(function(_ref) {
                        var data = _ref.data;
                        resolve(new _Blob2.default(data));
                    }, reject);
                });
            },


            /**
             * Delete file.
             * @param {Blob} blob
             * @returns {Promise.<Boolean>}
             */
            delete: function _delete(blob) {
                return new Promise(function(resolve, reject) {
                    _vue2.default.http.delete(_settings2.default.filesUrl + '/' + blob.path).then(function(_ref2) {
                        var data = _ref2.data;
                        resolve(!!data);
                    }, reject);
                });
            },

            /**
             * Upload file to the server API.
             * @param path
             * @param file
             * @return {Promise}
             */
            upload: function upload(path, file) {
                var formData = new FormData();
                formData.append('file', file);
                formData.append('path', path);
				
                return new Promise(function(resolve, reject) {
                    _vue2.default.http.post('' + _settings2.default.filesUrl, formData).then(function(_ref3) {
                        var data = _ref3.data;
                        return resolve(new _Blob2.default(data));
                    }, function(_ref4) {
                        var status = _ref4.status,
                            data = _ref4.data;
						status === 500 ? reject(data) : reject('Could not upload file.');
                    });
                });
            }
        };

        /***/
    }),
    /* 104 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        var _Blob = __webpack_require__(50);

        var _Blob2 = _interopRequireDefault(_Blob);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            /**
             * Receive folder content.
             * @param {string} path
             * @returns {Promise.<Array.<Blob>>}
             */
            content: function content(path) {
                return new Promise(function(resolve, reject) {
                    if (path !== '') {
                        path = '/' + path
                    }
                    _vue2.default.http.get(_settings2.default.foldersUrl + ('' + path)).then(function(_ref) {
                        var data = _ref.data;

                        var blobs = data.map(function(blob) {
                            return new _Blob2.default(blob);
                        });
                        resolve(blobs);
                    }, reject);
                });
            },


            /**
             * Create new folder.
             * @param {Blob} blob
             * @param {string} name
             * @returns {Promise.<Object>}
             */
            create: function create(blob, name) {
                return new Promise(function(resolve, reject) {
                    _vue2.default.http.post(_settings2.default.foldersUrl, { folder: blob.dir, name: name }).then(function(_ref2) {
                        var data = _ref2.data;
                        resolve(new _Blob2.default(data));
                    }, reject);
                });
            },


            /**
             * Rename folder.
             * @param {Blob} blob
             * @param {string} name
             * @returns {Promise.<Blob>}
             */
            update: function update(blob, name) {
                return new Promise(function(resolve, reject) {
                    _vue2.default.http.patch(_settings2.default.foldersUrl + '/' + blob.path, { name: name }).then(function(_ref3) {
                        var data = _ref3.data;
                        resolve(new _Blob2.default(data));
                    }, reject);
                });
            },


            /**
             * Delete folder.
             * @param {Blob} blob
             * @returns {Promise.<Boolean>}
             */
            delete: function _delete(blob) {
                return new Promise(function(resolve, reject) {
                    _vue2.default.http.delete(_settings2.default.foldersUrl + '/' + blob.path).then(function(_ref4) {
                        var data = _ref4.data;
                        resolve(!!data);
                    }, reject);
                });
            }
        };

        /***/
    }),
    /* 105 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; };
        }();

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var FileForUpload = function() {
            /**
             * Initialize new instance of file upload.
             * @param {File} file
             */
            function FileForUpload(file) {
                var _this = this;

                _classCallCheck(this, FileForUpload);

                this.file = file;
                this.name = file.name;
                this.reader = new FileReader();
                this.src = _settings2.default.icon('file');
                this.$error = '';
                this.$loading = false;

                this.reader.onload = function(e) {
                    // Mutate content only for images, all other files should show default
                    // icon of the file
                    if (e.target.result && e.target.result.startsWith('data:image')) {
                        _vue2.default.set(_this, 'src', e.target.result);
                    }
                };

                this.reader.readAsDataURL(file);
            }

            _createClass(FileForUpload, [{
                key: 'hasError',
                get: function get() {
                    return !!this.$error;
                }
            }, {
                key: 'title',
                get: function get() {
                    return this.hasError ? this.$error : this.name;
                }
            }]);

            return FileForUpload;
        }();

        exports.default = FileForUpload;

        /***/
    }),
    /* 106 */
    /***/
    (function(module, exports, __webpack_require__) {

        var cof = __webpack_require__(24);
        module.exports = function(it, msg) {
            if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
            return +it;
        };

        /***/
    }),
    /* 107 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

        var toObject = __webpack_require__(12),
            toIndex = __webpack_require__(48),
            toLength = __webpack_require__(10);

        module.exports = [].copyWithin || function copyWithin(target /*= 0*/ , start /*= 0, end = @length*/ ) {
            var O = toObject(this),
                len = toLength(O.length),
                to = toIndex(target, len),
                from = toIndex(start, len),
                end = arguments.length > 2 ? arguments[2] : undefined,
                count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
                inc = 1;
            if (from < to && to < from + count) {
                inc = -1;
                from += count - 1;
                to += count - 1;
            }
            while (count-- > 0) {
                if (from in O) O[to] = O[from];
                else delete O[to];
                to += inc;
                from += inc;
            }
            return O;
        };

        /***/
    }),
    /* 108 */
    /***/
    (function(module, exports, __webpack_require__) {

        var forOf = __webpack_require__(52);

        module.exports = function(iter, ITERATOR) {
            var result = [];
            forOf(iter, false, result.push, result, ITERATOR);
            return result;
        };


        /***/
    }),
    /* 109 */
    /***/
    (function(module, exports, __webpack_require__) {

        var aFunction = __webpack_require__(15),
            toObject = __webpack_require__(12),
            IObject = __webpack_require__(57),
            toLength = __webpack_require__(10);

        module.exports = function(that, callbackfn, aLen, memo, isRight) {
            aFunction(callbackfn);
            var O = toObject(that),
                self = IObject(O),
                length = toLength(O.length),
                index = isRight ? length - 1 : 0,
                i = isRight ? -1 : 1;
            if (aLen < 2)
                for (;;) {
                    if (index in self) {
                        memo = self[index];
                        index += i;
                        break;
                    }
                    index += i;
                    if (isRight ? index < 0 : length <= index) {
                        throw TypeError('Reduce of empty array with no initial value');
                    }
                }
            for (; isRight ? index >= 0 : length > index; index += i)
                if (index in self) {
                    memo = callbackfn(memo, self[index], index, O);
                }
            return memo;
        };

        /***/
    }),
    /* 110 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var aFunction = __webpack_require__(15),
            isObject = __webpack_require__(4),
            invoke = __webpack_require__(65),
            arraySlice = [].slice,
            factories = {};

        var construct = function(F, len, args) {
            if (!(len in factories)) {
                for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
                factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
            }
            return factories[len](F, args);
        };

        module.exports = Function.bind || function bind(that /*, args... */ ) {
            var fn = aFunction(this),
                partArgs = arraySlice.call(arguments, 1);
            var bound = function( /* args... */ ) {
                var args = partArgs.concat(arraySlice.call(arguments));
                return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
            };
            if (isObject(fn.prototype)) bound.prototype = fn.prototype;
            return bound;
        };

        /***/
    }),
    /* 111 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var dP = __webpack_require__(9).f,
            create = __webpack_require__(43),
            redefineAll = __webpack_require__(46),
            ctx = __webpack_require__(33),
            anInstance = __webpack_require__(41),
            defined = __webpack_require__(25),
            forOf = __webpack_require__(52),
            $iterDefine = __webpack_require__(83),
            step = __webpack_require__(117),
            setSpecies = __webpack_require__(47),
            DESCRIPTORS = __webpack_require__(8),
            fastKey = __webpack_require__(36).fastKey,
            SIZE = DESCRIPTORS ? '_s' : 'size';

        var getEntry = function(that, key) {
            // fast case
            var index = fastKey(key),
                entry;
            if (index !== 'F') return that._i[index];
            // frozen object case
            for (entry = that._f; entry; entry = entry.n) {
                if (entry.k == key) return entry;
            }
        };

        module.exports = {
            getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                var C = wrapper(function(that, iterable) {
                    anInstance(that, C, NAME, '_i');
                    that._i = create(null); // index
                    that._f = undefined; // first entry
                    that._l = undefined; // last entry
                    that[SIZE] = 0; // size
                    if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                });
                redefineAll(C.prototype, {
                    // 23.1.3.1 Map.prototype.clear()
                    // 23.2.3.2 Set.prototype.clear()
                    clear: function clear() {
                        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
                            entry.r = true;
                            if (entry.p) entry.p = entry.p.n = undefined;
                            delete data[entry.i];
                        }
                        that._f = that._l = undefined;
                        that[SIZE] = 0;
                    },
                    // 23.1.3.3 Map.prototype.delete(key)
                    // 23.2.3.4 Set.prototype.delete(value)
                    'delete': function(key) {
                        var that = this,
                            entry = getEntry(that, key);
                        if (entry) {
                            var next = entry.n,
                                prev = entry.p;
                            delete that._i[entry.i];
                            entry.r = true;
                            if (prev) prev.n = next;
                            if (next) next.p = prev;
                            if (that._f == entry) that._f = next;
                            if (that._l == entry) that._l = prev;
                            that[SIZE]--;
                        }
                        return !!entry;
                    },
                    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                    forEach: function forEach(callbackfn /*, that = undefined */ ) {
                        anInstance(this, C, 'forEach');
                        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
                            entry;
                        while (entry = entry ? entry.n : this._f) {
                            f(entry.v, entry.k, this);
                            // revert to the last existing entry
                            while (entry && entry.r) entry = entry.p;
                        }
                    },
                    // 23.1.3.7 Map.prototype.has(key)
                    // 23.2.3.7 Set.prototype.has(value)
                    has: function has(key) {
                        return !!getEntry(this, key);
                    }
                });
                if (DESCRIPTORS) dP(C.prototype, 'size', {
                    get: function() {
                        return defined(this[SIZE]);
                    }
                });
                return C;
            },
            def: function(that, key, value) {
                var entry = getEntry(that, key),
                    prev, index;
                // change existing entry
                if (entry) {
                    entry.v = value;
                    // create new entry
                } else {
                    that._l = entry = {
                        i: index = fastKey(key, true), // <- index
                        k: key, // <- key
                        v: value, // <- value
                        p: prev = that._l, // <- previous entry
                        n: undefined, // <- next entry
                        r: false // <- removed
                    };
                    if (!that._f) that._f = entry;
                    if (prev) prev.n = entry;
                    that[SIZE]++;
                    // add to index
                    if (index !== 'F') that._i[index] = entry;
                }
                return that;
            },
            getEntry: getEntry,
            setStrong: function(C, NAME, IS_MAP) {
                // add .keys, .values, .entries, [@@iterator]
                // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                $iterDefine(C, NAME, function(iterated, kind) {
                    this._t = iterated; // target
                    this._k = kind; // kind
                    this._l = undefined; // previous
                }, function() {
                    var that = this,
                        kind = that._k,
                        entry = that._l;
                    // revert to the last existing entry
                    while (entry && entry.r) entry = entry.p;
                    // get next entry
                    if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                        // or finish the iteration
                        that._t = undefined;
                        return step(1);
                    }
                    // return step by kind
                    if (kind == 'keys') return step(0, entry.k);
                    if (kind == 'values') return step(0, entry.v);
                    return step(0, [entry.k, entry.v]);
                }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

                // add [@@species], 23.1.2.2, 23.2.2.2
                setSpecies(NAME);
            }
        };

        /***/
    }),
    /* 112 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var classof = __webpack_require__(56),
            from = __webpack_require__(108);
        module.exports = function(NAME) {
            return function toJSON() {
                if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                return from(this);
            };
        };

        /***/
    }),
    /* 113 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var redefineAll = __webpack_require__(46),
            getWeak = __webpack_require__(36).getWeak,
            anObject = __webpack_require__(1),
            isObject = __webpack_require__(4),
            anInstance = __webpack_require__(41),
            forOf = __webpack_require__(52),
            createArrayMethod = __webpack_require__(28),
            $has = __webpack_require__(14),
            arrayFind = createArrayMethod(5),
            arrayFindIndex = createArrayMethod(6),
            id = 0;

        // fallback for uncaught frozen keys
        var uncaughtFrozenStore = function(that) {
            return that._l || (that._l = new UncaughtFrozenStore);
        };
        var UncaughtFrozenStore = function() {
            this.a = [];
        };
        var findUncaughtFrozen = function(store, key) {
            return arrayFind(store.a, function(it) {
                return it[0] === key;
            });
        };
        UncaughtFrozenStore.prototype = {
            get: function(key) {
                var entry = findUncaughtFrozen(this, key);
                if (entry) return entry[1];
            },
            has: function(key) {
                return !!findUncaughtFrozen(this, key);
            },
            set: function(key, value) {
                var entry = findUncaughtFrozen(this, key);
                if (entry) entry[1] = value;
                else this.a.push([key, value]);
            },
            'delete': function(key) {
                var index = arrayFindIndex(this.a, function(it) {
                    return it[0] === key;
                });
                if (~index) this.a.splice(index, 1);
                return !!~index;
            }
        };

        module.exports = {
            getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                var C = wrapper(function(that, iterable) {
                    anInstance(that, C, NAME, '_i');
                    that._i = id++; // collection id
                    that._l = undefined; // leak store for uncaught frozen objects
                    if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                });
                redefineAll(C.prototype, {
                    // 23.3.3.2 WeakMap.prototype.delete(key)
                    // 23.4.3.3 WeakSet.prototype.delete(value)
                    'delete': function(key) {
                        if (!isObject(key)) return false;
                        var data = getWeak(key);
                        if (data === true) return uncaughtFrozenStore(this)['delete'](key);
                        return data && $has(data, this._i) && delete data[this._i];
                    },
                    // 23.3.3.4 WeakMap.prototype.has(key)
                    // 23.4.3.4 WeakSet.prototype.has(value)
                    has: function has(key) {
                        if (!isObject(key)) return false;
                        var data = getWeak(key);
                        if (data === true) return uncaughtFrozenStore(this).has(key);
                        return data && $has(data, this._i);
                    }
                });
                return C;
            },
            def: function(that, key, value) {
                var data = getWeak(anObject(key), true);
                if (data === true) uncaughtFrozenStore(that).set(key, value);
                else data[that._i] = value;
                return that;
            },
            ufstore: uncaughtFrozenStore
        };

        /***/
    }),
    /* 114 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = !__webpack_require__(8) && !__webpack_require__(3)(function() {
            return Object.defineProperty(__webpack_require__(75)('div'), 'a', { get: function() { return 7; } }).a != 7;
        });

        /***/
    }),
    /* 115 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.3 Number.isInteger(number)
        var isObject = __webpack_require__(4),
            floor = Math.floor;
        module.exports = function isInteger(it) {
            return !isObject(it) && isFinite(it) && floor(it) === it;
        };

        /***/
    }),
    /* 116 */
    /***/
    (function(module, exports, __webpack_require__) {

        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__(1);
        module.exports = function(iterator, fn, value, entries) {
            try {
                return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
            } catch (e) {
                var ret = iterator['return'];
                if (ret !== undefined) anObject(ret.call(iterator));
                throw e;
            }
        };

        /***/
    }),
    /* 117 */
    /***/
    (function(module, exports) {

        module.exports = function(done, value) {
            return { value: value, done: !!done };
        };

        /***/
    }),
    /* 118 */
    /***/
    (function(module, exports) {

        // 20.2.2.20 Math.log1p(x)
        module.exports = Math.log1p || function log1p(x) {
            return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
        };

        /***/
    }),
    /* 119 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 19.1.2.1 Object.assign(target, source, ...)
        var getKeys = __webpack_require__(45),
            gOPS = __webpack_require__(69),
            pIE = __webpack_require__(58),
            toObject = __webpack_require__(12),
            IObject = __webpack_require__(57),
            $assign = Object.assign;

        // should work with symbols and should have deterministic property order (V8 bug)
        module.exports = !$assign || __webpack_require__(3)(function() {
            var A = {},
                B = {},
                S = Symbol(),
                K = 'abcdefghijklmnopqrst';
            A[S] = 7;
            K.split('').forEach(function(k) { B[k] = k; });
            return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
        }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
            var T = toObject(target),
                aLen = arguments.length,
                index = 1,
                getSymbols = gOPS.f,
                isEnum = pIE.f;
            while (aLen > index) {
                var S = IObject(arguments[index++]),
                    keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
                    length = keys.length,
                    j = 0,
                    key;
                while (length > j)
                    if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
            }
            return T;
        } : $assign;

        /***/
    }),
    /* 120 */
    /***/
    (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__(9),
            anObject = __webpack_require__(1),
            getKeys = __webpack_require__(45);

        module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties),
                length = keys.length,
                i = 0,
                P;
            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };

        /***/
    }),
    /* 121 */
    /***/
    (function(module, exports, __webpack_require__) {

        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__(19),
            gOPN = __webpack_require__(44).f,
            toString = {}.toString;

        var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
            Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };

        module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
        };


        /***/
    }),
    /* 122 */
    /***/
    (function(module, exports, __webpack_require__) {

        var has = __webpack_require__(14),
            toIObject = __webpack_require__(19),
            arrayIndexOf = __webpack_require__(61)(false),
            IE_PROTO = __webpack_require__(88)('IE_PROTO');

        module.exports = function(object, names) {
            var O = toIObject(object),
                i = 0,
                result = [],
                key;
            for (key in O)
                if (key != IE_PROTO) has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
            while (names.length > i)
                if (has(O, key = names[i++])) {
                    ~arrayIndexOf(result, key) || result.push(key);
                }
            return result;
        };

        /***/
    }),
    /* 123 */
    /***/
    (function(module, exports, __webpack_require__) {

        var getKeys = __webpack_require__(45),
            toIObject = __webpack_require__(19),
            isEnum = __webpack_require__(58).f;
        module.exports = function(isEntries) {
            return function(it) {
                var O = toIObject(it),
                    keys = getKeys(O),
                    length = keys.length,
                    i = 0,
                    result = [],
                    key;
                while (length > i)
                    if (isEnum.call(O, key = keys[i++])) {
                        result.push(isEntries ? [key, O[key]] : O[key]);
                    }
                return result;
            };
        };

        /***/
    }),
    /* 124 */
    /***/
    (function(module, exports, __webpack_require__) {

        // all object keys, includes non-enumerable and symbols
        var gOPN = __webpack_require__(44),
            gOPS = __webpack_require__(69),
            anObject = __webpack_require__(1),
            Reflect = __webpack_require__(2).Reflect;
        module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
            var keys = gOPN.f(anObject(it)),
                getSymbols = gOPS.f;
            return getSymbols ? keys.concat(getSymbols(it)) : keys;
        };

        /***/
    }),
    /* 125 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $parseFloat = __webpack_require__(2).parseFloat,
            $trim = __webpack_require__(55).trim;

        module.exports = 1 / $parseFloat(__webpack_require__(93) + '-0') !== -Infinity ? function parseFloat(str) {
            var string = $trim(String(str), 3),
                result = $parseFloat(string);
            return result === 0 && string.charAt(0) == '-' ? -0 : result;
        } : $parseFloat;

        /***/
    }),
    /* 126 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $parseInt = __webpack_require__(2).parseInt,
            $trim = __webpack_require__(55).trim,
            ws = __webpack_require__(93),
            hex = /^[\-+]?0[xX]/;

        module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
            var string = $trim(String(str), 3);
            return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
        } : $parseInt;

        /***/
    }),
    /* 127 */
    /***/
    (function(module, exports) {

        // 7.2.9 SameValue(x, y)
        module.exports = Object.is || function is(x, y) {
            return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
        };

        /***/
    }),
    /* 128 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-string-pad-start-end
        var toLength = __webpack_require__(10),
            repeat = __webpack_require__(92),
            defined = __webpack_require__(25);

        module.exports = function(that, maxLength, fillString, left) {
            var S = String(defined(that)),
                stringLength = S.length,
                fillStr = fillString === undefined ? ' ' : String(fillString),
                intMaxLength = toLength(maxLength);
            if (intMaxLength <= stringLength || fillStr == '') return S;
            var fillLen = intMaxLength - stringLength,
                stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
            if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
            return left ? stringFiller + S : S + stringFiller;
        };


        /***/
    }),
    /* 129 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports.f = __webpack_require__(5);

        /***/
    }),
    /* 130 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var strong = __webpack_require__(111);

        // 23.1 Map Objects
        module.exports = __webpack_require__(62)('Map', function(get) {
            return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
        }, {
            // 23.1.3.6 Map.prototype.get(key)
            get: function get(key) {
                var entry = strong.getEntry(this, key);
                return entry && entry.v;
            },
            // 23.1.3.9 Map.prototype.set(key, value)
            set: function set(key, value) {
                return strong.def(this, key === 0 ? 0 : key, value);
            }
        }, strong, true);

        /***/
    }),
    /* 131 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 21.2.5.3 get RegExp.prototype.flags()
        if (__webpack_require__(8) && /./g.flags != 'g') __webpack_require__(9).f(RegExp.prototype, 'flags', {
            configurable: true,
            get: __webpack_require__(64)
        });

        /***/
    }),
    /* 132 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var strong = __webpack_require__(111);

        // 23.2 Set Objects
        module.exports = __webpack_require__(62)('Set', function(get) {
            return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
        }, {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
                return strong.def(this, value = value === 0 ? 0 : value, value);
            }
        }, strong);

        /***/
    }),
    /* 133 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var each = __webpack_require__(28)(0),
            redefine = __webpack_require__(17),
            meta = __webpack_require__(36),
            assign = __webpack_require__(119),
            weak = __webpack_require__(113),
            isObject = __webpack_require__(4),
            getWeak = meta.getWeak,
            isExtensible = Object.isExtensible,
            uncaughtFrozenStore = weak.ufstore,
            tmp = {},
            InternalMap;

        var wrapper = function(get) {
            return function WeakMap() {
                return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
        };

        var methods = {
            // 23.3.3.3 WeakMap.prototype.get(key)
            get: function get(key) {
                if (isObject(key)) {
                    var data = getWeak(key);
                    if (data === true) return uncaughtFrozenStore(this).get(key);
                    return data ? data[this._i] : undefined;
                }
            },
            // 23.3.3.5 WeakMap.prototype.set(key, value)
            set: function set(key, value) {
                return weak.def(this, key, value);
            }
        };

        // 23.3 WeakMap Objects
        var $WeakMap = module.exports = __webpack_require__(62)('WeakMap', wrapper, methods, weak, true, true);

        // IE11 WeakMap frozen keys fix
        if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
            InternalMap = weak.getConstructor(wrapper);
            assign(InternalMap.prototype, methods);
            meta.NEED = true;
            each(['delete', 'has', 'get', 'set'], function(key) {
                var proto = $WeakMap.prototype,
                    method = proto[key];
                redefine(proto, key, function(a, b) {
                    // store frozen objects on internal weakmap shim
                    if (isObject(a) && !isExtensible(a)) {
                        if (!this._f) this._f = new InternalMap;
                        var result = this._f[key](a, b);
                        return key == 'set' ? this : result;
                        // store all the rest on native weakmap
                    }
                    return method.call(this, a, b);
                });
            });
        }

        /***/
    }),
    /* 134 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        var _extends = Object.assign || function(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        __webpack_require__(139);

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        var _vueResource = __webpack_require__(409);

        var _vueResource2 = _interopRequireDefault(_vueResource);

        var _App = __webpack_require__(367);

        var _App2 = _interopRequireDefault(_App);

        var _store = __webpack_require__(141);

        __webpack_require__(363);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        _vue2.default.use(_vueResource2.default);

        _vue2.default.http.interceptors.push(function(request, next) {
            var token = _settings2.default.params[_settings2.default.authorization.web];
            if (token !== undefined) {
                request.headers.set(_settings2.default.authorization.web, token);
                request.headers.set(_settings2.default.authorization.api.key, _settings2.default.authorization.api.value.supplant(_settings2.default.params));
            }
            next();
        });

        var app = new _vue2.default(_extends({ store: _store.store }, _App2.default));

        app.$mount('#app');

        /***/
    }),
    /* 135 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(global) {

            __webpack_require__(349);

            __webpack_require__(365);

            __webpack_require__(169);

            if (global._babelPolyfill) {
                throw new Error("only one instance of babel-polyfill is allowed");
            }
            global._babelPolyfill = true;

            var DEFINE_PROPERTY = "defineProperty";

            function define(O, key, value) {
                O[key] || Object[DEFINE_PROPERTY](O, key, {
                    writable: true,
                    configurable: true,
                    value: value
                });
            }

            define(String.prototype, "padLeft", "".padStart);
            define(String.prototype, "padRight", "".padEnd);

            "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key) {
                [][key] && define(Array, key, Function.call.bind([][key]));
            });
            /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(100)))

        /***/
    }),
    /* 136 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            /**
             * Select file for tinyMCE.
             * @param {String} url
             */
            selectTinyMce: function selectTinyMce(url) {
                if (!top.tinymce) {
                    throw new Error('tinyMCE is selected as target, but `window.top` does not contain it!');
                }

                var wManager = top.tinymce.activeEditor.windowManager;

                if (top.tinymce.majorVersion < 4) {
                    wManager.params.setUrl(url);
                    wManager.close(wManager.params.mce_window_id);
                } else {
                    wManager.getParams().setUrl(url);
                    wManager.close();
                }
            },


            /**
             * Select file for CKEditor.
             * @param {String} url
             * @param {String} altText
             */
            selectCKEditor: function selectCKEditor(url, altText) {
                if (!window.opener || !window.opener.CKEDITOR) {
                    throw new Error('CKEDITOR is selected as target, but `window.opener` does not contain it!');
                }

                var funcNum = _settings2.default.params.CKEditorFuncNum;
                window.opener.CKEDITOR.tools.callFunction(funcNum, url, function() {
                    // Get the reference to a dialog window.
                    var dialog = this.getDialog();
                    // Check if this is the Image Properties dialog window.
                    if (dialog.getName() === 'image') {
                        // Get the reference to a text field that stores the "alt" attribute.
                        var element = dialog.getContentElement('info', 'txtAlt');
                        // Assign the new value.
                        if (element) {
                            element.setValue(altText);
                        }
                    }
                });
                window.close();
            },


            /**
             * Select url for user callback.
             * @param {String} url
             */
            selectCallback: function selectCallback(url) {
                var userCallback = _settings2.default.callback();
                var callback = function callback(_) {
                    return _;
                };

                if (userCallback) {
                    callback = window[userCallback] || parent[userCallback] || top[userCallback];
                } else {
                    callback = window.cripFilesystemManager || parent.cripFilesystemManager || top.cripFilesystemManager;
                }

                if (typeof callback !== 'function') {
                    throw new Error('callback method for file select not found!');
                }

                callback(url, _settings2.default.params);
            }
        };

        /***/
    }),
    /* 137 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        exports.default = function(bytes) {
            if (bytes === 1) {
                return bytes + ' byte';
            }

            if (bytes === 0) {
                return '0 bytes';
            }

            var fileSizes = [{ val: 1, postfix: ' bytes' }, { val: 1024, postfix: ' kB' }, { val: 1048576, postfix: ' MB' }, { val: 1073741824, postfix: ' GB' }];

            var result = '';
            fileSizes.forEach(function(size) {
                if (bytes >= size.val) {
                    result = (bytes / size.val).toFixed(2) + size.postfix;
                }
            });

            return result;
        };

        /***/
    }),
    /* 138 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        var _Tree = __webpack_require__(140);

        var _Tree2 = _interopRequireDefault(_Tree);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            /**
             * Receive folders.
             * @returns {Promise.<Tree>}
             */
            getAll: function getAll() {
                    return new Promise(function(resolve, reject) {
                        _vue2.default.http.get('' + _settings2.default.treeUrl).then(function(_ref) {
                            var data = _ref.data;
                            resolve(new _Tree2.default(data));
                        }, reject);
                    });
                }
                // getAll () {
                //   return new Promise((resolve, reject) => {
                //     vue.http.get(`filemanager/api/crip-folders`)
                //               .then(({ data }) => { resolve(new Tree(data)) }, reject)
                //   })
                // }

        };

        /***/
    }),
    /* 139 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|[]\/\\])/g, '\\$1');
        }

        function toDatePart(number) {
            return ('0' + number).substr(-2);
        }

        if (!String.prototype.replaceAll) {
            String.prototype.replaceAll = function(find, replace) {
                return this.replace(new RegExp(escapeRegExp(find), 'g'), replace);
            };
        }

        if (!Number.prototype.dateFromUnixTimestamp) {
            Number.prototype.dateFromUnixTimestamp = function() {
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var date = new Date(this * 1000);
                var year = date.getFullYear();
                var month = toDatePart(date.getMonth() + 1);
                var day = toDatePart(date.getDate());
                var minutes = toDatePart(date.getMinutes());
                var hours = date.getHours();

                // Will display date in 2017/01/01 10:30 format
                return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;
            };
        }

        if (!String.prototype.supplant) {
            /**
             * supplant() does variable substitution on the string. It scans through the
             * string looking for expressions enclosed in { } braces. If an expression is
             * found, use it as a key on the object, and if the key has a string value or
             * number value, it is substituted for the bracket expression and it repeats.
             */
            String.prototype.supplant = function(o) {
                return this.replace(/{([^{}]*)}/g, function(a, b) {
                    var r = o[b];
                    return typeof r === 'string' || typeof r === 'number' ? r : a;
                });
            };
        }

        /***/
    }),
    /* 140 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _TreeItem = __webpack_require__(72);

        var _TreeItem2 = _interopRequireDefault(_TreeItem);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var Tree = function Tree(data) {
            var _this = this;

            _classCallCheck(this, Tree);

            this.items = [];

            if (!data || data.length < 1) {
                return;
            }

            data.forEach(function(item) {
                _this.items.push(new _TreeItem2.default(item));
            });
        };

        exports.default = Tree;

        /***/
    }),
    /* 141 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.store = undefined;

        var _blobs = __webpack_require__(142);

        var _blobs2 = _interopRequireDefault(_blobs);

        var _breadcrumb = __webpack_require__(143);

        var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

        var _tree = __webpack_require__(145);

        var _tree2 = _interopRequireDefault(_tree);

        var _uploads = __webpack_require__(146);

        var _uploads2 = _interopRequireDefault(_uploads);

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        var _vuex = __webpack_require__(424);

        var _vuex2 = _interopRequireDefault(_vuex);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        _vue2.default.use(_vuex2.default);

        var store = exports.store = new _vuex2.default.Store({
            modules: { blobs: _blobs2.default, breadcrumb: _breadcrumb2.default, tree: _tree2.default, uploads: _uploads2.default }
        });

        /***/
    }),
    /* 142 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions, _mutations, _getters;

        var _actions2 = __webpack_require__(11);

        var a = _interopRequireWildcard(_actions2);

        var _getters2 = __webpack_require__(7);

        var g = _interopRequireWildcard(_getters2);

        var _mutations2 = __webpack_require__(27);

        var m = _interopRequireWildcard(_mutations2);

        var _folder = __webpack_require__(104);

        var _folder2 = _interopRequireDefault(_folder);

        var _Blob = __webpack_require__(50);

        var _Blob2 = _interopRequireDefault(_Blob);

        var _editors = __webpack_require__(136);

        var _editors2 = _interopRequireDefault(_editors);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        var _helpers = __webpack_require__(144);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

        var state = {
            isCreateFolderBlobVisible: false,
            displayType: 'grid',
            displayFilter: _settings2.default.mediaTypes.file,
            blobs: [],
            newFolder: new _Blob2.default({
                type: 'dir',
                name: 'new folder',
                thumb: _settings2.default.dirIcon,
                mediaType: _settings2.default.mediaTypes.dir,

                $rename: true,
                $selected: true,
                $temp: true
            })
        };

        var actions = (_actions = {}, _defineProperty(_actions, a.openBlob, function(_ref, _ref2) {
            var dispatch = _ref.dispatch;
            var _ref2$blob = _ref2.blob,
                isDir = _ref2$blob.isDir,
                path = _ref2$blob.path,
                url = _ref2$blob.url,
                fullName = _ref2$blob.fullName,
                customUrl = _ref2.url;

            if (isDir) {
                return dispatch(a.changePath, path);
            }

            var action = 'selectCallback';

            if (_settings2.default.target() === 'tinymce') {
                action = 'selectTinyMce';
            }

            if (_settings2.default.target() === 'ckeditor') {
                action = 'selectCKEditor';
            }

            // TODO: add more editors for FileSysManager

            return _editors2.default[action](customUrl || url, fullName);
        }), _defineProperty(_actions, a.saveBlob, function(store, blob) {
            return new Promise(function(resolve, reject) {
                if (blob.$temp || blob.name !== blob.$newName) {
                    store.commit(m.setLoadingStarted);

                    return blob.save(store.getters[g.getPath]).then(function(newBlob) {
                        store.commit(m.setUpdatedBlob, { id: blob.$id, blob: newBlob });
                        store.commit(m.setSelectedBlob, newBlob.$id);
                        store.commit(m.setCreateFolderBlobVisibility, false);
                        store.commit(m.setLoadingCompleted);

                        if (newBlob.isDir) {
                            store.dispatch(a.fetchTree);
                        }
                        resolve();
                    }).catch(function(err) {
                        store.commit(m.setLoadingCompleted);
                        reject(err);
                    });
                }

                resolve();
            });
        }), _defineProperty(_actions, a.fetchContent, function(store) {
            store.commit(m.removeSelectedBlob);
            store.commit(m.setLoadingStarted);

            _folder2.default.content(store.getters[g.getPath]).then(function(blobs) {
                store.commit(m.setBlobs, blobs);
                store.commit(m.setLoadingCompleted);
            });
        }), _defineProperty(_actions, a.deleteBlob, function(store, payload) {
            store.commit(m.setLoadingStarted);
            payload.delete().then(function() {
                store.commit(m.removeSelectedBlob);
                store.commit(m.removeBlob, payload.$id);
                store.commit(m.setLoadingCompleted);

                if (payload.isDir) {
                    // If blob was a folder, update tree component content as structure
                    // changes
                    store.dispatch(a.fetchTree);
                }
            });
        }), _actions);

        var mutations = (_mutations = {}, _defineProperty(_mutations, m.setCreateFolderBlobVisibility, function(state, payload) {
            state.isCreateFolderBlobVisible = !!payload;
        }), _defineProperty(_mutations, m.setRename, function(state) {
            var blob = state.blobs.find(function(b) {
                return b.$selected;
            });
            return blob ? _vue2.default.set(blob, '$rename', true) : false;
        }), _defineProperty(_mutations, m.setDisplayType, function(state, payload) {
            _vue2.default.set(state, 'displayType', payload);
        }), _defineProperty(_mutations, m.setSelectedBlob, function(state, payload) {
            // disable rename if we are selecting other blob
            (0, _helpers.setBlobPropertyById)(state, payload, '$rename', false, false);

            (0, _helpers.setBlobPropertyById)(state, payload, '$selected', true, false);
        }), _defineProperty(_mutations, m.removeSelectedBlob, function(state) {
            (0, _helpers.setBlobPropertyById)(state, '', '$selected', false, false);
        }), _defineProperty(_mutations, m.setRenameBlob, function(state, payload) {
            (0, _helpers.setBlobPropertyById)(state, payload, '$rename', true, false);
        }), _defineProperty(_mutations, m.setUpdatedBlob, function(state, _ref3) {
            var id = _ref3.id,
                blob = _ref3.blob;

            var toUpdate = (0, _helpers.findBlobById)(state, id);
            var index = state.blobs.indexOf(toUpdate);
            if (~index) {
                state.blobs.splice(index, 1);
            }
            state.blobs.push(blob);
        }), _defineProperty(_mutations, m.setNewBlob, function(state, payload) {
            state.blobs.push(payload);
        }), _defineProperty(_mutations, m.setBlobs, function(state, payload) {
            state.blobs = payload;
        }), _defineProperty(_mutations, m.removeBlob, function(state, payload) {
            var toUpdate = (0, _helpers.findBlobById)(state, payload);
            state.blobs.splice(state.blobs.indexOf(toUpdate), 1);
        }), _defineProperty(_mutations, m.setDisplayFilter, function(state, payload) {
            _vue2.default.set(state, 'displayFilter', payload);
        }), _mutations);

        var getters = (_getters = {}, _defineProperty(_getters, g.getCreateFolderBlobVisibility, function(state, getters) {
            return state.isCreateFolderBlobVisible && !getters[g.getIsAnyBlobInSelectedMode];
        }), _defineProperty(_getters, g.getIsAnyBlobInRenameMode, function(state) {
            return state.blobs.filter(function(b) {
                return b.$rename;
            }).length > 0;
        }), _defineProperty(_getters, g.getIsAnyBlobInSelectedMode, function(state) {
            return state.blobs.filter(function(b) {
                return b.$selected;
            }).length > 0;
        }), _defineProperty(_getters, g.getDisplayType, function(state) {
            return state.displayType;
        }), _defineProperty(_getters, g.getBlobs, function(state) {
            var filtered = state.blobs;

            if (_settings2.default.mediaType() !== _settings2.default.mediaTypes.file || state.displayFilter !== _settings2.default.mediaTypes.file) {
                var additionalFilter = _settings2.default.mediaType() === _settings2.default.mediaTypes.file ? state.displayFilter : _settings2.default.mediaType();
                var consistent = [_settings2.default.mediaTypes.dir, additionalFilter];
                filtered = state.blobs.filter(function(blob) {
                    return ~consistent.indexOf(blob.mediaType);
                });
            }

            return filtered;
        }), _defineProperty(_getters, g.getSelectedBlob, function(state) {
            return state.blobs.find(function(b) {
                return b.$selected;
            });
        }), _defineProperty(_getters, g.getNewFolder, function(state) {
            return state.newFolder;
        }), _defineProperty(_getters, g.getDisplayFilter, function(state) {
            if (_settings2.default.mediaType() !== _settings2.default.mediaTypes.file) {
                return _settings2.default.mediaType();
            }

            return state.displayFilter;
        }), _getters);

        exports.default = { state: state, actions: actions, mutations: mutations, getters: getters };

        /***/
    }),
    /* 143 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _mutations, _getters;

        var _actions2 = __webpack_require__(11);

        var a = _interopRequireWildcard(_actions2);

        var _getters2 = __webpack_require__(7);

        var g = _interopRequireWildcard(_getters2);

        var _mutations2 = __webpack_require__(27);

        var m = _interopRequireWildcard(_mutations2);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

        var state = {
            loading: 0,
            path: '' // TODO: get initial path from router
        };

        var actions = _defineProperty({}, a.changePath, function(store, payload) {
            var path = payload.trim('/');

            // Avoid any mutation if path already loaded or some loading is not
            // completed yet.
            if (store.state.path === path || store.getters[g.isLoading]) return;

            store.commit(m.setPath, path);

            store.dispatch(a.fetchContent);
        });

        var mutations = (_mutations = {}, _defineProperty(_mutations, m.setLoadingStarted, function(state) {
            state.loading++;
        }), _defineProperty(_mutations, m.setLoadingCompleted, function(state) {
            state.loading--;
        }), _defineProperty(_mutations, m.setPath, function(state, payload) {
            state.path = payload;
        }), _mutations);

        var getters = (_getters = {}, _defineProperty(_getters, g.isLoading, function(state) {
            return state.loading > 0;
        }), _defineProperty(_getters, g.getPath, function(state) {
            return state.path;
        }), _defineProperty(_getters, g.getPathUp, function(state) {
            var parts = state.path.split('/');

            if (parts.length < 2) {
                return '';
            }

            parts.splice(-1, 1);

            return parts.join('/');
        }), _getters);

        exports.default = { state: state, actions: actions, mutations: mutations, getters: getters };

        /***/
    }),
    /* 144 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.setBlobPropertyById = setBlobPropertyById;
        exports.findBlobById = findBlobById;

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        /**
         * Set blob property value by identifier and reset all other to default value.
         * @param {state} state State of the store.
         * @param {String} id Blob identifier value.
         * @param {String} property Property name.
         * @param {*} value Value of the property to be set.
         * @param {*} defaultVal Value of the property of all other blob.
         * @return {Boolean} Boolean indicating whenever value is set to the blob.
         */
        function setBlobPropertyById(state, id, property, value, defaultVal) {
            state.blobs.forEach(function(blob) {
                return _vue2.default.set(blob, property, defaultVal);
            });

            var blob = findBlobById(state, id);

            return blob ? _vue2.default.set(blob, property, value) || true : false;
        }

        /**
         * Find blob by identifier in store.
         * @param {state} state State of the store.
         * @param {String} id Blob identifier value.
         * @return {Blob|undefined} Blob instance if it is found in store.
         */
        function findBlobById(state, id) {
            return state.blobs.find(function(blob) {
                return blob.$id === id;
            });
        }

        /***/
    }),
    /* 145 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions2 = __webpack_require__(11);

        var a = _interopRequireWildcard(_actions2);

        var _getters2 = __webpack_require__(7);

        var g = _interopRequireWildcard(_getters2);

        var _mutations2 = __webpack_require__(27);

        var m = _interopRequireWildcard(_mutations2);

        var _tree = __webpack_require__(138);

        var _tree2 = _interopRequireDefault(_tree);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

        var state = {
            items: []
        };

        var actions = _defineProperty({}, a.fetchTree, function(_ref) {
            var commit = _ref.commit;

            commit(m.setLoadingStarted);
            _tree2.default.getAll().then(function(tree) {
                commit(m.setTree, tree.items);
                commit(m.setLoadingCompleted);
            });
        });

        var mutations = _defineProperty({}, m.setTree, function(state, payload) {
            state.items = payload;
        });

        var getters = _defineProperty({}, g.getTree, function(state) {
            return state.items;
        });

        exports.default = { state: state, actions: actions, mutations: mutations, getters: getters };

        /***/
    }),
    /* 146 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions, _mutations, _getters;

        var _actions2 = __webpack_require__(11);

        var a = _interopRequireWildcard(_actions2);

        var _getters2 = __webpack_require__(7);

        var g = _interopRequireWildcard(_getters2);

        var _mutations2 = __webpack_require__(27);

        var m = _interopRequireWildcard(_mutations2);

        var _file = __webpack_require__(103);

        var _file2 = _interopRequireDefault(_file);

        var _FileForUpload = __webpack_require__(105);

        var _FileForUpload2 = _interopRequireDefault(_FileForUpload);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

        var state = {
            uploads: []
        };

        var actions = (_actions = {}, _defineProperty(_actions, a.addUploads, function(store, payload) {
            for (var file in payload) {
                if (payload.hasOwnProperty(file)) {
                    store.commit(m.setNewUpload, payload[file]);
                }
            }
        }), _defineProperty(_actions, a.uploadFile, function(store, payload) {
            if (payload.$loading) {
                return;
            }

            store.commit(m.setUploadFileLoading, payload);
            var path = store.getters[g.getPath];
            _file2.default.upload(path, payload.file).then(function(blob) {
                store.commit(m.removeUpload, payload);
                store.commit(m.setNewBlob, blob);
            }).catch(function(error) {
                store.commit(m.setUploadFileError, { file: payload, error: error });
            });
        }), _defineProperty(_actions, a.uploadAllFiles, function(store) {
            store.state.uploads.forEach(function(file) {
                store.dispatch(a.uploadFile, file);
            });
        }), _actions);

        var mutations = (_mutations = {}, _defineProperty(_mutations, m.setNewUpload, function(state, payload) {
            var file = new _FileForUpload2.default(payload);
            state.uploads.push(file);
        }), _defineProperty(_mutations, m.removeUpload, function(state, payload) {
            var index = state.uploads.indexOf(payload);
            state.uploads.splice(index, 1);
        }), _defineProperty(_mutations, m.setUploadFileLoading, function(state, payload) {
            payload.$loading = true;
        }), _defineProperty(_mutations, m.setUploadFileError, function(state, _ref) {
            var file = _ref.file,
                error = _ref.error;

            file.$error = error;
            file.$loading = false;
        }), _mutations);

        var getters = (_getters = {}, _defineProperty(_getters, g.getUploads, function(state) {
            return state.uploads;
        }), _defineProperty(_getters, g.getUploadsCount, function(state) {
            return state.uploads.length;
        }), _getters);

        exports.default = { state: state, actions: actions, mutations: mutations, getters: getters };

        /***/
    }),
    /* 147 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _ActionsBar = __webpack_require__(368);

        var _ActionsBar2 = _interopRequireDefault(_ActionsBar);

        var _Blobs = __webpack_require__(378);

        var _Blobs2 = _interopRequireDefault(_Blobs);

        var _BreadcrumbBar = __webpack_require__(386);

        var _BreadcrumbBar2 = _interopRequireDefault(_BreadcrumbBar);

        var _ContentContainer = __webpack_require__(379);

        var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

        var _Tree = __webpack_require__(381);

        var _Tree2 = _interopRequireDefault(_Tree);

        var _Uploads = __webpack_require__(384);

        var _Uploads2 = _interopRequireDefault(_Uploads);

        var _actions = __webpack_require__(11);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            name: 'app',

            components: {
                actionsBar: _ActionsBar2.default,
                breadcrumbBar: _BreadcrumbBar2.default,
                tree: _Tree2.default,
                contentContainer: _ContentContainer2.default,
                blobs: _Blobs2.default,
                uploads: _Uploads2.default
            },

            mounted: function mounted() {
                this.$store.dispatch(_actions.fetchContent);
                this.$store.dispatch(_actions.fetchTree);
            }
        }; //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 148 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _AddFilesBtn = __webpack_require__(369);

        var _AddFilesBtn2 = _interopRequireDefault(_AddFilesBtn);

        var _Btn = __webpack_require__(39);

        var _Btn2 = _interopRequireDefault(_Btn);

        var _ChangeFilterBtn = __webpack_require__(370);

        var _ChangeFilterBtn2 = _interopRequireDefault(_ChangeFilterBtn);

        var _ChangeViewBtn = __webpack_require__(371);

        var _ChangeViewBtn2 = _interopRequireDefault(_ChangeViewBtn);

        var _CreateFolderBtn = __webpack_require__(372);

        var _CreateFolderBtn2 = _interopRequireDefault(_CreateFolderBtn);

        var _DeleteBtn = __webpack_require__(373);

        var _DeleteBtn2 = _interopRequireDefault(_DeleteBtn);

        var _RenameBtn = __webpack_require__(374);

        var _RenameBtn2 = _interopRequireDefault(_RenameBtn);

        var _StartUploadBtn = __webpack_require__(375);

        var _StartUploadBtn2 = _interopRequireDefault(_StartUploadBtn);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'actions-bar',

            components: {
                addFilesBtn: _AddFilesBtn2.default,
                btn: _Btn2.default,
                changeFilterBtn: _ChangeFilterBtn2.default,
                changeViewBtn: _ChangeViewBtn2.default,
                createFolderBtn: _CreateFolderBtn2.default,
                deleteBtn: _DeleteBtn2.default,
                renameBtn: _RenameBtn2.default,
                startUploadBtn: _StartUploadBtn2.default
            }
        };

        /***/
    }),
    /* 149 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _Btn = __webpack_require__(39);

        var _Btn2 = _interopRequireDefault(_Btn);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'add-files_actions-bar-btn',

            components: { btn: _Btn2.default },

            computed: {
                /**
                 * Computes file select filter depending upon current display filter.
                 * @returns {string}
                 */
                accept: function accept() {
                    switch (this.$store.getters[getters.getDisplayFilter]) {
                        case _settings2.default.mediaTypes.image:
                            return 'image/*';
                        case _settings2.default.mediaTypes.media:
                            return 'audio/*,video/*';
                        case _settings2.default.mediaTypes.document:
                            return 'application/*,text/*';
                        default:
                            return '*';
                    }
                }
            },

            methods: {
                /**
                 * React on file upload change event and emit upload event of added files
                 * to parent component.
                 * @param {Event} e
                 */
                filesAdded: function filesAdded(e) {
                    // Emit default action too, for case, if we want to react somehow on
                    // change event.
                    this.$emit('change', e);

                    var files = e.target.files || e.dataTransfer.files;

                    if (files.length > 0) {
                        // Emit upload event only in case if we have at least one file for
                        // upload selected.
                        this.$emit('upload', files);

                        // Add files to vuex store state queue.
                        this.addUploadFiles(files);
                    }
                },


                /**
                 * Add files to vuex store state queue.
                 * @param {FileList} files
                 */
                addUploadFiles: function addUploadFiles(files) {
                    this.$store.dispatch(actions.addUploads, files);
                }
            }
        };

        /***/
    }),
    /* 150 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            name: 'actions-bar-btn',

            props: {
                icon: {
                    type: String,
                    required: false,
                    'default': function _default() {
                        return '';
                    }
                },
                size: {
                    type: String,
                    required: false,
                    'default': function _default() {
                        return 'md';
                    }
                },
                active: {
                    type: Boolean,
                    required: false,
                    'default': function _default() {
                        return false;
                    }
                },
                disabled: {
                    type: Boolean,
                    required: false,
                    'default': function _default() {
                        return false;
                    }
                }
            },

            computed: {
                /**
                 * Determines icon prop persistence.
                 * @returns {Boolean}
                 */
                hasIcon: function hasIcon() {
                    return !!this.icon;
                },


                /**
                 * Gets current icon absolute URL.
                 * @returns {String}
                 */
                iconUrl: function iconUrl() {
                    return _settings2.default.icon(this.icon);
                },


                /**
                 * Gets current element class definition.
                 * @returns {Array.<String>}
                 */
                btnClass: function btnClass() {
                    return ['action-btn-' + this.size];
                },


                /**
                 * Gets current element link class definition.
                 * @returns {{active: Boolean, disabled: Boolean}}
                 */
                linkClass: function linkClass() {
                    return {
                        'active': this.active,
                        'disabled': this.disabled
                    };
                }
            },

            methods: {
                /**
                 * Emit click of inner element to parent.
                 * @param {MouseEvent} e
                 */
                onBtnClick: function onBtnClick(e) {
                    this.$emit('click', e);
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 151 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _Btn = __webpack_require__(39);

        var _Btn2 = _interopRequireDefault(_Btn);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _mutations = __webpack_require__(27);

        var mutations = _interopRequireWildcard(_mutations);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'change-filter_actions-bar-btn',

            components: { btn: _Btn2.default },

            props: {
                filter: { type: String, required: true }
            },

            computed: {
                /**
                 * Get current display filter setting value.
                 * @returns {string}
                 */
                currentFilter: function currentFilter() {
                    return this.$store.getters[getters.getDisplayFilter];
                },


                /**
                 * Determines is the current button filter set as active for blobs.
                 * @returns {boolean}
                 */
                isFilterActive: function isFilterActive() {
                    return this.currentFilter === this.filter;
                },


                /**
                 * Determines is the media type predefined by the manager opener.
                 * @returns {boolean}
                 */
                isFiltersDisabled: function isFiltersDisabled() {
                    return _settings2.default.mediaType() !== _settings2.default.mediaTypes.file;
                }
            },

            methods: {
                /**
                 * Toggle current filter property value.
                 * @return {*|void}
                 */
                toggleFilter: function toggleFilter() {
                    if (this.isFiltersDisabled) {
                        return;
                    }
                    if (this.isFilterActive) {
                        // Reset back to all files
                        return this.$store.commit(mutations.setDisplayFilter, _settings2.default.mediaTypes.file);
                    }

                    return this.$store.commit(mutations.setDisplayFilter, this.filter);
                }
            }
        };

        /***/
    }),
    /* 152 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getters = __webpack_require__(7);

        var g = _interopRequireWildcard(_getters);

        var _Btn = __webpack_require__(39);

        var _Btn2 = _interopRequireDefault(_Btn);

        var _mutations = __webpack_require__(27);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        exports.default = {
            name: 'change-view_actions-bar-btn',

            components: { btn: _Btn2.default },

            props: {
                /**
                 * Display type identifier.
                 */
                view: { type: String, required: true }
            },

            computed: {
                /**
                 * Determines is vuex store display type same as current button view type.
                 * @returns {Boolean}
                 */
                isViewActive: function isViewActive() {
                    return this.$store.getters[g.getDisplayType] === this.view;
                }
            },

            methods: {
                /**
                 * Set current view as active one in vuex store.
                 * @returns {Boolean}
                 */
                setView: function setView() {
                    return !this.isViewActive && this.$store.commit(_mutations.setDisplayType, this.view);
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 153 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _mutations = __webpack_require__(27);

        var mutations = _interopRequireWildcard(_mutations);

        var _Btn = __webpack_require__(39);

        var _Btn2 = _interopRequireDefault(_Btn);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'create-folder_actions-bar-btn',

            components: { btn: _Btn2.default },

            computed: {
                /**
                 * Determines current visibility state of create folder blob.
                 * @returns {Boolean} Returns <c>true</c> if create folder blob is visible
                 * on the UI.
                 */
                createFolderBlobIsVisible: function createFolderBlobIsVisible() {
                    return this.$store.getters[getters.getCreateFolderBlobVisibility] && !this.$store.getters[getters.getIsAnyBlobInSelectedMode];
                },


                /**
                 * Content of the button in current state.
                 */
                content: function content() {
                    return this.createFolderBlobIsVisible ? 'Save new folder' : 'Create Folder';
                }
            },

            methods: {
                /**
                 * Sets crate folder blob visibility state to true.
                 */
                showCreateFolderBlob: function showCreateFolderBlob() {
                    if (this.$store.getters[getters.getIsAnyBlobInSelectedMode]) {
                        this.$store.commit(mutations.removeSelectedBlob);
                        this.$store.commit(mutations.setCreateFolderBlobVisibility, false);
                    }

                    if (!this.createFolderBlobIsVisible) {
                        return this.$store.commit(mutations.setCreateFolderBlobVisibility, true);
                    }

                    this.$store.dispatch(actions.saveBlob, this.$store.getters[getters.getNewFolder]);
                }
            }
        };

        /***/
    }),
    /* 154 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _Btn = __webpack_require__(39);

        var _Btn2 = _interopRequireDefault(_Btn);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        exports.default = {
            name: 'delete_actions-bar-btn',

            components: { btn: _Btn2.default },

            computed: {
                /**
                 * Determines is any of blob state is in selected mode and there is not
                 * enabled create state.
                 * @returns {Boolean}
                 */
                isDeleteBlobDisabled: function isDeleteBlobDisabled() {
                    return !(this.isCreateFolderBlobHidden && this.isAnyBlobSelected);
                },


                /**
                 * Determines current visibility state of create folder blob.
                 * @returns {Boolean} Returns <c>false</c> if create folder blob is
                 * visible on the UI.
                 */
                isCreateFolderBlobHidden: function isCreateFolderBlobHidden() {
                    return !this.$store.getters[getters.getCreateFolderBlobVisibility];
                },


                /**
                 * Determines is any of blob state is in selected mode.
                 * @returns {Boolean} Returns <c>true</c> if any of blob is in state of
                 * selected.
                 */
                isAnyBlobSelected: function isAnyBlobSelected() {
                    return this.$store.getters[getters.getIsAnyBlobInSelectedMode];
                },


                /**
                 * Gets selected blob instance.
                 */
                blob: function blob() {
                    return this.$store.getters[getters.getSelectedBlob];
                }
            },

            methods: {
                /**
                 * Call delete blob action in vuex store.
                 */
                deleteBlob: function deleteBlob() {
                    return this.isDeleteBlobDisabled || this.$store.dispatch(actions.deleteBlob, this.blob);
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 155 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _mutations = __webpack_require__(27);

        var mutations = _interopRequireWildcard(_mutations);

        var _Btn = __webpack_require__(39);

        var _Btn2 = _interopRequireDefault(_Btn);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'rename_actions-bar-btn',

            components: { btn: _Btn2.default },

            computed: {
                /**
                 * Determines is any of blob state is in rename mode.
                 * @returns {Boolean}
                 */
                isRenameBlobActive: function isRenameBlobActive() {
                    return this.$store.getters[getters.getIsAnyBlobInRenameMode];
                },


                /**
                 * Determines is any of blob state is in selected mode and there is not
                 * enabled create state.
                 * @returns {Boolean}
                 */
                isRenameBlobDisabled: function isRenameBlobDisabled() {
                    return !(this.isCreateFolderBlobHidden && this.isAnyBlobSelected) || this.isRenameBlobActive && this.blob.name === this.blob.$newName;
                },


                /**
                 * Determines current visibility state of create folder blob.
                 * @returns {Boolean} Returns <c>false</c> if create folder blob is
                 * visible on the UI.
                 */
                isCreateFolderBlobHidden: function isCreateFolderBlobHidden() {
                    return !this.$store.getters[getters.getCreateFolderBlobVisibility];
                },


                /**
                 * Determines is any of blob state is in selected mode.
                 * @returns {Boolean} Returns <c>true</c> if any of blob is in state of
                 * selected.
                 */
                isAnyBlobSelected: function isAnyBlobSelected() {
                    return this.$store.getters[getters.getIsAnyBlobInSelectedMode];
                },


                /**
                 * Get button content depending on the rename state.
                 */
                content: function content() {
                    return this.isRenameBlobActive ? 'Save' : 'Rename';
                },


                /**
                 * Gets selected blob instance.
                 */
                blob: function blob() {
                    return this.$store.getters[getters.getSelectedBlob];
                }
            },

            methods: {
                /**
                 * Enable rename state for selected blob in vuex store.
                 */
                enableBlobRename: function enableBlobRename() {
                    if (this.isRenameBlobActive) {
                        return this.$store.dispatch(actions.saveBlob, this.blob);
                    }

                    return this.isRenameBlobDisabled || this.$store.commit(mutations.setRename);
                }
            }
        };

        /***/
    }),
    /* 156 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _Btn = __webpack_require__(39);

        var _Btn2 = _interopRequireDefault(_Btn);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            name: 'start-upload_actions-bar-btn',

            components: { btn: _Btn2.default },

            computed: {
                /**
                 * Count of files to be uploaded.
                 * @returns {Number}
                 */
                count: function count() {
                    return this.$store.getters[getters.getUploadsCount];
                },


                /**
                 * Determines is in count property any file for upload.
                 * @returns {Boolean} Returns <c>false</c> if there is no items in the
                 * uploads queue.
                 */
                hasUploads: function hasUploads() {
                    return this.count > 0;
                }
            },

            methods: {
                /**
                 * Start upload files from the queue.
                 */
                upload: function upload() {
                    this.$store.dispatch(actions.uploadAllFiles);
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 157 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _mutations = __webpack_require__(27);

        var mutations = _interopRequireWildcard(_mutations);

        var _Blob = __webpack_require__(50);

        var _Blob2 = _interopRequireDefault(_Blob);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        var _vueFocus = __webpack_require__(366);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'blob',

            props: {
                /**
                 * Current blob definition.
                 */
                blob: { type: _Blob2.default, required: true }
            },

            computed: {
                /**
                 * Computes classes state of current blob.
                 * @returns {{active: Boolean, disabled: Boolean}}
                 */
                classes: function classes() {
                    return {
                        'active': this.blob.$selected,
                        'disabled': this.$store.getters[getters.isLoading],
                        'has-error': this.errorMessage !== ''
                    };
                },


                /**
                 * Determines is set strict image size for selecting image.
                 * @returns {Boolean}
                 */
                isStrictOutputSize: function isStrictOutputSize() {
                    return !!_settings2.default.imageSize();
                },


                /**
                 * Gets title for current blob.
                 */
                title: function title() {
                    return this.errorMessage || this.blob.fullName;
                }
            },

            data: function data() {
                return {
                    errorMessage: ''
                };
            },


            methods: {
                /**
                 * Sets selected blob state for current blob only in case if it is not
                 * selected already.
                 */
                selectBlob: function selectBlob() {
                    var selected = this.$store.getters[getters.getSelectedBlob];
                    if (!selected || selected.$id !== this.blob.$id) {
                        this.$store.commit(mutations.setSelectedBlob, this.blob.$id);
                    }
                },


                /**
                 * Sets rename blob state for current blob.
                 */
                enableRename: function enableRename() {
                    this.$store.commit(mutations.setRenameBlob, this.blob.$id);
                },


                /**
                 * Selects current blob for external use (editor or listener).
                 */
                openBlob: function openBlob() {
                    var file = {
                        blob: this.blob

                        // Allow user set default size by parameters in request.
                    };
                    if (this.isStrictOutputSize && !this.blob.isDir) {
                        file.url = '/' + this.blob.thumbs[_settings2.default.imageSize()].url;
                    }

                    this.$store.dispatch(actions.openBlob, file);
                },


                /**
                 * Send new name of blob to the server and set response as current blob
                 * actual data in vuex store.
                 */
                saveBlob: function saveBlob() {
                    var _this = this;

                    // Reset any of error to empty as we now requesting new update of the
                    // file.
                    this.errorMessage = '';

                    this.$store.dispatch(actions.saveBlob, this.blob).catch(function(error) {
                        _this.errorMessage = error;
                    });
                }
            },

            directives: { focus: _vueFocus.focus }
        };

        /***/
    }),
    /* 158 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _Blob = __webpack_require__(99);

        var _Blob2 = _interopRequireDefault(_Blob);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'new-folder-blob',

            computed: {
                /**
                 * Determines is the current state enables new folder creation.
                 * @return {Boolean}
                 */
                isNewFolderEnabled: function isNewFolderEnabled() {
                    return this.$store.getters[getters.getCreateFolderBlobVisibility];
                },


                /**
                 * Get blob instance for new folder.
                 * @return {Blob}
                 */
                blob: function blob() {
                    return this.$store.getters[getters.getNewFolder];
                }
            },

            components: { blob: _Blob2.default }
        };

        /***/
    }),
    /* 159 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _Blob = __webpack_require__(50);

        var _Blob2 = _interopRequireDefault(_Blob);

        var _Blob3 = __webpack_require__(99);

        var _Blob4 = _interopRequireDefault(_Blob3);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'blob-up',

            computed: {
                /**
                 * Determines is the current state path equals root path.
                 * @return {Boolean}
                 */
                isNotRootPath: function isNotRootPath() {
                    return this.$store.getters[getters.getPath] !== '';
                },
                isNotLoading: function isNotLoading() {
                    return !this.$store.getters[getters.isLoading];
                },


                /**
                 * Get blob instance for path up.
                 * @return {Blob}
                 */
                blob: function blob() {
                    var pathUp = this.$store.getters[getters.getPathUp];

                    return new _Blob2.default({
                        fullName: '..',
                        type: 'dir',
                        path: pathUp,
                        thumb: _settings2.default.dirIcon,
                        mediaType: _settings2.default.mediaTypes.dir
                    });
                }
            },

            components: { blob: _Blob4.default }
        };

        /***/
    }),
    /* 160 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _Blob = __webpack_require__(99);

        var _Blob2 = _interopRequireDefault(_Blob);

        var _ContextMenu = __webpack_require__(380);

        var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

        var _BlobNewFolder = __webpack_require__(376);

        var _BlobNewFolder2 = _interopRequireDefault(_BlobNewFolder);

        var _BlobUp = __webpack_require__(377);

        var _BlobUp2 = _interopRequireDefault(_BlobUp);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        exports.default = {
            name: 'blobs',

            components: { blob: _Blob2.default, blobUp: _BlobUp2.default, blobNewFolder: _BlobNewFolder2.default, blobContextMenu: _ContextMenu2.default },

            computed: {
                /**
                 * Get blobs from the store.
                 */
                blobs: function blobs() {
                    return this.$store.getters[getters.getBlobs];
                },


                /**
                 * Compute actual content of blobs.
                 */
                content: function content() {
                    return this.blobs.sort(function(a, b) {
                        if (a.isDir && b.isDir || !a.isDir && !b.isDir) {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                        }

                        // if types are different, make sure that dir always is first
                        if (a.isDir && !b.isDir) {
                            return -1;
                        }

                        if (!a.isDir && b.isDir) {
                            return 1;
                        }
                    });
                }
            },

            data: function data() {
                return { event: new MouseEvent('click') };
            },


            methods: {
                /**
                 * Open context menu for a blob.
                 * @param {MouseEvent} e
                 * @param {Blob} blob
                 */
                openContext: function openContext(e, blob) {
                    this.blobs.forEach(function(b) {
                        b.$isContextVisible = false;
                    });

                    blob.$isContextVisible = true;
                    this.event = e;
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 161 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        exports.default = {
            name: 'content-container',

            computed: {
                /**
                 * Get current display type of content.
                 * @return {String}
                 */
                displayType: function displayType() {
                    return this.$store.getters[getters.getDisplayType];
                }
            }
        }; //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 162 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _Blob = __webpack_require__(50);

        var _Blob2 = _interopRequireDefault(_Blob);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        var _size = __webpack_require__(137);

        var _size2 = _interopRequireDefault(_size);

        var _vue = __webpack_require__(31);

        var _vue2 = _interopRequireDefault(_vue);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        exports.default = {
            name: 'blob-context-menu',

            props: {
                blob: { type: _Blob2.default, required: true },
                event: { type: MouseEvent, required: false }
            },

            computed: {
                /**
                 * Get document height value.
                 */
                htmlHeight: function htmlHeight() {
                    var body = document.body;
                    var html = document.documentElement;

                    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                },


                /**
                 * Get event position coordinates.
                 */
                eventPosition: function eventPosition() {
                    var _ref = [0, 0],
                        x = _ref.x,
                        y = _ref.y;

                    if (this.event.pageX || this.event.pageY) {
                        x = this.event.pageX;
                        y = this.event.pageY;
                    } else if (this.event.clientX || this.event.clientY) {
                        x = this.event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;

                        y = this.event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                    }

                    return { x: x, y: y };
                },


                /**
                 * Context menu y position
                 */
                positionTop: function positionTop() {
                    var y = this.eventPosition.y;

                    var maxHeight = this.htmlHeight - this.height - 25;
                    var largestHeight = y > maxHeight ? maxHeight : y;
                    return largestHeight + 'px';
                },


                /**
                 * Context menu x position
                 */
                positionLeft: function positionLeft() {
                    var x = this.eventPosition.x;

                    var maxWidth = window.innerWidth - this.width - 25;
                    var largestWidth = x > maxWidth ? maxWidth : x;
                    return largestWidth + 'px';
                },


                /**
                 * Is current blob of directory type.
                 */
                isDir: function isDir() {
                    return this.blob.isDir;
                },


                /**
                 * Get readable size content.
                 */
                size: function size() {
                    return (0, _size2.default)(this.blob.bytes);
                },


                /**
                 * Determines is set strict image size for selecting image.
                 * @returns {Boolean}
                 */
                isStrictOutputSize: function isStrictOutputSize() {
                    return !!_settings2.default.imageSize();
                },


                /**
                 * Get image sizes if they persist.
                 */
                sizes: function sizes() {
                    var _this = this;

                    // If we are limiting user for some of image size, we should not allow
                    // him select any other size image.
                    if (this.isStrictOutputSize) {
                        return [];
                    }

                    // Otherwise allow to select any of the configured size.
                    var sizes = [];

                    if (this.blob.thumbs) {
                        Object.keys(this.blob.thumbs).forEach(function(size) {
                            sizes.push(_this.blob.thumbs[size]);
                        });
                    }

                    return sizes;
                }
            },

            data: function data() {
                return {
                    width: 0,
                    height: 0
                };
            },


            methods: {
                /**
                 * Open blob and allow to do it with custom url as user may use any size
                 * of blob in context menu selection.
                 * @param {String} url
                 */
                openBlob: function openBlob(url) {
                    if (this.isStrictOutputSize && !url) {
                        url = this.blob.thumbs[_settings2.default.imageSize()].url;
                    }

                    this.$store.dispatch(actions.openBlob, { blob: this.blob, url: url });
                    this.hideMenu();
                },


                /**
                 * Describes listener on document and in case of click outside
                 * context menu, close this instance.
                 * @param target
                 */
                onDocumentClick: function onDocumentClick(_ref2) {
                    var target = _ref2.target;

                    var targetEq = [target.id === this.blob.$id];
                    while (target = target.parentElement) {
                        targetEq.push(target.id === this.blob.$id);
                    }

                    if (targetEq.filter(function(eq) {
                            return eq;
                        }).length === 0) {
                        this.hideMenu();
                    }
                },


                /**
                 * Close menu and unbind event listener from dom.
                 */
                hideMenu: function hideMenu() {
                    _vue2.default.set(this.blob, '$isContextVisible', false);
                    // unbind this listener if we close menu
                    document.removeEventListener('click', this.onDocumentClick);
                }
            },

            watch: {
                'blob.$isContextVisible': function blob$isContextVisible(newVal) {
                    var _this2 = this;

                    if (newVal) {
                        _vue2.default.nextTick(function() {
                            // Ret element sizes to calculate correct position only after element
                            // becomes visible in dom and this mutation is applied
                            _this2.width = _this2.$el.offsetWidth;
                            _this2.height = _this2.$el.offsetHeight;
                        });

                        // Register listener on document and in case of click outside
                        // context menu, close this instance
                        document.addEventListener('click', this.onDocumentClick.bind(this));
                    }
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 163 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _TreeItem = __webpack_require__(72);

        var _TreeItem2 = _interopRequireDefault(_TreeItem);

        var _TreeItem3 = __webpack_require__(382);

        var _TreeItem4 = _interopRequireDefault(_TreeItem3);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        exports.default = {
            name: 'folder-tree',

            computed: {
                /**
                 * Tree items collection from vuex store.
                 * @return {Array}
                 */
                tree: function tree() {
                    return this.$store.getters[getters.getTree];
                }
            },

            data: function data() {
                return {
                    root: new _TreeItem2.default({ name: 'Home', path: '' })
                };
            },


            components: { treeItem: _TreeItem4.default }
        }; //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 164 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _TreeItem = __webpack_require__(72);

        var _TreeItem2 = _interopRequireDefault(_TreeItem);

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            name: 'folder-tree-item',

            props: {
                /**
                 * Tree item instance.
                 */
                item: { type: _TreeItem2.default, required: true }
            },

            computed: {
                /**
                 * Gets page loading state.
                 * @return {Boolean}
                 */
                isLoading: function isLoading() {
                    return this.$store.getters[getters.isLoading];
                },


                /**
                 * State sign indicating to open or close current item tree.
                 * @return {String}
                 */
                stateSign: function stateSign() {
                    return this.isOpen ? '-' : '+';
                },


                /**
                 * Current state path.
                 * @return {String}
                 */
                path: function path() {
                    return this.$store.getters[getters.getPath];
                },


                /**
                 * Classes of link at current state.
                 * @return {String}
                 */
                classes: function classes() {
                    return {
                        disabled: this.isLoading,
                        offset: !this.item.children.length,
                        active: this.item.path === this.path || this.isClosedAndChildActive
                    };
                },


                /**
                 * Determines is this item closed state and some of the children is active.
                 * @return {Boolean}
                 */
                isClosedAndChildActive: function isClosedAndChildActive() {
                    if (!this.item.children.length || this.isOpen) {
                        return false;
                    }

                    return this.isAnyActive(this.item.children);
                }
            },

            data: function data() {
                return {
                    isOpen: false
                };
            },


            methods: {
                /**
                 * Open folder content of current tree item.
                 */
                changePath: function changePath() {
                    this.$store.dispatch(actions.changePath, this.item.path);
                },


                /**
                 * Toggle current tree item open state.
                 */
                toggle: function toggle() {
                    this.isOpen = !this.isOpen;
                },


                /**
                 * Determine is any of children in state of active.
                 * @param {Array.<TreeItem>} children
                 * @returns {Boolean}
                 */
                isAnyActive: function isAnyActive(children) {
                    var _this = this;

                    var isActive = false;

                    children.forEach(function(item) {
                        if (item.path === _this.path) {
                            isActive = true;
                        }

                        if (!isActive && item.children.length > 0 && _this.isAnyActive(item.children)) {
                            isActive = true;
                        }
                    });

                    return isActive;
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 165 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _FileForUpload = __webpack_require__(105);

        var _FileForUpload2 = _interopRequireDefault(_FileForUpload);

        var _mutations = __webpack_require__(27);

        var mutations = _interopRequireWildcard(_mutations);

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        exports.default = {
            name: 'uploads-blob',

            props: {
                file: { type: _FileForUpload2.default, required: true }
            },

            methods: {
                /**
                 * Remove current file from the uploads queue.
                 */
                removeUpload: function removeUpload() {
                    this.$store.commit(mutations.removeUpload, this.file);
                },


                /**
                 * Upload current file to the server.
                 */
                uploadFile: function uploadFile() {
                    this.$store.dispatch(actions.uploadFile, this.file);
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /***/
    }),
    /* 166 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _UploadBlob = __webpack_require__(383);

        var _UploadBlob2 = _interopRequireDefault(_UploadBlob);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'uploads',

            computed: {
                /**
                 * Store uploads queue files.
                 * @return {Array}
                 */
                uploads: function uploads() {
                    return this.$store.getters[getters.getUploads];
                },


                /**
                 * Number of uploads in the queue.
                 * @return {Number}
                 */
                count: function count() {
                    return this.uploads.length;
                }
            },

            components: { blob: _UploadBlob2.default }
        };

        /***/
    }),
    /* 167 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'breadcrumb',

            computed: {
                /**
                 * Calculate breadcrumb items.
                 * @returns {Array}
                 */
                items: function items() {
                    var fullPath = this.$store.getters[getters.getPath];
                    var parts = fullPath.split('/');

                    // Home button at the beginning of the breadcrumb.
                    var result = [{
                        text: 'Home',
                        path: '',
                        isActive: function isActive() {
                            return fullPath === '';
                        }
                    }];

                    parts.forEach(function(part, index) {
                        var path = parts.slice(0, index + 1).join('/');
                        part !== '' && result.push({
                            text: part,
                            path: path,
                            isActive: function isActive() {
                                return path === fullPath;
                            }
                        });
                    });

                    return result;
                }
            },

            methods: {
                /**
                 * Change current location.
                 * @param path
                 */
                changePath: function changePath(path) {
                    this.$store.dispatch(actions.changePath, path);
                }
            }
        };

        /***/
    }),
    /* 168 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _actions = __webpack_require__(11);

        var actions = _interopRequireWildcard(_actions);

        var _getters = __webpack_require__(7);

        var getters = _interopRequireWildcard(_getters);

        var _settings = __webpack_require__(13);

        var _settings2 = _interopRequireDefault(_settings);

        var _Breadcrumb = __webpack_require__(385);

        var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) { return obj; } else {
                var newObj = {};
                if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } }
                newObj.default = obj;
                return newObj;
            }
        }

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        exports.default = {
            name: 'breadcrumb-bar',

            components: { breadcrumb: _Breadcrumb2.default },

            data: function data() {
                return {
                    iconUp: _settings2.default.icon('up'),
                    iconRefresh: _settings2.default.icon('refresh')
                };
            },


            computed: {
                /**
                 * Calculate up path.
                 * @returns {string}
                 */
                up: function up() {
                    return this.$store.getters[getters.getPathUp];
                },


                /**
                 * Determine is the current path same as root.
                 * @returns {boolean}
                 */
                isUpDisabled: function isUpDisabled() {
                    return this.$store.getters[getters.getPath] === '';
                }
            },

            methods: {
                /**
                 * Change current location.
                 * @param path
                 */
                changePath: function changePath(path) {
                    this.$store.dispatch(actions.changePath, path);
                },


                /**
                 * Refresh content of the current location.
                 */
                refreshContent: function refreshContent() {
                    this.$store.dispatch(actions.fetchContent);
                    this.$store.dispatch(actions.fetchTree);
                }
            }
        };

        /***/
    }),
    /* 169 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(178);
        module.exports = __webpack_require__(32).RegExp.escape;

        /***/
    }),
    /* 170 */
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__(4),
            isArray = __webpack_require__(81),
            SPECIES = __webpack_require__(5)('species');

        module.exports = function(original) {
            var C;
            if (isArray(original)) {
                C = original.constructor;
                // cross-realm fallback
                if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                if (isObject(C)) {
                    C = C[SPECIES];
                    if (C === null) C = undefined;
                }
            }
            return C === undefined ? Array : C;
        };

        /***/
    }),
    /* 171 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = __webpack_require__(170);

        module.exports = function(original, length) {
            return new(speciesConstructor(original))(length);
        };

        /***/
    }),
    /* 172 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var anObject = __webpack_require__(1),
            toPrimitive = __webpack_require__(30),
            NUMBER = 'number';

        module.exports = function(hint) {
            if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
            return toPrimitive(anObject(this), hint != NUMBER);
        };

        /***/
    }),
    /* 173 */
    /***/
    (function(module, exports, __webpack_require__) {

        // all enumerable object keys, includes symbols
        var getKeys = __webpack_require__(45),
            gOPS = __webpack_require__(69),
            pIE = __webpack_require__(58);
        module.exports = function(it) {
            var result = getKeys(it),
                getSymbols = gOPS.f;
            if (getSymbols) {
                var symbols = getSymbols(it),
                    isEnum = pIE.f,
                    i = 0,
                    key;
                while (symbols.length > i)
                    if (isEnum.call(it, key = symbols[i++])) result.push(key);
            }
            return result;
        };

        /***/
    }),
    /* 174 */
    /***/
    (function(module, exports, __webpack_require__) {

        var getKeys = __webpack_require__(45),
            toIObject = __webpack_require__(19);
        module.exports = function(object, el) {
            var O = toIObject(object),
                keys = getKeys(O),
                length = keys.length,
                index = 0,
                key;
            while (length > index)
                if (O[key = keys[index++]] === el) return key;
        };

        /***/
    }),
    /* 175 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var path = __webpack_require__(176),
            invoke = __webpack_require__(65),
            aFunction = __webpack_require__(15);
        module.exports = function( /* ...pargs */ ) {
            var fn = aFunction(this),
                length = arguments.length,
                pargs = Array(length),
                i = 0,
                _ = path._,
                holder = false;
            while (length > i)
                if ((pargs[i] = arguments[i++]) === _) holder = true;
            return function( /* ...args */ ) {
                var that = this,
                    aLen = arguments.length,
                    j = 0,
                    k = 0,
                    args;
                if (!holder && !aLen) return invoke(fn, pargs, that);
                args = pargs.slice();
                if (holder)
                    for (; length > j; j++)
                        if (args[j] === _) args[j] = arguments[k++];
                while (aLen > k) args.push(arguments[k++]);
                return invoke(fn, args, that);
            };
        };

        /***/
    }),
    /* 176 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(2);

        /***/
    }),
    /* 177 */
    /***/
    (function(module, exports) {

        module.exports = function(regExp, replace) {
            var replacer = replace === Object(replace) ? function(part) {
                return replace[part];
            } : replace;
            return function(it) {
                return String(it).replace(regExp, replacer);
            };
        };

        /***/
    }),
    /* 178 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/benjamingr/RexExp.escape
        var $export = __webpack_require__(0),
            $re = __webpack_require__(177)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

        $export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


        /***/
    }),
    /* 179 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
        var $export = __webpack_require__(0);

        $export($export.P, 'Array', { copyWithin: __webpack_require__(107) });

        __webpack_require__(51)('copyWithin');

        /***/
    }),
    /* 180 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $every = __webpack_require__(28)(4);

        $export($export.P + $export.F * !__webpack_require__(26)([].every, true), 'Array', {
            // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
            every: function every(callbackfn /* , thisArg */ ) {
                return $every(this, callbackfn, arguments[1]);
            }
        });

        /***/
    }),
    /* 181 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
        var $export = __webpack_require__(0);

        $export($export.P, 'Array', { fill: __webpack_require__(73) });

        __webpack_require__(51)('fill');

        /***/
    }),
    /* 182 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $filter = __webpack_require__(28)(2);

        $export($export.P + $export.F * !__webpack_require__(26)([].filter, true), 'Array', {
            // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
            filter: function filter(callbackfn /* , thisArg */ ) {
                return $filter(this, callbackfn, arguments[1]);
            }
        });

        /***/
    }),
    /* 183 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
        var $export = __webpack_require__(0),
            $find = __webpack_require__(28)(6),
            KEY = 'findIndex',
            forced = true;
        // Shouldn't skip holes
        if (KEY in []) Array(1)[KEY](function() { forced = false; });
        $export($export.P + $export.F * forced, 'Array', {
            findIndex: function findIndex(callbackfn /*, that = undefined */ ) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        __webpack_require__(51)(KEY);

        /***/
    }),
    /* 184 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
        var $export = __webpack_require__(0),
            $find = __webpack_require__(28)(5),
            KEY = 'find',
            forced = true;
        // Shouldn't skip holes
        if (KEY in []) Array(1)[KEY](function() { forced = false; });
        $export($export.P + $export.F * forced, 'Array', {
            find: function find(callbackfn /*, that = undefined */ ) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        __webpack_require__(51)(KEY);

        /***/
    }),
    /* 185 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $forEach = __webpack_require__(28)(0),
            STRICT = __webpack_require__(26)([].forEach, true);

        $export($export.P + $export.F * !STRICT, 'Array', {
            // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
            forEach: function forEach(callbackfn /* , thisArg */ ) {
                return $forEach(this, callbackfn, arguments[1]);
            }
        });

        /***/
    }),
    /* 186 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var ctx = __webpack_require__(33),
            $export = __webpack_require__(0),
            toObject = __webpack_require__(12),
            call = __webpack_require__(116),
            isArrayIter = __webpack_require__(80),
            toLength = __webpack_require__(10),
            createProperty = __webpack_require__(74),
            getIterFn = __webpack_require__(97);

        $export($export.S + $export.F * !__webpack_require__(67)(function(iter) { Array.from(iter); }), 'Array', {
            // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
            from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/ ) {
                var O = toObject(arrayLike),
                    C = typeof this == 'function' ? this : Array,
                    aLen = arguments.length,
                    mapfn = aLen > 1 ? arguments[1] : undefined,
                    mapping = mapfn !== undefined,
                    index = 0,
                    iterFn = getIterFn(O),
                    length, result, step, iterator;
                if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                // if object isn't iterable or it's array with default iterator - use simple case
                if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                    for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
                        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                    }
                } else {
                    length = toLength(O.length);
                    for (result = new C(length); length > index; index++) {
                        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                    }
                }
                result.length = index;
                return result;
            }
        });


        /***/
    }),
    /* 187 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $indexOf = __webpack_require__(61)(false),
            $native = [].indexOf,
            NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

        $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(26)($native)), 'Array', {
            // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
            indexOf: function indexOf(searchElement /*, fromIndex = 0 */ ) {
                return NEGATIVE_ZERO
                    // convert -0 to +0
                    ?
                    $native.apply(this, arguments) || 0 :
                    $indexOf(this, searchElement, arguments[1]);
            }
        });

        /***/
    }),
    /* 188 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
        var $export = __webpack_require__(0);

        $export($export.S, 'Array', { isArray: __webpack_require__(81) });

        /***/
    }),
    /* 189 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 22.1.3.13 Array.prototype.join(separator)
        var $export = __webpack_require__(0),
            toIObject = __webpack_require__(19),
            arrayJoin = [].join;

        // fallback for not array-like strings
        $export($export.P + $export.F * (__webpack_require__(57) != Object || !__webpack_require__(26)(arrayJoin)), 'Array', {
            join: function join(separator) {
                return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
            }
        });

        /***/
    }),
    /* 190 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            toIObject = __webpack_require__(19),
            toInteger = __webpack_require__(38),
            toLength = __webpack_require__(10),
            $native = [].lastIndexOf,
            NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

        $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(26)($native)), 'Array', {
            // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
            lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */ ) {
                // convert -0 to +0
                if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
                var O = toIObject(this),
                    length = toLength(O.length),
                    index = length - 1;
                if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
                if (index < 0) index = length + index;
                for (; index >= 0; index--)
                    if (index in O)
                        if (O[index] === searchElement) return index || 0;
                return -1;
            }
        });

        /***/
    }),
    /* 191 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $map = __webpack_require__(28)(1);

        $export($export.P + $export.F * !__webpack_require__(26)([].map, true), 'Array', {
            // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
            map: function map(callbackfn /* , thisArg */ ) {
                return $map(this, callbackfn, arguments[1]);
            }
        });

        /***/
    }),
    /* 192 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            createProperty = __webpack_require__(74);

        // WebKit Array.of isn't generic
        $export($export.S + $export.F * __webpack_require__(3)(function() {
            function F() {}
            return !(Array.of.call(F) instanceof F);
        }), 'Array', {
            // 22.1.2.3 Array.of( ...items)
            of: function of( /* ...args */ ) {
                var index = 0,
                    aLen = arguments.length,
                    result = new(typeof this == 'function' ? this : Array)(aLen);
                while (aLen > index) createProperty(result, index, arguments[index++]);
                result.length = aLen;
                return result;
            }
        });

        /***/
    }),
    /* 193 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $reduce = __webpack_require__(109);

        $export($export.P + $export.F * !__webpack_require__(26)([].reduceRight, true), 'Array', {
            // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
            reduceRight: function reduceRight(callbackfn /* , initialValue */ ) {
                return $reduce(this, callbackfn, arguments.length, arguments[1], true);
            }
        });

        /***/
    }),
    /* 194 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $reduce = __webpack_require__(109);

        $export($export.P + $export.F * !__webpack_require__(26)([].reduce, true), 'Array', {
            // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
            reduce: function reduce(callbackfn /* , initialValue */ ) {
                return $reduce(this, callbackfn, arguments.length, arguments[1], false);
            }
        });

        /***/
    }),
    /* 195 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            html = __webpack_require__(78),
            cof = __webpack_require__(24),
            toIndex = __webpack_require__(48),
            toLength = __webpack_require__(10),
            arraySlice = [].slice;

        // fallback for not array-like ES3 strings and DOM objects
        $export($export.P + $export.F * __webpack_require__(3)(function() {
            if (html) arraySlice.call(html);
        }), 'Array', {
            slice: function slice(begin, end) {
                var len = toLength(this.length),
                    klass = cof(this);
                end = end === undefined ? len : end;
                if (klass == 'Array') return arraySlice.call(this, begin, end);
                var start = toIndex(begin, len),
                    upTo = toIndex(end, len),
                    size = toLength(upTo - start),
                    cloned = Array(size),
                    i = 0;
                for (; i < size; i++) cloned[i] = klass == 'String' ?
                    this.charAt(start + i) :
                    this[start + i];
                return cloned;
            }
        });

        /***/
    }),
    /* 196 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $some = __webpack_require__(28)(3);

        $export($export.P + $export.F * !__webpack_require__(26)([].some, true), 'Array', {
            // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
            some: function some(callbackfn /* , thisArg */ ) {
                return $some(this, callbackfn, arguments[1]);
            }
        });

        /***/
    }),
    /* 197 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            aFunction = __webpack_require__(15),
            toObject = __webpack_require__(12),
            fails = __webpack_require__(3),
            $sort = [].sort,
            test = [1, 2, 3];

        $export($export.P + $export.F * (fails(function() {
            // IE8-
            test.sort(undefined);
        }) || !fails(function() {
            // V8 bug
            test.sort(null);
            // Old WebKit
        }) || !__webpack_require__(26)($sort)), 'Array', {
            // 22.1.3.25 Array.prototype.sort(comparefn)
            sort: function sort(comparefn) {
                return comparefn === undefined ?
                    $sort.call(toObject(this)) :
                    $sort.call(toObject(this), aFunction(comparefn));
            }
        });

        /***/
    }),
    /* 198 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(47)('Array');

        /***/
    }),
    /* 199 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.3.3.1 / 15.9.4.4 Date.now()
        var $export = __webpack_require__(0);

        $export($export.S, 'Date', { now: function() { return new Date().getTime(); } });

        /***/
    }),
    /* 200 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
        var $export = __webpack_require__(0),
            fails = __webpack_require__(3),
            getTime = Date.prototype.getTime;

        var lz = function(num) {
            return num > 9 ? num : '0' + num;
        };

        // PhantomJS / old WebKit has a broken implementations
        $export($export.P + $export.F * (fails(function() {
            return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
        }) || !fails(function() {
            new Date(NaN).toISOString();
        })), 'Date', {
            toISOString: function toISOString() {
                if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
                var d = this,
                    y = d.getUTCFullYear(),
                    m = d.getUTCMilliseconds(),
                    s = y < 0 ? '-' : y > 9999 ? '+' : '';
                return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
                    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
                    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
                    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
            }
        });

        /***/
    }),
    /* 201 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            toObject = __webpack_require__(12),
            toPrimitive = __webpack_require__(30);

        $export($export.P + $export.F * __webpack_require__(3)(function() {
            return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() { return 1; } }) !== 1;
        }), 'Date', {
            toJSON: function toJSON(key) {
                var O = toObject(this),
                    pv = toPrimitive(O);
                return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
            }
        });

        /***/
    }),
    /* 202 */
    /***/
    (function(module, exports, __webpack_require__) {

        var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive'),
            proto = Date.prototype;

        if (!(TO_PRIMITIVE in proto)) __webpack_require__(16)(proto, TO_PRIMITIVE, __webpack_require__(172));

        /***/
    }),
    /* 203 */
    /***/
    (function(module, exports, __webpack_require__) {

        var DateProto = Date.prototype,
            INVALID_DATE = 'Invalid Date',
            TO_STRING = 'toString',
            $toString = DateProto[TO_STRING],
            getTime = DateProto.getTime;
        if (new Date(NaN) + '' != INVALID_DATE) {
            __webpack_require__(17)(DateProto, TO_STRING, function toString() {
                var value = getTime.call(this);
                return value === value ? $toString.call(this) : INVALID_DATE;
            });
        }

        /***/
    }),
    /* 204 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
        var $export = __webpack_require__(0);

        $export($export.P, 'Function', { bind: __webpack_require__(110) });

        /***/
    }),
    /* 205 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var isObject = __webpack_require__(4),
            getPrototypeOf = __webpack_require__(23),
            HAS_INSTANCE = __webpack_require__(5)('hasInstance'),
            FunctionProto = Function.prototype;
        // 19.2.3.6 Function.prototype[@@hasInstance](V)
        if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(9).f(FunctionProto, HAS_INSTANCE, {
            value: function(O) {
                if (typeof this != 'function' || !isObject(O)) return false;
                if (!isObject(this.prototype)) return O instanceof this;
                // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
                while (O = getPrototypeOf(O))
                    if (this.prototype === O) return true;
                return false;
            }
        });

        /***/
    }),
    /* 206 */
    /***/
    (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__(9).f,
            createDesc = __webpack_require__(37),
            has = __webpack_require__(14),
            FProto = Function.prototype,
            nameRE = /^\s*function ([^ (]*)/,
            NAME = 'name';

        var isExtensible = Object.isExtensible || function() {
            return true;
        };

        // 19.2.4.2 name
        NAME in FProto || __webpack_require__(8) && dP(FProto, NAME, {
            configurable: true,
            get: function() {
                try {
                    var that = this,
                        name = ('' + that).match(nameRE)[1];
                    has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
                    return name;
                } catch (e) {
                    return '';
                }
            }
        });

        /***/
    }),
    /* 207 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.3 Math.acosh(x)
        var $export = __webpack_require__(0),
            log1p = __webpack_require__(118),
            sqrt = Math.sqrt,
            $acosh = Math.acosh;

        $export($export.S + $export.F * !($acosh
            // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
            &&
            Math.floor($acosh(Number.MAX_VALUE)) == 710
            // Tor Browser bug: Math.acosh(Infinity) -> NaN 
            &&
            $acosh(Infinity) == Infinity
        ), 'Math', {
            acosh: function acosh(x) {
                return (x = +x) < 1 ? NaN : x > 94906265.62425156 ?
                    Math.log(x) + Math.LN2 :
                    log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
            }
        });

        /***/
    }),
    /* 208 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.5 Math.asinh(x)
        var $export = __webpack_require__(0),
            $asinh = Math.asinh;

        function asinh(x) {
            return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
        }

        // Tor Browser bug: Math.asinh(0) -> -0 
        $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

        /***/
    }),
    /* 209 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.7 Math.atanh(x)
        var $export = __webpack_require__(0),
            $atanh = Math.atanh;

        // Tor Browser bug: Math.atanh(-0) -> 0 
        $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
            atanh: function atanh(x) {
                return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
            }
        });

        /***/
    }),
    /* 210 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.9 Math.cbrt(x)
        var $export = __webpack_require__(0),
            sign = __webpack_require__(85);

        $export($export.S, 'Math', {
            cbrt: function cbrt(x) {
                return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
            }
        });

        /***/
    }),
    /* 211 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.11 Math.clz32(x)
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', {
            clz32: function clz32(x) {
                return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
            }
        });

        /***/
    }),
    /* 212 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.12 Math.cosh(x)
        var $export = __webpack_require__(0),
            exp = Math.exp;

        $export($export.S, 'Math', {
            cosh: function cosh(x) {
                return (exp(x = +x) + exp(-x)) / 2;
            }
        });

        /***/
    }),
    /* 213 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.14 Math.expm1(x)
        var $export = __webpack_require__(0),
            $expm1 = __webpack_require__(84);

        $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

        /***/
    }),
    /* 214 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.16 Math.fround(x)
        var $export = __webpack_require__(0),
            sign = __webpack_require__(85),
            pow = Math.pow,
            EPSILON = pow(2, -52),
            EPSILON32 = pow(2, -23),
            MAX32 = pow(2, 127) * (2 - EPSILON32),
            MIN32 = pow(2, -126);

        var roundTiesToEven = function(n) {
            return n + 1 / EPSILON - 1 / EPSILON;
        };


        $export($export.S, 'Math', {
            fround: function fround(x) {
                var $abs = Math.abs(x),
                    $sign = sign(x),
                    a, result;
                if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
                a = (1 + EPSILON32 / EPSILON) * $abs;
                result = a - (a - $abs);
                if (result > MAX32 || result != result) return $sign * Infinity;
                return $sign * result;
            }
        });

        /***/
    }),
    /* 215 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
        var $export = __webpack_require__(0),
            abs = Math.abs;

        $export($export.S, 'Math', {
            hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
                var sum = 0,
                    i = 0,
                    aLen = arguments.length,
                    larg = 0,
                    arg, div;
                while (i < aLen) {
                    arg = abs(arguments[i++]);
                    if (larg < arg) {
                        div = larg / arg;
                        sum = sum * div * div + 1;
                        larg = arg;
                    } else if (arg > 0) {
                        div = arg / larg;
                        sum += div * div;
                    } else sum += arg;
                }
                return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
            }
        });

        /***/
    }),
    /* 216 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.18 Math.imul(x, y)
        var $export = __webpack_require__(0),
            $imul = Math.imul;

        // some WebKit versions fails with big numbers, some has wrong arity
        $export($export.S + $export.F * __webpack_require__(3)(function() {
            return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
        }), 'Math', {
            imul: function imul(x, y) {
                var UINT16 = 0xffff,
                    xn = +x,
                    yn = +y,
                    xl = UINT16 & xn,
                    yl = UINT16 & yn;
                return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
            }
        });

        /***/
    }),
    /* 217 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.21 Math.log10(x)
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', {
            log10: function log10(x) {
                return Math.log(x) / Math.LN10;
            }
        });

        /***/
    }),
    /* 218 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.20 Math.log1p(x)
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', { log1p: __webpack_require__(118) });

        /***/
    }),
    /* 219 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.22 Math.log2(x)
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', {
            log2: function log2(x) {
                return Math.log(x) / Math.LN2;
            }
        });

        /***/
    }),
    /* 220 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.28 Math.sign(x)
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', { sign: __webpack_require__(85) });

        /***/
    }),
    /* 221 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.30 Math.sinh(x)
        var $export = __webpack_require__(0),
            expm1 = __webpack_require__(84),
            exp = Math.exp;

        // V8 near Chromium 38 has a problem with very small numbers
        $export($export.S + $export.F * __webpack_require__(3)(function() {
            return !Math.sinh(-2e-17) != -2e-17;
        }), 'Math', {
            sinh: function sinh(x) {
                return Math.abs(x = +x) < 1 ?
                    (expm1(x) - expm1(-x)) / 2 :
                    (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
            }
        });

        /***/
    }),
    /* 222 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.33 Math.tanh(x)
        var $export = __webpack_require__(0),
            expm1 = __webpack_require__(84),
            exp = Math.exp;

        $export($export.S, 'Math', {
            tanh: function tanh(x) {
                var a = expm1(x = +x),
                    b = expm1(-x);
                return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
            }
        });

        /***/
    }),
    /* 223 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.34 Math.trunc(x)
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', {
            trunc: function trunc(it) {
                return (it > 0 ? Math.floor : Math.ceil)(it);
            }
        });

        /***/
    }),
    /* 224 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__(2),
            has = __webpack_require__(14),
            cof = __webpack_require__(24),
            inheritIfRequired = __webpack_require__(79),
            toPrimitive = __webpack_require__(30),
            fails = __webpack_require__(3),
            gOPN = __webpack_require__(44).f,
            gOPD = __webpack_require__(22).f,
            dP = __webpack_require__(9).f,
            $trim = __webpack_require__(55).trim,
            NUMBER = 'Number',
            $Number = global[NUMBER],
            Base = $Number,
            proto = $Number.prototype
            // Opera ~12 has broken Object#toString
            ,
            BROKEN_COF = cof(__webpack_require__(43)(proto)) == NUMBER,
            TRIM = 'trim' in String.prototype;

        // 7.1.3 ToNumber(argument)
        var toNumber = function(argument) {
            var it = toPrimitive(argument, false);
            if (typeof it == 'string' && it.length > 2) {
                it = TRIM ? it.trim() : $trim(it, 3);
                var first = it.charCodeAt(0),
                    third, radix, maxCode;
                if (first === 43 || first === 45) {
                    third = it.charCodeAt(2);
                    if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
                } else if (first === 48) {
                    switch (it.charCodeAt(1)) {
                        case 66:
                        case 98:
                            radix = 2;
                            maxCode = 49;
                            break; // fast equal /^0b[01]+$/i
                        case 79:
                        case 111:
                            radix = 8;
                            maxCode = 55;
                            break; // fast equal /^0o[0-7]+$/i
                        default:
                            return +it;
                    }
                    for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                        code = digits.charCodeAt(i);
                        // parseInt parses a string to a first unavailable symbol
                        // but ToNumber should return NaN if a string contains unavailable symbols
                        if (code < 48 || code > maxCode) return NaN;
                    }
                    return parseInt(digits, radix);
                }
            }
            return +it;
        };

        if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
            $Number = function Number(value) {
                var it = arguments.length < 1 ? 0 : value,
                    that = this;
                return that instanceof $Number
                    // check on 1..constructor(foo) case
                    &&
                    (BROKEN_COF ? fails(function() { proto.valueOf.call(that); }) : cof(that) != NUMBER) ?
                    inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
            };
            for (var keys = __webpack_require__(8) ? gOPN(Base) : (
                    // ES3:
                    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
                    // ES6 (in case, if modules with ES6 Number statics required before):
                    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
                ).split(','), j = 0, key; keys.length > j; j++) {
                if (has(Base, key = keys[j]) && !has($Number, key)) {
                    dP($Number, key, gOPD(Base, key));
                }
            }
            $Number.prototype = proto;
            proto.constructor = $Number;
            __webpack_require__(17)(global, NUMBER, $Number);
        }

        /***/
    }),
    /* 225 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.1 Number.EPSILON
        var $export = __webpack_require__(0);

        $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

        /***/
    }),
    /* 226 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.2 Number.isFinite(number)
        var $export = __webpack_require__(0),
            _isFinite = __webpack_require__(2).isFinite;

        $export($export.S, 'Number', {
            isFinite: function isFinite(it) {
                return typeof it == 'number' && _isFinite(it);
            }
        });

        /***/
    }),
    /* 227 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.3 Number.isInteger(number)
        var $export = __webpack_require__(0);

        $export($export.S, 'Number', { isInteger: __webpack_require__(115) });

        /***/
    }),
    /* 228 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.4 Number.isNaN(number)
        var $export = __webpack_require__(0);

        $export($export.S, 'Number', {
            isNaN: function isNaN(number) {
                return number != number;
            }
        });

        /***/
    }),
    /* 229 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.5 Number.isSafeInteger(number)
        var $export = __webpack_require__(0),
            isInteger = __webpack_require__(115),
            abs = Math.abs;

        $export($export.S, 'Number', {
            isSafeInteger: function isSafeInteger(number) {
                return isInteger(number) && abs(number) <= 0x1fffffffffffff;
            }
        });

        /***/
    }),
    /* 230 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.6 Number.MAX_SAFE_INTEGER
        var $export = __webpack_require__(0);

        $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

        /***/
    }),
    /* 231 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.10 Number.MIN_SAFE_INTEGER
        var $export = __webpack_require__(0);

        $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

        /***/
    }),
    /* 232 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            $parseFloat = __webpack_require__(125);
        // 20.1.2.12 Number.parseFloat(string)
        $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

        /***/
    }),
    /* 233 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            $parseInt = __webpack_require__(126);
        // 20.1.2.13 Number.parseInt(string, radix)
        $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

        /***/
    }),
    /* 234 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            toInteger = __webpack_require__(38),
            aNumberValue = __webpack_require__(106),
            repeat = __webpack_require__(92),
            $toFixed = 1..toFixed,
            floor = Math.floor,
            data = [0, 0, 0, 0, 0, 0],
            ERROR = 'Number.toFixed: incorrect invocation!',
            ZERO = '0';

        var multiply = function(n, c) {
            var i = -1,
                c2 = c;
            while (++i < 6) {
                c2 += n * data[i];
                data[i] = c2 % 1e7;
                c2 = floor(c2 / 1e7);
            }
        };
        var divide = function(n) {
            var i = 6,
                c = 0;
            while (--i >= 0) {
                c += data[i];
                data[i] = floor(c / n);
                c = (c % n) * 1e7;
            }
        };
        var numToString = function() {
            var i = 6,
                s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || data[i] !== 0) {
                    var t = String(data[i]);
                    s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
                }
            }
            return s;
        };
        var pow = function(x, n, acc) {
            return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
        };
        var log = function(x) {
            var n = 0,
                x2 = x;
            while (x2 >= 4096) {
                n += 12;
                x2 /= 4096;
            }
            while (x2 >= 2) {
                n += 1;
                x2 /= 2;
            }
            return n;
        };

        $export($export.P + $export.F * (!!$toFixed && (
            0.00008.toFixed(3) !== '0.000' ||
            0.9.toFixed(0) !== '1' ||
            1.255.toFixed(2) !== '1.25' ||
            1000000000000000128..toFixed(0) !== '1000000000000000128'
        ) || !__webpack_require__(3)(function() {
            // V8 ~ Android 4.3-
            $toFixed.call({});
        })), 'Number', {
            toFixed: function toFixed(fractionDigits) {
                var x = aNumberValue(this, ERROR),
                    f = toInteger(fractionDigits),
                    s = '',
                    m = ZERO,
                    e, z, j, k;
                if (f < 0 || f > 20) throw RangeError(ERROR);
                if (x != x) return 'NaN';
                if (x <= -1e21 || x >= 1e21) return String(x);
                if (x < 0) {
                    s = '-';
                    x = -x;
                }
                if (x > 1e-21) {
                    e = log(x * pow(2, 69, 1)) - 69;
                    z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
                    z *= 0x10000000000000;
                    e = 52 - e;
                    if (e > 0) {
                        multiply(0, z);
                        j = f;
                        while (j >= 7) {
                            multiply(1e7, 0);
                            j -= 7;
                        }
                        multiply(pow(10, j, 1), 0);
                        j = e - 1;
                        while (j >= 23) {
                            divide(1 << 23);
                            j -= 23;
                        }
                        divide(1 << j);
                        multiply(1, 1);
                        divide(2);
                        m = numToString();
                    } else {
                        multiply(0, z);
                        multiply(1 << -e, 0);
                        m = numToString() + repeat.call(ZERO, f);
                    }
                }
                if (f > 0) {
                    k = m.length;
                    m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
                } else {
                    m = s + m;
                }
                return m;
            }
        });

        /***/
    }),
    /* 235 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $fails = __webpack_require__(3),
            aNumberValue = __webpack_require__(106),
            $toPrecision = 1..toPrecision;

        $export($export.P + $export.F * ($fails(function() {
            // IE7-
            return $toPrecision.call(1, undefined) !== '1';
        }) || !$fails(function() {
            // V8 ~ Android 4.3-
            $toPrecision.call({});
        })), 'Number', {
            toPrecision: function toPrecision(precision) {
                var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
                return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
            }
        });

        /***/
    }),
    /* 236 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.3.1 Object.assign(target, source)
        var $export = __webpack_require__(0);

        $export($export.S + $export.F, 'Object', { assign: __webpack_require__(119) });

        /***/
    }),
    /* 237 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0)
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        $export($export.S, 'Object', { create: __webpack_require__(43) });

        /***/
    }),
    /* 238 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0);
        // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
        $export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperties: __webpack_require__(120) });

        /***/
    }),
    /* 239 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0);
        // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
        $export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(9).f });

        /***/
    }),
    /* 240 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.5 Object.freeze(O)
        var isObject = __webpack_require__(4),
            meta = __webpack_require__(36).onFreeze;

        __webpack_require__(29)('freeze', function($freeze) {
            return function freeze(it) {
                return $freeze && isObject(it) ? $freeze(meta(it)) : it;
            };
        });

        /***/
    }),
    /* 241 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        var toIObject = __webpack_require__(19),
            $getOwnPropertyDescriptor = __webpack_require__(22).f;

        __webpack_require__(29)('getOwnPropertyDescriptor', function() {
            return function getOwnPropertyDescriptor(it, key) {
                return $getOwnPropertyDescriptor(toIObject(it), key);
            };
        });

        /***/
    }),
    /* 242 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.7 Object.getOwnPropertyNames(O)
        __webpack_require__(29)('getOwnPropertyNames', function() {
            return __webpack_require__(121).f;
        });

        /***/
    }),
    /* 243 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = __webpack_require__(12),
            $getPrototypeOf = __webpack_require__(23);

        __webpack_require__(29)('getPrototypeOf', function() {
            return function getPrototypeOf(it) {
                return $getPrototypeOf(toObject(it));
            };
        });

        /***/
    }),
    /* 244 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.11 Object.isExtensible(O)
        var isObject = __webpack_require__(4);

        __webpack_require__(29)('isExtensible', function($isExtensible) {
            return function isExtensible(it) {
                return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
            };
        });

        /***/
    }),
    /* 245 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.12 Object.isFrozen(O)
        var isObject = __webpack_require__(4);

        __webpack_require__(29)('isFrozen', function($isFrozen) {
            return function isFrozen(it) {
                return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
            };
        });

        /***/
    }),
    /* 246 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.13 Object.isSealed(O)
        var isObject = __webpack_require__(4);

        __webpack_require__(29)('isSealed', function($isSealed) {
            return function isSealed(it) {
                return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
            };
        });

        /***/
    }),
    /* 247 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.3.10 Object.is(value1, value2)
        var $export = __webpack_require__(0);
        $export($export.S, 'Object', { is: __webpack_require__(127) });

        /***/
    }),
    /* 248 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.14 Object.keys(O)
        var toObject = __webpack_require__(12),
            $keys = __webpack_require__(45);

        __webpack_require__(29)('keys', function() {
            return function keys(it) {
                return $keys(toObject(it));
            };
        });

        /***/
    }),
    /* 249 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.15 Object.preventExtensions(O)
        var isObject = __webpack_require__(4),
            meta = __webpack_require__(36).onFreeze;

        __webpack_require__(29)('preventExtensions', function($preventExtensions) {
            return function preventExtensions(it) {
                return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
            };
        });

        /***/
    }),
    /* 250 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.17 Object.seal(O)
        var isObject = __webpack_require__(4),
            meta = __webpack_require__(36).onFreeze;

        __webpack_require__(29)('seal', function($seal) {
            return function seal(it) {
                return $seal && isObject(it) ? $seal(meta(it)) : it;
            };
        });

        /***/
    }),
    /* 251 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.3.19 Object.setPrototypeOf(O, proto)
        var $export = __webpack_require__(0);
        $export($export.S, 'Object', { setPrototypeOf: __webpack_require__(87).set });

        /***/
    }),
    /* 252 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 19.1.3.6 Object.prototype.toString()
        var classof = __webpack_require__(56),
            test = {};
        test[__webpack_require__(5)('toStringTag')] = 'z';
        if (test + '' != '[object z]') {
            __webpack_require__(17)(Object.prototype, 'toString', function toString() {
                return '[object ' + classof(this) + ']';
            }, true);
        }

        /***/
    }),
    /* 253 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            $parseFloat = __webpack_require__(125);
        // 18.2.4 parseFloat(string)
        $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

        /***/
    }),
    /* 254 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            $parseInt = __webpack_require__(126);
        // 18.2.5 parseInt(string, radix)
        $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

        /***/
    }),
    /* 255 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__(42),
            global = __webpack_require__(2),
            ctx = __webpack_require__(33),
            classof = __webpack_require__(56),
            $export = __webpack_require__(0),
            isObject = __webpack_require__(4),
            aFunction = __webpack_require__(15),
            anInstance = __webpack_require__(41),
            forOf = __webpack_require__(52),
            speciesConstructor = __webpack_require__(89),
            task = __webpack_require__(94).set,
            microtask = __webpack_require__(86)(),
            PROMISE = 'Promise',
            TypeError = global.TypeError,
            process = global.process,
            $Promise = global[PROMISE],
            process = global.process,
            isNode = classof(process) == 'process',
            empty = function() { /* empty */ },
            Internal, GenericPromiseCapability, Wrapper;

        var USE_NATIVE = !! function() {
            try {
                // correct subclassing with @@species support
                var promise = $Promise.resolve(1),
                    FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function(exec) { exec(empty, empty); };
                // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
            } catch (e) { /* empty */ }
        }();

        // helpers
        var sameConstructor = function(a, b) {
            // with library wrapper special case
            return a === b || a === $Promise && b === Wrapper;
        };
        var isThenable = function(it) {
            var then;
            return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
        };
        var newPromiseCapability = function(C) {
            return sameConstructor($Promise, C) ?
                new PromiseCapability(C) :
                new GenericPromiseCapability(C);
        };
        var PromiseCapability = GenericPromiseCapability = function(C) {
            var resolve, reject;
            this.promise = new C(function($$resolve, $$reject) {
                if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                resolve = $$resolve;
                reject = $$reject;
            });
            this.resolve = aFunction(resolve);
            this.reject = aFunction(reject);
        };
        var perform = function(exec) {
            try {
                exec();
            } catch (e) {
                return { error: e };
            }
        };
        var notify = function(promise, isReject) {
            if (promise._n) return;
            promise._n = true;
            var chain = promise._c;
            microtask(function() {
                var value = promise._v,
                    ok = promise._s == 1,
                    i = 0;
                var run = function(reaction) {
                    var handler = ok ? reaction.ok : reaction.fail,
                        resolve = reaction.resolve,
                        reject = reaction.reject,
                        domain = reaction.domain,
                        result, then;
                    try {
                        if (handler) {
                            if (!ok) {
                                if (promise._h == 2) onHandleUnhandled(promise);
                                promise._h = 1;
                            }
                            if (handler === true) result = value;
                            else {
                                if (domain) domain.enter();
                                result = handler(value);
                                if (domain) domain.exit();
                            }
                            if (result === reaction.promise) {
                                reject(TypeError('Promise-chain cycle'));
                            } else if (then = isThenable(result)) {
                                then.call(result, resolve, reject);
                            } else resolve(result);
                        } else reject(value);
                    } catch (e) {
                        reject(e);
                    }
                };
                while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
                promise._c = [];
                promise._n = false;
                if (isReject && !promise._h) onUnhandled(promise);
            });
        };
        var onUnhandled = function(promise) {
            task.call(global, function() {
                var value = promise._v,
                    abrupt, handler, console;
                if (isUnhandled(promise)) {
                    abrupt = perform(function() {
                        if (isNode) {
                            process.emit('unhandledRejection', value, promise);
                        } else if (handler = global.onunhandledrejection) {
                            handler({ promise: promise, reason: value });
                        } else if ((console = global.console) && console.error) {
                            console.error('Unhandled promise rejection', value);
                        }
                    });
                    // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                    promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                }
                promise._a = undefined;
                if (abrupt) throw abrupt.error;
            });
        };
        var isUnhandled = function(promise) {
            if (promise._h == 1) return false;
            var chain = promise._a || promise._c,
                i = 0,
                reaction;
            while (chain.length > i) {
                reaction = chain[i++];
                if (reaction.fail || !isUnhandled(reaction.promise)) return false;
            }
            return true;
        };
        var onHandleUnhandled = function(promise) {
            task.call(global, function() {
                var handler;
                if (isNode) {
                    process.emit('rejectionHandled', promise);
                } else if (handler = global.onrejectionhandled) {
                    handler({ promise: promise, reason: promise._v });
                }
            });
        };
        var $reject = function(value) {
            var promise = this;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            promise._v = value;
            promise._s = 2;
            if (!promise._a) promise._a = promise._c.slice();
            notify(promise, true);
        };
        var $resolve = function(value) {
            var promise = this,
                then;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            try {
                if (promise === value) throw TypeError("Promise can't be resolved itself");
                if (then = isThenable(value)) {
                    microtask(function() {
                        var wrapper = { _w: promise, _d: false }; // wrap
                        try {
                            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                        } catch (e) {
                            $reject.call(wrapper, e);
                        }
                    });
                } else {
                    promise._v = value;
                    promise._s = 1;
                    notify(promise, false);
                }
            } catch (e) {
                $reject.call({ _w: promise, _d: false }, e); // wrap
            }
        };

        // constructor polyfill
        if (!USE_NATIVE) {
            // 25.4.3.1 Promise(executor)
            $Promise = function Promise(executor) {
                anInstance(this, $Promise, PROMISE, '_h');
                aFunction(executor);
                Internal.call(this);
                try {
                    executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                } catch (err) {
                    $reject.call(this, err);
                }
            };
            Internal = function Promise(executor) {
                this._c = []; // <- awaiting reactions
                this._a = undefined; // <- checked in isUnhandled reactions
                this._s = 0; // <- state
                this._d = false; // <- done
                this._v = undefined; // <- value
                this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                this._n = false; // <- notify
            };
            Internal.prototype = __webpack_require__(46)($Promise.prototype, {
                // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                then: function then(onFulfilled, onRejected) {
                    var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                    reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                    reaction.fail = typeof onRejected == 'function' && onRejected;
                    reaction.domain = isNode ? process.domain : undefined;
                    this._c.push(reaction);
                    if (this._a) this._a.push(reaction);
                    if (this._s) notify(this, false);
                    return reaction.promise;
                },
                // 25.4.5.1 Promise.prototype.catch(onRejected)
                'catch': function(onRejected) {
                    return this.then(undefined, onRejected);
                }
            });
            PromiseCapability = function() {
                var promise = new Internal;
                this.promise = promise;
                this.resolve = ctx($resolve, promise, 1);
                this.reject = ctx($reject, promise, 1);
            };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
        __webpack_require__(54)($Promise, PROMISE);
        __webpack_require__(47)(PROMISE);
        Wrapper = __webpack_require__(32)[PROMISE];

        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
            // 25.4.4.5 Promise.reject(r)
            reject: function reject(r) {
                var capability = newPromiseCapability(this),
                    $$reject = capability.reject;
                $$reject(r);
                return capability.promise;
            }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
            // 25.4.4.6 Promise.resolve(x)
            resolve: function resolve(x) {
                // instanceof instead of internal slot check because we should fix it without replacement native Promise core
                if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
                var capability = newPromiseCapability(this),
                    $$resolve = capability.resolve;
                $$resolve(x);
                return capability.promise;
            }
        });
        $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(67)(function(iter) {
            $Promise.all(iter)['catch'](empty);
        })), PROMISE, {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
                var C = this,
                    capability = newPromiseCapability(C),
                    resolve = capability.resolve,
                    reject = capability.reject;
                var abrupt = perform(function() {
                    var values = [],
                        index = 0,
                        remaining = 1;
                    forOf(iterable, false, function(promise) {
                        var $index = index++,
                            alreadyCalled = false;
                        values.push(undefined);
                        remaining++;
                        C.resolve(promise).then(function(value) {
                            if (alreadyCalled) return;
                            alreadyCalled = true;
                            values[$index] = value;
                            --remaining || resolve(values);
                        }, reject);
                    });
                    --remaining || resolve(values);
                });
                if (abrupt) reject(abrupt.error);
                return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
                var C = this,
                    capability = newPromiseCapability(C),
                    reject = capability.reject;
                var abrupt = perform(function() {
                    forOf(iterable, false, function(promise) {
                        C.resolve(promise).then(capability.resolve, reject);
                    });
                });
                if (abrupt) reject(abrupt.error);
                return capability.promise;
            }
        });

        /***/
    }),
    /* 256 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
        var $export = __webpack_require__(0),
            aFunction = __webpack_require__(15),
            anObject = __webpack_require__(1),
            rApply = (__webpack_require__(2).Reflect || {}).apply,
            fApply = Function.apply;
        // MS Edge argumentsList argument is optional
        $export($export.S + $export.F * !__webpack_require__(3)(function() {
            rApply(function() {});
        }), 'Reflect', {
            apply: function apply(target, thisArgument, argumentsList) {
                var T = aFunction(target),
                    L = anObject(argumentsList);
                return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
            }
        });

        /***/
    }),
    /* 257 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
        var $export = __webpack_require__(0),
            create = __webpack_require__(43),
            aFunction = __webpack_require__(15),
            anObject = __webpack_require__(1),
            isObject = __webpack_require__(4),
            fails = __webpack_require__(3),
            bind = __webpack_require__(110),
            rConstruct = (__webpack_require__(2).Reflect || {}).construct;

        // MS Edge supports only 2 arguments and argumentsList argument is optional
        // FF Nightly sets third argument as `new.target`, but does not create `this` from it
        var NEW_TARGET_BUG = fails(function() {
            function F() {}
            return !(rConstruct(function() {}, [], F) instanceof F);
        });
        var ARGS_BUG = !fails(function() {
            rConstruct(function() {});
        });

        $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
            construct: function construct(Target, args /*, newTarget*/ ) {
                aFunction(Target);
                anObject(args);
                var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
                if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
                if (Target == newTarget) {
                    // w/o altered newTarget, optimization for 0-4 arguments
                    switch (args.length) {
                        case 0:
                            return new Target;
                        case 1:
                            return new Target(args[0]);
                        case 2:
                            return new Target(args[0], args[1]);
                        case 3:
                            return new Target(args[0], args[1], args[2]);
                        case 4:
                            return new Target(args[0], args[1], args[2], args[3]);
                    }
                    // w/o altered newTarget, lot of arguments case
                    var $args = [null];
                    $args.push.apply($args, args);
                    return new(bind.apply(Target, $args));
                }
                // with altered newTarget, not support built-in constructors
                var proto = newTarget.prototype,
                    instance = create(isObject(proto) ? proto : Object.prototype),
                    result = Function.apply.call(Target, instance, args);
                return isObject(result) ? result : instance;
            }
        });

        /***/
    }),
    /* 258 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
        var dP = __webpack_require__(9),
            $export = __webpack_require__(0),
            anObject = __webpack_require__(1),
            toPrimitive = __webpack_require__(30);

        // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
        $export($export.S + $export.F * __webpack_require__(3)(function() {
            Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
        }), 'Reflect', {
            defineProperty: function defineProperty(target, propertyKey, attributes) {
                anObject(target);
                propertyKey = toPrimitive(propertyKey, true);
                anObject(attributes);
                try {
                    dP.f(target, propertyKey, attributes);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

        /***/
    }),
    /* 259 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.4 Reflect.deleteProperty(target, propertyKey)
        var $export = __webpack_require__(0),
            gOPD = __webpack_require__(22).f,
            anObject = __webpack_require__(1);

        $export($export.S, 'Reflect', {
            deleteProperty: function deleteProperty(target, propertyKey) {
                var desc = gOPD(anObject(target), propertyKey);
                return desc && !desc.configurable ? false : delete target[propertyKey];
            }
        });

        /***/
    }),
    /* 260 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 26.1.5 Reflect.enumerate(target)
        var $export = __webpack_require__(0),
            anObject = __webpack_require__(1);
        var Enumerate = function(iterated) {
            this._t = anObject(iterated); // target
            this._i = 0; // next index
            var keys = this._k = [] // keys
                ,
                key;
            for (key in iterated) keys.push(key);
        };
        __webpack_require__(82)(Enumerate, 'Object', function() {
            var that = this,
                keys = that._k,
                key;
            do {
                if (that._i >= keys.length) return { value: undefined, done: true };
            } while (!((key = keys[that._i++]) in that._t));
            return { value: key, done: false };
        });

        $export($export.S, 'Reflect', {
            enumerate: function enumerate(target) {
                return new Enumerate(target);
            }
        });

        /***/
    }),
    /* 261 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
        var gOPD = __webpack_require__(22),
            $export = __webpack_require__(0),
            anObject = __webpack_require__(1);

        $export($export.S, 'Reflect', {
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
                return gOPD.f(anObject(target), propertyKey);
            }
        });

        /***/
    }),
    /* 262 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.8 Reflect.getPrototypeOf(target)
        var $export = __webpack_require__(0),
            getProto = __webpack_require__(23),
            anObject = __webpack_require__(1);

        $export($export.S, 'Reflect', {
            getPrototypeOf: function getPrototypeOf(target) {
                return getProto(anObject(target));
            }
        });

        /***/
    }),
    /* 263 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.6 Reflect.get(target, propertyKey [, receiver])
        var gOPD = __webpack_require__(22),
            getPrototypeOf = __webpack_require__(23),
            has = __webpack_require__(14),
            $export = __webpack_require__(0),
            isObject = __webpack_require__(4),
            anObject = __webpack_require__(1);

        function get(target, propertyKey /*, receiver*/ ) {
            var receiver = arguments.length < 3 ? target : arguments[2],
                desc, proto;
            if (anObject(target) === receiver) return target[propertyKey];
            if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ?
                desc.value :
                desc.get !== undefined ?
                desc.get.call(receiver) :
                undefined;
            if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
        }

        $export($export.S, 'Reflect', { get: get });

        /***/
    }),
    /* 264 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.9 Reflect.has(target, propertyKey)
        var $export = __webpack_require__(0);

        $export($export.S, 'Reflect', {
            has: function has(target, propertyKey) {
                return propertyKey in target;
            }
        });

        /***/
    }),
    /* 265 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.10 Reflect.isExtensible(target)
        var $export = __webpack_require__(0),
            anObject = __webpack_require__(1),
            $isExtensible = Object.isExtensible;

        $export($export.S, 'Reflect', {
            isExtensible: function isExtensible(target) {
                anObject(target);
                return $isExtensible ? $isExtensible(target) : true;
            }
        });

        /***/
    }),
    /* 266 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.11 Reflect.ownKeys(target)
        var $export = __webpack_require__(0);

        $export($export.S, 'Reflect', { ownKeys: __webpack_require__(124) });

        /***/
    }),
    /* 267 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.12 Reflect.preventExtensions(target)
        var $export = __webpack_require__(0),
            anObject = __webpack_require__(1),
            $preventExtensions = Object.preventExtensions;

        $export($export.S, 'Reflect', {
            preventExtensions: function preventExtensions(target) {
                anObject(target);
                try {
                    if ($preventExtensions) $preventExtensions(target);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

        /***/
    }),
    /* 268 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.14 Reflect.setPrototypeOf(target, proto)
        var $export = __webpack_require__(0),
            setProto = __webpack_require__(87);

        if (setProto) $export($export.S, 'Reflect', {
            setPrototypeOf: function setPrototypeOf(target, proto) {
                setProto.check(target, proto);
                try {
                    setProto.set(target, proto);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

        /***/
    }),
    /* 269 */
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
        var dP = __webpack_require__(9),
            gOPD = __webpack_require__(22),
            getPrototypeOf = __webpack_require__(23),
            has = __webpack_require__(14),
            $export = __webpack_require__(0),
            createDesc = __webpack_require__(37),
            anObject = __webpack_require__(1),
            isObject = __webpack_require__(4);

        function set(target, propertyKey, V /*, receiver*/ ) {
            var receiver = arguments.length < 4 ? target : arguments[3],
                ownDesc = gOPD.f(anObject(target), propertyKey),
                existingDescriptor, proto;
            if (!ownDesc) {
                if (isObject(proto = getPrototypeOf(target))) {
                    return set(proto, propertyKey, V, receiver);
                }
                ownDesc = createDesc(0);
            }
            if (has(ownDesc, 'value')) {
                if (ownDesc.writable === false || !isObject(receiver)) return false;
                existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
                existingDescriptor.value = V;
                dP.f(receiver, propertyKey, existingDescriptor);
                return true;
            }
            return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
        }

        $export($export.S, 'Reflect', { set: set });

        /***/
    }),
    /* 270 */
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__(2),
            inheritIfRequired = __webpack_require__(79),
            dP = __webpack_require__(9).f,
            gOPN = __webpack_require__(44).f,
            isRegExp = __webpack_require__(66),
            $flags = __webpack_require__(64),
            $RegExp = global.RegExp,
            Base = $RegExp,
            proto = $RegExp.prototype,
            re1 = /a/g,
            re2 = /a/g
            // "new" creates a new object, old webkit buggy here
            ,
            CORRECT_NEW = new $RegExp(re1) !== re1;

        if (__webpack_require__(8) && (!CORRECT_NEW || __webpack_require__(3)(function() {
                re2[__webpack_require__(5)('match')] = false;
                // RegExp constructor can alter flags and IsRegExp works correct with @@match
                return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
            }))) {
            $RegExp = function RegExp(p, f) {
                var tiRE = this instanceof $RegExp,
                    piRE = isRegExp(p),
                    fiU = f === undefined;
                return !tiRE && piRE && p.constructor === $RegExp && fiU ? p :
                    inheritIfRequired(CORRECT_NEW ?
                        new Base(piRE && !fiU ? p.source : p, f) :
                        Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
            };
            var proxy = function(key) {
                key in $RegExp || dP($RegExp, key, {
                    configurable: true,
                    get: function() { return Base[key]; },
                    set: function(it) { Base[key] = it; }
                });
            };
            for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
            proto.constructor = $RegExp;
            $RegExp.prototype = proto;
            __webpack_require__(17)(global, 'RegExp', $RegExp);
        }

        __webpack_require__(47)('RegExp');

        /***/
    }),
    /* 271 */
    /***/
    (function(module, exports, __webpack_require__) {

        // @@match logic
        __webpack_require__(63)('match', 1, function(defined, MATCH, $match) {
            // 21.1.3.11 String.prototype.match(regexp)
            return [function match(regexp) {
                'use strict';
                var O = defined(this),
                    fn = regexp == undefined ? undefined : regexp[MATCH];
                return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
            }, $match];
        });

        /***/
    }),
    /* 272 */
    /***/
    (function(module, exports, __webpack_require__) {

        // @@replace logic
        __webpack_require__(63)('replace', 2, function(defined, REPLACE, $replace) {
            // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
            return [function replace(searchValue, replaceValue) {
                'use strict';
                var O = defined(this),
                    fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                return fn !== undefined ?
                    fn.call(searchValue, O, replaceValue) :
                    $replace.call(String(O), searchValue, replaceValue);
            }, $replace];
        });

        /***/
    }),
    /* 273 */
    /***/
    (function(module, exports, __webpack_require__) {

        // @@search logic
        __webpack_require__(63)('search', 1, function(defined, SEARCH, $search) {
            // 21.1.3.15 String.prototype.search(regexp)
            return [function search(regexp) {
                'use strict';
                var O = defined(this),
                    fn = regexp == undefined ? undefined : regexp[SEARCH];
                return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
            }, $search];
        });

        /***/
    }),
    /* 274 */
    /***/
    (function(module, exports, __webpack_require__) {

        // @@split logic
        __webpack_require__(63)('split', 2, function(defined, SPLIT, $split) {
            'use strict';
            var isRegExp = __webpack_require__(66),
                _split = $split,
                $push = [].push,
                $SPLIT = 'split',
                LENGTH = 'length',
                LAST_INDEX = 'lastIndex';
            if (
                'abbc' [$SPLIT](/(b)*/)[1] == 'c' ||
                'test' [$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
                'ab' [$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
                '.' [$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
                '.' [$SPLIT](/()()/)[LENGTH] > 1 ||
                '' [$SPLIT](/.?/)[LENGTH]
            ) {
                var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
                // based on es5-shim implementation, need to rework it
                $split = function(separator, limit) {
                    var string = String(this);
                    if (separator === undefined && limit === 0) return [];
                    // If `separator` is not a regex, use native split
                    if (!isRegExp(separator)) return _split.call(string, separator, limit);
                    var output = [];
                    var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') +
                        (separator.sticky ? 'y' : '');
                    var lastLastIndex = 0;
                    var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    var separatorCopy = new RegExp(separator.source, flags + 'g');
                    var separator2, match, lastIndex, lastLength, i;
                    // Doesn't need flags gy, but they don't hurt
                    if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
                    while (match = separatorCopy.exec(string)) {
                        // `separatorCopy.lastIndex` is not reliable cross-browser
                        lastIndex = match.index + match[0][LENGTH];
                        if (lastIndex > lastLastIndex) {
                            output.push(string.slice(lastLastIndex, match.index));
                            // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
                            if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function() {
                                for (i = 1; i < arguments[LENGTH] - 2; i++)
                                    if (arguments[i] === undefined) match[i] = undefined;
                            });
                            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                            lastLength = match[0][LENGTH];
                            lastLastIndex = lastIndex;
                            if (output[LENGTH] >= splitLimit) break;
                        }
                        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                    }
                    if (lastLastIndex === string[LENGTH]) {
                        if (lastLength || !separatorCopy.test('')) output.push('');
                    } else output.push(string.slice(lastLastIndex));
                    return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                };
                // Chakra, V8
            } else if ('0' [$SPLIT](undefined, 0)[LENGTH]) {
                $split = function(separator, limit) {
                    return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
                };
            }
            // 21.1.3.17 String.prototype.split(separator, limit)
            return [function split(separator, limit) {
                var O = defined(this),
                    fn = separator == undefined ? undefined : separator[SPLIT];
                return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
            }, $split];
        });

        /***/
    }),
    /* 275 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        __webpack_require__(131);
        var anObject = __webpack_require__(1),
            $flags = __webpack_require__(64),
            DESCRIPTORS = __webpack_require__(8),
            TO_STRING = 'toString',
            $toString = /./ [TO_STRING];

        var define = function(fn) {
            __webpack_require__(17)(RegExp.prototype, TO_STRING, fn, true);
        };

        // 21.2.5.14 RegExp.prototype.toString()
        if (__webpack_require__(3)(function() { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
            define(function toString() {
                var R = anObject(this);
                return '/'.concat(R.source, '/',
                    'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
            });
            // FF44- RegExp#toString has a wrong name
        } else if ($toString.name != TO_STRING) {
            define(function toString() {
                return $toString.call(this);
            });
        }

        /***/
    }),
    /* 276 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.2 String.prototype.anchor(name)
        __webpack_require__(18)('anchor', function(createHTML) {
            return function anchor(name) {
                return createHTML(this, 'a', 'name', name);
            }
        });

        /***/
    }),
    /* 277 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.3 String.prototype.big()
        __webpack_require__(18)('big', function(createHTML) {
            return function big() {
                return createHTML(this, 'big', '', '');
            }
        });

        /***/
    }),
    /* 278 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.4 String.prototype.blink()
        __webpack_require__(18)('blink', function(createHTML) {
            return function blink() {
                return createHTML(this, 'blink', '', '');
            }
        });

        /***/
    }),
    /* 279 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.5 String.prototype.bold()
        __webpack_require__(18)('bold', function(createHTML) {
            return function bold() {
                return createHTML(this, 'b', '', '');
            }
        });

        /***/
    }),
    /* 280 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $at = __webpack_require__(90)(false);
        $export($export.P, 'String', {
            // 21.1.3.3 String.prototype.codePointAt(pos)
            codePointAt: function codePointAt(pos) {
                return $at(this, pos);
            }
        });

        /***/
    }),
    /* 281 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

        var $export = __webpack_require__(0),
            toLength = __webpack_require__(10),
            context = __webpack_require__(91),
            ENDS_WITH = 'endsWith',
            $endsWith = '' [ENDS_WITH];

        $export($export.P + $export.F * __webpack_require__(77)(ENDS_WITH), 'String', {
            endsWith: function endsWith(searchString /*, endPosition = @length */ ) {
                var that = context(this, searchString, ENDS_WITH),
                    endPosition = arguments.length > 1 ? arguments[1] : undefined,
                    len = toLength(that.length),
                    end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
                    search = String(searchString);
                return $endsWith ?
                    $endsWith.call(that, search, end) :
                    that.slice(end - search.length, end) === search;
            }
        });

        /***/
    }),
    /* 282 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.6 String.prototype.fixed()
        __webpack_require__(18)('fixed', function(createHTML) {
            return function fixed() {
                return createHTML(this, 'tt', '', '');
            }
        });

        /***/
    }),
    /* 283 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.7 String.prototype.fontcolor(color)
        __webpack_require__(18)('fontcolor', function(createHTML) {
            return function fontcolor(color) {
                return createHTML(this, 'font', 'color', color);
            }
        });

        /***/
    }),
    /* 284 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.8 String.prototype.fontsize(size)
        __webpack_require__(18)('fontsize', function(createHTML) {
            return function fontsize(size) {
                return createHTML(this, 'font', 'size', size);
            }
        });

        /***/
    }),
    /* 285 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            toIndex = __webpack_require__(48),
            fromCharCode = String.fromCharCode,
            $fromCodePoint = String.fromCodePoint;

        // length should be 1, old FF problem
        $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
            // 21.1.2.2 String.fromCodePoint(...codePoints)
            fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
                var res = [],
                    aLen = arguments.length,
                    i = 0,
                    code;
                while (aLen > i) {
                    code = +arguments[i++];
                    if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
                    res.push(code < 0x10000 ?
                        fromCharCode(code) :
                        fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
                    );
                }
                return res.join('');
            }
        });

        /***/
    }),
    /* 286 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 21.1.3.7 String.prototype.includes(searchString, position = 0)

        var $export = __webpack_require__(0),
            context = __webpack_require__(91),
            INCLUDES = 'includes';

        $export($export.P + $export.F * __webpack_require__(77)(INCLUDES), 'String', {
            includes: function includes(searchString /*, position = 0 */ ) {
                return !!~context(this, searchString, INCLUDES)
                    .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
            }
        });

        /***/
    }),
    /* 287 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.9 String.prototype.italics()
        __webpack_require__(18)('italics', function(createHTML) {
            return function italics() {
                return createHTML(this, 'i', '', '');
            }
        });

        /***/
    }),
    /* 288 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $at = __webpack_require__(90)(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(83)(String, 'String', function(iterated) {
            this._t = String(iterated); // target
            this._i = 0; // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function() {
            var O = this._t,
                index = this._i,
                point;
            if (index >= O.length) return { value: undefined, done: true };
            point = $at(O, index);
            this._i += point.length;
            return { value: point, done: false };
        });

        /***/
    }),
    /* 289 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.10 String.prototype.link(url)
        __webpack_require__(18)('link', function(createHTML) {
            return function link(url) {
                return createHTML(this, 'a', 'href', url);
            }
        });

        /***/
    }),
    /* 290 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            toIObject = __webpack_require__(19),
            toLength = __webpack_require__(10);

        $export($export.S, 'String', {
            // 21.1.2.4 String.raw(callSite, ...substitutions)
            raw: function raw(callSite) {
                var tpl = toIObject(callSite.raw),
                    len = toLength(tpl.length),
                    aLen = arguments.length,
                    res = [],
                    i = 0;
                while (len > i) {
                    res.push(String(tpl[i++]));
                    if (i < aLen) res.push(String(arguments[i]));
                }
                return res.join('');
            }
        });

        /***/
    }),
    /* 291 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0);

        $export($export.P, 'String', {
            // 21.1.3.13 String.prototype.repeat(count)
            repeat: __webpack_require__(92)
        });

        /***/
    }),
    /* 292 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.11 String.prototype.small()
        __webpack_require__(18)('small', function(createHTML) {
            return function small() {
                return createHTML(this, 'small', '', '');
            }
        });

        /***/
    }),
    /* 293 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 21.1.3.18 String.prototype.startsWith(searchString [, position ])

        var $export = __webpack_require__(0),
            toLength = __webpack_require__(10),
            context = __webpack_require__(91),
            STARTS_WITH = 'startsWith',
            $startsWith = '' [STARTS_WITH];

        $export($export.P + $export.F * __webpack_require__(77)(STARTS_WITH), 'String', {
            startsWith: function startsWith(searchString /*, position = 0 */ ) {
                var that = context(this, searchString, STARTS_WITH),
                    index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
                    search = String(searchString);
                return $startsWith ?
                    $startsWith.call(that, search, index) :
                    that.slice(index, index + search.length) === search;
            }
        });

        /***/
    }),
    /* 294 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.12 String.prototype.strike()
        __webpack_require__(18)('strike', function(createHTML) {
            return function strike() {
                return createHTML(this, 'strike', '', '');
            }
        });

        /***/
    }),
    /* 295 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.13 String.prototype.sub()
        __webpack_require__(18)('sub', function(createHTML) {
            return function sub() {
                return createHTML(this, 'sub', '', '');
            }
        });

        /***/
    }),
    /* 296 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.14 String.prototype.sup()
        __webpack_require__(18)('sup', function(createHTML) {
            return function sup() {
                return createHTML(this, 'sup', '', '');
            }
        });

        /***/
    }),
    /* 297 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 21.1.3.25 String.prototype.trim()
        __webpack_require__(55)('trim', function($trim) {
            return function trim() {
                return $trim(this, 3);
            };
        });

        /***/
    }),
    /* 298 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // ECMAScript 6 symbols shim
        var global = __webpack_require__(2),
            has = __webpack_require__(14),
            DESCRIPTORS = __webpack_require__(8),
            $export = __webpack_require__(0),
            redefine = __webpack_require__(17),
            META = __webpack_require__(36).KEY,
            $fails = __webpack_require__(3),
            shared = __webpack_require__(70),
            setToStringTag = __webpack_require__(54),
            uid = __webpack_require__(49),
            wks = __webpack_require__(5),
            wksExt = __webpack_require__(129),
            wksDefine = __webpack_require__(96),
            keyOf = __webpack_require__(174),
            enumKeys = __webpack_require__(173),
            isArray = __webpack_require__(81),
            anObject = __webpack_require__(1),
            toIObject = __webpack_require__(19),
            toPrimitive = __webpack_require__(30),
            createDesc = __webpack_require__(37),
            _create = __webpack_require__(43),
            gOPNExt = __webpack_require__(121),
            $GOPD = __webpack_require__(22),
            $DP = __webpack_require__(9),
            $keys = __webpack_require__(45),
            gOPD = $GOPD.f,
            dP = $DP.f,
            gOPN = gOPNExt.f,
            $Symbol = global.Symbol,
            $JSON = global.JSON,
            _stringify = $JSON && $JSON.stringify,
            PROTOTYPE = 'prototype',
            HIDDEN = wks('_hidden'),
            TO_PRIMITIVE = wks('toPrimitive'),
            isEnum = {}.propertyIsEnumerable,
            SymbolRegistry = shared('symbol-registry'),
            AllSymbols = shared('symbols'),
            OPSymbols = shared('op-symbols'),
            ObjectProto = Object[PROTOTYPE],
            USE_NATIVE = typeof $Symbol == 'function',
            QObject = global.QObject;
        // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
            return _create(dP({}, 'a', {
                get: function() { return dP(this, 'a', { value: 7 }).a; }
            })).a != 7;
        }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            if (protoDesc) delete ObjectProto[key];
            dP(it, key, D);
            if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;

        var wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            sym._k = tag;
            return sym;
        };

        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it) {
            return typeof it == 'symbol';
        } : function(it) {
            return it instanceof $Symbol;
        };

        var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _create(D, { enumerable: createDesc(0, false) });
                }
                return setSymbolDesc(it, key, D);
            }
            return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P)),
                i = 0,
                l = keys.length,
                key;
            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = toPrimitive(key, true));
            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
            var D = gOPD(it, key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it)),
                result = [],
                i = 0,
                key;
            while (names.length > i) {
                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
            }
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto,
                names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
                result = [],
                i = 0,
                key;
            while (names.length > i) {
                if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
            }
            return result;
        };

        // 19.4.1.1 Symbol([description])
        if (!USE_NATIVE) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function(value) {
                    if (this === ObjectProto) $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                };
                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
                return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                return this._k;
            });

            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            __webpack_require__(44).f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__(58).f = $propertyIsEnumerable;
            __webpack_require__(69).f = $getOwnPropertySymbols;

            if (DESCRIPTORS && !__webpack_require__(42)) {
                redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
            }

            wksExt.f = function(name) {
                return wrap(wks(name));
            }
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

        for (var symbols = (
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
            ).split(','), i = 0; symbols.length > i;) wks(symbols[i++]);

        for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) wksDefine(symbols[i++]);

        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
            // 19.4.2.1 Symbol.for(key)
            'for': function(key) {
                return has(SymbolRegistry, key += '') ?
                    SymbolRegistry[key] :
                    SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(key) {
                if (isSymbol(key)) return keyOf(SymbolRegistry, key);
                throw TypeError(key + ' is not a symbol!');
            },
            useSetter: function() { setter = true; },
            useSimple: function() { setter = false; }
        });

        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
        });

        // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
        })), 'JSON', {
            stringify: function stringify(it) {
                if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                var args = [it],
                    i = 1,
                    replacer, $replacer;
                while (arguments.length > i) args.push(arguments[i++]);
                replacer = args[1];
                if (typeof replacer == 'function') $replacer = replacer;
                if ($replacer || !isArray(replacer)) replacer = function(key, value) {
                    if ($replacer) value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
            }
        });

        // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, 'Symbol');
        // 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, 'Math', true);
        // 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, 'JSON', true);

        /***/
    }),
    /* 299 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            $typed = __webpack_require__(71),
            buffer = __webpack_require__(95),
            anObject = __webpack_require__(1),
            toIndex = __webpack_require__(48),
            toLength = __webpack_require__(10),
            isObject = __webpack_require__(4),
            ArrayBuffer = __webpack_require__(2).ArrayBuffer,
            speciesConstructor = __webpack_require__(89),
            $ArrayBuffer = buffer.ArrayBuffer,
            $DataView = buffer.DataView,
            $isView = $typed.ABV && ArrayBuffer.isView,
            $slice = $ArrayBuffer.prototype.slice,
            VIEW = $typed.VIEW,
            ARRAY_BUFFER = 'ArrayBuffer';

        $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

        $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
            // 24.1.3.1 ArrayBuffer.isView(arg)
            isView: function isView(it) {
                return $isView && $isView(it) || isObject(it) && VIEW in it;
            }
        });

        $export($export.P + $export.U + $export.F * __webpack_require__(3)(function() {
            return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
        }), ARRAY_BUFFER, {
            // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
            slice: function slice(start, end) {
                if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
                var len = anObject(this).byteLength,
                    first = toIndex(start, len),
                    final = toIndex(end === undefined ? len : end, len),
                    result = new(speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
                    viewS = new $DataView(this),
                    viewT = new $DataView(result),
                    index = 0;
                while (first < final) {
                    viewT.setUint8(index++, viewS.getUint8(first++));
                }
                return result;
            }
        });

        __webpack_require__(47)(ARRAY_BUFFER);

        /***/
    }),
    /* 300 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0);
        $export($export.G + $export.W + $export.F * !__webpack_require__(71).ABV, {
            DataView: __webpack_require__(95).DataView
        });

        /***/
    }),
    /* 301 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Float32', 4, function(init) {
            return function Float32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

        /***/
    }),
    /* 302 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Float64', 8, function(init) {
            return function Float64Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

        /***/
    }),
    /* 303 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Int16', 2, function(init) {
            return function Int16Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

        /***/
    }),
    /* 304 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Int32', 4, function(init) {
            return function Int32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

        /***/
    }),
    /* 305 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Int8', 1, function(init) {
            return function Int8Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

        /***/
    }),
    /* 306 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Uint16', 2, function(init) {
            return function Uint16Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

        /***/
    }),
    /* 307 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Uint32', 4, function(init) {
            return function Uint32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

        /***/
    }),
    /* 308 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Uint8', 1, function(init) {
            return function Uint8Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });

        /***/
    }),
    /* 309 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(35)('Uint8', 1, function(init) {
            return function Uint8ClampedArray(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        }, true);

        /***/
    }),
    /* 310 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var weak = __webpack_require__(113);

        // 23.4 WeakSet Objects
        __webpack_require__(62)('WeakSet', function(get) {
            return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
        }, {
            // 23.4.3.1 WeakSet.prototype.add(value)
            add: function add(value) {
                return weak.def(this, value, true);
            }
        }, weak, false, true);

        /***/
    }),
    /* 311 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/Array.prototype.includes
        var $export = __webpack_require__(0),
            $includes = __webpack_require__(61)(true);

        $export($export.P, 'Array', {
            includes: function includes(el /*, fromIndex = 0 */ ) {
                return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
            }
        });

        __webpack_require__(51)('includes');

        /***/
    }),
    /* 312 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
        var $export = __webpack_require__(0),
            microtask = __webpack_require__(86)(),
            process = __webpack_require__(2).process,
            isNode = __webpack_require__(24)(process) == 'process';

        $export($export.G, {
            asap: function asap(fn) {
                var domain = isNode && process.domain;
                microtask(domain ? domain.bind(fn) : fn);
            }
        });

        /***/
    }),
    /* 313 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/ljharb/proposal-is-error
        var $export = __webpack_require__(0),
            cof = __webpack_require__(24);

        $export($export.S, 'Error', {
            isError: function isError(it) {
                return cof(it) === 'Error';
            }
        });

        /***/
    }),
    /* 314 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__(0);

        $export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(112)('Map') });

        /***/
    }),
    /* 315 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', {
            iaddh: function iaddh(x0, x1, y0, y1) {
                var $x0 = x0 >>> 0,
                    $x1 = x1 >>> 0,
                    $y0 = y0 >>> 0;
                return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
            }
        });

        /***/
    }),
    /* 316 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', {
            imulh: function imulh(u, v) {
                var UINT16 = 0xffff,
                    $u = +u,
                    $v = +v,
                    u0 = $u & UINT16,
                    v0 = $v & UINT16,
                    u1 = $u >> 16,
                    v1 = $v >> 16,
                    t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
                return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
            }
        });

        /***/
    }),
    /* 317 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', {
            isubh: function isubh(x0, x1, y0, y1) {
                var $x0 = x0 >>> 0,
                    $x1 = x1 >>> 0,
                    $y0 = y0 >>> 0;
                return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
            }
        });

        /***/
    }),
    /* 318 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = __webpack_require__(0);

        $export($export.S, 'Math', {
            umulh: function umulh(u, v) {
                var UINT16 = 0xffff,
                    $u = +u,
                    $v = +v,
                    u0 = $u & UINT16,
                    v0 = $v & UINT16,
                    u1 = $u >>> 16,
                    v1 = $v >>> 16,
                    t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
                return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
            }
        });

        /***/
    }),
    /* 319 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            toObject = __webpack_require__(12),
            aFunction = __webpack_require__(15),
            $defineProperty = __webpack_require__(9);

        // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
        __webpack_require__(8) && $export($export.P + __webpack_require__(68), 'Object', {
            __defineGetter__: function __defineGetter__(P, getter) {
                $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
            }
        });

        /***/
    }),
    /* 320 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            toObject = __webpack_require__(12),
            aFunction = __webpack_require__(15),
            $defineProperty = __webpack_require__(9);

        // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
        __webpack_require__(8) && $export($export.P + __webpack_require__(68), 'Object', {
            __defineSetter__: function __defineSetter__(P, setter) {
                $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
            }
        });

        /***/
    }),
    /* 321 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-values-entries
        var $export = __webpack_require__(0),
            $entries = __webpack_require__(123)(true);

        $export($export.S, 'Object', {
            entries: function entries(it) {
                return $entries(it);
            }
        });

        /***/
    }),
    /* 322 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-getownpropertydescriptors
        var $export = __webpack_require__(0),
            ownKeys = __webpack_require__(124),
            toIObject = __webpack_require__(19),
            gOPD = __webpack_require__(22),
            createProperty = __webpack_require__(74);

        $export($export.S, 'Object', {
            getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
                var O = toIObject(object),
                    getDesc = gOPD.f,
                    keys = ownKeys(O),
                    result = {},
                    i = 0,
                    key;
                while (keys.length > i) createProperty(result, key = keys[i++], getDesc(O, key));
                return result;
            }
        });

        /***/
    }),
    /* 323 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            toObject = __webpack_require__(12),
            toPrimitive = __webpack_require__(30),
            getPrototypeOf = __webpack_require__(23),
            getOwnPropertyDescriptor = __webpack_require__(22).f;

        // B.2.2.4 Object.prototype.__lookupGetter__(P)
        __webpack_require__(8) && $export($export.P + __webpack_require__(68), 'Object', {
            __lookupGetter__: function __lookupGetter__(P) {
                var O = toObject(this),
                    K = toPrimitive(P, true),
                    D;
                do {
                    if (D = getOwnPropertyDescriptor(O, K)) return D.get;
                } while (O = getPrototypeOf(O));
            }
        });

        /***/
    }),
    /* 324 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__(0),
            toObject = __webpack_require__(12),
            toPrimitive = __webpack_require__(30),
            getPrototypeOf = __webpack_require__(23),
            getOwnPropertyDescriptor = __webpack_require__(22).f;

        // B.2.2.5 Object.prototype.__lookupSetter__(P)
        __webpack_require__(8) && $export($export.P + __webpack_require__(68), 'Object', {
            __lookupSetter__: function __lookupSetter__(P) {
                var O = toObject(this),
                    K = toPrimitive(P, true),
                    D;
                do {
                    if (D = getOwnPropertyDescriptor(O, K)) return D.set;
                } while (O = getPrototypeOf(O));
            }
        });

        /***/
    }),
    /* 325 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-values-entries
        var $export = __webpack_require__(0),
            $values = __webpack_require__(123)(false);

        $export($export.S, 'Object', {
            values: function values(it) {
                return $values(it);
            }
        });

        /***/
    }),
    /* 326 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/zenparsing/es-observable
        var $export = __webpack_require__(0),
            global = __webpack_require__(2),
            core = __webpack_require__(32),
            microtask = __webpack_require__(86)(),
            OBSERVABLE = __webpack_require__(5)('observable'),
            aFunction = __webpack_require__(15),
            anObject = __webpack_require__(1),
            anInstance = __webpack_require__(41),
            redefineAll = __webpack_require__(46),
            hide = __webpack_require__(16),
            forOf = __webpack_require__(52),
            RETURN = forOf.RETURN;

        var getMethod = function(fn) {
            return fn == null ? undefined : aFunction(fn);
        };

        var cleanupSubscription = function(subscription) {
            var cleanup = subscription._c;
            if (cleanup) {
                subscription._c = undefined;
                cleanup();
            }
        };

        var subscriptionClosed = function(subscription) {
            return subscription._o === undefined;
        };

        var closeSubscription = function(subscription) {
            if (!subscriptionClosed(subscription)) {
                subscription._o = undefined;
                cleanupSubscription(subscription);
            }
        };

        var Subscription = function(observer, subscriber) {
            anObject(observer);
            this._c = undefined;
            this._o = observer;
            observer = new SubscriptionObserver(this);
            try {
                var cleanup = subscriber(observer),
                    subscription = cleanup;
                if (cleanup != null) {
                    if (typeof cleanup.unsubscribe === 'function') cleanup = function() { subscription.unsubscribe(); };
                    else aFunction(cleanup);
                    this._c = cleanup;
                }
            } catch (e) {
                observer.error(e);
                return;
            }
            if (subscriptionClosed(this)) cleanupSubscription(this);
        };

        Subscription.prototype = redefineAll({}, {
            unsubscribe: function unsubscribe() { closeSubscription(this); }
        });

        var SubscriptionObserver = function(subscription) {
            this._s = subscription;
        };

        SubscriptionObserver.prototype = redefineAll({}, {
            next: function next(value) {
                var subscription = this._s;
                if (!subscriptionClosed(subscription)) {
                    var observer = subscription._o;
                    try {
                        var m = getMethod(observer.next);
                        if (m) return m.call(observer, value);
                    } catch (e) {
                        try {
                            closeSubscription(subscription);
                        } finally {
                            throw e;
                        }
                    }
                }
            },
            error: function error(value) {
                var subscription = this._s;
                if (subscriptionClosed(subscription)) throw value;
                var observer = subscription._o;
                subscription._o = undefined;
                try {
                    var m = getMethod(observer.error);
                    if (!m) throw value;
                    value = m.call(observer, value);
                } catch (e) {
                    try {
                        cleanupSubscription(subscription);
                    } finally {
                        throw e;
                    }
                }
                cleanupSubscription(subscription);
                return value;
            },
            complete: function complete(value) {
                var subscription = this._s;
                if (!subscriptionClosed(subscription)) {
                    var observer = subscription._o;
                    subscription._o = undefined;
                    try {
                        var m = getMethod(observer.complete);
                        value = m ? m.call(observer, value) : undefined;
                    } catch (e) {
                        try {
                            cleanupSubscription(subscription);
                        } finally {
                            throw e;
                        }
                    }
                    cleanupSubscription(subscription);
                    return value;
                }
            }
        });

        var $Observable = function Observable(subscriber) {
            anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
        };

        redefineAll($Observable.prototype, {
            subscribe: function subscribe(observer) {
                return new Subscription(observer, this._f);
            },
            forEach: function forEach(fn) {
                var that = this;
                return new(core.Promise || global.Promise)(function(resolve, reject) {
                    aFunction(fn);
                    var subscription = that.subscribe({
                        next: function(value) {
                            try {
                                return fn(value);
                            } catch (e) {
                                reject(e);
                                subscription.unsubscribe();
                            }
                        },
                        error: reject,
                        complete: resolve
                    });
                });
            }
        });

        redefineAll($Observable, {
            from: function from(x) {
                var C = typeof this === 'function' ? this : $Observable;
                var method = getMethod(anObject(x)[OBSERVABLE]);
                if (method) {
                    var observable = anObject(method.call(x));
                    return observable.constructor === C ? observable : new C(function(observer) {
                        return observable.subscribe(observer);
                    });
                }
                return new C(function(observer) {
                    var done = false;
                    microtask(function() {
                        if (!done) {
                            try {
                                if (forOf(x, false, function(it) {
                                        observer.next(it);
                                        if (done) return RETURN;
                                    }) === RETURN) return;
                            } catch (e) {
                                if (done) throw e;
                                observer.error(e);
                                return;
                            }
                            observer.complete();
                        }
                    });
                    return function() { done = true; };
                });
            },
            of: function of() {
                for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
                return new(typeof this === 'function' ? this : $Observable)(function(observer) {
                    var done = false;
                    microtask(function() {
                        if (!done) {
                            for (var i = 0; i < items.length; ++i) {
                                observer.next(items[i]);
                                if (done) return;
                            }
                            observer.complete();
                        }
                    });
                    return function() { done = true; };
                });
            }
        });

        hide($Observable.prototype, OBSERVABLE, function() { return this; });

        $export($export.G, { Observable: $Observable });

        __webpack_require__(47)('Observable');

        /***/
    }),
    /* 327 */
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            toMetaKey = metadata.key,
            ordinaryDefineOwnMetadata = metadata.set;

        metadata.exp({
            defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
                ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
            }
        });

        /***/
    }),
    /* 328 */
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            toMetaKey = metadata.key,
            getOrCreateMetadataMap = metadata.map,
            store = metadata.store;

        metadata.exp({
            deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */ ) {
                var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
                    metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
                if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
                if (metadataMap.size) return true;
                var targetMetadata = store.get(target);
                targetMetadata['delete'](targetKey);
                return !!targetMetadata.size || store['delete'](target);
            }
        });

        /***/
    }),
    /* 329 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Set = __webpack_require__(132),
            from = __webpack_require__(108),
            metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            getPrototypeOf = __webpack_require__(23),
            ordinaryOwnMetadataKeys = metadata.keys,
            toMetaKey = metadata.key;

        var ordinaryMetadataKeys = function(O, P) {
            var oKeys = ordinaryOwnMetadataKeys(O, P),
                parent = getPrototypeOf(O);
            if (parent === null) return oKeys;
            var pKeys = ordinaryMetadataKeys(parent, P);
            return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
        };

        metadata.exp({
            getMetadataKeys: function getMetadataKeys(target /*, targetKey */ ) {
                return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
            }
        });

        /***/
    }),
    /* 330 */
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            getPrototypeOf = __webpack_require__(23),
            ordinaryHasOwnMetadata = metadata.has,
            ordinaryGetOwnMetadata = metadata.get,
            toMetaKey = metadata.key;

        var ordinaryGetMetadata = function(MetadataKey, O, P) {
            var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = getPrototypeOf(O);
            return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
        };

        metadata.exp({
            getMetadata: function getMetadata(metadataKey, target /*, targetKey */ ) {
                return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            }
        });

        /***/
    }),
    /* 331 */
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            ordinaryOwnMetadataKeys = metadata.keys,
            toMetaKey = metadata.key;

        metadata.exp({
            getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */ ) {
                return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
            }
        });

        /***/
    }),
    /* 332 */
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            ordinaryGetOwnMetadata = metadata.get,
            toMetaKey = metadata.key;

        metadata.exp({
            getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */ ) {
                return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            }
        });

        /***/
    }),
    /* 333 */
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            getPrototypeOf = __webpack_require__(23),
            ordinaryHasOwnMetadata = metadata.has,
            toMetaKey = metadata.key;

        var ordinaryHasMetadata = function(MetadataKey, O, P) {
            var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return true;
            var parent = getPrototypeOf(O);
            return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
        };

        metadata.exp({
            hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */ ) {
                return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            }
        });

        /***/
    }),
    /* 334 */
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            ordinaryHasOwnMetadata = metadata.has,
            toMetaKey = metadata.key;

        metadata.exp({
            hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */ ) {
                return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            }
        });

        /***/
    }),
    /* 335 */
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__(34),
            anObject = __webpack_require__(1),
            aFunction = __webpack_require__(15),
            toMetaKey = metadata.key,
            ordinaryDefineOwnMetadata = metadata.set;

        metadata.exp({
            metadata: function metadata(metadataKey, metadataValue) {
                return function decorator(target, targetKey) {
                    ordinaryDefineOwnMetadata(
                        metadataKey, metadataValue,
                        (targetKey !== undefined ? anObject : aFunction)(target),
                        toMetaKey(targetKey)
                    );
                };
            }
        });

        /***/
    }),
    /* 336 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__(0);

        $export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(112)('Set') });

        /***/
    }),
    /* 337 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/mathiasbynens/String.prototype.at
        var $export = __webpack_require__(0),
            $at = __webpack_require__(90)(true);

        $export($export.P, 'String', {
            at: function at(pos) {
                return $at(this, pos);
            }
        });

        /***/
    }),
    /* 338 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/String.prototype.matchAll/
        var $export = __webpack_require__(0),
            defined = __webpack_require__(25),
            toLength = __webpack_require__(10),
            isRegExp = __webpack_require__(66),
            getFlags = __webpack_require__(64),
            RegExpProto = RegExp.prototype;

        var $RegExpStringIterator = function(regexp, string) {
            this._r = regexp;
            this._s = string;
        };

        __webpack_require__(82)($RegExpStringIterator, 'RegExp String', function next() {
            var match = this._r.exec(this._s);
            return { value: match, done: match === null };
        });

        $export($export.P, 'String', {
            matchAll: function matchAll(regexp) {
                defined(this);
                if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
                var S = String(this),
                    flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
                    rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
                rx.lastIndex = toLength(regexp.lastIndex);
                return new $RegExpStringIterator(rx, S);
            }
        });

        /***/
    }),
    /* 339 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/proposal-string-pad-start-end
        var $export = __webpack_require__(0),
            $pad = __webpack_require__(128);

        $export($export.P, 'String', {
            padEnd: function padEnd(maxLength /*, fillString = ' ' */ ) {
                return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
            }
        });

        /***/
    }),
    /* 340 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/proposal-string-pad-start-end
        var $export = __webpack_require__(0),
            $pad = __webpack_require__(128);

        $export($export.P, 'String', {
            padStart: function padStart(maxLength /*, fillString = ' ' */ ) {
                return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
            }
        });

        /***/
    }),
    /* 341 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
        __webpack_require__(55)('trimLeft', function($trim) {
            return function trimLeft() {
                return $trim(this, 1);
            };
        }, 'trimStart');

        /***/
    }),
    /* 342 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
        __webpack_require__(55)('trimRight', function($trim) {
            return function trimRight() {
                return $trim(this, 2);
            };
        }, 'trimEnd');

        /***/
    }),
    /* 343 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(96)('asyncIterator');

        /***/
    }),
    /* 344 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(96)('observable');

        /***/
    }),
    /* 345 */
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/ljharb/proposal-global
        var $export = __webpack_require__(0);

        $export($export.S, 'System', { global: __webpack_require__(2) });

        /***/
    }),
    /* 346 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $iterators = __webpack_require__(98),
            redefine = __webpack_require__(17),
            global = __webpack_require__(2),
            hide = __webpack_require__(16),
            Iterators = __webpack_require__(53),
            wks = __webpack_require__(5),
            ITERATOR = wks('iterator'),
            TO_STRING_TAG = wks('toStringTag'),
            ArrayValues = Iterators.Array;

        for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
            var NAME = collections[i],
                Collection = global[NAME],
                proto = Collection && Collection.prototype,
                key;
            if (proto) {
                if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = ArrayValues;
                for (key in $iterators)
                    if (!proto[key]) redefine(proto, key, $iterators[key], true);
            }
        }

        /***/
    }),
    /* 347 */
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__(0),
            $task = __webpack_require__(94);
        $export($export.G + $export.B, {
            setImmediate: $task.set,
            clearImmediate: $task.clear
        });

        /***/
    }),
    /* 348 */
    /***/
    (function(module, exports, __webpack_require__) {

        // ie9- setTimeout & setInterval additional parameters fix
        var global = __webpack_require__(2),
            $export = __webpack_require__(0),
            invoke = __webpack_require__(65),
            partial = __webpack_require__(175),
            navigator = global.navigator,
            MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
        var wrap = function(set) {
            return MSIE ? function(fn, time /*, ...args */ ) {
                return set(invoke(
                    partial, [].slice.call(arguments, 2),
                    typeof fn == 'function' ? fn : Function(fn)
                ), time);
            } : set;
        };
        $export($export.G + $export.B + $export.F * MSIE, {
            setTimeout: wrap(global.setTimeout),
            setInterval: wrap(global.setInterval)
        });

        /***/
    }),
    /* 349 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(298);
        __webpack_require__(237);
        __webpack_require__(239);
        __webpack_require__(238);
        __webpack_require__(241);
        __webpack_require__(243);
        __webpack_require__(248);
        __webpack_require__(242);
        __webpack_require__(240);
        __webpack_require__(250);
        __webpack_require__(249);
        __webpack_require__(245);
        __webpack_require__(246);
        __webpack_require__(244);
        __webpack_require__(236);
        __webpack_require__(247);
        __webpack_require__(251);
        __webpack_require__(252);
        __webpack_require__(204);
        __webpack_require__(206);
        __webpack_require__(205);
        __webpack_require__(254);
        __webpack_require__(253);
        __webpack_require__(224);
        __webpack_require__(234);
        __webpack_require__(235);
        __webpack_require__(225);
        __webpack_require__(226);
        __webpack_require__(227);
        __webpack_require__(228);
        __webpack_require__(229);
        __webpack_require__(230);
        __webpack_require__(231);
        __webpack_require__(232);
        __webpack_require__(233);
        __webpack_require__(207);
        __webpack_require__(208);
        __webpack_require__(209);
        __webpack_require__(210);
        __webpack_require__(211);
        __webpack_require__(212);
        __webpack_require__(213);
        __webpack_require__(214);
        __webpack_require__(215);
        __webpack_require__(216);
        __webpack_require__(217);
        __webpack_require__(218);
        __webpack_require__(219);
        __webpack_require__(220);
        __webpack_require__(221);
        __webpack_require__(222);
        __webpack_require__(223);
        __webpack_require__(285);
        __webpack_require__(290);
        __webpack_require__(297);
        __webpack_require__(288);
        __webpack_require__(280);
        __webpack_require__(281);
        __webpack_require__(286);
        __webpack_require__(291);
        __webpack_require__(293);
        __webpack_require__(276);
        __webpack_require__(277);
        __webpack_require__(278);
        __webpack_require__(279);
        __webpack_require__(282);
        __webpack_require__(283);
        __webpack_require__(284);
        __webpack_require__(287);
        __webpack_require__(289);
        __webpack_require__(292);
        __webpack_require__(294);
        __webpack_require__(295);
        __webpack_require__(296);
        __webpack_require__(199);
        __webpack_require__(201);
        __webpack_require__(200);
        __webpack_require__(203);
        __webpack_require__(202);
        __webpack_require__(188);
        __webpack_require__(186);
        __webpack_require__(192);
        __webpack_require__(189);
        __webpack_require__(195);
        __webpack_require__(197);
        __webpack_require__(185);
        __webpack_require__(191);
        __webpack_require__(182);
        __webpack_require__(196);
        __webpack_require__(180);
        __webpack_require__(194);
        __webpack_require__(193);
        __webpack_require__(187);
        __webpack_require__(190);
        __webpack_require__(179);
        __webpack_require__(181);
        __webpack_require__(184);
        __webpack_require__(183);
        __webpack_require__(198);
        __webpack_require__(98);
        __webpack_require__(270);
        __webpack_require__(275);
        __webpack_require__(131);
        __webpack_require__(271);
        __webpack_require__(272);
        __webpack_require__(273);
        __webpack_require__(274);
        __webpack_require__(255);
        __webpack_require__(130);
        __webpack_require__(132);
        __webpack_require__(133);
        __webpack_require__(310);
        __webpack_require__(299);
        __webpack_require__(300);
        __webpack_require__(305);
        __webpack_require__(308);
        __webpack_require__(309);
        __webpack_require__(303);
        __webpack_require__(306);
        __webpack_require__(304);
        __webpack_require__(307);
        __webpack_require__(301);
        __webpack_require__(302);
        __webpack_require__(256);
        __webpack_require__(257);
        __webpack_require__(258);
        __webpack_require__(259);
        __webpack_require__(260);
        __webpack_require__(263);
        __webpack_require__(261);
        __webpack_require__(262);
        __webpack_require__(264);
        __webpack_require__(265);
        __webpack_require__(266);
        __webpack_require__(267);
        __webpack_require__(269);
        __webpack_require__(268);
        __webpack_require__(311);
        __webpack_require__(337);
        __webpack_require__(340);
        __webpack_require__(339);
        __webpack_require__(341);
        __webpack_require__(342);
        __webpack_require__(338);
        __webpack_require__(343);
        __webpack_require__(344);
        __webpack_require__(322);
        __webpack_require__(325);
        __webpack_require__(321);
        __webpack_require__(319);
        __webpack_require__(320);
        __webpack_require__(323);
        __webpack_require__(324);
        __webpack_require__(314);
        __webpack_require__(336);
        __webpack_require__(345);
        __webpack_require__(313);
        __webpack_require__(315);
        __webpack_require__(317);
        __webpack_require__(316);
        __webpack_require__(318);
        __webpack_require__(327);
        __webpack_require__(328);
        __webpack_require__(330);
        __webpack_require__(329);
        __webpack_require__(332);
        __webpack_require__(331);
        __webpack_require__(333);
        __webpack_require__(334);
        __webpack_require__(335);
        __webpack_require__(312);
        __webpack_require__(326);
        __webpack_require__(348);
        __webpack_require__(347);
        __webpack_require__(346);
        module.exports = __webpack_require__(32);

        /***/
    }),
    /* 350 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.manager-actions {\n  border-bottom: 2px solid #D9D9D9;\n  background-color: #F5F6F7;\n}\n.manager-actions .group {\n    border-right: 1px solid #D9D9D9;\n}\n.manager-actions .col, .manager-actions .group {\n    float: left;\n    min-height: 58px;\n}\n@media (min-width: 768px) {\n.manager-actions .col .col, .manager-actions .col .group, .manager-actions .group .col, .manager-actions .group .group {\n        min-height: 88px;\n}\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/ActionsBar.vue"], "names": [], "mappings": ";AAAA;EACE,iCAAiC;EACjC,0BAA0B;CAAE;AAC5B;IACE,gCAAgC;CAAE;AACpC;IACE,YAAY;IACZ,iBAAiB;CAAE;AACnB;AACE;QACE,iBAAiB;CAAE;CAAE", "file": "ActionsBar.vue", "sourcesContent": [".manager-actions {\n  border-bottom: 2px solid #D9D9D9;\n  background-color: #F5F6F7; }\n  .manager-actions .group {\n    border-right: 1px solid #D9D9D9; }\n  .manager-actions .col, .manager-actions .group {\n    float: left;\n    min-height: 58px; }\n    @media (min-width: 768px) {\n      .manager-actions .col .col, .manager-actions .col .group, .manager-actions .group .col, .manager-actions .group .group {\n        min-height: 88px; } }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 351 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.blob input {\n  border-color: transparent;\n  outline: none;\n  padding: 0 5px;\n  width: 100%;\n}\n.blob .blob-description {\n  height: 24px;\n  margin: 0 4px;\n  overflow: hidden;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.list .blob .blob-description {\n  margin: 5px 0 0 64px;\n  text-align: left;\n}\n.list .blob form {\n  margin: 3px 0 0 10px;\n  min-width: 218px;\n  width: 50%;\n  float: left;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/Blob.vue"], "names": [], "mappings": ";AAAA;EACE,0BAA0B;EAC1B,cAAc;EACd,eAAe;EACf,YAAY;CAAE;AAEhB;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,wBAAwB;EACxB,oBAAoB;CAAE;AAExB;EACE,qBAAqB;EACrB,iBAAiB;CAAE;AAErB;EACE,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;EACX,YAAY;CAAE", "file": "Blob.vue", "sourcesContent": [".blob input {\n  border-color: transparent;\n  outline: none;\n  padding: 0 5px;\n  width: 100%; }\n\n.blob .blob-description {\n  height: 24px;\n  margin: 0 4px;\n  overflow: hidden;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.list .blob .blob-description {\n  margin: 5px 0 0 64px;\n  text-align: left; }\n\n.list .blob form {\n  margin: 3px 0 0 10px;\n  min-width: 218px;\n  width: 50%;\n  float: left; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 352 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.grid .blob-container {\n  float: left;\n  width: 205px;\n  height: 139px;\n  margin: 3px;\n}\n.blob {\n  overflow: hidden;\n}\n.blob .thumb {\n    height: 105px;\n    margin-bottom: 8px;\n    overflow: hidden;\n}\n.blob .thumb img {\n      display: block;\n      margin: 0 auto 6px auto;\n      max-height: 100px;\n}\n.list .blob .thumb {\n  border: none;\n  float: left;\n  height: auto;\n  margin: 4px 0 4px 4px;\n  padding: 0;\n  text-align: center;\n  width: 50px;\n}\n.list .blob .thumb img {\n    height: 25px;\n    margin: 0 auto;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/Blobs.vue"], "names": [], "mappings": ";AAAA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,YAAY;CAAE;AAEhB;EACE,iBAAiB;CAAE;AACnB;IACE,cAAc;IACd,mBAAmB;IACnB,iBAAiB;CAAE;AACnB;MACE,eAAe;MACf,wBAAwB;MACxB,kBAAkB;CAAE;AAE1B;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,YAAY;CAAE;AACd;IACE,aAAa;IACb,eAAe;CAAE", "file": "Blobs.vue", "sourcesContent": [".grid .blob-container {\n  float: left;\n  width: 205px;\n  height: 139px;\n  margin: 3px; }\n\n.blob {\n  overflow: hidden; }\n  .blob .thumb {\n    height: 105px;\n    margin-bottom: 8px;\n    overflow: hidden; }\n    .blob .thumb img {\n      display: block;\n      margin: 0 auto 6px auto;\n      max-height: 100px; }\n\n.list .blob .thumb {\n  border: none;\n  float: left;\n  height: auto;\n  margin: 4px 0 4px 4px;\n  padding: 0;\n  text-align: center;\n  width: 50px; }\n  .list .blob .thumb img {\n    height: 25px;\n    margin: 0 auto; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 353 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.tree-link {\n  display: block;\n}\n.toggle {\n  float: left;\n  padding: 2px 10px;\n}\n.offset {\n  padding-left: 28px;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/tree/TreeItem.vue"], "names": [], "mappings": ";AAAA;EACE,eAAe;CAAE;AAEnB;EACE,YAAY;EACZ,kBAAkB;CAAE;AAEtB;EACE,mBAAmB;CAAE", "file": "TreeItem.vue", "sourcesContent": [".tree-link {\n  display: block; }\n\n.toggle {\n  float: left;\n  padding: 2px 10px; }\n\n.offset {\n  padding-left: 28px; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 354 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n#tree {\n  border-top: 1px solid #D9D9D9;\n  padding-top: 6px;\n}\n#tree .root a {\n    padding-left: 5px;\n}\n#tree ul.root-ul {\n    margin: 0;\n}\n#tree ul {\n    border-left: 1px dotted gray;\n    list-style-type: none;\n    padding-left: 13px;\n    margin-left: 13px;\n}\n#tree > ul {\n    border-left: none;\n    padding: 0;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/tree/Tree.vue"], "names": [], "mappings": ";AAAA;EACE,8BAA8B;EAC9B,iBAAiB;CAAE;AACnB;IACE,kBAAkB;CAAE;AACtB;IACE,UAAU;CAAE;AACd;IACE,6BAA6B;IAC7B,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;CAAE;AACtB;IACE,kBAAkB;IAClB,WAAW;CAAE", "file": "Tree.vue", "sourcesContent": ["#tree {\n  border-top: 1px solid #D9D9D9;\n  padding-top: 6px; }\n  #tree .root a {\n    padding-left: 5px; }\n  #tree ul.root-ul {\n    margin: 0; }\n  #tree ul {\n    border-left: 1px dotted gray;\n    list-style-type: none;\n    padding-left: 13px;\n    margin-left: 13px; }\n  #tree > ul {\n    border-left: none;\n    padding: 0; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 355 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.file-upload {\n  border: 1px solid #e6e6e6;\n  padding: 2px;\n}\n.file-upload.error {\n    border: 1px solid #ebccd1;\n    background-color: #f2dede;\n    color: #777777;\n}\n.file-upload .inte-item {\n    max-height: 28px;\n    overflow: hidden;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.grid .file-upload .inte-item {\n  max-width: 170px;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/uploads/UploadBlob.vue"], "names": [], "mappings": ";AAAA;EACE,0BAA0B;EAC1B,aAAa;CAAE;AACf;IACE,0BAA0B;IAC1B,0BAA0B;IAC1B,eAAe;CAAE;AACnB;IACE,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,wBAAwB;IACxB,oBAAoB;CAAE;AAE1B;EACE,iBAAiB;CAAE", "file": "UploadBlob.vue", "sourcesContent": [".file-upload {\n  border: 1px solid #e6e6e6;\n  padding: 2px; }\n  .file-upload.error {\n    border: 1px solid #ebccd1;\n    background-color: #f2dede;\n    color: #777777; }\n  .file-upload .inte-item {\n    max-height: 28px;\n    overflow: hidden;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.grid .file-upload .inte-item {\n  max-width: 170px; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 356 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.breadcrumb {\n  margin-bottom: 0;\n  background-color: transparent;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/breadcrumb-bar/Breadcrumb.vue?a6cbd762"], "names": [], "mappings": ";AA+DA;EACA,iBAAA;EACA,8BAAA;CACA", "file": "Breadcrumb.vue", "sourcesContent": ["<template>\n  <ol class=\"breadcrumb\">\n    <li v-for=\"item in items\"\n        :class=\"{active: item.isActive()}\">\n      <a v-if=\"!item.isActive()\"\n         href\n         @click.prevent=\"changePath(item.path)\">\n        {{ item.text }}\n      </a>\n      <span v-else=\"\">{{ item.text }}</span>\n    </li>\n  </ol>\n</template>\n\n<script>\n  import * as actions from '../../store/actions'\n  import * as getters from '../../store/getters'\n\n  export default {\n    name: 'breadcrumb',\n\n    computed: {\n      /**\n       * Calculate breadcrumb items.\n       * @returns {Array}\n       */\n      items () {\n        let fullPath = this.$store.getters[getters.getPath]\n        let parts = fullPath.split('/')\n\n        // Home button at the beginning of the breadcrumb.\n        let result = [{\n          text: 'Home',\n          path: '',\n          isActive: () => fullPath === ''\n        }]\n\n        parts.forEach((part, index) => {\n          let path = parts.slice(0, index + 1).join('/')\n          part !== '' && result.push({\n            text: part,\n            path: path,\n            isActive: () => path === fullPath\n          })\n        })\n\n        return result\n      }\n    },\n\n    methods: {\n      /**\n       * Change current location.\n       * @param path\n       */\n      changePath (path) {\n        this.$store.dispatch(actions.changePath, path)\n      }\n    }\n  }\n</script>\n\n<style>\n  .breadcrumb {\n    margin-bottom: 0;\n    background-color: transparent;\n  }\n</style>\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 357 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.content-container {\n  border-top: 1px solid #D9D9D9;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/ContentContainer.vue"], "names": [], "mappings": ";AAAA;EACE,8BAA8B;CAAE", "file": "ContentContainer.vue", "sourcesContent": [".content-container {\n  border-top: 1px solid #D9D9D9; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 358 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.position-inherit {\n  position: inherit;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/App.vue?46f2a644"], "names": [], "mappings": ";AA4CA;EACA,kBAAA;CACA", "file": "App.vue", "sourcesContent": ["<template>\n  <div class=\"container-fluid\">\n    <actions-bar class=\"row\"></actions-bar>\n    <breadcrumb-bar class=\"row\"></breadcrumb-bar>\n    <div class=\"row\">\n      <tree class=\"col-sm-4 col-md-3\"></tree>\n      <content-container class=\"col-sm-8 col-md-9 position-inherit\">\n        <uploads></uploads>\n        <blobs></blobs>\n      </content-container>\n    </div>\n  </div>\n</template>\n\n<script>\n  import actionsBar from './components/actions-bar/ActionsBar.vue'\n  import blobs from './components/body/content/Blobs.vue'\n  import breadcrumbBar from './components/breadcrumb-bar/BreadcrumbBar.vue'\n  import contentContainer from './components/body/content/ContentContainer.vue'\n  import tree from './components/body/tree/Tree.vue'\n  import uploads from './components/body/uploads/Uploads.vue'\n\n  import { fetchTree, fetchContent } from './store/actions'\n\n  export default {\n    name: 'app',\n\n    components: {\n      actionsBar,\n      breadcrumbBar,\n      tree,\n      contentContainer,\n      blobs,\n      uploads\n    },\n\n    mounted () {\n      this.$store.dispatch(fetchContent)\n      this.$store.dispatch(fetchTree)\n    }\n  }\n</script>\n\n<style>\n  .position-inherit {\n    position: inherit;\n  }\n</style>\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 359 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n#breadcrumb {\n  min-height: 38px;\n}\n#breadcrumb .icon {\n    max-height: 20px;\n}\n#breadcrumb .disabled {\n    opacity: 0.5;\n}\n#breadcrumb .icon-wrapp {\n    display: block;\n    padding: 8px 15px;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/breadcrumb-bar/BreadcrumbBar.vue"], "names": [], "mappings": ";AAAA;EACE,iBAAiB;CAAE;AACnB;IACE,iBAAiB;CAAE;AACrB;IACE,aAAa;CAAE;AACjB;IACE,eAAe;IACf,kBAAkB;CAAE", "file": "BreadcrumbBar.vue", "sourcesContent": ["#breadcrumb {\n  min-height: 38px; }\n  #breadcrumb .icon {\n    max-height: 20px; }\n  #breadcrumb .disabled {\n    opacity: 0.5; }\n  #breadcrumb .icon-wrapp {\n    display: block;\n    padding: 8px 15px; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 360 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n#actions-bar-btn--file-input[data-v-da4f7da2] {\n  display: none;\n}\n.file-input[data-v-da4f7da2] {\n  margin: 0;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/AddFilesBtn.vue"], "names": [], "mappings": ";AAAA;EACE,cAAc;CAAE;AAElB;EACE,UAAU;CAAE", "file": "AddFilesBtn.vue", "sourcesContent": ["#actions-bar-btn--file-input {\n  display: none; }\n\n.file-input {\n  margin: 0; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 361 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.action-btn.action-btn-sm a[data-v-e5563536] {\n  height: auto;\n  margin-bottom: 2px;\n}\n.action-btn.action-btn-sm a .action-icon[data-v-e5563536] {\n    display: inline-block;\n    margin: 0 auto;\n    max-height: 20px;\n    max-width: 20px;\n}\n.action-btn.action-btn-sm a .action-text[data-v-e5563536] {\n    display: inline-block;\n}\n.action-btn a[data-v-e5563536] {\n  display: block;\n  padding: 0 4px;\n  margin: 4px;\n}\n.action-btn a .action-icon[data-v-e5563536] {\n    display: block;\n    margin: 0 auto;\n    max-height: 56px;\n    max-width: 56px;\n}\n.action-btn a .action-text[data-v-e5563536] {\n    text-align: center;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/Btn.vue"], "names": [], "mappings": ";AAAA;EACE,aAAa;EACb,mBAAmB;CAAE;AACrB;IACE,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;CAAE;AACpB;IACE,sBAAsB;CAAE;AAE5B;EACE,eAAe;EACf,eAAe;EACf,YAAY;CAAE;AACd;IACE,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,gBAAgB;CAAE;AACpB;IACE,mBAAmB;CAAE", "file": "Btn.vue", "sourcesContent": [".action-btn.action-btn-sm a {\n  height: auto;\n  margin-bottom: 2px; }\n  .action-btn.action-btn-sm a .action-icon {\n    display: inline-block;\n    margin: 0 auto;\n    max-height: 20px;\n    max-width: 20px; }\n  .action-btn.action-btn-sm a .action-text {\n    display: inline-block; }\n\n.action-btn a {\n  display: block;\n  padding: 0 4px;\n  margin: 4px; }\n  .action-btn a .action-icon {\n    display: block;\n    margin: 0 auto;\n    max-height: 56px;\n    max-width: 56px; }\n  .action-btn a .action-text {\n    text-align: center; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 362 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(20)();
        // imports


        // module
        exports.push([module.i, "\n.context-menu {\n  background: #F5F6F7;\n  border: 1px solid #D9D9D9;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 250px;\n  z-index: 999999;\n}\n.context-menu li {\n    border-bottom: 1px solid #D9D9D9;\n    margin: 0;\n}\n.context-menu li:last-child {\n      border-bottom: none;\n}\n.context-menu li .content {\n      display: block;\n      padding: 5px;\n}\n", "", { "version": 3, "sources": ["/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/ContextMenu.vue"], "names": [], "mappings": ";AAAA;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,gHAAgH;EAChH,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,gBAAgB;CAAE;AAClB;IACE,iCAAiC;IACjC,UAAU;CAAE;AACZ;MACE,oBAAoB;CAAE;AACxB;MACE,eAAe;MACf,aAAa;CAAE", "file": "ContextMenu.vue", "sourcesContent": [".context-menu {\n  background: #F5F6F7;\n  border: 1px solid #D9D9D9;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 250px;\n  z-index: 999999; }\n  .context-menu li {\n    border-bottom: 1px solid #D9D9D9;\n    margin: 0; }\n    .context-menu li:last-child {\n      border-bottom: none; }\n    .context-menu li .content {\n      display: block;\n      padding: 5px; }\n"], "sourceRoot": "" }]);

        // exports


        /***/
    }),
    /* 363 */
    /***/
    (function(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/
    }),
    /* 364 */
    /***/
    (function(module, exports) {

        // shim for using process in browser
        var process = module.exports = {};

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
            throw new Error('clearTimeout has not been defined');
        }
        (function() {
            try {
                if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                } else {
                    cachedSetTimeout = defaultSetTimout;
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                } else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }())

        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }


        }

        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }



        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }

        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }

        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        };

        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function(name) { return [] }

        process.binding = function(name) {
            throw new Error('process.binding is not supported');
        };

        process.cwd = function() { return '/' };
        process.chdir = function(dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function() { return 0; };


        /***/
    }),
    /* 365 */
    /***/
    (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function(global) {
            /**
             * Copyright (c) 2014, Facebook, Inc.
             * All rights reserved.
             *
             * This source code is licensed under the BSD-style license found in the
             * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
             * additional grant of patent rights can be found in the PATENTS file in
             * the same directory.
             */

            !(function(global) {
                "use strict";

                var Op = Object.prototype;
                var hasOwn = Op.hasOwnProperty;
                var undefined; // More compressible than void 0.
                var $Symbol = typeof Symbol === "function" ? Symbol : {};
                var iteratorSymbol = $Symbol.iterator || "@@iterator";
                var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
                var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

                var inModule = typeof module === "object";
                var runtime = global.regeneratorRuntime;
                if (runtime) {
                    if (inModule) {
                        // If regeneratorRuntime is defined globally and we're in a module,
                        // make the exports object identical to regeneratorRuntime.
                        module.exports = runtime;
                    }
                    // Don't bother evaluating the rest of this file if the runtime was
                    // already defined globally.
                    return;
                }

                // Define the runtime globally (as expected by generated code) as either
                // module.exports (if we're in a module) or a new, empty object.
                runtime = global.regeneratorRuntime = inModule ? module.exports : {};

                function wrap(innerFn, outerFn, self, tryLocsList) {
                    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                    var generator = Object.create(protoGenerator.prototype);
                    var context = new Context(tryLocsList || []);

                    // The ._invoke method unifies the implementations of the .next,
                    // .throw, and .return methods.
                    generator._invoke = makeInvokeMethod(innerFn, self, context);

                    return generator;
                }
                runtime.wrap = wrap;

                // Try/catch helper to minimize deoptimizations. Returns a completion
                // record like context.tryEntries[i].completion. This interface could
                // have been (and was previously) designed to take a closure to be
                // invoked without arguments, but in all the cases we care about we
                // already have an existing method we want to call, so there's no need
                // to create a new function object. We can even get away with assuming
                // the method takes exactly one argument, since that happens to be true
                // in every case, so we don't have to touch the arguments object. The
                // only additional allocation required is the completion record, which
                // has a stable shape and so hopefully should be cheap to allocate.
                function tryCatch(fn, obj, arg) {
                    try {
                        return { type: "normal", arg: fn.call(obj, arg) };
                    } catch (err) {
                        return { type: "throw", arg: err };
                    }
                }

                var GenStateSuspendedStart = "suspendedStart";
                var GenStateSuspendedYield = "suspendedYield";
                var GenStateExecuting = "executing";
                var GenStateCompleted = "completed";

                // Returning this object from the innerFn has the same effect as
                // breaking out of the dispatch switch statement.
                var ContinueSentinel = {};

                // Dummy constructor functions that we use as the .constructor and
                // .constructor.prototype properties for functions that return Generator
                // objects. For full spec compliance, you may wish to configure your
                // minifier not to mangle the names of these two functions.
                function Generator() {}

                function GeneratorFunction() {}

                function GeneratorFunctionPrototype() {}

                // This is a polyfill for %IteratorPrototype% for environments that
                // don't natively support it.
                var IteratorPrototype = {};
                IteratorPrototype[iteratorSymbol] = function() {
                    return this;
                };

                var getProto = Object.getPrototypeOf;
                var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
                if (NativeIteratorPrototype &&
                    NativeIteratorPrototype !== Op &&
                    hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                    // This environment has a native %IteratorPrototype%; use it instead
                    // of the polyfill.
                    IteratorPrototype = NativeIteratorPrototype;
                }

                var Gp = GeneratorFunctionPrototype.prototype =
                    Generator.prototype = Object.create(IteratorPrototype);
                GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
                GeneratorFunctionPrototype.constructor = GeneratorFunction;
                GeneratorFunctionPrototype[toStringTagSymbol] =
                    GeneratorFunction.displayName = "GeneratorFunction";

                // Helper for defining the .next, .throw, and .return methods of the
                // Iterator interface in terms of a single ._invoke method.
                function defineIteratorMethods(prototype) {
                    ["next", "throw", "return"].forEach(function(method) {
                        prototype[method] = function(arg) {
                            return this._invoke(method, arg);
                        };
                    });
                }

                runtime.isGeneratorFunction = function(genFun) {
                    var ctor = typeof genFun === "function" && genFun.constructor;
                    return ctor ?
                        ctor === GeneratorFunction ||
                        // For the native GeneratorFunction constructor, the best we can
                        // do is to check its .name property.
                        (ctor.displayName || ctor.name) === "GeneratorFunction" :
                        false;
                };

                runtime.mark = function(genFun) {
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                    } else {
                        genFun.__proto__ = GeneratorFunctionPrototype;
                        if (!(toStringTagSymbol in genFun)) {
                            genFun[toStringTagSymbol] = "GeneratorFunction";
                        }
                    }
                    genFun.prototype = Object.create(Gp);
                    return genFun;
                };

                // Within the body of any async function, `await x` is transformed to
                // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
                // `hasOwn.call(value, "__await")` to determine if the yielded value is
                // meant to be awaited.
                runtime.awrap = function(arg) {
                    return { __await: arg };
                };

                function AsyncIterator(generator) {
                    function invoke(method, arg, resolve, reject) {
                        var record = tryCatch(generator[method], generator, arg);
                        if (record.type === "throw") {
                            reject(record.arg);
                        } else {
                            var result = record.arg;
                            var value = result.value;
                            if (value &&
                                typeof value === "object" &&
                                hasOwn.call(value, "__await")) {
                                return Promise.resolve(value.__await).then(function(value) {
                                    invoke("next", value, resolve, reject);
                                }, function(err) {
                                    invoke("throw", err, resolve, reject);
                                });
                            }

                            return Promise.resolve(value).then(function(unwrapped) {
                                // When a yielded Promise is resolved, its final value becomes
                                // the .value of the Promise<{value,done}> result for the
                                // current iteration. If the Promise is rejected, however, the
                                // result for this iteration will be rejected with the same
                                // reason. Note that rejections of yielded Promises are not
                                // thrown back into the generator function, as is the case
                                // when an awaited Promise is rejected. This difference in
                                // behavior between yield and await is important, because it
                                // allows the consumer to decide what to do with the yielded
                                // rejection (swallow it and continue, manually .throw it back
                                // into the generator, abandon iteration, whatever). With
                                // await, by contrast, there is no opportunity to examine the
                                // rejection reason outside the generator function, so the
                                // only option is to throw it from the await expression, and
                                // let the generator function handle the exception.
                                result.value = unwrapped;
                                resolve(result);
                            }, reject);
                        }
                    }

                    if (typeof global.process === "object" && global.process.domain) {
                        invoke = global.process.domain.bind(invoke);
                    }

                    var previousPromise;

                    function enqueue(method, arg) {
                        function callInvokeWithMethodAndArg() {
                            return new Promise(function(resolve, reject) {
                                invoke(method, arg, resolve, reject);
                            });
                        }

                        return previousPromise =
                            // If enqueue has been called before, then we want to wait until
                            // all previous Promises have been resolved before calling invoke,
                            // so that results are always delivered in the correct order. If
                            // enqueue has not been called before, then it is important to
                            // call invoke immediately, without waiting on a callback to fire,
                            // so that the async generator function has the opportunity to do
                            // any necessary setup in a predictable way. This predictability
                            // is why the Promise constructor synchronously invokes its
                            // executor callback, and why async functions synchronously
                            // execute code before the first await. Since we implement simple
                            // async functions in terms of async generators, it is especially
                            // important to get this right, even though it requires care.
                            previousPromise ? previousPromise.then(
                                callInvokeWithMethodAndArg,
                                // Avoid propagating failures to Promises returned by later
                                // invocations of the iterator.
                                callInvokeWithMethodAndArg
                            ) : callInvokeWithMethodAndArg();
                    }

                    // Define the unified helper method that is used to implement .next,
                    // .throw, and .return (see defineIteratorMethods).
                    this._invoke = enqueue;
                }

                defineIteratorMethods(AsyncIterator.prototype);
                AsyncIterator.prototype[asyncIteratorSymbol] = function() {
                    return this;
                };
                runtime.AsyncIterator = AsyncIterator;

                // Note that simple async functions are implemented on top of
                // AsyncIterator objects; they just return a Promise for the value of
                // the final result produced by the iterator.
                runtime.async = function(innerFn, outerFn, self, tryLocsList) {
                    var iter = new AsyncIterator(
                        wrap(innerFn, outerFn, self, tryLocsList)
                    );

                    return runtime.isGeneratorFunction(outerFn) ?
                        iter // If outerFn is a generator, return the full iterator.
                        :
                        iter.next().then(function(result) {
                            return result.done ? result.value : iter.next();
                        });
                };

                function makeInvokeMethod(innerFn, self, context) {
                    var state = GenStateSuspendedStart;

                    return function invoke(method, arg) {
                        if (state === GenStateExecuting) {
                            throw new Error("Generator is already running");
                        }

                        if (state === GenStateCompleted) {
                            if (method === "throw") {
                                throw arg;
                            }

                            // Be forgiving, per 25.3.3.3.3 of the spec:
                            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                            return doneResult();
                        }

                        context.method = method;
                        context.arg = arg;

                        while (true) {
                            var delegate = context.delegate;
                            if (delegate) {
                                var delegateResult = maybeInvokeDelegate(delegate, context);
                                if (delegateResult) {
                                    if (delegateResult === ContinueSentinel) continue;
                                    return delegateResult;
                                }
                            }

                            if (context.method === "next") {
                                // Setting context._sent for legacy support of Babel's
                                // function.sent implementation.
                                context.sent = context._sent = context.arg;

                            } else if (context.method === "throw") {
                                if (state === GenStateSuspendedStart) {
                                    state = GenStateCompleted;
                                    throw context.arg;
                                }

                                context.dispatchException(context.arg);

                            } else if (context.method === "return") {
                                context.abrupt("return", context.arg);
                            }

                            state = GenStateExecuting;

                            var record = tryCatch(innerFn, self, context);
                            if (record.type === "normal") {
                                // If an exception is thrown from innerFn, we leave state ===
                                // GenStateExecuting and loop back for another invocation.
                                state = context.done ?
                                    GenStateCompleted :
                                    GenStateSuspendedYield;

                                if (record.arg === ContinueSentinel) {
                                    continue;
                                }

                                return {
                                    value: record.arg,
                                    done: context.done
                                };

                            } else if (record.type === "throw") {
                                state = GenStateCompleted;
                                // Dispatch the exception by looping back around to the
                                // context.dispatchException(context.arg) call above.
                                context.method = "throw";
                                context.arg = record.arg;
                            }
                        }
                    };
                }

                // Call delegate.iterator[context.method](context.arg) and handle the
                // result, either by returning a { value, done } result from the
                // delegate iterator, or by modifying context.method and context.arg,
                // setting context.delegate to null, and returning the ContinueSentinel.
                function maybeInvokeDelegate(delegate, context) {
                    var method = delegate.iterator[context.method];
                    if (method === undefined) {
                        // A .throw or .return when the delegate iterator has no .throw
                        // method always terminates the yield* loop.
                        context.delegate = null;

                        if (context.method === "throw") {
                            if (delegate.iterator.return) {
                                // If the delegate iterator has a return method, give it a
                                // chance to clean up.
                                context.method = "return";
                                context.arg = undefined;
                                maybeInvokeDelegate(delegate, context);

                                if (context.method === "throw") {
                                    // If maybeInvokeDelegate(context) changed context.method from
                                    // "return" to "throw", let that override the TypeError below.
                                    return ContinueSentinel;
                                }
                            }

                            context.method = "throw";
                            context.arg = new TypeError(
                                "The iterator does not provide a 'throw' method");
                        }

                        return ContinueSentinel;
                    }

                    var record = tryCatch(method, delegate.iterator, context.arg);

                    if (record.type === "throw") {
                        context.method = "throw";
                        context.arg = record.arg;
                        context.delegate = null;
                        return ContinueSentinel;
                    }

                    var info = record.arg;

                    if (!info) {
                        context.method = "throw";
                        context.arg = new TypeError("iterator result is not an object");
                        context.delegate = null;
                        return ContinueSentinel;
                    }

                    if (info.done) {
                        // Assign the result of the finished delegate to the temporary
                        // variable specified by delegate.resultName (see delegateYield).
                        context[delegate.resultName] = info.value;

                        // Resume execution at the desired location (see delegateYield).
                        context.next = delegate.nextLoc;

                        // If context.method was "throw" but the delegate handled the
                        // exception, let the outer generator proceed normally. If
                        // context.method was "next", forget context.arg since it has been
                        // "consumed" by the delegate iterator. If context.method was
                        // "return", allow the original .return call to continue in the
                        // outer generator.
                        if (context.method !== "return") {
                            context.method = "next";
                            context.arg = undefined;
                        }

                    } else {
                        // Re-yield the result returned by the delegate method.
                        return info;
                    }

                    // The delegate iterator is finished, so forget it and continue with
                    // the outer generator.
                    context.delegate = null;
                    return ContinueSentinel;
                }

                // Define Generator.prototype.{next,throw,return} in terms of the
                // unified ._invoke helper method.
                defineIteratorMethods(Gp);

                Gp[toStringTagSymbol] = "Generator";

                // A Generator should always return itself as the iterator object when the
                // @@iterator function is called on it. Some browsers' implementations of the
                // iterator prototype chain incorrectly implement this, causing the Generator
                // object to not be returned from this call. This ensures that doesn't happen.
                // See https://github.com/facebook/regenerator/issues/274 for more details.
                Gp[iteratorSymbol] = function() {
                    return this;
                };

                Gp.toString = function() {
                    return "[object Generator]";
                };

                function pushTryEntry(locs) {
                    var entry = { tryLoc: locs[0] };

                    if (1 in locs) {
                        entry.catchLoc = locs[1];
                    }

                    if (2 in locs) {
                        entry.finallyLoc = locs[2];
                        entry.afterLoc = locs[3];
                    }

                    this.tryEntries.push(entry);
                }

                function resetTryEntry(entry) {
                    var record = entry.completion || {};
                    record.type = "normal";
                    delete record.arg;
                    entry.completion = record;
                }

                function Context(tryLocsList) {
                    // The root entry object (effectively a try statement without a catch
                    // or a finally block) gives us a place to store values thrown from
                    // locations where there is no enclosing try statement.
                    this.tryEntries = [{ tryLoc: "root" }];
                    tryLocsList.forEach(pushTryEntry, this);
                    this.reset(true);
                }

                runtime.keys = function(object) {
                    var keys = [];
                    for (var key in object) {
                        keys.push(key);
                    }
                    keys.reverse();

                    // Rather than returning an object with a next method, we keep
                    // things simple and return the next function itself.
                    return function next() {
                        while (keys.length) {
                            var key = keys.pop();
                            if (key in object) {
                                next.value = key;
                                next.done = false;
                                return next;
                            }
                        }

                        // To avoid creating an additional object, we just hang the .value
                        // and .done properties off the next function object itself. This
                        // also ensures that the minifier will not anonymize the function.
                        next.done = true;
                        return next;
                    };
                };

                function values(iterable) {
                    if (iterable) {
                        var iteratorMethod = iterable[iteratorSymbol];
                        if (iteratorMethod) {
                            return iteratorMethod.call(iterable);
                        }

                        if (typeof iterable.next === "function") {
                            return iterable;
                        }

                        if (!isNaN(iterable.length)) {
                            var i = -1,
                                next = function next() {
                                    while (++i < iterable.length) {
                                        if (hasOwn.call(iterable, i)) {
                                            next.value = iterable[i];
                                            next.done = false;
                                            return next;
                                        }
                                    }

                                    next.value = undefined;
                                    next.done = true;

                                    return next;
                                };

                            return next.next = next;
                        }
                    }

                    // Return an iterator with no values.
                    return { next: doneResult };
                }
                runtime.values = values;

                function doneResult() {
                    return { value: undefined, done: true };
                }

                Context.prototype = {
                    constructor: Context,

                    reset: function(skipTempReset) {
                        this.prev = 0;
                        this.next = 0;
                        // Resetting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        this.sent = this._sent = undefined;
                        this.done = false;
                        this.delegate = null;

                        this.method = "next";
                        this.arg = undefined;

                        this.tryEntries.forEach(resetTryEntry);

                        if (!skipTempReset) {
                            for (var name in this) {
                                // Not sure about the optimal order of these conditions:
                                if (name.charAt(0) === "t" &&
                                    hasOwn.call(this, name) &&
                                    !isNaN(+name.slice(1))) {
                                    this[name] = undefined;
                                }
                            }
                        }
                    },

                    stop: function() {
                        this.done = true;

                        var rootEntry = this.tryEntries[0];
                        var rootRecord = rootEntry.completion;
                        if (rootRecord.type === "throw") {
                            throw rootRecord.arg;
                        }

                        return this.rval;
                    },

                    dispatchException: function(exception) {
                        if (this.done) {
                            throw exception;
                        }

                        var context = this;

                        function handle(loc, caught) {
                            record.type = "throw";
                            record.arg = exception;
                            context.next = loc;

                            if (caught) {
                                // If the dispatched exception was caught by a catch block,
                                // then let that catch block handle the exception normally.
                                context.method = "next";
                                context.arg = undefined;
                            }

                            return !!caught;
                        }

                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            var record = entry.completion;

                            if (entry.tryLoc === "root") {
                                // Exception thrown outside of any try block that could handle
                                // it, so set the completion value of the entire function to
                                // throw the exception.
                                return handle("end");
                            }

                            if (entry.tryLoc <= this.prev) {
                                var hasCatch = hasOwn.call(entry, "catchLoc");
                                var hasFinally = hasOwn.call(entry, "finallyLoc");

                                if (hasCatch && hasFinally) {
                                    if (this.prev < entry.catchLoc) {
                                        return handle(entry.catchLoc, true);
                                    } else if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }

                                } else if (hasCatch) {
                                    if (this.prev < entry.catchLoc) {
                                        return handle(entry.catchLoc, true);
                                    }

                                } else if (hasFinally) {
                                    if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }

                                } else {
                                    throw new Error("try statement without catch or finally");
                                }
                            }
                        }
                    },

                    abrupt: function(type, arg) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc <= this.prev &&
                                hasOwn.call(entry, "finallyLoc") &&
                                this.prev < entry.finallyLoc) {
                                var finallyEntry = entry;
                                break;
                            }
                        }

                        if (finallyEntry &&
                            (type === "break" ||
                                type === "continue") &&
                            finallyEntry.tryLoc <= arg &&
                            arg <= finallyEntry.finallyLoc) {
                            // Ignore the finally entry if control is not jumping to a
                            // location outside the try/catch block.
                            finallyEntry = null;
                        }

                        var record = finallyEntry ? finallyEntry.completion : {};
                        record.type = type;
                        record.arg = arg;

                        if (finallyEntry) {
                            this.method = "next";
                            this.next = finallyEntry.finallyLoc;
                            return ContinueSentinel;
                        }

                        return this.complete(record);
                    },

                    complete: function(record, afterLoc) {
                        if (record.type === "throw") {
                            throw record.arg;
                        }

                        if (record.type === "break" ||
                            record.type === "continue") {
                            this.next = record.arg;
                        } else if (record.type === "return") {
                            this.rval = this.arg = record.arg;
                            this.method = "return";
                            this.next = "end";
                        } else if (record.type === "normal" && afterLoc) {
                            this.next = afterLoc;
                        }

                        return ContinueSentinel;
                    },

                    finish: function(finallyLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.finallyLoc === finallyLoc) {
                                this.complete(entry.completion, entry.afterLoc);
                                resetTryEntry(entry);
                                return ContinueSentinel;
                            }
                        }
                    },

                    "catch": function(tryLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc === tryLoc) {
                                var record = entry.completion;
                                if (record.type === "throw") {
                                    var thrown = record.arg;
                                    resetTryEntry(entry);
                                }
                                return thrown;
                            }
                        }

                        // The context.catch method must only be called with a location
                        // argument that corresponds to a known catch block.
                        throw new Error("illegal catch attempt");
                    },

                    delegateYield: function(iterable, resultName, nextLoc) {
                        this.delegate = {
                            iterator: values(iterable),
                            resultName: resultName,
                            nextLoc: nextLoc
                        };

                        if (this.method === "next") {
                            // Deliberately forget the last sent value so that we don't
                            // accidentally pass it on to the delegate.
                            this.arg = undefined;
                        }

                        return ContinueSentinel;
                    }
                };
            })(
                // Among the various tricks for obtaining a reference to the global
                // object, this seems to be the most reliable technique that does not
                // use indirect eval (which violates Content Security Policy).
                typeof global === "object" ? global :
                typeof window === "object" ? window :
                typeof self === "object" ? self : this
            );

            /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(100)))

        /***/
    }),
    /* 366 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        var Vue = __webpack_require__(31);
        Vue = 'default' in Vue ? Vue['default'] : Vue;

        var version = '2.1.0';

        var compatible = (/^2\./).test(Vue.version);
        if (!compatible) {
            Vue.util.warn('VueFocus ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
        }

        var focus = {
            inserted: function(el, binding) {
                if (binding.value) el.focus();
                else el.blur();
            },

            componentUpdated: function(el, binding) {
                if (binding.modifiers.lazy) {
                    if (Boolean(binding.value) === Boolean(binding.oldValue)) {
                        return;
                    }
                }

                if (binding.value) el.focus();
                else el.blur();
            },
        };

        var mixin = {
            directives: {
                focus: focus,
            },
        };

        exports.version = version;
        exports.focus = focus;
        exports.mixin = mixin;

        /***/
    }),
    /* 367 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(418)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(147),
            /* template */
            __webpack_require__(401),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/App.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-5bcdaf03", Component.options)
                } else {
                    hotAPI.reload("data-v-5bcdaf03", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 368 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(410)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(148),
            /* template */
            __webpack_require__(387),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/ActionsBar.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] ActionsBar.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-05bc3c46", Component.options)
                } else {
                    hotAPI.reload("data-v-05bc3c46", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 369 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(420)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(149),
            /* template */
            __webpack_require__(406),
            /* scopeId */
            "data-v-da4f7da2",
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/AddFilesBtn.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] AddFilesBtn.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-da4f7da2", Component.options)
                } else {
                    hotAPI.reload("data-v-da4f7da2", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 370 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(151),
            /* template */
            __webpack_require__(389),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/ChangeFilterBtn.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] ChangeFilterBtn.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-11785906", Component.options)
                } else {
                    hotAPI.reload("data-v-11785906", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 371 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(152),
            /* template */
            __webpack_require__(395),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/ChangeViewBtn.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] ChangeViewBtn.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-27a5bbf0", Component.options)
                } else {
                    hotAPI.reload("data-v-27a5bbf0", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 372 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(153),
            /* template */
            __webpack_require__(394),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/CreateFolderBtn.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] CreateFolderBtn.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-2625e00a", Component.options)
                } else {
                    hotAPI.reload("data-v-2625e00a", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 373 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(154),
            /* template */
            __webpack_require__(404),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/DeleteBtn.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] DeleteBtn.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-94720f0c", Component.options)
                } else {
                    hotAPI.reload("data-v-94720f0c", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 374 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(155),
            /* template */
            __webpack_require__(388),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/RenameBtn.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] RenameBtn.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-0bb5eb87", Component.options)
                } else {
                    hotAPI.reload("data-v-0bb5eb87", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 375 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(156),
            /* template */
            __webpack_require__(405),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/actions-bar/StartUploadBtn.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] StartUploadBtn.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-a4219d40", Component.options)
                } else {
                    hotAPI.reload("data-v-a4219d40", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 376 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(158),
            /* template */
            __webpack_require__(403),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/BlobNewFolder.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] BlobNewFolder.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-70f1f549", Component.options)
                } else {
                    hotAPI.reload("data-v-70f1f549", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 377 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(159),
            /* template */
            __webpack_require__(393),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/BlobUp.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] BlobUp.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-21990990", Component.options)
                } else {
                    hotAPI.reload("data-v-21990990", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 378 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(412)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(160),
            /* template */
            __webpack_require__(391),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/Blobs.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] Blobs.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-1b65742e", Component.options)
                } else {
                    hotAPI.reload("data-v-1b65742e", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 379 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(417)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(161),
            /* template */
            __webpack_require__(400),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/ContentContainer.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] ContentContainer.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-534e2280", Component.options)
                } else {
                    hotAPI.reload("data-v-534e2280", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 380 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(422)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(162),
            /* template */
            __webpack_require__(408),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/content/ContextMenu.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] ContextMenu.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-faebe934", Component.options)
                } else {
                    hotAPI.reload("data-v-faebe934", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 381 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(414)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(163),
            /* template */
            __webpack_require__(397),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/tree/Tree.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] Tree.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-3b37d7fd", Component.options)
                } else {
                    hotAPI.reload("data-v-3b37d7fd", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 382 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(413)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(164),
            /* template */
            __webpack_require__(392),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/tree/TreeItem.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] TreeItem.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-1b8ebb30", Component.options)
                } else {
                    hotAPI.reload("data-v-1b8ebb30", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 383 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(415)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(165),
            /* template */
            __webpack_require__(398),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/uploads/UploadBlob.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] UploadBlob.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-4055057d", Component.options)
                } else {
                    hotAPI.reload("data-v-4055057d", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 384 */
    /***/
    (function(module, exports, __webpack_require__) {

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(166),
            /* template */
            __webpack_require__(396),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/body/uploads/Uploads.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] Uploads.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-27eae63a", Component.options)
                } else {
                    hotAPI.reload("data-v-27eae63a", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 385 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(416)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(167),
            /* template */
            __webpack_require__(399),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/breadcrumb-bar/Breadcrumb.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] Breadcrumb.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-4a4411de", Component.options)
                } else {
                    hotAPI.reload("data-v-4a4411de", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 386 */
    /***/
    (function(module, exports, __webpack_require__) {


        /* styles */
        __webpack_require__(419)

        var Component = __webpack_require__(6)(
            /* script */
            __webpack_require__(168),
            /* template */
            __webpack_require__(402),
            /* scopeId */
            null,
            /* cssModules */
            null
        )
        Component.options.__file = "/Applications/XAMPP/xamppfiles/htdocs/www/170628_bbinpartner/vendor/crip-laravel/filesys/src/resources/assets/components/breadcrumb-bar/BreadcrumbBar.vue"
        if (Component.esModule && Object.keys(Component.esModule).some(function(key) { return key !== "default" && key !== "__esModule" })) { console.error("named exports are not supported in *.vue files.") }
        if (Component.options.functional) { console.error("[vue-loader] BreadcrumbBar.vue: functional components are not supported with templates, they should use render functions.") }

        /* hot reload */
        if (false) {
            (function() {
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), false)
                if (!hotAPI.compatible) return
                module.hot.accept()
                if (!module.hot.data) {
                    hotAPI.createRecord("data-v-65409805", Component.options)
                } else {
                    hotAPI.reload("data-v-65409805", Component.options)
                }
            })()
        }

        module.exports = Component.exports


        /***/
    }),
    /* 387 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: "row"
                }, [_c('div', {
                    staticClass: "manager-actions clearfix"
                }, [_c('div', {
                    staticClass: "group"
                }, [_c('add-files-btn', {
                    staticClass: "col"
                }), _vm._v(" "), _c('start-upload-btn', {
                    staticClass: "col"
                }), _vm._v(" "), _c('create-folder-btn', {
                    staticClass: "col"
                })], 1), _vm._v(" "), _c('div', {
                    staticClass: "group"
                }, [_c('div', {
                    staticClass: "col"
                }, [_c('change-view-btn', {
                    attrs: {
                        "view": "grid"
                    }
                }, [_vm._v("Grid view")]), _vm._v(" "), _c('change-view-btn', {
                    attrs: {
                        "view": "list"
                    }
                }, [_vm._v("List view")])], 1)]), _vm._v(" "), _c('div', {
                    staticClass: "group"
                }, [_c('div', {
                    staticClass: "col"
                }, [_c('change-filter-btn', {
                    attrs: {
                        "filter": "image",
                        "title": "View only images"
                    }
                }, [_vm._v("Images")]), _vm._v(" "), _c('change-filter-btn', {
                    attrs: {
                        "filter": "media",
                        "title": "View only media files"
                    }
                }, [_vm._v("Media")]), _vm._v(" "), _c('change-filter-btn', {
                    attrs: {
                        "filter": "document",
                        "title": "View only documents"
                    }
                }, [_vm._v("Docs")])], 1)]), _vm._v(" "), _c('div', {
                    staticClass: "group"
                }, [_c('rename-btn', {
                    staticClass: "col"
                }), _vm._v(" "), _c('delete-btn', {
                    staticClass: "col"
                })], 1)])])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-05bc3c46", module.exports)
            }
        }

        /***/
    }),
    /* 388 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('btn', {
                    attrs: {
                        "size": "lg",
                        "icon": "rename",
                        "active": _vm.isRenameBlobActive,
                        "disabled": _vm.isRenameBlobDisabled
                    },
                    on: {
                        "click": _vm.enableBlobRename
                    }
                }, [_vm._v("\n  " + _vm._s(_vm.content) + "\n")])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-0bb5eb87", module.exports)
            }
        }

        /***/
    }),
    /* 389 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('btn', {
                    attrs: {
                        "size": "sm",
                        "active": _vm.isFilterActive,
                        "disabled": _vm.isFiltersDisabled,
                        "icon": _vm.filter
                    },
                    on: {
                        "click": _vm.toggleFilter
                    }
                }, [_vm._t("default")], 2)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-11785906", module.exports)
            }
        }

        /***/
    }),
    /* 390 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: "blob inte-item transition-all",
                    class: _vm.classes,
                    attrs: {
                        "title": _vm.title
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.selectBlob($event)
                        }
                    }
                }, [_c('div', {
                    staticClass: "thumb",
                    on: {
                        "dblclick": function($event) {
                            $event.preventDefault();
                            _vm.openBlob($event)
                        }
                    }
                }, [_c('img', {
                    attrs: {
                        "src": '..' + _vm.blob.thumb
                    }
                })]), _vm._v(" "), (_vm.blob.$rename) ? _c('div', [_c('form', {
                    on: {
                        "submit": function($event) {
                            $event.preventDefault();
                            _vm.saveBlob($event)
                        }
                    }
                }, [_c('input', {
                    directives: [{
                        name: "focus",
                        rawName: "v-focus",
                        value: (true),
                        expression: "true"
                    }, {
                        name: "model",
                        rawName: "v-model",
                        value: (_vm.blob.$newName),
                        expression: "blob.$newName"
                    }],
                    attrs: {
                        "name": "name",
                        "id": 'blob-input-' + _vm.blob.$id
                    },
                    domProps: {
                        "value": (_vm.blob.$newName)
                    },
                    on: {
                        "focus": function($event) {
                            $event.target.select()
                        },
                        "input": function($event) {
                            if ($event.target.composing) { return; }
                            _vm.blob.$newName = $event.target.value
                        }
                    }
                })])]) : _c('div', {
                    staticClass: "blob-description",
                    on: {
                        "dblclick": function($event) {
                            $event.preventDefault();
                            _vm.enableRename($event)
                        }
                    }
                }, [_vm._v("\n    " + _vm._s(_vm.blob.fullName) + "\n  ")])])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-198a1f95", module.exports)
            }
        }

        /***/
    }),
    /* 391 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: "row clearfix",
                    attrs: {
                        "id": "blobs"
                    }
                }, [_c('blob-new-folder'), _vm._v(" "), _c('blob-up'), _vm._v(" "), _c('transition-group', {
                    attrs: {
                        "name": "fade-x",
                        "tag": "div"
                    }
                }, _vm._l((_vm.content), function(blob) {
                    return _c('div', {
                        key: blob.$id,
                        staticClass: "blob-container fade-x"
                    }, [_c('div', {
                        staticClass: "context-wrapp",
                        on: {
                            "contextmenu": function($event) {
                                $event.preventDefault();
                                _vm.openContext($event, blob)
                            }
                        }
                    }, [_c('blob', {
                        attrs: {
                            "blob": blob
                        }
                    }), _vm._v(" "), _c('blob-context-menu', {
                        attrs: {
                            "blob": blob,
                            "event": _vm.event
                        }
                    })], 1)])
                }))], 1)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-1b65742e", module.exports)
            }
        }

        /***/
    }),
    /* 392 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', [_c('div', {
                    staticClass: "clearfix"
                }, [(_vm.item.children.length) ? _c('a', {
                    staticClass: "toggle inte-item transition-all",
                    class: {
                        disabled: _vm.isLoading
                    },
                    attrs: {
                        "href": ""
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.toggle($event)
                        }
                    }
                }, [_vm._v(_vm._s(_vm.stateSign))]) : _vm._e(), _vm._v(" "), _c('a', {
                    staticClass: "tree-link inte-item transition-all",
                    class: _vm.classes,
                    attrs: {
                        "href": ""
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.changePath($event)
                        }
                    }
                }, [_vm._v(_vm._s(_vm.item.name))])]), _vm._v(" "), _c('transition', {
                    attrs: {
                        "name": "fade-x-right"
                    }
                }, [(_vm.item.children.length && _vm.isOpen) ? _c('ul', {
                    staticClass: "fade-x-right"
                }, _vm._l((_vm.item.children), function(child) {
                    return _c('li', [_c('folder-tree-item', {
                        attrs: {
                            "item": child
                        }
                    })], 1)
                })) : _vm._e()])], 1)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-1b8ebb30", module.exports)
            }
        }

        /***/
    }),
    /* 393 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('transition', {
                    attrs: {
                        "name": "fade-x"
                    }
                }, [(_vm.isNotRootPath && _vm.isNotLoading) ? _c('div', {
                    staticClass: "blob-container fade-x"
                }, [_c('blob', {
                    attrs: {
                        "blob": _vm.blob
                    }
                })], 1) : _vm._e()])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-21990990", module.exports)
            }
        }

        /***/
    }),
    /* 394 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('btn', {
                    attrs: {
                        "size": "lg",
                        "icon": "add-folder",
                        "active": _vm.createFolderBlobIsVisible
                    },
                    on: {
                        "click": _vm.showCreateFolderBlob
                    }
                }, [_vm._v("\n  " + _vm._s(_vm.content) + "\n")])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-2625e00a", module.exports)
            }
        }

        /***/
    }),
    /* 395 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('btn', {
                    attrs: {
                        "size": "sm",
                        "active": _vm.isViewActive
                    },
                    on: {
                        "click": _vm.setView
                    }
                }, [_vm._t("default")], 2)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-27a5bbf0", module.exports)
            }
        }

        /***/
    }),
    /* 396 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: "row clearfix",
                    attrs: {
                        "id": "uploads"
                    }
                }, [_c('transition-group', {
                    staticClass: "clearfix",
                    attrs: {
                        "name": "fade-x",
                        "tag": "div"
                    }
                }, _vm._l((_vm.uploads), function(file, key) {
                    return _c('blob', {
                        key: key,
                        staticClass: "blob-container fade-x",
                        attrs: {
                            "file": file
                        }
                    })
                })), _vm._v(" "), (_vm.count > 0) ? _c('hr') : _vm._e()], 1)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-27eae63a", module.exports)
            }
        }

        /***/
    }),
    /* 397 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    attrs: {
                        "id": "tree"
                    }
                }, [_c('tree-item', {
                    staticClass: "root",
                    attrs: {
                        "item": _vm.root
                    }
                }), _vm._v(" "), _c('ul', {
                    staticClass: "root-ul"
                }, _vm._l((_vm.tree), function(item) {
                    return _c('li', [_c('tree-item', {
                        attrs: {
                            "item": item
                        }
                    })], 1)
                }))], 1)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-3b37d7fd", module.exports)
            }
        }

        /***/
    }),
    /* 398 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: "file-upload blob",
                    class: {
                        error: _vm.file.hasError
                    },
                    attrs: {
                        "title": _vm.file.title
                    }
                }, [_c('div', {
                    staticClass: "thumb no-margin"
                }, [_c('img', {
                    attrs: {
                        "src": _vm.file.src
                    }
                })]), _vm._v(" "), _c('div', {
                    staticClass: "actions clearfix"
                }, [(!_vm.file.hasError) ? _c('a', {
                    staticClass: "inte-item pull-left transition-all",
                    class: {
                        disabled: _vm.file.$loading
                    },
                    attrs: {
                        "href": "",
                        "title": "Start upload this file"
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.uploadFile($event)
                        }
                    }
                }, [_vm._v("Upload " + _vm._s(_vm.file.name))]) : _vm._e(), _vm._v(" "), _c('a', {
                    staticClass: "inte-item pull-right transition-all",
                    class: {
                        disabled: _vm.file.$loading
                    },
                    attrs: {
                        "href": "",
                        "title": "Delete file from queue"
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.removeUpload($event)
                        }
                    }
                }, [_vm._v("×")])])])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-4055057d", module.exports)
            }
        }

        /***/
    }),
    /* 399 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('ol', {
                    staticClass: "breadcrumb"
                }, _vm._l((_vm.items), function(item) {
                    return _c('li', {
                        class: {
                            active: item.isActive()
                        }
                    }, [(!item.isActive()) ? _c('a', {
                        attrs: {
                            "href": ""
                        },
                        on: {
                            "click": function($event) {
                                $event.preventDefault();
                                _vm.changePath(item.path)
                            }
                        }
                    }, [_vm._v("\n      " + _vm._s(item.text) + "\n    ")]) : _c('span', [_vm._v(_vm._s(item.text))])])
                }))
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-4a4411de", module.exports)
            }
        }

        /***/
    }),
    /* 400 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: "content-container",
                    class: [_vm.displayType]
                }, [_vm._t("default")], 2)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-534e2280", module.exports)
            }
        }

        /***/
    }),
    /* 401 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: "container-fluid"
                }, [_c('actions-bar', {
                    staticClass: "row"
                }), _vm._v(" "), _c('breadcrumb-bar', {
                    staticClass: "row"
                }), _vm._v(" "), _c('div', {
                    staticClass: "row"
                }, [_c('tree', {
                    staticClass: "col-sm-4 col-md-3"
                }), _vm._v(" "), _c('content-container', {
                    staticClass: "col-sm-8 col-md-9 position-inherit"
                }, [_c('uploads'), _vm._v(" "), _c('blobs')], 1)], 1)], 1)
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-5bcdaf03", module.exports)
            }
        }

        /***/
    }),
    /* 402 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    attrs: {
                        "id": "breadcrumb"
                    }
                }, [_c('div', {
                    staticClass: "col-xs-2 col-md-1",
                    class: {
                        disabled: _vm.isUpDisabled
                    }
                }, [_c('a', {
                    staticClass: "icon-wrapp",
                    attrs: {
                        "href": ""
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.changePath(_vm.up)
                        }
                    }
                }, [_c('img', {
                    staticClass: "icon",
                    attrs: {
                        "src": '..' + _vm.iconUp
                    }
                })])]), _vm._v(" "), _c('div', {
                    staticClass: "col-xs-8 col-md-10"
                }, [_c('breadcrumb')], 1), _vm._v(" "), _c('div', {
                    staticClass: "col-xs-2 col-md-1 text-right"
                }, [_c('a', {
                    staticClass: "icon-wrapp",
                    attrs: {
                        "href": ""
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.refreshContent($event)
                        }
                    }
                }, [_c('img', {
                    staticClass: "icon",
                    attrs: {
                        "src": '..' + _vm.iconRefresh
                    }
                })])])])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-65409805", module.exports)
            }
        }

        /***/
    }),
    /* 403 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('transition', {
                    attrs: {
                        "name": "fade-x-right"
                    }
                }, [(_vm.isNewFolderEnabled) ? _c('div', {
                    staticClass: "blob-container fade-x-right"
                }, [_c('blob', {
                    attrs: {
                        "blob": _vm.blob
                    }
                })], 1) : _vm._e()])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-70f1f549", module.exports)
            }
        }

        /***/
    }),
    /* 404 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('btn', {
                    attrs: {
                        "size": "lg",
                        "icon": "delete",
                        "disabled": _vm.isDeleteBlobDisabled
                    },
                    on: {
                        "click": _vm.deleteBlob
                    }
                }, [_vm._v("\n  Delete\n")])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-94720f0c", module.exports)
            }
        }

        /***/
    }),
    /* 405 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('transition', {
                    attrs: {
                        "name": "fade-y"
                    }
                }, [(_vm.hasUploads) ? _c('div', {
                    staticClass: "fade-y"
                }, [_c('btn', {
                    attrs: {
                        "size": "lg",
                        "icon": "upload"
                    },
                    on: {
                        "click": _vm.upload
                    }
                }, [_vm._v("Upload " + _vm._s(_vm.count) + " files")])], 1) : _vm._e()])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-a4219d40", module.exports)
            }
        }

        /***/
    }),
    /* 406 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', [_c('label', {
                    staticClass: "file-input",
                    attrs: {
                        "for": "actions-bar-btn--file-input"
                    }
                }, [_c('btn', {
                    attrs: {
                        "size": "lg",
                        "icon": "add"
                    }
                }, [_vm._v("Add files")])], 1), _vm._v(" "), _c('input', {
                    attrs: {
                        "id": "actions-bar-btn--file-input",
                        "type": "file",
                        "name": "upload-files",
                        "multiple": "multiple",
                        "accept": _vm.accept
                    },
                    on: {
                        "change": _vm.filesAdded
                    }
                })])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-da4f7da2", module.exports)
            }
        }

        /***/
    }),
    /* 407 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c('div', {
                    staticClass: "action-btn",
                    class: _vm.btnClass
                }, [_c('a', {
                    staticClass: "inte-item transition-all",
                    class: _vm.linkClass,
                    on: {
                        "click": _vm.onBtnClick
                    }
                }, [(_vm.hasIcon) ? _c('img', {
                    staticClass: "action-icon hidden-xs",
                    attrs: {
                        "src": '..' + _vm.iconUrl
                    }
                }) : _vm._e(), _vm._v(" "), _c('div', {
                    staticClass: "action-text"
                }, [_vm._t("default")], 2)])])
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-e5563536", module.exports)
            }
        }

        /***/
    }),
    /* 408 */
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return (_vm.blob.$isContextVisible) ? _c('ul', {
                    staticClass: "context-menu",
                    style: ({
                        top: _vm.positionTop,
                        left: _vm.positionLeft
                    }),
                    attrs: {
                        "tabindex": "-1",
                        "id": 'blob-context-' + _vm.blob.$id
                    }
                }, [(_vm.isDir) ? _c('li', [_c('a', {
                    staticClass: "content inte-item",
                    attrs: {
                        "href": ""
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.openBlob($event)
                        }
                    }
                }, [_vm._v("\n      Open folder "), _c('i', [_vm._v(_vm._s(_vm.blob.fullName))])])]) : _vm._e(), _vm._v(" "), (!_vm.isDir && !_vm.blob.$isSystem) ? _c('li', [_c('a', {
                    staticClass: "content inte-item",
                    attrs: {
                        "href": ""
                    },
                    on: {
                        "click": function($event) {
                            $event.preventDefault();
                            _vm.openBlob($event)
                        }
                    }
                }, [_vm._v("\n      Select\n      "), (_vm.blob.mime === 'img') ? _c('span', [_vm._v("image")]) : _c('span', [_vm._v("file")]), _vm._v(" " + _vm._s(_vm.blob.fullName) + "\n    ")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.sizes), function(size) {
                    return _c('li', [_c('a', {
                        staticClass: "content inte-item",
                        attrs: {
                            "href": ""
                        },
                        on: {
                            "click": function($event) {
                                $event.preventDefault();
                                _vm.openBlob(size.url)
                            }
                        }
                    }, [_vm._v("\n      Select "), _c('i', [_vm._v(_vm._s(size.name))]), _vm._v(" image\n      "), _c('small', [_vm._v("(" + _vm._s(size.width) + " x " + _vm._s(size.height) + ")")])])])
                }), _vm._v(" "), _c('li', [_c('span', {
                    staticClass: "content"
                }, [_vm._v("Modified: "), _c('strong', [_vm._v(_vm._s(_vm.blob.$date))])])]), _vm._v(" "), _c('li', [_c('span', {
                    staticClass: "content"
                }, [_vm._v("Size: "), _c('strong', [_vm._v(_vm._s(_vm.size))])])])], 2) : _vm._e()
            },
            staticRenderFns: []
        }
        module.exports.render._withStripped = true
        if (false) {
            module.hot.accept()
            if (module.hot.data) {
                require("vue-hot-reload-api").rerender("data-v-faebe934", module.exports)
            }
        }

        /***/
    }),
    /* 409 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
        /*!
         * vue-resource v1.3.4
         * https://github.com/pagekit/vue-resource
         * Released under the MIT License.
         */

        /**
         * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
         */

        var RESOLVED = 0;
        var REJECTED = 1;
        var PENDING = 2;

        function Promise$1(executor) {

            this.state = PENDING;
            this.value = undefined;
            this.deferred = [];

            var promise = this;

            try {
                executor(function(x) {
                    promise.resolve(x);
                }, function(r) {
                    promise.reject(r);
                });
            } catch (e) {
                promise.reject(e);
            }
        }

        Promise$1.reject = function(r) {
            return new Promise$1(function(resolve, reject) {
                reject(r);
            });
        };

        Promise$1.resolve = function(x) {
            return new Promise$1(function(resolve, reject) {
                resolve(x);
            });
        };

        Promise$1.all = function all(iterable) {
            return new Promise$1(function(resolve, reject) {
                var count = 0,
                    result = [];

                if (iterable.length === 0) {
                    resolve(result);
                }

                function resolver(i) {
                    return function(x) {
                        result[i] = x;
                        count += 1;

                        if (count === iterable.length) {
                            resolve(result);
                        }
                    };
                }

                for (var i = 0; i < iterable.length; i += 1) {
                    Promise$1.resolve(iterable[i]).then(resolver(i), reject);
                }
            });
        };

        Promise$1.race = function race(iterable) {
            return new Promise$1(function(resolve, reject) {
                for (var i = 0; i < iterable.length; i += 1) {
                    Promise$1.resolve(iterable[i]).then(resolve, reject);
                }
            });
        };

        var p$1 = Promise$1.prototype;

        p$1.resolve = function resolve(x) {
            var promise = this;

            if (promise.state === PENDING) {
                if (x === promise) {
                    throw new TypeError('Promise settled with itself.');
                }

                var called = false;

                try {
                    var then = x && x['then'];

                    if (x !== null && typeof x === 'object' && typeof then === 'function') {
                        then.call(x, function(x) {
                            if (!called) {
                                promise.resolve(x);
                            }
                            called = true;

                        }, function(r) {
                            if (!called) {
                                promise.reject(r);
                            }
                            called = true;
                        });
                        return;
                    }
                } catch (e) {
                    if (!called) {
                        promise.reject(e);
                    }
                    return;
                }

                promise.state = RESOLVED;
                promise.value = x;
                promise.notify();
            }
        };

        p$1.reject = function reject(reason) {
            var promise = this;

            if (promise.state === PENDING) {
                if (reason === promise) {
                    throw new TypeError('Promise settled with itself.');
                }

                promise.state = REJECTED;
                promise.value = reason;
                promise.notify();
            }
        };

        p$1.notify = function notify() {
            var promise = this;

            nextTick(function() {
                if (promise.state !== PENDING) {
                    while (promise.deferred.length) {
                        var deferred = promise.deferred.shift(),
                            onResolved = deferred[0],
                            onRejected = deferred[1],
                            resolve = deferred[2],
                            reject = deferred[3];

                        try {
                            if (promise.state === RESOLVED) {
                                if (typeof onResolved === 'function') {
                                    resolve(onResolved.call(undefined, promise.value));
                                } else {
                                    resolve(promise.value);
                                }
                            } else if (promise.state === REJECTED) {
                                if (typeof onRejected === 'function') {
                                    resolve(onRejected.call(undefined, promise.value));
                                } else {
                                    reject(promise.value);
                                }
                            }
                        } catch (e) {
                            reject(e);
                        }
                    }
                }
            });
        };

        p$1.then = function then(onResolved, onRejected) {
            var promise = this;

            return new Promise$1(function(resolve, reject) {
                promise.deferred.push([onResolved, onRejected, resolve, reject]);
                promise.notify();
            });
        };

        p$1.catch = function(onRejected) {
            return this.then(undefined, onRejected);
        };

        /**
         * Promise adapter.
         */

        if (typeof Promise === 'undefined') {
            window.Promise = Promise$1;
        }

        function PromiseObj(executor, context) {

            if (executor instanceof Promise) {
                this.promise = executor;
            } else {
                this.promise = new Promise(executor.bind(context));
            }

            this.context = context;
        }

        PromiseObj.all = function(iterable, context) {
            return new PromiseObj(Promise.all(iterable), context);
        };

        PromiseObj.resolve = function(value, context) {
            return new PromiseObj(Promise.resolve(value), context);
        };

        PromiseObj.reject = function(reason, context) {
            return new PromiseObj(Promise.reject(reason), context);
        };

        PromiseObj.race = function(iterable, context) {
            return new PromiseObj(Promise.race(iterable), context);
        };

        var p = PromiseObj.prototype;

        p.bind = function(context) {
            this.context = context;
            return this;
        };

        p.then = function(fulfilled, rejected) {

            if (fulfilled && fulfilled.bind && this.context) {
                fulfilled = fulfilled.bind(this.context);
            }

            if (rejected && rejected.bind && this.context) {
                rejected = rejected.bind(this.context);
            }

            return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
        };

        p.catch = function(rejected) {

            if (rejected && rejected.bind && this.context) {
                rejected = rejected.bind(this.context);
            }

            return new PromiseObj(this.promise.catch(rejected), this.context);
        };

        p.finally = function(callback) {

            return this.then(function(value) {
                callback.call(this);
                return value;
            }, function(reason) {
                callback.call(this);
                return Promise.reject(reason);
            });
        };

        /**
         * Utility functions.
         */

        var ref = {};
        var hasOwnProperty = ref.hasOwnProperty;

        var ref$1 = [];
        var slice = ref$1.slice;
        var debug = false;
        var ntick;

        var inBrowser = typeof window !== 'undefined';

        var Util = function(ref) {
            var config = ref.config;
            var nextTick = ref.nextTick;

            ntick = nextTick;
            debug = config.debug || !config.silent;
        };

        function warn(msg) {
            if (typeof console !== 'undefined' && debug) {
                console.warn('[VueResource warn]: ' + msg);
            }
        }

        function error(msg) {
            if (typeof console !== 'undefined') {
                console.error(msg);
            }
        }

        function nextTick(cb, ctx) {
            return ntick(cb, ctx);
        }

        function trim(str) {
            return str ? str.replace(/^\s*|\s*$/g, '') : '';
        }

        function trimEnd(str, chars) {

            if (str && chars === undefined) {
                return str.replace(/\s+$/, '');
            }

            if (!str || !chars) {
                return str;
            }

            return str.replace(new RegExp(("[" + chars + "]+$")), '');
        }

        function toLower(str) {
            return str ? str.toLowerCase() : '';
        }

        function toUpper(str) {
            return str ? str.toUpperCase() : '';
        }

        var isArray = Array.isArray;

        function isString(val) {
            return typeof val === 'string';
        }



        function isFunction(val) {
            return typeof val === 'function';
        }

        function isObject(obj) {
            return obj !== null && typeof obj === 'object';
        }

        function isPlainObject(obj) {
            return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
        }

        function isBlob(obj) {
            return typeof Blob !== 'undefined' && obj instanceof Blob;
        }

        function isFormData(obj) {
            return typeof FormData !== 'undefined' && obj instanceof FormData;
        }

        function when(value, fulfilled, rejected) {

            var promise = PromiseObj.resolve(value);

            if (arguments.length < 2) {
                return promise;
            }

            return promise.then(fulfilled, rejected);
        }

        function options(fn, obj, opts) {

            opts = opts || {};

            if (isFunction(opts)) {
                opts = opts.call(obj);
            }

            return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
        }

        function each(obj, iterator) {

            var i, key;

            if (isArray(obj)) {
                for (i = 0; i < obj.length; i++) {
                    iterator.call(obj[i], obj[i], i);
                }
            } else if (isObject(obj)) {
                for (key in obj) {
                    if (hasOwnProperty.call(obj, key)) {
                        iterator.call(obj[key], obj[key], key);
                    }
                }
            }

            return obj;
        }

        var assign = Object.assign || _assign;

        function merge(target) {

            var args = slice.call(arguments, 1);

            args.forEach(function(source) {
                _merge(target, source, true);
            });

            return target;
        }

        function defaults(target) {

            var args = slice.call(arguments, 1);

            args.forEach(function(source) {

                for (var key in source) {
                    if (target[key] === undefined) {
                        target[key] = source[key];
                    }
                }

            });

            return target;
        }

        function _assign(target) {

            var args = slice.call(arguments, 1);

            args.forEach(function(source) {
                _merge(target, source);
            });

            return target;
        }

        function _merge(target, source, deep) {
            for (var key in source) {
                if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                    if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                        target[key] = {};
                    }
                    if (isArray(source[key]) && !isArray(target[key])) {
                        target[key] = [];
                    }
                    _merge(target[key], source[key], deep);
                } else if (source[key] !== undefined) {
                    target[key] = source[key];
                }
            }
        }

        /**
         * Root Prefix Transform.
         */

        var root = function(options$$1, next) {

            var url = next(options$$1);

            if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
                url = trimEnd(options$$1.root, '/') + '/' + url;
            }

            return url;
        };

        /**
         * Query Parameter Transform.
         */

        var query = function(options$$1, next) {

            var urlParams = Object.keys(Url.options.params),
                query = {},
                url = next(options$$1);

            each(options$$1.params, function(value, key) {
                if (urlParams.indexOf(key) === -1) {
                    query[key] = value;
                }
            });

            query = Url.params(query);

            if (query) {
                url += (url.indexOf('?') == -1 ? '?' : '&') + query;
            }

            return url;
        };

        /**
         * URL Template v2.0.6 (https://github.com/bramstein/url-template)
         */

        function expand(url, params, variables) {

            var tmpl = parse(url),
                expanded = tmpl.expand(params);

            if (variables) {
                variables.push.apply(variables, tmpl.vars);
            }

            return expanded;
        }

        function parse(template) {

            var operators = ['+', '#', '.', '/', ';', '?', '&'],
                variables = [];

            return {
                vars: variables,
                expand: function expand(context) {
                    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_, expression, literal) {
                        if (expression) {

                            var operator = null,
                                values = [];

                            if (operators.indexOf(expression.charAt(0)) !== -1) {
                                operator = expression.charAt(0);
                                expression = expression.substr(1);
                            }

                            expression.split(/,/g).forEach(function(variable) {
                                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                                values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                                variables.push(tmp[1]);
                            });

                            if (operator && operator !== '+') {

                                var separator = ',';

                                if (operator === '?') {
                                    separator = '&';
                                } else if (operator !== '#') {
                                    separator = operator;
                                }

                                return (values.length !== 0 ? operator : '') + values.join(separator);
                            } else {
                                return values.join(',');
                            }

                        } else {
                            return encodeReserved(literal);
                        }
                    });
                }
            };
        }

        function getValues(context, operator, key, modifier) {

            var value = context[key],
                result = [];

            if (isDefined(value) && value !== '') {
                if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    value = value.toString();

                    if (modifier && modifier !== '*') {
                        value = value.substring(0, parseInt(modifier, 10));
                    }

                    result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                } else {
                    if (modifier === '*') {
                        if (Array.isArray(value)) {
                            value.filter(isDefined).forEach(function(value) {
                                result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                            });
                        } else {
                            Object.keys(value).forEach(function(k) {
                                if (isDefined(value[k])) {
                                    result.push(encodeValue(operator, value[k], k));
                                }
                            });
                        }
                    } else {
                        var tmp = [];

                        if (Array.isArray(value)) {
                            value.filter(isDefined).forEach(function(value) {
                                tmp.push(encodeValue(operator, value));
                            });
                        } else {
                            Object.keys(value).forEach(function(k) {
                                if (isDefined(value[k])) {
                                    tmp.push(encodeURIComponent(k));
                                    tmp.push(encodeValue(operator, value[k].toString()));
                                }
                            });
                        }

                        if (isKeyOperator(operator)) {
                            result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                        } else if (tmp.length !== 0) {
                            result.push(tmp.join(','));
                        }
                    }
                }
            } else {
                if (operator === ';') {
                    result.push(encodeURIComponent(key));
                } else if (value === '' && (operator === '&' || operator === '?')) {
                    result.push(encodeURIComponent(key) + '=');
                } else if (value === '') {
                    result.push('');
                }
            }

            return result;
        }

        function isDefined(value) {
            return value !== undefined && value !== null;
        }

        function isKeyOperator(operator) {
            return operator === ';' || operator === '&' || operator === '?';
        }

        function encodeValue(operator, value, key) {

            value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

            if (key) {
                return encodeURIComponent(key) + '=' + value;
            } else {
                return value;
            }
        }

        function encodeReserved(str) {
            return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
                if (!/%[0-9A-Fa-f]/.test(part)) {
                    part = encodeURI(part);
                }
                return part;
            }).join('');
        }

        /**
         * URL Template (RFC 6570) Transform.
         */

        var template = function(options) {

            var variables = [],
                url = expand(options.url, options.params, variables);

            variables.forEach(function(key) {
                delete options.params[key];
            });

            return url;
        };

        /**
         * Service for URL templating.
         */

        function Url(url, params) {

            var self = this || {},
                options$$1 = url,
                transform;

            if (isString(url)) {
                options$$1 = { url: url, params: params };
            }

            options$$1 = merge({}, Url.options, self.$options, options$$1);

            Url.transforms.forEach(function(handler) {

                if (isString(handler)) {
                    handler = Url.transform[handler];
                }

                if (isFunction(handler)) {
                    transform = factory(handler, transform, self.$vm);
                }

            });

            return transform(options$$1);
        }

        /**
         * Url options.
         */

        Url.options = {
            url: '',
            root: null,
            params: {}
        };

        /**
         * Url transforms.
         */

        Url.transform = { template: template, query: query, root: root };
        Url.transforms = ['template', 'query', 'root'];

        /**
         * Encodes a Url parameter string.
         *
         * @param {Object} obj
         */

        Url.params = function(obj) {

            var params = [],
                escape = encodeURIComponent;

            params.add = function(key, value) {

                if (isFunction(value)) {
                    value = value();
                }

                if (value === null) {
                    value = '';
                }

                this.push(escape(key) + '=' + escape(value));
            };

            serialize(params, obj);

            return params.join('&').replace(/%20/g, '+');
        };

        /**
         * Parse a URL and return its components.
         *
         * @param {String} url
         */

        Url.parse = function(url) {

            var el = document.createElement('a');

            if (document.documentMode) {
                el.href = url;
                url = el.href;
            }

            el.href = url;

            return {
                href: el.href,
                protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
                port: el.port,
                host: el.host,
                hostname: el.hostname,
                pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
                search: el.search ? el.search.replace(/^\?/, '') : '',
                hash: el.hash ? el.hash.replace(/^#/, '') : ''
            };
        };

        function factory(handler, next, vm) {
            return function(options$$1) {
                return handler.call(vm, options$$1, next);
            };
        }

        function serialize(params, obj, scope) {

            var array = isArray(obj),
                plain = isPlainObject(obj),
                hash;

            each(obj, function(value, key) {

                hash = isObject(value) || isArray(value);

                if (scope) {
                    key = scope + '[' + (plain || hash ? key : '') + ']';
                }

                if (!scope && array) {
                    params.add(value.name, value.value);
                } else if (hash) {
                    serialize(params, value, key);
                } else {
                    params.add(key, value);
                }
            });
        }

        /**
         * XDomain client (Internet Explorer).
         */

        var xdrClient = function(request) {
            return new PromiseObj(function(resolve) {

                var xdr = new XDomainRequest(),
                    handler = function(ref) {
                        var type = ref.type;


                        var status = 0;

                        if (type === 'load') {
                            status = 200;
                        } else if (type === 'error') {
                            status = 500;
                        }

                        resolve(request.respondWith(xdr.responseText, { status: status }));
                    };

                request.abort = function() { return xdr.abort(); };

                xdr.open(request.method, request.getUrl());

                if (request.timeout) {
                    xdr.timeout = request.timeout;
                }

                xdr.onload = handler;
                xdr.onabort = handler;
                xdr.onerror = handler;
                xdr.ontimeout = handler;
                xdr.onprogress = function() {};
                xdr.send(request.getBody());
            });
        };

        /**
         * CORS Interceptor.
         */

        var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

        var cors = function(request, next) {

            if (inBrowser) {

                var orgUrl = Url.parse(location.href);
                var reqUrl = Url.parse(request.getUrl());

                if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

                    request.crossOrigin = true;
                    request.emulateHTTP = false;

                    if (!SUPPORTS_CORS) {
                        request.client = xdrClient;
                    }
                }
            }

            next();
        };

        /**
         * Form data Interceptor.
         */

        var form = function(request, next) {

            if (isFormData(request.body)) {

                request.headers.delete('Content-Type');

            } else if (isObject(request.body) && request.emulateJSON) {

                request.body = Url.params(request.body);
                request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
            }

            next();
        };

        /**
         * JSON Interceptor.
         */

        var json = function(request, next) {

            var type = request.headers.get('Content-Type') || '';

            if (isObject(request.body) && type.indexOf('application/json') === 0) {
                request.body = JSON.stringify(request.body);
            }

            next(function(response) {

                return response.bodyText ? when(response.text(), function(text) {

                    type = response.headers.get('Content-Type') || '';

                    if (type.indexOf('application/json') === 0 || isJson(text)) {

                        try {
                            response.body = JSON.parse(text);
                        } catch (e) {
                            response.body = null;
                        }

                    } else {
                        response.body = text;
                    }

                    return response;

                }) : response;

            });
        };

        function isJson(str) {

            var start = str.match(/^\[|^\{(?!\{)/),
                end = { '[': /]$/, '{': /}$/ };

            return start && end[start[0]].test(str);
        }

        /**
         * JSONP client (Browser).
         */

        var jsonpClient = function(request) {
            return new PromiseObj(function(resolve) {

                var name = request.jsonp || 'callback',
                    callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2),
                    body = null,
                    handler, script;

                handler = function(ref) {
                    var type = ref.type;


                    var status = 0;

                    if (type === 'load' && body !== null) {
                        status = 200;
                    } else if (type === 'error') {
                        status = 500;
                    }

                    if (status && window[callback]) {
                        delete window[callback];
                        document.body.removeChild(script);
                    }

                    resolve(request.respondWith(body, { status: status }));
                };

                window[callback] = function(result) {
                    body = JSON.stringify(result);
                };

                request.abort = function() {
                    handler({ type: 'abort' });
                };

                request.params[name] = callback;

                if (request.timeout) {
                    setTimeout(request.abort, request.timeout);
                }

                script = document.createElement('script');
                script.src = request.getUrl();
                script.type = 'text/javascript';
                script.async = true;
                script.onload = handler;
                script.onerror = handler;

                document.body.appendChild(script);
            });
        };

        /**
         * JSONP Interceptor.
         */

        var jsonp = function(request, next) {

            if (request.method == 'JSONP') {
                request.client = jsonpClient;
            }

            next();
        };

        /**
         * Before Interceptor.
         */

        var before = function(request, next) {

            if (isFunction(request.before)) {
                request.before.call(this, request);
            }

            next();
        };

        /**
         * HTTP method override Interceptor.
         */

        var method = function(request, next) {

            if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
                request.headers.set('X-HTTP-Method-Override', request.method);
                request.method = 'POST';
            }

            next();
        };

        /**
         * Header Interceptor.
         */

        var header = function(request, next) {

            var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {},
                Http.headers[toLower(request.method)]
            );

            each(headers, function(value, name) {
                if (!request.headers.has(name)) {
                    request.headers.set(name, value);
                }
            });

            next();
        };

        /**
         * XMLHttp client (Browser).
         */

        var xhrClient = function(request) {
            return new PromiseObj(function(resolve) {

                var xhr = new XMLHttpRequest(),
                    handler = function(event) {

                        var response = request.respondWith(
                            'response' in xhr ? xhr.response : xhr.responseText, {
                                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                            }
                        );

                        each(trim(xhr.getAllResponseHeaders()).split('\n'), function(row) {
                            response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                        });

                        resolve(response);
                    };

                request.abort = function() { return xhr.abort(); };

                if (request.progress) {
                    if (request.method === 'GET') {
                        xhr.addEventListener('progress', request.progress);
                    } else if (/^(POST|PUT)$/i.test(request.method)) {
                        xhr.upload.addEventListener('progress', request.progress);
                    }
                }

                xhr.open(request.method, request.getUrl(), true);

                if (request.timeout) {
                    xhr.timeout = request.timeout;
                }

                if (request.responseType && 'responseType' in xhr) {
                    xhr.responseType = request.responseType;
                }

                if (request.withCredentials || request.credentials) {
                    xhr.withCredentials = true;
                }

                if (!request.crossOrigin) {
                    request.headers.set('X-Requested-With', 'XMLHttpRequest');
                }

                request.headers.forEach(function(value, name) {
                    xhr.setRequestHeader(name, value);
                });

                xhr.onload = handler;
                xhr.onabort = handler;
                xhr.onerror = handler;
                xhr.ontimeout = handler;
                xhr.send(request.getBody());
            });
        };

        /**
         * Http client (Node).
         */

        var nodeClient = function(request) {

            var client = __webpack_require__(425);

            return new PromiseObj(function(resolve) {

                var url = request.getUrl();
                var body = request.getBody();
                var method = request.method;
                var headers = {},
                    handler;

                request.headers.forEach(function(value, name) {
                    headers[name] = value;
                });

                client(url, { body: body, method: method, headers: headers }).then(handler = function(resp) {

                    var response = request.respondWith(resp.body, {
                        status: resp.statusCode,
                        statusText: trim(resp.statusMessage)
                    });

                    each(resp.headers, function(value, name) {
                        response.headers.set(name, value);
                    });

                    resolve(response);

                }, function(error$$1) { return handler(error$$1.response); });
            });
        };

        /**
         * Base client.
         */

        var Client = function(context) {

            var reqHandlers = [sendRequest],
                resHandlers = [],
                handler;

            if (!isObject(context)) {
                context = null;
            }

            function Client(request) {
                return new PromiseObj(function(resolve, reject) {

                    function exec() {

                        handler = reqHandlers.pop();

                        if (isFunction(handler)) {
                            handler.call(context, request, next);
                        } else {
                            warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
                            next();
                        }
                    }

                    function next(response) {

                        if (isFunction(response)) {

                            resHandlers.unshift(response);

                        } else if (isObject(response)) {

                            resHandlers.forEach(function(handler) {
                                response = when(response, function(response) {
                                    return handler.call(context, response) || response;
                                }, reject);
                            });

                            when(response, resolve, reject);

                            return;
                        }

                        exec();
                    }

                    exec();

                }, context);
            }

            Client.use = function(handler) {
                reqHandlers.push(handler);
            };
			
            return Client;
        };

        function sendRequest(request, resolve) {

            var client = request.client || (inBrowser ? xhrClient : nodeClient);
            resolve(client(request));
        }

        /**
         * HTTP Headers.
         */

        var Headers = function Headers(headers) {
            var this$1 = this;


            this.map = {};

            each(headers, function(value, name) { return this$1.append(name, value); });
        };

        Headers.prototype.has = function has(name) {
            return getName(this.map, name) !== null;
        };

        Headers.prototype.get = function get(name) {

            var list = this.map[getName(this.map, name)];

            return list ? list.join() : null;
        };

        Headers.prototype.getAll = function getAll(name) {
            return this.map[getName(this.map, name)] || [];
        };

        Headers.prototype.set = function set(name, value) {
            this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
        };

        Headers.prototype.append = function append(name, value) {

            var list = this.map[getName(this.map, name)];

            if (list) {
                list.push(trim(value));
            } else {
                this.set(name, value);
            }
        };

        Headers.prototype.delete = function delete$1(name) {
            delete this.map[getName(this.map, name)];
        };

        Headers.prototype.deleteAll = function deleteAll() {
            this.map = {};
        };

        Headers.prototype.forEach = function forEach(callback, thisArg) {
            var this$1 = this;

            each(this.map, function(list, name) {
                each(list, function(value) { return callback.call(thisArg, value, name, this$1); });
            });
        };

        function getName(map, name) {
            return Object.keys(map).reduce(function(prev, curr) {
                return toLower(name) === toLower(curr) ? curr : prev;
            }, null);
        }

        function normalizeName(name) {

            if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
                throw new TypeError('Invalid character in header field name');
            }

            return trim(name);
        }

        /**
         * HTTP Response.
         */

        var Response = function Response(body, ref) {
            var url = ref.url;
            var headers = ref.headers;
            var status = ref.status;
            var statusText = ref.statusText;

            this.url = url;
            this.ok = status >= 200 && status < 300;
            this.status = status || 0;
            this.statusText = statusText || '';
            this.headers = new Headers(headers);
            this.body = body;

            if (isString(body)) {

                this.bodyText = body;

            } else if (isBlob(body)) {

                this.bodyBlob = body;

                if (isBlobText(body)) {
                    this.bodyText = blobText(body);
                }
            }
        };

        Response.prototype.blob = function blob() {
            return when(this.bodyBlob);
        };

        Response.prototype.text = function text() {
            return when(this.bodyText);
        };

        Response.prototype.json = function json() {
            return when(this.text(), function(text) { return JSON.parse(text); });
        };

        Object.defineProperty(Response.prototype, 'data', {

            get: function get() {
                return this.body;
            },

            set: function set(body) {
                this.body = body;
            }

        });

        function blobText(body) {
            return new PromiseObj(function(resolve) {

                var reader = new FileReader();

                reader.readAsText(body);
                reader.onload = function() {
                    resolve(reader.result);
                };

            });
        }

        function isBlobText(body) {
            return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
        }

        /**
         * HTTP Request.
         */

        var Request = function Request(options$$1) {

            this.body = null;
            this.params = {};

            assign(this, options$$1, {
                method: toUpper(options$$1.method || 'GET')
            });

            if (!(this.headers instanceof Headers)) {
                this.headers = new Headers(this.headers);
            }
        };

        Request.prototype.getUrl = function getUrl() {
            return Url(this);
        };

        Request.prototype.getBody = function getBody() {
            return this.body;
        };

        Request.prototype.respondWith = function respondWith(body, options$$1) {
            return new Response(body, assign(options$$1 || {}, { url: this.getUrl() }));
        };

        /**
         * Service for sending network requests.
         */

        var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
        var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

        function Http(options$$1) {

            var self = this || {},
                client = Client(self.$vm);
				
            defaults(options$$1 || {}, self.$options, Http.options);

            Http.interceptors.forEach(function(handler) {

                if (isString(handler)) {
                    handler = Http.interceptor[handler];
                }

                if (isFunction(handler)) {
                    client.use(handler);
                }

            });
			
            return client(new Request(options$$1)).then(function(response) {
				console.log(response.ok ? response : PromiseObj.reject(response));
				return response.ok ? response : PromiseObj.reject(response);

            }, function(response) {

                if (response instanceof Error) {
                    error(response);
                }
                return PromiseObj.reject(response);
				
            });
        }

        Http.options = {};

        Http.headers = {
            put: JSON_CONTENT_TYPE,
            post: JSON_CONTENT_TYPE,
            patch: JSON_CONTENT_TYPE,
            delete: JSON_CONTENT_TYPE,
            common: COMMON_HEADERS,
            custom: {}
        };

        Http.interceptor = { before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors };
        Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

        ['get', 'delete', 'head', 'jsonp'].forEach(function(method$$1) {

            Http[method$$1] = function(url, options$$1) {
                return this(assign(options$$1 || {}, { url: url, method: method$$1 }));
            };

        });

        ['post', 'put', 'patch'].forEach(function(method$$1) {
			
            Http[method$$1] = function(url, body, options$$1) {

                return this(assign(options$$1 || {}, { url: url, method: method$$1, body: body }));
            };

        });

        /**
         * Service for interacting with RESTful services.
         */

        function Resource(url, params, actions, options$$1) {

            var self = this || {},
                resource = {};

            actions = assign({},
                Resource.actions,
                actions
            );

            each(actions, function(action, name) {

                action = merge({ url: url, params: assign({}, params) }, options$$1, action);

                resource[name] = function() {
                    return (self.$http || Http)(opts(action, arguments));
                };
            });
            return resource;
        }

        function opts(action, args) {
			
            var options$$1 = assign({}, action),
                params = {},
                body;

            switch (args.length) {

                case 2:

                    params = args[0];
                    body = args[1];

                    break;

                case 1:

                    if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                        body = args[0];
                    } else {
                        params = args[0];
                    }

                    break;

                case 0:

                    break;

                default:

                    throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
            }

            options$$1.body = body;
            options$$1.params = assign({}, options$$1.params, params);

            return options$$1;
        }

        Resource.actions = {

            get: { method: 'GET' },
            save: { method: 'POST' },
            query: { method: 'GET' },
            update: { method: 'PUT' },
            remove: { method: 'DELETE' },
            delete: { method: 'DELETE' }

        };

        /**
         * Install plugin.
         */

        function plugin(Vue) {

            if (plugin.installed) {
                return;
            }

            Util(Vue);

            Vue.url = Url;
            Vue.http = Http;
            Vue.resource = Resource;
            Vue.Promise = PromiseObj;

            Object.defineProperties(Vue.prototype, {

                $url: {
                    get: function get() {
                        return options(Vue.url, this, this.$options.url);
                    }
                },

                $http: {
                    get: function get() {
                        return options(Vue.http, this, this.$options.http);
                    }
                },

                $resource: {
                    get: function get() {
                        return Vue.resource.bind(this);
                    }
                },

                $promise: {
                    get: function get() {
                        var this$1 = this;

                        return function(executor) { return new Vue.Promise(executor, this$1); };
                    }
                }

            });
        }

        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.use(plugin);
        }

        /* harmony default export */
        __webpack_exports__["default"] = (plugin);



        /***/
    }),
    /* 410 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(350);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("b963fb5c", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-05bc3c46\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ActionsBar.vue", function() {
                    var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-05bc3c46\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ActionsBar.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 411 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(351);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("7d6732c9", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-198a1f95\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Blob.vue", function() {
                    var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-198a1f95\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Blob.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 412 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(352);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("4dcd15f6", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1b65742e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Blobs.vue", function() {
                    var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1b65742e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Blobs.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 413 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(353);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("447f7248", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1b8ebb30\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TreeItem.vue", function() {
                    var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1b8ebb30\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TreeItem.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 414 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(354);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("765bd2a6", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3b37d7fd\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tree.vue", function() {
                    var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3b37d7fd\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tree.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 415 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(355);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("0c66f348", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4055057d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploadBlob.vue", function() {
                    var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4055057d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploadBlob.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 416 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(356);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("32639096", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4a4411de\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Breadcrumb.vue", function() {
                    var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4a4411de\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Breadcrumb.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 417 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(357);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("5395824e", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-534e2280\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContentContainer.vue", function() {
                    var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-534e2280\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContentContainer.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 418 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(358);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("23f49523", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5bcdaf03\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
                    var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5bcdaf03\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 419 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(359);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("1a36e1a3", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-65409805\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BreadcrumbBar.vue", function() {
                    var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-65409805\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BreadcrumbBar.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 420 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(360);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("193acd18", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-da4f7da2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddFilesBtn.vue", function() {
                    var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-da4f7da2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddFilesBtn.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 421 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(361);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("158d7219", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e5563536\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Btn.vue", function() {
                    var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e5563536\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Btn.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 422 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(362);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        if (content.locals) module.exports = content.locals;
        // add the styles to the DOM
        var update = __webpack_require__(21)("616e08cb", content, false);
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-faebe934\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContextMenu.vue", function() {
                    var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-faebe934\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContextMenu.vue");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 423 */
    /***/
    (function(module, exports) {

        /**
         * Translates the list format produced by css-loader into something
         * easier to manipulate.
         */
        module.exports = function listToStyles(parentId, list) {
            var styles = []
            var newStyles = {}
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                var id = item[0]
                var css = item[1]
                var media = item[2]
                var sourceMap = item[3]
                var part = {
                    id: parentId + ':' + i,
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                }
                if (!newStyles[id]) {
                    styles.push(newStyles[id] = { id: id, parts: [part] })
                } else {
                    newStyles[id].parts.push(part)
                }
            }
            return styles
        }


        /***/
    }),
    /* 424 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
        /**
         * vuex v2.3.0
         * (c) 2017 Evan You
         * @license MIT
         */
        var applyMixin = function(Vue) {
            var version = Number(Vue.version.split('.')[0]);

            if (version >= 2) {
                var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
                Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
            } else {
                // override init and inject vuex init procedure
                // for 1.x backwards compatibility.
                var _init = Vue.prototype._init;
                Vue.prototype._init = function(options) {
                    if (options === void 0) options = {};

                    options.init = options.init ? [vuexInit].concat(options.init) :
                        vuexInit;
                    _init.call(this, options);
                };
            }

            /**
             * Vuex init hook, injected into each instances init hooks list.
             */

            function vuexInit() {
                var options = this.$options;
                // store injection
                if (options.store) {
                    this.$store = options.store;
                } else if (options.parent && options.parent.$store) {
                    this.$store = options.parent.$store;
                }
            }
        };

        var devtoolHook =
            typeof window !== 'undefined' &&
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function devtoolPlugin(store) {
            if (!devtoolHook) { return }

            store._devtoolHook = devtoolHook;

            devtoolHook.emit('vuex:init', store);

            devtoolHook.on('vuex:travel-to-state', function(targetState) {
                store.replaceState(targetState);
            });

            store.subscribe(function(mutation, state) {
                devtoolHook.emit('vuex:mutation', mutation, state);
            });
        }

        /**
         * Get the first item that pass the test
         * by second argument function
         *
         * @param {Array} list
         * @param {Function} f
         * @return {*}
         */
        /**
         * Deep copy the given object considering circular structure.
         * This function caches all nested objects and its copies.
         * If it detects circular structure, use cached copy to avoid infinite loop.
         *
         * @param {*} obj
         * @param {Array<Object>} cache
         * @return {*}
         */


        /**
         * forEach for object
         */
        function forEachValue(obj, fn) {
            Object.keys(obj).forEach(function(key) { return fn(obj[key], key); });
        }

        function isObject(obj) {
            return obj !== null && typeof obj === 'object'
        }

        function isPromise(val) {
            return val && typeof val.then === 'function'
        }

        function assert(condition, msg) {
            if (!condition) { throw new Error(("[vuex] " + msg)) }
        }

        var Module = function Module(rawModule, runtime) {
            this.runtime = runtime;
            this._children = Object.create(null);
            this._rawModule = rawModule;
            var rawState = rawModule.state;
            this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
        };

        var prototypeAccessors$1 = { namespaced: {} };

        prototypeAccessors$1.namespaced.get = function() {
            return !!this._rawModule.namespaced
        };

        Module.prototype.addChild = function addChild(key, module) {
            this._children[key] = module;
        };

        Module.prototype.removeChild = function removeChild(key) {
            delete this._children[key];
        };

        Module.prototype.getChild = function getChild(key) {
            return this._children[key]
        };

        Module.prototype.update = function update(rawModule) {
            this._rawModule.namespaced = rawModule.namespaced;
            if (rawModule.actions) {
                this._rawModule.actions = rawModule.actions;
            }
            if (rawModule.mutations) {
                this._rawModule.mutations = rawModule.mutations;
            }
            if (rawModule.getters) {
                this._rawModule.getters = rawModule.getters;
            }
        };

        Module.prototype.forEachChild = function forEachChild(fn) {
            forEachValue(this._children, fn);
        };

        Module.prototype.forEachGetter = function forEachGetter(fn) {
            if (this._rawModule.getters) {
                forEachValue(this._rawModule.getters, fn);
            }
        };

        Module.prototype.forEachAction = function forEachAction(fn) {
            if (this._rawModule.actions) {
                forEachValue(this._rawModule.actions, fn);
            }
        };

        Module.prototype.forEachMutation = function forEachMutation(fn) {
            if (this._rawModule.mutations) {
                forEachValue(this._rawModule.mutations, fn);
            }
        };

        Object.defineProperties(Module.prototype, prototypeAccessors$1);

        var ModuleCollection = function ModuleCollection(rawRootModule) {
            var this$1 = this;

            // register root module (Vuex.Store options)
            this.root = new Module(rawRootModule, false);

            // register all nested modules
            if (rawRootModule.modules) {
                forEachValue(rawRootModule.modules, function(rawModule, key) {
                    this$1.register([key], rawModule, false);
                });
            }
        };

        ModuleCollection.prototype.get = function get(path) {
            return path.reduce(function(module, key) {
                return module.getChild(key)
            }, this.root)
        };

        ModuleCollection.prototype.getNamespace = function getNamespace(path) {
            var module = this.root;
            return path.reduce(function(namespace, key) {
                module = module.getChild(key);
                return namespace + (module.namespaced ? key + '/' : '')
            }, '')
        };

        ModuleCollection.prototype.update = function update$1(rawRootModule) {
            update(this.root, rawRootModule);
        };

        ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
            var this$1 = this;
            if (runtime === void 0) runtime = true;

            var parent = this.get(path.slice(0, -1));
            var newModule = new Module(rawModule, runtime);
            parent.addChild(path[path.length - 1], newModule);

            // register nested modules
            if (rawModule.modules) {
                forEachValue(rawModule.modules, function(rawChildModule, key) {
                    this$1.register(path.concat(key), rawChildModule, runtime);
                });
            }
        };

        ModuleCollection.prototype.unregister = function unregister(path) {
            var parent = this.get(path.slice(0, -1));
            var key = path[path.length - 1];
            if (!parent.getChild(key).runtime) { return }

            parent.removeChild(key);
        };

        function update(targetModule, newModule) {
            // update target module
            targetModule.update(newModule);

            // update nested modules
            if (newModule.modules) {
                for (var key in newModule.modules) {
                    if (!targetModule.getChild(key)) {
                        console.warn(
                            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
                            'manual reload is needed'
                        );
                        return
                    }
                    update(targetModule.getChild(key), newModule.modules[key]);
                }
            }
        }

        var Vue; // bind on install

        var Store = function Store(options) {
            var this$1 = this;
            if (options === void 0) options = {};

            assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
            assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

            var state = options.state;
            if (state === void 0) state = {};
            var plugins = options.plugins;
            if (plugins === void 0) plugins = [];
            var strict = options.strict;
            if (strict === void 0) strict = false;

            // store internal state
            this._committing = false;
            this._actions = Object.create(null);
            this._mutations = Object.create(null);
            this._wrappedGetters = Object.create(null);
            this._modules = new ModuleCollection(options);
            this._modulesNamespaceMap = Object.create(null);
            this._subscribers = [];
            this._watcherVM = new Vue();

            // bind commit and dispatch to self
            var store = this;
            var ref = this;
            var dispatch = ref.dispatch;
            var commit = ref.commit;
            this.dispatch = function boundDispatch(type, payload) {
                return dispatch.call(store, type, payload)
            };
            this.commit = function boundCommit(type, payload, options) {
                return commit.call(store, type, payload, options)
            };

            // strict mode
            this.strict = strict;

            // init root module.
            // this also recursively registers all sub-modules
            // and collects all module getters inside this._wrappedGetters
            installModule(this, state, [], this._modules.root);

            // initialize the store vm, which is responsible for the reactivity
            // (also registers _wrappedGetters as computed properties)
            resetStoreVM(this, state);

            // apply plugins
            plugins.concat(devtoolPlugin).forEach(function(plugin) { return plugin(this$1); });
        };

        var prototypeAccessors = { state: {} };

        prototypeAccessors.state.get = function() {
            return this._vm._data.$$state
        };

        prototypeAccessors.state.set = function(v) {
            assert(false, "Use store.replaceState() to explicit replace store state.");
        };

        Store.prototype.commit = function commit(_type, _payload, _options) {
            var this$1 = this;

            // check object-style commit
            var ref = unifyObjectStyle(_type, _payload, _options);
            var type = ref.type;
            var payload = ref.payload;
            var options = ref.options;

            var mutation = { type: type, payload: payload };
            var entry = this._mutations[type];
            if (!entry) {
                console.error(("[vuex] unknown mutation type: " + type));
                return
            }
            this._withCommit(function() {
                entry.forEach(function commitIterator(handler) {
                    handler(payload);
                });
            });
            this._subscribers.forEach(function(sub) { return sub(mutation, this$1.state); });

            if (options && options.silent) {
                console.warn(
                    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
                    'Use the filter functionality in the vue-devtools'
                );
            }
        };

        Store.prototype.dispatch = function dispatch(_type, _payload) {
            // check object-style dispatch
            var ref = unifyObjectStyle(_type, _payload);
            var type = ref.type;
            var payload = ref.payload;

            var entry = this._actions[type];
            if (!entry) {
                console.error(("[vuex] unknown action type: " + type));
                return
            }
            return entry.length > 1 ?
                Promise.all(entry.map(function(handler) { return handler(payload); })) :
                entry[0](payload)
        };

        Store.prototype.subscribe = function subscribe(fn) {
            var subs = this._subscribers;
            if (subs.indexOf(fn) < 0) {
                subs.push(fn);
            }
            return function() {
                var i = subs.indexOf(fn);
                if (i > -1) {
                    subs.splice(i, 1);
                }
            }
        };

        Store.prototype.watch = function watch(getter, cb, options) {
            var this$1 = this;

            assert(typeof getter === 'function', "store.watch only accepts a function.");
            return this._watcherVM.$watch(function() { return getter(this$1.state, this$1.getters); }, cb, options)
        };

        Store.prototype.replaceState = function replaceState(state) {
            var this$1 = this;

            this._withCommit(function() {
                this$1._vm._data.$$state = state;
            });
        };

        Store.prototype.registerModule = function registerModule(path, rawModule) {
            if (typeof path === 'string') { path = [path]; }
            assert(Array.isArray(path), "module path must be a string or an Array.");
            this._modules.register(path, rawModule);
            installModule(this, this.state, path, this._modules.get(path));
            // reset store to update getters...
            resetStoreVM(this, this.state);
        };

        Store.prototype.unregisterModule = function unregisterModule(path) {
            var this$1 = this;

            if (typeof path === 'string') { path = [path]; }
            assert(Array.isArray(path), "module path must be a string or an Array.");
            this._modules.unregister(path);
            this._withCommit(function() {
                var parentState = getNestedState(this$1.state, path.slice(0, -1));
                Vue.delete(parentState, path[path.length - 1]);
            });
            resetStore(this);
        };

        Store.prototype.hotUpdate = function hotUpdate(newOptions) {
            this._modules.update(newOptions);
            resetStore(this, true);
        };

        Store.prototype._withCommit = function _withCommit(fn) {
            var committing = this._committing;
            this._committing = true;
            fn();
            this._committing = committing;
        };

        Object.defineProperties(Store.prototype, prototypeAccessors);

        function resetStore(store, hot) {
            store._actions = Object.create(null);
            store._mutations = Object.create(null);
            store._wrappedGetters = Object.create(null);
            store._modulesNamespaceMap = Object.create(null);
            var state = store.state;
            // init all modules
            installModule(store, state, [], store._modules.root, true);
            // reset vm
            resetStoreVM(store, state, hot);
        }

        function resetStoreVM(store, state, hot) {
            var oldVm = store._vm;

            // bind store public getters
            store.getters = {};
            var wrappedGetters = store._wrappedGetters;
            var computed = {};
            forEachValue(wrappedGetters, function(fn, key) {
                // use computed to leverage its lazy-caching mechanism
                computed[key] = function() { return fn(store); };
                Object.defineProperty(store.getters, key, {
                    get: function() { return store._vm[key]; },
                    enumerable: true // for local getters
                });
            });

            // use a Vue instance to store the state tree
            // suppress warnings just in case the user has added
            // some funky global mixins
            var silent = Vue.config.silent;
            Vue.config.silent = true;
            store._vm = new Vue({
                data: {
                    $$state: state
                },
                computed: computed
            });
            Vue.config.silent = silent;

            // enable strict mode for new vm
            if (store.strict) {
                enableStrictMode(store);
            }

            if (oldVm) {
                if (hot) {
                    // dispatch changes in all subscribed watchers
                    // to force getter re-evaluation for hot reloading.
                    store._withCommit(function() {
                        oldVm._data.$$state = null;
                    });
                }
                Vue.nextTick(function() { return oldVm.$destroy(); });
            }
        }

        function installModule(store, rootState, path, module, hot) {
            var isRoot = !path.length;
            var namespace = store._modules.getNamespace(path);

            // register in namespace map
            if (module.namespaced) {
                store._modulesNamespaceMap[namespace] = module;
            }

            // set state
            if (!isRoot && !hot) {
                var parentState = getNestedState(rootState, path.slice(0, -1));
                var moduleName = path[path.length - 1];
                store._withCommit(function() {
                    Vue.set(parentState, moduleName, module.state);
                });
            }

            var local = module.context = makeLocalContext(store, namespace, path);

            module.forEachMutation(function(mutation, key) {
                var namespacedType = namespace + key;
                registerMutation(store, namespacedType, mutation, local);
            });

            module.forEachAction(function(action, key) {
                var namespacedType = namespace + key;
                registerAction(store, namespacedType, action, local);
            });

            module.forEachGetter(function(getter, key) {
                var namespacedType = namespace + key;
                registerGetter(store, namespacedType, getter, local);
            });

            module.forEachChild(function(child, key) {
                installModule(store, rootState, path.concat(key), child, hot);
            });
        }

        /**
         * make localized dispatch, commit, getters and state
         * if there is no namespace, just use root ones
         */
        function makeLocalContext(store, namespace, path) {
            var noNamespace = namespace === '';

            var local = {
                dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
                    var args = unifyObjectStyle(_type, _payload, _options);
                    var payload = args.payload;
                    var options = args.options;
                    var type = args.type;

                    if (!options || !options.root) {
                        type = namespace + type;
                        if (!store._actions[type]) {
                            console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
                            return
                        }
                    }

                    return store.dispatch(type, payload)
                },

                commit: noNamespace ? store.commit : function(_type, _payload, _options) {
                    var args = unifyObjectStyle(_type, _payload, _options);
                    var payload = args.payload;
                    var options = args.options;
                    var type = args.type;

                    if (!options || !options.root) {
                        type = namespace + type;
                        if (!store._mutations[type]) {
                            console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
                            return
                        }
                    }

                    store.commit(type, payload, options);
                }
            };

            // getters and state object must be gotten lazily
            // because they will be changed by vm update
            Object.defineProperties(local, {
                getters: {
                    get: noNamespace ?

                        function() { return store.getters; } : function() { return makeLocalGetters(store, namespace); }
                },
                state: {
                    get: function() { return getNestedState(store.state, path); }
                }
            });

            return local
        }

        function makeLocalGetters(store, namespace) {
            var gettersProxy = {};

            var splitPos = namespace.length;
            Object.keys(store.getters).forEach(function(type) {
                // skip if the target getter is not match this namespace
                if (type.slice(0, splitPos) !== namespace) { return }

                // extract local getter type
                var localType = type.slice(splitPos);

                // Add a port to the getters proxy.
                // Define as getter property because
                // we do not want to evaluate the getters in this time.
                Object.defineProperty(gettersProxy, localType, {
                    get: function() { return store.getters[type]; },
                    enumerable: true
                });
            });

            return gettersProxy
        }

        function registerMutation(store, type, handler, local) {
            var entry = store._mutations[type] || (store._mutations[type] = []);
            entry.push(function wrappedMutationHandler(payload) {
                handler(local.state, payload);
            });
        }

        function registerAction(store, type, handler, local) {
            var entry = store._actions[type] || (store._actions[type] = []);
            entry.push(function wrappedActionHandler(payload, cb) {
                var res = handler({
                    dispatch: local.dispatch,
                    commit: local.commit,
                    getters: local.getters,
                    state: local.state,
                    rootGetters: store.getters,
                    rootState: store.state
                }, payload, cb);
                if (!isPromise(res)) {
                    res = Promise.resolve(res);
                }
                if (store._devtoolHook) {
                    return res.catch(function(err) {
                        store._devtoolHook.emit('vuex:error', err);
                        throw err
                    })
                } else {
                    return res
                }
            });
        }

        function registerGetter(store, type, rawGetter, local) {
            if (store._wrappedGetters[type]) {
                console.error(("[vuex] duplicate getter key: " + type));
                return
            }
            store._wrappedGetters[type] = function wrappedGetter(store) {
                return rawGetter(
                    local.state, // local state
                    local.getters, // local getters
                    store.state, // root state
                    store.getters // root getters
                )
            };
        }

        function enableStrictMode(store) {
            store._vm.$watch(function() { return this._data.$$state }, function() {
                assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
            }, { deep: true, sync: true });
        }

        function getNestedState(state, path) {
            return path.length ?
                path.reduce(function(state, key) { return state[key]; }, state) :
                state
        }

        function unifyObjectStyle(type, payload, options) {
            if (isObject(type) && type.type) {
                options = payload;
                payload = type;
                type = type.type;
            }

            assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

            return { type: type, payload: payload, options: options }
        }

        function install(_Vue) {
            if (Vue) {
                console.error(
                    '[vuex] already installed. Vue.use(Vuex) should be called only once.'
                );
                return
            }
            Vue = _Vue;
            applyMixin(Vue);
        }

        // auto install in dist mode
        if (typeof window !== 'undefined' && window.Vue) {
            install(window.Vue);
        }

        var mapState = normalizeNamespace(function(namespace, states) {
            var res = {};
            normalizeMap(states).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;

                res[key] = function mappedState() {
                    var state = this.$store.state;
                    var getters = this.$store.getters;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
                        if (!module) {
                            return
                        }
                        state = module.context.state;
                        getters = module.context.getters;
                    }
                    return typeof val === 'function' ?
                        val.call(this, state, getters) :
                        state[val]
                };
                // mark vuex getter for devtools
                res[key].vuex = true;
            });
            return res
        });

        var mapMutations = normalizeNamespace(function(namespace, mutations) {
            var res = {};
            normalizeMap(mutations).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;

                val = namespace + val;
                res[key] = function mappedMutation() {
                    var args = [],
                        len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
                        return
                    }
                    return this.$store.commit.apply(this.$store, [val].concat(args))
                };
            });
            return res
        });

        var mapGetters = normalizeNamespace(function(namespace, getters) {
            var res = {};
            normalizeMap(getters).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;

                val = namespace + val;
                res[key] = function mappedGetter() {
                    if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
                        return
                    }
                    if (!(val in this.$store.getters)) {
                        console.error(("[vuex] unknown getter: " + val));
                        return
                    }
                    return this.$store.getters[val]
                };
                // mark vuex getter for devtools
                res[key].vuex = true;
            });
            return res
        });

        var mapActions = normalizeNamespace(function(namespace, actions) {
            var res = {};
            normalizeMap(actions).forEach(function(ref) {
                var key = ref.key;
                var val = ref.val;

                val = namespace + val;
                res[key] = function mappedAction() {
                    var args = [],
                        len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
                        return
                    }
                    return this.$store.dispatch.apply(this.$store, [val].concat(args))
                };
            });
            return res
        });

        function normalizeMap(map) {
            return Array.isArray(map) ?
                map.map(function(key) { return ({ key: key, val: key }); }) :
                Object.keys(map).map(function(key) { return ({ key: key, val: map[key] }); })
        }

        function normalizeNamespace(fn) {
            return function(namespace, map) {
                if (typeof namespace !== 'string') {
                    map = namespace;
                    namespace = '';
                } else if (namespace.charAt(namespace.length - 1) !== '/') {
                    namespace += '/';
                }
                return fn(namespace, map)
            }
        }

        function getModuleByNamespace(store, helper, namespace) {
            var module = store._modulesNamespaceMap[namespace];
            if (!module) {
                console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
            }
            return module
        }

        var index_esm = {
            Store: Store,
            install: install,
            version: '2.3.0',
            mapState: mapState,
            mapMutations: mapMutations,
            mapGetters: mapGetters,
            mapActions: mapActions
        };

        /* harmony default export */
        __webpack_exports__["default"] = (index_esm);


        /***/
    }),
    /* 425 */
    /***/
    (function(module, exports) {

        /* (ignored) */

        /***/
    }),
    /* 426 */
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__(135);
        module.exports = __webpack_require__(134);


        /***/
    })
    /******/
]);
//# sourceMappingURL=app.js.map