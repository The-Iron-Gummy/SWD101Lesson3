let btn = document.getElementById('sendBD');
function getBirthday() {
    let month = document.getElementById('bdMonth').value + " ";
    let day = document.getElementById('bdDay').value + ", ";
    let year = document.getElementById('bdYear').value;
    let fullBD = month.concat(day, year);
    document.getElementById('bdPrint').innerHTML = "Your birthday is: " + fullBD;
}
btn.addEventListener('click', getBirthday);
