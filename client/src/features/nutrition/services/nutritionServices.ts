import { baseGet, basePost } from "../../../services/baseServices";
import { AddFoodIntakeType, FoodDataType } from "../types/NutritionTypes";

async function getUserWeightStatus() {
  return await baseGet(
    "/api/user-weight/",
    "",
    "Error! Can't fetch User Weight Data!"
  );
}

async function getNutritionsDaysList(queryParams: string = "") {
  return await baseGet(
    "/api/nutritions-list/",
    queryParams,
    "Error! Can't fetch nutrition Days List."
  );
}

async function getFoodData() {
  return await baseGet("/api/food-data/", "", "Can't get Food Data");
}

async function postAddFoodIntake(nutritionData: AddFoodIntakeType) {
  await basePost(
    "/api/nutritions/",
    nutritionData,
    "Can't Create Nutrition Date Note"
  );
}

async function postAddFoodDetails(foodData: FoodDataType) {
  return await basePost("/api/food-data/", foodData, "Can't Create Food");
}

export {
  getFoodData,
  getNutritionsDaysList,
  postAddFoodIntake,
  getUserWeightStatus,
  postAddFoodDetails,
};