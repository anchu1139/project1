const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
//const CONFIG = require('../../config');//
const db = {};

let sequelize = new Sequelize(
  'newpro-vib',
  'root',
  '12345',
  {
    host: 'localhost',
    dialect:'mysql',
   
  }
);
fs.readdirSync(__dirname)
  .filter(file => (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  ))
  .forEach((file) => {
    // const model = sequelize.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// relationships for models

//= ==============================
// Define all relationships here below
//= ==============================
// db.User.hasMany(db.Address);
// db.Address.belongsTo(db.User);

// db.Syllabus.belongsTo(db.Course, { foreignKey: 'id', as: 'course' });

module.exports = db;
