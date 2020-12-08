// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    let onlyDirectors = array.map(function(movie){
      return movie.director;
    });
    return onlyDirectors;
  }
  
  console.log(getAllDirectors(movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    return array.filter(function (movie){
     return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    }).length 
   }
   

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let average = (array.reduce(function(acc, current){
      return acc + (current.rate||0);}, 0)) / array.length;
    return array.length === 0 ? 0 : Math.round(average*100)/100;
  }
console.log(ratesAverage([{ rate: 6 }, { rate: '' }, {}]))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    let filtered = array.filter(function (movie){
     return movie.genre.includes("Drama");
    })
   return ratesAverage(filtered);
   }

console.log(dramaMoviesRate(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const movieCopy = JSON.parse(JSON.stringify(array));
    let sortedYears = movieCopy.sort(function (a, b){
       return (a.year - b.year) || (a.title > b.title);
     });
     return sortedYears;
   }
   
   console.log(orderByYear(movies))
   
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    const movieCopy = JSON.parse(JSON.stringify(array));
    let mappedTitles = movieCopy.map(function (item){
      return item.title;
    })
    
    return mappedTitles.sort().filter(function (item, index){ 
    return index < 20});
  }
  
  console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
