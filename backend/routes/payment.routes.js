import { Router } from "express";
import { allPayments, buySubscription, cancelSubscription, verifySubscription } from "../controllers/payment.controller.js";
import { authorisedRoles, isLoggedIn } from "../middleware/auth.middleware.js";

const router = Router();

// Mua đăng ký (Subscription)
router.route('/subscribe')
    .post(isLoggedIn, buySubscription);

// Xác minh đăng ký
router.route('/verify')
    .post(isLoggedIn, verifySubscription);

// Hủy đăng ký
router.route('/unsubscribe')
    .post(isLoggedIn, cancelSubscription);

// Lấy tất cả các khoản thanh toán (dành cho ADMIN)
router.route('/')
    .get(isLoggedIn, authorisedRoles("ADMIN"), allPayments);

export default router;
