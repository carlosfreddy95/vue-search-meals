import axiosClient from '../axiosClient';

export function searchMeals ({ commit }, keyword) {
  commit('setLoadingStatus', true)
  axiosClient.get(`search.php?s=${ keyword }`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
      commit('setLoadingStatus', false)
    })
    .catch(error => console.log(error))
}

export function searchMealsByLetter ({ commit }, letter) {
  commit('setLoadingStatus', true)
  axiosClient.get(`search.php?f=${ letter }`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
      commit('setLoadingStatus', false)
    })
    .catch(error => console.log(error))
}

export function searchMealsByIngredient ({ commit }, ingredient) {
  commit('setLoadingStatus', true)
  axiosClient.get(`filter.php?i=${ ingredient }`)
    .then(({ data }) => {
      commit('setMealByIngredient', data.meals)
      commit('setLoadingStatus', false)
    })
    .catch(error => console.log(error))
}