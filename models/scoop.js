const mongoose = require("mongoose")
const scoopSchema = mongoose.Schema({
    scoopFlavor: String,
    scoopQuantity: String,
    scoopColor: String,
    scoopPrice: Number
})
module.exports = mongoose.model("Scoop",scoopSchema)