/**
 * @module router/auth
 * @requires module:controller/auth
 * @requires module:middleware/checkpoint
 */
const router = require("express").Router();
const auth = require("../controllers/auth.controller");
const checkpoint = require("../middlewares/checkpoint");

//#region User
/**
 * Sign-up user
 * @name post/signup
 * @example {base_url}/auth/signup
 */
router.post("/signup", checkpoint.isEmailExist, auth.signupController);

/**
 * activate and register user
 * @name post/activate
 * @example {base_url}/auth/activate
 */
router.post(
  "/activate",
  checkpoint.isEmailExist,
  auth.activateAccountController
);

/**
 * Sign-in user
 * @name post/signin
 * @example {base_url}/auth/signin
 */
router.post("/signin", auth.signinController);
//#endregion

//#region Authority
/**
 * SCreate new authority profile [Admin]
 * @name post/pro-new
 * @example {base_url}/auth/pro/new
 */
router.post(
  "/pro/new",
  checkpoint.isSignedIn,
  checkpoint.isAuthenticated,
  checkpoint.isAdmin,
  auth.createAuthorityProfileController
);

/**
 * Sign-in admin/authority [Admin|Authority]
 * @name post/pro-signin
 * @example {base_url}/auth/pro/signin
 */
router.post("/pro/signin", auth.signinAuthorityController);
//#endregion

/**
 * reset password [Admin|Authority]
 * @name patch/reset-password
 * @example {base_url}/auth/reset-password
 */
router.patch("/pro/reset-password", auth.resetPasswordController);

/**
 * refresh token
 * @name post/refresh
 * @example {base_url}/auth/refresh
 */
router.post("/refresh", auth.refreshTokenController);

module.exports = router;
