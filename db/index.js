const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aboutGame', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {console.log('connected to mongoDB');});


const AboutGameSchema = new mongoose.Schema({
  updateDate: String,
  //Note4Later: hardcode version and System Req
  updateBody: String,
  updateComments: Number,
  aboutBody: String,
  features: String
});

const AboutGame = mongoose.model('AboutGame', AboutGameSchema);


// let findTopThreeReviews = (callback) => {
//   AboutGame.find({}, null, { limit: 3, sort: { helpful: -1 } }, function (err, data) {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// }

module.exports = {
  AboutGame
  // findTopThreeReviews
};
