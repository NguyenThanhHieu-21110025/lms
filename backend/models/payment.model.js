import { model, Schema } from 'mongoose';

const paymentSchema = new Schema({
    stripe_payment_id: {
        type: String,
        required: true
    },
    stripe_subscription_id: {
        type: String,
        required: true
    },
    stripe_signature: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Payment = model("Payments", paymentSchema);

export default Payment;