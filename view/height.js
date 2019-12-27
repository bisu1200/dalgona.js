/**
 * @param val
 * @returns {HTMLCollection} or height;
 * val이 비어있다면 getHeight, 들어있다면 setHeight
 * jquery와 마찬가지로 get할때는 첫번째 요소의 값 반환
**/
function height(val) {
  if(!val) {
    return this.getDetail(this.nodes[0]).height;
  }

  for(var i in this.nodes) {
    this._setHeight(this.nodes[i], val);
  }

  return this._returnObj();
}

module.exports = height;
