/**
 * @param val
 * @returns {HTMLCollection} or text;
 * val이 비어있다면 getText, 들어있다면 setText
 * jquery와 마찬가지로 get할때는 첫번째 요소의 값 반환
**/

function text(val) {
  if(!val) {
    return this.nodes[0].textContent;
  }

  for(var i in this.nodes) {
    this.nodes[i].textContent = val;
  }

  return this._returnObj();
}

module.exports = text;
