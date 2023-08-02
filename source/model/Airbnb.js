const {Schema, model } = require("mongoose");

const AirbnbSchema = new Schema({
    nombre: String,
    descripcion:{
    type: String,
    require: true,
    },
    precio: Number
});

module.exports = model("Airbnb" , AirbnbSchema);