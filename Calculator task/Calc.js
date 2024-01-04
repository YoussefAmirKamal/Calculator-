arr = [];
function AddText(chara) {
  document.getElementById("in").value += chara;
}

function result() {
  var text = document.getElementById("in").value;
  document.getElementById("in").value = eval(text);
  arr.push(eval(text));
}
function C() {
  document.getElementById("in").value = " ";
  document.getElementById("res").innerHTML = "0";
}
function Historyy() {
  document.getElementById("res").innerHTML = arr;
}
function Del() {
  document.getElementById("in").value = document
    .getElementById("in")
    .value.slice(0, -1);
}
