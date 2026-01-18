// 모바일 메뉴 전체 열기/닫기
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// 모바일 드롭다운 (Guides, Game World 등)
document.querySelectorAll(".mobile-dropdown").forEach((dropdown) => {
  const btn = dropdown.querySelector("button");
  const submenu = dropdown.querySelector(".mobile-submenu");

  btn.addEventListener("click", () => {
    submenu.classList.toggle("hidden");
  });
});
