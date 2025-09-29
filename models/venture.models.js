const mongoose = require("mongoose")

const ventureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    description: [{
        type: String
    }],
    foundedYear: String,
    service: [{
        type: String,
    }],
    customerSupport: String,
    Social: [{
        name: {
            type: String,
        },
        url: {
            type: String,
        }
    }],
    secondaryImg: String,
    h1:String,
    h2:String,
    contact: String,
})

const Venture = mongoose.model("Venture", ventureSchema)

module.exports = Venture;