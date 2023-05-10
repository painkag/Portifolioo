function createTyped(selector) {
  const typed = new Typed(selector, {
    strings: ["Desenvolvedor", "Analista", "Freelancer", "Designer"],
    typeSpeed: 40,
    loop: true
  });
}

createTyped('.typed');
createTyped('.typed2');
