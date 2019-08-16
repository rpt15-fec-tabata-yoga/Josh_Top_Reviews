const Review = require('./index.js');
const faker = require('faker');

const seedDataMaker = (reviewCount) => {
  var reviewsArray = [];
  for (var i = 0; i < reviewCount; ++i) {
    var newReview = {};
    newReview.author = faker.internet.userName();
    newReview.body = faker.lorem.paragraph();
    newReview.helpful = faker.random.number();
    reviewsArray.push(newReview);
  }

  if (reviewsArray.length >= reviewCount) {
    Review.collection.insertMany(reviewsArray, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Seeded ${reviewCount} reviews`);
      }
    });
  }
}
//makes 25 example data reviews
seedDataMaker(25);
