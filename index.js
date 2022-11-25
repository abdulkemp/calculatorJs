function evaluateSum() {
  document.getElementById("display").innerHTML = display();
}
function clearSum() {
  document.getElementById("display").innerHTML = display();
  document.getElementById("display1").innerHTML = display1();
}

var erase = document.querySelector("#del");
var clear = document.querySelector("#clear");
var equal = document.querySelector("#equal");

var btn_0 = document.querySelector("#zero");
var btn_1 = document.querySelector("#one");
var btn_2 = document.querySelector("#two");
var btn_3 = document.querySelector("#three");
var btn_4 = document.querySelector("#four");
var btn_5 = document.querySelector("#five");
var btn_6 = document.querySelector("#six");
var btn_7 = document.querySelector("#seven");
var btn_8 = document.querySelector("#eight");
var btn_9 = document.querySelector("#nine");

var btn_plus = document.querySelector("#plus");
var btn_min = document.querySelector("#min");
var btn_mul = document.querySelector("#mul");
var btn_divide = document.querySelector("#divide");
var btn_point = document.querySelector("#point");

var write_me = document.querySelector("#display");
var result = document.querySelector("#display1");

btn_0.onclick = () => {
  type_to(0);
};
btn_1.onclick = () => {
  type_to(1);
};
btn_2.onclick = () => {
  type_to(2);
};
btn_3.onclick = () => {
  type_to(3);
};
btn_4.onclick = () => {
  type_to(4);
};
btn_5.onclick = () => {
  type_to(5);
};
btn_6.onclick = () => {
  type_to(6);
};
btn_7.onclick = () => {
  type_to(7);
};
btn_8.onclick = () => {
  type_to(8);
};
btn_9.onclick = () => {
  type_to(9);
};
btn_plus.onclick = () => {
  type_to("+");
};
btn_min.onclick = () => {
  type_to("-");
};
btn_divide.onclick = () => {
  type_to("/");
};
btn_mul.onclick = () => {
  type_to("*");
};
btn_point.onclick = () => {
  type_to(".");
};
clear.onclick = () => {
  clearSum();
};

equal.onclick = () => {
  evaluateSum();
};

document.onkeyup = (e) => {
  if (e.key == "0" || e.key == "Num0") {
    type_to(0);
  } else if (e.key == "1" || e.key == "Num1") {
    type_to(1);
  } else if (e.key == "2" || e.key == "Num2") {
    type_to(2);
  } else if (e.key == "3" || e.key == "Num3") {
    type_to(3);
  } else if (e.key == "4" || e.key == "Num4") {
    type_to(4);
  } else if (e.key == "5" || e.key == "Num5") {
    type_to(5);
  } else if (e.key == "6" || e.key == "Num6") {
    type_to(6);
  } else if (e.key == "7" || e.key == "Num7") {
    type_to(7);
  } else if (e.key == "8" || e.key == "Num8") {
    type_to(8);
  } else if (e.key == "9" || e.key == "Num9") {
    type_to(9);
  } else if (e.key == "+" || e.key == "Num+") {
    type_to("+");
  } else if (e.key == "-" || e.key == "Num-") {
    type_to("-");
  } else if (e.key == "/" || e.key == "Num/") {
    type_to("/");
  } else if (e.key == "*" || e.key == "Num*") {
    type_to("*");
  } else if (e.key == "." || e.key == "Num.") {
    type_to(".");
  } else if (e.key == "Enter" || e.key == "Numenter") {
    evaluateSum();
  }else if (e.key == "Delete") {
    clearSum();
  }
};

var type_to = (text) => {
  if (write_me.innerText == "") {
    write_me.innerText = text;
  } else if (write_me.innerText.length <= 20) {
    write_me.innerText = write_me.innerText + text;
  } else {
    alert("Digit limit reached");
  }
};

var evaluateSum = () => {
  var res = write_me.innerText;
  if (res.indexOf("X") != -1) {
    res = res.replace("X", "*");
  } 
  result.innerText = eval(write_me.innerText);
};
