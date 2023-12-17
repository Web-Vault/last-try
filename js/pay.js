function toggleNavbar() {
          var navbar = $('.ul');
          navbar.css('display', (navbar.css('display') === 'none' || navbar.css('display') === '') ? 'flex' : 'none');
}


$(document).ready(function () {
          $(".pay1, .pay2, .pay3").hide();

          $("#payment").change(function () {
                    // Hide all payment divs
                    $(".pay1, .pay2, .pay3").hide();

                    var selectedPaymentMethod = $(this).val();

                    if (selectedPaymentMethod === "1") {
                              $(".pay1").slideDown();
                    } else if (selectedPaymentMethod === "2") {
                              $(".pay2").slideDown();
                    } else if (selectedPaymentMethod === "3") {
                              $(".pay3").slideDown();
                    }
          });
});

function validateForm() {
          resetErrors();

          var recAcc = document.getElementById("rec-acc").value;
          if (recAcc === "") {
                    displayError("rec-acc", "Receiver's Account Number is required");
                    return false;
          }

          // Validate Amount
          var amount = document.getElementById("amt").value;
          if (amount === "") {
                    displayError("amt", "Amount is required");
                    return false;
          }

          // Validate Method Of Payment
          var paymentMethod = document.getElementById("payment").value;
          if (paymentMethod === "") {
                    displayError("payment", "Please select a Payment Method");
                    return false;
          }

          // Validate based on the selected payment method
          if (paymentMethod === "1") {
                    var pytmPhpe = document.getElementById("pytm-phpe").value;
                    if (pytmPhpe === "") {
                              displayError("pytm-phpe", "Paytm / PhonePe Number is required");
                              return false;
                    }
                    else {
                              var re = /^[0-9]{10}$/;
                              if (!re.test(pytmPhpe)) {
                                        displayError("pytm-phpe", "Invalid Paytm / PhonePe Number");
                                        return false;
                              }
                              else {
                                        // document.getElementById('pytm-phone').style.display = 'none';
                              }
                    }
          }

          else if (paymentMethod === "2") {
                    var upi = document.getElementById("upi").value;
                    if (upi === "") {
                              displayError("upi", "UPI ID is required");
                              return false;
                    }
                    else {
                              var regexUpi = /^[A-Za-z]+\d{0,6}$/;
                              if (!regexUpi.test(upi)) {
                                        displayError('upi', 'Invalid UPI ID');
                                        return false;
                              }
                              else {
                                        // 
                              }
                    }

                    var upin = document.getElementById("upin").value;
                    if (upin === "") {
                              displayError("upin", "UPI PIN is required");
                              return false;
                    }
                    else {
                              var pinLength = upin.length;
                              if ((pinLength < 6) || (pinLength > 6)) {
                                        displayError("upin", "Enter a valid 6 digit UPIN number.");
                                        return false;
                              }
                              else {
                                        // check for alphanumeric characters only
                                        var lettersAndDigitsOnly = /^\D*\d+\D*$/.test(upin);
                                        if (!lettersAndDigitsOnly) {
                                                  displayError("upin", "UPIN should contain only digits and alphabets.");
                                                  return false
                                        }
                                        else {
                                                  // document.getElementById("pay_button").disabled=false;
                                        }
                              }
                    }
          }

          else if (paymentMethod === "3") {
                    var cardDigits = document.getElementById("4-digit").value;
                    if (cardDigits === "") {
                              displayError("digit", "Last 4 Digits of Card are required");
                              return false;
                    }
                    else {
                              var digits = parseInt(cardDigits, 10);
                              if (isNaN(digits)) {
                                        displayError("digit", "Please enter numeric value");
                                        return false;
                              }
                              else {
                                        var numlen = digits.toString().length;
                                        if (!(numlen == 4)) {
                                                  displayError("digit", "Please provide exactly 4 digits.");
                                                  return false;
                                        }
                              }
                    }
          }

          var cvv = document.getElementById("cvv").value;
          if (cvv === "") {
                    displayError("cvv", "CVV is required");
                    return false;
          }
          else {
                    var cvvLength = cvv.length;
                    if (cvvLength !== 3) {
                              // displayError("cvv", "CVV should be a 3 digit number");
                              displayError("cvv", "CVV must be 3 digits long");
                              return false;
                    }
          }

          return true;
}

function resetErrors() {
          // Clear all error messages
          var errorElements = document.querySelectorAll(".error");
          errorElements.forEach(function (element) {
                    element.textContent = "";
          });
}

function displayError(elementId, errorMessage) {
          var errorElement = document.querySelector("." + elementId + "-error");
          if (errorElement) {
                    errorElement.textContent = errorMessage;
          }
}