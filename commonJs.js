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