const mongoose = require("mongoose")
const scoopSchema = mongoose.Schema({
    scoopFlavor: String,
    scoopSize: String,
    scoopColor: String,
    scoopPrice: Number
})
module.exports = mongoose.model("Scoop",scoopSchema)