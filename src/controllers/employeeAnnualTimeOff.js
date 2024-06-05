const db = require("../../models");
require("dotenv").config();
const message = require("../../constants/messages.json");
const {getComparator} = require("../helper/utils");
const { Where } = require("sequelize/lib/utils");



exports.showAll = async (req, res) => {
  const data = await db.employeeAnnualTimeOff.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  if (!data) {
    res.send("No results found");
  }
  res.send(data);
};

exports.showOne = async (req, res) => {
  const empId = req.params.empid;
  const data = await db.employeeAnnualTimeOff.findAll({where: {empId : empId}});
  if (data === null) {
    res.status(400).send("Not found!");
  } else {
    res.status(200).send(data);
  }
};

exports.createRecord = async (req, res) => {
  try {
    const data = await db.employeeAnnualTimeOff.create(req.body);
    res.status(201).json({data});
  } catch (err) {
    console.log(err);
    res.send({message : message.failed});
  }
};

exports.updateRecord = async (req, res) => {
  const updatedData = req.body;
  try {
    const data = await db.employeeAnnualTimeOff.findByPk(updatedData.id);
    data.set(updatedData);
    await data.save();
    res.status(200).json({ message: data });
  } catch (err) {
    console.log(err);
    res.status(400).json({message: message.failed});
  }
};

exports.deleteRecord = async (req, res) => {
  const id = req.params.id;
  try {
    const count = await db.employeeAnnualTimeOff.destroy({
      where: { id: id },
    });
    if (count == 1) {
      res.send({
        message: message.deleted,
      });
    } else {
      res.send({
        message: message.failed,
      });
    }
  } catch (err) {
    res.send({
      message: err.message || message.failed,
    });
  }
};
