import knex from '../../../database';

export default async function handler(req, res) {

 const comments = await knex.select().table('comments')
 res.status(200).json(comments)
}