const resp_menu = document.querySelector(".resp-menu");
const navMenu = document.querySelector(".nav-menu");

resp_menu.addEventListener("click", () => {
  resp_menu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    resp_menu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

const y = document.querySelector("#year");
y.innerHTML = new Date().getFullYear();

function ValidateEmail(x) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (x.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

function checkMsg(msg) {
  if (msg.value == "" || msg.value == " ") return false;
  else return true;
}

var modal = document.getElementById("myModal");
var inv = document.getElementById("inv");
var btn = document.querySelector(".send-btn");
var inv_msg = document.querySelector(".invModal .inv-modal-content p");
var msg = document.getElementById("iMsg");
var span = document.getElementsByClassName("close")[0];

var email = document.querySelector("#iMail");

btn.onclick = function () {
  if (ValidateEmail(email) && checkMsg(msg)) {
    modal.style.display = "block";
    document.querySelectorAll("input").forEach((n) => (n.value = ""));

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  } else {
    inv.style.display = "block";

    if (checkMsg(msg) == false && ValidateEmail(email))
      inv_msg.innerHTML = "Your Message Is Empty";
    else if (checkMsg(msg) == false && ValidateEmail(email) == false)
      inv_msg.innerHTML = "Invalid Data";
    else if (checkMsg(msg) == true && ValidateEmail(email) == 0)
      inv_msg.innerHTML = "Invalid Email";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == inv) {
        inv.style.display = "none";
      }
    };
  }
};
