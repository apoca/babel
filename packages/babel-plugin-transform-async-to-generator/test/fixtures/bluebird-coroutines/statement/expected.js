var _coroutine = require("bluebird").coroutine;

let foo =
/*#__PURE__*/
(() => {
  var _ref = _coroutine(function* () {
    var wat = yield bar();
  });

  return function foo() {
    return _ref.apply(this, arguments);
  };
})();
