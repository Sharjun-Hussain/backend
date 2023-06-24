const express = require("express");
const {isAuthenticatedAdmin} = require("../Authentication/Authenticatior");
const { registerAdmin, AdminLogin, AdminLogOut } =  require("../Controllers/AdminController") ;
const {FetchPendingBookings, AcceptsPendingBooking, DeclinePendingBookings, FetchAcceptedBookings, FetchClosedBookings, MakePendingBookings, RequestBooking} = require('../Controllers/AdminBookingController');
const { ListHallAvailablity, ListAvailableHall, AddHall, ListAllHall } = require("../Controllers/AdminHallController");

const router = express.Router();
router.route('/register').post(isAuthenticatedAdmin,registerAdmin);
router.route('/login').post(AdminLogin); 
router.route('/logout').get(isAuthenticatedAdmin,AdminLogOut); 

// router.route('/dashboard').get(isAuthenticatedAdmin,adminDashboard); 
// router.route('/setcookie').get(Cookie);

// Dashboard  ===========================================================================

//Halls
router.route('/api/halls').get(ListAllHall);
router.route('/api/halls/availablity').get(ListAvailableHall);
router.route('/api/halls/add').post(AddHall);



//Rutes Bookings

router.route('/api/booking').post(RequestBooking);
router.route('/api/pendingbookings').get(FetchPendingBookings);
router.route('/api/acceptedbookings').get(FetchAcceptedBookings);
router.route('/api/closedbookings').get(FetchClosedBookings);


router.route('/api/pendingbookings/:id/accept').get(AcceptsPendingBooking);
router.route('/api/pendingbookings/:id/decline').get(DeclinePendingBookings);
router.route('/api/pendingbookings/:id/pending').get(MakePendingBookings);


module.exports=router;


