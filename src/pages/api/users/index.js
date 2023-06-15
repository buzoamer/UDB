import knex from '../../../database';

export default async function handler(req, res) {

 const users = await knex.select().table('users')
 res.status(200).json(users)
}
