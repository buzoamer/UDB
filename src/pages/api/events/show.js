import knex from '../../../database';

export default async function handler(req, res){
    const id = req.body;
   
    let event = await knex('posts').where("id", id)
    
    if (event.length==0){
        return res.status(500).json({message: 'Event does not exist'})
    }
    return res.status(200).json(event[0])
}