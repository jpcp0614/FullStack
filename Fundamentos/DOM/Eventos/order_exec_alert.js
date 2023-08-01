function jsAlert () {
  setTimeout(() => {
    alert('Terceiro alert!');
    alert('Quarto alert!');
  }, 1000);
};

alert("Primeiro alert!");
alert("Segundo alert!");

window.onload = jsAlert;