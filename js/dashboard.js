          function toggleNavbar() {
                    var navbar = $('.ul');
                    navbar.css('display', (navbar.css('display') === 'none' || navbar.css('display') === '') ? 'flex' : 'none');
          }


          $(document).ready(function () {
                    $('.more-info').click(function () {
                              $(".hidden-section").animate({
                                        height: 'toggle',
                                        opacity: 'toggle'
                              }, 'slow');
                    });
          });

          $(document).ready(function () {

                    var name = "Aryan Lathigara";
                    var email = "aryanlathigara@gmail.com";

                    $(".name-clicker").click(function () {
                              $(".click-content").html(" ");
                              $(".txt-name").html("Name : ");

                              var i = 0;
                              function typeName() {

                                        if (i < name.length) {
                                                  $(".click-content").append(name.charAt(i));
                                                  i++;
                                                  setTimeout(typeName, 50);
                                        }
                              }

                              typeName();
                    });

                    $(".email-clicker").click(function () {
                              $(".click-content").html(" ");
                              $(".txt-name").html("E-mail : ");
                              var i = 0;

                              function typeEmail() {

                                        if (i < email.length) {
                                                  $(".click-content").append(email.charAt(i));
                                                  i++;
                                                  setTimeout(typeEmail, 50);
                                        }
                              }

                              typeEmail();

                    });
          });

          $(document).ready(function () {
                    $(".card-info").click(function () {
                              $(".add-to-card").slideToggle();
                    });
          });

          function validateForm() {
                    var name = document.getElementById('card-on-name');
                    var n_error = document.getElementById('name-error');
                    var name_check = "";

                    var number = document.getElementById('card-num');
                    var number_error = document.getElementById('num-error');
                    var number_check = "";

                    var expiry = document.getElementById("expiry");
                    var date_error = document.getElementById("date-error");
                    var date_check = "";

                    var cvv = document.getElementById("cvv");
                    var cvv_error = document.getElementById("cvv-error");
                    var cvv_check = "";

                    if (name.value == "") {
                              n_error.innerHTML = "Enter name!";
                              n_error.style.color = "red";
                              name_check = false;
                    } else {
                              var n_syntax = /^[a-zA-Z\s]{5,30}$/;
                              var match = n_syntax.test(name.value);

                              if (match) {
                                        n_error.innerHTML = "";
                                        name_check = true;
                              } else {
                                        n_error.innerHTML = "Please enter name in proper way!";
                                        n_error.style.color = "red";
                                        name_check = false;
                              }
                    }

                    if (number.value == "") {
                              number_error.innerHTML = "Enter card number!";
                              number_error.style.color = "red";
                              number_check = false;
                    } else {

                              var number_syntax = /^\d{16}$/;
                              var number_match = number_syntax.test(number.value);

                              if (number_match) {
                                        number_error.innerHTML = "";
                                        number_check = true;
                              } else {
                                        number_error.innerHTML = "Please enter a valid card number without space!";
                                        number_error.style.color = "red";
                                        number_check = false;
                              }
                    }

                    if (expiry.value == "") {
                              date_error.innerHTML = "Enter expiry date!";
                              date_error.style.color = "red";
                              date_check = false;
                    } else {
                              let pattern = /^(\d\d)\/(\d\d)$/;
                              var p_match = pattern.test(expiry.value);

                              if (p_match) {
                                        date_error.innerHTML = "";
                                        date_check = true;
                              } else {
                                        date_error.innerHTML = "Please enter expiry date in proper way!";
                                        date_error.style.color = "red";
                                        date_check = false;
                              }
                    }

                    if (cvv.value == "") {
                              cvv_error.innerHTML = "Enter CVV!";
                              cvv_error.style.color = "red";
                              cvv_check = false;
                    }
                    else {
                              var cvv_txt = /^\d{3}$/;
                              if (cvv_txt.test(cvv.value)) {
                                        cvv_error.innerHTML = "";
                                        cvv_check = true;
                              } else {
                                        cvv_error.innerHTML = "CVV should be exactly three digits";
                                        cvv_error.style.color = "red";
                                        cvv_check = false;
                              }
                    }

                    if (name_check == true && number_check == true && date_check == true && cvv_check == true) {
                              var card_name = document.getElementById("holder");
                              var card_number = document.getElementById("number");
                              var card_date = document.getElementById("date");
                              var card_cvv = document.getElementById("cvv-number");

                              card_name.innerHTML = name.value;
                              card_date.innerHTML = expiry.value;
                              card_cvv.innerHTML = cvv.value;
                              card_number.innerHTML = number.value;

                              document.getElementById("card-form").style.display = "none";
                    }
                    else {
                              return false;
                    }
          }

          $(document).ready(function () {
                    var counter = 1;

                    $(".sc-transaction").click(function () {
                              var description = $("#description1").val();
                              var amount = parseFloat($("#amount1").val());
                              var receiver = $("#receiver1").val();

                              var transactionDiv = `
                  <div class="transaction">
                      <section class="transaction-info">
                          <div class="receiver-id">${receiver}</div>
                          <div class="sent-amount">${'$' + amount} /-</div>
                      </section>
      
                      <section class="transaction-info">
                          <div class="remarks">${description}</div>
                          <div class="state-and-time">
                              <div class="time" id="time-${counter}"></div>
                          </div>
                      </section>
                  </div> <br>
              `;

                              $(".scheduled-transaction").slideDown().append(transactionDiv);

                              startCountdown(counter);
                              counter++;
                    });
          });

          function startCountdown(counter) {
                    var userDateTime = document.getElementById(`countdownDateTime`).value;

                    if (userDateTime !== '') {
                              var countDownDate = new Date(userDateTime).getTime();

                              var countdownFunction = setInterval(function () {
                                        var now = new Date().getTime();

                                        var distance = countDownDate - now;

                                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                                        document.getElementById(`time-${counter}`).innerHTML = days + "d " + hours + "h " +
                                                  minutes + "m " + seconds + "s ";

                                        if (distance < 0) {
                                                  clearInterval(countdownFunction);
                                                  document.getElementById(`time-${counter}`).innerHTML = "Payment Done";
                                        }
                              }, 1000);
                    } else {
                              alert('Please select a countdown date and time.');
                    }
          }
