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
                <h3 class="meal-info-text">${meal.strMeal}</h3>
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

function getSingleMeal(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}
  `)
    .then(res => res.json())
    .then(data => {
      const mealDetails = data.meals[0];
      console.log(mealDetails);
      showSingleMealDetails(mealDetails);
    })
}

function showSingleMealDetails(mealDetails) {
  const ingredients = [];

  // Difficult!
  for (let i = 1; i <= 20; i++) {
    if (mealDetails[`strIngredient${i}`]) {
      ingredients.push(`${mealDetails[`strMeasure${i}`]} - ${mealDetails[`strIngredient${i}`]}`);
    } else {
      break;
    }
  }
  console.log(ingredients);

  // if (mealDetails[strArea]) {

  // } else {

  // }

  singleMealResult.innerHTML = `
  <h2 class="center mtb">${mealDetails.strMeal}</h2>
  <img src="${mealDetails.strMealThumb}" class="img-center">
  <div>
  ${mealDetails.strArea ? `<h4 class="center mtb">${mealDetails.strArea}</h4>` : ''}
  ${mealDetails.strCategory ? `<h4 class="center mtb">${mealDetails.strCategory}</h4>` : ''}
  </div>
  <p class="mtb">${mealDetails.strInstructions}</p>
  <h3 class="mtb center">Ingredients:</h3>
  <ul>
    ${ingredients.map(ing =>
    `<li>${ing}</li>`)
      .join('')
    }
  </ul>
  `
}

function showSingleMeal(e) {
  const mealInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  })
  // console.log(mealInfo);

  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealID');
    getSingleMeal(mealID);
  }
}

// Event listeners
searchBtn.addEventListener('click', getMeals);
mealsResults.addEventListener('click', showSingleMeal);

