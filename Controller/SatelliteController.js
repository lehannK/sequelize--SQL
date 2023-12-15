const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");

module.exports = {
  async store(req, res) {
    const { planetId } = req.params;
    const { name, serialNumber } = req.body;

    const planet = await Planet.findByPk(planetId);

    if (!planet) {
      res.send("Esse planeta não existe");
    } else {
      const satellite = await Satellite.create({
        name,
        serialNumber,
        planetId,
      });
      res.send("Satélite cadastrado com sucesso");
      return res.json(satellite);
    }
  },
  async index(req, res) {
    const { planetId } = await req.params;

    if (!planetId) {
      res.send("Esse planeta não existe");
    }
    const planet = await Planet.findByPk(planetId, {
      include: Satellite,
    });
    return res.json(planet);
  },
};
