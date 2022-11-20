const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    const targetImg = document.querySelector(tab.dataset.tabTarget + "-img");
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");
    target.classList.add("active-tab");
    targetImg.classList.add("active-tab");

    const mobileLabel = document.getElementById("mobile-label");
    if (window.getComputedStyle(mobileLabel).display !== "none") {
      mobileLabel.textContent = tab.title;
      showMobileMenu();
    }
  });
});

const showMobileMenu = (listNo) => {
  if (!listNo) listNo = "";
  const chevron = document.getElementById("btn-chevron" + listNo);
  chevron.classList.toggle("open");

  const mobileList = document.getElementById("methods-list" + listNo);
  mobileList.classList.toggle("mobile-open");
};

const scrollToTheTop = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};
