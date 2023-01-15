function display(x) {
  // var c = x
  // document.getElementById("display").innerHTML += c
  document.getElementById("display").innerHTML += x
}

function percentage() {
  var per =   document.getElementById("display").innerHTML;
  var percentage = per/100;
  document.getElementById("answer").innerHTML = percentage;
}

function answer() {
  // eval is a bodmas guru
  // var a = document.getElementById("display").innerHTML
  // var b = eval(a)
  // document.getElementById("answer").innerHTML = b
  document.getElementById("answer").innerHTML = eval(document.getElementById("display").innerHTML)
}

function cleared() {
  document.getElementById("display").innerHTML = " "
  document.getElementById("answer").innerHTML = " "
}

function del() {
  // document.getElementById("display").innerHTML =  document.getElementById("display").innerHTML.slice(0, -1)
  // document.getElementById("answer").innerHTML =  document.getElementById("answer").innerHTML.slice(0, -1)

  var a = document.getElementById('display').innerHTML;
  var b = a.slice(0, a.length -1);
  document.getElementById("display").innerHTML = b;
  // document.getElementById("answer").innerHTML = b;

}

var date = new Date()
document.getElementById("date").innerHTML = date.toLocaleTimeString();
// document.getElementById("date").innerHTML = date.toLocaleDateString();
// document.getElementById("date").innerHTML = date.toLocaleString();
