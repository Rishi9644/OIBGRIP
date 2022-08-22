function input(number) {
  document.form.numview.value = document.form.numview.value + number;
}
function equals() {
  var a = document.form.numview.value;
  if (a)

    document.form.numview.value = eval(a);

  else
    document.form.numview.value = 'ERROR';
}
function clearr() {
  document.form.numview.value = "";

}
function backspace() {
  var b = document.form.numview.value;
  document.form.numview.value = b.substring(0, b.length - 1);
}
