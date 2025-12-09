// include.js
function loadInclude(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      el.innerHTML = data;
    })
    .catch((err) => console.error("Include error:", file, err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadInclude("header-placeholder", "header.html");
  loadInclude("footer-placeholder", "footer.html");
});
