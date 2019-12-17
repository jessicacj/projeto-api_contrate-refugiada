const candidatasCollection = require('../model/candidatasSchema')


// C - Adiciona o currículo das candidatas ao banco de dados

const adicionarCandidatas = (request, response) => {
    const infoDoBody = request.body
    const evento = new candidatasCollection(infoDoBody)

    evento.save((error, candidatas) => {
    
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(201).send(candidatas)
        }    
    })
}

// R - Lista todos os currículos cadastrados no banco de dados
const listarCandidatas = (request, response) => {
    candidatasCollection.find((error, candidatas) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send(candidatas)
        }
    })
}

// R - Busca os currículos pelo ID 
const buscarCandidatasId = (request, response) => {
    const idParams = request.params.id
    const infoDoBody = request.body
    candidatasCollection.findById(idParams, infoDoBody,(error, candidatas) => {
    if(error){
        return response.status(500).send(error)
    } else {
        return response.status(200).send(candidatas)
    }
})
}

// U - Busca os currículos pelo ID e permite alterações

const alterarCandidatas = (request, response) => {
    const idParams = request.params.id
    const infoDoBody = request.body
    const options = { new: true }
    
    candidatasCollection.findByIdAndUpdate(idParams, infoDoBody, options, (error, candidatas) => {
        if(error) {
            return response.status(500).send(error)
        } 
        
        if(candidatas) {
            return response.status(200).send(candidatas)

        } 
        return response.status(404).send('Currículo da candidata não encontrado!')
        }
)} 

// D - Busca currículos pelo ID e permite a exclusão
const deletarCandidatas = (request, response) => {
    const idParams = request.params.id

    candidatasCollection.findByIdAndDelete(idParams, (error) => {
        if(error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send('Currículo da candidata foi deletado!')
        }
    })
}


module.exports = {
    adicionarCandidatas,
    listarCandidatas,
    buscarCandidatasId,
    alterarCandidatas,
    deletarCandidatas
}