
          $(document).ready(function () {
                    $(".signin").click(function () {
                              $(".sign-in").slideDown();
                              $(".sign-up").hide();
                              $(".password-reset").hide();
                    });

                    $(".signup").click(function () {
                              $(".sign-in").hide();
                              $(".sign-up").slideDown();
                              $(".password-reset").hide();
                    });

                    $(".forgot-pasword").click(function () {
                              $(".password-reset").slideToggle();
                    });

                    var true_mail = "aryanlathigara@gmail.com";
                    var true_password = "Aryan_0103";

                    $('.sign-in').submit(function (e) {
                              e.preventDefault();
                              var valid_signin = true;


                              var signin_email = $('#email').val();
                              var email_error = $('#email-error');

                              if (signin_email === "") {
                                        email_error.text("Email is required");
                                        valid_signin = false;
                              }
                              else {
                                        // var mail_test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                        if (signin_email == true_mail) {
                                                  email_error.text('');
                                        } else {
                                                  email_error.text("Please Enter a valid E-mail");
                                                  valid_signin = false;
                                        }
                              }

                              var signin_password = $('#password').val();
                              var password_error = $('#password-error');

                              if (signin_password === '') {
                                        password_error.text('Password is required');
                                        valid_signin = false;
                              }
                              else {
                                        // var pass_test = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9A-Za-z])(?!.*\s).{8,20}$/;

                                        if (signin_password == true_password) {
                                                  password_error.text('');
                                        } else {
                                                  password_error.text("Please Enter Correct Password");
                                                  valid_signin = false;
                                        }
                              }

                              if (valid_signin) {
                                        window.location.href = "home.html";
                              }
                    });

                    $('.sign-up').submit(function (e) {
                              e.preventDefault();
                              var valid_signup = true;


                              var signup_email = $('#signup-email').val();
                              var email_error = $('#signup-email-error');

                              if (signup_email === "") {
                                        email_error.text("Email is required for signing up!");
                                        valid_signup = false;
                              }
                              else {
                                        var mail_test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                        if (mail_test.test(signup_email)) {
                                                  email_error.text('');
                                                  // true_mail = signup_email;
                                        } else {
                                                  email_error.text("Please Enter a valid E-mail for signing up!");
                                                  valid_signup = false;
                                        }
                              }

                              var signup_password = $('#signup-password').val();
                              var password_error = $('#signup-password-error');

                              // Check if the password is empty
                              if (signup_password === '') {
                                        password_error.text('Password is required');
                                        valid_signup = false; // Assuming valid_signup is a variable that tracks the overall validity
                              } else {
                                        // Define a regular expression for password strength
                                        var pass_test = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9A-Za-z])(?!.*\s).{8,20}$/;

                                        // Test if the password meets the required criteria
                                        if (pass_test.test(signup_password)) {
                                                  password_error.text('');
                                                  // true_password = signup_password; // You may want to use this line if needed
                                        } else {
                                                  password_error.text("Please Enter Correct Password");
                                                  valid_signup = false;
                                        }
                              }

                              // Check confirmation password
                              var confirm_signup_password = $("#signup-confirm-password").val();
                              var confirm_signup_password_error = $("#signup-confirm-password-error");

                              if (confirm_signup_password === "") {
                                        confirm_signup_password_error.text("Please, re-enter the new password!");
                              } else {
                                        // Check if the confirmation password matches the entered password
                                        if (confirm_signup_password !== signup_password) {
                                                  confirm_signup_password_error.text("Confirmed password did not match with the new password");
                                        } else {
                                                  confirm_signup_password_error.text("");
                                        }
                              }


                              if (valid_signup) {
                                        // window.location.href = "index.html";
                                        true_mail = signup_email;
                                        true_password = signup_password;
                                        $
                                        $(".sign-in").show();
                                        $(".sign-up").slideUp();
                              }
                    });

                    $('.password-reset').submit(function (e) {
                              e.preventDefault();
                              var valid_reset = true;

                              var new_password = $('#new-password').val();
                              var new_password_error = $('.new-password-error');

                              if (new_password === "") {
                                        new_password_error.text("New password is required");
                                        valid_reset = false;
                              }
                              else {
                                        var pass_test = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-9A-Za-z])(?!.*\s).{8,20}$/;

                                        if (pass_test.test(new_password)) {
                                                  new_password_error.text('');
                                        } else {
                                                  new_password_error.text("Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one number, and one special character");
                                                  valid_reset = false;
                                        }
                              }

                              var confirm_new_password = $('#confirm-new-password').val();
                              var new_confirm_error = $('.new-confirm-error');

                              if (confirm_new_password === "") {
                                        new_confirm_error.text("Confirm New Password is required");
                                        valid_reset = false;
                              } else {
                                        if (confirm_new_password === new_password) {
                                                  new_confirm_error.text('Password Is Reset !');
                                                  true_password = new_password;
                                                  // alert(true_password);
                                        } else {
                                                  new_confirm_error.text("Passwords do not match");
                                                  valid_reset = false;
                                        }
                              }

                              return valid_reset;
                    });
          });