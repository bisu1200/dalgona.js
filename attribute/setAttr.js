/**
 * @param params
 * @returns {HTMLCollection}
 * { 속성: 값 } 형식으로 된 JSON 받아서 그대로 set
**/

function setAttr(params) {
  if(!params || Object.keys(params).length === 0) {
    return this.nodes;
  }

  for(var i in this.nodes) {
    for(var key in params) {
      this.nodes[i].setAttribute(key, params[key]);
    }
  }

  return this._returnObj();
}

module.exports = setAttr;
