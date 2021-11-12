window.addEventListener("load", main);

function main() {
    document.getElementById("normal").addEventListener("click", normal);
    document.getElementById("minimalista").addEventListener("click", minimalist);
}

function normal(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "normal.css";
}

function minimalist(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "minimalista.css";
}