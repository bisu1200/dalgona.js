/**
 * @param val
 * @returns {HTMLCollection} or html;
 * val이 비어있다면 getHTML, 들어있다면 setHTML
 * jquery와 마찬가지로 get할때는 첫번째 요소의 값 반환
**/

function html(val) {
  if(!val) {
    return this.nodes[0].innerHTML;
  }

  for(var i in this.nodes) {
    this.nodes[i].innerHTML = val;
  }

  return this._returnObj();
}

module.exports = html;
