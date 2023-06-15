import knex from '../../../database';

export default async function handler(req, res) {
    const data = req.body
 let event = await knex('posts').where("title", data.title)
 if (!!event.lenght){
    return res.status(500).json({message: 'Event already exists'})
 }
 let newEvent = await knex('posts').insert({
    title: data.title,
    content: data.content,
    short_description: data.short_description,
    created_by: 1
 }
 )
 return res.json({data: newEvent})
}