$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 40,
  autoHeight: true,
  stagePadding: 80,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: true,
  responsive: {
    0: {
      items: 1.5,
      margin: 40,
      stagePadding: 0,
    },
    600: {
      items: 2.4,
      stagePadding: 40,
    },
    900: {
      items: 3,
      stagePadding: 30,
    },
    1000: {
      items: 3,
      stagePadding: 30,
    },
    1200: {
      items: 4,
      margin: 30,
      stagePadding: 20,
    },
  },
});
