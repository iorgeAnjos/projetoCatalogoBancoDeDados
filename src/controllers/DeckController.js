const Deck = require('../models/deck');
const Card = require('../models/deck');
let message = '';

const getAll = async (req, res) =>{
    try{
        const cards = await Card.findAll();
        res.render('index',{
            cards,
            cardsPut:  null,
            cardsDel: null,
            message,
        })
    }catch(err){
        res.status(500).send({err: err.message});
    }
}
const getById = async (req, res) => {
    try {
      const deck = await Deck.findByPk(req.params.id);
      res.render("detalhes", {
        deck,
      });
    } catch (err) {
      res.status(500).send({ err: err.message });
    }
  };
  
  
  const criar = (req,res ) => {
      try{
          res.render("criar", {message});
      }catch(err){
          res.status(500).send({err: err.message});
      };
  };
  const criacao  = async (req,res) =>{
      try{
          const deck = req.body;
          if(
              !deck.nome ||
              !deck.descricao ||
              !deck.img ||
              !deck.card1 ||
              !deck.card2 ||
              !deck.card3 
          ){
              message = "Preencha todos os campos para cadastro!"
              type = "danger";
              return res.redirect("/criar");
          }
          await Deck.create(deck);
  
          res.redirect('/')
      }catch(err){
          res.status(500).send({err: err.message});
      };
  };
  
  
  const editar1 = async (req,res) =>{
      const deck = await Deck.findByPk(req.params.id);
   
      if(!deck){
          res.render('editar', {
              message: "Filme não foi encontrado!"
          })
      }
      res.render('editar',{
          deck,
          message:''
      })
  
    
  
  }
  
    
    const editar = async (req,res) => {
        try{
            const deck = await Deck.findByPk(req.params.id);
            const {nome, descricao, img, card1, card2, card3} = req.body;
  
            deck.nome = nome;
            deck.descricao = descricao;
            deck.img = img;
            deck.card1 = card1;
            deck.card2 = card2;
            deck.card3 = card3;
  
            const deckEditado = await deck.save();
            
            res.redirect('/')
        }catch(err){
          res.status(500).send({err: err.message});
      };
  }
  
  
  const deletar = async (req,res)=>{
      try{
          await Deck.destroy({where: {id: req.params.id}});
          message = 'deck removido com sucesso'
          res.redirect('/')
      }catch(err){
          res.status(500).send({err: err.message});
      };
  }

  
  module.exports = {
    getAll,
    getById,
    criar,
    criacao,
    editar1,
    editar,
    deletar
  };
  
