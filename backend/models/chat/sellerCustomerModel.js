const { Schema, model } = require("mongoose");

const sellerCustomerSchema = new Schema({
  myId: {
    type: String,
    required: true,
  },
  myFriends: {
    type: Array,
    required: true,
  },
});

module.exports = model("seller_customers", sellerCustomerSchema);
