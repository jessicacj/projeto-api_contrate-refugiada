const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const candidatasSchema = new Schema({ 
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
        },

        nomeCompleto: {
            type: String,
            unique: true,
            required: true
            },

        contatoTelefone: {
            type: Number,  
            required: true
        },
        
        contatoEmail: {
            type: String,
            required: true
        },

        dataNascimento: {
            type: String,
            required: true
        },

        localNascimento: {
            type: String,
            required: true
        },
        profissao: {
            type: String,
            required: true,
        },
        objetivo: {
            type: String,
            required: true,
        },
        resumoProfissional: {
            type: String,
            required: true,
        }  
})

const candidatasCollection = mongoose.model('candidatas', candidatasSchema)

module.exports = candidatasCollection