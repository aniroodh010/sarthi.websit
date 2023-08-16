// Mobile Navigation

const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelectorAll(".mobile-nav .menu-items li");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileMenuItems.forEach((i) => {
  i.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

// Desktop Navigation

const options = {
  threshold: 0.8,
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
      //   console.log(entry.target);
      let currentActive = document.querySelector(".desktop-nav a.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      let newActive = document.querySelector(
        `.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`
      );

      newActive.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});


const authButton = document.getElementById('authButton');

authButton.addEventListener('click', () => {
  window.open('https://sarthii.auth.ap-south-1.amazoncognito.com/login?client_id=4ka7je6v48ddsbl8j9b5b080fq&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fec2-3-6-90-191.ap-south-1.compute.amazonaws.com', '_blank');
});
