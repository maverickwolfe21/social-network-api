//create router instance
const router = require("express").Router();

//import user and thought routes
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

//define endpoints for user and thought routes
router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);

//export router
module.exports = router;
