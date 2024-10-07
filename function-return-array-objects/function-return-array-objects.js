function getPersons(name, age) {
  return [
    {
      name,
      age
    },
    Object.assign({}, { name, age }),
    { ...{ name, age } },
    Object.create({}, { name: { value: name, enumerable: true }, age: { value: age, enumerable: true } }),
    Object.create(Object.prototype, {
      name: { value: name, writable: true, enumerable: true, configurable: true },
      age: { value: age, writable: true, enumerable: true, configurable: true }
    }),
    new (function (name, age) {
      this.name = name;
      this.age = age;
    })(name, age),
    new (function ({ name, age }) {
      return Object.assign(this, { name, age });
    })({ name, age }),
    new (function () {
      return Object.assign(this, ...arguments);
    })({ name, age }),
    new (class {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    })(name, age),
    Object.seal({ name, age }),
    Object.freeze({ name, age }),
    Object.setPrototypeOf({ name, age }, Object.prototype),
    (() => {

      const object = {};

      Object.defineProperty(object, 'name', { value: name, writable: true, enumerable: true, configurable: true });
      Object.defineProperty(object, 'age', { value: age, writable: true, enumerable: true, configurable: true });

      return object;
    })(),
    Object.defineProperties({}, {
      name: { value: name, writable: true, enumerable: true, configurable: true },
      age: { value: age, writable: true, enumerable: true, configurable: true }
    }),
    Object.fromEntries([['name', name], ['age', age]]),
    Object.fromEntries(new Map([['name', name], ['age', age]])),
    Object.fromEntries(Object.entries({ name, age })),
    Object.fromEntries(Object.keys({ name, age }).map(key => [key, { name, age }[key]])),
    Object.fromEntries(Object.keys({ name, age }).map((key, index) => [key, Object.values({ name, age })[index]]))
  ];
}
