function addClass(className) {
  if(!className) {
    return this.nodes;
  }

  for(var i in this.nodes) {
    this.nodes[i].className = className;
  }

  return this._returnObj();
}

module.exports = addClass;
