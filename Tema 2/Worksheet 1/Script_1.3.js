function contador() {
  myVar = setTimeout(alertFunc, 60000);
}


function alertFunc() {
  alert("Han pasado 60 segundos");
}

contador();