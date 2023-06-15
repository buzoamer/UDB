import knex from '../../../database';

export default async function handler(req, res) {
    const data = req.body
 let comment = await knex('comments').select().from('comments')

 return res.json({data: comment})
}