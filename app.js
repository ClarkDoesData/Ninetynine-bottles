function beerSong() {
  var beerCount = 99;
  var beerLessOne;
  while (beerCount > 0) {
    beerLessOne = beerCount - 1;
    if (beerLessOne === 0) {
      beerLessOne = "no more"
    }
    if (beerCount === 2) {
      console.log(`${beerCount} bottles of beer on the wall, ${beerCount} bottles of beer. Take one down and pass it around, ${beerLessOne} bottle of beer on the wall.`);
    } else if (beerCount === 1) {
      console.log(`${beerCount} bottle of beer on the wall, ${beerCount} bottle of beer. Take one down and pass it around, ${beerLessOne} bottles of beer on the wall.`);
    } else {
      console.log(`${beerCount} bottles of beer on the wall, ${beerCount} bottles of beer. Take one down and pass it around, ${beerLessOne} bottles of beer on the wall.`);
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
    beerCount--
  } 
}

beerSong();

