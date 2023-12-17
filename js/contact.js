function toggleNavbar() {
          var navbar = $('.ul');
          navbar.css('display', (navbar.css('display') === 'none' || navbar.css('display') === '') ? 'flex' : 'none');
}

$(document).ready(function () {
          $(".email-hover").hover(
                    function () {
                              $(this).css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.3)");
                              $(this).css("padding", "2%");
                              $(".con").css("flexBasis", "60%");
                              $(".loc").css("flexBasis", "40%");
                    },

                    function () {
                              $(this).css("padding", "0");
                              $(this).css("box-shadow", "none");
                              $(".con").css("flexBasis", "40%");
                              $(".loc").css("flexBasis", "60%");
                    }
          );

          $(".git-hover").hover(
                    function () {
                              $(this).css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.3)");
                              $(this).css("padding", "2%");
                              $(".con").css("flexBasis", "60%");
                              $(".loc").css("flexBasis", "40%");
                    },

                    function () {
                              $(this).css("padding", "0");
                              $(this).css("box-shadow", "none");
                              $(".con").css("flexBasis", "40%");
                              $(".loc").css("flexBasis", "60%");
                    }
          );

          $(".ins-hover").hover(
                    function () {
                              $(this).css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.3)");
                              $(this).css("padding", "2%");
                              $(".con").css("flexBasis", "60%");
                              $(".loc").css("flexBasis", "40%");
                    },

                    function () {
                              $(this).css("padding", "0");
                              $(this).css("box-shadow", "none");
                              $(".con").css("flexBasis", "40%");
                              $(".loc").css("flexBasis", "60%");
                    }
          );

          $(".num-hover").hover(
                    function () {
                              $(this).css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.3)");
                              $(this).css("padding", "2%");
                              $(".con").css("flexBasis", "60%");
                              $(".loc").css("flexBasis", "40%");
                    },

                    function () {
                              $(this).css("padding", "0");
                              $(this).css("box-shadow", "none");
                              $(".con").css("flexBasis", "40%");
                              $(".loc").css("flexBasis", "60%");
                    }
          );

          $(".l1-hover").hover(
                    function () {
                              $(this).css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.3)");
                              $(this).css("padding", "2%");
                              $(".con").css("flexBasis", "30%");
                              $(".loc").css("flexBasis", "70%");
                    },

                    function () {
                              $(this).css("padding", "0");
                              $(this).css("box-shadow", "none");
                              $(".con").css("flexBasis", "40%");
                              $(".loc").css("flexBasis", "60%");
                    }
          );

          $(".l2-hover").hover(
                    function () {
                              $(this).css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.3)");
                              $(this).css("padding", "2%");
                              $(".con").css("flexBasis", "30%");
                              $(".loc").css("flexBasis", "70%");
                    },

                    function () {
                              $(this).css("padding", "0");
                              $(this).css("box-shadow", "none");
                              $(".con").css("flexBasis", "40%");
                              $(".loc").css("flexBasis", "60%");
                    }
          );

          $(".l3-hover").hover(
                    function () {
                              $(this).css("box-shadow", "0 0 10px rgba(0, 0, 0, 0.3)");
                              $(this).css("padding", "2%");
                              $(".con").css("flexBasis", "30%");
                              $(".loc").css("flexBasis", "70%");
                    },

                    function () {
                              $(this).css("box-shadow", "none");
                              $(this).css("padding", "none");
                              $(".con").css("flexBasis", "40%");
                              $(".loc").css("flexBasis", "60%");
                    }
          );
});

