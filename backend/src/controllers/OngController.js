const connection = require('../database/connection.js');
const crypto = require('crypto');

module.exports = {
    async create(req, res){
        var {name, email, whatsApp, city, uf} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsApp,
            city,
            uf
        });
    
        return res.json({id: id});
    },

    async listAll(req, res){
        const ongs = await connection('ongs').select('*');
        
        return res.json(ongs);
    }
}