const mongoose = require("mongoose");
const Review = require("../models/Review.model");
require("../db");

const reviews = [
  {
    title: "Review 1",
    score: 3,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    creator: "618d682ccd204561a544ffcd",
  },
  {
    title: "Review 2",
    score: 5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    creator: "618d682ccd204561a544ffcd",
  },
  {
    title: "Review 3",
    score: 1,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    creator: "618d682ccd204561a544ffcd",
  },
  {
    title: "Review 4",
    score: 3,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    creator: "618d682ccd204561a544ffcd",
  },
  {
    title: "Review 5",
    score: 2,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    creator: "618d682ccd204561a544ffcd",
  },
];

Review.create(reviews)
  .then((seededReviews) => {
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("You ran into an error while creating the documents", err);
  });
