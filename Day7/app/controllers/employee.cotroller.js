const db = require('../models');
const Employee = db.employee;
const Setting = db.setting;

exports.findAll = (req, res) => {
    //res.send("findAll"); //ตัวแสดงผล
    try {
        Employee.findAll({
            attributes:["id", "name", "position"],
            
            include:[{
                model:Setting,
                attributes:["theme"]
            }]
        })
            .then(employee => {
                res.send(employee);//เขียนแสดงผลแบบง่าย
                //res.json(employee);
                //res.status(200).json(employee);//บอกสเตตัส
            })
            .catch( error =>{
                console.log(error.massage);
            });
    } catch (error) {
        console.log(error);
    }
};

exports.create = (req, res) => {
    res.send("create");
};

exports.findOne = (req, res) => {
    res.send("findOne");
};

exports.update = (req, res) => {
    res.send("update");
};
exports.delete = (req, res) => {
    res.send("delete");
};