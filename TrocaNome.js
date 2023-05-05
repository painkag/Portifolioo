import Typed from "typed.js";

const typed = document.querySelector('typed');
const options = {
  strings: ["<p>Desenvolvedor","Analista","Freelancer","Designer</p>"],
  typeSpeed: 40,
  loop: true
};

const typedText = new Typed(typed, options);
