class Meals {
  constructor(term) {
    this.term = term;
  }

  getMeals(term) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}
      `)
      .then(res => res.json())
      .then(data => console.log(data))
  }


}