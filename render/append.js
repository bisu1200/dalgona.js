function append(children) {
  for(var i in this.nodes) {
    this.nodes[i].appendChild(this._generateNode(children));
  }

  return this._returnObj();
}

module.exports = append;
