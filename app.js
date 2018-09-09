// moduls.exports = とは
// http://d.hatena.ne.jp/jovi0608/20111226/1324879536

// https://maku77.github.io/nodejs/env/create-module.html

var sample = require('./module');
var Counter = require('./counter');
var Animal = require('./animal');
// node_modules/<MODULE_NAME>/inde.js が呼ばれる
// モジュールのロードルール
// https://qiita.com/hosomichi/items/149b28c89a012ead26aa
var MyMath = require('mymath');

console.log(sample.method("hhh"));
console.log(sample.method2(3));

var c = new Counter();
c.increment();
console.log(c.getCount());
c.increment();
console.log(c.getCount());

var cat = new Animal.Cat();
var dog = new Animal.Dog();
cat.greet();
console.log(dog.sound);

console.log(MyMath.double(100));
console.log(MyMath.square(100));

