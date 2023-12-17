$(document).ready(function () {
          var slider = $("#slides-part-3");
          var slideImg = $(".slide-img-part-3");
          var slidesCount = slideImg.length;
          var width = 100;
          var currentFlag = 1;

          function animate() {
                    slider.css("margin-left", -(width * currentFlag) + "%");
                    currentFlag = (currentFlag + 1) % slidesCount;
          }

          function resetFlag() {
                    if (currentFlag === slidesCount) {
                              slider.css("transition", "none");
                              slider.css("margin-left", "0");
                              currentFlag = 1;
                              setTimeout(function () {
                                        slider.css("transition", "margin-left 1s ease");
                              }, 10);
                    }
          }

          setInterval(function () {
                    animate();
                    resetFlag();
          }, 2000);
});

function toggleNavbar() {
          var navbar = $('.ul');
          navbar.css('display', (navbar.css('display') === 'none' || navbar.css('display') === '') ? 'flex' : 'none');
}

$(document).ready(function () {
          $(".s2").mouseenter(function () {
                    $(".s2 .description.left").animate({ opacity: 1, left: 0 }, 1000);
          });

          $(".s3").mouseenter(function () {
                    $(".s3 .description.left").animate({ opacity: 1, left: 0 }, 1000);
          });
});


// 

$(document).ready(function() {
          $(".purch-ani").hover(function() {
                    
          });
});