class App {

  constructor() {
    function sayHi() {
      console.log('hello there');
    }

    setTimeout(function () {
      sayHi();
    }, 5000)
  }
}

new App();
