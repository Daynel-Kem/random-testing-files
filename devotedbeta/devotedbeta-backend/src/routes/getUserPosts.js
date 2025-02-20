import { db } from "../database";

export const getUserPostsRoute = {
    method: 'GET',
    path: '/api/users/{userid}/posts',
    handler: async (req, res) => {
        const userId = req.params.userid;

        const {results} = await db.query(
            'SELECT * FROM posts WHERE userid=?',
            [userId]
        );

        return results;
    }
}