function remove() {
  for(var i in this.nodes) {
    this.nodes[i].remove();
  }

  this.nodes = [];
  return this._returnObj();
}

module.exports = remove;
