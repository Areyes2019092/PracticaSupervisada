document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("ventana-agregar-contacto");
  var btn = document.getElementById("agregar-contacto");
  var span = document.getElementsByClassName("close")[0];

  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("ventana-info-usuario-modal");
  var btn = document.getElementById("info-usuario-modal");
  var span = document.getElementsByClassName("close")[1];

  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

var btns = document.querySelectorAll('button[class^="detalle-btn"]');
var modals = document.querySelectorAll('div[id^="myModal"]');

// Para cada botón, agregar un evento clic
btns.forEach(function (btn, index) {
  btn.onclick = function () {
    modals[index].style.display = "block";
  };
});

modals.forEach(function (modal) {
  var span = modal.querySelector(".close");
  span.onclick = function () {
    modal.style.display = "none";
  };
});

window.onclick = (function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
})``;
