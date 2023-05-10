window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });
  