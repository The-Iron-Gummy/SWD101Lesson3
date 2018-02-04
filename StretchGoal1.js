document.addEventListener("mouseover", function (event) {
    console.log("mouseover confirmed")
    document.getElementById("mouse").innerHTML = "Hello World!";
    console.log("text changed")
});