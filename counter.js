// https://maku77.github.io/nodejs/env/create-module.html

function Counter() {
  this.val = 0;
}

Counter.prototype.increment = function () {
  this.val += 1;
};

Counter.prototype.getCount = function () {
  return this.val;
};

// Counter コンストラクタを公開
module.exports = Counter;