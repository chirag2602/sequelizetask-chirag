const express = require("express");
const {
	insert_user_controller,
	get_single_user_controller,
	get_all_user_controller,
	update_user_controller,
	delete_user_controller,
	login_user_controller,
	logout_user_controller,
} = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

const router = express.Router();

// User Routes
router.get('/getRequest/:name',(req,res)=>{
	res.send(`Hello`+req.params.name)
})
router.get("/get-all-users", auth, get_all_user_controller);
router.get("/get-single-user",  get_single_user_controller);
router.post("/insert-user",auth,insert_user_controller);
router.put("/update-user", auth, update_user_controller);
router.delete("/delete-user", auth, delete_user_controller);

// Authentication Routes
router.post("/login", login_user_controller);
router.get("/logout", logout_user_controller);

module.exports = router;
