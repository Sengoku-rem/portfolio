const pageIds = [
    "showPageAboutMe",
    "showPageResearch1",
    "showPageResearch2",
    "showPageConference",
    "showPageHistory",
    "showPageSkills",
    "showPageHobbies",
    "showPageUpdates"
];

function showPage(pageId) {
    pageIds.forEach(id => {
        const page = document.getElementById(id);
        if (!page) return;
        if (id === pageId) {
            page.classList.add("active");
        } else {
            page.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // 検索BOXの処理
  const input = document.getElementById("searchBox");
  const pages = document.querySelectorAll(".page");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const val = input.value.trim().toLowerCase();

      //すべてのページからactiveクラスを外す
      pages.forEach(page => page.classList.remove("active"));

      if (val === "sengoku") {
        //特設ページのみをactiveにする
        const target = document.getElementById("showPageSengoku");
        if (target) {
          target.classList.add("active");
          console.log("にゃーん", val);
        }
      } else {
        console.log("うーん:", val);
      }
    }
  });

  // モーダル処理
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('close');

  document.querySelectorAll('.media-item').forEach(item => {
    item.addEventListener('click', () => {
      modal.style.display = 'block';

      if (item.tagName.toLowerCase() === 'img') {
        modalContent.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
      } else {
        return;
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalContent.innerHTML = '';
    }
  });
});
