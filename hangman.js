(function(){

   // var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   // Same function as above, but A LOT EASIER TO WRITE -- Thanks David

   var alphabet = 'abcdefghfijklmnopqrstuvwxyz'.split('');
   var hangman_words = ['functions', 'palindrone', 'javascript', 'hyperlink', 'method', 'data'];

   // Choose a random word from the hangman array
   var chosen_word = hangman_words[Math.floor(Math.random() * 5)];

   // Display introduction text
   console.log('\n' + 'Welcome to Hangman Lite!' + '\n' + '\n' + 'You are randomly generated a word to start with. You are then provided 10 randomly generated letters. You will be prompted if these letters exist in the word, and how many times. Can you figure out the hidden word?' + '\n');

   // Simulate 10 guesses of random letters of the alphabet.
   // Need to remove the letter from the alphabet array if guessed.
   // If the letter is guessed, we don't want to guess it again.
   for (var i = 0; i < 10; i++) {

      var x = Math.floor(Math.random() * 26 );

      if (chosen_word.indexOf(alphabet[x]) < 0) {

         console.log('You guessed the letter: ' + alphabet[x] + '. It does not exists in the hidden word!');

      } else {

         let letter_count = chosen_word.split(alphabet[x]).length - 1;

         console.log('You guessed the letter: ' + alphabet[x] + '. It does exists in the hidden word ' + letter_count + ' time(s)!');

      }

   }

   // Show the hidden word to the user
   console.log('\n' + 'Give up? The hidden word was: ' + chosen_word + '\n');

})();
