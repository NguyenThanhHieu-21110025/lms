export const allPayments = async (req, res, next) => {
    try {
      // Logic lấy tất cả thanh toán
    } catch (err) {
      next(err);
    }
  };
  
  export const buySubscription = async (req, res, next) => {
    try {
      // Logic mua đăng ký mà không sử dụng Stripe
    } catch (err) {
      next(err);
    }
  };
  
  export const verifySubscription = async (req, res, next) => {
    try {
      // Logic xác minh đăng ký mà không sử dụng Stripe
    } catch (err) {
      next(err);
    }
  };
  
  export const cancelSubscription = async (req, res, next) => {
    try {
      // Logic hủy đăng ký mà không sử dụng Stripe
    } catch (err) {
      next(err);
    }
  };
  