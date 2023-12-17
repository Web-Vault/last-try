
          function toggleNavbar() {
                    var navbar = $('.ul');
                    navbar.css('display', (navbar.css('display') === 'none' || navbar.css('display') === '') ? 'flex' : 'none');
          }

          function validateForm() {
                    var branch = $('#branch');
                    var branchError = $('.branch-error');
                    var branchCheck = "";

                    var recAcc = $('#rec-acc');
                    var recAccError = $('.rec-acc-error');
                    var recAccCheck = "";

                    var amount = $('#amount');
                    var amountError = $('.amt-error');
                    var amountCheck = "";

                    var pin = $('#pin');
                    var pinError = $('.pin-error');
                    var pinCheck = "";

                    if (branch.val() == "") {
                              branchError.html("Select a branch!");
                              branchError.css('color', 'red');
                              branchCheck = false;
                    }
                    else {
                              branchError.html("");
                              branchCheck = true;
                    }

                    if (recAcc.val() == "") {
                              recAccError.html("Enter receiver's account number!");
                              recAccError.css('color', 'red');
                              recAccCheck = false;
                    }
                    else {
                              recAccError.html("");
                              recAccCheck = true;
                    }

                    if (amount.val() == "") {
                              amountError.html("Enter the amount!");
                              amountError.css('color', 'red');
                              amountCheck = false;
                    }
                    else {
                              amountError.html("");
                              amountCheck = true;
                    }

                    if (pin.val() == "") {
                              pinError.html("Enter PIN!");
                              pinError.css('color', 'red');
                              pinCheck = false;
                    }
                    else {
                              pinError.html("");
                              pinCheck = true;
                    }

                    var isFormValid = branchCheck && recAccCheck && amountCheck && pinCheck;

                    if (isFormValid) {
                              alert("Payment succeed!!");

                              // $(".succedd").slideDown();
                    }

                    return isFormValid;
          }
