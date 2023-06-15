import knex from '../../../database';

export default async function handler(req, res) {
    const data = req.body
 let event = await knex('posts').select().from('posts')

 return res.json({data: event})
}