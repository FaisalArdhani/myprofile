window.addEventListener("scroll", () => {
      const nav = document.querySelector(".container-nav");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });