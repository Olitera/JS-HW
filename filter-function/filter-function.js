Array.prototype.myFilter = function(callback, thisArg) {
  return this.reduce((acc, current, index, arr) => {
    if (callback.call(thisArg, current, index, arr)) {
      acc.push(current);
    }
    return acc;
  }, []);
};
