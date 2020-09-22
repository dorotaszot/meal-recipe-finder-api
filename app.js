const meals = new Meals();

const mealSearch = document.getElementById('meal-search');
const searchBtn = document.getElementById('search-btn');
const randomSearchBtn = document.getElementById('random-search-btn');
const resultHeading = document.getElementById('result-heading');
const mealsReults = document.getElementById('meals');
const singleMealResult = document.getElementById('single-meal');



function getMeals(e) {
  e.preventDefault();
  const term = mealSearch.value;
  meals.getMeals(term);


};

searchBtn.addEventListener('click', getMeals);