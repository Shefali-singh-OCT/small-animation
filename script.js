var a = document.querySelector("#box")
var b = document.querySelector("button")

b.addEventListener("click", function() {
    var c = Math.floor(Math.random() * 255)
    var d = Math.floor(Math.random() * 255)
    var e = Math.floor(Math.random() * 255)
    a.style.backgroundColor= `rgb(${c} , ${d} , ${e})`
    // a.style.backgroundColor= 'rgb(145, 53, 220)'
    b.innerHTML= "more transaction"
    b.style.backgroundColor= `rgb(${c}, ${d}, ${e})`
});
