function jsCharged () {
  setTimeout(() => {
    alert('A página foi carregada!');
  }, 2000);
  
};

function moreInfo() {
  let textMoreInfo = document.getElementById("infos");
  textMoreInfo.innerText = "Ê trem bão!!!";
};

window.onload = jsCharged;