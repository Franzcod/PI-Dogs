const { Router } = require("express");

const { Dog, Temperament } = require("../db");
// const services = require("../services/services_DB");
const services = require("../services/services_API");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

//  GET /________________________________________________________________

router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;

    let geDataForApi = await services.getAllDataAPI();
    let getDataFromDB = await Dog.findAll({
      include: Temperament,
    });
    // FORMATEO PARA Q DESDE API Y DESDE DB LLEGUEN AL FRONT IGUALES
    getDataFromDB = getDataFromDB.map((el) => {
      return {
        id: el.id,
        name: el.name,
        height: el.height,
        weight: el.weight,
        life_span: el.life_span,
        image: el.image,
        userCreate: true,
        temperaments: el.Temperaments.map((i) => {
          return i.name;
        }).join(", "),
      };
    });
    // resp de API y de DB juntas
    let allData = getDataFromDB.concat(geDataForApi);

    if (name) {
      console.log(
        " Buscando coincidencias con la palabra: ".black.bgBlue +
          name.red.bgBlue +
          " "
      );
      let resp = allData.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      ); // ==> trae todos los q tengan la palabra buscada
      // console.log(resp);
      if (resp.length === 0) {
        return res.status(404).send(`${name} > No se encuentra Guardado`);
      }
      return res.json(resp);
    } else {
      res.json(allData);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    if (typeof id === "string" && id.length > 6) {
      let getDataFromDB = await Dog.findByPk(id, {
        include: Temperament,
      });
      console.log(getDataFromDB.name);
      res.json({
        id: getDataFromDB.id,
        name: getDataFromDB.name,
        height: getDataFromDB.height,
        weight: getDataFromDB.weight,
        life_span: getDataFromDB.life_span,
        image: getDataFromDB.image,
        userCreate: true,
        temperaments: getDataFromDB.Temperaments.map((i) => {
          return i.name;
        }).join(", "),
      });
    } else {
      let geDataForApi = await services.getAllDataAPI();
      let resp = geDataForApi.find((el) => el.id.toString() === id.toString());
      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
});

//  POST /________________________________________________________________

router.post("/", async (req, res, next) => {
  const { name, height, weight, life_span, image, temperaments } = req.body;
  try {
    let dogCreated = await Dog.create({
      name,
      height,
      weight,
      life_span,
      image,
    });
    if (temperaments.length) {
      temperaments.map(async (tem) => {
        try {
          let temper = await Temperament.findOne({ where: { name: tem } });
          // console.log(temper.dataValues.name);
          dogCreated.addTemperament(temper);
          // res.send(dogCreated);
          console.log("perro cargado");
        } catch (err) {
          console.log(err);
        }
      });
    }
    res.send("Perro cargado");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
// {
//   "name": "Francisc",
//   "height":"45",
//   "weight": "66",
//   "life_span":"6654",
//   "image":"url"
//   "temperament": ["Capo", "crack"]
// }
