const { json } = require('stream/consumers');
var {DB} =require('../pattern/DB');
const db=DB();

const index = async (req,res)=>{
    const deps=await db.collection('departements').find({}).toArray();
    res.send(deps)
}

const store = async(req, res) =>{
    try {
        const result = await db.collection('departements').insertOne({
            "_id": "652d22e4dca01e34f9297a88",
            "depId": 8,
            "name": "Donga"
        });
        res.status(201).json({ message: "Document inséré avec succès", insertedId: result.insertedId });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'insertion du document", error: error.message });
    }
}

module.exports = {index,store}