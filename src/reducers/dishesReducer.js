import { types } from '../types/types';

const initialState = JSON.parse(localStorage.getItem('recipes')) || {
	recipes: [],
	vegan: [],
	nonVegan: [],
};

let newRecipesArray;

export const dishesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.add:
			newRecipesArray = [...state.recipes, action.payload];
			state = {
				recipes: newRecipesArray,
				vegan: newRecipesArray.filter(
					recipe => recipe.vegan.toString() === 'true'
				),
				nonVegan: newRecipesArray.filter(
					recipe => recipe.vegan.toString() === 'false'
				),
			};

			localStorage.setItem('recipes', JSON.stringify(state));
			return state;
		case types.delete:
			newRecipesArray = state.recipes.filter(
				recipe => recipe.id !== action.payload
			);
			state = {
				recipes: newRecipesArray,
				vegan: newRecipesArray.filter(
					recipe => recipe.vegan.toString() === 'true'
				),
				nonVegan: newRecipesArray.filter(
					recipe => recipe.vegan.toString() === 'false'
				),
			};
			localStorage.setItem('recipes', JSON.stringify(state));
			return state;

		default:
			return state;
	}
};