const checkAge = () => {
    const age = prompt("Ingresa tu edad");
    
    if (age >= 18) {
      alert("Tienes acceso al catalogo de peliculas violentas");
      window.location.href = "/terror/terror.html"
    } else {
      alert("Debes ser mayor de 18 años para acceder al catalogo");
    }
}

const login1 = document.getElementById("login1");
const login2 = document.getElementById("login2");
const loginUser = document.getElementById("loginUser");
const textLogin = document.getElementById("textLogin");
const textLogout = document.getElementById("textLogout");

textLogin.style.visibility = "hidden";
textLogout.style.visibility = "hidden";

const show = () => {
  if (textLogin.style.visibility == "hidden") {
    textLogin.style.visibility = "visible";
  } else {
    textLogin.style.visibility = "hidden";
  }
};

const show2 = () => {
  if (textLogout.style.visibility == "hidden") {
    textLogout.style.visibility = "visible";
  } else {
    textLogout.style.visibility = "hidden";
  }
};

const iniciarSesion = () => {
  let usuario = prompt("ingresa tu nombre");

  localStorage.setItem("name", usuario);

  loginUser.innerHTML = usuario;
};

if (localStorage.getItem("name")) {
  loginUser.innerHTML = localStorage.getItem("name");
}

const cerrarSesion = () => {
  loginUser.innerHTML = " ";
  localStorage.clear();
};

login1.onclick = function () {
  iniciarSesion();
};

login2.onclick = function () {
  cerrarSesion();
};