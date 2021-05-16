const Sneaker = require('../models/sneaker.model');

module.exports = {
  getAll: (req, res) => {
    Sneaker.find({})
      .sort({ price: "ascending" })
      .then((allSneakers) => {
        console.log("in all sneakers");
        console.log(allSneakers);
        res.json(allSneakers);
      })
      .catch((err) => {
        console.log("error found in getAll");
        res.status(400).json(err);
      })
  },

  create: (req, res) => {
    console.log(req.body);
    Sneaker.create(req.body)
      .then((newSneaker) => {
        console.log("in create sneaker");
        console.log(newSneaker);
        res.json(newSneaker);
      })
      .catch((err) => {
        console.log("error found in create");
        res.status(400).json(err);
      })
  },

  getOne: (req, res) => {
    console.log(req.params.id)

    Sneaker.findById(req.params.id)
      .then((oneSneaker) => {
        console.log("in get one sneaker");
        console.log(oneSneaker);
        res.json(oneSneaker);
      })
      .catch((err) => {
        console.log("error found in getOne");
        res.status(400).json(err);
      })
  },

  update: (req, res) => {
    console.log(req.params.id)

    Sneaker.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
      .then((updateSneaker) => {
        console.log("in  update sneaker");
        console.log(updateSneaker);
        res.json(updateSneaker);
      })
      .catch((err) => {
        console.log("error found in update");
        res.status(400).json(err);
      })
  },

  delete: (req, res) => {
    console.log(req.params.id)

    Sneaker.findByIdAndDelete(req.params.id)
      .then((deleteSneaker) => {
        console.log("in delete sneaker");
        console.log(deleteSneaker);
        res.json(deleteSneaker);
      })
      .catch((err) => {
        console.log("error found in delete");
        res.status(400).json(err);
      })
  },
}