import Note from "@/model/Note";

const mongoose = require("mongoose")

async function handler(req, res){
    if(req.method != 'POST'){
        return res.status(405).end()
    }

    try {
        const {title, content} = req.body
        await mongoose.connect('mongodb+srv://dmls:07081998@cluster0.je5meob.mongodb.net/nextJSCRUD', {
            useNewUrlParser: true,
        }).then(() => console.log('DB CONNECTED'))
        let newNote = new Note({title, content})
        await newNote.save()
        console.log(newNote)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Error"})        
    } finally{
        mongoose.connection.close()
    }
}

export default handler