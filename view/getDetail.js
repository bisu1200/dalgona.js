/**
 * @param element
 * @returns {ClientRect | DOMRect | *} = relative offset, width, height 등
**/

function getDetail(element) {
  return element.getBoundingClientRect();
}

module.exports = getDetail;
