function loadDoc() {
    var aj = new XMLHTTPrequest();

    aj.onload = () => {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    aj.open('GET', "ajax_info.html", true);
    aj.send();
}