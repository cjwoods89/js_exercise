(function(){

  var palindrome_words = ['AC-DC', 'jackass', 'ztrawhcs cire', 'pmurt dlanod', 'data', 'anna', 'civic', 'mom', 'noon', 'redrum', 'red'];
  var chosen_word = palindrome_words[Math.floor(Math.random() * 11)];
  var chosen_word_array = chosen_word.split('');
  var new_chosen_word = chosen_word_array.reverse();
  var new_palindrome_word = new_chosen_word.join('');

// console.log(new_palindrome_word);

  console.log('\n' + 'Welcome to the Palindrome checker! Your randomly chosen word is: ' + chosen_word + '. If your word is spelled the same forward as it is backwards, it is a palindrome word! Let us check to see if this word is a palindrome:');

  if (chosen_word != new_palindrome_word) {
    console.log('\n' + chosen_word + ' does not match ' + new_palindrome_word + '. Therefore, it is not a palindrome!' + '\n');

  } else {
    console.log('\n' + chosen_word + ' matches ' + new_palindrome_word + '. Therefore, it is a palindrome!' + '\n');

  }

})();
