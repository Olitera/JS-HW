Object.prototype[Symbol.iterator] = function() {

  if (this.from === undefined || this.to === undefined) {
    throw new Error('\'from\' and \'to\' properties must be specified!');
  }

  if (typeof this.from !== 'number' || typeof this.to !== 'number') {
    throw new Error('Both \'from\' and \'to\' properties must be numbers!');
  }

  if (this.to < this.from) {
    throw new Error('\'to\' property must be greater than or equal to \'from\' property!');
  }

  let current = this.from;

  const end = this.to;

  return {
    next() {
      return current <= end ? { value: current++, done: false } : { done: true };
    }
  };
};

const myIterable = { from: 1, to: 4 };
for (let item of myIterable) {
  console.log(item);
}
