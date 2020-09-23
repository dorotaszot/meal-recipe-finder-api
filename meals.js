class Meals {
  constructor(term) {
    this.term = term;
  }

  getMeals(term) {
    const resultHeading = document.getElementById('result-heading');
    const mealsResults = document.getElementById('meals-results');
    const singleMealResult = document.getElementById('single-meal');

    if (term.trim()) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}
      `)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.meals === null) {
            resultHeading.innerHTML = `<h3>There are no results for'${term}'</h3>`
          } else {
            resultHeading.innerHTML = `<h3>Search results for '${term}':</h3>`;
            mealsResults.innerHTML = data.meals.map(meal =>
              `<div class="meal-img">
              <img src="${meal.strMealThumb}">
              <p>${meal.strMeal}</p>
              </div>
              `
            ).join('')
          }
        });
    } else {
      resultHeading.innerHTML = `<h3>Please enter search term</h3>`;
    }

    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}
    //   `)
    //   .then(res => res.json())
    //   .then(data => {
    //     resultHeading.innerHTML = `
    //     <h3>Search results for '${term}':</h3>`;
    //     console.log(data);
    //     // data.meals.strMealThumb
    //     mealsResults.innerHTML = data.meals.map(meal =>
    //       `<div class="meal-img">
    //         <img src="${meal.strMealThumb}">
    //         <p>${meal.strMeal}</p>
    //       </div>
    //       `
    //     )
    //       .join('');
    //   })
  }
}