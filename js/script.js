const textEncritarDesencriptar = document.querySelector("#textEncritarDesencriptar");
const textEncriptadoDesencriptado = document.querySelector("#textEncriptadoDesencriptado");

function btnEncriptar () {
  const txtEncriptado = Encriptar(textEncritarDesencriptar.value);
  textEncriptadoDesencriptado.value = txtEncriptado;
}



function Encriptar (textEncritarDesencriptar) {
  let arrayEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  textEncritarDesencriptar = textEncritarDesencriptar.toLowerCase();
  for(let i = 0; i < arrayEncriptacion.length; i++ ) {
    if (textEncritarDesencriptar.includes(arrayEncriptacion[i][0])) {
      textEncritarDesencriptar = textEncritarDesencriptar.replaceAll(arrayEncriptacion[i][0], arrayEncriptacion[i][1]);
    }
  }
  return textEncritarDesencriptar
}