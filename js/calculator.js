
          function toggleNavbar() {
                    var navbar = $('.ul');
                    navbar.css('display', (navbar.css('display') === 'none' || navbar.css('display') === '') ? 'flex' : 'none');
          }

          $(document).ready(function () {
                    $(".exp-calc").click(function () {
                              $(".calc-emi").slideUp(1200);
                              $(".norm-calc").slideDown(1200);
                    });

                    $(".emi-calc").click(function () {
                              $(".norm-calc").slideUp(1200);
                              $(".calc-emi").slideDown(1200);
                    });
          });


          $(document).ready(function () {
                    $(".add-expr").click(function () {
                              var exp = $("#in-exp").val();
                              var result = eval(exp);

                              $(".a").html(result);
                              $(".pre-a").html(result);
                              $(".pre-q").html(exp);
                    });
          });

          $(document).ready(function () {
                    $(".find-emi").click(function () {
                              var loan_amt = $("#loan-amt").val();
                              var interest = $("#interest").val();
                              var tenure = $("#tenure").val();

                              var annualInterestRate = parseFloat(interest);
                              var loanTenureInYears = parseFloat(tenure);
                              var principal = parseFloat(loan_amt);

                              if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(loanTenureInYears)) {
                                        $(".emi-a").html("Please enter valid numbers for all fields");
                                        return;
                              }

                              var monthlyInterestRate = (annualInterestRate / 12) / 100;
                              var numberOfPayments = loanTenureInYears * 12;

                              var emi = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

                              $(".emi-a").html("EMI: " + emi.toFixed(2));
                              $("emi-pre-q").html(annualInterestRate, loanTenureInYears, principal);
                              $(".emi-pre-a").html(emi.toFixed(2));
                    });
          });

