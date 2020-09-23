// const meals = new Meals();

const mealSearch = document.getElementById('meal-search');
const searchBtn = document.getElementById('search-btn');
const randomSearchBtn = document.getElementById('random-search-btn');
const resultHeading = document.getElementById('result-heading');
const mealsResults = document.getElementById('meals-results');
const singleMealResult = document.getElementById('single-meal');

function getMeals(e) {
  e.preventDefault();
  const term = mealSearch.value;
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}
    `)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.meals === null) {
          resultHeading.innerHTML = `<h3 class="meals-results">There are no results for'${term}'</h3>`
          mealsResults.innerHTML = '';
        } else {
          resultHeading.innerHTML = `<h3 class="meals-results">Search results for '${term}':</h3>`;
          mealsResults.innerHTML = data.meals.map(meal =>
            `
            <div class="meal-img-box">
              <img src="${meal.strMealThumb}" class='meal-img'>
              <div class="meal-info" data-mealID='${meal.idMeal}'>
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
            `
          ).join('')
        }
      });
    mealSearch.value = '';
  } else {
    resultHeading.innerHTML = `<h3 class="meals-results">Please enter search term</h3>`;
  }
};

function showSingleMeal(e) {
  // const mealID;

  if (e.target.classList.contains('meal-img') || e.target.classList.contains('meal-info')) {
    console.log('ok');
  } else {
    console.log('no');
  }
}

searchBtn.addEventListener('click', getMeals);
mealsResults.addEventListener('click', showSingleMeal);

