const passport = require('passport');
const passportService = require('./passport');
const AuthenticationController = require('../controllers/auth_controller');
const RestaurantsController = require('../controllers/restaurants_controller');
const ReservationsController = require('../controllers/reservations_controller');
const UserController = require('../controllers/user_controller');

let requireAuth = passport.authenticate('jwt', {session: false});
let requireLogin = passport.authenticate('local', {session: false});
let router = require('express').Router();

// Auth Routes
router.route('/signup')
      .post(AuthenticationController.signup);

router.route('/login')
      .post([requireLogin, AuthenticationController.login]);

// User Routes
router.route('/users')
      .patch(UserController.updateUser);

router.route('/users/:token')
      .get(UserController.getUser);

// Restaurant Routes
router.route('/restaurants')
      .post(RestaurantsController.create);

router.route('/restaurants/search')
      .get(RestaurantsController.search);

router.route('/restaurants/index')
      .get(RestaurantsController.allRestaurants);

// Reservation Routes
router.route('/reservations')
      .post(ReservationsController.create);

router.route('/reservations/:token')
      .delete(ReservationsController.destroy);

router.route('/reservations/history/:token')
      .get(ReservationsController.fetchHistory);

module.exports = router;

