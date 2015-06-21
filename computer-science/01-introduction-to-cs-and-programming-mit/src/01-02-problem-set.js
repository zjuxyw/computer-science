/*
*
* Author: Eric Douglas
* Finished:
*
* Paying Debt Off In a Year 
*
* - interest is compounded monthly according to the balance at
*     the start of the month 
* - monthly payment must be a multiple of $10 and is the same for all months
* -  it is possible for the balance to become negative using this scheme
*/

var prompt = require( 'prompt' );

prompt.start();
prompt.get([
  {
    name : 'balance',
    description : 'Enter the outstanding balance on your credit card'
  },
  {
    name : 'interest',
    description : 'Enter the annual credit card interest rate as a decimal'
  }
], function( err, results ) {

 // constants
 var PERIOD = 12;

 // input variables
 var initialBalance = parseFloat( results.balance );
 var interest       = parseFloat( results.interest );

 // helper variables
 var monthsNeeded  = 0;
 var totalBalance  = initialBalance;
 var monthInterest = interest / 12;
 var monthPayment  = Math.ceil( initialBalance * ( 1 + interest ) / 120 ) * 10;
 // (( balance * ( interest ) / 12 ) / 10 ) * 10

 while ( totalBalance > 0 ) {
 
  totalBalance = ( totalBalance * ( 1 + monthInterest ) - monthPayment ).toFixed( 2 );
  monthsNeeded += 1;
 
 }

 console.log( '======= RESULT =======');
 console.log( 'Monthly payment to pay off debt in 1 year:', monthPayment );
 console.log( 'Number of months needed:', monthsNeeded );
 console.log( 'Balance', totalBalance );

});