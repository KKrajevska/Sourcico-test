import { Ingredients } from "../../types/recipes.types";

export const parseIngredients = (ingredients: Ingredients): string => {
  return Object.entries(ingredients)
    .filter(([key, value]) => value !== 0)
    .map(([k, v]) => v + k)
    .join(";");
};

export const parseTime = (hours: string, minutes: string): string => {
  return `${hours}h ${minutes}m`;
};

export const totalIngredients = (ingredients: Ingredients): number => {
  let sum = 0;
  Object.values(ingredients).forEach((value) => {
    if (value) {
      sum += value;
    }
  });
  return sum;
};
