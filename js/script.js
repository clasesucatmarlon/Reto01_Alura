const txtEncryptDecrypt = document.querySelector("#txtEncryptDecrypt");
const txtEncryptionDecrypted = document.querySelector("#txtEncryptionDecrypted");

// *************************************************************************************
// FUNCTIONALITY TO ENCRYPT A TEXT OR TEXT STRING
// *************************************************************************************
function btnEncrypt () {
  const txtEncryption = Encrypt(txtEncryptDecrypt.value);
  txtEncryptionDecrypted.value = txtEncryption;
  txtEncryptDecrypt.value="";
}

function Encrypt (txtEncryptDecrypt) {
  let arrayEncrypt = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  txtEncryptDecrypt = txtEncryptDecrypt.toLowerCase();
  for(let i = 0; i < arrayEncrypt.length; i++ ) {
    if (txtEncryptDecrypt.includes(arrayEncrypt[i][0])) {
      txtEncryptDecrypt = txtEncryptDecrypt.replaceAll(arrayEncrypt[i][0], arrayEncrypt[i][1]);
    }
  }
  return txtEncryptDecrypt;
}


// *************************************************************************************
// FUNCTIONALITY TO DECRYPT A TEXT OR TEXT STRING
// *************************************************************************************
function btnDecrypt () {
  const txtDecrypted= Decrypt(txtEncryptDecrypt.value);
  txtEncryptionDecrypted.value = txtDecrypted;
}

function Decrypt(txtEncryptDecrypt) {
  let arrayDecrypt = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  
  for(let i = 0; i < arrayDecrypt.length; i++ ) {
    if (txtEncryptDecrypt.includes(arrayDecrypt[i][0])) {
      txtEncryptDecrypt = txtEncryptDecrypt.replaceAll(arrayDecrypt[i][0], arrayDecrypt[i][1]);
    }
  }
  return txtEncryptDecrypt;
}


// *************************************************************************************
// FUNCTIONALITY TO COPY A TEXT STRING TO THE CLIPBOARD
// *************************************************************************************
function copyToClipBoard() {
  let content = document.querySelector('#txtEncryptionDecrypted');
  content.select();
  document.execCommand('copy');
}
