import knex from '../../../database';

export default async function handler(req, res) {
    const {id, title, short_description, content} = req.body
 let event = await knex('posts').where("id", id)
if (event.length == 0){
    return res.status(500).json({message: 'Event does not exits'})
 }
   let updatedEvent = await knex('posts').where("id", id).update({ 
   title,
   content,
   short_description,
   created_by: 1
 }
)
return res.status(200).json(updatedEvent)
}