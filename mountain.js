(function(){

  var mountainHeight = ['29,029 ft - Mt Everest', '28,169 ft - Kangchenjunga', '26,660 ft - Nanga Parbat', '27,825 ft - Makalu', '26,906 ft - Cho Oyu', '28,251 ft - K2', '26,795 ft - Dhaulagiri I', '26,759 ft - Manaslu', '27,940 ft - Lhotse','26,545 ft - Annapurna I'];

  mountainHeight.sort();
  mountainHeight.reverse();

  console.log('\n' + mountainHeight[0] + ' is the tallest mountain in our array. Here are the rest, in proper height order: ' + '\n');

  for (var i = 1; i < mountainHeight.length; i++) {
    console.log(mountainHeight[i]);
  }

  console.log('\n');
})();
