(function(){

  var startingPopulations = [200, 300, 2, 50, 450, 800, 534, 'Over 9000!!!'];
  var chosen_Populations = startingPopulations[Math.floor(Math.random() * 8)];
  var birthRate = Math.random() * (1 - .01);
  var numberOfWeeks = [Math.floor(Math.random() * (11 - 1))];
  var newPopulation = chosen_Populations;


  // Display introduction
  console.log('\n' + 'There exists a mythical species of rabbit called the Cherokee Hare, who can reproduce at variable rates and never seem to die.');
  console.log('As a wildlife expert, your job is to determine how many rabits there will be. Lucky for you, we found some genius engineers!');
  console.log('\n' + 'Introducing, the Cherokee Hare birth simulator. Do not worry, your spam filter will spare your eyes from the visual portion of the simulation.');
  console.log('What you will see is the new population of the Cherokee Hare given a random starting population, random time interval (in weeks), and their birth rate. Let us see how this works.');

  // Display starting values
  console.log('\n' + 'Your starting population is: ' + chosen_Populations + '.');
  console.log('Your birthRate is: ' + birthRate.toFixed(2) + '.');
  console.log('The time interval is: ' + numberOfWeeks + ' weeks.' + '\n');

  // Check for easter egg
  if (chosen_Populations == 'Over 9000!!!') {

      console.log('\n' + '=======================================================================' + '\n');
      console.log('Nappa: Vegeta, what does the scouter say about their power level?');
      console.log('Vegeta: Its ' + startingPopulations + '!');
      console.log('Nappa: WHAT?! NINE THOUSAND?!' + '\n');
      console.log('======================================================================='+ '\n');
      console.log('_________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__________________')
      console.log('______________¶¶_________________¶¶_______________')
      console.log('___________¶¶_______________________¶¶¶___________')
      console.log('__________________________________________________')
      console.log('_______¶¶¶___________________¶¶¶¶_______¶¶________')
      console.log('_¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶_____¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__')
      console.log('__¶¶¶¶____¶¶¶¶¶¶¶¶¶_¶¶¶¶¶¶¶¶¶____¶¶¶¶¶¶¶¶¶¶¶¶¶¶___')
      console.log('___¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶___¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶____¶¶¶____')
      console.log('__¶___¶¶¶¶¶¶¶¶______¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶______¶¶__¶__')
      console.log('_¶¶___¶¶¶¶¶¶¶¶¶______¶¶¶¶¶¶¶¶¶¶¶¶¶¶_______¶¶__¶¶__')
      console.log('¶______¶¶¶¶¶¶¶¶_____¶¶¶___¶¶¶¶¶¶¶¶¶___¶¶¶¶¶____¶__')
      console.log('¶__________¶¶¶¶¶¶¶¶¶¶¶______¶¶¶¶¶¶¶¶¶¶¶__¶______¶¶')
      console.log('¶_______________________________________________¶¶')
      console.log('¶________¶¶_____________________________________¶¶')
      console.log('¶______¶¶¶¶_________________________¶¶¶¶________¶¶')
      console.log('¶_____¶__¶¶_________________________¶¶¶¶________¶¶')
      console.log('¶_________¶¶¶______________________¶¶___________¶¶')
      console.log('¶___________¶¶¶__________________¶¶¶____________¶¶')
      console.log('¶¶____________¶¶¶¶____________¶¶¶¶_____________¶__')
      console.log('_¶¶______________¶¶¶¶¶¶¶¶¶¶¶¶¶¶________________¶__')
      console.log('__¶___________________________________________¶¶__')
      console.log('___¶¶________________________________________¶¶___')
      console.log('____¶¶______________________________________¶¶____')
      console.log('_____¶¶___________________________________¶¶______')
      console.log('_______¶¶_______________________________¶¶¶_______')
      console.log('_________¶¶___________________________¶¶¶_________')
      console.log('_________¶¶___________________________¶¶¶_________')
      console.log('__________¶¶¶¶_____________________¶¶_____________')
      console.log('______________¶¶¶¶_____________¶¶¶¶¶______________')
      console.log('___________________¶¶¶¶¶¶¶¶¶¶¶¶___________________')
      console.log('\n' + '=======================================================================');
    } else {

      // Run the actual program

      for (var i = 1; i <= numberOfWeeks; i++) {

        newPopulation = (newPopulation * birthRate) + newPopulation;

        console.log('After ' + i + ' week(s), the Cherokee Hares got freaky and made ' + newPopulation.toFixed(0) + ' rabbits!');

    }

  }

  // Added to clean up the console view
  console.log('\n');

})();
