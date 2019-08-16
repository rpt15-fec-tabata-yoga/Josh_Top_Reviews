const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

const Review = mongoose.model('reviews', {
  author: String,
  body: String,
  helpful: Number,
});

let findTop3 = (callback) => {
  Repo.find({}, null, { limit: 3, sort: { helpful: -1 } }, function (err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

module.exports = {
  Review,
  findTop3
};
