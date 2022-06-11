const { Sequelize } = require("sequelize");
const database = require("../database/bd");

const Deck = database.sequelize.define("deck", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  card1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  card2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  card3: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
    freezeTableName: true,
    timestamps: false,
    createAt: false,
    updateAt: false,
}
);

const initTable = async () =>{
  await Deck.sync();
}

initTable()

module.exports = Deck;
