document.addEventListener("DOMContentLoaded", () => {
  fetch("./assets/components/nav.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("global-nav").innerHTML = html;
    });
});
