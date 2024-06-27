function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

function myFunctionOut() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctionOut2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunctionOut3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}


function GoHome() {

    document.getElementById("top").innerHTML = "Go home?";
}
function Home() {

    document.getElementById("top").innerHTML = "Home";
}

function loadCommonContent() {
    fetch('https://hankypanty.github.io/commonHtml.html')
        .then(response => response.text())
        .then(data => {
            console.log(data.body);
            document.getElementById('common-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading common content:', error));
}

            
function dirtyMode() {
var bagrounds = document.getElementsByClassName("background-image");
    for (var i = bagrounds.length - 1; i >= 0; i--) {
        bagrounds[i].style.backgroundImage = "url(https://lh3.googleusercontent.com/pw/AP1GczN3xARjAdVLbrOaQulqXVxcHm-TTcqxWkZxxRFxikNTCkhzn0EPZxjm3l28oMBusopii7DHDLJZkTFNQ1RvY97gsV995VAsQBRMDahx_4WaDTdErhYaOrETP4MSbKaVRmPTDdolTPbFHKMnbd0ZxkFjKQ=w1539-h970-s-no-gm?authuser=0)";
        bagrounds[i].style.filter = "blur(5px)";
    }
}
