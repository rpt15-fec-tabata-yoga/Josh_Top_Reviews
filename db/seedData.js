const AboutGame = require('./index.js');
const faker = require('faker');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/aboutGame', { useNewUrlParser: true });

console.log(AboutGame);

const seedDataMaker = (count) => {
  var array = [];
  for (var i = 0; i < count; ++i) {
    var newGameData = {};
    newGameData.updateDate = faker.date.past();
    newGameData.updateBody = faker.lorem.paragraph();
    newGameData.updateComments = faker.random.number();
    newGameData.aboutBody = faker.lorem.paragraph();
    newGameData.features = faker.lorem.paragraphs();
    array.push(newGameData);
  }

  if (array.length >= count) {
    let newDoc = new AboutGame(array);
    newDoc.save();
  }
}
//makes 100 example data reviews
seedDataMaker(100);
