// class UI {
//   constructor() {
//     const resultHeading = document.getElementById('result-heading');
//     const mealsResults = document.getElementById('meals-results');
//     const singleMealResult = document.getElementById('single-meal');
//   }

//   paint() {
//     resultHeading.innerHTML = `
//         <h3>Search results for '${term}':</h3>`;
//     console.log(data);
//     // data.meals.strMealThumb
//     mealsResults.innerHTML = data.meals.map(meal =>
//       `<div class="meal-img">
//             <img src="${meal.strMealThumb}">
//             <p>${meal.strMeal}</p>
//           </div>
//           `
//     )
//       .join('');
//   }
// }