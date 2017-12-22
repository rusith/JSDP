/*
    The Singleton Pattern

    Singleton patterns is a creational design pattern which restricts the
    initialization of a class to a single instance.
*/


var singleton = (function () {
  var instance;

  function init() {
    // The singleton
    count = 0;
    return {
      increment: function () {
        count++;
      },
      decrement: function () {
        count--;
      },
      equalsTo: function(value) {
          return value === count;
      }
    }
  }

  return {
    getInstance() {
      return instance || (instance = init());
    }
  }
})();


var obj1 = singleton.getInstance();
var obj2 = singleton.getInstance();

obj1.increment();
obj1.increment();
obj1.increment();

if(obj2.equalsTo(3)) {
    console.log('DONE');
} else {
    console.error('BAD SINGLETON');
}
