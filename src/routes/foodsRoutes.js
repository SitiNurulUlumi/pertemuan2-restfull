const foodsRoutes = require("express").Router();
const foodsControllers = require ("../controllers/foodsControllers");
const foods = require("../models/foods");


foodsRoutes.get("/", foodsControllers.getAllFoods);
foodsRoutes.post("/", foodsControllers.postFoods);
foodsRoutes.get("/:id", foodsControllers.getDataById );
foodsRoutes.put("/:id", foodsControllers.putDataById);
foodsRoutes.delete("/:id", foodsControllers.DeleteFoods);

module.exports = foodsRoutes;
