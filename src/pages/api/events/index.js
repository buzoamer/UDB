import knex from '../../../database';

export default async function handler(req, res) {

 const events = await knex.select().table('posts')
 res.status(200).json(posts)
}