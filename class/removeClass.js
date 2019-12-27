function removeClass(className) {
  if(!className) {
    return this.nodes;
  }

  for(var i in this.nodes) {
    this.nodes[i].classList.remove(className);
  }

  return this._returnObj();
}

module.exports = removeClass;
