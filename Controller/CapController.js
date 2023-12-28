const Cap = require("../models/Cap");

module.exports = {
  store: async (req, res) => {
    const { name, registerNumber } = req.body;
    const cap = await Cap.create({ name, registerNumber });

    return res.json(cap);
  },
  index: async (req, res) => {
    const cap = await Cap.findAll();

    return res.json(cap);
  },
};
