(function(){

  // Pick a random number from 1 to 1000 to simulate user interaction.
  var amount = Math.floor(Math.random() * (1001 - 1));

  // var amount = 13;

  // Store various bill amounts in an array
  var bills = [20, 10, 5, 1];

  // Variable used to decrease the total amount for further calculations.
  var new_amount = amount;

  // Creates the empty array to store the # of each bill
  var change_machine = [];

  // dollars is defined in the local scope of the function.

// Display introduction text
console.log('\n' + 'Welcome to the very versatile change machine! Lets randomly assign you a dollar amount: $' + amount + '.')
console.log('Now, let us see if how we can divide $' + amount + ' into their respective bills: ' + '\n')

// Loop through each of the bill values in the bills array.
// Compare the output of the division, round down, and store into the new array
// Reiterate through the for loop, and store the new amount until amount left is 0
for (var i = 0; i < bills.length; i++) {
    let dollars = Math.floor(new_amount / bills[i]);
    new_amount = new_amount - (dollars * bills[i]);
    change_machine.push(dollars);
    console.log('Number of ' + bills[i] + '(s): ' + change_machine[i]);
}

// Used to clean up the console screen
console.log('\n');

})();
