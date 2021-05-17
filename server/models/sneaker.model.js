const mongoose = require('mongoose');

const SneakerSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [ true, "Brand is required" ],
    minlength: [ 3, "Brand must be at least three characters long" ],
  },
  name: {
    type: String,
    required: [ true, "Name is required" ],
  },
  colorway: {
    type: String,
    required: [ true, "Colorway is required" ],
  },
  releaseDate: {
    type: Date,
    required: [ true, "Brand is required" ],
  },
  size: {
    type: Number,
    required: [ true, "Size is required" ],
  },
  condition: {
    type: String,
    required: [ true, "Condition is required" ],
    minlength: [ 3, "Condition must be at least three characters long" ],
    enum: [ "Deadstock", "Gently Worn", "Used", "Very Used", "Destroyed" ]
  },
  price: {
    type: Number,
    required: [ true, "Price is required" ],
    min: [ 1, "Price must be greater than $0."]
  },
  img: {
    type: String,
    required: [ true, "Image is required" ],
    minlength: [ 15, "Image must be at least 15 characters long" ],
  },
}, { timestamps: true });

module.exports = mongoose.model("Sneaker", SneakerSchema);