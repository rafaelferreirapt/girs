jQuery(document).ready(function($){

  // Carousels
  $('#fav-tweets').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: '<span style="position:absolute; top:50%; right:-10px;" class="glyphicon glyphicon-chevron-right"></span>',
    prevArrow: '<span style="position:absolute; top:50%; left:-10px;" class="glyphicon glyphicon-chevron-left"></span>',
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('#rnchr-testimonials-slider').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: '<span style="position:absolute; top:50%; right:10px;" class="glyphicon glyphicon-chevron-right"></span>',
    prevArrow: '<span style="position:absolute; top:50%; left:10px;" class="glyphicon glyphicon-chevron-left"></span>',
    pauseOnHover: true,
    adaptiveHeight: true
  });

  // Homepage
    // Video modals
      // Promo
      // Play video when showing modal
      $('#rancherPromoVideoModal').on('show.bs.modal', function() {
        $(this).find('.modal-body').html('<iframe src="https://player.vimeo.com/video/160679346?autoplay=1&title=0&byline=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="height: 80%; width: 100%"></iframe>');
      });

      // Kill video when hiding
      $('#rancherPromoVideoModal').on('hide.bs.modal', function() {
        $(this).find('.modal-body').html('');
      });

      // Demo
      $('#rancherDemoVideoModal').on('show.bs.modal', function() {
        $(this).find('.modal-body').html('<iframe src="https://player.vimeo.com/video/160679920?autoplay=1&title=0&byline=0" style="height: 80%; width: 100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      });

      // Kill video when hiding
      $('#rancherDemoVideoModal').on('hide.bs.modal', function() {
        $(this).find('.modal-body').html('');
      });

  // Rancher Page
    // Take the tour
      $(".rnchr-subtabs-a").on('click', function(e) {
        e.preventDefault();

        var tabcontent = $(this).attr('data-tabcontent');
        var img = $(this).attr('data-img');
        var desc = $(this).attr('data-desc');

        $('.'+tabcontent).html('<img src="'+img+'" class="img-responsive"><p class="text-center">'+desc+'</p>');
      });

    // Sparefoot video
      $('#rancherSparefootVideoModal').on('show.bs.modal', function() {
        $(this).find('.modal-body').html('<iframe src="https://player.vimeo.com/video/160680106?autoplay=1&title=0&byline=0" style="height: 80%; width: 100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      });

      // Kill video when hiding
      $('#rancherSparefootVideoModal').on('hide.bs.modal', function() {
        $(this).find('.modal-body').html('');
      });

  // Kubernetes Page
    // Demo video
      $('#rancherKubernetesVideo').on('show.bs.modal', function() {
        $(this).find('.modal-body').html('<iframe src="https://player.vimeo.com/video/160680779?autoplay=1&title=0&byline=0" style="height: 80%; width: 100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      });

      // Kill video when hiding
      $('#rancherKubernetesVideo').on('hide.bs.modal', function() {
        $(this).find('.modal-body').html('');
      });

  // Swarm Page
    // Demo video
      $('#rancherSwarmVideo').on('show.bs.modal', function() {
        $(this).find('.modal-body').html('<iframe src="https://player.vimeo.com/video/160680949?autoplay=1&title=0&byline=0" style="height: 80%; width: 100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      });

      // Kill video when hiding
      $('#rancherSwarmVideo').on('hide.bs.modal', function() {
        $(this).find('.modal-body').html('');
      });
});