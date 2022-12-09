import express from "express";
import {
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  resetPassword,
  updatePassword,
  updateProfile,
  verify,
  addPost,
  removePost,
  updatePost
} from "../controllers/User.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/verify").post(isAuthenticated, verify);

router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/me").get(isAuthenticated, getMyProfile);

router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);

router.route("/newpost").post(isAuthenticated, addPost);

router
  .route("/post/:postId")
  .get(isAuthenticated, updatePost)
  .delete(isAuthenticated, removePost);

export default router;
