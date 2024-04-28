var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bgc-dark', 'shadow');
        } else {
          nav.classList.remove('bgc-dark', 'shadow');
        }
      });