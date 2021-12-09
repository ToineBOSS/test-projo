const mongoose = require('mongoose');

const AnneesSchema = new mongoose.Schema({
    NbAnnee: {
        type: String,
        required: true,
    },
    NbTotEntrees: {
        type: Number,
        required:true,
    },
});
 
const Année = mongoose.model("entrees", AnneesSchema)
module.exports = Année;