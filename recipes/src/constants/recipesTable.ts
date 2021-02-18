export const COLUMN_NAMES = {
  ID: { name: "Id", key: "id" },
  RECIPE_NAME: { name: "Name", key: "name" },
  RECIPE_SOURCE: { name: "Source", key: "source" },
  NO_INGREDIENTS: { name: "No. of Ingredients", key: "totalIngredients" },
  INGREDIENTS: { name: "Ingredients", key: "ingredients" },
  PREPARATION_INSTRUCTIONS: {
    name: "Preparation Instructions",
    key: "instructions",
  },
  PREPARATION_TIME: { name: "Preparation Time", key: "preparationTime" },
  DISPLAY: { name: "Display", key: "display" },
  REMOVE: { name: "Remove", key: "remove" },
} as const;
