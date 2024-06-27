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
var backgrounds = Array ( "url(https://lh3.googleusercontent.com/pw/AP1GczPPMTALn8F9im0kUNDJOdt0366ITm3LJKJbcjeW4KbYq90MCJdCGmd--KHMZLULcgayrvddV8KDil-eSIULkLDr4Ssgkdc_SonpiNQXd1r1G_XpA6P18_93zeDisbbHvYaXPy4zv-7_MNnto0MvwJEGDg=w2597-h1261-s-no-gm?authuser=0)",
                    "url(https://lh3.googleusercontent.com/pw/AP1GczN3xARjAdVLbrOaQulqXVxcHm-TTcqxWkZxxRFxikNTCkhzn0EPZxjm3l28oMBusopii7DHDLJZkTFNQ1RvY97gsV995VAsQBRMDahx_4WaDTdErhYaOrETP4MSbKaVRmPTDdolTPbFHKMnbd0ZxkFjKQ=w1539-h970-s-no-gm?authuser=0)",
                    "url(https://lh3.googleusercontent.com/pw/AP1GczOyK2mM5FrTL8RyRDXHocjkI2WtJzcCLYUlQQx9aRINQkkAP8_yT3O2mY1W2cKfeIdka_Ml72XOHYcwHs9lZRN-2xOI8bpf_vd8Dg3Aq2dI3YR1Bh9UC09UtfemFzRTFlgEfeWZQQlDLuvmfeeybTLC0Q=w2795-h1451-s-no-gm?authuser=0)",
                    "url(https://lh3.googleusercontent.com/pw/AP1GczMR7M0Mwms8vPsZqOuafvOL07qq--ONMPhqWU03uTk65ezuDu1coS5Rsv1al3NathQXOBr-KhlMc5BqvTcdSNPowqBUouMCUn3JxjmJrMxsDG3uQeTTAwrfJK2QmalW7dnPQIQtOOU5KbCv1BDfTdHvGg=w3019-h1862-s-no-gm?authuser=0)",
                    "url(https://lh3.googleusercontent.com/pw/AP1GczMVTY908EVVnt_yzgzGKmCy1qovnAqCzt6vD_187BOjE2owg_d0oZk7lxt7Q7-DOtKlzQGPSi1pNfnOI8rPjHOPyW5WMrRc29hFOjYJ-7PV4aKMhI56VBWLCND_lz3-qjpD0FXer5Zjk497bikt1OwlDQ=w3555-h1716-s-no-gm?authuser=0)" )
    for (var i = bagrounds.length - 1; i >= 0; i--) {
        bagrounds[i].style.backgroundImage = backgrounds[Math.floor(Math.random()*backgrounds.length)];
        bagrounds[i].style.filter = "blur(8px)";
    }
}
