function toggleClass(className) {
  if(!className) {
    return this.nodes;
  }

  for(var i in this.nodes) {
    this.nodes[i].classList.toggle(className)
  }

  return this._returnObj();
}

module.exports = toggleClass;
