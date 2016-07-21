const _ = require('lodash');

class MyClass {
  constructor({options, promise, types}) {
    this.options = _.clone(options);
    this.things = _.clone(things);
    this.types = _.clone(types);
  }

  mergeOptions(newOptions) {
    this.options = _.assign(this.options, newOptions);
  }

  mergeTypes(newTypes) {
    this.types = _.union(this.types, newTypes);
  }
}

module.exports = MyClass;
