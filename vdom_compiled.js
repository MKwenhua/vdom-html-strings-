/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _vdom_es = __webpack_require__(1);

	var _vdom_es2 = _interopRequireDefault(_vdom_es);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//const EX = require("./vdom_es6.js");

	var elm = _vdom_es2.default.node("div", {
	  id: 'theList',
	  data: [{
	    key: "stock",
	    val: "32"
	  }]
	}, _vdom_es2.default.node("ul", {
	  id: "movieList",
	  class: 'movie-list',
	  data: [{
	    key: "date",
	    val: new Date()
	  }, {
	    key: "type",
	    val: "top 3"
	  }]
	}, _vdom_es2.default.node("li", { data: [{ key: "url", val: "http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2" }] }, _vdom_es2.default.node("img", {
	  src: "http://ia.media-imdb.com/images/M/MV5BMTU1ODQ4NjQyOV5BMl5BanBnXkFtZTgwOTQ3NDU2MTE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
	}), _vdom_es2.default.node("div", {}, "Alien", _vdom_es2.default.node("span", { class: "lvl-show", style: "color:#1E90FF" }, "1979"))), _vdom_es2.default.node("li", { data: [{ key: "url", val: "http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2" }] }, _vdom_es2.default.node("img", {
	  src: "http://ia.media-imdb.com/images/M/MV5BMTI2ODMzODA0Ml5BMl5BanBnXkFtZTYwNTM3NzY5._V1._CR17,27,308,447_.jpg"
	}), _vdom_es2.default.node("div", {}, "Predator", _vdom_es2.default.node("span", { class: "lvl-show", style: "color:#1E90FF" }, "1986"))), _vdom_es2.default.node("li", { data: [{ key: "url", val: "http://www.imdb.com/title/tt0090728/?ref_=nv_sr_1" }] }, _vdom_es2.default.node("img", {
	  src: "http://ia.media-imdb.com/images/M/MV5BMTk5MjI4MzIxMl5BMl5BanBnXkFtZTYwODU1MDQ5._V1_.jpg"
	}), _vdom_es2.default.node("div", {}, "Big Trouble in Little China", _vdom_es2.default.node("span", { class: "lvl-show", style: "color:#1E90FF" }, "1986")))), _vdom_es2.default.node("p", {
	  class: "italic-blue"
	}, "加多一點味精加多一點健康的生活"));
	var elm2 = _vdom_es2.default.node("div", {
	  id: 'theList'
	}, _vdom_es2.default.node("ul", {
	  class: "profile-list",
	  id: "anId"
	}, _vdom_es2.default.node("li", {
	  data: [{
	    key: "user",
	    val: "selios kantos"
	  }, {
	    key: "lvl",
	    val: "88"
	  }]
	}, _vdom_es2.default.node("img", {
	  height: "56",
	  width: "60",
	  class: "a-class",
	  src: "https://s3.amazonaws.com/canvasmp3/__user17.jpg"
	}), _vdom_es2.default.node("div", {}, "Stelios Kantos")), _vdom_es2.default.node("li", {
	  data: [{
	    key: "user",
	    val: "selena"
	  }, {
	    key: "lvl",
	    val: "88"
	  }]
	}, _vdom_es2.default.node("img", {
	  height: "56",
	  width: "60",
	  class: "a-class",
	  src: "https://s3.amazonaws.com/canvasmp3/__user5.jpg"
	}), _vdom_es2.default.node("div", {}, "Selena G"))));

	_vdom_es2.default.addBranch({
	  branchName: 'list1',
	  branchObject: elm
	}, document.getElementById('div1'));

	_vdom_es2.default.buildBranch('list1');

	_vdom_es2.default.addBranch({
	  branchName: 'list2',
	  branchObject: elm2
	}, '#div2');

	_vdom_es2.default.buildBranch('list2');
	_vdom_es2.default.viewObjects();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	function NodeMap() {
	  var _this = this;

	  var appTitle = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];

	  this.appTitle = appTitle;
	  this.domBranches = {};
	  this.rootDomElement = null;
	  this.domContainers = {};
	  this.domContainersEvents = {};
	  this.addContainer = function (keyy, domElement) {
	    if (domElement instanceof HTMLElement) {
	      _this.domContainers[keyy] = domElement;
	      _this.domContainersEvents[keyy] = {};
	      return true;
	    }
	    var elem = document.querySelector(domElement);
	    if (elem) {
	      _this.domContainers[keyy] = elem;
	      return true;
	    }
	    console.error("Element: " + domElement + " not found");
	    return false;
	  };
	  this.addBranch = function (obj, containerElement) {
	    if (!(obj instanceof Array) && obj instanceof Object) {
	      if (!obj["branchName"] || !obj["branchObject"]) {
	        console.error("Object must have a branchName and branchObject");
	        return false;
	      }
	      _this.domBranches[obj.branchName] = obj.branchObject;
	      _this.addContainer(obj.branchName, containerElement);
	    }
	  };
	  this.viewObjects = function () {
	    console.log('domContainers', _this.domContainers);
	    console.log('domContainersEvents', _this.domContainersEvents);
	    console.log('domBranches', _this.domBranches);
	  };
	  this.buildBranch = function (branchName) {
	    _this.domContainers[branchName].innerHTML = _this.html.htmlBuild(_this.domBranches[branchName], branchName);
	  };
	};
	/*
	NodeMap.prototype.
	NodeMap.prototype.
	NodeMap.prototype.
	NodeMap.prototype.
	NodeMap.prototype.addContainer = (keyy, domElement)  => {
	  if (domElement instanceof HTMLElement) {
	    this.domContainers[keyy] = domElement;
	    this.domContainersEvents[keyy] = {};
	    return true;
	  }
	  let elem = document.querySelector(domElement);
	  if (elem) {
	    this.domContainers[keyy] = elem;
	    return true;
	  }
	  console.error("Element: " + domElement + " not found");
	  return false;
	};

	NodeMap.prototype.addBranch = (obj, containerElement) => {
	  if (!(obj instanceof Array) && obj instanceof Object) {
	    if (!obj["branchName"] || !obj["branchObject"]) {
	      console.error("Object must have a branchName and branchObject");
	      return false;
	    }
	    this.domBranches[obj.branchName] = obj.branchObject;
	    this.addContainer(obj.branchName, containerElement);
	  }

	};

	NodeMap.prototype.viewObjects = () => {
	  console.log('domContainers', this.domContainers);
	  console.log('domContainersEvents', this.domContainersEvents);
	  console.log('domBranches', this.domBranches);

	};
	*/

	NodeMap.prototype.node = function (type, props) {
	  for (var _len = arguments.length, kids = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    kids[_key - 2] = arguments[_key];
	  }

	  return {
	    type: type,
	    props: props,
	    kids: kids
	  };
	};

	NodeMap.prototype.html = function () {
	  function dtaBuilder(oo, itm) {
	    oo.push(' data-' + itm.key + '="' + itm.val + '"');
	    return oo;
	  };

	  function eventRegistry(itm) {};
	  var propHandle = {
	    id: function id(itm) {
	      if (itm) {
	        return ' id="' + itm + '"';
	      }
	      return '';
	    },
	    class: function _class(itm) {
	      if (itm) {
	        return ' class="' + itm + '"';
	      }
	      return '';
	    },
	    height: function height(vl) {
	      return ' height="' + vl + '"';
	    },
	    width: function width(vl) {
	      return ' width="' + vl + '"';
	    },
	    title: function title(vl) {
	      return ' title="' + vl + '"';
	    },
	    alt: function alt(vl) {
	      return ' alt="' + vl + '"';
	    },
	    href: function href(vl) {
	      return ' href="' + vl + '"';
	    },
	    src: function src(vl) {
	      return ' src="' + vl + '"';
	    },
	    style: function style(vl) {
	      return ' style="' + vl + '"';
	    },
	    value: function value(itm) {
	      if (itm) {
	        return ' value="' + itm + '"';
	      }
	      return '';
	    },
	    data: function data(itm) {
	      if (!itm) {
	        return '';
	      }
	      return itm.reduce(dtaBuilder, []).join('');
	    },
	    event: function event(itm) {
	      if (!itm) {
	        return '';
	      }
	      return eventRegistry(itm);
	    }

	  };

	  var getProps = function getProps(pp) {
	    var theKeys = Object.keys(pp);
	    if (theKeys.length === 0) return '';

	    return theKeys.reduce(function (ob, ii) {
	      ob.push(propHandle[ii](pp[ii]));
	      return ob;
	    }, []).join('');
	  };

	  var HT = {
	    htmlBuild: function htmlBuild(node, group) {
	      if (typeof node === 'string') {
	        return node + ' ';
	      }
	      return HT.htmlString(node, group);
	    },
	    eachChild: function eachChild(kids, group) {
	      if (!kids) {
	        return '';
	      }
	      var kdArr = [];
	      var trace = group ? group + '.kids' : false;
	      kids.forEach(function (itm, i) {
	        var traceTo = trace ? trace + '.' + i : '';
	        kdArr.push(HT.htmlBuild(itm, traceTo));
	      });
	      return kdArr.join('');
	    },

	    htmlString: function htmlString(node, group) {
	      var traceBackKey = group ? ' data-trace="' + group + '"' : '';
	      return ['<', node.type, getProps(node.props), traceBackKey, '>', HT.eachChild(node.kids, group), '</', node.type, '>'].join('');
	    }

	  };
	  return HT;
	}();

	module.exports = new NodeMap('example');

/***/ }
/******/ ]);