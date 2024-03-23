
//skrypt, który będzie modyfikował kod HTML
//Skrypt odpowiada za to, że po kliknięciu ikony [+] z elementu z klasą .menu zostanie usunięta klasa .expanded,
// a ikona zmieni się na znak [-]. Z kolei jeżeli klikniemy ikonę [-] to do elementu z klasą .menu zostanie dodana klasa .expanded,
// a ikona zostanie podmieniona na [+].
// Teraz możemy zwijać i rozwijać menu ikoną w prawym górnym rogu.
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("expanded")) {
        menu.classList.remove("expanded");
        toggle.querySelector('a').innerHTML = '<i id="toggle-icon" class="far fa-plus-square"></i>';
    } else {
        menu.classList.add("expanded");
        toggle.querySelector('a').innerHTML = '<i id="toggle-icon" class="far fa-minus-square"></i>';
    }
}

toggle.addEventListener("click", toggleMenu, false);