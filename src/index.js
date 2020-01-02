// dalgona.js 0.2.0
var $d = function(selector) {
  if(!(this instanceof $d)) {
    return new $d(selector);
  }

  this.nodes = [];
  return this.init(selector);
};

$d.prototype = {
  init: function(selector) {
    var result = [];
    var isQuery = selector.match(/\s|>|:/g) !== null;

    if(typeof selector === 'string') {
      if(isQuery) {
        result = this._findAllByQuery(selector);
      } else if(selector.indexOf('#') === 0) {
        result = this._findAllById(selector);
      } else if(selector.indexOf('.') === 0) {
        result = this._findAllByClass(selector);
      } else if(selector.indexOf('<') === 0) {
        result = this._generateNode(selector);
      } else {
        result = this._findAllByTagName(selector);
      }
    } else {
      result = selector;
    }

    this.nodes = this._setNode(result);
    return this._returnObj();
  },
  _setNode: function(nodes) {
    var result = [];

    for(var i in nodes) {
      if(nodes[i] && nodes[i].nodeType) {
        result.push(nodes[i]);
      }
    }

    return result;
  },
  _returnObj: function() {
    return Object.setPrototypeOf(Object.assign({}, this.nodes), this);
  },
  _generateNode: function(children) {
    if(typeof children === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = children;
      children = tempDiv.childNodes[0];
    }

    return children;
  },
  _findAllById: function(id) {
    return document.getElementById(id) || [];
  },
  _findAllByClass: function(className) {
    className = className.slice(1);
    return document.getElementsByClassName(className) || [];
  },
  _findAllByTagName: function(tagName) {
    return document.getElementsByTagName(tagName) || [];
  },
  _findAllByQuery: function(query) {
    return document.querySelectorAll(query) || [];
  },
  _setWidth: function(element, val) {
    // val이 number면 px 붙여 대입, 아니면 %, vw, vh등의 반응형 단위니 그대로 대입
    if(typeof val === 'function') {
      element.style.width = val();
    } else if(Number.isNaN(Number(val))) {
      element.style.width = val;
    } else {
      element.style.width = `${val}px`;
    }
  },
  _setHeight: function(element, val) {
    // val이 number면 px 붙여 대입, 아니면 %, vw, vh등의 반응형 단위니 그대로 대입
    if(typeof val === 'function') {
      element.style.height = val();
    } else if(Number.isNaN(Number(val))) {
      element.style.height = val;
    } else {
      element.style.height = `${val}px`;
    }
  },
  first: require('./util/first'),
  last: require('./util/last'),
  find: require('./util/find'),
  getDetail: require('./view/getDetail'),
  addClass: require('./class/addClass'),
  removeClass: require('./class/removeClass'),
  toggleClass: require('./class/toggleClass'),
  hasClass: require('./class/hasClass'),
  width: require('./view/width'),
  height: require('./view/height'),
  text: require('./value/text'),
  html: require('./value/html'),
  css: require('./style/css'),
  setAttr: require('./attribute/setAttr'),
  removeAttr: require('./attribute/removeAttr'),
  append: require('./render/append'),
  prepend: require('./render/prepend'),
  remove: require('./render/remove')
};

// NPM, Yarn 등의 패키지 매니저를 이용했을 때
if(typeof module === 'object' && module.exports) {
  module.exports = $d;
  module.exports.$d = $d;
} else {
  window.$d = $d;
}
