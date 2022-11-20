const animations = () => {
  ScrollReveal().reveal("header", {
    duration: 1500,
    origin: "top",
    distance: "200px",
  });
  ScrollReveal().reveal(".conwithstat", {
    duration: 1500,
    origin: "bottom",
    distance: "200px",
  });

  ScrollReveal().reveal(".strongsites", {
    duration: 1500,
    origin: "bottom",
    distance: "300px",
    duration: 3000,
  });

  ScrollReveal().reveal("#tech-1", {
    opacity: 0,
  });
  ScrollReveal().reveal("#tech-2", {
    delay: 200,
    opacity: 0,
  });
  ScrollReveal().reveal("#tech-3", {
    delay: 400,
    opacity: 0,
  });
  ScrollReveal().reveal("#tech-4", {
    delay: 600,
    opacity: 0,
  });
  ScrollReveal().reveal("#tech-5", {
    delay: 200,
    opacity: 0,
  });
  ScrollReveal().reveal("#tech-6", {
    delay: 400,
    opacity: 0,
  });
  ScrollReveal().reveal("#tech-7", {
    delay: 600,
    opacity: 0,
  });
  ScrollReveal().reveal("#tech-8", {
    delay: 800,
    opacity: 0,
  });
  ScrollReveal().reveal("#desktop-img", {
    duration: 1500,
    origin: "right",
    distance: "300px",
  });
  ScrollReveal().reveal("#methods-list", {
    duration: 1000,
    origin: "left",
    distance: "300px",
  });
  ScrollReveal().reveal("#desktop", {
    duration: 1000,
    origin: "left",
    distance: "300px",
  });
};
animations();
