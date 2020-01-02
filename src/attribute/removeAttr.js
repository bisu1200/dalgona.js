/**
 * @param params
 * @returns {HTMLCollection}
 * 속성 이름 받아서 그대로 removeAttiribute 호출
**/

function removeAttr(attr) {
  if(!attr) {
    return this.nodes;
  }

  for(var i in this.nodes) {
    this.nodes[i].removeAttribute(attr);
  }

  return this._returnObj();
}

module.exports = removeAttr;
