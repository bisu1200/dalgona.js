/**
 * @param val
 * @returns {HTMLCollection} or width;
 * val이 비어있다면 getWidth, 들어있다면 setWidth
 * jquery와 마찬가지로 get할때는 첫번째 요소의 값 반환
**/

function width(val) {
  if(!val) {
    return this.getDetail(this.nodes[0]).width;
  }

  for(var i in this.nodes) {
    this._setWidth(this.nodes[i], val);
  }

  return this._returnObj();
}

module.exports = width;
