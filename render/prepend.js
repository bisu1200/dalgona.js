function prepend(children) {
  for(var i in this.nodes) {
    this.nodes[i].parentNode.prepend(this._generateNode(children));
  }

  return this._returnObj();
}

module.exports = prepend;
