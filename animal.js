// https://maku77.github.io/nodejs/env/create-module.html
// https://qiita.com/hosomichi/items/149b28c89a012ead26aa
module.exports = {
  Cat: function () { 
    this.sound = "neko";
    this.greet = function() {
      console.log("greet " + this.sound);
    }
  },
  Dog: function () {
    this.sound = "innu";
  },
};