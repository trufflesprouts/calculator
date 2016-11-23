var calcBtnELs = Array.from(document.getElementsByClassName('calc-btn'));
var screenEl = document.getElementById('calc-screen-text');

var calculations = "";

for (var i = 0; i < calcBtnELs.length; i++) {
  (function (index) {
    calcBtnELs[index].addEventListener('click', function() {
      var operation = calcBtnELs[index].getAttribute("operation");
      if (/[0-9]/.test(operation) || operation == ".") {
        screenEl.textContent += operation;
      }
      if (operation == "+" || operation == "-" ||operation == "/" || operation == "*") {
        screenEl.textContent = operation;
      }
      calculations += operation;
      console.log("calculations are " + calculations);
      console.log("result is " + eval(calculations));
    });
  })(i);
};
