/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = void 0;
function classNames(...args) {
    let result = '';
    for (let i = 0; i < args.length; i++) {
        if (args[i]) {
            if (typeof args[i] !== 'object') {
                result += ' ' + args[i];
            }
            else {
                for (const key in args[i]) {
                    if (args[i][key])
                        result += ' ' + key;
                }
            }
        }
    }
    return result.trim();
}
exports.classNames = classNames;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(__webpack_require__(3));
const express_1 = __importDefault(__webpack_require__(4));
const indexTemplate_js_1 = __webpack_require__(5);
const App_1 = __webpack_require__(6);
const app = (0, express_1.default)();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/', (req, res) => {
    res.send((0, indexTemplate_js_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reddit</title>
  <script defer src="/static/client.js" type="application/javascript"></script>
</head>

<body>
  <div id="react_root">${content}</div>
</body>

</html>
`;
exports.indexTemplate = indexTemplate;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(__webpack_require__(0));
const root_1 = __webpack_require__(7);
__webpack_require__(8);
const Container_1 = __webpack_require__(10);
const StartPage_1 = __webpack_require__(13);
const GamePage_1 = __webpack_require__(16);
function AppComponent() {
    const [isGameStart, setGameStart] = (0, react_1.useState)(false);
    const [cardsNumber, setCardsNumber] = (0, react_1.useState)(4);
    const getCardsNumber = (cardsNumber_) => {
        setGameStart(true);
        setCardsNumber(cardsNumber_);
    };
    const restartGame = () => {
        setGameStart(false);
    };
    return (react_1.default.createElement(Container_1.Container, null,
        !isGameStart && react_1.default.createElement(StartPage_1.StartPage, { getCardsNumber: getCardsNumber, defaultValue: cardsNumber }),
        isGameStart && react_1.default.createElement(GamePage_1.GamePage, { cardsNumber: cardsNumber, restartGame: restartGame })));
}
exports.App = (0, root_1.hot)(() => react_1.default.createElement(AppComponent, null));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n  user-select: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.button {\r\n  padding: 5px 25px;\r\n  border: 1px solid #dd6611;\r\n  border-radius: 8px;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-weight: 800;\r\n  background-color: #fff;\r\n  text-decoration: none;\r\n  text-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);\r\n  outline: none;\r\n  background: linear-gradient(rgb(221, 102, 17), rgb(190, 72, 0)) rgb(221, 102, 17);\r\n  box-shadow: 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),\r\n    0 0 1px 1px rgba(0, 1, 6, 0.2);\r\n  transition: 0.2s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.button:hover:not(:active) {\r\n  background: linear-gradient(rgb(236, 117, 32), rgb(179, 61, 17)) rgb(236, 117, 32);\r\n}\r\n\r\n.button:active {\r\n  top: 1px;\r\n  background: linear-gradient(rgb(202, 86, 8), rgb(158, 52, 0)) rgb(202, 86, 8);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5) inset,\r\n    0 2px 3px rgba(0, 0, 0, 0.5) inset, 0 1px 1px rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.button:disabled,\r\n.button:disabled:hover:not(:active) {\r\n  background: #aaa;\r\n  border-color: #999;\r\n  box-shadow: none;\r\n  cursor: auto;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const container_css_1 = __importDefault(__webpack_require__(12));
function Container({ children }) {
    return (react_1.default.createElement("div", { className: container_css_1.default.container }, children));
}
exports.Container = Container;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "container__container--2NLMv"
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(14), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartPage = void 0;
const react_1 = __importStar(__webpack_require__(0));
const startpage_css_1 = __importDefault(__webpack_require__(15));
const NOOP = () => { };
function StartPage({ getCardsNumber = NOOP, defaultValue }) {
    const [count, setCount] = (0, react_1.useState)(defaultValue);
    const changeInput = (e) => {
        let value = +e.currentTarget.value;
        value = validateValue(value);
        setCount(value);
    };
    return (react_1.default.createElement("form", { className: startpage_css_1.default.from, action: "#" },
        react_1.default.createElement("span", { className: startpage_css_1.default.span }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440 \u043F\u043E\u043B\u044F:"),
        react_1.default.createElement("input", { className: startpage_css_1.default.input, type: "number", min: 2, max: 26, step: 2, onChange: changeInput, value: count }),
        react_1.default.createElement("button", { className: 'button', onClick: () => getCardsNumber(count) }, "Start Game")));
}
exports.StartPage = StartPage;
function validateValue(v) {
    if (v % 2 !== 0)
        v = v - 1;
    return Math.max(Math.min(v, 26), 2);
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"from": "startpage__from--3UkzW",
	"span": "startpage__span--2R4FS",
	"input": "startpage__input--1pBAt"
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(17), exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePage = void 0;
const react_1 = __importStar(__webpack_require__(0));
const gamepage_css_1 = __importDefault(__webpack_require__(18));
const Card_1 = __importDefault(__webpack_require__(19));
const compose_1 = __webpack_require__(21);
const Timer_1 = __importDefault(__webpack_require__(22));
const EndPage_1 = __webpack_require__(24);
function GamePage({ cardsNumber, restartGame }) {
    const createDeck = (0, compose_1.compose)(shuffleArray, addColors, createPropsMas, createGameNumbers);
    const [propsMas, setPropsMas] = (0, react_1.useState)(createDeck(cardsNumber));
    const [openCards, setOpenCards] = (0, react_1.useState)([]);
    const [isGameOver, setIsGameOver] = (0, react_1.useState)(false);
    const [foundCardsNumber, setFoundCardsNumber] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (foundCardsNumber == cardsNumber)
            setIsGameOver(true);
    }, [foundCardsNumber]);
    (0, react_1.useEffect)(() => {
        if (openCards.length >= 2) {
            disableAll();
            setTimeout(() => {
                if (openCards[0].number == openCards[1].number) {
                    markGuessed(openCards[0].number);
                    setFoundCardsNumber(foundCards => foundCards + 2);
                }
                else {
                    closeTheCards(openCards);
                }
                setOpenCards([]);
                undisableAll();
            }, 700);
        }
    }, [openCards]);
    //****************************************************************************************** */
    function onOpenCard(obj) {
        openTheCard(obj.id);
        setOpenCards(openCards => [...openCards, obj]);
    }
    function createPropsMas(numbers) {
        return numbers.map((number, id) => ({
            id,
            key: id,
            number,
            color: '',
            isOpen: false,
            isDisabled: false,
            isGuessed: false,
            onOpen: onOpenCard,
        }));
    }
    //****************************************************************************************** */
    function disableAll() {
        setPropsMas(function (mas) {
            return mas.map(el => (Object.assign(Object.assign({}, el), { isDisabled: true })));
        });
    }
    function undisableAll() {
        setPropsMas(function (mas) {
            return mas.map(el => (Object.assign(Object.assign({}, el), { isDisabled: false })));
        });
    }
    function openTheCard(id) {
        setPropsMas((propsMas) => propsMas.map(props => props.id == id ? Object.assign(Object.assign({}, props), { isOpen: true }) : props));
    }
    function closeTheCards(mas) {
        setPropsMas((propsMas) => propsMas.map(props => mas.some(el => el.id == props.id) ? Object.assign(Object.assign({}, props), { isOpen: false }) : props));
    }
    function markGuessed(number) {
        setPropsMas((propsMas) => propsMas.map(props => props.number == number ? Object.assign(Object.assign({}, props), { isGuessed: true }) : props));
    }
    //****************************************************************************************** */
    const fieldSize = Math.ceil(Math.sqrt(cardsNumber));
    const masCards = propsMas.map(props => react_1.default.createElement(Card_1.default, Object.assign({}, props)));
    const gridStyle = {
        '--duration': '500ms',
        'gridTemplate': `repeat(${fieldSize}, 1fr) / repeat(${fieldSize}, 1fr)`,
        'display': 'grid'
    };
    return (react_1.default.createElement("div", null,
        isGameOver
            ? react_1.default.createElement(EndPage_1.EndPage, { text: foundCardsNumber == cardsNumber ? `Congratulations! You've won!` : 'Unfortunately, you have lost!', restartGame: restartGame })
            : react_1.default.createElement(Timer_1.default, { onTimeOut: () => setIsGameOver(true), time: 2.5 * cardsNumber ** 1.1 }),
        react_1.default.createElement("div", { className: gamepage_css_1.default.square, style: gridStyle }, masCards)));
}
exports.GamePage = GamePage;
const createGameNumbers = (cardsNumber) => {
    let mas = Array(cardsNumber).fill(0);
    for (let i = 0; i < mas.length; i += 2) {
        mas[i] = mas[i + 1] = (i + 2) / 2;
    }
    return mas;
};
const shuffleArray = (mas) => {
    return [...mas].sort(() => Math.random() - 0.5);
};
function createColorArray(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(`hsl(${i / n * 360},100%,50%)`);
    }
    return res;
}
function addColors(mas) {
    let colors = createColorArray(mas.length / 2);
    return mas.map((obj, i) => (Object.assign(Object.assign({}, obj), { color: colors[Math.floor(i / 2)] })));
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"square": "gamepage__square--3rUo-"
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const classNames_1 = __webpack_require__(1);
const card_css_1 = __importDefault(__webpack_require__(20));
function Card({ isOpen, isDisabled, isGuessed, onOpen, number, id, color }) {
    const handleToggle = () => {
        if (!isOpen && !isDisabled)
            onOpen({ number, id });
    };
    return (react_1.default.createElement("div", { className: card_css_1.default.scene, onClick: handleToggle },
        react_1.default.createElement("div", { className: (0, classNames_1.classNames)(card_css_1.default.card, { [card_css_1.default.guessed]: isGuessed, [card_css_1.default.open]: isOpen }) },
            react_1.default.createElement("div", { className: card_css_1.default.face, style: { backgroundColor: color } }, number),
            react_1.default.createElement("div", { className: card_css_1.default.back }))));
}
exports.Card = Card;
exports.default = react_1.default.memo(Card);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"scene": "card__scene--3lyhT",
	"card": "card__card--2IPyw",
	"open": "card__open--2ndPy",
	"back": "card__back--3wX94",
	"face": "card__face--2xkd3",
	"guessed": "card__guessed--18c-B"
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
function compose(...fns) {
    return (initialArg) => fns.reduceRight((acc, fn) => fn(acc), initialArg);
}
exports.compose = compose;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const react_1 = __importStar(__webpack_require__(0));
const classNames_1 = __webpack_require__(1);
const timer_css_1 = __importDefault(__webpack_require__(23));
function Timer({ onTimeOut, time }) {
    const [time_, setTime] = (0, react_1.useState)(Math.round(time));
    (0, react_1.useEffect)(() => {
        let i;
        if (time_ > 0) {
            i = setTimeout(() => setTime(time => time - 1), 1000);
        }
        else
            onTimeOut();
        return () => clearTimeout(i);
    }, [time_]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: (0, classNames_1.classNames)(timer_css_1.default.timerOutput, { [timer_css_1.default.shortTime]: time_ < 11 && time_ > 0 }) }, formatTime(time_))));
}
exports.Timer = Timer;
const formatTime = (t) => {
    const hours = Math.floor(t / 3600);
    t %= 3600;
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return numberTo2DigitString(hours) + ':' + numberTo2DigitString(minutes) + ':' + numberTo2DigitString(seconds);
};
const numberToXDigitString = (x) => (n) => '0'.repeat(x - (n + '').length) + n;
const numberTo2DigitString = numberToXDigitString(2);
exports.default = react_1.default.memo(Timer);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"timerOutput": "timer__timerOutput--25kqx",
	"shortTime": "timer__shortTime--3UNHd",
	"anim": "timer__anim--2XYZD"
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndPage = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const endpage_css_1 = __importDefault(__webpack_require__(26));
function EndPage({ text, restartGame }) {
    return (react_1.default.createElement("div", { className: endpage_css_1.default.endPage },
        react_1.default.createElement("div", { className: endpage_css_1.default.endPageText }, text),
        react_1.default.createElement("button", { className: 'button', onClick: restartGame }, "Restart Game")));
}
exports.EndPage = EndPage;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"endPage": "endpage__endPage--2j6-h",
	"endPageText": "endpage__endPageText--1SMFn"
};


/***/ })
/******/ ]);