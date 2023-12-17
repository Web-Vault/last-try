
          function toggleNavbar() {
                    var navbar = $('.ul');
                    navbar.css('display', (navbar.css('display') === 'none' || navbar.css('display') === '') ? 'flex' : 'none');
          }


          $(document).ready(function () {
                    $(".point").hover(
                              function () {
                                        $(this).css({ "transform": "scale(103%)" });
                                        // $(this).css({"box-shadow": "0 0 10px rgba(0, 0, 0, 0.3)"});
                              },
                              function () {
                                        $(this).css({ "transform": "scale(100%)" });
                                        $(this).css({ "box-shadow": "0 0 0 rgba(0, 0, 0, 0)" });
                              },
                    );
          });


          $(document).ready(function () {
                    $('.acc-sec').click(function () {
                              $('.account-security-box').animate({
                                        opacity: 'toggle',
                                        height: 'toggle'
                              }, { duration: 700, queue: false }).delay(1000);
                              $('.customer-support-box, .privacy-policy-box').fadeOut(500);
                    });

                    $('.cust-sup').click(function () {
                              $('.customer-support-box').animate({
                                        opacity: 'toggle',
                                        height: 'toggle'
                              }, { duration: 700, queue: false }).delay(1000);
                              $('.account-security-box, .privacy-policy-box').fadeOut(500);
                    });

                    $('.pr-pl').click(function () {
                              $('.privacy-policy-box').animate({
                                        opacity: 'toggle',
                                        height: 'toggle'
                              }, { duration: 700, queue: false }).delay(1000);
                              $('.account-security-box, .customer-support-box').fadeOut(500);
                    });
          });

