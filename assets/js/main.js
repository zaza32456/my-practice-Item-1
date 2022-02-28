/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*======= MENU SHOW =======*/
if (navToggle) {
  navToggle.addEventListener("click", () =>{
    navMenu.classList.add("show-menu")  /* 当navtoggle被点击，新增类“show-menu” */
  })
}

/*======= MENU HIDDEN =======*/
if(navClose) {
  navClose.addEventListener("click", () =>{
      navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link") /* 获取文档中class为nav__link的所有元素*/

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    //当点击任意一个nav__link的元素，将会移除类show-menu。
    navMenu.classList.remove("show-menu") 
}
navLink.forEach(n => n.addEventListener("click", linkAction)) //为每个nav__link元素绑定linkAction

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header")
    //当页面滚动超过50vh，新增类“scroll-header”
    if (this.scrollY >= 50) header.classList.add("scroll-header");else header.classList.remove('scroll-header')
}
window.addEventListener("scroll", scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper",{
    spaceBetween: 24,
    loop: "true",
    slidesPerView: "auto",
    centeredSlide: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      992: {
        spaceBetween: 80,
      },
    }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]") 

function scrollActive() {
    const scrollY = window.pageYOffset 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id")
        //卷轴滚动到指定位置会选择menu对应的section，为其添加action-active类添加变色效果。
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "bx-sun"

//原主题（如果用户选择过）
const selectedTheme = localStorage.getItem("selected-theme") //获取指定key（selected-theme）在本地存储的值
const selectedIcon = localStorage.getItem("selected-icon")

//通过验证dark theme类来获得接口的当前主题
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : "bx bx-sun"

//验证用户之前是否选择了主题
if (selectedTheme) {
  //验证完成后
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme)
}

//根据button激活/停用主题
themeButton.addEventListener("click", () => {
  //添加或移除 dark/icon 模式
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //保存当前选择的主题
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset: true
})

sr.reveal(".home__img, .new__container, .footer__container")
sr.reveal(".home__data", {delay: 500})
sr.reveal(".giving__content, .gift__card", {interval: 100})
sr.reveal(".celebrate__data, .message__form, .footer__img1", {origin: "left"})
sr.reveal(".celebrate__img, .message__img, .footer__img2", {origin: "right"})