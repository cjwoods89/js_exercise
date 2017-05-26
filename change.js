(function(){

  // Pick a random number from 1 to 1000 to simulate user interaction.
  var amount = Math.floor(Math.random() * (1001 - 1));

  // Variable used to decrease the total amount for further calculations.
  var new_amount;

  // Creates the empty array to store the # of each bill
  var change_machine = [];

  // dollars is defined in the local scope of the function.


  function twenties(x){

    // Check to see if the value passed in is divisible by 20
    if (x / 20 >= 1) {

      // Round down the number to a whole number.
      let dollars = Math.floor(x / 20);

      // Determine how much money you have left after removing the # of 20s.
      new_amount = amount - (dollars * 20);

      // Add the # of 20s to the empty array.
      change_machine.push(dollars);
    } else {

      // Push a zero value if it is not divisible
      change_machine.push(0);
    }

  }


  // Same as above, with their respective values
  function tens(x){

    if (x / 10 >= 1) {

      let dollars = Math.floor(x / 10);
      new_amount = new_amount - (dollars * 10);
      change_machine.push(dollars);
    } else {
      change_machine.push(0);
    }

  }

  // Same as above, with their respective values
  function fives(x){

    if (x / 5 >= 1) {

      let dollars = Math.floor(x / 5);
      new_amount = new_amount - (dollars * 5);
      change_machine.push(dollars);
    } else {
      change_machine.push(0);
    }

  }

  // Same as above, with their respective values
  function ones(x){

    if (x / 1 >= 1) {

      let dollars = Math.floor(x / 1);
      new_amount = new_amount - (dollars * 1);
      change_machine.push(dollars);
    } else {
      change_machine.push(0);
    }

  }

// Display introduction text
console.log('\n' + 'Welcome to the very versatile change machine! Lets randomly assign you a dollar amount: $' + amount + '.')
console.log('Now, let us see if how we can divide $' + amount + ' into their respective bills: ' + '\n')

// Call the various functions above, and passing the amount
twenties(amount);
tens(new_amount);
fives(new_amount);
ones(new_amount);

// Display the bill counts
console.log('Bill count: ' + change_machine[0] + ' twentie(s), ' + change_machine[1] + ' ten(s), ' + change_machine[2] + ' five(s), ' + change_machine[3] + ' one(s).' + '\n');

})();


// dollars = Math.floor(x);
// change_machine.push(dollars);
// console.log(change_machine);
// new_amount = amount - (dollars * amount)
