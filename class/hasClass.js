function hasClass(keyword) {
  if(!keyword) {
    return this.nodes;
  }

  for(var i in this.nodes) {
    if(this.nodes[i].className.indexOf(keyword) !== -1) {
      return true;
    }
  }

  return false;
}

module.exports = hasClass;
