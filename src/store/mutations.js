export function setLoadingStatus (state, newLoadingStatus) {
  state.loadingStatus = newLoadingStatus
}

export function setSearchedMeals (state, meals) {
  state.searchedMeals = meals
}

export function setMealsByLetter (state, meals) {
  state.mealsByLetter = meals
}

export function setMealByIngredient (state, meals) {
  state.mealsByIngredient = meals
}