// class Meals {
//   constructor(term) {
//     this.term = term;
//   }

//   getMeals(term) {
//     const resultHeading = document.getElementById('result-heading');
//     const mealsResults = document.getElementById('meals-results');
//     const singleMealResult = document.getElementById('single-meal');
//     const mealSearch = document.getElementById('meal-search');

//     if (term.trim()) {
//       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}
//       `)
//         .then(res => res.json())
//         .then(data => {
//           // console.log(data);
//           if (data.meals === null) {
//             resultHeading.innerHTML = `<h3 class="meals-results">There are no results for'${term}'</h3>`
//             mealsResults.innerHTML = '';
//           } else {
//             resultHeading.innerHTML = `<h3 class="meals-results">Search results for '${term}':</h3>`;
//             mealsResults.innerHTML = data.meals.map(meal =>
//               `
//               <div class="meal-img-box">
//                 <img src="${meal.strMealThumb}" class='meal-img'>
//                 <div class="meal-info" id='${meal.idMeal}'>
//                   <h3>${meal.strMeal}</h3>
//                 </div>
//               </div>
//               `
//             ).join('')
//           }
//         });
//       mealSearch.value = '';
//     } else {
//       resultHeading.innerHTML = `<h3 class="meals-results">Please enter search term</h3>`;
//     }
//   }
// }