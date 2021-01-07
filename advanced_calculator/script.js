function insert(num) {
    document.form.text_view.value =
    document.form.text_view.value + num;
}
function clean() {
    document.form.text_view.value = "";
}
function back() {
    var exp = document.form.text_view.value;
    document.form.text_view.value = exp.substring(0,exp.length-1);

}
function equal() {
    var exp = document.form.text_view.value;
    if(exp) {
        document.form.text_view.value = eval(exp)
    }
}