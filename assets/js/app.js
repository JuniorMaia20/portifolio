// Template Name: Infinity Multi
// Template URL: https://techpedia.co.uk/template/infinity-multi
// Description: Infinity Multi HTML Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.initializeSlick();
      Init.hamburgerMenu();
      Init.formValidation();
      Init.contactForm();
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    preloader: function () {
      setTimeout(function () { $('#preloader').hide('slow') }, 2000);
    },
    
    initializeSlick: function (e) {
      if ($(".client-slider").length) {
        $(".client-slider").slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 2,
          arrows: false,
          autoplay: true,
          cssEase: 'linear',
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    },
    hamburgerMenu: function () {
      if ($(".hamburger-menu").length) {
        $('.hamburger-menu').on('click', function() {
          $('.bar').toggleClass('animate');
          $('.mobile-navar').toggleClass('active');
          return false;
        });
    
        $('.has-children').on('click', function(e) {
          e.stopPropagation(); 
          
          $(this).children('ul').slideToggle('slow', 'swing');
          $('.icon-arrow', this).toggleClass('open');
    
          if ($('.mobile-navar.active').length) {
            $('.bar').removeClass('animate');
            $('.mobile-navar').removeClass('active');
          }
        });
        $('.menu-item').on('click', function() {
          if ($('.mobile-navar.active').length) {
            $('.bar').removeClass('animate');
            $('.mobile-navar').removeClass('active');
          }
        });
      }
    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
    },
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "<h3 class='alert-msg bg-success text-white p-3 mt-3'>Email Sent Successfully</h3>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h3 class='bg-danger text-white p-3 mt-3'>There is an error</h3>";
              }
              $("#message").show("slow");
              $("#message").slideDown("slow");
              setTimeout(function () {
                $("#message").slideUp("hide");
                $("#message").hide("slow");
              }, 3000);
            },
          });
        } else {
          return false;
        }
      });
    },
  }
  Init.i();
})(window, document, jQuery);

// Função para alternar entre os modos claro e escuro
function toggleMode() {
	// Seleciona o corpo do documento
	const body = document.body;
	// Alterna a classe entre 'light-mode' e 'dark-mode'
	body.classList.toggle('dark-mode');
	body.classList.toggle('light-mode');

	// Seleciona o ícone
	const icon = document.getElementById('icon');
	// Alterna o ícone entre sol e lua
	if (body.classList.contains('dark-mode')) {
		icon.classList.remove('fa-moon');
		icon.classList.add('fa-sun');
		localStorage.setItem('mode', 'dark');
	} else {
		icon.classList.remove('fa-sun');
		icon.classList.add('fa-moon');
		localStorage.setItem('mode', 'light');
	}
}

// Event listener para o botão de alternância
document.getElementById('toggle-mode').addEventListener('click', toggleMode);

// Carrega a preferência do usuário ao carregar a página
window.onload = function() {
	const mode = localStorage.getItem('mode') || 'light';
	document.body.classList.add(mode + '-mode');

	// Ajusta o ícone ao carregar a página
	const icon = document.getElementById('icon');
	if (mode === 'dark') {
		icon.classList.remove('fa-moon');
		icon.classList.add('fa-sun');
	} else {
		icon.classList.remove('fa-sun');
		icon.classList.add('fa-moon');
	}
};



